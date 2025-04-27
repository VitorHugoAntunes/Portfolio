import { motion } from 'framer-motion';

function ContentSection() {
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
              As a developer, I, Vitor Hugo, am driven by innovation and the constant pursuit of more efficient solutions. I have a passion for exploring new technologies, from modern frameworks to best development practices, to create robust and high-performance websites.
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
              Fullstack Development<br />
              JavaScript & TypeScript<br />
              React & Node.js<br />
              React Native<br />
              Next.js<br />
              RESTful APIs<br />
              AWS & Firebase<br />
              PostgreSQL<br />
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
            Currently, I focus on creating scalable and efficient solutions. I enjoy learning and applying new technologies, always focused on building systems that meet user needs and are sustainable in the long term. I aim to deliver clean, maintainable code and contribute to impactful projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentSection;