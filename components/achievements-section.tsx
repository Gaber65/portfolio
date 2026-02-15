import { Award, Zap } from 'lucide-react'

interface Achievement {
  title: string
  description: string
  icon: React.ReactNode
}

const achievements: Achievement[] = [
  {
    title: 'Project Delivery Excellence',
    description: 'Delivered 45+ projects with measurable impact, demonstrating strong leadership in cross-functional teams',
    icon: <Award className="w-8 h-8" />,
  },
  {
    title: 'Performance Optimization',
    description: 'Reduced app crash rates by 30% and improved feature delivery speed by 20% through optimization',
    icon: <Zap className="w-8 h-8" />,
  },
]

export function AchievementsSection() {
  return (
    <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 md:px-8">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-secondary">
        Key Achievements
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="p-8 border-2 border-primary rounded-lg hover:shadow-lg transition-shadow bg-white dark:bg-secondary"
          >
            <div className="text-primary mb-4">{achievement.icon}</div>
            <h3 className="text-2xl font-semibold text-secondary mb-3">
              {achievement.title}
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
