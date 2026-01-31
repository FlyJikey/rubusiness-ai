export default function Privacy() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-extrabold mb-8 text-black border-b pb-4">
          Политика конфиденциальности
        </h1>
        
        <div className="space-y-8 text-lg leading-relaxed">
          <section>
            <p>Настоящая Политика описывает, как <strong>RuBusinessAI</strong> собирает и использует данные при посещении сайта.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-black">1. Какие данные мы собираем?</h2>
            <p>Мы используем инструменты анонимной аналитики (Vercel Analytics), которые фиксируют техническую информацию:</p>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li>Тип устройства и браузера;</li>
              <li>Регион (на уровне города);</li>
              <li>Действия на сайте (нажатия на кнопки, переходы по категориям).</li>
            </ul>
            <p className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-800 text-sm italic">
              Важно: мы не собираем ваши ФИО, номера телефонов, пароли или данные банковских карт.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-black">2. Цель сбора данных</h2>
            <p>Данные собираются исключительно для улучшения работы каталога и понимания того, какие ИИ-сервисы наиболее интересны пользователям.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-black">3. Сторонние ссылки</h2>
            <p>Наш сайт содержит ссылки на сторонние ресурсы (партнерские программы). Мы не несем ответственности за политику конфиденциальности и содержание этих сайтов.</p>
          </section>

          <section className="pt-8 border-t">
            <a href="/" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition">
              ← Вернуться на главную
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}