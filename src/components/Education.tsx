
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="text-blue-600 dark:text-blue-400">Education</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 animate-fade-in hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02]">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center transform transition-all duration-300 hover:rotate-12 hover:scale-110">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={32} />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Bachelor of Computer Science</h3>
                <h4 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">University of Western Ontario</h4>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-blue-600 dark:text-blue-400" />
                    <span>Graduated Spring 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-blue-600 dark:text-blue-400" />
                    <span>London, Ontario, Canada</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Comprehensive Computer Science program covering software engineering, algorithms, data structures, 
                  artificial intelligence, machine learning, and database systems. Developed strong foundation in 
                  programming languages, system design, and problem-solving methodologies.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <h5 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Key Coursework</h5>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Data Structures & Algorithms</li>
                      <li>• Software Engineering</li>
                      <li>• Database Management Systems</li>
                      <li>• Artificial Intelligence</li>
                      <li>• Operating Systems</li>
                      <li>• Object-Oriented Programming/Design</li>
                    </ul>
                  </div>
                  
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <h5 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Achievements</h5>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Completed multiple team projects</li>
                      <li>• Strong focus on practical applications</li>
                      <li>• Developed comprehensive project portfolio</li>
                      <li>• Experience with modern development tools</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid md:grid-cols-3 gap-6 animate-fade-in animation-delay-2000">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-2">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4</div>
              <div className="text-gray-600 dark:text-gray-300">Years of Study</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-2">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2+</div>
              <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-2">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2025</div>
              <div className="text-gray-600 dark:text-gray-300">Graduate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
