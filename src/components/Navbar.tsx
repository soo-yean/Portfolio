import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (


    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Header Bar */}
      <div className="relative z-50 bg-white/90 backdrop-blur-sm py-6 px-8 md:px-12 flex justify-between items-center">
        {/* Left Links (Desktop) */}
        <div className="hidden md:flex gap-8">
          <Link 
            to="/experience" 
            className={`text-sm font-bold tracking-widest uppercase hover:text-gray-500 transition-colors ${isActive('/experience') ? 'text-black' : 'text-gray-400'}`}
          >
            Work
          </Link>
          <Link 
            to="/projects" 
            className={`text-sm font-bold tracking-widest uppercase hover:text-gray-500 transition-colors ${isActive('/projects') ? 'text-black' : 'text-gray-400'}`}
          >
            Projects
          </Link>
        </div>

        {/* Center Logo */}
        <Link to="/" className="text-2xl font-black tracking-tighter hover:scale-110 transition-transform">
          SOO<span className="text-blue-400">.</span>
        </Link>

        {/* Right Links (Desktop) */}
        <div className="hidden md:flex gap-8">
          <Link 
            to="/out-of-work" 
            className={`text-sm font-bold tracking-widest uppercase hover:text-gray-500 transition-colors ${isActive('/out-of-work') ? 'text-black' : 'text-gray-400'}`}
          >
            Life
          </Link>
          <Link 
            to="/connect" 
            className={`text-sm font-bold tracking-widest uppercase hover:text-black transition-colors ${isActive('/connect') ? 'text-black' : 'text-gray-400'}`}
          >
            Connect
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl w-8 h-8 flex items-center justify-center cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block w-full h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white/5 backdrop-blur-xl z-40 pt-24 transition-all duration-500 ease-in-out md:hidden flex flex-col items-center ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-10 pointer-events-none'}`}>
        <div className="flex flex-col gap-8 text-center w-full px-8 overflow-y-auto max-h-[calc(100vh-6rem)]">
          <Link 
            to="/experience" 
            className={`text-xl font-bold tracking-widest uppercase hover:text-blue-500 transition-all duration-300 ${isActive('/experience') ? 'text-blue-600' : 'text-gray-400'}`}
          >
            Work
          </Link>
          <Link 
            to="/projects" 
            className={`text-xl font-bold tracking-widest uppercase hover:text-blue-500 transition-all duration-300 ${isActive('/projects') ? 'text-blue-600' : 'text-gray-400'}`}
          >
            Projects
          </Link>
          <Link 
            to="/out-of-work" 
            className={`text-xl font-bold tracking-widest uppercase hover:text-blue-500 transition-all duration-300 ${isActive('/out-of-work') ? 'text-blue-600' : 'text-gray-400'}`}
          >
            Life
          </Link>
          <Link 
            to="/connect" 
            className={`text-xl font-bold tracking-widest uppercase hover:text-blue-500 transition-all duration-300 ${isActive('/connect') ? 'text-blue-600' : 'text-gray-400'}`}
          >
            Connect
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
