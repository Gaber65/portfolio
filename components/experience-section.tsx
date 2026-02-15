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
    <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 md:px-8">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-secondary animate-fade-in">
        Experience
      </h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="border-l-4 border-primary pl-6 pb-8 animate-fade-in-up hover:border-accent transition-colors duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-2xl font-semibold text-secondary hover:text-primary transition-colors duration-300">
                  {exp.title}
                </h3>
                <p className="text-lg font-medium text-primary">{exp.company}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-muted-foreground">{exp.period}</p>
                <p className="text-sm text-muted-foreground">{exp.location}</p>
              </div>
            </div>

            <ul className="space-y-3 mt-4">
              {exp.achievements.map((achievement, idx) => (
                <li 
                  key={idx} 
                  className="flex gap-3 text-foreground/80 leading-relaxed animate-fade-in-up"
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
