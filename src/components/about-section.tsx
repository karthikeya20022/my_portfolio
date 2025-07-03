'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-headline text-center text-primary">
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent className="text-base md:text-lg text-center text-card-foreground space-y-4">
              <p>
                A dedicated and results-oriented professional with a strong
                foundation in database management, SQL querying, and data
                analysis. Proficient in Python, R, and Excel, with hands-on
                experience in creating insightful visualizations using Tableau
                and Power BI.
              </p>
              <p>
                I am a quick learner, passionate about exploring the depths of
                databases and continuously improving my skills. My adaptability
                extends to various tools and technologies, including HTML, CSS,
                and Linux, allowing me to tackle diverse technical challenges
                with confidence.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
