#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const folders = [
  { dir: 'public/experts', width: 400, height: 400, quality: 85 },
  { dir: 'public/success', width: 400, height: 400, quality: 85 },
  { dir: 'public/heroes', width: 1920, height: 1080, quality: 80 },
  { dir: 'public/blog', width: 1200, height: 630, quality: 80 },
  { dir: 'public/lifestyle', width: 1200, height: 800, quality: 80 },
  { dir: 'public/community', width: 1920, height: 1080, quality: 80 },
];

async function compressImages() {
  console.log('🖼️  Starting image compression...\n');

  for (const folder of folders) {
    if (!fs.existsSync(folder.dir)) {
      console.log(`⏭️  Skipping ${folder.dir} (not found)`);
      continue;
    }

    const files = fs.readdirSync(folder.dir).filter(f => f.endsWith('.png'));
    
    if (files.length === 0) {
      console.log(`⏭️  No PNG files in ${folder.dir}`);
      continue;
    }

    console.log(`📁 Processing ${folder.dir}...`);

    for (const file of files) {
      const inputPath = path.join(folder.dir, file);
      const tempPath = path.join(folder.dir, `.${file}.tmp`);

      try {
        await sharp(inputPath)
          .resize(folder.width, folder.height, {
            fit: 'cover',
            position: 'center',
          })
          .png({ quality: folder.quality, progressive: true })
          .toFile(tempPath);

        // Replace original with compressed version
        fs.renameSync(tempPath, inputPath);

        const stats = fs.statSync(inputPath);
        const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
        console.log(`  ✓ ${file} (${sizeMB}MB)`);
      } catch (error) {
        console.error(`  ✗ ${file} - Error: ${error.message}`);
        // Clean up temp file if it exists
        if (fs.existsSync(tempPath)) {
          fs.unlinkSync(tempPath);
        }
      }
    }
    console.log('');
  }

  console.log('✅ Image compression complete!\n');
  
  // Show summary
  console.log('📊 Final file sizes:');
  for (const folder of folders) {
    if (fs.existsSync(folder.dir)) {
      const files = fs.readdirSync(folder.dir).filter(f => f.endsWith('.png'));
      if (files.length > 0) {
        let totalSize = 0;
        files.forEach(f => {
          const stats = fs.statSync(path.join(folder.dir, f));
          totalSize += stats.size;
        });
        const totalMB = (totalSize / 1024 / 1024).toFixed(2);
        console.log(`  ${folder.dir}: ${totalMB}MB (${files.length} files)`);
      }
    }
  }
}

compressImages().catch(console.error);
