"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { getNestedTranslation } from '@/utils/get-translation';
import { motion } from 'framer-motion';
import { useTranslation } from './translation-provider';

function FAQSection() {
  const { translations } = useTranslation()

  const faqs = [
    {
      question: getNestedTranslation(translations, 'faqSection.questions.question1.question', ''),
      answer: getNestedTranslation(translations, 'faqSection.questions.question1.answer', '')
    },
    {
      question: getNestedTranslation(translations, 'faqSection.questions.question2.question', ''),
      answer: getNestedTranslation(translations, 'faqSection.questions.question2.answer', '')
    },
    {
      question: getNestedTranslation(translations, 'faqSection.questions.question3.question', ''),
      answer: getNestedTranslation(translations, 'faqSection.questions.question3.answer', '')
    },
    {
      question: getNestedTranslation(translations, 'faqSection.questions.question4.question', ''),
      answer: getNestedTranslation(translations, 'faqSection.questions.question4.answer', '')
    },
  ];

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
          {getNestedTranslation(translations, 'faqSection.title', '')}
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
                      className="flex justify-between items-center w-full py-4 text-left cursor-pointer group hover:underline"
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
                      <div className="pb-4 pt-0 text-muted-foreground">{faq.answer}</div>
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