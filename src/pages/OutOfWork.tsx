import React from 'react';
import Slideshow from '../components/Slideshow';
import Illustration from '../components/Illustration';

const OutOfWork = () => {
  const experiences = [
    {
      title: "Photography",
      description: "Capturing moments.",
      images: ["#e0f2fe", "#f0f9ff", "#bae6fd"]
    },
    {
      title: "Hiking",
      description: "Chasing views.",
      images: ["#dcfce7", "#f0fdf4", "#bbf7d0"]
    }
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="flex flex-col items-center text-center mb-24">
        <div className="w-32 h-32 mb-6">
          <Illustration variant="curious" />
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-4">Life Beyond Code</h1>
        <p className="text-xl text-gray-500 font-serif max-w-xl">
          When I'm not pushing pixels, I'm usually out exploring the world or learning something new.
        </p>
      </div>
      
      <div className="space-y-32">
        {experiences.map((exp, index) => (
          <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-1/2">
              <div className="transform rotate-2 hover:rotate-0 transition-transform duration-500 p-4 bg-white shadow-xl rounded-xl border border-gray-100">
                <Slideshow images={exp.images} />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">{exp.title}</h2>
              <p className="text-gray-600 text-lg font-serif italic">"{exp.description}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutOfWork;
