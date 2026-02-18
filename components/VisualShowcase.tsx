import React from 'react';
import { motion } from 'framer-motion';
import { Star, Play, Bookmark, Grid } from 'lucide-react';

export const VisualShowcase = () => {
  const avatars = [
    { name: 'You', img: 'https://i.pravatar.cc/150?u=1' },
    { name: 'Claire', img: 'https://i.pravatar.cc/150?u=2' },
    { name: 'Irma', img: 'https://i.pravatar.cc/150?u=3' },
    { name: 'Jane', img: 'https://i.pravatar.cc/150?u=4' },
    { name: 'Wandy', img: 'https://i.pravatar.cc/150?u=5' },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-white dark:bg-gray-950">
      {/* Background glow to match the reference */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[400px] bg-purple-50 dark:bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 no-scrollbar overflow-x-auto lg:overflow-visible pb-10 lg:pb-0">
          
          {/* Left Card (Partially Visible) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden xl:block min-w-[300px] h-[420px] rounded-[40px] bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 border border-white/40 dark:border-white/5 shadow-2xl overflow-hidden relative group"
          >
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md">
              <Star size={18} className="text-orange-400 fill-orange-400" />
            </div>
            <img src="https://picsum.photos/400/600?random=201" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Detail 1" />
            <div className="absolute bottom-8 left-8">
              <h4 className="text-white text-2xl font-bold tracking-tight drop-shadow-md">Square Glass</h4>
            </div>
          </motion.div>

          {/* Side Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="min-w-[300px] h-[480px] rounded-[40px] bg-blue-50/30 dark:bg-gray-900/40 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-xl overflow-hidden relative group"
          >
            <div className="p-6 flex items-center gap-3">
               <img src="https://i.pravatar.cc/150?u=rich" className="w-8 h-8 rounded-full" />
               <span className="text-xs font-bold dark:text-gray-300">Richards</span>
               <div className="ml-auto w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm">
                <Star size={14} className="text-orange-400 fill-orange-400" />
              </div>
            </div>
            <img src="https://picsum.photos/400/600?random=202" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Detail 2" />
            <div className="absolute bottom-8 left-8">
              <h4 className="text-white text-2xl font-bold tracking-tight drop-shadow-md">Square Glass</h4>
            </div>
          </motion.div>

          {/* CENTRAL MOBILE MOCKUP */}
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            className="min-w-[340px] md:min-w-[380px] h-[720px] bg-white dark:bg-black rounded-[60px] border-[12px] border-gray-900 dark:border-gray-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] relative overflow-hidden flex flex-col transition-all duration-300 ring-1 ring-white/10"
          >
            {/* Dynamic Island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-full z-20 flex items-center justify-center" />

            {/* Mobile Content */}
            <div className="flex-1 p-6 pt-16 flex flex-col bg-white dark:bg-gray-950">
              {/* Header Toggles */}
              <div className="flex justify-between items-center mb-10">
                <div className="flex bg-gray-100 dark:bg-white/10 p-1 rounded-full">
                  <button className="px-5 py-2 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full text-xs font-bold shadow-sm">Overview</button>
                  <button className="px-5 py-2 text-gray-500 dark:text-gray-400 text-xs font-bold">Demo</button>
                </div>
                <div className="w-10 h-10 bg-gray-50 dark:bg-white/10 rounded-xl flex items-center justify-center">
                  <Grid size={18} className="text-gray-900 dark:text-white" />
                </div>
              </div>

              {/* Avatars Row */}
              <div className="flex justify-between mb-10">
                {avatars.map((av, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <img src={av.img} className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 shadow-sm" alt={av.name} />
                    <span className="text-[10px] font-bold text-gray-400">{av.name}</span>
                  </div>
                ))}
              </div>

              {/* Main App Card */}
              <div className="flex-1 rounded-[40px] bg-gradient-to-br from-purple-100 to-indigo-50 dark:from-purple-900/40 dark:to-indigo-900/20 p-6 relative overflow-hidden">
                 <div className="flex items-center gap-3 bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-full px-4 py-2 w-max mb-6">
                    <img src="https://i.pravatar.cc/150?u=ed" className="w-6 h-6 rounded-full" />
                    <span className="text-[10px] font-bold dark:text-white">Edward</span>
                 </div>
                 
                 <div className="absolute top-6 right-6 w-10 h-10 bg-white/80 dark:bg-white/10 backdrop-blur rounded-full flex items-center justify-center">
                    <Bookmark size={16} className="text-gray-900 dark:text-white" />
                 </div>

                 {/* Center Element Mockup */}
                 <div className="mt-4 w-full h-32 bg-gray-900 dark:bg-black rounded-3xl flex items-center justify-center relative shadow-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent" />
                    <div className="w-3/4 h-8 bg-white/10 rounded-full blur-md animate-pulse" />
                 </div>

                 <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-2">Discover & Share Visual Stories</h3>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">v1.2.0 • March 2024</p>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Side Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="min-w-[300px] h-[480px] rounded-[40px] bg-purple-50/30 dark:bg-purple-900/10 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-xl overflow-hidden relative group"
          >
             <div className="p-6 flex items-center gap-3">
               <img src="https://i.pravatar.cc/150?u=rob" className="w-8 h-8 rounded-full" />
               <span className="text-xs font-bold dark:text-gray-300">Robert</span>
               <div className="ml-auto w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm">
                <Star size={14} className="text-gray-200" />
              </div>
            </div>
            <img src="https://picsum.photos/400/600?random=203" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Detail 3" />
            <div className="absolute bottom-8 left-8">
              <h4 className="text-white text-2xl font-bold tracking-tight drop-shadow-md">Aerospace Of Aluminum</h4>
            </div>
            <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                <Play size={20} className="fill-white" />
            </div>
          </motion.div>

          {/* Right Card (Partially Visible) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden xl:block min-w-[300px] h-[420px] rounded-[40px] bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border border-white/40 dark:border-white/5 shadow-2xl overflow-hidden relative group"
          >
            <div className="p-6 flex items-center gap-3">
               <img src="https://i.pravatar.cc/150?u=ric2" className="w-8 h-8 rounded-full" />
               <span className="text-xs font-bold dark:text-gray-300">Richards</span>
            </div>
            <img src="https://picsum.photos/400/600?random=204" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Detail 4" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};