import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 py-6 px-8 md:px-12 flex justify-between items-center">
      {/* Left Links */}
      <div className="hidden md:flex gap-8">
        <Link 
          to="/projects" 
          className={`text-sm font-bold tracking-widest uppercase hover:text-gray-500 transition-colors ${isActive('/projects') ? 'text-black' : 'text-gray-400'}`}
        >
          Work
        </Link>
        <Link 
          to="/experience-1" 
          className={`text-sm font-bold tracking-widest uppercase hover:text-gray-500 transition-colors ${isActive('/experience-1') || isActive('/experience-2') ? 'text-black' : 'text-gray-400'}`}
        >
          Experience
        </Link>
      </div>

      {/* Center Logo */}
      <Link to="/" className="text-2xl font-black tracking-tighter hover:scale-110 transition-transform">
        SOO<span className="text-blue-400">.</span>
      </Link>

      {/* Right Links */}
      <div className="hidden md:flex gap-8">
        <Link 
          to="/out-of-work" 
          className={`text-sm font-bold tracking-widest uppercase hover:text-gray-500 transition-colors ${isActive('/out-of-work') ? 'text-black' : 'text-gray-400'}`}
        >
          Life
        </Link>
        <a 
          href="mailto:hello@soo.com" 
          className="text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-black transition-colors"
        >
          Hi!
        </a>
      </div>

      {/* Mobile Menu Button (Placeholder) */}
      <button className="md:hidden text-2xl">☰</button>
    </nav>
  );
};

export default Navbar;
