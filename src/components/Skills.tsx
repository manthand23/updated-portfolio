
import React from 'react';
import { Code, Database, Cloud, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="text-blue-600 dark:text-blue-400" size={24} />,
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Vite"]
    },
    {
      title: "Backend Development",
      icon: <Database className="text-blue-600 dark:text-blue-400" size={24} />,
      skills: ["Python", "C++", "FastAPI", "Node.js", "RESTful APIs", "PostgreSQL", "MongoDB"]
    },
    {
      title: "AI/ML & Data Science",
      icon: <Brain className="text-blue-600 dark:text-blue-400" size={24} />,
      skills: ["TensorFlow", "XGBoost", "NLP", "CNN", "Pandas", "NumPy", "OpenAI API"]
    },
    {
      title: "DevOps & Tools",
      icon: <Cloud className="text-blue-600 dark:text-blue-400" size={24} />,
      skills: ["Docker", "Git", "GitHub", "Linux", "CI/CD", "AWS"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 hover:rotate-12">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transform hover:scale-105"
                  >
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in animation-delay-2000">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Additional Expertise</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="transform transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">Problem Solving</h4>
                <p className="text-gray-600 dark:text-gray-300">Strong analytical thinking and debugging skills with experience in complex system optimization.</p>
              </div>
              <div className="transform transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">Team Collaboration</h4>
                <p className="text-gray-600 dark:text-gray-300">Experience working in team environments with version control and agile methodologies.</p>
              </div>
              <div className="transform transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">Continuous Learning</h4>
                <p className="text-gray-600 dark:text-gray-300">Passionate about staying updated with latest technologies and best practices in software development.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
