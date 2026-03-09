import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import BlogPostContent from './BlogPostContent';
import { blogPosts, getBlogPost } from '@/data/blog';

const locales = ['en', 'hi', 'es', 'fr'];

export async function generateStaticParams() {
  const params = [];

  for (const locale of locales) {
    for (const post of blogPosts) {
      params.push({
        locale,
        slug: post.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title[locale] || post.title.en} | BlogHub`,
    description: post.description[locale] || post.description.en,
  };
}

export default async function BlogPostPage({ params }) {
  const { locale, slug } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} locale={locale} slug={slug} />;
}
