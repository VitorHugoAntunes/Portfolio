import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import hero from "@/assets/hero.png";

import { getNestedTranslation } from '@/utils/get-translation';
import { useTranslation } from "./translation-provider";

const HeroSection = () => {
  const { translations } = useTranslation();

  return (
    <section className="py-2 md:py-10 lg:py-12" aria-labelledby="hero-section">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:gap-8">
          <motion.h1
            id="hero-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[24.7vw] xl:text-[19.56rem] font-bold leading-none tracking-tight whitespace-nowrap text-center lg:text-left"
            aria-label="Introduction to the site"
          >
            {getNestedTranslation(translations, 'heroSection.title', 'Hi there')}
          </motion.h1>
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/2 flex flex-col items-center lg:items-start"
              role="contentinfo"
            >
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium leading-tight pl-2 md:pl-4 text-center lg:text-left" aria-label="Subheading">
                {getNestedTranslation(translations, 'heroSection.subtitle', "I'm Vitor Hugo Antunes")}
              </h2>
              <div className="flex gap-3 md:gap-4 mt-4 md:mt-6 justify-center lg:justify-start pl-2 md:pl-4">
                <Button
                  asChild
                  size="lg"
                  aria-label={getNestedTranslation(translations, 'heroSection.buttons.titles.viewProjects', 'View my projects')}
                  title={getNestedTranslation(translations, 'heroSection.buttons.titles.viewProjects', 'View my projects')}
                >
                  <Link href="#works">{getNestedTranslation(translations, 'heroSection.buttons.viewProjects', 'View my projects')}</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  aria-label={getNestedTranslation(translations, 'heroSection.buttons.titles.cv', 'Download my CV')}
                  title={getNestedTranslation(translations, 'heroSection.buttons.titles.cv', 'Download my CV')}
                >
                  <Link href="/Vitor_Hugo_Antunes_Desenvolvedor_Frontend.pdf" target="_blank" download>
                    <Download className="mr-2 h-4 w-4" />
                    {getNestedTranslation(translations, 'heroSection.buttons.cv', 'Download my CV')}
                  </Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:w-1/2"
            >
              <div
                className="bg-[#eeeeee] rounded-lg mt-4 lg:-mt-36 border border-gray-200 hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg"
                role="figure"
                aria-labelledby="hero-image"
              >
                <Image
                  src={hero}
                  alt={getNestedTranslation(translations, 'heroSection.heroImage.alt', 'Vitor Hugo Antunes - Frontend Developer.')}
                  width={560}
                  height={588}
                  layout="responsive"
                  className="w-full h-full rounded-lg object-cover"
                  aria-labelledby="hero-image"
                  title={getNestedTranslation(translations, 'heroSection.heroImage.title', 'Vitor Hugo Antunes - Frontend Developer.')}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;