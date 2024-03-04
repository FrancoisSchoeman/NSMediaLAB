import { ContactForm } from "@/components/ContactForm";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  EnvelopeClosedIcon,
  MobileIcon,
  CameraIcon,
  HomeIcon,
  OpenInNewWindowIcon,
} from "@radix-ui/react-icons";

import { ReCaptchaProvider } from "next-recaptcha-v3";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | NS MediaLAB",
  description:
    "Ready to chat? Reach out through our contact form, email, or phone. Let&apos;s make your social media goals a reality together.",
  keywords:
    "social media marketing Stilbaai, Facebook management, Instagram marketing, content creation, social media ads, social media strategy, South African businesses, analytics, affordable social media services",
};

export default function ContactPage() {
  return (
    <ReCaptchaProvider reCaptchaKey="6LcNlogpAAAAANoTgI-aJf47IdQqaX9sN4LqQdaa">
      <div className="grid gap-4 md:grid-cols-2 md:gap-16 my-16 relative w-full h-full">
        <div>
          <div className="mb-6 sm:mb-16">
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Contact Us
            </h1>
            <p className="mt-2 sm:mt-4 mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Ready to chat? Reach out through our contact form, email, or
              phone. Let&apos;s make your social media goals a reality together.
            </p>
          </div>
          <ContactForm />
        </div>
        <div className="">
          <h2 className="mt-16 sm:mt-3 text-3xl font-bold tracking-tighter sm:text-5xl">
            Contact Details
          </h2>

          <p className="mt-2 sm:mt-4 mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            If you have any questions or need assistance, feel free to contact
            us using the details below.
          </p>

          <ul className="my-6 sm:my-16 max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            <li>
              <a
                href="mailto:nadia@nsmedialab.co.za?subject=New Message From NS MediaLAB Website"
                className="flex items-center gap-2 mt-4 mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
              >
                <Badge className="p-2 mr-2">
                  <EnvelopeClosedIcon width={20} height={20} />
                </Badge>
                nadia@nsmedialab.co.za
              </a>
            </li>

            <Separator className="mt-4" />

            <li>
              <a
                href="https://wa.me/27826191100"
                target="_blank"
                className="flex items-center gap-2 mt-4 mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
              >
                <Badge className="p-2 mr-2">
                  <MobileIcon width={20} height={20} />
                </Badge>
                WhatsApp
              </a>
            </li>

            <Separator className="mt-4" />

            <li>
              <a
                href="tel:0826191100"
                className="flex items-center gap-2 mt-4 mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
              >
                <Badge className="p-2 mr-2">
                  <MobileIcon width={20} height={20} />
                </Badge>
                082 619 1100
              </a>
            </li>

            <Separator className="mt-4" />

            <li>
              <span className="flex items-center gap-2 mt-4 mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                <Badge className="p-2 mr-2">
                  <HomeIcon width={20} height={20} />
                </Badge>
                Stilbaai, Western Cape, South Africa
              </span>
            </li>

            <Separator className="mt-4" />

            <li>
              <a
                href="https://nadianphotography.co.za/"
                target="_blank"
                className="flex items-center gap-2 mt-4 mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
              >
                <Badge className="p-2 mr-2">
                  <CameraIcon width={20} height={20} />
                </Badge>
                nadianphotography.co.za <OpenInNewWindowIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </ReCaptchaProvider>
  );
}
