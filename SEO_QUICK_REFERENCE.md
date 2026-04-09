# SEO Quick Reference Guide

## 🚀 Quick Start - Update Any Page in 2 Minutes

### Step 1: Import the utility
```javascript
import { generateMetadata, pageMetadata } from "@/lib/seoMetadata";
```

### Step 2: Add metadata export
```javascript
export const metadata = generateMetadata({
  title: pageMetadata.yourPage.title,
  description: pageMetadata.yourPage.description,
  keywords: pageMetadata.yourPage.keywords,
  url: pageMetadata.yourPage.url,
});
```

### Step 3: Add structured data (optional but recommended)
```javascript
import { OrganizationSchema, BreadcrumbSchema } from "@/components/StructuredData";

export default function YourPage() {
  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema breadcrumbs={[
        { name: "Home", url: "https://anandbodh.com" },
        { name: "Your Page", url: "https://anandbodh.com/your-page" },
      ]} />
      {/* Your page content */}
    </>
  );
}
```

---

## 📄 Page Metadata Templates

### Blog Page
```javascript
export const metadata = generateMetadata({
  title: pageMetadata.blog.title,
  description: pageMetadata.blog.description,
  keywords: pageMetadata.blog.keywords,
  url: pageMetadata.blog.url,
  image: "https://anandbodh.com/og-blog.jpg",
});
```

### Community Page
```javascript
export const metadata = generateMetadata({
  title: pageMetadata.community.title,
  description: pageMetadata.community.description,
  keywords: pageMetadata.community.keywords,
  url: pageMetadata.community.url,
  image: "https://anandbodh.com/og-community.jpg",
});
```

### About Page
```javascript
export const metadata = generateMetadata({
  title: pageMetadata.about.title,
  description: pageMetadata.about.description,
  keywords: pageMetadata.about.keywords,
  url: pageMetadata.about.url,
  image: "https://anandbodh.com/og-about.jpg",
});
```

### Contact Page
```javascript
export const metadata = generateMetadata({
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
  keywords: pageMetadata.contact.keywords,
  url: pageMetadata.contact.url,
  image: "https://anandbodh.com/og-contact.jpg",
});
```

### Pricing Page
```javascript
export const metadata = generateMetadata({
  title: pageMetadata.pricing.title,
  description: pageMetadata.pricing.description,
  keywords: pageMetadata.pricing.keywords,
  url: pageMetadata.pricing.url,
  image: "https://anandbodh.com/og-pricing.jpg",
});
```

---

## 🏷️ Heading Structure Examples

### Blog Post Page
```html
<h1>The Science of Meditation: How It Transforms Your Brain</h1>
  <h2>What is Meditation?</h2>
    <h3>Types of Meditation</h3>
    <h3>Benefits of Meditation</h3>
  <h2>How Meditation Works</h2>
    <h3>Brain Changes</h3>
    <h3>Neuroplasticity</h3>
  <h2>Getting Started with Meditation</h2>
    <h3>Beginner Tips</h3>
    <h3>Common Mistakes</h3>
```

### Program Page
```html
<h1>Soleus Activation Program</h1>
  <h2>What is the Soleus Muscle?</h2>
    <h3>Anatomy of the Soleus</h3>
    <h3>Why It Matters</h3>
  <h2>Program Overview</h2>
    <h3>Week 1-2: Foundation</h3>
    <h3>Week 3-4: Progression</h3>
  <h2>Expected Results</h2>
    <h3>Physical Benefits</h3>
    <h3>Health Improvements</h3>
```

---

## 🖼️ Image Alt Text Examples

### Good Alt Text
- "Woman meditating in lotus position for stress relief"
- "Soleus muscle highlighted in human leg anatomy diagram"
- "Ayurvedic herbs and spices for wellness"
- "Group of people in yoga class doing meditation"

### Bad Alt Text
- "image1.jpg"
- "meditation"
- "picture"
- "photo"

---

## 🔗 Internal Linking Examples

### Blog Post
```markdown
Learn more about [meditation benefits](/blog/meditation-as-medicine) 
and how it can [reduce stress](/blog/stress-science).

Join our [wellness community](/community) to connect with others 
on their health journey.

Explore our [meditation program](/programs/meditation) to get started.
```

### Program Page
```markdown
This program is part of our [comprehensive wellness approach](/programs).

Read our [blog post on soleus activation](/blog/soleus-muscle) 
to learn more about the science.

Join our [community forums](/forums) to discuss your progress.
```

---

## 📊 Keyword Placement Checklist

