
import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-5 left-10 w-20 h-20 bg-blue-500 rounded-full animate-float"></div>
        <div className="absolute bottom-5 right-20 w-16 h-16 bg-blue-400 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-blue-600 rounded-full animate-float animation-delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="mb-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 transform transition-all duration-300 hover:scale-105">
              Manthan Desai
            </h3>
            <p className="text-gray-700 dark:text-gray-300 max-w-md mx-auto">
              Full-Stack Developer passionate about creating innovative solutions with modern technologies.
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8 animate-fade-in animation-delay-500">
            <a 
              href="https://github.com/manthand23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white dark:bg-black rounded-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 border border-gray-200 dark:border-gray-700 transform hover:scale-110 hover:-translate-y-2"
            >
              <Github className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/manthand/"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white dark:bg-black rounded-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 border border-gray-200 dark:border-gray-700 transform hover:scale-110 hover:-translate-y-2"
            >
              <Linkedin className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" size={20} />
            </a>
            <a 
              href="mailto:manthan.d10@gmail.com"
              className="w-12 h-12 bg-white dark:bg-black rounded-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 border border-gray-200 dark:border-gray-700 transform hover:scale-110 hover:-translate-y-2"
            >
              <Mail className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" size={20} />
            </a>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 animate-fade-in animation-delay-1000">
            <p className="text-gray-700 dark:text-gray-300 transform transition-all duration-300 hover:scale-105">
              Made by Manthan Desai
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
              © 2025 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
