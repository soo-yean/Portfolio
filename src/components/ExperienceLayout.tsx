import Illustration from "./Illustration";

interface Project {
  name: string;
  details: string;
}

interface ExperienceLayoutProps {
  companyName: string;
  role: string;
  location: string;
  description: string;
  projects: Project[];
  illustrationVariant?: "happy" | "curious" | "working" | "idea" | "laptop";
  period: string;
}

const ExperienceLayout: React.FC<ExperienceLayoutProps> = ({
  companyName,
  role,
  location,
  description,
  projects,
  illustrationVariant = "working",
  period,
}) => {
  return (
    <div className="max-w-4xl mx-auto pb-12 md:pb-20 pt-4 md:pt-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-8 items-start mb-20">
        <div className="w-24 h-24 shrink-0">
          <Illustration variant={illustrationVariant} />
        </div>
        <div>
          <h1 className="text-5xl font-black mb-2">{companyName}</h1>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-gray-500 font-bold uppercase tracking-wider text-sm mb-2">
            <span>{role}</span>
            <span className="hidden md:inline">•</span>
            <span>{location}</span>
          </div>
          <div className="text-gray-400 font-bold uppercase tracking-wider text-sm">
            {period}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
        <div className="text-gray-400 font-bold uppercase tracking-widest text-sm sticky top-32 h-fit">
          Key Contributions
        </div>
        <div className="text-xl leading-relaxed font-serif text-gray-800">
          <p>{description}</p>
        </div>
      </div>

      <div className="w-full h-px bg-gray-100 my-16"></div>

      {/* Projects */}
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
        <div className="text-gray-400 font-bold uppercase tracking-widest text-sm sticky top-32 h-fit">
          Key Clients/Projects
        </div>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-600 leading-relaxed font-serif">
                {project.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceLayout;
