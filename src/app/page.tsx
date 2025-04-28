'use client';

import ContentSection from "@/components/content";
import CTASection from "@/components/cta";
import FAQSection from "@/components/faq";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import Navbar from "@/components/nav-bar";
import WorksSection from "@/components/worksSection";
import AcademicSection from "@/components/academicSection";
import { useTranslation } from "@/components/translation-provider";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full bg-blue-200 opacity-20 animate-pulse"></div>
        <div className="absolute inset-0 animate-spin rounded-full border-3 border-transparent border-t-blue-500"></div>
      </div>
    </div>
  );
};

export default function Home() {
  const { isLoading, translations } = useTranslation()

  if (isLoading && Object.keys(translations).length === 0) {
    return <LoadingSpinner />
  }

  return (
    <div className="min-h-screen w-full bg-background font-geist px-[4.48%]" role="document">
      <div className="max-w-[1140px] mx-auto">
        <header>
          <Navbar />
        </header>
        <main id="top" role="main">
          <HeroSection />
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
  )
}