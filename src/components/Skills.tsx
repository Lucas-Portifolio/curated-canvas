import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import StaggerReveal, { StaggerItem } from "./StaggerReveal";
import {
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Smartphone,
  Terminal,
  Cloud,
  GitBranch,
  Palette,
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "React / Next.js", level: 95, icon: Code2 },
      { name: "TypeScript", level: 90, icon: Code2 },
      { name: "Tailwind CSS", level: 92, icon: Palette },
      { name: "Vue.js", level: 75, icon: Code2 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 88, icon: Terminal },
      { name: "Python", level: 80, icon: Terminal },
      { name: "PostgreSQL", level: 85, icon: Database },
      { name: "MongoDB", level: 78, icon: Database },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      { name: "Docker", level: 85, icon: Server },
      { name: "AWS", level: 80, icon: Cloud },
      { name: "CI/CD", level: 82, icon: GitBranch },
      { name: "Kubernetes", level: 70, icon: Cloud },
    ],
  },
  {
    title: "Mobile & Outros",
    icon: Smartphone,
    skills: [
      { name: "React Native", level: 75, icon: Smartphone },
      { name: "Git", level: 92, icon: GitBranch },
      { name: "REST APIs", level: 90, icon: Globe },
      { name: "GraphQL", level: 72, icon: Globe },
    ],
  },
];

const SkillBar = ({ skill, delay }: { skill: Skill; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <skill.icon size={14} className="text-accent" />
          <span className="text-sm font-medium text-foreground">{skill.name}</span>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
          className="text-xs text-muted-foreground"
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent/60"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 1,
            delay: delay,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          style={{
            boxShadow: "0 0 20px hsl(var(--accent) / 0.5)",
          }}
        />
      </div>
    </div>
  );
};

const techLogos = [
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Git", color: "#F05032" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Next.js", color: "#ffffff" },
  { name: "GraphQL", color: "#E10098" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      {/* Floating Tech Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {techLogos.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="absolute w-12 h-12 rounded-xl bg-secondary/20 border border-white/[0.05] flex items-center justify-center"
            style={{
              left: `${(index % 4) * 25 + Math.random() * 10}%`,
              top: `${Math.floor(index / 4) * 33 + Math.random() * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            <span className="text-xs font-medium text-muted-foreground/50">
              {tech.name.slice(0, 2)}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-accent font-medium mb-2">Minhas Habilidades</p>
          <h2 className="section-title">Tecnologias & Ferramentas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Domínio em tecnologias modernas para criar soluções completas e escaláveis
          </p>
        </ScrollReveal>

        {/* Tech Pills */}
        <ScrollReveal className="mb-16">
          <div className="flex flex-wrap justify-center gap-3">
            {techLogos.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-full glass-card border-white/[0.1] cursor-default"
                style={{
                  boxShadow: `0 0 20px ${tech.color}20`,
                }}
              >
                <span
                  className="text-sm font-medium"
                  style={{ color: tech.color }}
                >
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Skill Categories with Progress Bars */}
        <StaggerReveal 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          staggerDelay={0.15}
        >
          {skillCategories.map((category, categoryIndex) => (
            <StaggerItem key={category.title}>
              <div className="glass-card-hover p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-accent/10">
                    <category.icon className="text-accent" size={22} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={categoryIndex * 0.1 + skillIndex * 0.1}
                    />
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* Stats */}
        <ScrollReveal className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "8+", label: "Anos de Experiência" },
              { value: "50+", label: "Projetos Concluídos" },
              { value: "30+", label: "Clientes Satisfeitos" },
              { value: "15+", label: "Tecnologias" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center glass-card p-6"
              >
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-display font-bold text-gradient-accent mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;
