import { motion } from 'motion/react';
import { ChevronRight, Code2, Cpu, Database, Server } from 'lucide-react';
import { Link } from 'react-router';

export function Home() {
  const techIcons = [
    { icon: Code2, label: 'Video Editing', delay: 0, link: 'https://www.youtube.com/watch?v=o1DAvJZCPWg&list=PLtxOBbrndXURABXdweHuuzz_SZYiotW-h' },
    { icon: Server, label: 'Graphic Design', delay: 0.1, link: 'https://drive.google.com/file/d/1Gnu_Zi65QkjEAJjZkhTJoTp7fnuWXH3V/view?usp=sharing' },
    { icon: Cpu, label: 'Web Dev', delay: 0.2, link: 'https://literacy-starter-kit.vercel.app/' },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10">
              <span className="text-cyan-400 text-sm font-mono">Available for work</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6">
              <span className="block font-mono bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Creative Technologist
              </span>
              <span className="block mt-2 font-mono bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                & AI Innovator
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto"
          >
            Video Editor & Visual Designer at SBM News | Developing AI-powered solutions with Python
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/projects"
              className="group px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
            >
              View My Work
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-lg border border-cyan-500/30 text-cyan-400 font-mono hover:bg-cyan-500/10 transition-all"
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Tech Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-20"
          >
            {techIcons.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                  <Icon className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                  <p className="text-slate-300 font-mono text-sm">{item.label}</p>
                </>
              );

              return item.link ? (
                <motion.a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + item.delay }}
                  className="group relative p-6 rounded-xl bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:scale-105 cursor-pointer"
                >
                  {content}
                </motion.a>
              ) : (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + item.delay }}
                  className="group relative p-6 rounded-xl bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:scale-105"
                >
                  {content}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
      ></motion.div>
    </div>
  );
}