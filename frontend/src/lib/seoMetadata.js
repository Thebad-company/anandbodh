/**
 * SEO Metadata Generator
 * Centralized utility for generating consistent SEO metadata across all pages
 */

export const generateMetadata = ({
  title,
  description,
  keywords = [],
  url = "https://anandbodh.com",
  image = "https://anandbodh.com/og-image.jpg",
  type = "website",
  author = "Anandbodh",
  publishedDate = null,
  updatedDate = null,
}) => {
  const fullTitle = title.includes("Anandbodh") ? title : `${title} | Anandbodh™`;

  return {
    title: fullTitle,
    description,
    keywords: Array.isArray(keywords) ? keywords.join(", ") : keywords,
    metadataBase: new URL("https://anandbodh.com"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: "en_US",
      url,
      siteName: "Anandbodh™",
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedDate && { publishedTime: publishedDate }),
      ...(updatedDate && { modifiedTime: updatedDate }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@anandbodh",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
};

/**
 * Page-specific metadata configurations
 */
export const pageMetadata = {
  home: {
    title: "Anandbodh™ – The Happy Life | Increase Your Healthspan",
    description: "Evidence-based tools to reverse lifestyle disorders — combining Physical, Mental, Emotional & Spiritual health into one integrated system.",
    keywords: [
      "wellness programs",
      "health coaching",
      "meditation",
      "ayurveda",
      "soleus activation",
      "lifestyle disorders",
      "healthspan",
      "holistic health",
    ],
    url: "https://anandbodh.com",
  },

  programs: {
    title: "Wellness Programs | Anandbodh™ – Evidence-Based Health",
    description: "Discover our comprehensive wellness programs including Soleus Activation, Ayurvedic protocols, meditation techniques, and more to reverse lifestyle disorders.",
    keywords: [
      "wellness programs",
      "meditation programs",
      "ayurveda programs",
      "soleus activation",
      "health coaching",
      "holistic wellness",
      "evidence-based programs",
    ],
    url: "https://anandbodh.com/programs",
  },

  blog: {
    title: "Health & Wellness Blog | Anandbodh™ – Science-Backed Insights",
    description: "Read evidence-based articles on meditation, ayurveda, soleus activation, stress management, and holistic wellness from Anandbodh experts.",
    keywords: [
      "health blog",
      "wellness tips",
      "meditation benefits",
      "ayurveda guide",
      "stress management",
      "health advice",
      "wellness articles",
    ],
    url: "https://anandbodh.com/blog",
  },

  community: {
    title: "Wellness Community | Anandbodh™ – Connect & Grow",
    description: "Join our vibrant wellness community. Connect with like-minded individuals, participate in forums, join groups, and support each other on your health journey.",
    keywords: [
      "wellness community",
      "health forums",
      "support groups",
      "wellness groups",
      "online community",
      "health discussion",
    ],
    url: "https://anandbodh.com/community",
  },

  about: {
    title: "About Anandbodh™ | Our Mission & Values",
    description: "Learn about Anandbodh's mission to help people reverse lifestyle disorders through evidence-based wellness programs combining physical, mental, emotional, and spiritual health.",
    keywords: [
      "about anandbodh",
      "wellness company",
      "health experts",
      "our mission",
      "company values",
      "health platform",
    ],
    url: "https://anandbodh.com/about",
  },

  contact: {
    title: "Contact Anandbodh™ | Get in Touch",
    description: "Have questions? Contact our wellness experts at Anandbodh. We're here to help you on your journey to better health and happiness.",
    keywords: [
      "contact anandbodh",
      "get in touch",
      "wellness support",
      "customer service",
      "contact us",
    ],
    url: "https://anandbodh.com/contact",
  },

  pricing: {
    title: "Pricing | Anandbodh™ – Affordable Wellness",
    description: "Explore our flexible pricing plans for wellness programs. Choose the plan that fits your needs and start your journey to better health today.",
    keywords: [
      "pricing",
      "wellness pricing",
      "program costs",
      "membership plans",
      "affordable wellness",
    ],
    url: "https://anandbodh.com/pricing",
  },

  signin: {
    title: "Sign In | Anandbodh™",
    description: "Sign in to your Anandbodh account to access your wellness programs, dashboard, and community features.",
    keywords: ["sign in", "login", "account", "wellness account"],
    url: "https://anandbodh.com/signin",
  },

  login: {
    title: "Login | Anandbodh™",
    description: "Login to your Anandbodh account to access your wellness programs, dashboard, and community features.",
    keywords: ["login", "sign in", "account", "wellness account"],
    url: "https://anandbodh.com/login",
  },

  dashboard: {
    title: "Dashboard | Anandbodh™ – Your Wellness Hub",
    description: "Access your personalized wellness dashboard. Track your progress, view your programs, and manage your health journey.",
    keywords: ["dashboard", "wellness dashboard", "user dashboard", "progress tracking"],
    url: "https://anandbodh.com/dashboard",
  },

  privacy: {
    title: "Privacy Policy | Anandbodh™",
    description: "Read our privacy policy to understand how Anandbodh collects, uses, and protects your personal information.",
    keywords: ["privacy policy", "data protection", "privacy"],
    url: "https://anandbodh.com/privacy",
  },

  terms: {
    title: "Terms of Service | Anandbodh™",
    description: "Review our terms of service to understand the rules and conditions for using Anandbodh's wellness platform.",
    keywords: ["terms of service", "terms and conditions", "legal"],
    url: "https://anandbodh.com/terms",
  },
};

/**
 * Generate breadcrumb schema
 */
export const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

/**
 * Generate organization schema
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Anandbodh",
  url: "https://anandbodh.com",
  logo: "https://anandbodh.com/AnandBodhLogo-1536x512.jpg",
  description: "Evidence-based wellness platform combining physical, mental, emotional, and spiritual health.",
  sameAs: [
    "https://twitter.com/anandbodh",
    "https://facebook.com/anandbodh",
    "https://instagram.com/anandbodh",
    "https://linkedin.com/company/anandbodh",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    email: "support@anandbodh.com",
  },
};

/**
 * Generate article schema for blog posts
 */
export const generateArticleSchema = ({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author = "Anandbodh",
  url,
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Anandbodh",
      logo: {
        "@type": "ImageObject",
        url: "https://anandbodh.com/AnandBodhLogo-1536x512.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
};

/**
 * Generate FAQ schema
 */
export const generateFAQSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};
