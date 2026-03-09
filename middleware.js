import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'hi', 'es', 'fr'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export const config = {
  matcher: ['/', '/(en|hi|es|fr)/:path*']
};
