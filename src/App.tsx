import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Assets from "./pages/Assets";
import Connect from "./pages/Connect";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-100">
        <Navbar />
        <main className="pt-24 px-6 md:px-12 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
