'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import BlogCard from '@/components/BlogCard';
import CategoryFilter from '@/components/CategoryFilter';
import PageTransition from '@/components/PageTransition';
import { blogPosts, categories, getBlogPostsByCategory } from '@/data/blog';

export default function BlogPage({ params }) {
  const t = useTranslations('blog');
  const [activeCategory, setActiveCategory] = useState('All');

  const locale = params.locale;
  const filteredPosts = getBlogPostsByCategory(activeCategory);

  return (
    <PageTransition>
      <section className="py-20 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">
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
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Explore our collection of articles on technology, design, and travel.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                post={post}
                locale={locale}
                index={index}
              />
            ))}
          </div>

          {/* Empty state */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-slate-500 dark:text-slate-400 text-lg">
                No posts found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
