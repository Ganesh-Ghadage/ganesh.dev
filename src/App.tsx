// src/App.tsx
import React from 'react';
import { CoolMode } from './components/ui/Particles';
import { LandingHero } from './components/sections/Hero';
import { ThemeToggle } from './components/ui/theme-toggle';
import './App.css'
import { StackingNavbar } from './components/ui/stacking-navbar';
import { AboutSection } from './components/sections/About';
import { MarqueeStrip } from './components/ui/marquee-strip';
import { Work } from './components/sections/Work';
import { Project } from './components/sections/Project';
import { ShootingStars } from './components/ui/shooting-stars';
import { StarsBackground } from './components/ui/stars-background';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

const App: React.FC = () => {
  return (
    <div className='min-h-screen w-full bg-light-gradient bg-dark-gradient text-primary overflow-x-hidden'>

      <nav className="fixed top-0 w-full p-4 flex justify-between gap-4 z-50">
        <StackingNavbar />
        <ThemeToggle />
      </nav>


      <CoolMode>
        <div>
          <div id="home" className="w-full h-screen flex items-center justify-center">
            <LandingHero />
          </div>

          <div id="about" className="sm:h-[140vh] md:h-[200vh] lg:h-screen flex flex-col">
            <h1 className='text-3xl text-muted pt-4 pl-20'>About Me</h1>
            <AboutSection />
            <MarqueeStrip />
          </div>

          <div id="work" className="h-fit flex flex-col">
            <h1 className='text-3xl text-muted pt-4 pl-20'>Work Experience</h1>
            <Work />
          </div>

          <div id="projects" className="h-[130dvh] md:h-[120dvh] flex flex-col">
            <h1 className='text-3xl text-muted pt-4 pl-20'>Project Showoff</h1>
            <Project />
          </div>

          <div id="contact" className="h-[95vh] flex flex-col mb-20">
            <h1 className='text-3xl text-muted pt-6 pl-20'>Contact</h1>
            <Contact />
          </div>
        </div>
      </CoolMode>
      <ShootingStars />
      <StarsBackground />

        
      <div className='h-10'>
        <Footer />
      </div>

    </div>
  );
};

export default App;
