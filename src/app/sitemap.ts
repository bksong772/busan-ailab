import { MetadataRoute } from "next";
import { getAllInsights } from "@/lib/insights";

const BASE = "https://axfactory.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const all = await getAllInsights();
  const insightPages: MetadataRoute.Sitemap = all.map((i) => ({
    url: `${BASE}/insight/${i.slug}`,
    lastModified: new Date(i.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE}/insight`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE}/diagnosis`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...insightPages,
  ];
}
