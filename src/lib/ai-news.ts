import fs from 'fs';
import path from 'path';
export type { AINewsItem, GroupedNews } from './ai-news-utils';
export { groupNewsByDate } from './ai-news-utils';
import type { AINewsItem } from './ai-news-utils';

export function getAINews(): AINewsItem[] {
  const dataPath = path.join(process.cwd(), 'src/content/ai-news.json');
  try {
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    const news: AINewsItem[] = JSON.parse(fileContents);
    // Sắp xếp tin mới nhất lên đầu
    return news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Lỗi khi đọc file ai-news.json:", error);
    return [];
  }
}

export function getAllAINewsTags(): string[] {
  const news = getAINews();
  const tags = new Set<string>();
  news.forEach(item => {
    item.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}

