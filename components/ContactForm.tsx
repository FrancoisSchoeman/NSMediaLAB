'use client';

import { sendGTMEvent } from '@next/third-parties/google';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { createHash } from 'crypto';

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

import { RotatingSquare } from 'react-loader-spinner';

const formSchema = z.object({
  name: z.string().max(100),
  email: z.string().email(),
  phone: z.string().max(15),
  message: z.string().max(1000),
});

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Import 'executeRecaptcha' using 'useReCaptcha' hook
  const { executeRecaptcha } = useReCaptcha();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    // Generate ReCaptcha token
    const token = await executeRecaptcha('form_submit');

    fetch('https://nsmedialab.co.za/mailer.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
        'g-recaptcha-response': token,
      }),
    })
      .then((response) => response.text())
      .then(() => {
        setIsLoading(false);

        toast({
          title: 'Form submitted!',
          description: 'We will be in touch soon.',
        });

        sendGTMEvent({
          event: 'contact_form_submit',
          user_data: {
            name: values.name,
            email: createHash('sha256').update(values.email).digest('hex'),
            phone: createHash('sha256').update(values.phone).digest('hex'),
          },
        });
      })
      .catch((error) => {
        console.error('Error:', error);

        setIsLoading(false);

        toast({
          title: 'Form submission failed!',
          description: error.message,
        });
      });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 sm:space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
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
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" {...field} required />
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
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="0123456789" {...field} />
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
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="I would like some assistance with..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {isLoading ? (
          <RotatingSquare
            visible={true}
            height="50"
            width="50"
            color="#6d28d9"
            ariaLabel="rotating-square-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : (
          <Button type="submit">Submit</Button>
        )}
      </form>
    </Form>
  );
}
