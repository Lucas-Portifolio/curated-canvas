import { Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

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
    role: "Estagiário de Desenvolvimento Back-end - Data Automations (IA)",
    company: "Hotmart",
    period: "2024 - Atualmente",
    description: "Desenvolvedor de Software na Data Business Unit, integrando o time de Data Automations focado em projetos de IA para LATAM e Espanha. Desenvolvimento de assistente de IA utilizando n8n, Firestore (NoSQL) e JavaScript. Integração com Chatwoot, APIs da Meta e Firebase. Automação de fluxos de dados para inteligência de negócios.",
    technologies: ["n8n", "Firestore", "JavaScript", "Firebase", "IA", "Chatwoot"],
  },
  {
    id: 2,
    role: "Estagiário de Desenvolvimento Back-end - CRI",
    company: "Hotmart",
    period: "2024",
    description: "Atuação na equipe CRI (Customer Reports Insights), responsável pelos relatórios dos criadores de conteúdo. Desenvolvimento e manutenção de funcionalidades utilizando Kotlin e Java com Spring Boot. Implementação de arquitetura orientada a eventos, monitoramento com New Relic e K9s, trabalho com microsserviços e utilização de serviços AWS.",
    technologies: ["Kotlin", "Java", "Spring Boot", "AWS", "Kubernetes", "New Relic", "Eventos"],
  },
  {
    id: 3,
    role: "Estagiário de Desenvolvimento Back-end",
    company: "Minds Digital",
    period: "2023 - 2024",
    description: "Desenvolvimento de novas funcionalidades, correção de bugs e criação de testes unitários utilizando C# com .NET 5/6, MySQL e BigQuery em arquitetura de microsserviços. Atuação em front-end com React e Angular 2. Implementação de mensageria usando Pub/Sub do GCP. DevOps com Azure, GCP, Docker e Kubernetes. Participação em soluções de internacionalização e regionalização.",
    technologies: ["C#", ".NET", "React", "Angular", "GCP", "Docker", "Kubernetes", "MySQL", "BigQuery"],
  },
  {
    id: 4,
    role: "Suporte Técnico",
    company: "Tribunal de Justiça Militar-MG",
    period: "2022",
    description: "Configuração de novos computadores, instalação de softwares e montagem de setups. Configuração de redes e manutenção do Data Center. Desenvolvimento de soft skills através do contato direto com funcionários do Tribunal.",
    technologies: ["Suporte Técnico", "Redes", "Data Center"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-accent font-medium mb-2">Minha Jornada</p>
          <h2 className="section-title">Experiência Profissional</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trajetória de crescimento e aprendizado contínuo
          </p>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-12">
            <div className="timeline-line" />
            
            {experiences.map((exp, index) => (
              <ScrollReveal
                key={exp.id}
                delay={index * 0.15}
                direction="left"
                className="relative mb-12 last:mb-0"
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
