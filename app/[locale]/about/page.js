import { setRequestLocale } from 'next-intl/server';
import AboutContent from '@/components/AboutContent';

const locales = ['en', 'hi', 'es', 'fr'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const titles = {
    en: 'About Us - BlogHub',
    hi: 'हमारे बारे में - BlogHub',
    es: 'Sobre Nosotros - BlogHub',
    fr: 'À Propos - BlogHub'
  };

  return {
    title: titles[locale] || titles.en,
  };
}

export default async function AboutPage({ params }) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return <AboutContent />;
}
