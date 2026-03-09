'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';

export default function BlogCard({ post, locale, index = 0 }) {
  const t = useTranslations('blog');

  const title = post.title[locale] || post.title.en;
  const description = post.description[locale] || post.description.en;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group glass-card overflow-hidden card-hover"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-white bg-purple-600/90 backdrop-blur-sm rounded-full">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
          <span className="flex items-center space-x-1">
            <User size={14} />
            <span>{post.author}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Calendar size={14} />
            <span>{formatDate(post.date)}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Read more link */}
        <Link href={`/${locale}/blog/${post.slug}`}>
          <motion.span
            whileHover={{ x: 5 }}
            className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400 font-semibold text-sm"
          >
            <span>{t('readMore')}</span>
            <ArrowRight size={16} />
          </motion.span>
        </Link>
      </div>
    </motion.article>
  );
}
