import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { ImageZoom } from './ImageZoom';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    github: string;
    external: string;
    image: string;
  };
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      className="p-4 rounded-lg bg-neutral-900/30 border border-neutral-800/30 backdrop-blur-sm"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative group mb-4">
        <motion.div
          className="relative overflow-hidden rounded-lg aspect-video"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <a href={project.external} target="_blank" rel="noopener noreferrer">
            <ImageZoom
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </motion.div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium text-neutral-100">{project.title}</h3>
          <div className="flex gap-3">
            <a
              href={project.github}
              className="text-neutral-400 hover:text-purple-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
            </a>
            <a
              href={project.external}
              className="text-neutral-400 hover:text-purple-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
        
        <p className="text-neutral-300 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs bg-purple-500/10 text-purple-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}; 