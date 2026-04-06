# 🎨 Emoji Replacement Guide - Professional Icons

## Overview

We've created a professional SVG icon system to replace all emojis with clean, modern icons that match the Anandbodh brand.

---

## Icon System Created

### Location
- **Component:** `src/components/Icons.jsx`
- **CSS:** Added to `src/app/globals.css`

### Available Icons

| Icon Name | Use Case |
|-----------|----------|
| `Brain` | Mental health, psychology |
| `Heart` | Health, wellness, love |
| `Meditation` | Yoga, meditation, mindfulness |
| `Book` | Learning, education, articles |
| `Users` | Community, groups, people |
| `Award` | Achievements, certificates, badges |
| `Settings` | Configuration, preferences |
| `Calendar` | Events, dates, scheduling |
| `Chart` | Analytics, statistics, data |
| `Lock` | Security, privacy, protection |
| `Rocket` | Launch, growth, speed |
| `Star` | Excellence, quality, rating |
| `Lightbulb` | Ideas, insights, tips |
| `Globe` | World, international, web |
| `Check` | Success, completion, verified |
| `User` | Profile, account, person |
| `Mail` | Email, messages, contact |
| `Leaf` | Nature, organic, wellness |
| `Dumbbell` | Fitness, exercise, strength |
| `Utensils` | Food, nutrition, diet |
| `Clock` | Time, duration, schedule |
| `Download` | Download, save, export |
| `Share` | Social sharing, distribution |
| `Message` | Chat, comments, discussion |
| `TrendingUp` | Growth, progress, improvement |
| `Zap` | Energy, power, activation |

---

## How to Use

### Basic Usage

```jsx
import { Icon } from '@/components/Icons';

// In your component
<Icon name="Heart" size={24} className="icon-primary" />
```

### In Cards

```jsx
<div className="benefit-card">
  <Icon name="Book" size={32} className="benefit-icon" />
  <h3>Learning</h3>
  <p>Educational content</p>
</div>
```

### With Custom Colors

```jsx
<Icon name="Star" size={24} className="icon-success" />
```

---

## Pages to Update

### 1. Dashboard (`src/app/dashboard/page.js`)
**Status:** ✅ DONE
- Replaced all emojis with Icon component
- Updated stats, activity, events, quick actions

### 2. Pricing (`src/app/pricing/page.js`)
**Status:** 🔄 TODO
- Replace 🔒 with `Lock` icon
- Replace 🚀 with `Rocket` icon

### 3. Sitemap (`src/app/sitemap-page/page.js`)
**Status:** 🔄 TODO
- Replace all section icons
- Replace feature icons

### 4. Experts (`src/app/experts/page.js`)
**Status:** 🔄 TODO
- Replace 🧘 with `Meditation`
- Replace 🍽️ with `Utensils`
- Replace 💪 with `Dumbbell`
- Replace 📚 with `Book`

### 5. My Certificates (`src/app/my-certificates/page.js`)
**Status:** 🔄 TODO
- Replace 🏆 with `Award`

### 6. Success Stories (`src/app/success-stories/page.js`)
**Status:** 🔄 TODO
- Replace ✨ with `Star`

### 7. Newsletter (`src/app/newsletter/page.js`)
**Status:** 🔄 TODO
- Replace 📚 with `Book`
- Replace 💡 with `Lightbulb`
- Replace 👥 with `Users`
- Replace 🌟 with `Star`

### 8. Careers (`src/app/careers/page.js`)
**Status:** 🔄 TODO
- Replace ❤️ with `Heart`
- Replace ✨ with `Star`
- Replace 🌍 with `Globe`
- Replace 💰 with `Chart` (or custom)
- Replace 📚 with `Book`
- Replace 🎯 with `Zap`
- Replace 🌟 with `Star`

### 9. Search (`src/app/search/page.js`)
**Status:** 🔄 TODO
- Replace 🧘 with `Meditation`
- Replace 📚 with `Book`
- Replace 👥 with `Users`
- Replace 👨‍⚕️ with `User`

---

## CSS Classes

### Icon Styling

```css
/* Icon wrapper */
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
}

/* Icon in cards */
.benefit-icon,
.feature-icon,
.expertise-icon,
.action-icon,
.stat-icon,
.guarantee-icon,
.certificate-icon,
.event-icon,
.activity-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(212, 175, 55, 0.1);
  color: var(--gold);
}

/* Icon colors */
.icon-primary { color: var(--gold); }
.icon-success { color: #5DAF8A; }
.icon-info { color: #6B9ED2; }
.icon-warning { color: #E08A8A; }
.icon-secondary { color: #9B8AC4; }
```

---

## Migration Checklist

### Phase 1: Core Pages (Today)
- [x] Dashboard
- [ ] Pricing
- [ ] Sitemap

### Phase 2: Content Pages (Tomorrow)
- [ ] Experts
- [ ] Certificates
- [ ] Success Stories
- [ ] Newsletter

### Phase 3: Additional Pages (Day 3)
- [ ] Careers
- [ ] Search
- [ ] All other pages

---

## Example: Updating a Page

### Before (with emojis)
```jsx
<div className="benefit-card">
  <span className="benefit-icon">📚</span>
  <h4>Learning</h4>
  <p>Educational content</p>
</div>
```

### After (with icons)
```jsx
import { Icon } from '@/components/Icons';

<div className="benefit-card">
  <Icon name="Book" size={32} className="benefit-icon" />
  <h4>Learning</h4>
  <p>Educational content</p>
</div>
```

---

## Icon Sizing Guide

| Size | Use Case |
|------|----------|
| 16px | Small inline icons |
| 20px | Activity/status icons |
| 24px | Default size |
| 32px | Card icons |
| 40px | Large section icons |
| 60px | Hero section icons |

---

## Color Variants

### Primary (Gold)
```jsx
<Icon name="Heart" className="icon-primary" />
```

### Success (Green)
```jsx
<Icon name="Check" className="icon-success" />
```

### Info (Blue)
```jsx
<Icon name="Book" className="icon-info" />
```

### Warning (Red)
```jsx
<Icon name="Zap" className="icon-warning" />
```

### Secondary (Purple)
```jsx
<Icon name="Star" className="icon-secondary" />
```

---

## Benefits

✅ **Professional Look** - Clean SVG icons instead of emojis  
✅ **Brand Consistency** - All icons match brand colors  
✅ **Customizable** - Easy to change colors and sizes  
✅ **Accessible** - Proper semantic HTML  
✅ **Performance** - Lightweight SVG icons  
✅ **Responsive** - Scales perfectly on all devices  

---

## Next Steps

1. ✅ Create icon system
2. ✅ Update dashboard
3. 🔄 Update pricing page
4. 🔄 Update sitemap page
5. 🔄 Update experts page
6. 🔄 Update all other pages
7. 🔄 Test all pages
8. 🔄 Deploy to production

---

## Support

If you need to add a new icon:

1. Add SVG path to `src/components/Icons.jsx`
2. Export from `Icons` object
3. Use in component: `<Icon name="NewIcon" />`

---

**Status:** Icon system ready, dashboard updated  
**Next:** Update remaining pages  
**Estimated Time:** 2-3 hours for all pages

