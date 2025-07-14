import Navigation from '@/components/Navigation';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground page-transition gradient-bg">
      <Navigation />
      
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape w-24 h-24 top-32 right-16" style={{ animationDelay: '1s' }}></div>
        <div className="floating-shape w-18 h-18 top-2/3 left-16" style={{ animationDelay: '3s' }}></div>
        <div className="floating-shape w-12 h-12 bottom-20 right-1/3" style={{ animationDelay: '5s' }}></div>
        <div className="particle top-1/3 left-1/4" style={{ animationDelay: '2s' }}></div>
        <div className="particle bottom-1/3 right-1/4" style={{ animationDelay: '4s' }}></div>
        <div className="particle top-1/4 right-1/6" style={{ animationDelay: '6s' }}></div>
      </div>
      
      <div className="pt-20 relative z-10">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;