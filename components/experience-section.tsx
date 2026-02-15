interface Experience {
  title: string
  company: string
  period: string
  location: string
  achievements: string[]
}

const experiences: Experience[] = [
  {
    title: 'Flutter Developer',
    company: 'Yaz Studio',
    period: '01/2024 – 01/2024',
    location: 'Turkey, Part-time',
    achievements: [
      'Applied clean architecture and modular design to support maintainability and long-term system stability',
      'Integrated RESTful APIs and implemented scalable state management, improving feature delivery speed by 20%',
    ],
  },
  {
    title: 'Flutter & Angular Developer',
    company: 'Quad Insight for Cloud Software',
    period: '03/2023 – Present',
    location: 'Beni Suef, Egypt',
    achievements: [
      'Developed 5+ cross-platform mobile and web applications serving 10,000+ active users',
      'Integrated RESTful APIs and implemented scalable state management, improving feature delivery speed by 20%',
      'Collaborated with product and design teams, achieving 95% sprint completion rate under Agile methodology',
    ],
  },
  {
    title: 'Flutter Developer',
    company: 'Egyptian Army',
    period: '01/2025 – 11/2025',
    location: 'Nasr City, Egypt',
    achievements: [
      'Developed secure Flutter applications for internal operational and administrative systems',
      'Applied clean architecture and modular design for maintainability and long-term stability',
      'Optimized application performance across multiple devices, reducing crash rates by 30%',
    ],
  },
  {
    title: 'Flutter & Web Developer (Freelance)',
    company: 'Self-employed',
    period: '08/2021 – 06/2023',
    location: 'Remote',
    achievements: [
      'Delivered 20+ Flutter and web applications for e-commerce, healthcare, and education sectors',
      'Developed scalable apps handling datasets of 50,000+ records with optimized queries',
      'Integrated authentication, databases, and RESTful APIs, reducing onboarding time by 35%',
      'Maintained 100% on-time delivery across all projects using Git and Agile methodologies',
    ],
  },
]

export function ExperienceSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="animate-fade-in mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-secondary">
          Experience
        </h2>
        <div className="w-16 sm:w-20 h-1 bg-primary rounded-full animate-slide-in-left"></div>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="relative border-l-4 border-primary pl-4 sm:pl-8 pb-6 sm:pb-8 animate-fade-in-up hover:border-accent transition-colors duration-300 group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full -translate-x-3.5 sm:-translate-x-4 group-hover:scale-125 transition-transform duration-300 border-4 border-background shadow-lg"></div>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 sm:gap-2 mb-2 sm:mb-3">
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-secondary hover:text-primary transition-colors duration-300">
                  {exp.title}
                </h3>
                <p className="text-base sm:text-lg font-medium text-primary">{exp.company}</p>
              </div>
              <div className="text-left sm:text-right flex-shrink-0">
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground">{exp.period}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{exp.location}</p>
              </div>
            </div>

            <ul className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
              {exp.achievements.map((achievement, idx) => (
                <li 
                  key={idx} 
                  className="flex gap-2 sm:gap-3 text-sm sm:text-base text-foreground/80 leading-relaxed animate-fade-in-up"
                  style={{ animationDelay: `${(index * 100) + (idx * 50)}ms` }}
                >
                  <span className="text-primary font-bold mt-1 flex-shrink-0">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
