"use client";

import { useEffect } from "react";

const CAPI_ENDPOINT = "https://meta-capi-victormelo.suporte-vidamkt.workers.dev";

function getCookie(name: string): string | undefined {
  const match = document.cookie.match(new RegExp(`${name}=([^;]+)`));
  return match?.[1];
}

function sendServerEvent(eventName: string, customData?: Record<string, unknown>) {
  fetch(CAPI_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event_name: eventName,
      event_source_url: window.location.href,
      user_agent: navigator.userAgent,
      fbc: getCookie("_fbc"),
      fbp: getCookie("_fbp"),
      custom_data: customData,
    }),
    keepalive: true,
  }).catch(() => {});
}

export default function TrackingEvents() {
  // Send PageView server event on mount
  useEffect(() => {
    // Delay to not block render
    const timer = setTimeout(() => {
      sendServerEvent("PageView");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function trackEvent(action: string, category: string, label: string) {
      // GA4
      if ((window as unknown as Record<string, unknown>).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", action, {
          event_category: category,
          event_label: label,
        });
      }
      // Meta Pixel (browser)
      if ((window as unknown as Record<string, unknown>).fbq) {
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
        sendServerEvent("Contact", { content_category: "WhatsApp", content_name: trackAttr || href });
      }
      // Phone calls
      else if (href.startsWith("tel:")) {
        trackEvent("Contact", "Phone", href);
        sendServerEvent("Contact", { content_category: "Phone", content_name: href });
      }
      // Booking clicks
      else if (href.includes("/booking")) {
        trackEvent("Lead", "Booking", "booking_page");
        sendServerEvent("Lead", { content_category: "Booking", content_name: "booking_page" });
      }
      // Email clicks
      else if (href.startsWith("mailto:")) {
        trackEvent("Contact", "Email", href);
        sendServerEvent("Contact", { content_category: "Email", content_name: href });
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
