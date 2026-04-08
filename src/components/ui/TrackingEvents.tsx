"use client";

import { useEffect } from "react";

export default function TrackingEvents() {
  useEffect(() => {
    function trackEvent(action: string, category: string, label: string) {
      // GA4
      if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", action, {
          event_category: category,
          event_label: label,
        });
      }
      // Meta Pixel
      if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).fbq) {
        (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("trackCustom", action, {
          category,
          label,
        });
      }
    }

    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const trackAttr = link.getAttribute("data-track");

      // WhatsApp clicks
      if (href.includes("wa.me")) {
        trackEvent("Contact", "WhatsApp", trackAttr || href);
      }
      // Phone calls
      else if (href.startsWith("tel:")) {
        trackEvent("Contact", "Phone", href);
      }
      // Booking clicks
      else if (href.includes("/booking")) {
        trackEvent("Lead", "Booking", "booking_page");
      }
      // Email clicks
      else if (href.startsWith("mailto:")) {
        trackEvent("Contact", "Email", href);
      }
      // External links
      else if (href.startsWith("http") && !href.includes("victormelo.app")) {
        trackEvent("OutboundClick", "External", href);
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
