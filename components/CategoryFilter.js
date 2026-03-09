'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  const t = useTranslations('blog.categories');

  const getCategoryLabel = (category) => {
    const key = category.toLowerCase();
    try {
      return t(key);
    } catch {
      return category;
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category)}
          className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
            activeCategory === category
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
              : 'bg-white/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 backdrop-blur-sm border border-slate-200 dark:border-slate-700'
          }`}
        >
          {getCategoryLabel(category)}
        </motion.button>
      ))}
    </div>
  );
}
