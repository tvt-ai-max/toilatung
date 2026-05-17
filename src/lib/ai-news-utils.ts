export interface AINewsItem {
  id: string;
  title: string;
  tldr: string;
  why_important: string;
  source: string;
  date: string;
  link: string;
  tags: string[];
}

export interface GroupedNews {
  dateLabel: string;
  originalDate: string;
  items: AINewsItem[];
}

export function groupNewsByDate(news: AINewsItem[]): GroupedNews[] {
  const grouped = new Map<string, AINewsItem[]>();

  news.forEach(item => {
    const dateStr = item.date;
    if (!grouped.has(dateStr)) {
      grouped.set(dateStr, []);
    }
    grouped.get(dateStr)!.push(item);
  });



  const sortedDates = Array.from(grouped.keys()).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );

  return sortedDates.map(dateStr => {
    return { dateLabel: formatVietnameseDate(dateStr), originalDate: dateStr, items: grouped.get(dateStr)! };
  });
}

function formatVietnameseDate(dateStr: string) {
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
}
