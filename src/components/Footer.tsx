
import React from 'react';
import { Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Manthan Desai
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Full-Stack Developer passionate about creating innovative solutions with modern technologies.
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://github.com/manthand23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
            >
              <Github className="text-gray-300 hover:text-white" size={20} />
            </a>
            <a 
              href="mailto:manthandesai23@outlook.com"
              className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
            >
              <Mail className="text-gray-300 hover:text-white" size={20} />
            </a>
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart className="text-red-400" size={16} /> by Manthan Desai
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2025 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
