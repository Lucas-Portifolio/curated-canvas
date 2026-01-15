import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import StaggerReveal, { StaggerItem } from "./StaggerReveal";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-background to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-accent font-medium mb-2">Vamos Conversar</p>
          <h2 className="section-title">Entre em Contato</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto em mente? Adoraria ouvir sobre ele. Entre em contato!
          </p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <StaggerReveal className="space-y-6" staggerDelay={0.1}>
              <StaggerItem>
                <div className="glass-card-hover p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-accent/10">
                      <Mail className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground">Email</h3>
                      <a 
                        href="mailto:seuemail@email.com" 
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        seuemail@email.com
                      </a>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="glass-card-hover p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-accent/10">
                      <Linkedin className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground">LinkedIn</h3>
                      <a 
                        href="https://linkedin.com/in/seu-perfil" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        /in/seu-perfil
                      </a>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="glass-card-hover p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-accent/10">
                      <Github className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground">GitHub</h3>
                      <a 
                        href="https://github.com/seu-usuario" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        @seu-usuario
                      </a>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="glass-card-hover p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-accent/10">
                      <MapPin className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground">Localização</h3>
                      <p className="text-muted-foreground">São Paulo, Brasil</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="glass-card p-8 h-full">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-white/[0.08] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-white/[0.08] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-white/[0.08] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors resize-none"
                      placeholder="Sua mensagem..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg bg-accent text-accent-foreground font-medium flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors animate-glow"
                  >
                    <Send size={18} />
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
