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

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const todayStr = today.toISOString().split('T')[0];
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  const sortedDates = Array.from(grouped.keys()).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );

  return sortedDates.map(dateStr => {
    let dateLabel: string;
    if (dateStr === todayStr) {
      dateLabel = `Hôm nay – ${formatVietnameseDate(dateStr)}`;
    } else if (dateStr === yesterdayStr) {
      dateLabel = `Hôm qua – ${formatVietnameseDate(dateStr)}`;
    } else {
      dateLabel = formatVietnameseDateWithDay(dateStr);
    }
    return { dateLabel, originalDate: dateStr, items: grouped.get(dateStr)! };
  });
}

function formatVietnameseDate(dateStr: string) {
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
}

function formatVietnameseDateWithDay(dateStr: string) {
  const date = new Date(dateStr);
  const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  return `${days[date.getDay()]} – ${formatVietnameseDate(dateStr)}`;
}
