import React from 'react';
import { motion } from 'framer-motion';
import { skills, tools } from '../data';
import { Search, Layout, Smartphone, Grid, MousePointer, Eye } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Search': <Search size={22} />,
  'Layout': <Layout size={22} />,
  'Smartphone': <Smartphone size={22} />,
  'Grid': <Grid size={22} />,
  'MousePointer': <MousePointer size={22} />,
  'Eye': <Eye size={22} />,
};

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50/50 dark:bg-gray-900/50 relative overflow-hidden transition-colors duration-300">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-100/50 dark:bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Narrative */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              About <span className="text-gray-500 dark:text-gray-500">Me</span>
            </h2>
            <div className="prose prose-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
              <p className="mb-6">
                With <span className="font-semibold text-gray-900 dark:text-white">1 year of experience in graphic design</span>, I am now pursuing my Master of Design at Chitkara University. Shifting from commerce to UX design, I’ve embraced the challenge and excitement of creating better <span className="text-gray-900 dark:text-white font-medium">user experiences</span>.
              </p>
              <p>
                My recent projects include CA CRM and a redesign of the Swayam App. I enjoy working in teams and am always ready to bring fresh ideas to the table. I believe in the power of empathy and continuous learning to solve real user problems.
              </p>
            </div>

             <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-600 mb-4">Toolkit</h3>
                <div className="flex flex-wrap gap-3">
                    {tools.map((tool) => (
                        <span key={tool} className="px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-sm text-gray-700 dark:text-gray-300 font-medium shadow-sm hover:border-gray-400 dark:hover:border-white/30 hover:text-black dark:hover:text-white hover:shadow-md transition-all">
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
          </div>

          {/* Right Column: Skills Grid */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => {
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gray-50 dark:bg-white/10 text-gray-900 dark:text-white group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-colors">
                      {iconMap[skill.icon]}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{skill.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Experienced in {skill.name.toLowerCase()} workflows.
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};