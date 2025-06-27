import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import Statistics from '../components/sections/Statistics';
import BackToTop from '../components/sections/BackToTop';
import Newsletter from '../components/sections/Newsletter';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Statistics />
      <Features />
      <Testimonials />
      <Contact />
      <Newsletter />
      <BackToTop />
    </main>
  );
} 