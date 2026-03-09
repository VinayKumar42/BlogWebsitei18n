'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';

const locales = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export default function LanguageSwitcher({ locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('language');

  const currentLocale = locales.find(l => l.code === locale) || locales[0];

  const handleLocaleChange = (newLocale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
      >
        <Globe size={18} className="text-slate-600 dark:text-slate-300" />
        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
          {currentLocale.flag} {currentLocale.name}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} className="text-slate-500" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 py-2 w-44 glass-card shadow-xl z-50"
            >
              {locales.map((loc) => (
                <motion.button
                  key={loc.code}
                  whileHover={{ backgroundColor: 'rgba(147, 51, 234, 0.1)' }}
                  onClick={() => handleLocaleChange(loc.code)}
                  className={`w-full px-4 py-2 text-left flex items-center space-x-2 transition-colors ${
                    locale === loc.code
                      ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30'
                      : 'text-slate-700 dark:text-slate-200'
                  }`}
                >
                  <span>{loc.flag}</span>
                  <span className="text-sm font-medium">{loc.name}</span>
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
