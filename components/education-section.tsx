import { GraduationCap, Globe } from 'lucide-react'

export function EducationSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-secondary">
          Education & Languages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="flex gap-4">
            <div className="text-primary flex-shrink-0">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-2">
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
          <div className="flex gap-4">
            <div className="text-primary flex-shrink-0">
              <Globe className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                Languages
              </h3>
              <div className="space-y-2">
                <div>
                  <p className="font-medium text-secondary">Arabic</p>
                  <p className="text-muted-foreground">Native</p>
                </div>
                <div>
                  <p className="font-medium text-secondary">English</p>
                  <p className="text-muted-foreground">Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
