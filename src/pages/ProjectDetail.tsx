import { useParams, Link } from 'react-router-dom';

interface ProjectData {
  title: string;
  description: string;
  color: string;
}

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data
  const projectData: Record<string, ProjectData> = {
    1: { title: "Neon Dreams", description: "A futuristic web application built with WebGL.", color: "#000" },
    2: { title: "Cyber Space", description: "Immersive VR experience for the web.", color: "#333" },
    3: { title: "Data Flow", description: "Real-time data visualization dashboard.", color: "#666" },
    4: { title: "Sonic Wave", description: "Interactive audio synthesis interface.", color: "#999" }
  };

  const project = projectData[id || '1'] || { title: "Project Not Found", description: "", color: "#000" };

  return (
    <div className="min-h-screen bg-white">
      <Link 
        to="/projects" 
        className="fixed top-8 right-8 z-50 text-sm font-bold uppercase tracking-widest hover:underline"
      >
        Close
      </Link>
      
      <div className="h-[60vh] w-full relative flex items-end p-8 md:p-20 bg-gray-50">
        <div className="absolute inset-0 opacity-10" style={{ background: project.color }}></div>
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter relative z-10 leading-none">
          {project.title}
        </h1>
      </div>

      <div className="max-w-4xl mx-auto p-8 md:p-20">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Description</h3>
            <p className="text-xl font-medium leading-relaxed">
              {project.description}
            </p>
          </div>
          
          <div className="md:w-2/3">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
              Project Imagery Placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
