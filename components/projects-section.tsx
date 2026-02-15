'use client'

interface Project {
  name: string
  description: string
  period: string
  role: string
  keyFeatures: string[]
  technologies: string[]
  type: string
  github?: string
}

const projects: Project[] = [
  {
    name: 'Squeak',
    description: 'A full-featured social platform for pet owners built using Flutter and Clean Architecture principles.',
    period: 'January 2023 – Present',
    role: 'Lead Developer',
    type: 'Social & Pet Care Platform',
    keyFeatures: [
      'Social Login (Google & Facebook) with edge-case handling',
      'Pet profile management with auto-switch logic',
      'Social feed with posts, comments, replies & media support',
      'Advanced notification handling with deep linking',
      'Real-time chat integration',
      'Flutter Web deployment with hosting configuration',
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'Clean Architecture', 'REST APIs'],
    github: 'https://github.com/Gaberabdo/squeak',
  },
  {
    name: 'Oferrta',
    description: 'A full-featured bidding application with multi-platform support for Web, Android, and iOS.',
    period: 'March 2024 – May 2024',
    role: 'Lead Developer',
    type: 'Bidding Platform',
    keyFeatures: [
      'Multi-Platform Support: Available on Web, Android, and iOS',
      'Dual Interfaces: Separate interfaces for administrators and users',
      'Product Sharing: Easy product sharing capability',
      'Real-Time Chat: Users can chat with administrators',
    ],
    technologies: ['Flutter', 'Firebase', 'Bloc', 'Firestore'],
    github: 'https://github.com/Gaberabdo/Oferrta',
  },
  {
    name: 'Mostakpal',
    description: 'A flight booking application providing users with the ability to organize and book flights domestically and internationally.',
    period: 'March 2023 – Present',
    role: 'Developer',
    type: 'Flight Booking App',
    keyFeatures: [
      'Flight search and booking functionality',
      'Integration with flight APIs',
      'User-friendly booking experience',
      'Real-time availability updates',
    ],
    technologies: ['Flutter', 'Firebase', 'UI/UX Design', 'Database Integration'],
    github: 'https://github.com/Gaberabdo/mostakbal',
  },
  {
    name: 'VetIcare',
    description: 'A veterinary program and mobile application for clients with appointment scheduling and pet management.',
    period: 'June 2023 – Present',
    role: 'Developer',
    type: 'Veterinary Management',
    keyFeatures: [
      'Appointment scheduling and reminders',
      'Client and pet management system',
      'Integration with veterinary APIs',
      'Real-time notifications',
    ],
    technologies: ['Flutter', 'Firebase', 'Bloc', 'REST APIs'],
  },
  {
    name: 'Nurse App',
    description: 'An educational application helping nurses learn and increase their experience with real-time chat capabilities.',
    period: 'May 2023 – Present',
    role: 'Full Stack Developer',
    type: 'Educational Platform',
    keyFeatures: [
      'Educational content for nurses',
      'Real-time chat with mentors and peers',
      'Interactive learning modules',
      'Progress tracking',
    ],
    technologies: ['Flutter', 'Firebase', 'Bloc', 'REST APIs'],
  },
  {
    name: 'Social App (Boopbook)',
    description: 'A comprehensive social application with Firebase backend, featuring posts, stories, and real-time chat.',
    period: 'August 2021 – Present',
    role: 'Full Stack Developer',
    type: 'Social Network',
    keyFeatures: [
      'Share posts and stories',
      'Real-time chat with other users',
      'Edit profile information and pictures',
      'User feed and discovery',
    ],
    technologies: ['Flutter', 'Firebase', 'Firestore', 'Bloc'],
    github: 'https://github.com/Gaberabdo/boopbook',
  },
  {
    name: 'Via More Greens',
    description: 'A dynamic web application for a distinguished member of the Beni Suef chamber of commerce specializing in exporting spices and herbs.',
    period: 'May 2022 – Present',
    role: 'Angular Developer',
    type: 'E-Commerce Web',
    keyFeatures: [
      'Product management system',
      'Secure data handling',
      'User management',
      'Responsive design with Angular Material',
    ],
    technologies: ['Angular', 'Firebase', 'REST APIs'],
  },
  {
    name: 'E-Commerce App (BuyMe)',
    description: 'An e-commerce application for displaying products, creating orders, and processing payments.',
    period: 'September 2021 – Present',
    role: 'Developer',
    type: 'E-Commerce Mobile',
    keyFeatures: [
      'Product display and ordering system',
      'Integration with multiple payment gateways',
      'Shopping cart functionality',
      'Order history and tracking',
    ],
    technologies: ['Flutter', 'Firebase', 'Bloc', 'Dio', 'Carousel'],
    github: 'https://github.com/Gaberabdo/BuyMe',
  },
  {
    name: 'Catalyst',
    description: 'An application for learning about metal prices through API integration with real-time updates and historical data visualization.',
    period: 'March 2021 – Present',
    role: 'Developer',
    type: 'Financial Data App',
    keyFeatures: [
      'Real-time metal price updates',
      'Historical data visualization',
      'User notifications for price changes',
      'Price comparison tools',
    ],
    technologies: ['Flutter', 'Firebase', 'Bloc', 'REST APIs'],
    github: 'https://github.com/Gaberabdo/Catalyst',
  },
  {
    name: 'Payment Package Enhancement',
    description: 'Successfully modified and updated an existing payment package to add support for modern payment methods.',
    period: 'Recent',
    role: 'Developer',
    type: 'Package Development',
    keyFeatures: [
      'Modern payment method support',
      'Enhanced compatibility',
      'Improved user experience',
      'Secure payment processing',
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
    github: 'https://github.com/Gaberabdo/hesba_payment',
  },
  {
    name: 'Graduation Project',
    description: 'A comprehensive mobile application utilizing Flutter and Firebase, awarded an A+ grade.',
    period: 'August 2023 – July 2024',
    role: 'Lead Developer',
    type: 'Academic Project',
    keyFeatures: [
      'Real-time database synchronization',
      'User authentication and data security',
      'Extensive state management implementation',
      'Cross-platform functionality',
    ],
    technologies: ['Flutter', 'Firebase', 'REST APIs'],
  },
]

export function ProjectsSection() {
  return (
    <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 md:px-8" id="projects">
      <div className="animate-fade-in mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-primary rounded-full animate-slide-in-left"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-xl transition-all duration-300 animate-fade-in-up overflow-hidden"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3">
                  {project.type}
                </span>
                <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors duration-300 mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground">{project.period}</p>
              </div>

              <p className="text-sm text-foreground/80 leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="text-xs font-semibold text-secondary mb-2">Role</p>
                <p className="text-sm text-primary font-medium">{project.role}</p>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-secondary mb-2">Key Features</p>
                <ul className="space-y-1">
                  {project.keyFeatures.slice(0, 2).map((feature, idx) => (
                    <li key={idx} className="text-xs text-foreground/70 flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {project.keyFeatures.length > 2 && (
                    <li className="text-xs text-primary font-medium">
                      +{project.keyFeatures.length - 2} more features
                    </li>
                  )}
                </ul>
              </div>

              <div className="mb-4 flex flex-wrap gap-1">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-xs rounded font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary font-semibold text-sm group/link transition-all duration-300"
                >
                  View on GitHub
                  <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
