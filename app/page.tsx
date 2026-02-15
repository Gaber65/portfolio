import { ProfileHeader } from '@/components/profile-header'
import { ExperienceSection } from '@/components/experience-section'
import { ProjectsSection } from '@/components/projects-section'
import { SkillsSection } from '@/components/skills-section'
import { AchievementsSection } from '@/components/achievements-section'
import { EducationSection } from '@/components/education-section'
import { ContactSection } from '@/components/contact-section'

export default function Page() {
  return (
    <main className="bg-background">
      <ProfileHeader />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <EducationSection />
      <ContactSection />
    </main>
  )
}
