'use client';

import { Award, Database, BarChart, Rss, Tv, PanelTop } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const certifications = [
  {
    icon: <BarChart className="h-8 w-8 text-accent" />,
    title: 'Excel (Coursera)',
    date: 'Sep 2022',
    url: 'https://www.coursera.org/account/accomplishments/verify/8PZXPPRAKEXM?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project',
  },
  {
    icon: <Database className="h-8 w-8 text-accent" />,
    title: 'MySQL (Ebox)',
    date: 'Jun 2022',
    url: 'https://pro.e-box.co.in/course/show/1367',
  },
  {
    icon: <BarChart className="h-8 w-8 text-accent" />,
    title: 'Data Visualization with Tableau',
    date: 'Apr 2023',
    issuer: 'Coursera',
    url: 'https://www.coursera.org/account/accomplishments/specialization/UFF6DHTQHYLF?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n',
  },
  {
    icon: <Rss className="h-8 w-8 text-accent" />, // Placeholder for R
    title: 'R Programming (Coursera)',
    date: 'Apr 2023',
    url: 'https://www.coursera.org/account/accomplishments/verify/NGD56PL7Y94P?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
  },
  {
    icon: <Tv className="h-8 w-8 text-accent" />,
    title: 'Power BI (Simplilearn)',
    date: 'Aug 2023',
    url: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzIyIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDQ0ODA3Nl8xNjkxNDg0NzkyLnBuZyIsInVzZXJuYW1lIjoiQVJWQVBBTExJIEtBUlRISUtFWUFHVVBUQSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4211%2FPower-BI-for-Beginners%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1442013111228579923&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FV9y5yLQtLySnM9k2yrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAjXYXET8AAAA%3D',
  },
  {
    icon: <PanelTop className="h-8 w-8 text-accent" />,
    title: 'cPanel UI Proficiency (cPanel)',
    date: 'Jan 2025',
    url: '#',
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
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
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
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
