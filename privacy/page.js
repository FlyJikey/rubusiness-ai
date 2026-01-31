import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 font-sans text-slate-800">
      <h1 className="text-3xl font-bold mb-8 text-slate-900">Политика конфиденциальности</h1>
      
      <section className="space-y-6">
        <p>Настоящая Политика описывает, как <strong>RuBusinessAI</strong> собирает и использует данные при посещении сайта.</p>
        
        <div>
          <h2 className="text-xl font-bold mb-3 text-slate-900">1. Какие данные мы собираем?</h2>
          <p>Мы используем инструменты анонимной аналитики (Vercel Analytics), которые фиксируют техническую информацию:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Тип устройства и браузера;</li>
            <li>Регион (на уровне города);</li>
            <li>Действия на сайте (нажатия на кнопки, переходы по категориям).</li>
          </ul>
          <p className="mt-2 text-blue-600 font-medium italic">Важно: мы не собираем ваши ФИО, номера телефонов, пароли или данные банковских карт.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3 text-slate-900">2. Цель сбора данных</h2>
          <p>Данные собираются исключительно для улучшения работы каталога и понимания того, какие ИИ-сервисы наиболее интересны пользователям.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3 text-slate-900">3. Сторонние ссылки</h2>
          <p>Наш сайт содержит ссылки на сторонние ресурсы (партнерские программы). Мы не несем ответственности за политику конфиденциальности и содержание этих сайтов.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3 text-slate-900">4. Согласие</h2>
          <p>Используя наш сайт, вы соглашаетесь с условиями данной Политики.</p>
        </div>
      </section>

      <div className="mt-12 pt-8 border-t border-slate-200">
        <a href="/" className="text-blue-600 font-bold hover:underline">← Вернуться на главную</a>
      </div>
    </div>
  );
}