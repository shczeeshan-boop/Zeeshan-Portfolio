import React, { useState } from 'react';
import { Send, Linkedin, Dribbble, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-indigo-50/50 dark:bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-pink-50/50 dark:bg-pink-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Info Side */}
          <div>
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
                Get in Touch
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight text-gray-900 dark:text-white">
                Ready to create <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200 dark:from-gray-500 dark:to-gray-700">something great?</span>
              </h2>
              <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed mb-12 font-light">
                I'm currently available for freelance projects and full-time opportunities. Let's build something amazing together.
              </p>
              
              <div className="space-y-8">
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-600 mb-3">Contact Details</h3>
                    <a href="mailto:shczeeshan@gmail.com" className="text-2xl font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors border-b-2 border-transparent hover:border-indigo-100 dark:hover:border-indigo-900 pb-1 inline-block">
                      shczeeshan@gmail.com
                    </a>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">+91 79037 17017</p>
                </div>
                 <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-600 mb-4">Follow Me</h3>
                    <div className="flex gap-4">
                        {[
                          { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/zeeshanux" },
                          { icon: <Dribbble size={20} />, href: "https://behance.net/mohammadzeeshanux" }
                        ].map((social, i) => (
                           <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                              {social.icon}
                           </a>
                        ))}
                    </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2, duration: 0.5 }}
             className="bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-white/10 shadow-xl shadow-gray-200/50 dark:shadow-none"
          >
            {success ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-indigo-50 dark:bg-white/10 text-indigo-600 dark:text-white rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-300">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8">Thank you for reaching out. I'll get back to you shortly.</p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2 ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-white/20 focus:border-indigo-500 dark:focus:border-white focus:bg-white dark:focus:bg-black transition-all outline-none"
                    placeholder="What's your name?"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2 ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-white/20 focus:border-indigo-500 dark:focus:border-white focus:bg-white dark:focus:bg-black transition-all outline-none"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2 ml-1">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-white/20 focus:border-indigo-500 dark:focus:border-white focus:bg-white dark:focus:bg-black transition-all outline-none resize-none"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl font-bold text-lg hover:bg-black dark:hover:bg-gray-200 hover:shadow-lg hover:shadow-indigo-200/50 dark:hover:shadow-none transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2 group transform hover:-translate-y-1"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};