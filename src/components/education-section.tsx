'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering (Hons)',
    institution: 'Lovely Professional University',
    period: '2020 - 2024',
    grade: 'CGPA: 7.61',
    location: 'Phagwara, Punjab, India',
  },
  {
    degree: 'Intermediate Education',
    institution: 'Sri Chaitanya Junior College',
    period: '2018 - 2020',
    grade: 'CGPA: 9.23',
    location: 'Vijayawada, AP, India',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const EducationSection = () => {
  return (
    <section id="education" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-headline text-center mb-12 text-primary"
        >
          Education
        </motion.h2>
        <motion.div
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="shadow-lg h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <GraduationCap className="h-10 w-10 text-accent" />
                  <div>
                    <CardTitle className="text-xl font-semibold text-primary">
                      {edu.institution}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-card-foreground">
                    {edu.degree}
                  </p>
                  <p className="text-muted-foreground">{edu.period}</p>
                  <p className="text-muted-foreground">{edu.grade}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {edu.location}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
