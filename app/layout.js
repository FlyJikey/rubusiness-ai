import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: "Топ-50 ИИ инструментов для бизнеса в России 2026 — Экономия бюджета",
  description: "Каталог проверенных нейросетей для автоматизации бизнеса. Экономьте на штате и рутине с помощью ИИ.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {children}
        {/* Встроенная аналитика Vercel */}
        <Analytics />
      </body>
    </html>
  );
}