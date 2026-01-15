import { Briefcase } from "lucide-react";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Desenvolvedor Full Stack Senior",
    company: "Tech Company",
    period: "2022 - Presente",
    description: "Liderança técnica de equipe de 5 desenvolvedores. Arquitetura de sistemas escaláveis e implementação de CI/CD. Redução de 40% no tempo de deploy.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    id: 2,
    role: "Desenvolvedor Full Stack",
    company: "Startup Inovadora",
    period: "2020 - 2022",
    description: "Desenvolvimento de MVP e escalabilidade do produto principal. Implementação de sistema de pagamentos e integrações com APIs externas.",
    technologies: ["Vue.js", "Python", "Docker", "MongoDB"],
  },
  {
    id: 3,
    role: "Desenvolvedor Front-end",
    company: "Agência Digital",
    period: "2018 - 2020",
    description: "Criação de interfaces responsivas e acessíveis para diversos clientes. Otimização de performance e SEO.",
    technologies: ["React", "TypeScript", "SASS", "Webpack"],
  },
  {
    id: 4,
    role: "Desenvolvedor Júnior",
    company: "Software House",
    period: "2016 - 2018",
    description: "Desenvolvimento de funcionalidades para sistemas legados e novos projetos. Manutenção e correção de bugs.",
    technologies: ["JavaScript", "PHP", "MySQL", "jQuery"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2">Minha Jornada</p>
          <h2 className="section-title">Experiência Profissional</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trajetória de crescimento e aprendizado contínuo
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-12">
            <div className="timeline-line" />
            
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative mb-12 last:mb-0"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="timeline-dot top-1" />
                
                <div className="glass-card-hover p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Briefcase className="text-accent" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-display font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
