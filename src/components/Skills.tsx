import { Code, Palette, Server, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code className="text-lavender" size={24} />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'TypeScript', 'Bootstrap']
    },
    {
      title: 'Backend',
      icon: <Server className="text-accent" size={24} />,
      skills: ['Node.js', 'Express.js', 'Python', 'EJS', 'REST APIs']
    },
    {
      title: 'Tools & Platforms',
      icon: <Database className="text-soft-pink" size={24} />,
      skills: ['Git', 'VS Code', 'Figma', 'MongoDB', 'PostgreSQL']
    },
    {
      title: 'Soft Skills',
      icon: <Palette className="text-mint" size={24} />,
      skills: ['Team Leadership', 'Problem Solving', 'Fast Learning', 'Communication']
    }
  ];

  const technicalSkills = [
    { name: 'React.js', level: 95, color: 'lavender' },
    { name: 'JavaScript', level: 90, color: 'accent' },
    { name: 'HTML/CSS', level: 95, color: 'soft-pink' },
    { name: 'Node.js', level: 85, color: 'mint' },
    { name: 'TypeScript', level: 80, color: 'lavender' },
    { name: 'Python', level: 75, color: 'accent' }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="bg-gradient-to-r from-lavender to-accent bg-clip-text text-transparent">Skillset</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some technologies and tools I work with to create amazing digital experiences
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card/50 border-border hover:border-lavender/50 transition-all duration-300 hover:shadow-lg group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-secondary group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-secondary text-foreground px-3 py-1 rounded-full text-sm m-1 hover:bg-lavender/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Proficiency */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Technical Proficiency</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="space-y-2 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r from-${skill.color} to-${skill.color}/70 transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">What I Do</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 border-border hover:border-lavender/50 transition-all duration-300 hover:shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Code className="text-lavender mr-3" size={32} />
                  <h4 className="text-xl font-semibold text-foreground">Modern Web Development</h4>
                </div>
                <p className="text-muted-foreground">
                  Creating responsive and interactive web applications using the latest technologies like React, TypeScript, and modern CSS frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border hover:border-lavender/50 transition-all duration-300 hover:shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Palette className="text-accent mr-3" size={32} />
                  <h4 className="text-xl font-semibold text-foreground">UI/UX Design</h4>
                </div>
                <p className="text-muted-foreground">
                  Designing clean, user-friendly interfaces that provide seamless experiences and engage users effectively.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;