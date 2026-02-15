import { GraduationCap, Globe } from 'lucide-react'

export function EducationSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/40">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="animate-fade-in mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
            Education & Languages
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full animate-slide-in-left"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="flex gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 animate-fade-in-up group">
            <div className="text-primary flex-shrink-0 group-hover:scale-125 transition-transform duration-300">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                Bachelor of Computer Science
              </h3>
              <p className="text-lg text-primary font-medium mb-2">
                Beni Suef University
              </p>
              <p className="text-muted-foreground">
                Beni Suef, Egypt • 09/2020 – 06/2024
              </p>
            </div>
          </div>

          {/* Languages */}
          <div className="flex gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: '100ms' }}>
            <div className="text-primary flex-shrink-0 group-hover:scale-125 transition-transform duration-300">
              <Globe className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                Languages
              </h3>
              <div className="space-y-3">
                <div className="group/lang">
                  <p className="font-medium text-secondary group-hover/lang:text-primary transition-colors duration-300">Arabic</p>
                  <p className="text-muted-foreground text-sm">Native</p>
                </div>
                <div className="group/lang">
                  <p className="font-medium text-secondary group-hover/lang:text-primary transition-colors duration-300">English</p>
                  <p className="text-muted-foreground text-sm">Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
