#!/bin/bash

# Compress all PNG images to reasonable sizes
# This script uses ImageMagick (convert command)

echo "🖼️  Compressing images..."

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not found. Install with: brew install imagemagick"
    exit 1
fi

# Compress expert photos (200x200 -> optimize for web)
echo "Compressing expert photos..."
for file in public/experts/*.png; do
    convert "$file" -resize 400x400 -quality 85 -strip "$file"
    echo "✓ $(basename $file)"
done

# Compress success story photos (120x120 -> optimize)
echo "Compressing success story photos..."
for file in public/success/*.png; do
    convert "$file" -resize 400x400 -quality 85 -strip "$file"
    echo "✓ $(basename $file)"
done

# Compress hero images (1920x1080 -> optimize)
echo "Compressing hero images..."
for file in public/heroes/*.png; do
    convert "$file" -resize 1920x1080 -quality 80 -strip "$file"
    echo "✓ $(basename $file)"
done

# Compress blog images (1200x630 -> optimize)
echo "Compressing blog images..."
for file in public/blog/*.png; do
    convert "$file" -resize 1200x630 -quality 80 -strip "$file"
    echo "✓ $(basename $file)"
done

# Compress lifestyle images (1200x800 -> optimize)
echo "Compressing lifestyle images..."
for file in public/lifestyle/*.png; do
    convert "$file" -resize 1200x800 -quality 80 -strip "$file"
    echo "✓ $(basename $file)"
done

# Compress community images (1920x1080 -> optimize)
echo "Compressing community images..."
for file in public/community/*.png; do
    convert "$file" -resize 1920x1080 -quality 80 -strip "$file"
    echo "✓ $(basename $file)"
done

echo ""
echo "✅ Image compression complete!"
echo ""
echo "📊 New file sizes:"
du -sh public/experts public/success public/heroes public/blog public/lifestyle public/community
