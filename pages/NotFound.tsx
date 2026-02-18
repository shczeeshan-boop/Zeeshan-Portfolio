import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-white dark:bg-gray-950 transition-colors duration-300">
      <h1 className="text-9xl font-bold text-gray-100 dark:text-gray-800">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-4 mb-2">Page not found</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-black dark:hover:bg-gray-200 transition-colors flex items-center gap-2"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>
    </div>
  );
};