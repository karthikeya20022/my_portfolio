import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, BarChart3, TerminalSquare } from 'lucide-react';

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
    list: ['Linux', 'Jira', 'GitHub', 'VS Code', 'CodeSandbox', 'cPanel', 'WHM'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline text-center mb-12 text-primary">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
