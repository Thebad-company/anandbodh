#!/bin/bash

# Create folder structure
mkdir -p public/heroes
mkdir -p public/blog
mkdir -p public/experts
mkdir -p public/success
mkdir -p public/community
mkdir -p public/lifestyle

# Move hero images (PNG format)
mv public/hero-meditation-orb.png public/heroes/ 2>/dev/null
mv public/hero-soleus-activation.png public/heroes/ 2>/dev/null
mv public/hero-meditation-program.png public/heroes/ 2>/dev/null
mv public/hero-ayurveda-program.png public/heroes/ 2>/dev/null
mv public/hero-thrive-work.png public/heroes/ 2>/dev/null
mv public/hero-wake-up-life.png public/heroes/ 2>/dev/null

# Move blog images (PNG format)
mv public/blog-meditation-medicine.png public/blog/ 2>/dev/null
mv public/blog-stress-science.png public/blog/ 2>/dev/null
mv public/blog-emotional-detox.png public/blog/ 2>/dev/null
mv public/blog-ayurveda-balance.png public/blog/ 2>/dev/null
mv public/blog-soleus-muscle.png public/blog/ 2>/dev/null
mv public/blog-divyanubhuti-dhyan.png public/blog/ 2>/dev/null
mv public/blog-reversing-disorders.png public/blog/ 2>/dev/null

# Move expert photos (PNG format)
mv public/expert-dr-rajni-samota.png public/experts/ 2>/dev/null
mv public/expert-dr-vincent-keny.png public/experts/ 2>/dev/null
mv public/expert-ayurveda-specialist.png public/experts/ 2>/dev/null
mv public/expert-meditation-teacher.png public/experts/ 2>/dev/null
mv public/expert-yoga-instructor.png public/experts/ 2>/dev/null
mv public/expert-nutritionist.png public/experts/ 2>/dev/null

# Move success story images (PNG format)
mv public/success-diabetes-reversal.png public/success/ 2>/dev/null
mv public/success-weight-wellness.png public/success/ 2>/dev/null
mv public/success-thyroid-balance.png public/success/ 2>/dev/null
mv public/success-stress-relief.png public/success/ 2>/dev/null
mv public/success-heart-health.png public/success/ 2>/dev/null
mv public/success-overall-wellness.png public/success/ 2>/dev/null

# Move community images (PNG format)
mv public/community-group-circle.png public/community/ 2>/dev/null

# Move lifestyle/supporting images (PNG format)
mv public/ayurveda-herbs-collection.png public/lifestyle/ 2>/dev/null
mv public/meditation-space-peaceful.png public/lifestyle/ 2>/dev/null
mv public/healthy-ayurvedic-meal.png public/lifestyle/ 2>/dev/null
mv public/contact-office-reception.png public/lifestyle/ 2>/dev/null

echo "✅ Images organized successfully!"
echo ""
echo "📁 Folder structure:"
echo "  public/heroes/ - $(ls public/heroes/ 2>/dev/null | wc -l | tr -d ' ') images"
echo "  public/blog/ - $(ls public/blog/ 2>/dev/null | wc -l | tr -d ' ') images"
echo "  public/experts/ - $(ls public/experts/ 2>/dev/null | wc -l | tr -d ' ') images"
echo "  public/success/ - $(ls public/success/ 2>/dev/null | wc -l | tr -d ' ') images"
echo "  public/community/ - $(ls public/community/ 2>/dev/null | wc -l | tr -d ' ') images"
echo "  public/lifestyle/ - $(ls public/lifestyle/ 2>/dev/null | wc -l | tr -d ' ') images"
