
import React from 'react';
import { User, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Hello there!</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I'm a passionate Computer Science graduate from the University of Western Ontario, 
                  with a keen interest in full-stack development and AI applications. With over 2 years of experience, 
                  I love solving complex problems through innovative technology solutions.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  My experience spans across various technologies including Python, TypeScript, React, 
                  FastAPI, and machine learning frameworks. I'm particularly excited about building 
                  AI-powered applications that leverage natural language processing, computer vision, 
                  and predictive modeling to make a real impact on people's lives.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                  <User className="text-blue-600 dark:text-blue-400" size={20} />
                  <span>Manthan Desai</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                  <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                  <span>Greater Toronto Area, Ontario, Canada</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                  <Calendar className="text-blue-600 dark:text-blue-400" size={20} />
                  <span>CS Graduate - Spring 2025</span>
                </div>
                
                <div className="pt-4">
                  <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Quick Facts</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Full-stack developer with AI/ML experience</li>
                    <li>• 2+ years of development experience</li>
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
