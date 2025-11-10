/**
 * Script to create favicons with white circular backgrounds
 * Uses sharp for image processing
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const logoPath = path.join(publicDir, '57772_hellotelle_DP+RM-01.png');
const sizes = [16, 32, 180, 192, 512];

async function createFaviconWithWhiteCircle(size) {
  // Load the logo - resize to 85% of circle size for padding
  const logoSize = Math.floor(size * 0.85);
  const logo = await sharp(logoPath).resize(logoSize, logoSize, {
    fit: 'inside',
    background: { r: 0, g: 0, b: 0, alpha: 0 }
  }).toBuffer();

  // Create white circle background
  const svgCircle = `
    <svg width="${size}" height="${size}">
      <circle cx="${size/2}" cy="${size/2}" r="${size/2 - 1}" fill="white"/>
    </svg>
  `;

  const circleBg = await sharp(Buffer.from(svgCircle))
    .png()
    .toBuffer();

  // Composite logo on top of white circle
  const outputPath = path.join(publicDir, `favicon-${size}x${size}.png`);
  const offset = Math.floor((size - logoSize) / 2);
  
  await sharp(circleBg)
    .composite([{
      input: logo,
      top: offset,
      left: offset
    }])
    .png()
    .toFile(outputPath);

  console.log(`✓ Created favicon-${size}x${size}.png`);
}

async function createAppleTouchIcon() {
  await createFaviconWithWhiteCircle(180);
  // Also create apple-touch-icon.png (same as 180x180)
  const source = path.join(publicDir, 'favicon-180x180.png');
  const dest = path.join(publicDir, 'apple-touch-icon.png');
  fs.copyFileSync(source, dest);
  console.log('✓ Created apple-touch-icon.png');
}

async function createAndroidIcons() {
  await createFaviconWithWhiteCircle(192);
  await createFaviconWithWhiteCircle(512);
  
  // Copy to android-chrome files
  const sizes192 = path.join(publicDir, 'favicon-192x192.png');
  const sizes512 = path.join(publicDir, 'favicon-512x512.png');
  fs.copyFileSync(sizes192, path.join(publicDir, 'android-chrome-192x192.png'));
  fs.copyFileSync(sizes512, path.join(publicDir, 'android-chrome-512x512.png'));
  console.log('✓ Created android-chrome icons');
}

async function main() {
  console.log('Creating favicons with white circular backgrounds...\n');
  
  try {
    // Create standard favicons
    await createFaviconWithWhiteCircle(16);
    await createFaviconWithWhiteCircle(32);
    
    // Create Apple touch icon
    await createAppleTouchIcon();
    
    // Create Android icons
    await createAndroidIcons();
    
    console.log('\n✅ All favicons created successfully!');
  } catch (error) {
    console.error('❌ Error creating favicons:', error);
    process.exit(1);
  }
}

main();
