import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/skd151749-dev/Literacy-starter-kit', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sokun-devid-178286369/', label: 'LinkedIn' },
    { icon: Mail, href: 'https://mail.google.com/mail/u/0/#search/sokun.devid13%40gmail.com', label: 'Email' },
  ];

  return (
    <footer className="border-t border-cyan-500/20 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm font-mono">
            Devid Sokun. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/50 hover:bg-cyan-500/10 text-slate-400 hover:text-cyan-400 transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}