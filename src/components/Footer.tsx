import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-lavender to-accent bg-clip-text text-transparent">
                Bhargavi Ega
              </span>
            </div>
            <p className="text-muted-foreground">
              Front-End Developer passionate about creating amazing web experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <a 
                href="/" 
                className="block text-muted-foreground hover:text-lavender transition-colors"
              >
                Home
              </a>
              <a 
                href="/about" 
                className="block text-muted-foreground hover:text-lavender transition-colors"
              >
                About
              </a>
              <a 
                href="/projects" 
                className="block text-muted-foreground hover:text-lavender transition-colors"
              >
                Projects
              </a>
              <a 
                href="/contact" 
                className="block text-muted-foreground hover:text-lavender transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>
            <div className="space-y-2">
              <a 
                href="mailto:bhargaviega022@gmail.com"
                className="block text-muted-foreground hover:text-lavender transition-colors"
              >
                bhargaviega022@gmail.com
              </a>
              <p className="text-muted-foreground">Bengaluru, India</p>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <span>Designed & Developed by Bhargavi Ega</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-muted-foreground">Copyright © {currentYear} BE</span>
            <div className="flex space-x-3">
              <a
                href="https://github.com/bhargaviega"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card hover:bg-lavender/20 text-foreground hover:text-lavender transition-all hover:scale-110"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/bhargaviega"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card hover:bg-lavender/20 text-foreground hover:text-lavender transition-all hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:bhargaviega022@gmail.com"
                className="p-2 rounded-full bg-card hover:bg-lavender/20 text-foreground hover:text-lavender transition-all hover:scale-110"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;