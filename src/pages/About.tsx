import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import aboutGirlIllustration from '@/assets/about-girl-illustration.png';

const About = () => {
    const technicalSkills = [
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' }
  ];


  const tools = [
    { name: 'Windows', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' },
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Postman', logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Chrome', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
  ];

  const generateContributionChart = () => {
    const totalDays = 365;
    const weeksToShow = 52;
    const daysInWeek = 7;
    
    return Array.from({ length: weeksToShow }, (_, weekIndex) => (
      <div key={weekIndex} className="flex flex-col gap-0.5">
        {Array.from({ length: daysInWeek }, (_, dayIndex) => {
          const intensity = Math.floor(Math.random() * 5);
          const getIntensityClass = (level: number) => {
            switch (level) {
              case 0: return 'bg-secondary/30';
              case 1: return 'bg-lavender/30';
              case 2: return 'bg-lavender/50';
              case 3: return 'bg-lavender/70';
              case 4: return 'bg-lavender';
              default: return 'bg-secondary/30';
            }
          };
          
          return (
            <div
              key={`${weekIndex}-${dayIndex}`}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm ${getIntensityClass(intensity)} transition-all hover:scale-110`}
            />
          );
        })}
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-background text-foreground page-transition gradient-bg">
      <Navigation />
      
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape w-32 h-32 top-20 left-10" style={{ animationDelay: '0s' }}></div>
        <div className="floating-shape w-20 h-20 top-1/2 right-20" style={{ animationDelay: '2s' }}></div>
        <div className="floating-shape w-16 h-16 bottom-32 left-1/4" style={{ animationDelay: '4s' }}></div>
        <div className="particle top-1/4 right-1/3" style={{ animationDelay: '1s' }}></div>
        <div className="particle bottom-1/4 left-1/5" style={{ animationDelay: '3s' }}></div>
        <div className="particle top-3/4 right-1/5" style={{ animationDelay: '5s' }}></div>
      </div>
      
      <div className="pt-20 relative z-10">
        {/* About Me Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Know Who <span className="bg-gradient-to-r from-lavender to-accent bg-clip-text text-transparent">I'M</span>
              </h1>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6 animate-slide-in">
                <p className="text-lg text-foreground leading-relaxed">
                  I am working as a <span className="text-lavender font-semibold">Front-End Developer</span> on TCS iON projects where I have managed teams and delivered project websites on time.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  Some of my achieved websites for TCS iON include <span className="text-accent font-semibold">IIT Kharagpur, IIM Vizag, PSP Program, and IIT Dhanbad</span>.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  I take full ownership of my work, dig deep into projects to ensure timely delivery, and love learning new things. My adaptability, problem-solving skills, and ability to help others make me stand out.
                </p>
              </div>

              <div className="flex justify-center lg:justify-end animate-fade-in">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-soft-pink/20 to-lavender/20 blur-3xl opacity-30"></div>
                  <img
                    src={aboutGirlIllustration}
                    alt="Bhargavi Ega - Professional Developer"
                    className="relative z-10 max-w-full h-auto animate-float"
                    style={{ filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.3))' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skillset */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Professional <span className="bg-gradient-to-r from-lavender to-accent bg-clip-text text-transparent">Skillset</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {technicalSkills.map((skill, index) => (
                <Card key={index} className="bg-card/50 border-border hover:border-lavender/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lavender/20 group hover-glow">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <img 
                        src={skill.logo} 
                        alt={skill.name} 
                        className="w-12 h-12 group-hover:scale-110 transition-transform"
                        style={{
                          filter: skill.name === 'Express' ? 'brightness(0) invert(1)' : 'none'
                        }}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-lavender transition-colors">
                      {skill.name}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tools I Use */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Tools I <span className="bg-gradient-to-r from-lavender to-accent bg-clip-text text-transparent">Use</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
              {tools.map((tool, index) => (
                <Card key={index} className="bg-card/50 border-border hover:border-lavender/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lavender/20 group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-3 flex justify-center">
                      <img src={tool.logo} alt={tool.name} className="w-10 h-10 group-hover:scale-110 transition-transform filter invert" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-lavender transition-colors">
                      {tool.name}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Days I Code */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Days I <span className="bg-gradient-to-r from-lavender to-accent bg-clip-text text-transparent">Code</span>
              </h2>
            </div>

            <div className="max-w-full mx-auto">
              <div className="bg-card/30 p-4 sm:p-6 rounded-lg border border-border">
                <div className="flex gap-0.5 sm:gap-1 justify-center items-center flex-wrap max-w-full">
                  {generateContributionChart()}
                </div>
                <div className="flex justify-between items-center mt-4 text-xs sm:text-sm text-muted-foreground">
                  <span>365 contributions in the last year</span>
                  <div className="flex items-center gap-2">
                    <span>Less</span>
                    <div className="flex gap-1">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-secondary/30 rounded-sm"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-lavender/30 rounded-sm"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-lavender/50 rounded-sm"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-lavender/70 rounded-sm"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-lavender rounded-sm"></div>
                    </div>
                    <span>More</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;