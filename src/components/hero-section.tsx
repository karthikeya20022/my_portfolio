import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] w-full flex items-center justify-center py-20 bg-secondary"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
          <div className="text-center lg:col-span-3 lg:text-left">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Aspiring SQL Developer | Data Analyst | Technical Support Specialist
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight font-headline text-primary sm:text-5xl md:text-6xl">
              Arvapalli Karthikeya Gupta
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-foreground lg:mx-0">
              Transforming Data into Insights & Building Scalable Database Solutions
            </p>
            <p className="mt-4 max-w-2xl text-muted-foreground lg:mx-0">
              Passionate about databases, data analysis, and technical
              problem-solving with a strong foundation in SQL, Python, and data
              visualization tools.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a href="#projects">
                <Button size="lg" variant="default" className="w-full sm:w-auto">
                  View My Work
                </Button>
              </a>
              <a href="/resume.pdf" download="Arvapalli_Karthikeya_Gupta_Resume.pdf">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Download Resume
                </Button>
              </a>
            </div>
            <div className="mt-8 space-y-2 text-sm text-muted-foreground flex flex-col items-center lg:items-start">
               <div className="flex items-center gap-2">
                 <Mail className="h-4 w-4" />
                 <span>karthikeyagupta93@gmail.com</span>
               </div>
               <div className="flex items-center gap-2">
                 <Phone className="h-4 w-4" />
                 <span>+91 9182527963</span>
               </div>
               <div className="flex items-center gap-2">
                 <MapPin className="h-4 w-4" />
                 <span>Kunkalagunta, AP, India</span>
               </div>
            </div>
          </div>
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary">
               <Image
                src="https://placehold.co/400x400.png"
                alt="Arvapalli Karthikeya Gupta"
                layout="fill"
                objectFit="cover"
                data-ai-hint="professional portrait"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
