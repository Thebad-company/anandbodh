# On-Page SEO Strategy for Anandbodh

## Overview
This document outlines the comprehensive on-page SEO implementation for the Anandbodh website to improve search engine rankings and organic traffic.

---

## 1. METADATA & HEAD TAGS

### 1.1 Title Tags
**Best Practices:**
- Length: 50-60 characters (displays fully in search results)
- Include primary keyword at the beginning
- Include brand name (Anandbodh™)
- Make it compelling and click-worthy

**Format:** `[Primary Keyword] | Anandbodh™ – [Value Proposition]`

**Examples:**
- Home: "Anandbodh™ – The Happy Life | Increase Your Healthspan"
- Programs: "Wellness Programs | Anandbodh™ – Evidence-Based Health"
- Blog: "Health & Wellness Blog | Anandbodh™ – Science-Backed Insights"

### 1.2 Meta Descriptions
**Best Practices:**
- Length: 150-160 characters
- Include primary keyword naturally
- Include call-to-action
- Unique for each page
- Compelling and benefit-focused

**Format:** `[Benefit] + [What it is] + [CTA]`

### 1.3 Canonical Tags
- Add to all pages to prevent duplicate content issues
- Use absolute URLs
- Point to the preferred version of the page

### 1.4 Open Graph Tags (Social Sharing)
- `og:title` - Page title
- `og:description` - Page description
- `og:image` - Social sharing image (1200x630px)
- `og:url` - Canonical URL
- `og:type` - Website type

### 1.5 Twitter Card Tags
- `twitter:card` - Card type (summary_large_image)
- `twitter:title` - Page title
- `twitter:description` - Page description
- `twitter:image` - Image for Twitter

---

## 2. HEADING STRUCTURE (H1, H2, H3)

### Best Practices:
- **One H1 per page** - Main topic/keyword
- **H2s** - Major sections (3-5 per page)
- **H3s** - Subsections under H2s
- Hierarchical structure (no skipping levels)
- Include keywords naturally
- Make headings descriptive and user-focused

### Example Structure:
```
H1: Main Page Topic
  H2: Section 1
    H3: Subsection 1.1
    H3: Subsection 1.2
  H2: Section 2
    H3: Subsection 2.1
```

---

## 3. KEYWORD OPTIMIZATION

### Primary Keywords by Page:
- **Home**: "wellness programs", "health coaching", "lifestyle disorders"
- **Programs**: "wellness programs", "meditation", "ayurveda", "soleus activation"
- **Blog**: "health tips", "wellness advice", "meditation benefits"
- **Community**: "wellness community", "health forums", "support groups"
- **About**: "about anandbodh", "wellness company", "health experts"

### Keyword Placement:
1. **Title tag** - Primary keyword
2. **Meta description** - Primary keyword
3. **H1 heading** - Primary keyword
4. **First 100 words** - Primary keyword
5. **H2/H3 headings** - Related keywords
6. **Body text** - Natural keyword usage (2-3% density)
7. **Image alt text** - Descriptive with keywords
8. **URL slug** - Primary keyword (if applicable)

---

## 4. CONTENT OPTIMIZATION

### 4.1 Content Length
- Minimum 300 words per page
- Optimal: 1,500-2,500 words for main pages
- Blog posts: 1,500-3,000 words

### 4.2 Content Structure
- Clear introduction (first 100 words)
- Logical flow with subheadings
- Short paragraphs (2-3 sentences)
- Bullet points for lists
- Clear conclusion with CTA

### 4.3 Internal Linking
- Link to related pages
- Use descriptive anchor text
- 3-5 internal links per page
- Link to high-authority pages first

### 4.4 External Links
- Link to authoritative sources
- Use `rel="noopener noreferrer"` for external links
- 1-2 external links per page

---

## 5. IMAGE OPTIMIZATION

### 5.1 Image Alt Text
- Descriptive and keyword-rich
- 8-12 words
- Format: `[Image type] of [subject] [keyword]`
- Example: "Woman meditating in lotus position for stress relief"

### 5.2 Image File Names
- Use hyphens to separate words
- Include keywords
- Example: `meditation-stress-relief.jpg`

### 5.3 Image Size & Format
- Use WebP format for better compression
- Optimize file size (< 100KB for web)
- Use responsive images
- Lazy load images below the fold

---

## 6. STRUCTURED DATA (Schema Markup)

