import { ExternalLink, Github } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import StaggerReveal, { StaggerItem } from "./StaggerReveal";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo. Desenvolvido com React, Node.js e PostgreSQL.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://exemplo.com",
    githubUrl: "https://github.com/usuario/projeto",
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Dashboard interativo para visualização de dados em tempo real com gráficos dinâmicos e filtros avançados.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
    tags: ["TypeScript", "React", "D3.js", "WebSocket"],
    liveUrl: "https://exemplo.com",
    githubUrl: "https://github.com/usuario/projeto",
  },
  {
    id: 3,
    title: "App de Gestão de Tarefas",
    description: "Aplicativo de produtividade com recursos de colaboração em equipe, notificações e integrações com outras ferramentas.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop",
    tags: ["React Native", "Firebase", "Redux"],
    liveUrl: "https://exemplo.com",
    githubUrl: "https://github.com/usuario/projeto",
  },
  {
    id: 4,
    title: "API RESTful Microservices",
    description: "Arquitetura de microserviços com autenticação JWT, rate limiting e documentação OpenAPI completa.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop",
    tags: ["Node.js", "Docker", "Kubernetes", "MongoDB"],
    liveUrl: "https://exemplo.com",
    githubUrl: "https://github.com/usuario/projeto",
  },
  {
    id: 5,
    title: "Landing Page Interativa",
    description: "Website institucional com animações avançadas, otimização SEO e integração com CMS headless.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=450&fit=crop",
    tags: ["Next.js", "Framer Motion", "Sanity"],
    liveUrl: "https://exemplo.com",
    githubUrl: "https://github.com/usuario/projeto",
  },
  {
    id: 6,
    title: "Sistema de Chat Real-time",
    description: "Aplicação de mensagens em tempo real com suporte a grupos, envio de arquivos e criptografia end-to-end.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=450&fit=crop",
    tags: ["Socket.io", "React", "Node.js", "Redis"],
    liveUrl: "https://exemplo.com",
    githubUrl: "https://github.com/usuario/projeto",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="text-accent font-medium mb-2">Meu Trabalho</p>
          <h2 className="section-title">Projetos em Destaque</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos meus projetos mais recentes e impactantes
          </p>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <article className="project-card group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="skill-tag text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-accent hover:text-accent-foreground transition-colors"
                        >
                          <ExternalLink size={16} />
                          <span>Ver Projeto</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github size={16} />
                          <span>Código</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default Projects;
