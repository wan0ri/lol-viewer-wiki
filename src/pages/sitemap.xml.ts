import { getCollection } from "astro:content";

const staticPaths = [
  "",
  "start/",
  "start/what-is-lol/",
  "start/win-condition/",
  "start/map-overview/",
  "start/game-flow/",
  "start/how-to-watch/",
  "terms/",
  "roles/",
  "roles/compare/",
  "objectives/",
  "objectives/why-it-matters/",
  "champions/",
  "items/",
  "items/damage/",
  "items/defense/",
  "items/sustain/",
  "items/anti-heal/",
  "items/penetration/",
  "items/mobility/",
  "items/when-to-buy/",
  "patch-notes/",
  "patch-notes/latest/",
  "policy/riot-disclaimer/",
];

export async function GET() {
  const [terms, roles, objectives, champions, patchNotes] = await Promise.all([
    getCollection("terms"),
    getCollection("roles"),
    getCollection("objectives"),
    getCollection("champions"),
    getCollection("patchNotes"),
  ]);

  const dynamicPaths = [
    ...terms.map((entry) => `terms/${entry.id}/`),
    ...roles.map((entry) => `roles/${entry.id}/`),
    ...objectives.map((entry) => `objectives/${entry.id}/`),
    ...champions.map((entry) => `champions/${entry.id}/`),
    ...patchNotes.map((entry) => `patch-notes/${entry.id}/`),
  ];

  const urls = [...staticPaths, ...dynamicPaths].map((path) => {
    const location = new URL(path, "https://lol-viewer-wiki.pages.dev/").toString();
    return `<url><loc>${location}</loc></url>`;
  });

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls.join("") +
    `</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
