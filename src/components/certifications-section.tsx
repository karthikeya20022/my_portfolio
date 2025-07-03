'use client';

import { Award, Database, BarChart, Rss, Tv, PanelTop } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const certifications = [
  {
    icon: <BarChart className="h-8 w-8 text-accent" />,
    title: 'Excel (Coursera)',
    date: 'Sep 2022',
  },
  {
    icon: <Database className="h-8 w-8 text-accent" />,
    title: 'MySQL (Ebox)',
    date: 'Jun 2022',
  },
  {
    icon: <BarChart className="h-8 w-8 text-accent" />,
    title: 'Data Visualization with Tableau',
    date: 'Apr 2023',
    issuer: 'Coursera',
  },
  {
    icon: <Rss className="h-8 w-8 text-accent" />, // Placeholder for R
    title: 'R Programming (Coursera)',
    date: 'Apr 2023',
  },
  {
    icon: <Tv className="h-8 w-8 text-accent" />,
    title: 'Power BI (Simplilearn)',
    date: 'Aug 2023',
  },
  {
    icon: <PanelTop className="h-8 w-8 text-accent" />,
    title: 'cPanel UI Proficiency (cPanel)',
    date: 'Jan 2025',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const CertificationsSection = () => {
  return (
    <section
      id="certifications"
      className="py-16 md:py-24 bg-secondary overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-headline text-center mb-12 text-primary"
        >
          Certifications
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="text-center transition-transform transform hover:scale-105 hover:shadow-xl h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">{cert.icon}</div>
                  <CardTitle className="text-xl font-semibold text-card-foreground">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{cert.issuer}</p>
                  <p className="text-muted-foreground">{cert.date}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
