'use client';

import { Button } from '@/components/ui/button';
import type { Work } from '@/types/works';
import { getNestedTranslation } from '@/utils/get-translation';
import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from './translation-provider';

interface WorkCardProps {
  work: Work;
  onViewDetails: (work: Work) => void;
}

export function WorkCard({ work, onViewDetails }: WorkCardProps) {
  const { translations } = useTranslation();

  return (
    <motion.article
      role="listitem"
      aria-labelledby={`work-${work.id}-title`}
      className="group"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="block">
        <div
          className="overflow-hidden rounded-lg bg-[#f0f0f0] h-72 border border-gray-200 transition-transform duration-300"
          role="img"
          aria-labelledby={`work-${work.id}-title`}
        >
          <Image
            src={work.image}
            alt={work.title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            title={work.title}
            priority
            role="img"
            aria-labelledby={`work-${work.id}-title`}
            loading="eager"
          />
        </div>
        <div className="mt-4 text-center">
          <h3
            id={`work-${work.id}-title`}
            className="text-base font-bold mb-1"
            aria-label={`Project title: ${work.title}`}
          >
            {work.title}
          </h3>
          <p className="text-sm font-medium text-muted-foreground mb-3">{work.category}</p>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{work.description}</p>
          <div className="flex gap-2 justify-center">
            <Button variant="outline" size="sm" onClick={() => onViewDetails(work)} className='cursor-pointer' title={getNestedTranslation(translations, 'worksSection.viewDetails', 'Ver Detalhes')}>
              <Eye className="w-4 h-4 mr-2" />
              {getNestedTranslation(translations, 'worksSection.viewDetails', 'Ver Detalhes')}
            </Button>
            <Button variant="default" size="sm" asChild>
              <Link
                href={work.slug}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View the project ${work.title}`}
                title={getNestedTranslation(translations, 'worksSection.viewProject', 'Ver Projeto')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {getNestedTranslation(translations, 'worksSection.viewProject', 'Ver Projeto')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}