'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Form-Based No-Code Platform',
    description:
      'Contributed to a no-code platform by analyzing user behavior and application-building processes. This involved deep data analysis to identify trends and areas for optimization.',
    impact:
      'Enhanced decision-making and significantly improved overall platform performance and user experience.',
    technologies: ['Excel', 'PowerBI', 'Python', 'Data Analysis'],
  },
  {
    title: 'Data Flow Optimization',
    description:
      'Collaborated with cross-functional teams to design and implement highly scalable data flows. Focused on creating efficient data pipelines for seamless storage and retrieval.',
    impact:
      'Improved data storage efficiency and reduced retrieval latency, supporting platform scalability.',
    technologies: ['Database Management', 'Data Flow Design', 'SQL'],
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
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
          Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl text-primary">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <h4 className="font-semibold mb-2 text-card-foreground">
                    Impact:
                  </h4>
                  <p className="text-muted-foreground">{project.impact}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
