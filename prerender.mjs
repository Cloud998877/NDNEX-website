// Build step: turns every route into its own static HTML file so search
// engines (Google, Naver) can read each page's text, title and description.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, 'dist');
const SITE = 'https://www.ndnex.com';

const routes = [
  {
    path: '/',
    title: 'NDNEX (엔디넥스) | Cost-effectiveness analysis (의약품/의료기기 경제성 평가), Market Access & Reimbursement Consulting',
    description:
      '엔디넥스(NDNEX)는 헬스케어 컨설팅 기업으로, 의약품/의료기기 경제성 평가(PE), 비용효과성 분석(Cost-effectiveness analysis), Market Access, HEOR 서비스를 제공합니다.',
  },
  {
    path: '/about',
    title: 'About NDNEX (엔디넥스) | HEOR & Market Access Consulting in Korea',
    description:
      'NDNEX is a Seoul-based consultancy for health technology assessment, pharmacoeconomics and reimbursement strategy, led by Hyemin Ku, Ph.D., with over 22 years in the Korean healthcare industry.',
  },
  {
    path: '/services',
    title: 'Services | Market Access, HEOR, Real World Evidence & Big Data | NDNEX',
    description:
      'Market access consulting, cost-effectiveness analysis, budget impact analysis, MAIC/NMA, real world evidence and HIRA/NHIS claims data analytics for the Korean market.',
  },
  {
    path: '/experience',
    title: 'Experience | Therapeutic Areas, Clients & Publications | NDNEX',
    description:
      'Economic evaluations across oncology, rare diseases, neurology, immunology and more, for 60+ global and Korean pharmaceutical companies, with peer-reviewed publications.',
  },
  {
    path: '/news',
    title: 'News | NDNEX (엔디넥스)',
    description: 'Company news and updates from NDNEX, a Korean HEOR and market access consultancy.',
  },
  {
    path: '/contact',
    title: 'Contact NDNEX (엔디넥스) | Seoul, Korea',
    description:
      'Contact NDNEX about market access, HEOR and reimbursement projects in Korea. info@ndnex.com, 02-568-1555, Bongeunsa-ro, Gangnam-gu, Seoul.',
  },
];

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const { render } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);

for (const route of routes) {
  const url = SITE + (route.path === '/' ? '/' : route.path);
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const seo = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
  ].join('\n    ');

  const html = template
    .replace(/<!--seo-tags-->[\s\S]*?<!--\/seo-tags-->/, seo)
    .replace('<div id="root"><!--app-html--></div>', `<div id="root" data-path="${route.path}">${render(route.path)}</div>`);

  const outDir = route.path === '/' ? dist : path.join(dist, route.path.slice(1));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log(`prerendered ${route.path}`);
}

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
