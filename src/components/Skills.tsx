
import React from 'react';
import { Code, Database, Cloud, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="text-primary" size={24} />,
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Vite"]
    },
    {
      title: "Backend Development",
      icon: <Database className="text-primary" size={24} />,
      skills: ["Python", "C++", "FastAPI", "Node.js", "RESTful APIs", "PostgreSQL", "MongoDB"]
    },
    {
      title: "AI/ML & Data Science",
      icon: <Brain className="text-primary" size={24} />,
      skills: ["TensorFlow", "XGBoost", "NLP", "CNN", "Pandas", "NumPy", "OpenAI API"]
    },
    {
      title: "DevOps & Tools",
      icon: <Cloud className="text-primary" size={24} />,
      skills: ["Docker", "Git", "GitHub", "Linux", "CI/CD", "AWS"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i}
                    className="bg-muted/50 rounded-lg p-3 text-center border border-border hover:border-primary/50 transition-colors"
                  >
                    <span className="text-foreground font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Additional Expertise</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Problem Solving</h4>
                <p className="text-muted-foreground">Strong analytical thinking and debugging skills with experience in complex system optimization.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Team Collaboration</h4>
                <p className="text-muted-foreground">Experience working in team environments with version control and agile methodologies.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Continuous Learning</h4>
                <p className="text-muted-foreground">Passionate about staying updated with latest technologies and best practices in software development.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
