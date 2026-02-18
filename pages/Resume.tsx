import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';

export const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const experience = [
    {
      role: "User Experience Designer",
      company: "Digimantra",
      period: "2023 — Present",
      location: "", 
      description: "Working on creating user-centric digital solutions and enhancing user experiences.",
      achievements: [
        "Collaborated with cross-functional teams to design and implement user interfaces.",
        "Conducted user research and usability testing to iterate on designs.",
        "Produced wireframes, prototypes, and high-fidelity mockups."
      ]
    },
    {
      role: "Graphic Designer",
      company: "Hindustan Graphics",
      period: "March 2022 — March 2023",
      location: "",
      description: "Specialize in creating visually captivating designs for banners, posters, flyers, and all printing materials.",
      achievements: [
        "Created designs for banners, posters, flyers, and other marketing collateral.",
        "Proficient in design software to deliver high-quality print materials.",
        "Collaborated with clients to understand their visual requirements."
      ]
    }
  ];

  const education = [
    {
      degree: "Masters of Design (UX/UI)",
      school: "Chitkara University",
      year: "2023 — Present"
    },
    {
      degree: "Bachelors Of Commerce",
      school: "RM College, Saharsa",
      year: "2019 — 2022"
    },
    {
      degree: "Intermediate (Commerce)",
      school: "RM College, Saharsa",
      year: "2017 — 2019"
    }
  ];

  const skills = [
    "Design Thinking", "User Research", "Visual Design", 
    "Collaboration", "Teamwork", "Wireframing", 
    "User Flow", "Design System", "Prototyping", "Testing"
  ];

  const tools = [
    "Figma", "Figjam", "Adobe Photoshop", "After Effects", "Jira", "Wordpress"
  ];

  const achievements = [
    "Sandbox-Design Hackathon - 2024"
  ];

  const certifications = [
    "Design Sprint By Moonraft (UST)",
    "Jira Project Management",
    "Intro To Graphic Design With Photoshop"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 border-b border-gray-100 dark:border-gray-800 pb-12"
        >
          <div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">Mohammad Zeeshan</h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-medium">User Experience Designer</p>
            <div className="flex gap-4 mt-3 text-sm text-gray-500 dark:text-gray-400">
                <span className="hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">shczeeshan@gmail.com</span>
                <span>•</span>
                <span>+91 79037 17017</span>
            </div>
          </div>
          <a
            href="https://linkedin.com/in/zeeshanux" target="_blank" rel="noreferrer"
            className="mt-6 md:mt-0 px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all flex items-center gap-2 shadow-lg shadow-gray-200 dark:shadow-none"
          >
            <Download size={18} />
            LinkedIn Profile
          </a>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-12"
        >
          
          {/* Main Content (Left on Desktop) */}
          <div className="md:col-span-8 space-y-16">
            
            {/* Experience */}
            <section>
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-gray-50 dark:bg-white/10 text-gray-900 dark:text-white rounded-xl">
                  <Briefcase size={22} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h2>
              </motion.div>

              <div className="space-y-12 relative border-l-2 border-gray-100 dark:border-gray-800 ml-5 pl-10 md:pl-12">
                {experience.map((job, index) => (
                  <motion.div key={index} variants={itemVariants} className="relative group">
                    {/* Timeline Dot */}
                    <span className="absolute -left-[46px] md:-left-[54px] top-1.5 h-4 w-4 rounded-full border-4 border-white dark:border-gray-950 bg-gray-300 dark:bg-gray-700 group-hover:bg-black dark:group-hover:bg-white group-hover:scale-125 transition-all shadow-sm" />
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-gray-200 transition-colors">{job.role}</h3>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 font-mono mt-1 sm:mt-0 bg-gray-50 dark:bg-white/5 px-2 py-1 rounded">{job.period}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4 text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-lg">{job.company}</span>
                      {job.location && <><span className="text-gray-300 dark:text-gray-600">•</span><span className="text-sm">{job.location}</span></>}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                      {job.description}
                    </p>

                    <ul className="space-y-2.5">
                      {job.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-600 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
                 <div className="p-2.5 bg-gray-50 dark:bg-white/10 text-gray-900 dark:text-white rounded-xl">
                  <GraduationCap size={22} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
              </motion.div>

              <div className="space-y-8 relative border-l-2 border-gray-100 dark:border-gray-800 ml-5 pl-10 md:pl-12">
                {education.map((edu, index) => (
                   <motion.div key={index} variants={itemVariants} className="relative group">
                    <span className="absolute -left-[46px] md:-left-[54px] top-1.5 h-4 w-4 rounded-full border-4 border-white dark:border-gray-950 bg-gray-300 dark:bg-gray-700 group-hover:bg-black dark:group-hover:bg-white transition-colors shadow-sm" />
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-gray-200 transition-colors">{edu.school}</h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">{edu.degree}</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500 font-mono mt-1">{edu.year}</p>
                  </motion.div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar (Right on Desktop) */}
          <div className="md:col-span-4 space-y-12">
            
            <motion.section variants={itemVariants}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-gray-400 dark:bg-gray-600"></span> Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-lg text-sm text-gray-700 dark:text-gray-300 font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-white transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.section>

             <motion.section variants={itemVariants}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-gray-400 dark:bg-gray-600"></span> Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool} className="px-3 py-1.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-sm text-gray-600 dark:text-gray-400 shadow-sm hover:shadow-md transition-shadow">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6 flex items-center gap-2">
                 <span className="w-8 h-[1px] bg-gray-400 dark:bg-gray-600"></span> Achievements
              </h3>
              <ul className="space-y-4">
                {achievements.map((award, i) => (
                  <li key={i} className="flex gap-3 items-start p-3 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10">
                    <Award size={20} className="text-gray-900 dark:text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">{award}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">Certifications</h3>
              <ul className="space-y-3">
                {certifications.map((cert, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-gray-400 border-l-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white pl-3 transition-colors duration-300">
                    {cert}
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section variants={itemVariants} className="p-8 bg-black dark:bg-white rounded-3xl text-white dark:text-black shadow-xl shadow-gray-200 dark:shadow-none">
              <h3 className="font-bold text-xl mb-2">Hire Me</h3>
              <p className="text-gray-400 dark:text-gray-600 text-sm mb-6">
                Currently available for full-time opportunities and interesting projects.
              </p>
              <a href="mailto:shczeeshan@gmail.com" className="text-sm font-bold bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded-full inline-flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                shczeeshan@gmail.com <ExternalLink size={14} />
              </a>
            </motion.section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};