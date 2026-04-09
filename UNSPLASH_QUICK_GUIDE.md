# Unsplash Testimonials - Quick Guide

## 🎯 Current Setup

### Testimonial Images
```
Bryan Arnoldy
├── URL: https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop
├── Size: 200x200px
└── License: Free (Unsplash)

Joshua William
├── URL: https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop
├── Size: 200x200px
└── License: Free (Unsplash)

Sushmita S.
├── URL: https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop
├── Size: 200x200px
└── License: Free (Unsplash)
```

---

## 🔄 How to Change an Image

### Step 1: Find Image on Unsplash
1. Go to [Unsplash.com](https://unsplash.com)
2. Search for "professional portrait" or similar
3. Click on image you like

### Step 2: Get Image URL
1. Right-click on image
2. Select "Copy image address"
3. You'll get something like: `https://images.unsplash.com/photo-XXXXX`

### Step 3: Add Parameters
Add these parameters to the URL:
```
?w=200&h=200&fit=crop
```

Full URL example:
```
https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop
```

### Step 4: Update Component
Edit `frontend/src/components/Testimonials.jsx`:

```javascript
const testimonials = [
  {
    image: "https://images.unsplash.com/photo-YOUR-NEW-ID?w=200&h=200&fit=crop",
    name: "Bryan Arnoldy",
    location: "Entrepreneur, Scoot Inc.",
    text: "...",
    rating: 5,
  },
  // ...
];
```

### Step 5: Deploy
```bash
npm run build
git add .
git commit -m "Update testimonial images"
git push origin main
```

---

## 📸 Recommended Search Terms

### For Professional Portraits
- "professional portrait"
- "business headshot"
- "corporate portrait"
- "professional photo"
- "business person"
- "professional woman"
- "professional man"
- "entrepreneur"
- "business professional"

### For Specific Roles
- "data scientist"
- "content creator"
- "entrepreneur"
- "business executive"
- "professional woman"
- "professional man"

---

## 🎨 Image Selection Tips

### Good Testimonial Images
✅ Professional headshots
✅ Clear face visible
✅ Good lighting
✅ Neutral background
✅ Professional attire
✅ Friendly expression
✅ Square aspect ratio (1:1)

### Avoid
❌ Group photos
❌ Blurry images
❌ Very casual photos
❌ Extreme angles
❌ Poor lighting
❌ Distracting backgrounds

---

## 🔗 Unsplash URL Format

### Basic Format
```
https://images.unsplash.com/photo-[ID]
```

### With Parameters
```
https://images.unsplash.com/photo-[ID]?w=200&h=200&fit=crop
```

### Parameter Meanings
- `w=200` - Width in pixels
- `h=200` - Height in pixels
- `fit=crop` - Crop to fit dimensions

### Other Useful Parameters
- `q=80` - Quality (0-100)
- `auto=format` - Auto format (WebP, etc.)
- `crop=faces` - Crop to faces

### Full Example
```
https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80&auto=format
```

---

## 📋 File Locations

### Component
```
frontend/src/components/Testimonials.jsx
```

### Configuration
```
frontend/next.config.js
```

### CSS
```
frontend/src/app/globals.css
```

---

## 🚀 Deployment Checklist

Before deploying:
- [ ] Images display correctly locally
- [ ] Images are circular
- [ ] Images have borders
- [ ] Images load quickly
- [ ] Build compiles: `npm run build`
- [ ] No console errors
- [ ] Mobile responsive

After deploying:
- [ ] Check testimonials on live site
- [ ] Verify images load
- [ ] Test on mobile
- [ ] Test on different browsers

---

## 💡 Pro Tips

1. **Use Consistent Style:** Choose images with similar lighting and style
2. **Diverse Representation:** Use diverse photos for better representation
3. **Test Locally First:** Always test changes locally before deploying
4. **Keep URLs Updated:** Document which images you're using
5. **Monitor Performance:** Check page speed after changes
6. **Backup URLs:** Keep a list of image URLs you like

---

## 🔐 License & Attribution

### Unsplash License
- ✅ Free to use
- ✅ No permission required
- ✅ No attribution required
- ✅ Can be used commercially

### Optional Attribution
You can add attribution in footer:
```
Photos from Unsplash
```

---

## 📞 Quick Links

- [Unsplash.com](https://unsplash.com)
- [Unsplash API](https://unsplash.com/documentation)
- [Unsplash License](https://unsplash.com/license)
- [Next.js Image Docs](https://nextjs.org/docs/app/api-reference/components/image)

---

## ❓ FAQ

### Q: Can I use real employee photos?
A: Yes, but get permission first. Unsplash images are safer for generic testimonials.

### Q: Do I need to attribute Unsplash?
A: No, but it's appreciated. Add "Photos from Unsplash" in footer if you want.

### Q: Can I use these images commercially?
A: Yes, Unsplash license allows commercial use.

### Q: How do I find good testimonial images?
A: Search "professional portrait" or "business headshot" on Unsplash.

### Q: Can I change images later?
A: Yes, just update the URLs in the component and redeploy.

### Q: What if an image is removed from Unsplash?
A: The image will break. Keep backup URLs or use local images.

---

## 🎉 You're All Set!

Testimonials are now using real professional photos from Unsplash. You can easily change them anytime by updating the URLs.

**Happy deploying!** 🚀