### 6.1 Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Anandbodh",
  "url": "https://anandbodh.com",
  "logo": "https://anandbodh.com/logo.png",
  "description": "Evidence-based wellness platform",
  "sameAs": ["https://twitter.com/anandbodh", "https://facebook.com/anandbodh"]
}
```

### 6.2 WebPage Schema
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Page Title",
  "description": "Page description",
  "url": "https://anandbodh.com/page",
  "mainEntity": {
    "@type": "Article",
    "headline": "Article Title",
    "image": "image-url",
    "datePublished": "2024-01-01",
    "author": {
      "@type": "Person",
      "name": "Author Name"
    }
  }
}
```

### 6.3 BreadcrumbList Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://anandbodh.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Programs",
      "item": "https://anandbodh.com/programs"
    }
  ]
}
```

---

## 7. TECHNICAL SEO

### 7.1 URL Structure
- Use hyphens to separate words
- Keep URLs short and descriptive
- Use lowercase letters
- Include primary keyword
- Example: `/programs/soleus-activation`

### 7.2 Mobile Responsiveness
- ✅ Already implemented with media queries
- Test on multiple devices
- Ensure touch-friendly buttons (44px minimum)

### 7.3 Page Speed
- Optimize images
- Minify CSS/JS
- Use CDN for static assets
- Enable compression
- Target: < 3 seconds load time

### 7.4 SSL Certificate
- ✅ HTTPS enabled (required for Vercel)

### 7.5 Robots.txt & Sitemap
- Create `robots.txt` to guide crawlers
- Create `sitemap.xml` for all pages
- Submit to Google Search Console

---

## 8. IMPLEMENTATION CHECKLIST

### Phase 1: Core Pages (Week 1)
- [ ] Update home page metadata
- [ ] Update programs page metadata
- [ ] Update blog page metadata
- [ ] Add canonical tags to all pages
- [ ] Add Open Graph tags

### Phase 2: Content Optimization (Week 2)
- [ ] Optimize H1/H2/H3 structure
- [ ] Add internal links
- [ ] Optimize image alt text
- [ ] Improve content length where needed

### Phase 3: Structured Data (Week 3)
- [ ] Add Organization schema
- [ ] Add WebPage schema
- [ ] Add BreadcrumbList schema
- [ ] Add Article schema for blog posts

### Phase 4: Technical SEO (Week 4)
- [ ] Create robots.txt
- [ ] Create sitemap.xml
- [ ] Test page speed
- [ ] Submit to Google Search Console

---

## 9. MONITORING & MAINTENANCE

### Tools to Use:
- **Google Search Console** - Monitor rankings and indexing
- **Google Analytics 4** - Track traffic and user behavior
- **Lighthouse** - Check page speed and SEO score
- **Screaming Frog** - Crawl site for SEO issues
- **Semrush/Ahrefs** - Competitor analysis and keyword research

### Monthly Tasks:
- Review search rankings
- Check for crawl errors
- Monitor page speed
- Update content as needed
- Build backlinks

---

## 10. KEYWORD RESEARCH BY PAGE

### Home Page
- Primary: "wellness programs"
- Secondary: "health coaching", "lifestyle disorders", "healthspan"
- Long-tail: "evidence-based wellness programs", "reverse lifestyle disorders"

### Programs Page
- Primary: "wellness programs"
- Secondary: "meditation programs", "ayurveda", "soleus activation"
- Long-tail: "best wellness programs", "holistic health programs"

### Blog Page
- Primary: "health blog"
- Secondary: "wellness tips", "meditation benefits", "ayurveda guide"
- Long-tail: "science-backed health tips", "evidence-based wellness advice"

### Community Page
- Primary: "wellness community"
- Secondary: "health forums", "support groups", "wellness groups"
- Long-tail: "online wellness community", "health support groups"

### About Page
- Primary: "about anandbodh"
- Secondary: "wellness company", "health experts", "our mission"
- Long-tail: "anandbodh wellness platform", "evidence-based health company"

---

## 11. NEXT STEPS

1. **Audit Current State** - Check current rankings and indexing
2. **Implement Metadata** - Update all page titles and descriptions
3. **Optimize Content** - Improve heading structure and content
4. **Add Schema** - Implement structured data markup
5. **Monitor Results** - Track rankings and traffic improvements

Expected Results:
- 30-50% increase in organic traffic (3-6 months)
- Improved click-through rate from search results
- Better search engine rankings for target keywords
- Increased user engagement and conversions
