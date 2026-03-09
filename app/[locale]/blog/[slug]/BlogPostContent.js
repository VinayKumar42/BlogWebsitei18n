'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import BlogCard from '@/components/BlogCard';
import PageTransition from '@/components/PageTransition';
import { getRelatedPosts } from '@/data/blog';

export default function BlogPostContent({ post, locale, slug }) {
  const t = useTranslations('blog');

  const title = post.title[locale] || post.title.en;
  const content = post.content[locale] || post.content.en;
  const relatedPosts = getRelatedPosts(slug, post.category, 2);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <PageTransition>
      <article className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium mb-8"
            >
              <ArrowLeft size={20} />
              <span>{t('backToBlog')}</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
              <span className="flex items-center space-x-1">
                <User size={16} />
                <span>{t('by')} {post.author}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>{formatDate(post.date)}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Tag size={16} />
                <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs font-medium">
                  {post.category}
                </span>
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">
              {title}
            </h1>
          </motion.header>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-10"
          >
            <Image
              src={post.image}
              alt={title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="prose prose-lg dark:prose-invert max-w-none blog-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 pt-16 border-t border-slate-200 dark:border-slate-700"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-text">
                {t('relatedPosts')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <BlogCard
                    key={relatedPost.id}
                    post={relatedPost}
                    locale={locale}
                    index={index}
                  />
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </article>
    </PageTransition>
  );
}
