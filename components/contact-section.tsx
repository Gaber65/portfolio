import { Mail, MessageSquare } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-secondary via-black to-secondary text-secondary-foreground overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-up"></div>
        <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float-up" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          Let&apos;s Work Together
        </h2>
        <p className="text-xl mb-12 text-secondary-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
          I&apos;m always open to new opportunities and exciting projects. Whether you have a question or just want to say hello, feel free to reach out.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <a
            href="mailto:gaberfares66@gmail.com"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <Mail className="w-6 h-6 group-hover:animate-float-up" />
            Send an Email
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
          >
            <MessageSquare className="w-6 h-6 group-hover:animate-float-up" />
            Get In Touch
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/20 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <p className="text-secondary-foreground/70">
            Phone: <span className="font-semibold text-primary">+201070508993</span>
          </p>
        </div>
      </div>
    </section>
  )
}
