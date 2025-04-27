"use client";
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';

const faqs = [
  { 
    question: 'What types of development projects do you specialize in?', 
    answer: 'I specialize in full-stack web development and mobile app development, tailored to meet your specific needs.' 
  },
  { 
    question: 'What technologies do you use for development?', 
    answer: 'I work with a variety of technologies including React, React Native, Node.js, TypeScript, JavaScript, AWS for cloud services, and databases like PostgreSQL to build scalable and efficient applications.' 
  },
  { 
    question: 'How do I start a development project with you?', 
    answer: 'You can start by reaching out via the contact form or email. We\'ll discuss your project\'s goals, timeline, and technical requirements, and I\'ll provide a tailored proposal.' 
  },
  { 
    question: 'Do you provide ongoing support after the project is completed?', 
    answer: 'Yes! I offer post-launch support for bug fixes, updates, and ongoing improvements to ensure the continued success of your application.' 
  },
];

function FAQSection() {
  return (
    <section className="py-12 md:py-16" aria-labelledby="faq-section">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          id="faq-section"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-12 leading-tight"
        >
          Quick Answers
        </motion.h2>

        <div role="region" aria-labelledby="faq-section" className="w-full">
          <Accordion type="single" collapsible className="w-full" aria-live="polite">
            <div className="space-y-4 max-w-3xl">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="w-full"
                  role="listitem"
                >
                  <AccordionItem value={`item-${index}`} className="border-none">
                    <AccordionTrigger 
                      className="flex justify-between items-center w-full py-4 text-left cursor-pointer group hover:no-underline"
                      aria-expanded="false" 
                      aria-controls={`content-${index}`}
                    >
                      <span className="text-sm font-bold">{faq.question}</span>
                    </AccordionTrigger>

                    <AccordionContent 
                      id={`content-${index}`}
                      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                      aria-labelledby={`item-${index}`}
                    >
                      <div className="pb-4 pt-0 text-gray-600">{faq.answer}</div>
                    </AccordionContent>
                  </AccordionItem>

                  {index < faqs.length - 1 && (
                    <Separator className="my-2 bg-gray-200" />
                  )}
                </motion.div>
              ))}
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;