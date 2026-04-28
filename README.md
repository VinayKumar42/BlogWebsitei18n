# BlogHub - Multi-Language Blog Website

A professional, multi-language blog website built with Next.js 14+ (App Router), featuring internationalization (i18n), dark mode, glassmorphism design, and smooth animations.

## Features

- **Multi-Language Support**: English, Hindi, Spanish, and French
- **Modern Design**: Glassmorphism effects, gradients, and smooth animations
- **Dark Mode**: System preference detection with manual toggle
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Metadata API, static generation for blog posts
- **Animations**: Framer Motion for smooth page transitions and interactions

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Theme**: next-themes
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd MultipleLangI18N
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

The app will automatically redirect to `/en` (or your browser's preferred language if supported).

## Project Structure

```
MultipleLangI18N/
├── app/
│   ├── [locale]/
│   │   ├── layout.js          # Root layout with locale support
│   │   ├── page.js            # Home page
│   │   ├── loading.js         # Loading spinner
│   │   ├── not-found.js       # 404 page
│   │   ├── about/
│   │   │   └── page.js        # About page
│   │   ├── contact/
│   │   │   └── page.js        # Contact page with form
│   │   └── blog/
│   │       ├── page.js        # Blog list page
│   │       └── [slug]/
│   │           ├── page.js    # Blog detail page
│   │           └── BlogPostContent.js
│   └── globals.css            # Global styles
├── components/
│   ├── Navbar.js              # Navigation bar
│   ├── Footer.js              # Footer component
│   ├── Hero.js                # Hero section
│   ├── BlogCard.js            # Blog post card
│   ├── CategoryFilter.js      # Category filter buttons
│   ├── ThemeToggle.js         # Dark/light mode toggle
│   ├── LanguageSwitcher.js    # Language dropdown
│   ├── LoadingSpinner.js      # Loading animation
│   ├── PageTransition.js      # Page transition wrapper
│   └── Providers.js           # Theme provider wrapper
├── data/
│   └── blog.js                # Blog posts data
├── messages/
│   ├── en.json                # English translations
│   ├── hi.json                # Hindi translations
│   ├── es.json                # Spanish translations
│   └── fr.json                # French translations
├── i18n.js                    # i18n configuration
├── middleware.js              # Locale detection middleware
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── package.json               # Dependencies
```

## Routes

| Route | Description |
|-------|-------------|
| `/:locale` | Home page |
| `/:locale/blog` | Blog list page |
| `/:locale/blog/[slug]` | Blog detail page |
| `/:locale/about` | About page |
| `/:locale/contact` | Contact page |

Where `:locale` is one of: `en`, `hi`, `es`, `fr`

## Customization

### Adding a New Language

1. Create a new JSON file in `/messages/` (e.g., `de.json` for German)
2. Add the locale to the `locales` array in:
   - `middleware.js`
   - `i18n.js`
   - `app/[locale]/layout.js` (in `generateStaticParams`)
3. Add the language option in `components/LanguageSwitcher.js`

### Adding Blog Posts

Edit `/data/blog.js` and add new objects to the `blogPosts` array:

```javascript
{
  id: 7,
  slug: "your-post-slug",
  title: {
    en: "English Title",
    hi: "Hindi Title",
    es: "Spanish Title",
    fr: "French Title"
  },
  description: { ... },
  content: { ... },
  author: "Author Name",
  date: "2025-03-20",
  category: "Technology", // or "Design" or "Travel"
  image: "https://images.unsplash.com/..."
}
```

### Customizing Styles

- Edit `tailwind.config.js` for colors, gradients, and animations
- Edit `app/globals.css` for custom utility classes

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Feel free to use this project for personal or commercial purposes.

---

Built with Next.js, Tailwind CSS, and Framer Motion
I have implement in this things in our some project in feature i have implement this things in our everyproject.
