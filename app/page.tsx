import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

import portfolioData from '@/app/data/portfolio.json';

import Divider from './components/ui/Divider';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Header />
      
      <Hero personalInfo={portfolioData.personalInfo} />
      
      <div className="space-y-4 pb-20">
        <About personalInfo={portfolioData.personalInfo} />
        <Divider />
        <Experience experiences={portfolioData.experience} />
        <Divider />
        <Skills skills={portfolioData.skills} />
        <Divider />
        <Education education={portfolioData.education} />
        <Divider />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
