import { Card } from '@/components/ui/card';
import introduceMyselfIllustration from '@/assets/introduce-myself-illustration.png';

const IntroduceMyself = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            LET ME <span className="bg-gradient-to-r from-lavender to-accent bg-clip-text text-transparent">INTRODUCE</span> MYSELF
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-in">
            <p className="text-lg text-foreground leading-relaxed">
              I fell in love with programming and have at least learned something, I think… <span className="inline-block">🤷‍♀️</span>
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              I am fluent in classics like <span className="text-accent font-semibold">C++</span>, <span className="text-lavender font-semibold">JavaScript</span>, and <span className="text-soft-pink font-semibold">Python</span>.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              My field of interest lies in building new <span className="text-lavender font-semibold">Web Technologies and Products</span>, and exploring areas related to <span className="text-accent font-semibold">Frontend Frameworks</span>.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              Whenever possible, I also apply my passion for developing products using <span className="text-mint font-semibold">Node.js</span>, <span className="text-soft-pink font-semibold">Bootstrap</span>, and modern JavaScript libraries/frameworks like <span className="text-lavender font-semibold">React.js</span> and <span className="text-accent font-semibold">Next.js</span>.
            </p>
          </div>

          {/* Right Content - Illustration */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-lavender/20 to-accent/20 blur-3xl opacity-30"></div>
              <img
                src={introduceMyselfIllustration}
                alt="Bhargavi Ega - Professional Developer"
                className="relative z-10 max-w-full h-auto animate-float"
                style={{ filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.3))' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroduceMyself;