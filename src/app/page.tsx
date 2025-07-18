import React from 'react';
import { Github, Linkedin, Mail, School, Briefcase } from 'lucide-react';
// --- Project Data ---
const marqueeProjects = [
  {
    title: 'RYFT',
    description: 'A voice-controlled, audio-based mystery adventure game. I co-designed the game engine, built a custom game editor with Electron, and developed cross-platform apps with React Native, Swift, and Java.',
    tech: ['JavaScript', 'React Native', 'Electron', 'Swift', 'Java', 'NLP'],
    link: 'https://www.ryftgame.com/',
    live: 'https://www.ryftgame.com/',
    image: '/ryftscreenshots.png', // Placeholder, replace with actual image
  },
  {
    title: '1up Events',
    description: 'A two-sided marketplace for event planning, which I architected and built from the ground up. The platform handles real-time vendor availability, dynamic pricing, and automated billing, growing to over $1.2M in revenue in its first year.',
    tech: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'Tailwind', 'Heroku'],
    link: 'https://1upevents.com', // Replace with GitHub or project link
    live: 'https://1upevents.com',
    image: '/1upEventsImage.jpeg', // Placeholder
  },
  {
    title: 'Teampush',
    description: 'A social fitness iOS game where I led product development. A key feature was a novel repetition counting and cheat-prevention algorithm I developed in Swift using mobile motion sensor data.',
    tech: ['iOS', 'Swift', 'Javascript', 'UX'],
    link: '#', // Replace with GitHub or project link
    image: '/teampushscreenshot.png', // Placeholder
  },
];

const careerHighlights = [
  { 
    role: 'Lead R&D and Algorithms', 
    company: 'Lark Technologies',
    period: 'Sept 2012 - May 2014',
    description: 'Co-led a team to develop a wearable fitness tracker with a real-time activity classification model. Also developed a user habit tracking algorithm using Density-Based Clustering to identify patterns and predict behavior.' 
  },
];


// --- Main Page Component ---
export default function App() {
  return (
    <div className="bg-slate-900 text-slate-300 font-sans">
      <div className="min-h-screen container mx-auto p-4 sm:p-6 lg:p-8">
        <main className="max-w-4xl mx-auto">
          
          {/* Header Section */}
          <header className="text-center py-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">
              Alex Lerman
            </h1>
            <p className="text-lg md:text-xl text-teal-400 mb-6">
              Creator & CTO | Building Innovative Platforms & Games
            </p>
            <div className="flex justify-center items-center space-x-5">
              <a href="https://github.com/AlexLerman" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/alex-lerman-6060b732/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="mailto:alexander.a.lerman@gmail.com" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
          </header>

          {/* About Section */}
          <section className="my-16 mt-2">
             <p className="text-center text-slate-400 max-w-2xl mx-auto">
                I&apos;m a developer and leader with experience building webapps, innovative game mechanics, and machine learning algorithms. From architecting marketplaces to developing voice-controlled games, I love building products, tackling complex technical challenges and creating engaging user experiences.
            </p>
          </section>

          {/* Marquee Projects Section */}
          <section>
            <h2 className="text-3xl font-bold text-white pb-2 mb-8 border-b-2 border-teal-500/30">
                Key Projects
            </h2>
            <div className="flex flex-col gap-16">
              {marqueeProjects.map((project, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-teal-500/20 hover:scale-[1.02]">
                  <div className='max-h-[512px] overflow-hidden'>
                    <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}` + project.image} alt={`${project.title} screenshot`} className="w-full h-auto" />
                    </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-teal-400 mb-2">{project.title}</h3>
                    <p className="text-slate-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-700 text-teal-300 text-xs font-semibold rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                        {/* <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-teal-400 transition-colors duration-300">
                          View Code &rarr;
                        </a> */}
                        {project.live && (
                             <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-teal-400 transition-colors duration-300">
                                Live &rarr;
                             </a>
                        )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Career Highlights Section */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-white pb-2 mb-8 border-b-2 border-slate-600/30 flex items-center gap-3">
              <Briefcase size={28} className="text-teal-400" /> Other Projects
            </h2>
            <ul className="space-y-6">
              {careerHighlights.map((job, index) => (
                <li key={index} className="bg-slate-800/50 p-4 rounded-lg">
                    <div className="flex justify-between items-baseline">
                        <h3 className="text-lg text-slate-300 font-medium">{job.role}</h3>
                        <span className="text-sm text-slate-500">{job.period}</span>
                    </div>
                    <p className="text-teal-400 font-semibold mb-2">{job.company}</p>
                    <p className="text-slate-400">{job.description}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Education Section */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-white pb-2 mb-8 border-b-2 border-slate-600/30 flex items-center gap-3">
                <School size={28} className="text-teal-400" /> Education
            </h2>
             <div className="bg-slate-800/50 p-4 rounded-lg">
                <h3 className="text-lg text-slate-300 font-medium">Stanford University</h3>
                <p className="text-teal-400">Bachelor&apos;s in Symbolic Systems</p>
                <p className="text-slate-400 text-sm">Concentration in Neuroscience</p>
             </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="w-full max-w-4xl mx-auto text-center mt-20 py-6 text-slate-500">
          <p>&copy; {new Date().getFullYear()} Alex Lerman.</p>
        </footer>
      </div>
    </div>
  );
}
