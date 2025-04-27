import Link from "next/link";
import { Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 md:py-16 bg-background" role="contentinfo">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col gap-12">
          
          <section aria-labelledby="contact-section">
            <h2 id="contact-section" className="sr-only">Contato</h2>
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div>
                <a 
                  href="mailto:vitor4ntunes@gmail.com" 
                  target="_blank" 
                  className="text-2xl md:text-5xl font-bold block mt-4 hover:text-gray-600" 
                  title="Enviar um e-mail para Vitor Antunes"
                  aria-label="Envie um e-mail para Vitor Antunes"
                >
                  vitor4ntunes@gmail.com
                </a>
                <a 
                  href="tel:+5581973220877" 
                  target="_blank" 
                  className="text-2xl md:text-5xl font-bold block mt-4 hover:text-gray-600" 
                  title="Ligar para (+55) 11 97322-0877"
                  aria-label="Ligue para (+55) 11 97322-0877"
                >
                  (+55) 11 97322-0877
                </a>
              </div>
            </div>
          </section>

          <section aria-labelledby="location-section">
            <h2 id="location-section" className="sr-only">Localização</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-lg">
                  São Paulo, Brazil<br />
                  2025
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="legal-section">
            <h2 id="legal-section" className="sr-only">Direitos Autorais e Links Legais</h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex gap-4">
                <p className="text-sm">
                  © 2025 • Vitor Antunes.
                </p>
                <p className="text-sm hidden md:block">|</p>
                <Link 
                  href="https://github.com/VitorHugoAntunes/Portfolio/blob/main/LICENSE"
                  target="_blank" 
                  className="text-sm underline hover:text-gray-600" 
                  title="Licença de uso do site"
                  aria-label="Leia sobre a licença de uso do site"
                >
                  License
                </Link>
              </div>

              <div className="flex gap-4 items-end" role="navigation" aria-label="Links de redes sociais de Vitor Antunes">
                <Link 
                  href="https://github.com/VitorHugoAntunes" 
                  target="_blank" 
                  className="hover:text-gray-600" 
                  title="Visite o perfil de Vitor Antunes no GitHub"
                  aria-label="Visite o GitHub de Vitor Antunes"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/vitor-hugo-antunes-passos-59151018a/" 
                  target="_blank" 
                  className="hover:text-gray-600" 
                  title="Visite o perfil de Vitor Antunes no LinkedIn"
                  aria-label="Visite o LinkedIn de Vitor Antunes"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link 
                  href="#top" 
                  className="text-sm underline hover:text-gray-600" 
                  title="Voltar ao topo da página"
                  aria-label="Voltar para o topo da página"
                >
                  Back to Top
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