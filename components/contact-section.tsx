import { Mail, MessageSquare } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-br from-secondary via-black to-secondary text-secondary-foreground overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-float-up"></div>
        <div className="absolute top-0 left-0 w-40 h-40 sm:w-80 sm:h-80 bg-primary/5 rounded-full blur-3xl animate-float-up" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in">
          Let&apos;s Work Together
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-secondary-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
          I&apos;m always open to new opportunities and exciting projects. Whether you have a question or just want to say hello, feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <a
            href="mailto:gaberfares66@gmail.com"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-2.5 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-sm sm:text-base hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-float-up" />
            Send an Email
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-2.5 sm:py-4 border-2 border-primary text-primary rounded-lg font-semibold text-sm sm:text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
          >
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-float-up" />
            Get In Touch
          </a>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-primary/20 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <p className="text-xs sm:text-sm text-secondary-foreground/70">
            Phone: <span className="font-semibold text-primary">+201070508993</span>
          </p>
        </div>
      </div>
    </section>
  )
}
