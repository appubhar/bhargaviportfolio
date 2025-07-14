import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'IIT Kharagpur',
      description: 'AI & ML Program certification platform with enhanced user interface and seamless learning experience.',
      technologies: ['React.js', 'Node.js', 'JavaScript', 'CSS3'],
      features: [
        'Interactive course modules',
        'Progress tracking system',
        'Assessment portal',
        'Certificate generation'
      ],
      status: 'Live',
      type: 'Enterprise Platform'
    },
    {
      title: 'IIM Vizag',
      description: 'Executive education platform delivering world-class management programs with intuitive design.',
      technologies: ['React.js', 'TypeScript', 'Express.js', 'MongoDB'],
      features: [
        'Course management system',
        'Student dashboard',
        'Assignment submission portal',
        'Real-time notifications'
      ],
      status: 'Live',
      type: 'Educational Platform'
    },
    {
      title: 'PSP Program',
      description: 'Complete assessment-to-placement workflow system for skill development and career advancement.',
      technologies: ['React.js', 'Node.js', 'REST APIs', 'PostgreSQL'],
      features: [
        'Skills assessment engine',
        'Job matching algorithm',
        'Company portal',
        'Placement tracking'
      ],
      status: 'Live',
      type: 'Placement Platform'
    },
    {
      title: 'IIT Dhanbad',
      description: 'Modern educational platform supporting various academic programs and student management.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      features: [
        'Student information system',
        'Faculty management',
        'Academic calendar',
        'Resource management'
      ],
      status: 'Live',
      type: 'Academic Portal'
    },
    {
      title: 'Biometric Attendance System Using Arduino',
      description: 'Developed a fingerprint-based attendance system using Arduino microcontroller to record student attendance securely and accurately.',
      technologies: ['Arduino', 'C++', 'Embedded Systems'],
      features: [
        'Fingerprint recognition',
        'Secure data storage',
        'Real-time attendance tracking',
        'Admin dashboard'
      ],
      status: 'Completed',
      type: 'Academic Project'
    },
    {
      title: 'Electricity Generation Using Footsteps',
      description: 'Designed a system using piezoelectric sensors to harness energy from footsteps, providing an eco-friendly power solution for high-footfall areas.',
      technologies: ['Piezoelectric Sensors', 'IoT', 'Renewable Energy'],
      features: [
        'Energy harvesting',
        'Sensor integration',
        'Power optimization',
        'Environmental monitoring'
      ],
      status: 'Completed',
      type: 'Academic Project'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My Recent <span className="bg-gradient-to-r from-lavender to-accent bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are a few projects I've worked on recently at TCS, delivering high-impact solutions for prestigious institutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card/80 border-border hover:border-lavender/50 transition-all duration-300 hover:shadow-xl group animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                {/* Project Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-1 bg-lavender/20 text-lavender rounded-full">
                          {project.type}
                        </span>
                        <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full">
                          {project.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-lavender transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-3 py-1 bg-secondary text-foreground rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <div className="px-6 pb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <ChevronRight size={14} className="text-lavender mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>

            </Card>
          ))}
        </div>

        {/* Professional Experience Highlight */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-lavender/10 to-accent/10 border-lavender/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Professional Impact</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-lavender mb-2">4+</div>
                  <div className="text-muted-foreground">Major Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <div className="text-muted-foreground">On-Time Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-soft-pink mb-2">2+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;