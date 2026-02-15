import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export function ProfileHeader() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-secondary via-black to-secondary text-secondary-foreground min-h-screen flex items-center overflow-hidden">
        {/* Background Animated Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-up"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float-up" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="flex justify-center md:justify-start animate-scale-in">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Animated Border Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-rotate"></div>
                <div className="absolute inset-4 rounded-full border border-primary/20"></div>

                {/* Profile Image */}
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-primary shadow-2xl animate-glow">
                  <Image
                    src="/profile.jpg"
                    alt="Gaber Abdelrheem"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8 animate-slide-in-right">
              <div>
                <h1 className="text-6xl md:text-7xl font-bold mb-4 text-balance leading-tight">
                  Gaber <span className="text-primary">Abdelrheem</span>
                </h1>
                <p className="text-2xl md:text-3xl font-light text-secondary-foreground/80 mb-2">
                  Mid-level Flutter & Angular Developer
                </p>
                <p className="text-lg text-secondary-foreground/60">
                  4+ Years of Professional Experience
                </p>
              </div>

              {/* Why Section */}
              <div className="space-y-4 bg-white/5 backdrop-blur-sm border border-primary/20 rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Why Me?
                </h2>
                <p className="text-secondary-foreground/80 leading-relaxed">
                  I craft scalable, maintainable applications with a focus on clean architecture and user experience. With expertise in Flutter and Angular, I transform complex requirements into elegant solutions that deliver measurable results. My commitment to code quality, performance optimization, and collaborative problem-solving ensures projects exceed expectations.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <a
                  href="#projects"
                  className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2"
                >
                  View Projects
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="mailto:gaberfares66@gmail.com"
                  className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors duration-300">
                  <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                  <span>+201070508993</span>
                </div>
                <div className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors duration-300">
                  <Mail className="w-5 h-5 flex-shrink-0 text-primary" />
                  <span>gaberfares66@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors duration-300">
                  <MapPin className="w-5 h-5 flex-shrink-0 text-primary" />
                  <span>Beni Suef, Egypt</span>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 pt-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center border border-primary/30 hover:border-primary hover:shadow-lg hover:-translate-y-1"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center border border-primary/30 hover:border-primary hover:shadow-lg hover:-translate-y-1"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center pb-8 bg-secondary">
        <div className="animate-float-up">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary/50 rounded-full animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </>
  )
}
