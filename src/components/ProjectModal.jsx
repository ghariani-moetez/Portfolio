import React from 'react';
import BankOnboardingDetails from './project-details/BankOnboardingDetails';
import ContactManagerDetails from './project-details/ContactManagerDetails';
import EmployeesManagement from './project-details/EmployeesManagement';
import DataScraperVisualizer from './project-details/DataScraperVisualizer';

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const renderDetails = () => {
    switch (project.title) {
      case 'Bank Onboarding App':
        return <BankOnboardingDetails />;
      case 'Contact Manager':
        return <ContactManagerDetails />;
      case 'Employees management':
        return <EmployeesManagement />;
      case 'Real Estate Data Scraper & Visualizer':
        return <DataScraperVisualizer />;
      default:
        return null;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-br from-gray-900 via-blue-900/50 to-purple-900/50 backdrop-blur-md rounded-2xl max-w-2xl w-full p-8 relative border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 overflow-y-auto max-h-[90vh] animate-modal-slide"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-red-500/20 hover:bg-red-500/40 text-red-400 hover:text-red-300 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 transform hover:scale-110 hover:rotate-90 z-10"
        >
          ×
        </button>

        <div className="relative z-10">
          {/* Image */}
          <div className="relative overflow-hidden rounded-xl mb-6">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`}
            ></div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-gray-300 mb-6 text-base leading-relaxed">
            {project.desc}
          </p>

          {/* Extra Details */}
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20 mb-6">
            {renderDetails()}
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h3 className="text-xl text-white font-semibold mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50 text-cyan-300 text-sm rounded-full hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 transform hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modal-slide {
          from { opacity: 0; transform: translateY(-50px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-modal-slide {
          animation: modal-slide 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}

export default ProjectModal;
// This component renders a modal for displaying project details.
