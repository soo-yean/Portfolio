import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experience1 from './pages/Experience1';
import Experience2 from './pages/Experience2';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import OutOfWork from './pages/OutOfWork';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-100">
        <Navbar />
        <main className="pt-24 px-6 md:px-12 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience-1" element={<Experience1 />} />
            <Route path="/experience-2" element={<Experience2 />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/out-of-work" element={<OutOfWork />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
