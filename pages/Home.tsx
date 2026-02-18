import React from 'react';
import { Hero } from '../components/Hero';
import { VisualShowcase } from '../components/VisualShowcase';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';

export const Home = () => {
  return (
    <>
      <Hero />
      <VisualShowcase />
      <Projects />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
};