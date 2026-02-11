"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from '../_data/faqs';

export function FaqSection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4 md:px-8">

        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 border border-gray-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 id="faq-heading" className="text-4xl font-medium mb-3">
            Komitmen Kami untuk Membantu Setiap Langkah Anda
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="w-full aspect-video md:aspect-auto md:h-[500px] overflow-hidden rounded-lg">
            <img src="/community/community0.avif" className="w-full h-full object-cover" alt="Student thinking" />
          </div>

          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
                <AccordionTrigger
                  id={`faq-trigger-${index}`}
                  className="text-lg font-bold text-gray-800 hover:text-eduzin-dark hover:no-underline py-6 cursor-pointer"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  id={`faq-content-${index}`}
                  className="text-gray-600 text-base leading-relaxed"
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
