const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const galleryDir = path.join(__dirname, '..', 'public', 'Images', 'Gallery', 'West London');

async function convertImages() {
    try {
        const files = fs.readdirSync(galleryDir);
        const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));
        
        console.log(`Found ${imageFiles.length} images to convert in West London gallery`);
        
        for (const file of imageFiles) {
            const inputPath = path.join(galleryDir, file);
            const outputPath = path.join(galleryDir, path.parse(file).name + '.webp');
            
            // Skip if webp already exists
            if (fs.existsSync(outputPath)) {
                console.log(`⏭️  Skipped (already exists): ${file}`);
                continue;
            }
            
            await sharp(inputPath)
                .webp({ quality: 85 })
                .toFile(outputPath);
            
            console.log(`✅ Converted: ${file} -> ${path.parse(file).name}.webp`);
        }
        
        console.log('\n✨ Conversion complete!');
    } catch (error) {
        console.error('Error during conversion:', error);
        process.exit(1);
    }
}

convertImages();
