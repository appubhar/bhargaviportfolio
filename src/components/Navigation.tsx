import { useState, useEffect } from 'react';
import { Home, User, Briefcase, FileText, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-lavender to-accent bg-clip-text text-transparent">
              BE.
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-foreground hover:text-lavender transition-colors"
            >
              <Home size={18} />
              <span>Home</span>
            </button>
            <button
              onClick={() => navigate('/about')}
              className="flex items-center space-x-2 text-foreground hover:text-lavender transition-colors"
            >
              <User size={18} />
              <span>About</span>
            </button>
            <button
              onClick={() => navigate('/projects')}
              className="flex items-center space-x-2 text-foreground hover:text-lavender transition-colors"
            >
              <FileText size={18} />
              <span>Projects</span>
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="flex items-center space-x-2 text-foreground hover:text-lavender transition-colors"
            >
              <MessageCircle size={18} />
              <span>Contact</span>
            </button>
          </div>

          {/* Mobile Menu Button - Add later for mobile navigation */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;