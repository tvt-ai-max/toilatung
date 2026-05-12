import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const blogImagesDir = './public/images/blog';
const contentDir = './src/content/blog';

async function standardizeImages() {
  const files = fs.readdirSync(blogImagesDir);
  
  for (const file of files) {
    const filePath = path.join(blogImagesDir, file);
    
    // 1. Handle -cover-800x800.webp
    if (file.includes('-cover-800x800.webp')) {
      const newName = file.replace('-cover-800x800.webp', '.webp');
      const newPath = path.join(blogImagesDir, newName);
      if (!fs.existsSync(newPath)) {
        fs.renameSync(filePath, newPath);
        console.log(`Renamed: ${file} -> ${newName}`);
      } else {
        fs.unlinkSync(filePath); // delete duplicate
        console.log(`Deleted duplicate: ${file}`);
      }
    }
    
    // 2. Handle .png files (convert to webp)
    if (file.endsWith('.png')) {
      const newName = file.replace('.png', '.webp');
      const newPath = path.join(blogImagesDir, newName);
      try {
        await sharp(filePath).webp().toFile(newPath);
        fs.unlinkSync(filePath);
        console.log(`Converted: ${file} -> ${newName}`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }
}

function updateMdxFrontmatter() {
  const mdxFiles = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'));
  
  for (const file of mdxFiles) {
    const filePath = path.join(contentDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const slug = file.replace('.mdx', '');
    
    // Update coverImage path
    const expectedPath = `/images/blog/${slug}.webp`;
    content = content.replace(/coverImage:\s*\"[^\"]+\"/, `coverImage: "${expectedPath}"`);
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated frontmatter for: ${file}`);
  }
}

async function run() {
  console.log('Standardizing images...');
  await standardizeImages();
  console.log('Updating MDX frontmatter...');
  updateMdxFrontmatter();
  console.log('Done!');
}

run();
