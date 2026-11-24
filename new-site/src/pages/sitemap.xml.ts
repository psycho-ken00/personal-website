import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { sitePath } from '../lib/paths';

export const GET: APIRoute = async ({ site }) => {
  if (!site) return new Response('Missing site URL', { status: 500 });

  const cases = await getCollection('cases');
  const paths = ['/', '/research/', ...cases.map((entry) => `/cases/${entry.id}/`)];
  const entries = paths.map((path) => `  <url><loc>${new URL(sitePath(path), site)}</loc></url>`).join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
