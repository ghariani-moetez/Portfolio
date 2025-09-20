import React, { useState, useRef, useEffect } from 'react';
import project1 from '../images/bank.png';
import project2 from '../images/contact.jpg';
import project3 from '../images/employee.png';
import project4 from '../images/bi.webp';
import ProjectModal from './ProjectModal';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      img: project1,
      title: 'Bank Onboarding App',
      desc: 'A mobile banking onboarding application that digitizes the KYC process using facial recognition and OCR technology, enabling users to securely open accounts without visiting a branch.',
      tech: ['Flutter', 'C#', 'POSTGRESQL','OCR','Face Detection'],
      gradient: 'from-purple-500 to-pink-500',
      link: 'https://github.com/khaled-hamami/Onboarding_BT ',
    },
    {
      img: project2,
      title: 'Contact Manager',
      desc: 'A mobile application built with Java that enables users to manage contacts, perform real-time CRUD operations using Firebase, and utilize geolocation features to map contact addresses.',
      tech: ['Java', 'Firebase', 'Maps API'],
      gradient: 'from-cyan-500 to-blue-500',
      link: 'https://github.com/ghariani-moetez/contact-manager',
    },
    {
      img: project3,
      title: 'Employees management',
      desc: 'A web application to manage employees, built with Angular for the frontend and Spring Boot for the backend. Supports CRUD operations, real-time updates, and secure data storage using a RESTful API.',
      tech: ['Spring Boot', 'API', 'Angular'],
      gradient: 'from-green-500 to-emerald-500',
      link: 'https://github.com/ghariani-moetez/city-explorer',
    },
    {
      img: project4,
      title: 'Real Estate Data Scraper & Visualizer',
      desc: 'A Python-based tool to scrape real estate listings, store them in a MySQL database, and visualize insights using Power BI.',
      tech: ['Python', 'Power BI', 'MySQL'],
      gradient: 'from-yellow-500 to-orange-500',
      link: 'https://github.com/ghariani-moetez/portfolio',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full px-4 py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-neutral-900"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto transition-opacity duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent break-words leading-tight px-2">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${project.gradient} p-1 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-400 hover:scale-[1.03] 
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-opacity duration-1000`}
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="bg-neutral-900 rounded-2xl overflow-hidden flex flex-col h-full">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`}
                  ></div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed flex-1">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-semibold bg-black/30 text-cyan-200 rounded-full border border-cyan-500/20 hover:border-cyan-400 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-3 px-6 bg-gradient-to-r from-slate-800 to-gray-800 hover:from-slate-700 hover:to-gray-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 mt-auto"
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal rendering */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;