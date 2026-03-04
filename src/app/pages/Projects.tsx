import { motion } from 'motion/react';
import { Folder, ExternalLink, Github } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';

export function Projects() {
  const projects = [
    {
      title: 'AI Face Recognition Attendance System',
      description: 'An intelligent attendance system powered by AI using face recognition technology. Built with Python, OpenCV, and Streamlit for real-time face detection and attendance tracking.',
      technologies: ['Python', 'OpenCV', 'face_recognition', 'Streamlit', 'AI/ML'],
      image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=600&fit=crop',
      github: 'https://github.com',
      demo: 'https://example.com',
      status: 'Ongoing',
    },
    {
      title: 'SBM News Video Productions',
      description: 'Professional video editing and production work for SBM News, creating engaging news content and visual stories for broadcast and digital platforms.',
      technologies: ['Premiere Pro', 'Video Editing', 'Post-Production', 'Storytelling'],
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop',
      videos: [
        'https://youtu.be/Q1HlwAHMCdI',
        'https://youtu.be/fgHgOVfz-OU',
        'https://youtu.be/_f0Uxn2tGqs'
      ],
    },
    {
      title: 'Poster & Thumbnail Design',
      description: 'Collection of poster designs and graphic content created for various campaigns and events, showcasing creative visual communication and brand identity.',
      technologies: ['Graphic Design', 'Poster Design', 'Visual Content', 'Branding'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      designs: [
        'https://drive.google.com/file/d/11Ibca3TOZ1iLV37cHmmszzwDd-BZf7KE/view?usp=sharing',
        'https://drive.google.com/file/d/1Gnu_Zi65QkjEAJjZkhTJoTp7fnuWXH3V/view?usp=sharing',
        'https://drive.google.com/file/d/1tbtt6VJsty28Www4j8PxCCzZe1oqkiA7/view?usp=sharing'
      ],
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
        <div className="flex items-center justify-center gap-3 mb-6">
          <Folder className="w-10 h-10 text-cyan-400" />
          <h1 className="text-5xl md:text-6xl font-mono bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </h1>
        </div>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          A collection of projects showcasing my skills in full-stack development, system design, and problem-solving
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}