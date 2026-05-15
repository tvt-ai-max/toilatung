import os
import glob
import re

blog_dir = 'src/content/blog/'
mdx_files = glob.glob(os.path.join(blog_dir, '*.mdx'))

print("--- SEO AUDIT FOR BLOG POSTS ---")
for file in mdx_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check frontmatter
    print(f"\nChecking {file}...")
    if 'title:' not in content: print("  - Missing title")
    if 'description:' not in content: print("  - Missing description")
    if 'coverImage:' not in content: print("  - Missing coverImage")
    else:
        # Check if coverImage points to a valid file
        match = re.search(r'coverImage:\s*["\'](.*?)["\']', content)
        if match:
            cover_path = "public" + match.group(1)
            if not os.path.exists(cover_path):
                print(f"  - coverImage file missing: {cover_path}")
    
    # Check images alt tags
    images = re.findall(r'!\[(.*?)\]\((.*?)\)', content)
    for alt, url in images:
        if not alt or 'Tôi là Tùng' not in alt and 'toilatung' not in alt and 'Tùng Sóc Sơn' not in alt and 'Nguyễn Thanh Tùng' not in alt:
            print(f"  - Image without SEO branding alt tag: ![{alt}]({url})")

print("\n--- GENERAL CODEBASE AUDIT ---")
# Check for unoptimized target="_blank"
def check_blank(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    lines = f.readlines()
                for i, line in enumerate(lines):
                    if 'target="_blank"' in line and 'rel="noopener noreferrer"' not in line:
                        print(f"  - {path}:{i+1} : Missing 'rel=\"noopener noreferrer\"' with target=\"_blank\"")

check_blank('src/app')
check_blank('src/components')
