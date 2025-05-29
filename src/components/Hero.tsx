
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-black dark:to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-blue-600/20 rounded-full animate-float animation-delay-2000 blur-xl"></div>
        <div className="absolute top-1/2 left-3/4 w-32 h-32 bg-blue-500/20 rounded-full animate-float animation-delay-1000 blur-xl"></div>
      </div>
      
      <div className="text-center z-10 px-6">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in text-black dark:text-white transform transition-all duration-500 hover:scale-105">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400 gradient-text">Manthan</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 h-8 animate-slide-up animation-delay-500">
            {text}<span className="animate-pulse text-blue-600 dark:text-blue-400">|</span>
          </p>
        </div>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-1000">
          CS graduate from the University of Western Ontario passionate about building innovative solutions 
          with modern technologies. I love creating applications that solve real-world problems.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-bounce-in animation-delay-1500">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 flex items-center gap-2 pulse-glow"
          >
            <Code size={20} />
            View My Work
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
          >
            Get In Touch
          </button>
        </div>
        
        <div className="flex gap-6 justify-center animate-fade-in animation-delay-2000">
          <a href="https://github.com/manthand23" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 hover:rotate-12">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/manthand/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 hover:rotate-12">
            <Linkedin size={24} />
          </a>
          <a href="mailto:manthan.d10@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 hover:rotate-12">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
