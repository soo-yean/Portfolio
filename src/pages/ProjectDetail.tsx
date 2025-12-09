import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import ImageWithLoader from "../components/ImageWithLoader";

// Import images
import GDH1 from "../assets/Projects/GrandDiaryHotel/GDH_1.png";
import GDH2 from "../assets/Projects/GrandDiaryHotel/GDH_2.png";
import GDH3 from "../assets/Projects/GrandDiaryHotel/GDH_3.svg";
import GDH4 from "../assets/Projects/GrandDiaryHotel/GDH_4.svg";

import K1 from "../assets/Projects/Kurly/K_1.svg";
import K2 from "../assets/Projects/Kurly/K_2.svg";
import K3 from "../assets/Projects/Kurly/K_3.svg";
import K4 from "../assets/Projects/Kurly/K_4.svg";
import K5 from "../assets/Projects/Kurly/K_5.svg";

import MJ0 from "../assets/Projects/MovieJar/MJ_0.png";
import MJ1 from "../assets/Projects/MovieJar/MJ_1.svg";
import MJ2 from "../assets/Projects/MovieJar/MJ_2.svg";
import MJ3 from "../assets/Projects/MovieJar/MJ_3.svg";

import H1 from "../assets/Projects/HejHaj/H_1.svg";
import H2 from "../assets/Projects/HejHaj/H_2.svg";
import H3 from "../assets/Projects/HejHaj/H_3.svg";

interface ProjectData {
  title: string;
  category: string;
  description: string;
  role: string;
  skills: string[];
  achievement?: string;
  liveDemo?: { title: string; link: string };
  images: string[];
  color: string;
}

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Mock data - Expanded
  const projectData: Record<string, ProjectData> = {
    1: {
      title: "Grand Diary Hotel",
      category: "Interactive Story Game",
      description:
        "A digital experience designed to promote the social app 3LINEDIARY through interactive storytelling. The project blends character creation, narrative design, art direction and technology to deliver an emotionally engaging experience that connects users with the product in a memorable way.",
      role: "Art Director & Story Designer",
      skills: ["HTML", "CSS", "Twine", "Photoshop"],
      achievement:
        "Awarded '최우수 인터랙티브 스토리텔링 작품상(Best Storytelling Award)' at D.CAMP Creative Challenge 2020.",
      images: [GDH1, GDH2, GDH3, GDH4],
      color: "#e0f2fe",
    },
    2: {
      title: "Kurly Hack Festa",
      category: "Ecommerce Innovation Hackathon",
      description:
        "A recommendation engine leveraging review data to boost customer engagement and purchases. Built from scratch in three days through seamless collaboration with three other members.",
      role: "Frontend Developer",
      skills: [
        "React",
        "JavaScript",
        "Emotion",
        "Material UI",
        "Chart.js",
        "Figma",
        "Git",
        "Trello",
      ],
      achievement: "Advanced to the main round out of 156 competing teams.",
      images: [K1, K2, K3, K4, K5],
      color: "#fce7f3",
    },
    3: {
      title: "Movie Jar",
      category: "A Couple's App",
      description:
        "A sweet app for couples to keep a movie list, leave love notes, and manage a shared calendar. Built for my boyfriend and me, it sticks to the features we actually need—nothing extra, just what makes being together a little happier.",
      role: "Full Stack Developer",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Vercel",
      ],
      liveDemo: {
        title: "Movie Jar for Adam and Soo💖",
        link: "https://movie-jar-wheat.vercel.app/",
      },
      images: [MJ0, MJ1, MJ2, MJ3],
      color: "#fef3c7",
    },
    4: {
      title: "HejHaj",
      category: "Automated Language Learning Bot",
      description:
        "An automated message service for Swedish learners. I built this workflow to tackle the hardest part of learning a new language: consistency. This bot automates the habit by delivering one practical, real-life Swedish phrase every morning.",
      role: "Automation Developer",
      skills: ["n8n", "Google AI Studio API", "Telegram API", "JSON"],
      images: [H1, H2, H3],
      color: "#dcfce7",
    },
  };

  const project = projectData[id || "1"];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-white pb-20 relative">
      {/* Close Button */}
      <Link
        to="/projects"
        className="absolute top-6 right-6 md:top-10 md:right-12 z-10 text-sm font-bold uppercase tracking-widest hover:underline"
        // className="absolute top-6 left-6 md:top-10 md:left-12 z-10 text-sm font-bold uppercase tracking-widest hover:underline"
      >
        Close
      </Link>

      {/* Hero Section */}
      <div
        className="w-full bg-gray-50 pt-32 pb-12 md:pt-48 md:pb-24 px-6 md:px-12"
        style={{ backgroundColor: project.color }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-sm md:text-base font-bold uppercase tracking-widest mb-4 opacity-60">
            {project.category}
          </p>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 leading-none max-w-5xl">
            {project.title}
          </h1>

          {/* Main Hero Image */}
          {/* <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl"> */}
          <div className="w-full object-cover rounded-3xl overflow-hidden shadow-2xl">
            <ImageWithLoader
              src={project.images[0]}
              alt={`${project.title} Hero`}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 mb-24">
          {/* Meta Data Column */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                Role
              </h3>
              <p className="text-xl font-bold">{project.role}</p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {project.achievement && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                  Achievement
                </h3>
                <p className="text-lg font-medium text-blue-600">
                  {project.achievement}
                </p>
              </div>
            )}

            {project.liveDemo && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                  Live Demo
                </h3>
                <a
                  href={project.liveDemo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-600 transition-colors font-bold uppercase tracking-widest text-sm"
                >
                  {project.liveDemo.title}
                </a>
              </div>
            )}
          </div>

          {/* Description Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
              About the project
            </h3>
            <p className="text-xl md:text-2xl leading-relaxed font-serif text-gray-800">
              {project.description}
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="space-y-8 md:space-y-16">
          {project.images.slice(1).map((image, index) => (
            <div
              key={index}
              className="w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500"
            >
              <ImageWithLoader
                src={image}
                alt={`${project.title} detail ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>

        {/* Next Project Link */}
        <div className="mt-32 text-center">
          <Link
            to="/projects"
            className="inline-block px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-colors"
          >
            Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
