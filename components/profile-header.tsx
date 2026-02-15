import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export function ProfileHeader() {
  return (
    <div className="relative bg-gradient-to-br from-secondary via-secondary to-secondary/80 text-secondary-foreground py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left Column - Name and Title */}
          <div className="md:col-span-2">
            <h1 className="text-5xl md:text-6xl font-bold mb-3 text-balance">
              Gaber Abdelrheem
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-6 text-secondary-foreground/80">
              Mid-level Flutter & Angular Developer
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-secondary-foreground/70 max-w-2xl">
              Experienced Mobile and Web Developer with 4 years of expertise in building 
              scalable cross-platform applications using Flutter, Angular, and RESTful APIs.
            </p>
          </div>

          {/* Right Column - Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span>+201070508993</span>
            </div>
            <div className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span>gaberfares66@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors">
              <MapPin className="w-5 h-5 flex-shrink-0" />
              <span>Beni Suef, Egypt</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-secondary transition-colors flex items-center justify-center"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-secondary transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
