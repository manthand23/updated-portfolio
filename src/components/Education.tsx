
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Education</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="text-primary" size={32} />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Bachelor of Computer Science</h3>
                <h4 className="text-xl text-primary font-semibold mb-4">University of Western Ontario</h4>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    <span>Graduated Spring 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    <span>London, Ontario, Canada</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Comprehensive Computer Science program covering software engineering, algorithms, data structures, 
                  artificial intelligence, machine learning, and database systems. Developed strong foundation in 
                  programming languages, system design, and problem-solving methodologies.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-semibold mb-3">Key Coursework</h5>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Data Structures & Algorithms</li>
                      <li>• Software Engineering</li>
                      <li>• Database Management Systems</li>
                      <li>• Artificial Intelligence</li>
                      <li>• Operating Systems</li>
                      <li>• Object-Oriented Programming/Design</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold mb-3">Achievements</h5>
                    <ul className="space-y-2 text-muted-foreground">
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
          
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-muted-foreground">Years of Study</div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">2025</div>
              <div className="text-muted-foreground">Graduate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
