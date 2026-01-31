import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Главная",
    "item": "https://rubusiness-ai.vercel.app"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Политика конфиденциальности",
    "item": "https://rubusiness-ai.vercel.app/privacy"
  }]
};

export const metadata = {
  title: "Топ-50 ИИ инструментов для бизнеса в России 2026 — Экономия бюджета",
  description: "Каталог проверенных нейросетей для автоматизации бизнеса. Экономьте на штате и рутине с помощью ИИ.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
        {children}
        {/* Встроенная аналитика Vercel */}
        <Analytics />
      </body>
    </html>
  );
}
