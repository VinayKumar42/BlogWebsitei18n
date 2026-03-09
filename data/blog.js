export const blogPosts = [
  {
    id: 1,
    slug: "understanding-nextjs-app-router",
    title: {
      en: "Understanding Next.js App Router",
      hi: "Next.js ऐप राउटर को समझना",
      es: "Entendiendo el App Router de Next.js",
      fr: "Comprendre le App Router de Next.js"
    },
    description: {
      en: "A comprehensive guide to the new App Router in Next.js 14, covering layouts, loading states, and server components.",
      hi: "Next.js 14 में नए ऐप राउटर के लिए एक व्यापक गाइड, जिसमें लेआउट, लोडिंग स्टेट्स और सर्वर कंपोनेंट्स शामिल हैं।",
      es: "Una guía completa del nuevo App Router en Next.js 14, cubriendo layouts, estados de carga y componentes de servidor.",
      fr: "Un guide complet du nouveau App Router dans Next.js 14, couvrant les layouts, les états de chargement et les composants serveur."
    },
    content: {
      en: `<p>The App Router in Next.js 14 represents a fundamental shift in how we build React applications. It introduces a new paradigm based on React Server Components, offering improved performance and a more intuitive file-based routing system.</p>

<h2>Key Features</h2>

<p>The App Router comes with several groundbreaking features:</p>

<ul>
<li><strong>Server Components by Default:</strong> Components are rendered on the server, reducing the JavaScript bundle sent to the client.</li>
<li><strong>Nested Layouts:</strong> Create shared UI that preserves state across navigations.</li>
<li><strong>Loading States:</strong> Built-in support for loading UI with the loading.js convention.</li>
<li><strong>Error Handling:</strong> Automatic error boundaries with error.js files.</li>
</ul>

<h2>Getting Started</h2>

<p>To use the App Router, simply create your pages inside the <code>app</code> directory. Each folder represents a route segment, and a <code>page.js</code> file makes the route publicly accessible.</p>

<p>The new routing system is more intuitive and powerful, making it easier to build complex applications with nested routes and shared layouts.</p>`,
      hi: `<p>Next.js 14 में ऐप राउटर React एप्लिकेशन बनाने के तरीके में एक मौलिक बदलाव का प्रतिनिधित्व करता है। यह React सर्वर कंपोनेंट्स पर आधारित एक नई paradigm पेश करता है, जो बेहतर प्रदर्शन और अधिक सहज फ़ाइल-आधारित रूटिंग सिस्टम प्रदान करता है।</p>

<h2>मुख्य विशेषताएं</h2>

<p>ऐप राउटर कई अभूतपूर्व सुविधाओं के साथ आता है:</p>

<ul>
<li><strong>डिफ़ॉल्ट रूप से सर्वर कंपोनेंट्स:</strong> कंपोनेंट्स सर्वर पर रेंडर होते हैं, जिससे क्लाइंट को भेजा जाने वाला JavaScript बंडल कम हो जाता है।</li>
<li><strong>नेस्टेड लेआउट:</strong> साझा UI बनाएं जो नेविगेशन में स्थिति को संरक्षित रखता है।</li>
<li><strong>लोडिंग स्टेट्स:</strong> loading.js कन्वेंशन के साथ लोडिंग UI के लिए बिल्ट-इन सपोर्ट।</li>
</ul>`,
      es: `<p>El App Router en Next.js 14 representa un cambio fundamental en cómo construimos aplicaciones React. Introduce un nuevo paradigma basado en React Server Components, ofreciendo un mejor rendimiento y un sistema de enrutamiento basado en archivos más intuitivo.</p>

<h2>Características Principales</h2>

<p>El App Router viene con varias características revolucionarias:</p>

<ul>
<li><strong>Componentes de Servidor por Defecto:</strong> Los componentes se renderizan en el servidor, reduciendo el bundle de JavaScript enviado al cliente.</li>
<li><strong>Layouts Anidados:</strong> Crea UI compartida que preserva el estado entre navegaciones.</li>
<li><strong>Estados de Carga:</strong> Soporte integrado para UI de carga con la convención loading.js.</li>
</ul>`,
      fr: `<p>Le App Router dans Next.js 14 représente un changement fondamental dans la façon dont nous construisons des applications React. Il introduit un nouveau paradigme basé sur les React Server Components, offrant des performances améliorées et un système de routage basé sur les fichiers plus intuitif.</p>

<h2>Caractéristiques Principales</h2>

<p>Le App Router est livré avec plusieurs fonctionnalités révolutionnaires:</p>

<ul>
<li><strong>Composants Serveur par Défaut:</strong> Les composants sont rendus sur le serveur, réduisant le bundle JavaScript envoyé au client.</li>
<li><strong>Layouts Imbriqués:</strong> Créez une UI partagée qui préserve l'état entre les navigations.</li>
<li><strong>États de Chargement:</strong> Support intégré pour l'UI de chargement avec la convention loading.js.</li>
</ul>`
    },
    author: "Jane Doe",
    date: "2025-03-15",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    slug: "mastering-tailwind-css",
    title: {
      en: "Mastering Tailwind CSS for Modern Web Design",
      hi: "आधुनिक वेब डिज़ाइन के लिए Tailwind CSS में महारत",
      es: "Dominando Tailwind CSS para Diseño Web Moderno",
      fr: "Maîtriser Tailwind CSS pour le Design Web Moderne"
    },
    description: {
      en: "Learn how to leverage Tailwind CSS to create beautiful, responsive designs without writing custom CSS.",
      hi: "कस्टम CSS लिखे बिना सुंदर, रिस्पॉन्सिव डिज़ाइन बनाने के लिए Tailwind CSS का उपयोग करना सीखें।",
      es: "Aprende a aprovechar Tailwind CSS para crear diseños hermosos y responsivos sin escribir CSS personalizado.",
      fr: "Apprenez à exploiter Tailwind CSS pour créer de beaux designs responsives sans écrire de CSS personnalisé."
    },
    content: {
      en: `<p>Tailwind CSS has revolutionized the way developers approach styling. Instead of writing custom CSS, you compose designs using utility classes directly in your HTML.</p>

<h2>Why Tailwind CSS?</h2>

<p>There are several compelling reasons to use Tailwind:</p>

<ul>
<li><strong>Rapid Development:</strong> Build designs quickly without context-switching to CSS files.</li>
<li><strong>Consistent Design:</strong> The constraint-based system ensures visual consistency.</li>
<li><strong>Responsive Design:</strong> Mobile-first breakpoints make responsive design intuitive.</li>
<li><strong>Dark Mode:</strong> Built-in dark mode support with the dark: variant.</li>
</ul>

<h2>Best Practices</h2>

<p>When working with Tailwind, consider extracting repeated patterns into components rather than using @apply too frequently. This maintains the utility-first philosophy while keeping your code DRY.</p>`,
      hi: `<p>Tailwind CSS ने डेवलपर्स के स्टाइलिंग के तरीके में क्रांति ला दी है। कस्टम CSS लिखने के बजाय, आप सीधे अपने HTML में उपयोगिता वर्गों का उपयोग करके डिज़ाइन बनाते हैं।</p>

<h2>Tailwind CSS क्यों?</h2>

<p>Tailwind का उपयोग करने के कई आकर्षक कारण हैं:</p>

<ul>
<li><strong>तेज़ विकास:</strong> CSS फ़ाइलों में context-switching के बिना तेज़ी से डिज़ाइन बनाएं।</li>
<li><strong>सुसंगत डिज़ाइन:</strong> constraint-based प्रणाली दृश्य स्थिरता सुनिश्चित करती है।</li>
</ul>`,
      es: `<p>Tailwind CSS ha revolucionado la forma en que los desarrolladores abordan el estilizado. En lugar de escribir CSS personalizado, compones diseños usando clases de utilidad directamente en tu HTML.</p>

<h2>¿Por qué Tailwind CSS?</h2>

<p>Hay varias razones convincentes para usar Tailwind:</p>

<ul>
<li><strong>Desarrollo Rápido:</strong> Construye diseños rápidamente sin cambiar de contexto a archivos CSS.</li>
<li><strong>Diseño Consistente:</strong> El sistema basado en restricciones asegura consistencia visual.</li>
</ul>`,
      fr: `<p>Tailwind CSS a révolutionné la façon dont les développeurs abordent le stylisme. Au lieu d'écrire du CSS personnalisé, vous composez des designs en utilisant des classes utilitaires directement dans votre HTML.</p>

<h2>Pourquoi Tailwind CSS?</h2>

<p>Il y a plusieurs raisons convaincantes d'utiliser Tailwind:</p>

<ul>
<li><strong>Développement Rapide:</strong> Construisez des designs rapidement sans changer de contexte vers des fichiers CSS.</li>
<li><strong>Design Cohérent:</strong> Le système basé sur les contraintes assure une cohérence visuelle.</li>
</ul>`
    },
    author: "John Smith",
    date: "2025-03-10",
    category: "Design",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    slug: "exploring-tokyo-japan",
    title: {
      en: "Exploring Tokyo: A First-Timer's Guide",
      hi: "टोक्यो की खोज: पहली बार आने वालों के लिए गाइड",
      es: "Explorando Tokio: Guía para Principiantes",
      fr: "Explorer Tokyo: Guide du Premier Visiteur"
    },
    description: {
      en: "Discover the best spots in Tokyo, from ancient temples to modern tech districts, perfect for first-time visitors.",
      hi: "प्राचीन मंदिरों से लेकर आधुनिक टेक जिलों तक टोक्यो के सबसे अच्छे स्थानों की खोज करें, पहली बार आने वालों के लिए एकदम सही।",
      es: "Descubre los mejores lugares de Tokio, desde templos antiguos hasta distritos tecnológicos modernos, perfecto para visitantes primerizos.",
      fr: "Découvrez les meilleurs endroits de Tokyo, des temples anciens aux quartiers technologiques modernes, parfait pour les primo-visiteurs."
    },
    content: {
      en: `<p>Tokyo is a city of contrasts, where ancient traditions meet cutting-edge technology. As a first-time visitor, navigating this vast metropolis can feel overwhelming, but with the right guidance, it becomes an unforgettable adventure.</p>

<h2>Must-Visit Districts</h2>

<ul>
<li><strong>Shibuya:</strong> Famous for its iconic crossing and vibrant nightlife.</li>
<li><strong>Akihabara:</strong> The electric town, paradise for anime and tech enthusiasts.</li>
<li><strong>Asakusa:</strong> Home to the historic Senso-ji Temple.</li>
<li><strong>Shinjuku:</strong> Skyscrapers, shopping, and the famous Omoide Yokocho.</li>
</ul>

<h2>Travel Tips</h2>

<p>Get a Suica or Pasmo card for easy transportation. The subway system is extensive and efficient, making it the best way to explore the city.</p>`,
      hi: `<p>टोक्यो विरोधाभासों का शहर है, जहां प्राचीन परंपराएं अत्याधुनिक तकनीक से मिलती हैं। पहली बार आने वाले के रूप में, इस विशाल महानगर में नेविगेट करना भारी लग सकता है, लेकिन सही मार्गदर्शन के साथ, यह एक अविस्मरणीय साहसिक कार्य बन जाता है।</p>

<h2>अवश्य देखने योग्य क्षेत्र</h2>

<ul>
<li><strong>शिबुया:</strong> अपनी प्रतिष्ठित क्रॉसिंग और जीवंत नाइटलाइफ के लिए प्रसिद्ध।</li>
<li><strong>अकिहाबारा:</strong> इलेक्ट्रिक टाउन, एनीमे और टेक उत्साही लोगों के लिए स्वर्ग।</li>
</ul>`,
      es: `<p>Tokio es una ciudad de contrastes, donde las tradiciones antiguas se encuentran con la tecnología de vanguardia. Como visitante primerizo, navegar esta vasta metrópolis puede sentirse abrumador, pero con la guía correcta, se convierte en una aventura inolvidable.</p>

<h2>Distritos Imperdibles</h2>

<ul>
<li><strong>Shibuya:</strong> Famoso por su icónico cruce y vibrante vida nocturna.</li>
<li><strong>Akihabara:</strong> La ciudad eléctrica, paraíso para entusiastas del anime y la tecnología.</li>
</ul>`,
      fr: `<p>Tokyo est une ville de contrastes, où les traditions anciennes rencontrent la technologie de pointe. En tant que premier visiteur, naviguer dans cette vaste métropole peut sembler écrasant, mais avec les bons conseils, cela devient une aventure inoubliable.</p>

<h2>Quartiers Incontournables</h2>

<ul>
<li><strong>Shibuya:</strong> Célèbre pour son passage iconique et sa vie nocturne vibrante.</li>
<li><strong>Akihabara:</strong> La ville électrique, paradis pour les passionnés d'anime et de technologie.</li>
</ul>`
    },
    author: "Emily Chen",
    date: "2025-03-05",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=400&fit=crop"
  },
  {
    id: 4,
    slug: "react-server-components-deep-dive",
    title: {
      en: "React Server Components: A Deep Dive",
      hi: "React सर्वर कंपोनेंट्स: एक गहन अध्ययन",
      es: "React Server Components: Una Inmersión Profunda",
      fr: "React Server Components: Une Plongée en Profondeur"
    },
    description: {
      en: "Understand how React Server Components work and how they can improve your application's performance.",
      hi: "समझें कि React सर्वर कंपोनेंट्स कैसे काम करते हैं और वे आपके एप्लिकेशन के प्रदर्शन को कैसे बेहतर बना सकते हैं।",
      es: "Comprende cómo funcionan los React Server Components y cómo pueden mejorar el rendimiento de tu aplicación.",
      fr: "Comprenez comment fonctionnent les React Server Components et comment ils peuvent améliorer les performances de votre application."
    },
    content: {
      en: `<p>React Server Components represent a new way of building React applications that combines the best of server-side rendering with the interactivity of client-side React.</p>

<h2>Benefits of Server Components</h2>

<ul>
<li><strong>Zero Bundle Size:</strong> Server components don't add to your JavaScript bundle.</li>
<li><strong>Direct Backend Access:</strong> Access databases and file systems directly.</li>
<li><strong>Automatic Code Splitting:</strong> Client components are automatically code-split.</li>
</ul>

<h2>When to Use Each Type</h2>

<p>Use Server Components for data fetching and static content. Use Client Components for interactivity and browser APIs.</p>`,
      hi: `<p>React सर्वर कंपोनेंट्स React एप्लिकेशन बनाने का एक नया तरीका दर्शाते हैं जो सर्वर-साइड रेंडरिंग के सर्वश्रेष्ठ को क्लाइंट-साइड React की इंटरैक्टिविटी के साथ जोड़ता है।</p>

<h2>सर्वर कंपोनेंट्स के लाभ</h2>

<ul>
<li><strong>शून्य बंडल आकार:</strong> सर्वर कंपोनेंट्स आपके JavaScript बंडल में नहीं जुड़ते।</li>
<li><strong>सीधी बैकएंड पहुंच:</strong> डेटाबेस और फ़ाइल सिस्टम को सीधे एक्सेस करें।</li>
</ul>`,
      es: `<p>Los React Server Components representan una nueva forma de construir aplicaciones React que combina lo mejor del renderizado del lado del servidor con la interactividad de React del lado del cliente.</p>

<h2>Beneficios de los Server Components</h2>

<ul>
<li><strong>Tamaño de Bundle Cero:</strong> Los componentes de servidor no añaden a tu bundle de JavaScript.</li>
<li><strong>Acceso Directo al Backend:</strong> Accede a bases de datos y sistemas de archivos directamente.</li>
</ul>`,
      fr: `<p>Les React Server Components représentent une nouvelle façon de construire des applications React qui combine le meilleur du rendu côté serveur avec l'interactivité de React côté client.</p>

<h2>Avantages des Server Components</h2>

<ul>
<li><strong>Taille de Bundle Zéro:</strong> Les composants serveur n'ajoutent pas à votre bundle JavaScript.</li>
<li><strong>Accès Direct au Backend:</strong> Accédez directement aux bases de données et aux systèmes de fichiers.</li>
</ul>`
    },
    author: "Jane Doe",
    date: "2025-02-28",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
  },
  {
    id: 5,
    slug: "ui-ux-design-principles",
    title: {
      en: "Essential UI/UX Design Principles",
      hi: "आवश्यक UI/UX डिज़ाइन सिद्धांत",
      es: "Principios Esenciales de Diseño UI/UX",
      fr: "Principes Essentiels de Design UI/UX"
    },
    description: {
      en: "Master the fundamental principles of UI/UX design that create exceptional user experiences.",
      hi: "UI/UX डिज़ाइन के मौलिक सिद्धांतों में महारत हासिल करें जो असाधारण उपयोगकर्ता अनुभव बनाते हैं।",
      es: "Domina los principios fundamentales del diseño UI/UX que crean experiencias de usuario excepcionales.",
      fr: "Maîtrisez les principes fondamentaux du design UI/UX qui créent des expériences utilisateur exceptionnelles."
    },
    content: {
      en: `<p>Great design isn't just about aesthetics—it's about creating intuitive, accessible, and delightful user experiences.</p>

<h2>Core Principles</h2>

<ul>
<li><strong>Hierarchy:</strong> Guide users' attention through visual hierarchy.</li>
<li><strong>Consistency:</strong> Maintain consistent patterns throughout your design.</li>
<li><strong>Feedback:</strong> Always provide feedback for user actions.</li>
<li><strong>Accessibility:</strong> Design for all users, regardless of ability.</li>
</ul>

<h2>Color and Typography</h2>

<p>Choose colors that reflect your brand and ensure sufficient contrast. Typography should be readable and establish clear hierarchy.</p>`,
      hi: `<p>महान डिज़ाइन केवल सौंदर्यशास्त्र के बारे में नहीं है—यह सहज, सुलभ और आनंददायक उपयोगकर्ता अनुभव बनाने के बारे में है।</p>

<h2>मुख्य सिद्धांत</h2>

<ul>
<li><strong>पदानुक्रम:</strong> दृश्य पदानुक्रम के माध्यम से उपयोगकर्ताओं का ध्यान आकर्षित करें।</li>
<li><strong>स्थिरता:</strong> अपने पूरे डिज़ाइन में सुसंगत पैटर्न बनाए रखें।</li>
</ul>`,
      es: `<p>El gran diseño no se trata solo de estética—se trata de crear experiencias de usuario intuitivas, accesibles y encantadoras.</p>

<h2>Principios Fundamentales</h2>

<ul>
<li><strong>Jerarquía:</strong> Guía la atención de los usuarios a través de la jerarquía visual.</li>
<li><strong>Consistencia:</strong> Mantén patrones consistentes en todo tu diseño.</li>
</ul>`,
      fr: `<p>Le bon design ne concerne pas seulement l'esthétique—il s'agit de créer des expériences utilisateur intuitives, accessibles et agréables.</p>

<h2>Principes Fondamentaux</h2>

<ul>
<li><strong>Hiérarchie:</strong> Guidez l'attention des utilisateurs à travers la hiérarchie visuelle.</li>
<li><strong>Cohérence:</strong> Maintenez des motifs cohérents dans tout votre design.</li>
</ul>`
    },
    author: "John Smith",
    date: "2025-02-20",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop"
  },
  {
    id: 6,
    slug: "hidden-gems-of-paris",
    title: {
      en: "Hidden Gems of Paris Beyond the Eiffel Tower",
      hi: "एफिल टॉवर से परे पेरिस के छिपे हुए रत्न",
      es: "Joyas Ocultas de París Más Allá de la Torre Eiffel",
      fr: "Les Trésors Cachés de Paris Au-delà de la Tour Eiffel"
    },
    description: {
      en: "Explore lesser-known spots in Paris that most tourists miss, from secret gardens to hidden cafés.",
      hi: "पेरिस में कम-ज्ञात स्थानों का अन्वेषण करें जो अधिकांश पर्यटक चूक जाते हैं, गुप्त उद्यानों से लेकर छिपे हुए कैफे तक।",
      es: "Explora lugares menos conocidos de París que la mayoría de los turistas se pierden, desde jardines secretos hasta cafés escondidos.",
      fr: "Explorez les endroits moins connus de Paris que la plupart des touristes manquent, des jardins secrets aux cafés cachés."
    },
    content: {
      en: `<p>While the Eiffel Tower and Louvre are must-sees, Paris has countless hidden treasures waiting to be discovered by adventurous travelers.</p>

<h2>Secret Spots</h2>

<ul>
<li><strong>Canal Saint-Martin:</strong> A picturesque waterway perfect for afternoon strolls.</li>
<li><strong>Promenade Plantée:</strong> An elevated park built on an old railway line.</li>
<li><strong>Le Marais:</strong> Historic district with charming boutiques and cafés.</li>
</ul>

<h2>Local Tips</h2>

<p>Visit bakeries in the morning for the freshest croissants. Explore different arrondissements to experience the city's diverse neighborhoods.</p>`,
      hi: `<p>जबकि एफिल टॉवर और लौवर अवश्य देखने योग्य हैं, पेरिस में साहसी यात्रियों द्वारा खोजे जाने की प्रतीक्षा में अनगिनत छिपे हुए खजाने हैं।</p>

<h2>गुप्त स्थान</h2>

<ul>
<li><strong>कैनाल सेंट-मार्टिन:</strong> दोपहर की सैर के लिए एकदम सही सुरम्य जलमार्ग।</li>
<li><strong>प्रोमेनेड प्लांटी:</strong> पुरानी रेलवे लाइन पर निर्मित एक ऊंचा पार्क।</li>
</ul>`,
      es: `<p>Mientras que la Torre Eiffel y el Louvre son imprescindibles, París tiene innumerables tesoros escondidos esperando ser descubiertos por viajeros aventureros.</p>

<h2>Lugares Secretos</h2>

<ul>
<li><strong>Canal Saint-Martin:</strong> Una pintoresca vía fluvial perfecta para paseos por la tarde.</li>
<li><strong>Promenade Plantée:</strong> Un parque elevado construido sobre una antigua línea de ferrocarril.</li>
</ul>`,
      fr: `<p>Alors que la Tour Eiffel et le Louvre sont incontournables, Paris possède d'innombrables trésors cachés qui attendent d'être découverts par les voyageurs aventureux.</p>

<h2>Lieux Secrets</h2>

<ul>
<li><strong>Canal Saint-Martin:</strong> Une voie d'eau pittoresque parfaite pour les promenades de l'après-midi.</li>
<li><strong>Promenade Plantée:</strong> Un parc surélevé construit sur une ancienne ligne de chemin de fer.</li>
</ul>`
    },
    author: "Emily Chen",
    date: "2025-02-15",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=400&fit=crop"
  }
];

export const categories = ["All", "Technology", "Design", "Travel"];

export function getBlogPost(slug) {
  return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category) {
  if (category === "All") return blogPosts;
  return blogPosts.filter(post => post.category === category);
}

export function getRelatedPosts(currentSlug, category, limit = 3) {
  return blogPosts
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}

export function getLatestPosts(limit = 3) {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}
