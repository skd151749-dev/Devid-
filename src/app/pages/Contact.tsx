import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import profileImage from '../../assets/52b9d962121e7a5f6002097b4858144637db77df.png';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sokun.devid13@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sokun.devid13@gmail.com',
      external: true,
      copyable: false,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '070 532 056',
      copyValue: '+85570532056',
      href: 'tel:+85570532056',
      external: false,
      copyable: true,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Norton University, Keo Chenda St, Phnom Penh 12000',
      href: 'https://maps.app.goo.gl/fvajc1zyXp8r1qCE6',
      external: true,
      copyable: false,
    },
  ];

  const handlePhoneCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText('+85570532056');
      alert('Phone number copied! (+85570532056)');
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = '+85570532056';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Phone number copied! (+85570532056)');
    }
  };

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
          Get In Touch
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
            <img
              src={profileImage}
              alt="Devid Sokun"
              className="w-full h-full object-cover scale-150"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-mono text-cyan-400 mb-6">Contact Information</h2>
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={item.copyable ? handlePhoneCopy : undefined}
                {...(item.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-500/50 transition-all group cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">{item.label}</p>
                  <p className="text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
