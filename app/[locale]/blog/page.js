import { setRequestLocale } from 'next-intl/server';
import BlogListContent from '@/components/BlogListContent';
import { blogPosts, categories } from '@/data/blog';

const locales = ['en', 'hi', 'es', 'fr'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const titles = {
    en: 'Blog - BlogHub',
    hi: 'ब्लॉग - BlogHub',
    es: 'Blog - BlogHub',
    fr: 'Blog - BlogHub'
  };

  return {
    title: titles[locale] || titles.en,
  };
}

export default async function BlogPage({ params }) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <BlogListContent
      locale={locale}
      posts={blogPosts}
      categories={categories}
    />
  );
}
