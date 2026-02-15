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
    icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
  },
  {
    title: 'Performance Optimization',
    description: 'Reduced app crash rates by 30% and improved feature delivery speed by 20% through optimization',
    icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
  },
]

export function AchievementsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="animate-fade-in mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-secondary">
          Key Achievements
        </h2>
        <div className="w-16 sm:w-20 h-1 bg-primary rounded-full animate-slide-in-left"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="relative p-4 sm:p-6 md:p-8 border-2 border-primary/30 rounded-lg hover:border-primary hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-card to-card/80 group animate-fade-in-up overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="text-primary mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:animate-float-up">
                {achievement.icon}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-secondary mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                {achievement.title}
              </h3>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
