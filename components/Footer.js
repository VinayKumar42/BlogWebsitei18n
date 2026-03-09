'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Heart, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer({ locale }) {
  const t = useTranslations('footer');
  const navT = useTranslations('nav');
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const footerLinks = [
    { href: `/${locale}`, label: navT('home') },
    { href: `/${locale}/blog`, label: navT('blog') },
    { href: `/${locale}/about`, label: navT('about') },
    { href: `/${locale}/contact`, label: navT('contact') },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="glass border-t border-white/10 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href={`/${locale}`} className="text-2xl font-bold gradient-text">
              BlogHub
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Discover insightful articles on technology, design, and travel.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">
              Connect
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © {currentYear} BlogHub. {t('copyright')}
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm flex items-center">
            {t('madeWith')} <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" /> {t('by')} BlogHub
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
