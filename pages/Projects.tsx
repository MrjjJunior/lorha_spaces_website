import React from 'react';
import { PROJECTS } from '../constants';
import SEO from '../components/SEO';

const Projects: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO 
        title="Project Portfolio | Engineering & Architectural Excellence"
        description="Browse our successful project delivery in municipal roads, retail complexes, and water sanitation systems across South Africa."
      />
      <div className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            A showcase of our commitment to quality, sustainability, and community impact.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 shadow-md aspect-w-16 aspect-h-12">
                <img 
                  src={project.image} 
                  alt={`${project.title} - ${project.category} project by Lorha Spaces`} 
                  className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-widest text-gray-900 rounded-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">{project.title}</h3>
              <p className="text-gray-600 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;