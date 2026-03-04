import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { SkillCard } from '../components/SkillCard';

export function About() {
  const skills = [
    {
      category: 'Video Production',
      technologies: ['Adobe Premiere Pro', 'Video Editing', 'Content Creation', 'Post-Production'],
      color: 'cyan',
    },
    {
      category: 'Design',
      technologies: ['Poster Design', 'Graphic Design', 'Visual Content', 'Branding'],
      color: 'blue',
    },
    {
      category: 'Programming',
      technologies: ['Python', 'HTML', 'Streamlit', 'OpenCV', 'face_recognition'],
      color: 'purple',
    },
    {
      category: 'Tools & Workflow',
      technologies: ['GitHub', 'Version Control', 'Project Management', 'AI Integration'],
      color: 'pink',
    },
  ];

  const experience = [
    {
      icon: Briefcase,
      title: 'Video Editor & Visual Designer',
      company: 'SBM News',
      period: 'Present',
      description: 'Delivering engaging and impactful visual content through professional video production and poster design.',
    },
    {
      icon: Briefcase,
      title: 'AI Face Recognition Attendance System',
      company: 'Personal Project',
      period: '2024 - Present',
      description: 'Developing an AI-powered attendance system using Python, OpenCV, face_recognition library, and Streamlit for the user interface.',
    },
    {
      icon: GraduationCap,
      title: 'Creative Technologist',
      company: 'Self-Learning & Development',
      period: 'Ongoing',
      description: 'Continuously improving technical skills in video editing, design, and artificial intelligence to grow as a future innovator.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-mono mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Creative and motivated Video Editor and Visual Designer at SBM News. Passionate about technology and AI, continuously developing innovative solutions.
        </p>
      </motion.div>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-20"
      >
        <div className="flex items-center gap-3 mb-8">
          <Award className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl font-mono text-cyan-400">Technical Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.category} skill={skill} index={index} />
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl font-mono text-cyan-400">Experience & Education</h2>
        </div>
        <div className="space-y-6">
          {experience.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="relative p-6 rounded-xl bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-500/50 transition-all group"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-xl text-slate-100">{item.title}</h3>
                      <span className="text-sm text-cyan-400 font-mono">{item.period}</span>
                    </div>
                    <p className="text-blue-400 mb-2">{item.company}</p>
                    <p className="text-slate-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
}