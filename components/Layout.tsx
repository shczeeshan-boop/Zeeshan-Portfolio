import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, Linkedin, Dribbble, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  const location = useLocation();
  const navigate = useNavigate();

  // Toggle Theme
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', path: '/#work' },
    { name: 'About', path: '/#about' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/#contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    
    if (path.startsWith('/#')) {
      const id = path.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          scrollToSection(id);
        }, 100);
      } else {
        scrollToSection(id);
      }
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800 py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <NavLink 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold tracking-tight text-gray-900 dark:text-white z-50 flex items-center gap-0.5 group"
        >
          mohammad<span className="text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">zeeshan</span>
          <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white opacity-0 group-hover:opacity-100 transition-opacity ml-1"></span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.path)}
              className={`text-sm font-medium transition-all hover:-translate-y-0.5 ${
                location.pathname === link.path 
                  ? 'text-black dark:text-white font-semibold' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}

          <div className="h-6 w-[1px] bg-gray-200 dark:bg-gray-700 mx-2"></div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a
            href="mailto:shczeeshan@gmail.com"
            className="px-6 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 flex items-center gap-2 group"
          >
            Let's Talk 
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle & Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
             {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="z-50 text-gray-900 dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-white dark:bg-gray-950 z-40 flex flex-col items-center justify-center gap-8 md:hidden animate-in fade-in duration-200">
             <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-gray-100 dark:bg-gray-800 rounded-full blur-[60px] opacity-40 pointer-events-none" />
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path)}
                className="text-3xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {link.name}
              </button>
            ))}
             <a
              href="mailto:shczeeshan@gmail.com"
              className="mt-8 px-8 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium text-lg flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all"
            >
              Let's Talk <ArrowRight size={18} />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-gray-50 dark:bg-black/50 border-t border-gray-100 dark:border-gray-800 py-12 mt-auto relative overflow-hidden transition-colors duration-300">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
      <div className="text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Mohammad Zeeshan. All rights reserved.
      </div>
      <div className="flex gap-6">
        <a href="https://linkedin.com/in/zeeshanux" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
          <Linkedin size={18} /> LinkedIn
        </a>
        <a href="https://behance.net/mohammadzeeshanux" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
          <Dribbble size={18} /> Behance
        </a>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 selection:bg-gray-200 dark:selection:bg-gray-700 selection:text-black dark:selection:text-white transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};