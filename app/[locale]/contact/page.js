import { setRequestLocale } from 'next-intl/server';
import ContactContent from '@/components/ContactContent';

const locales = ['en', 'hi', 'es', 'fr'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const titles = {
    en: 'Contact Us - BlogHub',
    hi: 'संपर्क करें - BlogHub',
    es: 'Contáctanos - BlogHub',
    fr: 'Contactez-nous - BlogHub'
  };

  return {
    title: titles[locale] || titles.en,
  };
}

export default async function ContactPage({ params }) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return <ContactContent />;
}
