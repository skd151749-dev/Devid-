import { motion } from 'motion/react';
import { ExternalLink, Github, Video, Image } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    github?: string;
    demo?: string;
    status?: string;
    videos?: string[];
    designs?: string[];
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group relative rounded-xl overflow-hidden bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:scale-105"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80"></div>
        
        {/* Status Badge */}
        {project.status && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/50 text-cyan-300 text-xs font-mono">
            {project.status}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-mono text-cyan-400 mb-3">{project.title}</h3>
        <p className="text-slate-300 text-sm mb-4 line-clamp-3">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          {/* Video Links */}
          {project.videos && project.videos.length > 0 && (
            <div className="space-y-1">
              {project.videos.map((videoUrl, idx) => (
                <a
                  key={idx}
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Video className="w-4 h-4" />
                  Watch Video {idx + 1}
                </a>
              ))}
            </div>
          )}
          
          {/* Design Links */}
          {project.designs && project.designs.length > 0 && (
            <div className="space-y-1">
              {project.designs.map((designUrl, idx) => (
                <a
                  key={idx}
                  href={designUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Image className="w-4 h-4" />
                  View Design {idx + 1}
                </a>
              ))}
            </div>
          )}
          
          {/* Code and Demo Links */}
          {(project.github || project.demo) && (
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </motion.div>
  );
}