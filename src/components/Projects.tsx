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
    title: "Clarity Cash",
    description: "Controle Financeiro Inteligente com dashboard intuitivo, múltiplos cartões de crédito, parcelas automáticas, contas recorrentes e relatórios analíticos. PWA instalável com modo offline.",
    image: "/clarity-cash.png",
    tags: ["React", "TypeScript", "PWA", "Chart.js"],
    liveUrl: "https://clarity-cash-lovat.vercel.app/",
    githubUrl: "https://github.com/FinancePersonal/clarity-cash",
  },
  {
    id: 2,
    title: "StatCalc Pro",
    description: "Ferramenta para análise estatística de estudos clínicos. Calcula curvas ROC, AUC, sensibilidade e especificidade a partir de arquivos Excel. Exporta resultados em XLSX/CSV.",
    image: "/statcalc-pro.png",
    tags: ["React", "TypeScript", "Excel", "ROC/AUC"],
    liveUrl: "https://statcalcpro.vercel.app/",
    githubUrl: "https://github.com/StatCalc-Pro/statcalc_pro",
  },
  {
    id: 3,
    title: "GraphQL vs REST",
    description: "Projeto de pesquisa comparando performance e métricas entre GraphQL e REST. Raspagem de dados e análise de repositórios populares do GitHub.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop",
    tags: ["Python", "GraphQL", "REST", "Data Analysis"],
    githubUrl: "https://github.com/Lab-Medicao/graphql-vs-rest",
  },
  {
    id: 4,
    title: "Data View BI",
    description: "Dashboard de Business Intelligence para visualização de dados e métricas. Análise de repositórios e geração de insights.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    tags: ["Python", "BI", "Data Visualization", "Analytics"],
    githubUrl: "https://github.com/Lab-Medicao/data-view-BI",
  },
  {
    id: 5,
    title: "Java Repos CK Analyzer",
    description: "Analisador de métricas CK (Chidamber-Kemerer) para repositórios Java. Coleta e analisa métricas de qualidade de código.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop",
    tags: ["Python", "Java", "Code Metrics", "CK"],
    githubUrl: "https://github.com/Lab-Medicao/java-repos-ck-analyzer",
  },
  {
    id: 6,
    title: "Lab1 Popular Repositories",
    description: "Raspagem e análise de repositórios populares do GitHub. Coleta de dados, métricas e insights sobre projetos open source.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=450&fit=crop",
    tags: ["Python", "GitHub API", "Web Scraping", "Data Mining"],
    githubUrl: "https://github.com/Lab-Medicao/lab1-popular-repositories",
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
