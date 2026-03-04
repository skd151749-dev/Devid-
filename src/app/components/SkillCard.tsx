import { motion } from 'motion/react';

interface SkillCardProps {
  skill: {
    category: string;
    technologies: string[];
    color: string;
  };
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const colorMap: Record<string, string> = {
    cyan: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 hover:border-cyan-500/50',
    blue: 'from-blue-500/20 to-blue-500/5 border-blue-500/30 hover:border-blue-500/50',
    purple: 'from-purple-500/20 to-purple-500/5 border-purple-500/30 hover:border-purple-500/50',
    pink: 'from-pink-500/20 to-pink-500/5 border-pink-500/30 hover:border-pink-500/50',
  };

  const textColorMap: Record<string, string> = {
    cyan: 'text-cyan-400',
    blue: 'text-blue-400',
    purple: 'text-purple-400',
    pink: 'text-pink-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={`p-6 rounded-xl bg-gradient-to-br ${colorMap[skill.color]} border transition-all hover:scale-105 group`}
    >
      <h3 className={`text-xl font-mono mb-4 ${textColorMap[skill.color]}`}>
        {skill.category}
      </h3>
      <div className="space-y-2">
        {skill.technologies.map((tech) => (
          <div
            key={tech}
            className="flex items-center gap-2 text-slate-300 text-sm"
          >
            <div className={`w-2 h-2 rounded-full ${textColorMap[skill.color].replace('text-', 'bg-')}`}></div>
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
