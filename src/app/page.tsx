import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import SkillsSection from '@/components/skills-section';
import ExperienceSection from '@/components/experience-section';
import ProjectsSection from '@/components/projects-section';
import CertificationsSection from '@/components/certifications-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import EducationSection from '@/components/education-section';
import BackgroundAnimation from '@/components/background-animation';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background font-body text-foreground">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
