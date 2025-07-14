import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import heroGirlIllustration from '@/assets/hero-girl-illustration.png';

const Hero = () => {
  const navigate = useNavigate();
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Software Developer',
    'Frontend Engineer', 
    'UI/UX Designer',
    'Problem Solver'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  // const handleDownloadCV = () => {
  //   const link = document.createElement('a');
  //   link.href = '/assets/Bhargavi_Ega_Resume.pdf';
  //   link.target = '_blank';
  //   link.download = 'Bhargavi_Ega_Resume.pdf';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Shapes */}
        <div className="floating-shape w-20 h-20 top-20 left-10"></div>
        <div className="floating-shape w-16 h-16 top-40 right-20" style={{ animationDelay: '1s' }}></div>
        <div className="floating-shape w-12 h-12 bottom-32 left-20" style={{ animationDelay: '2s' }}></div>
        <div className="floating-shape w-24 h-24 top-1/2 right-10" style={{ animationDelay: '3s' }}></div>
        <div className="floating-shape w-8 h-8 bottom-20 right-1/3" style={{ animationDelay: '4s' }}></div>
        <div className="floating-shape w-14 h-14 top-1/3 left-1/4" style={{ animationDelay: '5s' }}></div>
        
        {/* Floating Particles */}
        <div className="particle top-1/4 left-1/5" style={{ animationDelay: '0s' }}></div>
        <div className="particle top-3/4 right-1/4" style={{ animationDelay: '2s' }}></div>
        <div className="particle bottom-1/3 left-1/3" style={{ animationDelay: '4s' }}></div>
        <div className="particle top-1/2 right-1/2" style={{ animationDelay: '6s' }}></div>
        <div className="particle bottom-1/4 right-1/5" style={{ animationDelay: '8s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Hi There </span>
                <span className="inline-block animate-wave">👋</span>
                <br />
                <span className="bg-gradient-to-r from-lavender to-accent bg-clip-text text-transparent">
                  I'm Bhargavi Ega
                </span>
              </h1>
              
              <div className="text-xl lg:text-2xl text-muted-foreground">
                <span className="text-lavender font-semibold min-h-[2rem] inline-block">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Passionate about crafting modern, interactive web apps with clean code and creative designs.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/Bhargavi_Ega_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 bg-gradient-to-r from-lavender to-accent hover:scale-105 transition-transform animate-glow"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download mr-2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
                Download CV
              </a>

              {/* <Button
                onClick={handleDownloadCV}
                size="lg"
                className="bg-gradient-to-r from-lavender to-accent hover:scale-105 transition-transform animate-glow"
              >
                <Download size={20} className="mr-2" />
                Download CV
              </Button> */}
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/contact')}
                className="border-lavender text-lavender hover:text-white hover:bg-lavender/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Get in Touch
              </Button>

            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/bhargaviega/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-lavender/20 text-foreground hover:text-lavender transition-all hover:scale-110 cursor-pointer block"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/bhargaviega"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-lavender/20 text-foreground hover:text-lavender transition-all hover:scale-110 cursor-pointer block"
              >
                <Github size={20} />
              </a>
              {/* <a
                href="mailto:bhargaviega022@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-lavender/20 text-foreground hover:text-lavender transition-all hover:scale-110 cursor-pointer block z-50"
                style={{ pointerEvents: 'auto' }}
              >
                <Mail size={20} />
              </a> */}
              <div className="relative z-50">
  <a
    href="mailto:bhargaviega022@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-secondary hover:bg-lavender/20 text-foreground hover:text-lavender transition-all hover:scale-110 cursor-pointer block z-50"
    style={{ pointerEvents: 'auto' }}
  >
    <Mail size={20} />
  </a>
</div>


            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-lavender/20 to-accent/20 blur-3xl opacity-30"></div>
              <img
                src={heroGirlIllustration}
                alt="Bhargavi Ega - Front End Developer"
                className="relative z-10 max-w-full h-auto animate-float"
                style={{ filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.3))' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-lavender" />
      </button>
    </section>
  );
};

export default Hero;