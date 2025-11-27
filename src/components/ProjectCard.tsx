import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: number;
  title: string;
  category: string;
  color?: string; //tmp
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, category, color, image }) => {
  return (
    <Link to={`/projects/${id}`} className="block group">
      <div 
        className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 transition-transform duration-500 group-hover:-translate-y-2 relative"
        style={{ backgroundColor: color }}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <span className="bg-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">View Project</span>
        </div>
        
        <img 
              src={image} 
              alt={`${title} Image`} 
              className="w-full h-full object-cover transition-all duration-500 group-hover:blur-[2px] group-hover:scale-105"
            />
        {/* <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div> */}
      </div>
      
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-500 transition-colors">{title}</h3>
        <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">{category}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
