import { Mail, MessageSquare } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let&apos;s Work Together
        </h2>
        <p className="text-xl mb-12 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
          I&apos;m always open to new opportunities and exciting projects. Whether you have a question or just want to say hello, feel free to reach out.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a
            href="mailto:gaberfares66@gmail.com"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:shadow-lg transition-shadow"
          >
            <Mail className="w-6 h-6" />
            Send an Email
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-current rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
          >
            <MessageSquare className="w-6 h-6" />
            Get In Touch
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/80">
            Phone: <span className="font-semibold">+201070508993</span>
          </p>
        </div>
      </div>
    </section>
  )
}
