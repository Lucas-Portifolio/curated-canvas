import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-medium mb-4 animate-fade-up">
            Olá, eu sou
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-fade-up-delay-1">
            <span className="text-gradient">Seu Nome</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-fade-up-delay-2">
            Desenvolvedor Full Stack
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up-delay-3">
            Transformando ideias em experiências digitais excepcionais. 
            Especializado em criar aplicações web modernas, escaláveis e com interfaces elegantes.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-16 animate-fade-up-delay-3">
            <a
              href="https://linkedin.com/in/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:seuemail@email.com"
              className="social-link"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <a href="#projects" className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-fade-up-delay-3">
            <span className="text-sm">Ver Projetos</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
