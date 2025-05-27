
import React, { useEffect, useState } from 'react';
import { Github, Mail, Code } from 'lucide-react';

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
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="text-center z-10 px-6">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Manthan</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 h-8">
            {text}<span className="animate-pulse">|</span>
          </p>
        </div>
        
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in">
          CS graduate from the University of Western Ontario passionate about building innovative solutions 
          with modern technologies. I love creating applications that solve real-world problems.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <Code size={20} />
            View My Work
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-gray-600 text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
        
        <div className="flex gap-6 justify-center">
          <a href="https://github.com/manthand23" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="mailto:manthandesai23@outlook.com" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
