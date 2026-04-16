import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProofBar from '@/components/ProofBar';
import ProblemSection from '@/components/ProblemSection';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import PerfectFor from '@/components/PerfectFor';
import Privacy from '@/components/Privacy';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProofBar />
      <ProblemSection />
      <HowItWorks />
      <Features />
      <PerfectFor />
      <Privacy />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
