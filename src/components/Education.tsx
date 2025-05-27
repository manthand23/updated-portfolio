
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="text-white" size={32} />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Computer Science</h3>
                <h4 className="text-xl text-blue-400 font-semibold mb-4">University of Western Ontario</h4>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6 text-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-blue-400" />
                    <span>Graduated Spring 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-blue-400" />
                    <span>London, Ontario, Canada</span>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Comprehensive Computer Science program covering software engineering, algorithms, data structures, 
                  artificial intelligence, machine learning, and database systems. Developed strong foundation in 
                  programming languages, system design, and problem-solving methodologies.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3">Key Coursework</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Data Structures & Algorithms</li>
                      <li>• Software Engineering</li>
                      <li>• Database Management Systems</li>
                      <li>• Machine Learning</li>
                      <li>• Web Technologies</li>
                      <li>• Computer Networks</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3">Achievements</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Completed multiple team projects</li>
                      <li>• Strong focus on practical applications</li>
                      <li>• Developed portfolio of 5+ major projects</li>
                      <li>• Experience with modern development tools</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
              <div className="text-gray-300">Years of Study</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
              <div className="text-gray-300">Major Projects</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">2025</div>
              <div className="text-gray-300">Graduate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
