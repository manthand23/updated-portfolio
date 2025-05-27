
import React from 'react';
import { Github, Calendar, Clock } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Property Recommendation System",
      description: "Built to solve the challenge of finding accurate real estate comparables, this system transforms raw property data into intelligent recommendations. The application tackles the problem of time-consuming manual property analysis by automating the process through advanced machine learning techniques.",
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
      description: "Developed to address the need for hands-free computing interaction, this voice assistant provides natural language command processing with minimal latency. The project solves accessibility challenges while demonstrating the potential of conversational AI interfaces.",
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
      description: "Created to address the problem of improper exercise form and lack of real-time feedback during workouts. This AI-powered trainer uses computer vision to analyze exercise posture and provide immediate corrections, helping users avoid injuries and maximize workout effectiveness.",
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
      description: "Designed to solve the challenge of quick access to critical anesthesia information in medical settings. This mobile application addresses the need for portable, reliable medical reference tools that can improve efficiency and accuracy in healthcare environments.",
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
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development, 
            AI/ML, and problem-solving.
          </p>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-primary">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                      >
                        <Github size={20} className="text-muted-foreground" />
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
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {project.highlights && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="lg:w-80">
                  <div className="bg-muted/50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-background text-foreground rounded-full text-sm border border-border"
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
