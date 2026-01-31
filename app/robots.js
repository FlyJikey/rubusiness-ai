export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://rubusiness-ai.vercel.app/sitemap.xml',
  };
}