For each page, ensure keywords appear in:
- [ ] Title tag (primary keyword)
- [ ] Meta description (primary keyword)
- [ ] H1 heading (primary keyword)
- [ ] First 100 words (primary keyword)
- [ ] H2/H3 headings (related keywords)
- [ ] Body text (2-3% keyword density)
- [ ] Image alt text (descriptive with keywords)
- [ ] URL slug (if applicable)

---

## 🔍 SEO Audit Checklist

Before publishing a page:
- [ ] Title tag: 50-60 characters, includes keyword and brand
- [ ] Meta description: 150-160 characters, includes keyword and CTA
- [ ] H1 tag: One per page, includes primary keyword
- [ ] H2/H3 tags: Hierarchical structure, includes related keywords
- [ ] Images: Descriptive alt text, optimized file names
- [ ] Internal links: 3-5 per page, descriptive anchor text
- [ ] Content length: Minimum 300 words (1500+ for main pages)
- [ ] Mobile responsive: Tested on multiple devices
- [ ] Page speed: Lighthouse score > 80
- [ ] Structured data: Added where applicable

---

## 🛠️ Tools & Commands

### Build and Test
```bash
# Build the project
npm run build

# Test page speed
npm run lighthouse

# Check for SEO issues
npm run seo-audit
```

### Verify Metadata
1. Open page in browser
2. Right-click → View Page Source
3. Search for `<meta name="description"`
4. Verify title tag in `<title>` tag
5. Check for Open Graph tags

### Test Structured Data
1. Go to [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Paste page URL
3. Check for errors and warnings
4. Verify schema markup is correct

---

## 📋 Pages to Update (Priority Order)

### High Priority (Week 1)
- [ ] `/blog` - Blog listing page
- [ ] `/community` - Community page
- [ ] `/about` - About page
- [ ] `/contact` - Contact page
- [ ] `/pricing` - Pricing page

### Medium Priority (Week 2)
- [ ] `/signin` - Sign in page
- [ ] `/login` - Login page
- [ ] `/dashboard` - Dashboard page
- [ ] `/programs/soleus-activation` - Program detail
- [ ] `/programs/meditation` - Program detail

### Low Priority (Week 3)
- [ ] `/privacy` - Privacy page
- [ ] `/terms` - Terms page
- [ ] `/careers` - Careers page
- [ ] `/insights` - Insights page
- [ ] `/research` - Research page

---

## 🎯 SEO Best Practices

### DO ✅
- Use descriptive, keyword-rich titles
- Write compelling meta descriptions
- Use proper heading hierarchy
- Add descriptive image alt text
- Include internal links
- Keep content fresh and updated
- Use mobile-friendly design
- Optimize page speed
- Add structured data
- Monitor rankings

### DON'T ❌
- Keyword stuff (overuse keywords)
- Duplicate content across pages
- Use misleading titles or descriptions
- Ignore mobile users
- Use poor quality images
- Forget about user experience
- Ignore page speed
- Use outdated SEO tactics
- Ignore analytics data
- Neglect content quality

---

## 📈 Expected Timeline

**Week 1:** Update all page metadata
- Estimated time: 2-3 hours
- Impact: Immediate improvement in search results appearance

**Week 2:** Add structured data
- Estimated time: 2-3 hours
- Impact: Better rich snippets in search results

**Week 3:** Optimize content
- Estimated time: 4-6 hours
- Impact: Improved rankings for target keywords

**Month 2-3:** Monitor and adjust
- Estimated time: 1-2 hours/week
- Impact: Continuous improvement in rankings and traffic

**Month 3-6:** See results
- Expected: 30-50% increase in organic traffic
- Expected: 10-20 keywords ranking in top 50

---

## 💡 Pro Tips

1. **Use Google Search Console** - Monitor your rankings and fix issues
2. **Check competitor keywords** - See what keywords competitors rank for
3. **Update old content** - Refresh existing content to improve rankings
4. **Build backlinks** - Get links from authority sites in your niche
5. **Create content clusters** - Link related content together
6. **Use long-tail keywords** - Target specific, less competitive keywords
7. **Optimize for featured snippets** - Answer questions directly
8. **Monitor page speed** - Aim for < 3 second load time
9. **Test on mobile** - Ensure great mobile experience
10. **Be patient** - SEO takes 3-6 months to show results

---

## 📞 Need Help?

### Resources
- [Next.js Metadata Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)
- [Moz SEO Guide](https://moz.com/beginners-guide-to-seo)

### Files to Reference
- `frontend/src/lib/seoMetadata.js` - Metadata utility
- `frontend/src/components/StructuredData.jsx` - Schema components
- `frontend/src/app/sitemap.js` - Sitemap generation
- `frontend/public/robots.txt` - Robots file
- `ON_PAGE_SEO_STRATEGY.md` - Full SEO strategy
