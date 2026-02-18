import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data';

export const Projects = () => {
  return (
    <section id="work" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">
      {/* Subtle background gradient for depth */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-50/50 to-transparent dark:from-white/5 dark:to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
              Selected <span className="text-gray-400 dark:text-gray-600">Work</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg font-light">
              A collection of projects spanning fintech, e-commerce, and healthcare, highlighting my approach to problem-solving.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <Link to={`/project/${project.id}`} className="block h-full">
                {/* Card Container with subtle glow on hover */}
                <div className="relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-white/5 aspect-[4/3] mb-6 shadow-sm group-hover:shadow-2xl group-hover:shadow-indigo-100/50 dark:group-hover:shadow-indigo-900/20 transition-all duration-500 border border-gray-100 dark:border-white/10 group-hover:border-gray-200 dark:group-hover:border-white/20">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-500" />
                  
                  <div className="absolute top-4 right-4 bg-white/95 dark:bg-black/80 backdrop-blur-md p-2.5 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <ArrowUpRight size={20} className="text-black dark:text-white" />
                  </div>
                </div>
                
                <div className="flex flex-col h-full justify-between px-1">
                    <div>
                        <div className="flex justify-between items-start">
                             <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                {project.title}
                            </h3>
                             <span className="text-xs font-mono font-medium text-gray-400 dark:text-gray-500 border border-gray-100 dark:border-gray-800 px-2 py-1 rounded bg-gray-50 dark:bg-white/5">
                                {project.year}
                            </span>
                        </div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1 mb-3">{project.category}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.role.slice(0, 3).map((role) => (
                            <span key={role} className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 px-2.5 py-1 rounded-md">
                                {role}
                            </span>
                        ))}
                    </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};