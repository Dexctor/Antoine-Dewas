const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public');
const outputDir = path.join(__dirname, '../public/optimized');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
  const images = fs.readdirSync(inputDir).filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file)
  );

  for (const image of images) {
    const inputPath = path.join(inputDir, image);
    const outputPath = path.join(outputDir, `${path.parse(image).name}.webp`);

    await sharp(inputPath)
      .webp({ quality: 80 })
      .resize(1200, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .toFile(outputPath);

    console.log(`Optimized: ${image} -> ${path.basename(outputPath)}`);
  }
}

optimizeImages().catch(console.error);