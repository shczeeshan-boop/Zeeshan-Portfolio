import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* ElevenLabs-style Soft Mesh Gradients - Responsive Light/Dark */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[120px] opacity-60 dark:opacity-40 animate-pulse transition-colors duration-500" style={{ animationDuration: '8s' }} />
      <div className="absolute top-[20%] right-[-5%] w-[35vw] h-[35vw] bg-purple-100 dark:bg-purple-900/20 rounded-full blur-[120px] opacity-60 dark:opacity-40 animate-pulse transition-colors duration-500" style={{ animationDuration: '10s', animationDelay: '1s' }} />
      <div className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] bg-orange-50 dark:bg-indigo-900/20 rounded-full blur-[100px] opacity-70 dark:opacity-30 animate-pulse transition-colors duration-500" style={{ animationDuration: '12s', animationDelay: '2s' }} />

      <div className="max-w-5xl mx-auto text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-8 text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-100 uppercase bg-white/50 dark:bg-white/10 backdrop-blur-md border border-gray-200/50 dark:border-white/10 rounded-full shadow-sm"
          >
            User Experience Designer
          </motion.span>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gray-900 dark:text-white mb-8 leading-[1.1]">
            Creating better <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-500 pb-2">
              digital experiences.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Hi, I'm <span className="font-semibold text-gray-900 dark:text-white">Mohammad Zeeshan</span>. I blend creative design thinking with data-driven insights to craft intuitive products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button 
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-black dark:hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-lg shadow-gray-200/50 dark:shadow-none"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white dark:bg-transparent text-gray-900 dark:text-white border border-gray-200 dark:border-white/20 rounded-full font-medium hover:border-gray-300 dark:hover:border-white/40 hover:bg-gray-50 dark:hover:bg-white/5 hover:scale-105 transition-all duration-300 shadow-sm"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-600 animate-bounce"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};