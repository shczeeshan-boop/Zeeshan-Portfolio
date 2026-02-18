import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Monitor, Users, Layers } from 'lucide-react';
import { projects } from '../data';
import { motion } from 'framer-motion';

export const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <button onClick={() => navigate('/')} className="text-indigo-600 hover:underline">
          Go back home
        </button>
      </div>
    );
  }

  return (
    <article className="pb-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Header */}
      <div className="bg-gray-50 dark:bg-white/5 pt-10 pb-20 border-b border-gray-100 dark:border-white/10">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8 group">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 border-t border-gray-200 dark:border-white/10 pt-8">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">Role</h3>
              <p className="font-medium text-gray-900 dark:text-gray-200">{project.role.join(', ')}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">Timeline</h3>
              <p className="font-medium text-gray-900 dark:text-gray-200 flex items-center gap-2">
                <Clock size={16} /> {project.year}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">Tools</h3>
              <p className="font-medium text-gray-900 dark:text-gray-200">{project.tools.join(', ')}</p>
            </div>
             <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">Impact</h3>
              <p className="font-medium text-indigo-600 dark:text-indigo-400">{project.impact}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 mt-[-4rem]">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10"
        >
          <img src={project.thumbnail} alt="Project Hero" className="w-full h-auto object-cover" />
        </motion.div>

        <div className="max-w-4xl mx-auto mt-20 space-y-24">
          
          {/* Challenge */}
          <section>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white sticky top-24">The Challenge</h2>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </div>
          </section>

          {/* Process Section - Standardized for all projects for this demo */}
          <section>
             <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="md:w-1/3">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white sticky top-24">The Process</h2>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Our approach was iterative and user-centered. We started by conducting stakeholder interviews to align business goals with user needs.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-white/10">
                     <Users className="text-indigo-600 dark:text-indigo-400 mb-3" />
                     <h4 className="font-bold text-gray-900 dark:text-white">Research</h4>
                     <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Competitor analysis & user interviews to identify pain points.</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-white/10">
                     <Layers className="text-indigo-600 dark:text-indigo-400 mb-3" />
                     <h4 className="font-bold text-gray-900 dark:text-white">Wireframing</h4>
                     <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Low-fidelity sketches to establish hierarchy and flow.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Gallery */}
            <div className="space-y-8 mt-12">
              {project.images.map((img, idx) => (
                <div key={idx} className="bg-gray-100 dark:bg-white/5 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10">
                   <img src={img} alt={`Process detail ${idx + 1}`} className="w-full h-auto" />
                </div>
              ))}
            </div>
          </section>

          {/* Solution */}
          <section>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white sticky top-24">The Solution</h2>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.solution}
                </p>
                <div className="mt-8 p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-900/50">
                   <h4 className="font-bold text-indigo-900 dark:text-indigo-300 mb-2">Key Result</h4>
                   <p className="text-indigo-800 dark:text-indigo-200">{project.impact}</p>
                </div>
              </div>
            </div>
          </section>

        </div>
        
        {/* Next Project Navigation */}
        <div className="mt-32 pt-10 border-t border-gray-100 dark:border-white/10 flex justify-between items-center">
             <Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium">Back to Home</Link>
             {/* Simple logic to just loop or go home, in a real app would find next index */}
             <div className="text-gray-300 dark:text-gray-700">|</div> 
             <a href="#top" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Scroll to Top</a>
        </div>
      </div>
    </article>
  );
};