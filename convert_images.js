const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const projectDir = '/Volumes/SSD BIG/Project/DICH VU KH 2026/TVT AGENCY/Antigravity/06_TOOLS/landing-page-builder/toilatung-platform';
const brainDir = '/Users/phiyen/.gemini/antigravity/brain/5d2a8d2e-e53c-4086-9a5f-2316c2faafbc';

const heroSrc = path.join(brainDir, 'workflow_vault_hero_1778804835203.png');
const coverSrc = path.join(brainDir, 'workflow_vault_cover_1778804854141.png');

const productsDir = path.join(projectDir, 'public/images/products');
const coursesDir = path.join(projectDir, 'public/images/courses');

if (!fs.existsSync(productsDir)) fs.mkdirSync(productsDir, { recursive: true });
if (!fs.existsSync(coursesDir)) fs.mkdirSync(coursesDir, { recursive: true });

async function convert() {
    await sharp(heroSrc)
        .resize(1200, 675, { fit: 'cover' }) // 16:9 ratio
        .webp({ quality: 85 })
        .toFile(path.join(productsDir, 'workflow-vault-hero.webp'));
        
    await sharp(coverSrc)
        .resize(800, 800, { fit: 'cover' }) // square or mostly square for course list
        .webp({ quality: 85 })
        .toFile(path.join(coursesDir, 'cover_workflow_vault.webp'));
        
    // Also create the OG image
    await sharp(heroSrc)
        .resize(1200, 630, { fit: 'cover' })
        .webp({ quality: 85 })
        .toFile(path.join(productsDir, 'workflow-vault-og-1200x630.webp'));
        
    console.log("Images converted successfully!");
}

convert().catch(console.error);
