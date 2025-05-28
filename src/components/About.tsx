
import React from 'react';
import { User, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Hello there!</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate Computer Science graduate from the University of Western Ontario, 
                  with a keen interest in full-stack development and AI applications. With over 2 years of experience, 
                  I love solving complex problems through innovative technology solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My experience spans across various technologies including Python, TypeScript, React, 
                  FastAPI, and machine learning frameworks. I'm particularly excited about building 
                  AI-powered applications that leverage natural language processing, computer vision, 
                  and predictive modeling to make a real impact on people's lives.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <User className="text-primary" size={20} />
                  <span>Manthan Desai</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <MapPin className="text-primary" size={20} />
                  <span>Greater Toronto Area, Ontario, Canada</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <Calendar className="text-primary" size={20} />
                  <span>CS Graduate - Spring 2025</span>
                </div>
                
                <div className="pt-4">
                  <h4 className="text-lg font-semibold mb-3">Quick Facts</h4>
                  <ul className="space-y-2 text-muted-foreground">
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
