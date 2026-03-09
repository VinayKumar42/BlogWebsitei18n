import { setRequestLocale } from 'next-intl/server';
import HomeContent from '@/components/HomeContent';
import { getLatestPosts, blogPosts, categories } from '@/data/blog';

const locales = ['en', 'hi', 'es', 'fr'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const titles = {
    en: 'BlogHub - Home',
    hi: 'BlogHub - होम',
    es: 'BlogHub - Inicio',
    fr: 'BlogHub - Accueil'
  };

  return {
    title: titles[locale] || titles.en,
  };
}

export default async function HomePage({ params }) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const latestPosts = getLatestPosts(3);

  return (
    <HomeContent
      locale={locale}
      latestPosts={latestPosts}
      allPosts={blogPosts}
      categories={categories}
    />
  );
}
