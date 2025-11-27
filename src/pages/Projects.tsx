
import ProjectCard from '../components/ProjectCard';
import Illustration from '../components/Illustration';

const Projects = () => {
  const projects = [
    { id: 1, title: "Grand Diary Hotel", category: "Interactive Storytelling Design", color: "#e0f2fe", image: "/src/assets/GrandDiaryHotel/1.png" },
    { id: 2, title: "Kurly Hack Festa", category: "Ecommerce Innovation Hackathon", color: "#fce7f3" },
    { id: 3, title: "Movie Jar", category: "A Couple's App", color: "#fef3c7", image: "/src/assets/MovieJar/MJ_0.png" },
    { id: 4, title: "Soo.", category: "Portfolio", color: "#dcfce7" }
  ];

  return (
    <div className="pb-12 md:pb-20 pt-4 md:pt-8">
      <div className="text-center mb-24">
        <div className="w-32 h-32 mx-auto mb-6">
          <Illustration variant="idea" />
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-4">Portfolio</h1>
        <p className="text-xl text-gray-500 font-serif">A collection of experiments and products.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
