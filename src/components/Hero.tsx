
import React, { useEffect, useState } from 'react';
import { Github, Mail, Code, Linkedin } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Full-Stack Developer & CS Graduate';
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 px-6">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            Hi, I'm <span className="text-primary">Manthan</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground h-8">
            {text}<span className="animate-pulse">|</span>
          </p>
        </div>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          CS graduate from the University of Western Ontario passionate about building innovative solutions 
          with modern technologies. I love creating applications that solve real-world problems.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <Code size={20} />
            View My Work
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-border text-foreground px-8 py-4 rounded-lg hover:bg-accent transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
        
        <div className="flex gap-6 justify-center">
          <a href="https://github.com/manthand23" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/manthand/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="mailto:manthan.d10@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
