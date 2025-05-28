
import React from 'react';
import { Github, Mail, Heart, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              Manthan Desai
            </h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto">
              Full-Stack Developer passionate about creating innovative solutions with modern technologies.
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://github.com/manthand23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors border border-slate-200 dark:border-slate-600"
            >
              <Github className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100" size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/manthand/"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors border border-slate-200 dark:border-slate-600"
            >
              <Linkedin className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100" size={20} />
            </a>
            <a 
              href="mailto:manthan.d10@gmail.com"
              className="w-12 h-12 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors border border-slate-200 dark:border-slate-600"
            >
              <Mail className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100" size={20} />
            </a>
          </div>
          
          <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
            <p className="text-slate-600 dark:text-slate-300 flex items-center justify-center gap-2">
              Made with <Heart className="text-red-500" size={16} /> by Manthan Desai
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
              © 2025 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
