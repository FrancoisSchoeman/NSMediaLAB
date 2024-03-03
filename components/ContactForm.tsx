"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useToast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useReCaptcha } from "next-recaptcha-v3";

const formSchema = z.object({
  name: z.string().max(100),
  email: z.string().email(),
  phone: z.string().max(15),
  message: z.string().max(1000),
});

export function ContactForm() {
  const { toast } = useToast();

  // Import 'executeRecaptcha' using 'useReCaptcha' hook
  const { executeRecaptcha } = useReCaptcha();

  // TODO: Add reCAPTCHA

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Generate ReCaptcha token
    const token = await executeRecaptcha("form_submit");

    // console.log(values.name);
    // console.log(values.email);
    // console.log(values.phone);
    // console.log(values.message);
    // console.log(token);

    fetch("https://nsmedialab.co.za/mailer.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
        "g-recaptcha-response": token,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        // console.log(data);
        toast({
          title: "Form submitted!",
          description: "We will be in touch soon.",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        toast({
          title: "Form submission failed!",
          description: error,
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
