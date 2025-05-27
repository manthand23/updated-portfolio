
import React from 'react';
import { Code, Database, Cloud, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="text-blue-400" size={24} />,
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Vite"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development",
      icon: <Database className="text-green-400" size={24} />,
      skills: ["Python", "FastAPI", "Node.js", "RESTful APIs", "PostgreSQL", "MongoDB"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "AI/ML & Data Science",
      icon: <Brain className="text-purple-400" size={24} />,
      skills: ["TensorFlow", "XGBoost", "NLP", "CNN", "Pandas", "NumPy", "OpenAI API"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "DevOps & Tools",
      icon: <Cloud className="text-orange-400" size={24} />,
      skills: ["Docker", "Git", "GitHub", "Linux", "CI/CD", "AWS"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i}
                    className="bg-slate-800/50 rounded-lg p-3 text-center border border-slate-700 hover:border-slate-600 transition-colors"
                  >
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Additional Expertise</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Problem Solving</h4>
                <p className="text-gray-300">Strong analytical thinking and debugging skills with experience in complex system optimization.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-3">Team Collaboration</h4>
                <p className="text-gray-300">Experience working in team environments with version control and agile methodologies.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-3">Continuous Learning</h4>
                <p className="text-gray-300">Passionate about staying updated with latest technologies and best practices in software development.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
