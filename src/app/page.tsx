'use client';

import ContentSection from "@/components/content";
import CTASection from "@/components/cta";
import FAQSection from "@/components/faq";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import Navbar from "@/components/nav-bar";
import WorksSection from "@/components/worksSection";
import AcademicSection from "@/components/academicSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-black font-geist px-[4.48%]" role="document">
      <div className="max-w-[1140px] mx-auto">
        <header>
          <Navbar />
        </header>

        <main id="top" role="main">
          <HeroSection />

          {/* Seção com título invisível para leitores de tela */}
          <section aria-labelledby="content-section">
            <h2 id="content-section" className="sr-only">Content Section</h2>
            <ContentSection />
          </section>

          <section aria-labelledby="academic-section">
            <h2 id="academic-section" className="sr-only">Academic Section</h2>
            <AcademicSection />
          </section>

          <section aria-labelledby="works-section">
            <h2 id="works-section" className="sr-only">Works Section</h2>
            <WorksSection />
          </section>

          <section aria-labelledby="faq-section">
            <h2 id="faq-section" className="sr-only">FAQ Section</h2>
            <FAQSection />
          </section>

          <section aria-labelledby="cta-section">
            <h2 id="cta-section" className="sr-only">Call to Action</h2>
            <CTASection />
          </section>
        </main>

        <footer role="contentinfo">
          <Footer />
        </footer>
      </div>
    </div>
  );
}