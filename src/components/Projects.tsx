
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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development, 
            AI/ML, and problem-solving.
          </p>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:border-blue-300 dark:hover:border-blue-500"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                      >
                        <Github size={20} className="text-slate-600 dark:text-slate-300" />
                      </a>
                    </div>
                  </div>
                  
                  {project.date && (
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
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
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {project.highlights && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-200">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-slate-600 dark:text-slate-300 flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="lg:w-80">
                  <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-4 text-slate-800 dark:text-slate-200">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm border border-blue-200 dark:border-blue-700"
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
