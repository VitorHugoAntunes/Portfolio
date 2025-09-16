import { getNestedTranslation } from '@/utils/get-translation';
import { motion } from 'framer-motion';
import { useTranslation } from './translation-provider';

function ContentSection() {
  const { translations } = useTranslation()

  const skillKeys = [
    'fullstackDevelopment',
    'javascriptAndTypescript',
    'reactAndNodejs',
    'reactNative',
    'nextjs',
    'restfulApis',
    'cloud',
    'database',
  ];

  return (
    <section id='about-me' className="py-8 md:py-12" aria-labelledby="about-me-title">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            role="article"
            aria-labelledby="developer-description"
          >
            <p
              id="developer-description"
              className="text-lg font-medium leading-relaxed"
              aria-label="Developer introduction"
            >
              {getNestedTranslation(translations, 'aboutSection.introduction', '')}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-right"
            aria-labelledby="skills-title"
          >
            <p
              id="skills-title"
              className="text-2xl font-bold leading-relaxed"
              aria-label="Developer skills"
            >
              {skillKeys.map((key, index) => (
                <span key={key}>
                  {getNestedTranslation(translations, `aboutSection.skills.${key}`, '')}
                  {index < skillKeys.length - 1 && <br />}
                </span>
              ))}
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p
            className="text-lg font-medium leading-relaxed max-w-2xl"
            aria-label="Developer focus"
          >
            {getNestedTranslation(translations, 'aboutSection.description', '')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentSection;