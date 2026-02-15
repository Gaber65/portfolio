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
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-secondary">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-primary border-b-2 border-primary pb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
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
