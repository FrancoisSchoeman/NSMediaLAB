 'use client';
 
 import { MessageCircle } from 'lucide-react';
 import { sendGTMEvent } from '@next/third-parties/google';
 
 
 const WHATSAPP_LINK = 'https://wa.me/27826191100';
 
 export default function WhatsAppWidget() {
   const handleClick = () => {
     sendGTMEvent({
      event: 'whatsapp_widget_click'
    });
   };
 
   return (
     <a
       href={WHATSAPP_LINK}
       target="_blank"
       rel="noopener noreferrer"
       onClick={handleClick}
       aria-label="Chat on WhatsApp"
       className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
     >
       <MessageCircle className="h-5 w-5" aria-hidden="true" />
       <span>WhatsApp</span>
     </a>
   );
 }
