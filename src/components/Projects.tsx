
import React from 'react';
import { Github, ExternalLink, Calendar, Clock } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Property Recommendation System",
      description: "Developed a Python-based, notebook-integrated app to recommend top real estate comparables using NLP, structured data pipelines, and custom-trained XGBoost models. Standardized infrastructure using modular RESTful API design in Python (FastAPI), and deployed Dockerized backend and TypeScript-based React frontend services.",
      highlights: [
        "Improved data parsing accuracy by 32% through pandas-powered preprocessing",
        "Built responsive TypeScript interfaces with optimized state management",
        "Deployed Dockerized backend and React frontend services"
      ],
      tech: ["Python", "FastAPI", "TypeScript", "React", "XGBoost", "Docker", "NLP"],
      github: "https://github.com/manthand23/property-recommendation-system",
      duration: "~40 hours",
      date: "May 2025",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Voice Assistant",
      description: "Engineered a real-time AI voice assistant using TypeScript and Vite, reducing command response latency by ~30% through efficient frontend bundling and optimization. Deployed OpenAI's GPT-3.5 API to enable natural language understanding, successfully handling over 150+ unique user queries across testing scenarios.",
      highlights: [
        "Reduced command response latency by ~30%",
        "Handled 150+ unique user queries in testing",
        "Increased user engagement by 40% with ElevenLabs TTS",
        "Maintained 60 FPS rendering across devices"
      ],
      tech: ["TypeScript", "Vite", "OpenAI GPT-3.5", "ElevenLabs API", "Tailwind CSS"],
      github: "https://github.com/manthand23/aivoiceassistant",
      duration: "~30 hours",
      date: "May 2025",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "WorkoutAI",
      description: "Created an AI-powered workout trainer as a React web application to provide real-time feedback on exercise form using image classification. Trained a TensorFlow CNN model on a dataset of 200+ images, achieving 92% accuracy in detecting exercise posture.",
      highlights: [
        "Achieved 92% accuracy in exercise posture detection",
        "Trained CNN model on 200+ images dataset",
        "Delivered real-time feedback to users",
        "Built foundation for mobile application"
      ],
      tech: ["React", "TensorFlow", "CNN", "Image Classification", "JavaScript"],
      github: "https://github.com/manthand23/Workout-AI",
      duration: "~24 hours",
      date: "Aug 2023",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Anesthesia Pocket Guide",
      description: "Developed a mobile application to help medical students grasp key anesthesia concepts through visuals and interactive quizzes. Integrated 5 essential calculators frequently used by anesthetists, increasing workplace productivity.",
      highlights: [
        "Conducted user study with 30 medical students",
        "Demonstrated 15% efficiency improvement in tasks",
        "Integrated 5 essential medical calculators",
        "Enhanced learning through interactive quizzes"
      ],
      tech: ["Mobile Development", "UI/UX Design", "Educational Technology"],
      github: "https://github.com/manthand23/anesthesia-app",
      duration: "~70 hours",
      date: "Nov 2022 - Mar 2023",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "RMP AI Assistant",
      description: "An intelligent assistant built to help students navigate Rate My Professor data more effectively, providing insights and recommendations based on professor ratings and reviews.",
      tech: ["AI/ML", "Data Analysis", "Python", "Natural Language Processing"],
      github: "https://github.com/manthand23/rmp-ai-assistant",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development, 
            AI/ML, and problem-solving.
          </p>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-700 p-8 hover:border-slate-600 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                      >
                        <Github size={20} className="text-gray-300" />
                      </a>
                    </div>
                  </div>
                  
                  {project.date && (
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{project.date}</span>
                      </div>
                      {project.duration && (
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{project.duration}</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {project.highlights && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-gray-300 flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="lg:w-80">
                  <div className="bg-slate-800/50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm border border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
