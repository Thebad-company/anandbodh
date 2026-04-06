# Image Usage Guide

## ✅ Images Organized & Integrated

All 30 generated images have been organized into folders and integrated into the website.

---

## 📁 Image Locations & Usage

### 🦸 Heroes (`public/heroes/`) - 6 images

| Image | Used In | Status |
|-------|---------|--------|
| `hero-meditation-orb.png` | `src/components/Hero.jsx` | ✅ Integrated |
| `hero-soleus-activation.png` | `src/app/programs/soleus-activation/page.js` | 🔄 Ready to use |
| `hero-meditation-program.png` | `src/app/programs/meditation/page.js` | 🔄 Ready to use |
| `hero-ayurveda-program.png` | `src/app/programs/ayurveda/page.js` | 🔄 Ready to use |
| `hero-thrive-work.png` | `src/app/programs/thrive-at-work/page.js` | 🔄 Ready to use |
| `hero-wake-up-life.png` | `src/app/programs/wake-up-life/page.js` | 🔄 Ready to use |

**Usage Example:**
```jsx
<Image
  src="/heroes/hero-meditation-orb.png"
  alt="Meditation hero"
  width={1920}
  height={1080}
/>
```

---

### 📝 Blog (`public/blog/`) - 7 images

| Image | Used In | Status |
|-------|---------|--------|
| `blog-meditation-medicine.png` | `src/app/blog/meditation-as-medicine/page.js` | 🔄 Ready to use |
| `blog-stress-science.png` | `src/app/blog/stress-science/page.js` | 🔄 Ready to use |
| `blog-emotional-detox.png` | `src/app/blog/emotional-detox/page.js` | 🔄 Ready to use |
| `blog-ayurveda-balance.png` | `src/app/blog/ayurveda-balance/page.js` | 🔄 Ready to use |
| `blog-soleus-muscle.png` | `src/app/blog/soleus-muscle/page.js` | 🔄 Ready to use |
| `blog-divyanubhuti-dhyan.png` | `src/app/blog/divyanubhuti-dhyan/page.js` | 🔄 Ready to use |
| `blog-reversing-disorders.png` | `src/app/blog/reversing-disorders/page.js` | 🔄 Ready to use |

**Usage Example:**
```jsx
<Image
  src="/blog/blog-meditation-medicine.png"
  alt="Meditation as Medicine"
  width={1200}
  height={630}
/>
```

---

### 👨‍⚕️ Experts (`public/experts/`) - 6 images

| Image | Used In | Status |
|-------|---------|--------|
| `expert-dr-rajni-samota.png` | `src/app/experts/page.js` | ✅ Integrated |
| `expert-dr-vincent-keny.png` | `src/app/experts/page.js` | ✅ Integrated |
| `expert-ayurveda-specialist.png` | `src/app/experts/page.js` | ✅ Integrated |
| `expert-meditation-teacher.png` | `src/app/experts/page.js` | ✅ Integrated |
| `expert-yoga-instructor.png` | `src/app/experts/page.js` | ✅ Integrated |
| `expert-nutritionist.png` | `src/app/experts/page.js` | ✅ Integrated |

**All expert photos are live on `/experts` page!**

---

### 🌟 Success Stories (`public/success/`) - 6 images

| Image | Used In | Status |
|-------|---------|--------|
| `success-diabetes-reversal.png` | `src/app/success-stories/page.js` | ✅ Integrated |
| `success-weight-wellness.png` | `src/app/success-stories/page.js` | ✅ Integrated |
| `success-thyroid-balance.png` | `src/app/success-stories/page.js` | ✅ Integrated |
| `success-stress-relief.png` | `src/app/success-stories/page.js` | ✅ Integrated |
| `success-heart-health.png` | `src/app/success-stories/page.js` | ✅ Integrated |
| `success-overall-wellness.png` | `src/app/success-stories/page.js` | ✅ Integrated |

**All success story photos are live on `/success-stories` page!**

---

### 👥 Community (`public/community/`) - 1 image

| Image | Used In | Status |
|-------|---------|--------|
| `community-group-circle.png` | `src/app/community/page.js` | 🔄 Ready to use |

**Usage Example:**
```jsx
<Image
  src="/community/community-group-circle.png"
  alt="Community yoga circle"
  width={1920}
  height={1080}
/>
```

---

### 🌿 Lifestyle (`public/lifestyle/`) - 4 images

| Image | Used In | Status |
|-------|---------|--------|
| `ayurveda-herbs-collection.png` | Blog posts, Ayurveda pages | 🔄 Ready to use |
| `meditation-space-peaceful.png` | Meditation pages, blog posts | 🔄 Ready to use |
| `healthy-ayurvedic-meal.png` | Nutrition content, blog posts | 🔄 Ready to use |
| `contact-office-reception.png` | `src/app/contact/page.js` | 🔄 Ready to use |

**Usage Example:**
```jsx
<Image
  src="/lifestyle/ayurveda-herbs-collection.png"
  alt="Ayurvedic herbs"
  width={1200}
  height={800}
/>
```

---

## 🎯 Integration Status

### ✅ Fully Integrated (13 images)
- Hero meditation orb
- 6 expert photos
- 6 success story photos

### 🔄 Ready to Use (17 images)
- 5 program hero images
- 7 blog post images
- 1 community image
- 4 lifestyle images

---

## 📝 Next Steps to Complete Integration

### 1. Update Program Pages
Add hero images to each program page:

```jsx
// src/app/programs/soleus-activation/page.js
<Image
  src="/heroes/hero-soleus-activation.png"
  alt="Soleus Activation Program"
  width={1920}
  height={1080}
  className="program-hero-image"
/>
```

### 2. Update Blog Posts
Add hero images to each blog post:

```jsx
// src/app/blog/meditation-as-medicine/page.js
<Image
  src="/blog/blog-meditation-medicine.png"
  alt="Meditation as Medicine"
  width={1200}
  height={630}
  className="blog-hero-image"
/>
```

### 3. Update Community Page
Add group circle image:

```jsx
// src/app/community/page.js
<Image
  src="/community/community-group-circle.png"
  alt="Community gathering"
  width={1920}
  height={1080}
/>
```

### 4. Update Contact Page
Add office reception image:

```jsx
// src/app/contact/page.js
<Image
  src="/lifestyle/contact-office-reception.png"
  alt="Wellness center reception"
  width={1200}
  height={800}
/>
```

---

## 🎨 Image Specifications

### Hero Images (16:9)
- Dimensions: 1920x1080px
- Format: PNG
- Usage: Program pages, homepage

### Blog Images (Open Graph)
- Dimensions: 1200x630px
- Format: PNG
- Usage: Blog post headers

### Expert Photos (Square)
- Dimensions: 800x800px
- Format: PNG
- Usage: Expert profiles, about pages

### Success Stories (4:3)
- Dimensions: 800x600px
- Format: PNG
- Usage: Testimonials, success stories

### Lifestyle Images (3:2)
- Dimensions: 1200x800px
- Format: PNG
- Usage: Supporting content, backgrounds

---

## 🚀 Quick Commands

### View all images:
```bash
ls -R public/heroes public/blog public/experts public/success public/community public/lifestyle
```

### Check image sizes:
```bash
du -sh public/heroes/* public/blog/* public/experts/* public/success/* public/community/* public/lifestyle/*
```

---

**Last Updated:** April 3, 2026
**Total Images:** 30
**Integrated:** 13 ✅
**Ready to Use:** 17 🔄
