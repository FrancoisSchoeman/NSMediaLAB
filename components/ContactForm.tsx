'use client';

import { sendGTMEvent } from '@next/third-parties/google';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { createHash } from 'crypto';
import { useRef } from 'react';

import { useToast } from '@/components/ui/use-toast';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { useReCaptcha } from 'next-recaptcha-v3';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().max(15).optional(),
  message: z.string().min(10, 'Please provide more details').max(1000),
});

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const formStartTracked = useRef(false);

  const { executeRecaptcha } = useReCaptcha();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const trackFormStart = () => {
    if (!formStartTracked.current) {
      formStartTracked.current = true;
      sendGTMEvent({
        event: 'form_field_focus',
        form_name: 'contact_form',
      });
    }
  };

  const trackFieldFocus = (fieldName: string) => {
    sendGTMEvent({
      event: 'form_field_interaction',
      field_name: fieldName,
    });
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    try {
      const token = await executeRecaptcha('form_submit');

      const response = await fetch('https://nsmedialab.co.za/mailer.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: values.name,
          email: values.email,
          phone: values.phone || '',
          message: values.message,
          'g-recaptcha-response': token,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsLoading(false);
      form.reset();

      toast({
        title: 'Message sent successfully!',
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });

      sendGTMEvent({
        event: 'contact_form_submit',
        form_name: 'contact_form',
        user_data: {
          email_hash: createHash('sha256').update(values.email).digest('hex'),
          phone_hash: values.phone
            ? createHash('sha256').update(values.phone).digest('hex')
            : undefined,
        },
      });
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);

      toast({
        title: 'Something went wrong',
        description: 'Please try again or contact  directly via WhatsApp.',
        variant: 'destructive',
      });

      sendGTMEvent({
        event: 'form_error',
        form_name: 'contact_form',
        error_type: 'submission_failed',
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        onFocus={trackFormStart}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name *</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  {...field}
                  onFocus={() => trackFieldFocus('name')}
                  className="h-12"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address *</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  {...field}
                  onFocus={() => trackFieldFocus('email')}
                  className="h-12"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number (Optional)</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="082 123 4567"
                  {...field}
                  onFocus={() => trackFieldFocus('phone')}
                  className="h-12"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How can we help? *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your business and social media goals..."
                  {...field}
                  onFocus={() => trackFieldFocus('message')}
                  className="min-h-[120px] resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full h-12"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          I typically respond within 24 hours. Your information is kept confidential.
        </p>
      </form>
    </Form>
  );
}
