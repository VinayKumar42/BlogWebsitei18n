'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import BlogCard from '@/components/BlogCard';
import CategoryFilter from '@/components/CategoryFilter';
import PageTransition from '@/components/PageTransition';
import { getLatestPosts, getBlogPostsByCategory, categories } from '@/data/blog';

export default function HomePage({ params }) {
  const t = useTranslations('blog');
  const [activeCategory, setActiveCategory] = useState('All');

  // Using React.use() for params in client component
  const locale = params.locale;
  const latestPosts = getLatestPosts(3);
  const filteredPosts = getBlogPostsByCategory(activeCategory);

  return (
    <PageTransition>
      {/* Hero Section */}
      <Hero locale={locale} />

      {/* Category Filter Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              {t('latestPosts')}
            </h2>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
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
            {(activeCategory === 'All' ? latestPosts : filteredPosts.slice(0, 3)).map((post, index) => (
              <BlogCard
                key={post.id}
                post={post}
                locale={locale}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent to-purple-50/50 dark:to-purple-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Technology',
                description: 'Stay updated with the latest in web development and tech trends.',
                icon: '💻'
              },
              {
                title: 'Design',
                description: 'Explore modern design principles and best practices.',
                icon: '🎨'
              },
              {
                title: 'Travel',
                description: 'Discover amazing destinations and travel tips from around the world.',
                icon: '✈️'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-card p-8 text-center"
              >
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
