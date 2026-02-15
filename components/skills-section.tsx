interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Mobile & Web Development',
    skills: ['Flutter', 'Dart', 'Angular', 'TypeScript'],
  },
  {
    title: 'State Management & Architecture',
    skills: ['Bloc', 'Cubit', 'Provider', 'GetX', 'Clean Architecture', 'OOP', 'MVC', 'MVVC'],
  },
  {
    title: 'Backend & APIs',
    skills: ['Firebase', 'Firestore', 'SQLite', 'RESTful APIs'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Git', 'GitHub', 'GitHub Actions', 'CI/CD', 'Android Studio', 'VS Code', 'Postman', 'Swagger'],
  },
  {
    title: 'Testing & Quality',
    skills: ['Unit Testing', 'Widget Testing', 'Performance Testing', 'Debugging'],
  },
  {
    title: 'Methodologies',
    skills: ['Agile', 'Scrum'],
  },
]

export function SkillsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/40">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-12 animate-slide-in-left"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="space-y-4 bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-primary border-b-2 border-primary/30 pb-3 hover:border-primary transition-colors duration-300">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gradient-to-r from-secondary/80 to-secondary text-secondary-foreground rounded-full text-sm font-medium hover:from-primary hover:to-primary/90 hover:text-primary-foreground hover:shadow-md transition-all duration-300 cursor-default hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${(index * 100) + (idx * 30)}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
