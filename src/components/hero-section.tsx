'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-80px)] w-full items-center justify-center bg-secondary py-16 md:py-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
          <div className="text-center lg:col-span-3 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 h-6"
            >
              <TypeAnimation
                sequence={[
                  'Aspiring SQL Developer',
                  1500,
                  'Data Analyst',
                  1500,
                  'Technical Support Specialist',
                  1500,
                ]}
                wrapper="span"
                speed={50}
                className="text-lg font-semibold text-primary"
                repeat={Infinity}
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl font-extrabold tracking-tight font-headline text-primary sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
            >
              Arvapalli Karthikeya Gupta
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 max-w-2xl text-base text-foreground lg:mx-0 md:text-lg"
            >
              Transforming Data into Insights & Building Scalable Database
              Solutions
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-4 max-w-2xl text-muted-foreground lg:mx-0"
            >
              Passionate about databases, data analysis, and technical
              problem-solving with a strong foundation in SQL, Python, and data
              visualization tools.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a href="#projects">
                <Button
                  size="lg"
                  variant="default"
                  className="w-full sm:w-auto"
                >
                  View My Work
                </Button>
              </a>
              <a
                href="/Karthikeya_Gupta.pdf"
                download="Karthikeya_Gupta.pdf"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Download Resume
                </Button>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-8 flex flex-col items-center space-y-2 text-sm text-muted-foreground lg:items-start"
            >
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
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="flex justify-center lg:col-span-2"
          >
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/80 shadow-2xl sm:h-80 sm:w-80">
              <Image
                src="/images/profiles.png"
                alt="Arvapalli Karthikeya Gupta"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
