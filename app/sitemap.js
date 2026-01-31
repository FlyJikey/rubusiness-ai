import { tools } from './toolsData';

export default function sitemap() {
  const baseUrl = 'https://rubusiness-ai.vercel.app';

  // Главная страница
  const routes = [''].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  // В будущем сюда можно добавить динамические страницы для каждого сервиса, 
  // но пока нам достаточно индексации главной со всеми инструментами.
  
  return [...routes];
}