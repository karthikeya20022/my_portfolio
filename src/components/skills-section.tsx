'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, BarChart3, TerminalSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Programming Languages',
    icon: <Code className="h-8 w-8 text-primary" />,
    list: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL', 'R'],
  },
  {
    category: 'Data Analysis & Visualization',
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    list: ['Tableau', 'Excel', 'Power BI', 'Data Visualization'],
  },
  {
    category: 'Tools & Platforms',
    icon: <TerminalSquare className="h-8 w-8 text-primary" />,
    list: [
      'Linux',
      'Jira',
      'GitHub',
      'VS Code',
      'CodeSandbox',
      'cPanel',
      'WHM',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
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

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-headline text-center mb-12 text-primary"
        >
          Technical Skills
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skillCategory, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  {skillCategory.icon}
                  <CardTitle className="text-2xl font-semibold text-primary">
                    {skillCategory.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.list.map((skill, i) => (
                      <Badge key={i} variant="default" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
