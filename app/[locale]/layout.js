import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Providers } from '@/components/Providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../globals.css';

const locales = ['en', 'hi', 'es', 'fr'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const titles = {
    en: 'BlogHub - Discover Insightful Articles',
    hi: 'BlogHub - ज्ञानवर्धक लेख खोजें',
    es: 'BlogHub - Descubre Artículos Perspicaces',
    fr: 'BlogHub - Découvrez des Articles Perspicaces'
  };

  const descriptions = {
    en: 'Explore articles on technology, design, and travel. A modern multi-language blog platform.',
    hi: 'प्रौद्योगिकी, डिज़ाइन और यात्रा पर लेख खोजें। एक आधुनिक बहुभाषी ब्लॉग प्लेटफ़ॉर्म।',
    es: 'Explora artículos sobre tecnología, diseño y viajes. Una plataforma de blog multilingüe moderna.',
    fr: 'Explorez des articles sur la technologie, le design et les voyages. Une plateforme de blog multilingue moderne.'
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <div className="flex flex-col min-h-screen">
              <Navbar locale={locale} />
              <main className="flex-grow pt-16">
                {children}
              </main>
              <Footer locale={locale} />
            </div>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
