import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const roleSchema = z.enum([
  "トップ",
  "ジャングル",
  "ミッド",
  "ADC",
  "サポート",
]);

const terms = defineCollection({
  loader: glob({ base: "./src/content/terms", pattern: "*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().int().positive().optional(),
    relatedTerms: z.array(z.string()).default([]),
    relatedPages: z.array(z.string()).default([]),
  }),
});

const champions = defineCollection({
  loader: glob({ base: "./src/content/champions", pattern: "*.md" }),
  schema: z.object({
    championKey: z.string(),
    title: z.string(),
    roles: z.array(roleSchema).min(1),
    tagline: z.string(),
    difficulty: z.enum(["低", "中", "高"]),
    summary: z.string(),
    strengths: z.array(z.string()).min(2),
    weaknesses: z.array(z.string()).min(2),
    watchPoints: z.array(z.string()).min(3).max(3),
    recommendedRunes: z.object({
      primaryStyle: z.string(),
      secondaryStyle: z.string(),
      explanation: z.string(),
    }),
    coreItems: z
      .array(
        z.object({
          name: z.string(),
          reason: z.string(),
        }),
      )
      .min(3)
      .max(5),
    beginnerNotes: z.array(z.string()).min(2).max(3),
    relatedTerms: z.array(z.string()).default([]),
    relatedPatchVersions: z.array(z.string()).default([]),
  }),
});

const championData = defineCollection({
  loader: glob({ base: "./src/data/riot/champions", pattern: "*.json" }),
  schema: z.object({
    championKey: z.string(),
    slug: z.string(),
    name: z.string(),
    title: z.string(),
    image: z.string(),
    resource: z.string(),
    roles: z.array(roleSchema).min(1),
    stats: z.object({
      attack: z.number(),
      defense: z.number(),
      magic: z.number(),
      difficulty: z.number(),
    }),
    skills: z.object({
      passive: z.object({
        name: z.string(),
        description: z.string(),
      }),
      q: z.object({
        name: z.string(),
        description: z.string(),
      }),
      w: z.object({
        name: z.string(),
        description: z.string(),
      }),
      e: z.object({
        name: z.string(),
        description: z.string(),
      }),
      r: z.object({
        name: z.string(),
        description: z.string(),
      }),
    }),
  }),
});

const patchNotes = defineCollection({
  loader: glob({ base: "./src/content/patch-notes", pattern: "*.md" }),
  schema: z.object({
    version: z.string(),
    title: z.string(),
    publishedAt: z.coerce.date(),
    summary: z.string(),
    impact: z.enum(["小", "中", "大"]),
    featuredChampions: z.array(z.string()).default([]),
    featuredTerms: z.array(z.string()).default([]),
  }),
});

const roles = defineCollection({
  loader: glob({ base: "./src/content/roles", pattern: "*.md" }),
  schema: z.object({
    title: z.string(),
    role: roleSchema,
    description: z.string(),
    responsibilities: z.array(z.string()).min(2),
    watchPoints: z.array(z.string()).min(3),
    relatedTerms: z.array(z.string()).default([]),
    featuredChampions: z.array(z.string()).default([]),
  }),
});

const objectives = defineCollection({
  loader: glob({ base: "./src/content/objectives", pattern: "*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    importance: z.enum(["低", "中", "高"]),
    timing: z.string(),
    watchPoints: z.array(z.string()).min(3),
    relatedTerms: z.array(z.string()).default([]),
    relatedRoles: z.array(roleSchema).default([]),
  }),
});

export const collections = {
  terms,
  champions,
  championData,
  patchNotes,
  roles,
  objectives,
};
