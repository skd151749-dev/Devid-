import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import literacyThumbnail from 'figma:asset/5ba9f7189fafa063c5e2934cec125ee704c6bef1.png';
import fackmarkThumbnail from 'figma:asset/14fe8684fbcc8c5a5b7e6ea153ada8e06f424b1b.png';

export function WebPlatform() {
  const platforms = [
    {
      title: 'Literacy Starter Kits',
      description: 'An educational platform designed to provide comprehensive literacy resources and learning materials for students and educators.',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      image: literacyThumbnail,
      link: 'https://literacy-starter-kit.vercel.app/',
    },
    {
      title: 'FackMark',
      description: 'An innovative web-based platform currently under development, focused on delivering cutting-edge solutions.',
      technologies: ['Python', 'Streamlit', 'AI/ML'],
      image: fackmarkThumbnail,
      status: 'Ongoing',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20 px-6">
      <div className="max-w-7xl mx-auto py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-cyan-400 font-mono">{'<'}</span>
            Web-Based Platforms
            <span className="text-cyan-400 font-mono">{'/>'}</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Explore my web-based platform projects and applications.
          </p>
        </motion.div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative rounded-xl overflow-hidden bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={platform.image}
                  alt={platform.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80"></div>
                
                {/* Status Badge */}
                {platform.status && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/50 text-cyan-300 text-xs font-mono">
                    {platform.status}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-mono text-cyan-400 mb-3">{platform.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{platform.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {platform.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {platform.link && (
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Platform
                  </a>
                )}
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}