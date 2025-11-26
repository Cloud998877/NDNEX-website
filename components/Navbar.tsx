import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Experience', path: '/experience' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Custom Image Logo Component
  const NdnexLogo = ({ className }: { className?: string }) => (
    <img 
      src="https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2019/9/2d1sj007Pp_mWri2i3y2wp0djMjSc_gzjp.png?v=202510262320&hash=r&serviceCode=CL"
      alt="NDNEX Logo"
      className={`${className} rounded-md`}
    />
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' 
        : 'bg-white/80 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo area */}
          <Link to="/" className="flex items-center gap-3 group">
             <NdnexLogo className="h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-semibold tracking-tight transition-all duration-300 font-sans ${
                  isActive(link.path)
                    ? 'text-ndnex-orange bg-orange-50/50'
                    : 'text-gray-600 hover:text-ndnex-dark hover:bg-gray-50/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="ml-4 pl-5 pr-4 py-2.5 bg-ndnex-dark text-white rounded-full text-sm font-bold hover:bg-ndnex-dark-light transition-all duration-300 shadow-lg shadow-ndnex-dark/20 hover:shadow-ndnex-dark/30 flex items-center gap-1 group tracking-wide font-sans"
            >
              Contact Us
              <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ndnex-dark hover:text-ndnex-orange focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-bold transition-colors font-sans ${
                  isActive(link.path)
                    ? 'bg-orange-50 text-ndnex-orange'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-ndnex-orange'
                }`}
              >
                {link.name}
              </Link>
            ))}
             <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block mt-4 px-4 py-3 rounded-xl text-base font-bold bg-ndnex-dark text-white text-center font-sans"
              >
                Contact Us
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
