
import React from 'react';
import { User, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Hello there!</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm a passionate Computer Science graduate from the University of Western Ontario, 
                  with a keen interest in full-stack development and AI applications. I love solving 
                  complex problems through innovative technology solutions.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My experience spans across various technologies including Python, TypeScript, React, 
                  FastAPI, and machine learning frameworks. I'm particularly excited about building 
                  applications that make a real impact on people's lives.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-300">
                  <User className="text-blue-400" size={20} />
                  <span>Manthan Desai</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <MapPin className="text-blue-400" size={20} />
                  <span>London, Ontario, Canada</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <Calendar className="text-blue-400" size={20} />
                  <span>CS Graduate - Spring 2025</span>
                </div>
                
                <div className="pt-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Quick Facts</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Full-stack developer with AI/ML experience</li>
                    <li>• 5+ major projects completed</li>
                    <li>• Passionate about clean, efficient code</li>
                    <li>• Always learning new technologies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
