import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

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

const EducationSection = () => {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline text-center mb-12 text-primary">
          Education
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card key={index} className="shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <GraduationCap className="h-10 w-10 text-accent" />
                <div>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {edu.institution}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-card-foreground">{edu.degree}</p>
                <p className="text-muted-foreground">{edu.period}</p>
                <p className="text-muted-foreground">{edu.grade}</p>
                <p className="text-sm text-muted-foreground mt-2">{edu.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
