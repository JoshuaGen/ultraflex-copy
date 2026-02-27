#!/usr/bin/env node
/**
 * Convert all images in public/Images/Gallery/rotherham/ to WebP.
 * Usage: node scripts/convert-gallery-to-webp.mjs
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const galleryDir = path.join(__dirname, '..', 'public', 'Images', 'Gallery', 'rotherham');

const ALLOWED_EXT = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

const files = fs.readdirSync(galleryDir).filter((f) => {
  const ext = path.extname(f).toLowerCase();
  return ALLOWED_EXT.includes(ext) && !f.toLowerCase().endsWith('.webp');
});

if (files.length === 0) {
  console.log('No non-WebP images to convert in', galleryDir);
  process.exit(0);
}

console.log(`Converting ${files.length} image(s) to WebP in ${galleryDir}\n`);

for (const file of files) {
  const inputPath = path.join(galleryDir, file);
  const base = path.basename(file, path.extname(file));
  const outputPath = path.join(galleryDir, `${base}.webp`);
  try {
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);
    console.log(`  ✓ ${file} → ${base}.webp`);
    fs.unlinkSync(inputPath);
    console.log(`    (removed original ${file})`);
  } catch (err) {
    console.error(`  ✗ ${file}:`, err.message);
  }
}

console.log('\nDone.');
