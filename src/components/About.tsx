import { GraduationCap, Briefcase, Trophy, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      year: '2022',
      degree: 'B.Tech',
      institution: 'NBKR Institute of Science and Technology',
      description: 'Bachelor of Technology'
    },
    {
      year: '2018',
      degree: 'Intermediate',
      institution: 'CVSR Junior College',
      description: '951 Marks (MPC)'
    },
    {
      year: '2016',
      degree: 'SSC',
      institution: 'TMR High School',
      description: '9.2 CGPA'
    }
  ];

  const interests = [
    { icon: '🎮', text: 'Playing Games' },
    { icon: '✍️', text: 'Writing Tech Blogs' },
    { icon: '🌍', text: 'Travelling' }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let Me <span className="bg-gradient-to-r from-lavender to-accent bg-clip-text text-transparent">Introduce</span> Myself
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                I work as a <span className="text-lavender font-semibold">Front-End Developer</span> on TCS iON projects where I've led teams and delivered major websites on time.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                Key projects include <span className="text-accent font-semibold">IIT Kharagpur, IIM Vizag, PSP Program, and IIT Dhanbad</span>. I take full ownership, solve problems creatively, and help others grow while improving code quality.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                I am fluent in classics like <span className="text-soft-pink font-semibold">HTML, CSS, JavaScript</span> and <span className="text-mint font-semibold">React, Node.js</span>.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                My field of interests are building new <span className="text-lavender font-semibold">Web Technologies and Products</span> and also in areas related to <span className="text-accent font-semibold">Modern JavaScript Frameworks</span> like <span className="text-soft-pink font-semibold">React.js and Next.js</span>.
              </p>
            </div>

            {/* Interests */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Apart from coding, some other activities that I love to do!</h3>
              <div className="space-y-3">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center space-x-3 text-foreground">
                    <span className="text-xl">{interest.icon}</span>
                    <span>{interest.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="relative p-6 bg-card rounded-lg border border-border">
              <blockquote className="text-lg italic text-center text-foreground">
                "Strive to build things that make a difference!"
              </blockquote>
              <cite className="block text-center text-muted-foreground mt-2">— Bhargavi</cite>
            </div>
          </div>

          {/* Right Content - Education Timeline */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <GraduationCap className="mr-3 text-lavender" />
              Education Timeline
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-card/50 border-border hover:border-lavender/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-lavender to-accent rounded-full flex items-center justify-center text-white font-bold">
                          {edu.year.slice(-2)}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-xl font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-lavender font-medium">{edu.institution}</p>
                        <p className="text-muted-foreground mt-1">{edu.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;