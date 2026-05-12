"use client";

import { useState, useEffect } from "react";

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  // Load bookmarks on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("ai-news-bookmarks");
      if (stored) {
        queueMicrotask(() => {
          setBookmarks(JSON.parse(stored!));
        });
      }
    } catch (e) {
      console.error("Failed to parse bookmarks", e);
    }
  }, []);

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) => {
      let newBookmarks;
      if (prev.includes(id)) {
        newBookmarks = prev.filter((item) => item !== id);
      } else {
        newBookmarks = [...prev, id];
      }
      localStorage.setItem("ai-news-bookmarks", JSON.stringify(newBookmarks));
      return newBookmarks;
    });
  };

  const isBookmarked = (id: string) => {
    return bookmarks.includes(id);
  };

  return { bookmarks, toggleBookmark, isBookmarked };
}
