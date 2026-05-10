"use client";

import { useCallback, useEffect, useState } from "react";
import type { FormEvent } from "react";

type LeadSubmitOptions = {
  source: string;
  successId?: string;
};

export function useLandingInteractions({
  source,
  successId = "successMsg",
}: LeadSubmitOptions) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleLeadSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsSubmitting(true);
      setSubmitError("");

      const form = event.currentTarget;
      const formData = new FormData(form);
      const fields = Object.fromEntries(
        Array.from(formData.entries()).map(([key, value]) => [
          key,
          String(value),
        ])
      );

      try {
        const response = await fetch("/api/leads", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            source,
            submittedAt: new Date().toISOString(),
            fields,
          }),
        });

        if (!response.ok) {
          throw new Error("Lead submission failed");
        }

        form.reset();
        form.classList.add("hidden");
        const success = document.getElementById(successId);
        if (success) {
          success.classList.remove("hidden");
          success.style.display = "block";
        }
      } catch {
        setSubmitError(
          "Chưa gửi được thông tin. Vui lòng thử lại hoặc nhắn Zalo cho Tùng."
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [source, successId]
  );

  useEffect(() => {
    const cleanups: Array<() => void> = [];

    document.querySelectorAll<HTMLElement>(".faq-item").forEach((item) => {
      const button = item.querySelector<HTMLButtonElement>("button");
      const answer = item.querySelector<HTMLElement>(".faq-answer");
      const icon = item.querySelector<HTMLElement>(".fa-plus, .faq-icon-lp");

      if (!button || !answer) return;

      const toggleAnswer = () => {
        const willOpen = answer.classList.contains("hidden");
        answer.classList.toggle("hidden", !willOpen);
        icon?.classList.toggle("rotate-45", willOpen);
      };

      button.addEventListener("click", toggleAnswer);
      cleanups.push(() => button.removeEventListener("click", toggleAnswer));
    });

    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
      const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
      backToTop.addEventListener("click", scrollToTop);
      cleanups.push(() => backToTop.removeEventListener("click", scrollToTop));
    }

    document
      .querySelectorAll<HTMLElement>('[id^="exitPopup"] button, [id^="exitPopup"] a[href^="#"]')
      .forEach((element) => {
        const closePopup = () => {
          const popup = element.closest<HTMLElement>('[id^="exitPopup"]');
          if (popup) popup.style.display = "none";
        };

        element.addEventListener("click", closePopup);
        cleanups.push(() => element.removeEventListener("click", closePopup));
      });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return {
    handleLeadSubmit,
    isSubmitting,
    submitError,
  };
}
