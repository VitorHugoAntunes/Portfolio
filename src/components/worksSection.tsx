'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import MeuChaDigitalImage from '@/assets/meu-cha-digital.png';
import LoqueiImage from '@/assets/loquei.png';
import ForumPbImage from '@/assets/forum-pb.png';
import DashboardImage from '@/assets/dashboard.png';
import { ArrowRight } from 'lucide-react';
import { getNestedTranslation } from '@/utils/getTranslation'
import { useTranslation } from './translation-provider';

const works = [
  { id: 1, title: 'Meu Chá Digital', category: 'Fullstack', image: MeuChaDigitalImage, slug: 'https://meuchadigital.com/' },
  { id: 2, title: 'Loquei', category: 'Mobile', image: LoqueiImage, slug: 'https://www.linkedin.com/posts/vitor-hugo-antunes-passos-59151018a_loquei-activity-7270036767825612800-FbqB/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACyR8D0Bol5ueu8S1gb5iExaXNttr3nLBJU' },
  { id: 3, title: 'Forum.pb', category: 'Fullstack', image: ForumPbImage, slug: 'https://react-forum-peach.vercel.app/' },
  { id: 4, title: 'Dashboard', category: 'Frontend', image: DashboardImage, slug: 'https://reactjs-dashboard-test.netlify.app' },
];

function WorksSection() {
  const { translations } = useTranslation()

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
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {works.map((work) => (
            <motion.article
              key={work.id}
              role="listitem"
              aria-labelledby={`work-${work.id}-title`}
              className="group"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link
                href={work.slug}
                className="block"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View the project ${work.title}`}
              >
                <div
                  className="overflow-hidden rounded-lg bg-[#f0f0f0] h-64 border border-gray-200 transition-transform duration-300"
                  role="img"
                  aria-labelledby={`work-${work.id}-title`}
                >
                  <Image
                    src={work.image}
                    alt={work.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4 text-center group-hover:text-primary/60 transition-colors duration-300">
                  <h3
                    id={`work-${work.id}-title`}
                    className="text-base font-bold"
                    aria-label={`Project title: ${work.title}`}
                  >
                    {work.title}
                  </h3>
                  <p className="text-sm font-medium">{work.category}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex justify-center">
            <Button size="lg" asChild>
              <Link
                href="https://www.linkedin.com/in/vitor-hugo-antunes-passos-59151018a/details/certifications/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View more projects"
                title={`${getNestedTranslation(translations, 'worksSection.button.title', '')}`}
              >
                <ArrowRight className="mr-2 h-4 w-4" />
                {getNestedTranslation(translations, 'worksSection.button.title', '')}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WorksSection;