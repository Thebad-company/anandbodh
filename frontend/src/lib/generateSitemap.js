/**
 * Sitemap Generator for Anandbodh
 * Generates XML sitemap for search engine indexing
 */

const BASE_URL = "https://anandbodh.com";

// All static routes with their priority and change frequency
const routes = [
  // Main pages
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/programs", priority: 0.9, changefreq: "weekly" },
  { path: "/blog", priority: 0.9, changefreq: "daily" },
  { path: "/community", priority: 0.8, changefreq: "weekly" },
  { path: "/about", priority: 0.7, changefreq: "monthly" },
  { path: "/contact", priority: 0.7, changefreq: "monthly" },
  { path: "/pricing", priority: 0.8, changefreq: "monthly" },

  // Program pages
  { path: "/programs/soleus-activation", priority: 0.8, changefreq: "monthly" },
  { path: "/programs/meditation", priority: 0.8, changefreq: "monthly" },
  { path: "/programs/ayurveda", priority: 0.8, changefreq: "monthly" },
  { path: "/programs/thrive-at-work", priority: 0.8, changefreq: "monthly" },
  { path: "/programs/wake-up-life", priority: 0.8, changefreq: "monthly" },

  // Blog posts
  { path: "/blog/soleus-muscle", priority: 0.7, changefreq: "monthly" },
  { path: "/blog/stress-science", priority: 0.7, changefreq: "monthly" },
  { path: "/blog/meditation-as-medicine", priority: 0.7, changefreq: "monthly" },
  { path: "/blog/nutrition-wellness", priority: 0.7, changefreq: "monthly" },
  { path: "/blog/sleep-quality", priority: 0.7, changefreq: "monthly" },
  { path: "/blog/movement-exercise", priority: 0.7, changefreq: "monthly" },
  { path: "/blog/emotional-detox", priority: 0.7, changefreq: "monthly" },
  { path: "/blog/reversing-disorders", priority: 0.7, changefreq: "monthly" },

  // Community pages
  { path: "/forums", priority: 0.7, changefreq: "weekly" },
  { path: "/groups", priority: 0.7, changefreq: "weekly" },
  { path: "/success-stories", priority: 0.7, changefreq: "weekly" },

  // User pages (low priority, no-index in robots.txt)
  { path: "/dashboard", priority: 0.5, changefreq: "weekly" },
  { path: "/signin", priority: 0.5, changefreq: "monthly" },
  { path: "/login", priority: 0.5, changefreq: "monthly" },

  // Legal pages
  { path: "/privacy", priority: 0.3, changefreq: "yearly" },
  { path: "/terms", priority: 0.3, changefreq: "yearly" },

  // Other pages
  { path: "/careers", priority: 0.6, changefreq: "monthly" },
  { path: "/insights", priority: 0.7, changefreq: "daily" },
  { path: "/research", priority: 0.6, changefreq: "monthly" },
  { path: "/experts", priority: 0.6, changefreq: "monthly" },
  { path: "/testimonials", priority: 0.6, changefreq: "monthly" },
  { path: "/faq", priority: 0.6, changefreq: "monthly" },
];

/**
 * Generate XML sitemap
 */
export function generateSitemap() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
${routes
  .map(
    (route) => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return xml;
}

/**
 * Generate sitemap index (for large sites with multiple sitemaps)
 */
export function generateSitemapIndex() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  </sitemap>
</sitemapindex>`;

  return xml;
}

/**
 * Get all routes for dynamic generation
 */
export function getAllRoutes() {
  return routes;
}
