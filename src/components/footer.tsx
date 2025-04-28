import Link from "next/link";
import { Linkedin, Github } from 'lucide-react';
import { useTranslation } from "./translation-provider";
import { getNestedTranslation } from '@/utils/getTranslation'

function Footer() {
  const { translations } = useTranslation()

  return (
    <footer className="py-12 md:py-16 bg-background" role="contentinfo">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col gap-12">

          <section aria-labelledby="contact-section">
            <h2 id="contact-section" className="sr-only">
              {getNestedTranslation(translations, 'footer.contact', '')}
            </h2>
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div>
                <a
                  href="mailto:vitor4ntunes@gmail.com"
                  className="text-2xl md:text-5xl text-center md:text-left font-bold block mt-4 hover:text-muted-foreground"
                  title={getNestedTranslation(translations, 'footer.socials.email.title', '')}
                  onClick={(event) => {
                    event.preventDefault();
                    window.open('mailto:vitor4ntunes@gmail.com', 'mail');
                  }}
                >
                  vitor4ntunes@gmail.com
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5511973220877"
                  target="_blank"
                  className="text-2xl md:text-5xl text-center md:text-left font-bold block mt-4 hover:text-muted-foreground"
                  title={getNestedTranslation(translations, 'footer.socials.whatsapp.title', '')}
                  aria-label={getNestedTranslation(translations, 'footer.socials.whatsapp.title', '')}
                >
                  (+55) 11 97322-0877
                </a>
              </div>
            </div>
          </section>

          <section aria-labelledby="location-section">
            <h2 id="location-section" className="sr-only">
              {getNestedTranslation(translations, 'footer.location', '')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-lg text-center md:text-left">
                  {getNestedTranslation(translations, 'footer.location', '')}<br />
                  2025
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="legal-section">
            <h2 id="legal-section" className="sr-only">
              {getNestedTranslation(translations, 'footer.legal', '')}
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex gap-4">
                <p className="text-sm">
                  © 2025 • Vitor Antunes.
                </p>
                <p className="text-sm hidden md:block">|</p>
                <Link
                  href="https://github.com/VitorHugoAntunes/Portfolio/blob/main/LICENSE"
                  target="_blank"
                  className="text-sm underline hover:text-muted-foreground"
                  title={getNestedTranslation(translations, 'footer.links.license.title', '')}
                  aria-label={getNestedTranslation(translations, 'footer.links.license.title', '')}
                >
                  {getNestedTranslation(translations, 'footer.links.license.label', '')}
                </Link>
              </div>

              <div className="flex gap-4 items-end" role="navigation" aria-label={getNestedTranslation(translations, 'footer.socials.title', '')}>
                <Link
                  href="https://github.com/VitorHugoAntunes"
                  target="_blank"
                  className="hover:text-muted-foreground"
                  title={getNestedTranslation(translations, 'footer.socials.github.title', '')}
                  aria-label={getNestedTranslation(translations, 'footer.socials.github.title', '')}
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/vitor-hugo-antunes-passos-59151018a/"
                  target="_blank"
                  className="hover:text-muted-foreground"
                  title={getNestedTranslation(translations, 'footer.socials.linkedin.title', '')}
                  aria-label={getNestedTranslation(translations, 'footer.socials.linkedin.title', '')}
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="#top"
                  className="text-sm underline hover:text-muted-foreground"
                  title={getNestedTranslation(translations, 'footer.links.backToTop.title', '')}
                  aria-label={getNestedTranslation(translations, 'footer.links.backToTop.title', '')}
                >
                  {getNestedTranslation(translations, 'footer.links.backToTop.title', '')}
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </footer>
  );
};

export default Footer;