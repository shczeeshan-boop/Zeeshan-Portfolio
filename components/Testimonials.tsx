import React, { useState, useEffect } from 'react';
import { testimonials } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 flex justify-center">
             <div className="p-3 rounded-full bg-white/10 backdrop-blur">
                <Quote size={24} className="text-gray-300" />
             </div>
          </div>
          
          <div className="relative min-h-[300px] flex items-center justify-center text-center">
            <AnimatePresence mode='wait'>
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <p className="text-2xl md:text-4xl font-light leading-tight mb-8 font-serif italic text-gray-100">
                  "{testimonials[current].text}"
                </p>
                <div className="flex flex-col items-center">
                  <img 
                    src={testimonials[current].avatar} 
                    alt={testimonials[current].name} 
                    className="w-14 h-14 rounded-full border-2 border-white/20 mb-3 object-cover grayscale"
                  />
                  <h4 className="text-lg font-bold">{testimonials[current].name}</h4>
                  <p className="text-sm text-gray-400">{testimonials[current].role}, {testimonials[current].company}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <button 
                onClick={prev}
                className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                aria-label="Previous testimonial"
            >
                <ChevronLeft size={20} />
            </button>
            <button 
                onClick={next}
                className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                aria-label="Next testimonial"
            >
                <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};