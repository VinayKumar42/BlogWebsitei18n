'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Code, Palette, Globe, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import PageTransition from '@/components/PageTransition';

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Node.js', icon: '💚' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'MongoDB', icon: '🍃' },
];

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' },
];

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <PageTransition>
      <section className="py-20 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t('title')}
            </h1>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-8 md:p-12 mb-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-purple-500/30 shadow-xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                  alt="Profile"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </motion.div>

              {/* Bio */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                  Jane Doe
                </h2>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">
                  Full Stack Developer & Content Creator
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t('bio')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-slate-800 dark:text-slate-100">
              {t('techStack')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="glass-card p-4 text-center cursor-default"
                >
                  <span className="text-3xl mb-2 block">{tech.icon}</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {[
              { label: 'Years Experience', value: '5+' },
              { label: 'Projects Completed', value: '50+' },
              { label: 'Articles Written', value: '100+' },
              { label: 'Happy Clients', value: '30+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 text-center"
              >
                <span className="text-3xl font-bold gradient-text">{stat.value}</span>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100">
              {t('followMe')}
            </h3>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 glass-card text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
