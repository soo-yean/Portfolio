import ProjectCard from "../components/ProjectCard";
import Illustration from "../components/Illustration";

// Import images
import GDH0 from "../assets/Projects/GrandDiaryHotel/GDH_0.png";
import Kurly0 from "../assets/Projects/Kurly/K_0.svg";
import MovieJar0 from "../assets/Projects/MovieJar/MJ_0.png";
import HejHaj0 from "../assets/Projects/HejHaj/H_0.svg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Grand Diary Hotel",
      category: "Interactive Story Game",
      color: "#e0f2fe",
      image: GDH0,
    },
    {
      id: 2,
      title: "Kurly Hack Festa",
      category: "Ecommerce Innovation Hackathon",
      color: "#fce7f3",
      image: Kurly0,
    },
    {
      id: 3,
      title: "Movie Jar",
      category: "A Couple's App",
      color: "#fef3c7",
      image: MovieJar0,
    },
    {
      id: 4,
      title: "HejHaj",
      category: "Automated Language Learning Bot",
      image: HejHaj0,
      color: "#dcfce7",
    },
  ];

  return (
    <div className="pb-12 md:pb-20 pt-4 md:pt-8">
      <div className="text-center mb-24">
        <div className="w-32 h-32 mx-auto mb-6">
          <Illustration variant="idea" />
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-4">Portfolio</h1>
        <p className="text-xl text-gray-500 font-serif">
          A selection of ideas I’ve turned into code.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
