
import React from 'react';
import { Github, Calendar, Clock } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Property Recommendation System",
      description: "A notebook-integrated real estate tool that uses NLP, regex-based parsing, and an XGBoost model to recommend top comparable properties. Built with FastAPI, React, and Docker, the app features a clean UI and modular backend, offering accurate, responsive predictions.",
      highlights: [
        "Improved data parsing accuracy by 32% through pandas-powered preprocessing",
        "Built responsive TypeScript interfaces with optimized state management",
        "Deployed Dockerized backend and React frontend services",
        "Standardized infrastructure using modular RESTful API design"
      ],
      tech: ["Python", "FastAPI", "TypeScript", "React", "XGBoost", "Docker", "NLP"],
      github: "https://github.com/manthand23/property-recommendation-system",
      duration: "~40 hours",
      date: "May 2025"
    },
    {
      title: "AI Voice Assistant",
      description: "A real-time voice assistant powered by GPT-3.5 and ElevenLabs, delivering lifelike TTS and natural language understanding. Built in TypeScript with Tailwind CSS and Vite for snappy performance across devices.",
      highlights: [
        "Reduced command response latency by ~30% through efficient frontend optimization",
        "Handled 150+ unique user queries in testing scenarios",
        "Increased user engagement by 40% with ElevenLabs TTS integration",
        "Maintained 60 FPS rendering across devices with Tailwind CSS"
      ],
      tech: ["TypeScript", "Vite", "OpenAI GPT-3.5", "ElevenLabs API", "Tailwind CSS"],
      github: "https://github.com/manthand23/aivoiceassistant",
      duration: "~30 hours",
      date: "May 2025"
    },
    {
      title: "WorkoutAI",
      description: "An AI-powered React app that gives real-time feedback on workout form using a TensorFlow CNN. Created to aid people improve their form and prevent injuries.",
      highlights: [
        "Achieved 92% accuracy in exercise posture detection using TensorFlow CNN",
        "Trained model on 200+ diverse exercise images",
        "Delivered real-time feedback to improve workout safety",
        "Built foundation for mobile application deployment"
      ],
      tech: ["React", "TensorFlow", "CNN", "Image Classification", "JavaScript"],
      github: "https://github.com/manthand23/Workout-AI",
      duration: "~24 hours",
      date: "Aug 2023"
    },
    {
      title: "Anesthesia Pocket Guide",
      description: "A mobile learning app designed to support medical students with visual guides, quizzes, and key anesthesiology calculators.",
      highlights: [
        "Conducted user study with 30 medical students showing 15% efficiency improvement",
        "Integrated 5 essential medical calculators for anesthetists",
        "Enhanced learning through interactive quizzes and visual aids",
        "Increased workplace productivity through streamlined access to information"
      ],
      tech: ["Mobile Development", "UI/UX Design", "Educational Technology"],
      github: "https://github.com/manthand23/anesthesia-app",
      duration: "~70 hours",
      date: "Nov 2022 - Mar 2023"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full animate-float"></div>
        <div className="absolute top-1/2 right-20 w-20 h-20 bg-blue-400 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-blue-600 rounded-full animate-float animation-delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6 animate-slide-up animation-delay-500"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in animation-delay-1000">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development, 
            AI/ML, and problem-solving.
          </p>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] hover:border-blue-300 dark:hover:border-blue-500 animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 transform transition-all duration-300 hover:scale-105">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white dark:bg-black rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 hover:rotate-12 border border-gray-200 dark:border-gray-700"
                      >
                        <Github size={20} className="text-gray-700 dark:text-gray-300" />
                      </a>
                    </div>
                  </div>
                  
                  {project.date && (
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1 animate-bounce-in animation-delay-500">
                        <Calendar size={16} />
                        <span>{project.date}</span>
                      </div>
                      {project.duration && (
                        <div className="flex items-center gap-1 animate-bounce-in animation-delay-1000">
                          <Clock size={16} />
                          <span>{project.duration}</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {project.highlights && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-black dark:text-white">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start gap-2 transform transition-all duration-300 hover:translate-x-2">
                            <span className="text-blue-600 dark:text-blue-400 mt-1 animate-pulse">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="lg:w-80">
                  <div className="bg-white dark:bg-black rounded-xl p-6 border border-gray-200 dark:border-gray-800 transform transition-all duration-300 hover:scale-105">
                    <h4 className="text-lg font-semibold mb-4 text-black dark:text-white">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm border border-blue-200 dark:border-blue-700 transform transition-all duration-300 hover:scale-110 hover:bg-blue-200 dark:hover:bg-blue-800/50"
                          style={{ animationDelay: `${i * 0.1}s` }}
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
