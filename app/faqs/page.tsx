'use client';

import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { sendGTMEvent } from '@next/third-parties/google';
import { HelpCircle, MessageCircle } from 'lucide-react';
import bgImage from '@/public/bg-image.webp';

const faqs = [
  {
    question: 'Do I really need social media marketing for my business?',
    answer:
      "In short, yes! South Africans are highly active on social media, with almost 90% using platforms like Facebook and Instagram daily. This presents a massive opportunity to reach your target audience, build brand awareness, and boost sales.",
  },
  {
    question: 'Which platforms should I be on?',
    answer:
      'The best platforms for your business depend on your target audience and industry. We can help you identify the right platforms and develop a tailored strategy to maximize your reach and engagement. Facebook excels at building community, Instagram is visual-driven, and YouTube is perfect for video content.',
  },
  {
    question: 'What kind of content can you create?',
    answer:
      'We create a variety of eye-catching and engaging content tailored to each platform, including engaging posts, stunning photos, reels and stories, high-quality explainer videos, product demos, and behind-the-scenes content.',
  },
  {
    question: "I'm on a tight budget. Can you still help me?",
    answer:
      "Absolutely! We offer flexible packages and transparent pricing to fit your needs and budget. We can also help you optimize your spending and measure your results to ensure you're getting the most bang for your buck.",
  },
  {
    question: 'What kind of results can I expect?',
    answer:
      "Our goal is to help you achieve your specific social media goals, whether it's increasing brand awareness, driving website traffic, generating leads, or boosting sales. We'll provide you with regular reports so you can track your progress and see the impact of our work.",
  },
  {
    question: 'Do you offer paid advertising services?',
    answer:
      "Yes, we can help you create and manage effective paid advertising campaigns on all major platforms. We'll target your ideal audience and deliver compelling ad creatives to maximize your reach and return on investment (ROI).",
  },
  {
    question: 'Do you offer free consultations?',
    answer:
      "Absolutely! We'd love to discuss your social media needs and goals in more detail. Schedule a free consultation today and see how we can help you dominate the South African social media landscape!",
  },
  {
    question: 'How long before I see results?',
    answer:
      'Social media is a long-term game, but you can typically expect to see initial improvements in engagement within the first month. Significant growth in followers and leads usually becomes visible within 3-6 months of consistent effort.',
  },
  {
    question: 'Can I cancel at any time?',
    answer:
      "Yes, we don't believe in lock-in contracts. We want you to stay because you're seeing value, not because you're stuck. You can cancel with 30 days notice.",
  },
];

export default function FAQsPage() {
  const handleFAQClick = (question: string) => {
    sendGTMEvent({
      event: 'faq_expand',
      faq_question: question,
    });
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: 'Frequently Asked Questions | NS MediaLAB',
    description:
      'Discover answers to your questions about social media marketing, our processes, and how to work with NS MediaLAB.',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="min-h-screen bg-white/70 backdrop-blur-[8px] pt-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Hero Section */}
        <section className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
            <div className="text-center max-w-3xl mx-auto">
              <div className="p-3 rounded-full backdrop-blur-xl bg-gradient-to-br from-white/70 to-white/50 border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] text-primary w-fit mx-auto mb-4">
                <HelpCircle className="h-8 w-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Frequently Asked Questions
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                Discover answers to your questions about social media marketing, 
                our processes, and how you can start working with NS MediaLAB.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="glass-card px-6 data-[state=open]:shadow-lg transition-shadow border-0"
                  >
                    <AccordionTrigger
                      onClick={() => handleFAQClick(faq.question)}
                      className="text-left hover:no-underline py-4"
                    >
                      <span className="font-medium text-gray-900 pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/60 via-white/40 to-white/30 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)]">
              <div className="p-3 rounded-full backdrop-blur-xl bg-gradient-to-br from-white/70 to-white/50 border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] text-primary w-fit mx-auto mb-4">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Still Have Questions?
              </h2>
              <p className="mt-4 text-gray-700">
                Can&apos;t find what you&apos;re looking for? Feel free to reach out directly. 
                I&apos;m always happy to help and answer any questions you might have.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <a href="/contact">Contact Me</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://wa.me/27826191100" target="_blank">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
