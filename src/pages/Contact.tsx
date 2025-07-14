import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground page-transition gradient-bg">
      <Navigation />
      
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape w-28 h-28 top-24 left-12" style={{ animationDelay: '0.5s' }}></div>
        <div className="floating-shape w-16 h-16 top-1/2 right-16" style={{ animationDelay: '2.5s' }}></div>
        <div className="floating-shape w-20 h-20 bottom-24 left-1/3" style={{ animationDelay: '4.5s' }}></div>
        <div className="particle top-1/5 right-1/4" style={{ animationDelay: '1.5s' }}></div>
        <div className="particle bottom-1/5 left-1/6" style={{ animationDelay: '3.5s' }}></div>
        <div className="particle top-2/3 right-1/6" style={{ animationDelay: '5.5s' }}></div>
      </div>
      
      <div className="pt-20 relative z-10">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;