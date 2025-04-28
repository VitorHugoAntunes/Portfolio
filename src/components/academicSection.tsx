import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import fatecImage from '@/assets/fatec.jpg';
import awsImage from '@/assets/aws.png';
import compassImage from '@/assets/compasso-uol-1024.png';
import rocketSeatImage from '@/assets/rocketseat.jpeg';
import etecImage from '@/assets/etec.jpg';
import { useTranslation } from './translation-provider';
import { getNestedTranslation } from '@/utils/getTranslation'

function AcademicSection() {
  const { translations } = useTranslation()

  const academicAchievements = [
    {
      id: 1,
      title: getNestedTranslation(translations, 'academicSection.education.degrees.technologist.degree', ''),
      description: `
        ${getNestedTranslation(translations, 'academicSection.education.degrees.technologist.institution', '')} • 
        ${getNestedTranslation(translations, 'academicSection.education.degrees.technologist.workload', '')} •
        ${getNestedTranslation(translations, 'academicSection.education.degrees.technologist.year', '')}`,
      image: fatecImage,
    },
    {
      id: 2,
      title: getNestedTranslation(translations, 'academicSection.certifications.aws.title', ''),
      description: `
        ${getNestedTranslation(translations, 'academicSection.certifications.aws.institution', '')} •
        ${getNestedTranslation(translations, 'academicSection.certifications.aws.year', '')}`,
      image: awsImage,
    },
    {
      id: 3,
      title: getNestedTranslation(translations, 'academicSection.certifications.compass.title', ''),
      description: `
        ${getNestedTranslation(translations, 'academicSection.certifications.compass.institution', '')} •
        ${getNestedTranslation(translations, 'academicSection.certifications.compass.workload', '')} •
        ${getNestedTranslation(translations, 'academicSection.certifications.compass.year', '')}`,
      image: compassImage,
    },
    {
      id: 4,
      title: getNestedTranslation(translations, 'academicSection.certifications.rocketseat.title', ''),
      description: `
        ${getNestedTranslation(translations, 'academicSection.certifications.rocketseat.institution', '')} •
        ${getNestedTranslation(translations, 'academicSection.certifications.rocketseat.workload', '')} •
        ${getNestedTranslation(translations, 'academicSection.certifications.rocketseat.year', '')}`,	
      image: rocketSeatImage,
    },
    {
      id: 5,
      title: getNestedTranslation(translations, 'academicSection.education.degrees.technical.degree', ''),
      description: `
        ${getNestedTranslation(translations, 'academicSection.education.degrees.technical.institution', '')} •
        ${getNestedTranslation(translations, 'academicSection.education.degrees.technical.workload', '')} •
        ${getNestedTranslation(translations, 'academicSection.education.degrees.technical.year', '')}`,
      image: etecImage,
    },
  ];

  return (
    <section id="academic" className="py-12 md:py-20" aria-labelledby="academic-section-title">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          id="academic-section-title"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-12 leading-tight"
        >
          <span className="text-primary">
            {getNestedTranslation(translations, 'academicSection.title.span1', '')}
          </span> <br /> {getNestedTranslation(translations, 'academicSection.title.span2', '')}
        </motion.h2>

        <div className="relative flex flex-col gap-12 md:gap-24">
          {academicAchievements.map((item, index) => (
            <div key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className={cn(
                  "flex flex-col md:flex-row items-center gap-10",
                  index % 2 === 1 && "md:flex-row-reverse"
                )}
                role="article"
                aria-labelledby={`achievement-title-${item.id}`}
              >
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className={`relative w-full max-w-[500px] aspect-video overflow-hidden rounded-2xl bg-background ${index === 3 ? "dark:bg-[#9956f6]" : "dark:bg-white"}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      title={item.title}
                      fill
                      className="object-contain transition-transform hover:scale-105"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
                  <h3 id={`achievement-title-${item.id}`} className="text-2xl md:text-3xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground mb-6">{item.description}</p>
                </div>

                {index < academicAchievements.length - 1 && (
                  <Separator className="md:hidden w-full bg-gray-200 my-4" />
                )}
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mt-12"
        >
          <Button size="lg" aria-label="View all certificates" title={`${getNestedTranslation(translations, 'academicSection.button.title', '')}`} asChild>
            <Link href="https://www.linkedin.com/in/vitor-hugo-antunes-passos-59151018a/details/certifications/" target='_blank'>
              <ArrowRight className="mr-2 h-4 w-4" />
              {getNestedTranslation(translations, 'academicSection.button.title', '')}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicSection;