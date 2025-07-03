'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Junior Support Engineer',
    company: 'Glowtouch Technologies',
    period: 'Nov 2024 - Present',
    description:
      'Providing top-tier technical support for Bluehost customers, focusing on domain setup, website management, and troubleshooting complex issues to ensure high customer satisfaction.',
  },
  {
    role: 'Data Analyst',
    company: 'Sukusala Technologies',
    period: 'Jun 2024 - Nov 2024',
    description:
      'Developed and enhanced a no-code platform by analyzing user behavior. Conducted in-depth data analysis using Excel, Power BI, and Python, and collaborated on designing scalable data flows to improve storage and retrieval efficiency.',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-headline text-center mb-12 text-primary"
        >
          Professional Experience
        </motion.h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: index * 0.2,
              }}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="order-1 w-5/12 hidden md:block"></div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.2 }}
                className="z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full"
              >
                <Briefcase className="mx-auto text-primary-foreground" />
              </motion.div>
              <div className="order-1 w-full md:w-5/12">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-primary">
                      {exp.role}
                    </CardTitle>
                    <p className="font-semibold text-accent">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp.period}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p>{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
