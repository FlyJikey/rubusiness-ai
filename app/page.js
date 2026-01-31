"use client";
import React, { useState } from 'react';
import { tools } from './toolsData';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["Все", ...new Set(tools.map(tool => tool.category))];

  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === "Все" || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">B</div>
            <h1 className="text-xl font-bold tracking-tight">RuBusiness<span className="text-blue-600">AI</span></h1>
          </div>
          <a href="https://t.me/rusbusi" target="_blank" className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition">
            Реклама на сайте
          </a>
        </div>
      </header>

      <section className="pt-16 pb-12 px-4 text-center">
        {/* ИСПРАВЛЕННАЯ ОШИБКА ТУТ */}
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
          Уволь рутину. <br/><span className="text-blue-600">Нанимай ИИ для бизнеса.</span>
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10">
          Актуальный каталог нейросетей, которые работают в РФ и реально сокращают расходы на штат.
        </p>

        <div className="max-w-2xl mx-auto relative">
          <input 
            type="text"
            placeholder="Что нужно автоматизировать? (например: продажи, тексты...)"
            className="w-full p-5 pl-14 rounded-2xl border border-slate-200 shadow-xl focus:ring-4 focus:ring-blue-100 outline-none transition-all text-lg"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg className="w-6 h-6 text-slate-400 absolute left-5 top-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 mb-12 flex flex-wrap gap-2 justify-center">
        {categories.map((cat) => (
          <button 
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all ${
              selectedCategory === cat 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
                : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <main className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map((tool) => (
            <div key={tool.id} className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] bg-slate-100 text-slate-500 px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                  {tool.category}
                </span>
                {tool.tag && (
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 uppercase tracking-widest">
                    {tool.tag}
                  </span>
                )}
              </div>
              
              <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-600 transition-colors">{tool.name}</h3>
              
              {/* ДОБАВИЛИ РЕЙТИНГ (визуальный эффект доверия) */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
                <span className="ml-2 text-xs text-slate-400 font-medium">4.9 (120+ отзывов)</span>
              </div>

              <p className="text-slate-500 leading-relaxed mb-6 text-sm flex-grow">
                {tool.description}
              </p>
              
              <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Цена</p>
                  <p className="font-bold text-slate-900">{tool.price}</p>
                </div>
                <a 
                  href={tool.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all"
                >
                  Попробовать
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">О проекте</h4>
            <p className="text-sm leading-relaxed">
              RuBusinessAI — независимый рейтинг ИИ-сервисов для российского бизнеса. 
              Заменяем дорогие подписки и штат фрилансеров одним кликом.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Популярное</h4>
            <ul className="text-sm space-y-2">
              <li>• ИИ для Wildberries</li>
              <li>• Автоматизация Telegram</li>
              <li>• Написание SEO текстов</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Сотрудничество</h4>
            <p className="text-sm mb-4">Добавьте свой сервис в каталог</p>
            <a href="mailto:ribosomov92@mail.ru" className="text-white font-bold hover:text-blue-400">contact@email.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}