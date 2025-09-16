'use client';

import { Button } from '@/components/ui/button';
import { getTranslatedWorks } from '@/data/works';
import type { Work } from '@/types/works';
import { getNestedTranslation } from '@/utils/getTranslation';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from './translation-provider';
import { WorkCard } from './work-card';
import { WorkDetailsModal } from './work-details-modal';

function WorksSection() {
  const { translations } = useTranslation();
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const translatedWorks = getTranslatedWorks(translations);

  const handleViewDetails = (work: Work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const handleModalClose = (open: boolean) => {
    setIsModalOpen(open);
    if (!open) {
      setSelectedWork(null);
    }
  };

  return (
    <section id="works" className="py-12 md:py-16" aria-labelledby="works-section-title">
      <div className="container mx-auto px-4 max-w-7xl">
        <header>
          <motion.h2
            id="works-section-title"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-[2.7rem] md:text-7xl font-bold mb-8 leading-tight"
            aria-label="A developer focused on innovation and user-centric solutions"
          >
            {getNestedTranslation(translations, 'worksSection.title', '')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-lg font-medium mb-12 max-w-2xl leading-relaxed"
          >
            {getNestedTranslation(translations, 'worksSection.subtitle', '')}
          </motion.p>
        </header>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 space-x-8 space-y-12 lg:space-y-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {translatedWorks.map((work) => (
            <WorkCard
              key={work.id}
              work={work}
              onViewDetails={handleViewDetails}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center"
        >
          <Button size="lg" asChild>
            <Link
              href="https://www.linkedin.com/in/vitor-hugo-antunes-passos/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View more projects"
              title={`${getNestedTranslation(translations, 'worksSection.button.title', '')}`}
            >
              <ArrowRight className="mr-2 h-4 w-4" />
              {getNestedTranslation(translations, 'worksSection.button.title', '')}
            </Link>
          </Button>
        </motion.div>
      </div>

      <WorkDetailsModal
        work={selectedWork}
        open={isModalOpen}
        onOpenChange={handleModalClose}
      />
    </section>
  );
}

export default WorksSection;