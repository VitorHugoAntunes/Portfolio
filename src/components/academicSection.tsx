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

const academicAchievements = [
  {
    id: 1,
    title: 'Technologist Degree in Systems Analysis and Development',
    description: 'Fatec Ipiranga • 2024',
    image: fatecImage,
  },
  {
    id: 2,
    title: 'AWS Certified Cloud Practitioner',
    description: 'Amazon Web Services • 2024',
    image: awsImage,
  },
  {
    id: 3,
    title: 'Front-end Development (React) - AWS Cloud Context',
    description: 'Compass UOL • 400h • 2024',
    image: compassImage,
  },
  {
    id: 4,
    title: 'ReactJS Track Completion',
    description: 'Rocketseat • 50h • 2023',
    image: rocketSeatImage,
  },
  {
    id: 5,
    title: 'Technical Degree in Systems Development',
    description: 'ETEC Mauá • 1200h • 2020',
    image: etecImage,
  },
];

function AcademicSection() {
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
          My <span className="text-primary">Academic Journey</span> <br /> & Milestones
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
                  <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-2xl bg-background">
                    <Image
                      src={item.image}
                      alt={item.title}
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
          <Button size="lg" aria-label="View all certificates" title='View all certificates' asChild>
            <Link href="https://www.linkedin.com/in/vitor-hugo-antunes-passos-59151018a/details/certifications/" target='_blank'>
              <ArrowRight className="mr-2 h-4 w-4" />
              View All Certificates
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicSection;