#!/bin/bash

# Convert PNG images to WebP format for better compression
# WebP is 25-35% smaller than PNG

echo "🔄 Converting images to WebP format..."

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "❌ cwebp not found. Install with: brew install webp"
    exit 1
fi

convert_folder() {
    local folder=$1
    local quality=$2
    
    if [ ! -d "$folder" ]; then
        return
    fi
    
    echo "Converting $folder..."
    for file in "$folder"/*.png; do
        if [ -f "$file" ]; then
            webp_file="${file%.png}.webp"
            cwebp -q $quality "$file" -o "$webp_file"
            echo "✓ $(basename $file) -> $(basename $webp_file)"
        fi
    done
}

# Convert all folders
convert_folder "public/experts" 85
convert_folder "public/success" 85
convert_folder "public/heroes" 80
convert_folder "public/blog" 80
convert_folder "public/lifestyle" 80
convert_folder "public/community" 80

echo ""
echo "✅ WebP conversion complete!"
echo ""
echo "📊 File sizes comparison:"
echo "PNG files:"
find public -name "*.png" -type f | xargs du -sh | tail -5
echo ""
echo "WebP files:"
find public -name "*.webp" -type f | xargs du -sh | tail -5
