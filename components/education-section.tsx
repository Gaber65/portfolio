import { GraduationCap, Globe } from 'lucide-react'

export function EducationSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background to-muted/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="animate-fade-in mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-secondary">
            Education & Languages
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary rounded-full animate-slide-in-left"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Education */}
          <div className="flex gap-3 sm:gap-4 p-4 sm:p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 animate-fade-in-up group">
            <div className="text-primary flex-shrink-0 group-hover:scale-125 transition-transform duration-300">
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-secondary mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300">
                Bachelor of Computer Science
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-primary font-medium mb-1 sm:mb-2">
                Beni Suef University
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Beni Suef, Egypt • 09/2020 – 06/2024
              </p>
            </div>
          </div>

          {/* Languages */}
          <div className="flex gap-3 sm:gap-4 p-4 sm:p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: '100ms' }}>
            <div className="text-primary flex-shrink-0 group-hover:scale-125 transition-transform duration-300">
              <Globe className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-secondary mb-2 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                Languages
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="group/lang">
                  <p className="text-sm sm:text-base font-medium text-secondary group-hover/lang:text-primary transition-colors duration-300">Arabic</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Native</p>
                </div>
                <div className="group/lang">
                  <p className="text-sm sm:text-base font-medium text-secondary group-hover/lang:text-primary transition-colors duration-300">English</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
