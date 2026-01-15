import { Award, BookOpen, GraduationCap } from "lucide-react";

interface EducationItem {
  id: number;
  title: string;
  institution: string;
  period: string;
  type: "degree" | "course" | "certification";
  description?: string;
}

const education: EducationItem[] = [
  {
    id: 1,
    title: "Bacharelado em Ciência da Computação",
    institution: "Universidade Federal",
    period: "2012 - 2016",
    type: "degree",
    description: "Formação completa com foco em desenvolvimento de software, algoritmos e estruturas de dados.",
  },
  {
    id: 2,
    title: "Pós-Graduação em Engenharia de Software",
    institution: "Instituto de Tecnologia",
    period: "2017 - 2018",
    type: "degree",
    description: "Especialização em arquitetura de sistemas e metodologias ágeis.",
  },
];

const courses: EducationItem[] = [
  {
    id: 3,
    title: "AWS Solutions Architect",
    institution: "Amazon Web Services",
    period: "2023",
    type: "certification",
  },
  {
    id: 4,
    title: "React Advanced Patterns",
    institution: "Frontend Masters",
    period: "2023",
    type: "course",
  },
  {
    id: 5,
    title: "System Design Fundamentals",
    institution: "Educative.io",
    period: "2022",
    type: "course",
  },
  {
    id: 6,
    title: "Docker & Kubernetes Mastery",
    institution: "Udemy",
    period: "2022",
    type: "course",
  },
  {
    id: 7,
    title: "Node.js Microservices",
    institution: "Rocketseat",
    period: "2021",
    type: "course",
  },
  {
    id: 8,
    title: "TypeScript Professional",
    institution: "Alura",
    period: "2021",
    type: "course",
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case "degree":
      return GraduationCap;
    case "certification":
      return Award;
    default:
      return BookOpen;
  }
};

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2">Formação</p>
          <h2 className="section-title">Educação & Certificações</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Aprendizado contínuo para entregar sempre o melhor
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formação Acadêmica */}
          <div>
            <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="text-accent" size={24} />
              Formação Acadêmica
            </h3>
            
            <div className="space-y-6">
              {education.map((item) => {
                const Icon = getIcon(item.type);
                return (
                  <div key={item.id} className="glass-card-hover p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-accent/10 shrink-0">
                        <Icon className="text-accent" size={20} />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-accent font-medium">{item.institution}</p>
                        <p className="text-sm text-muted-foreground mb-2">{item.period}</p>
                        {item.description && (
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cursos e Certificações */}
          <div>
            <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
              <Award className="text-accent" size={24} />
              Cursos & Certificações
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {courses.map((item) => {
                const Icon = getIcon(item.type);
                return (
                  <div key={item.id} className="glass-card-hover p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 rounded-lg bg-accent/10 shrink-0">
                        <Icon className="text-accent" size={16} />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-sm">
                          {item.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {item.institution} • {item.period}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
