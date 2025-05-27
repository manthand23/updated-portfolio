
import React from 'react';
import { Github, Mail, Heart, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Manthan Desai
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Full-Stack Developer passionate about creating innovative solutions with modern technologies.
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://github.com/manthand23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card rounded-lg flex items-center justify-center hover:bg-muted transition-colors border border-border"
            >
              <Github className="text-muted-foreground hover:text-foreground" size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/manthand/"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card rounded-lg flex items-center justify-center hover:bg-muted transition-colors border border-border"
            >
              <Linkedin className="text-muted-foreground hover:text-foreground" size={20} />
            </a>
            <a 
              href="mailto:manthan.d10@gmail.com"
              className="w-12 h-12 bg-card rounded-lg flex items-center justify-center hover:bg-muted transition-colors border border-border"
            >
              <Mail className="text-muted-foreground hover:text-foreground" size={20} />
            </a>
          </div>
          
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              Made with <Heart className="text-red-400" size={16} /> by Manthan Desai
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              © 2025 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
