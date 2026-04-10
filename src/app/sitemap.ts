import { MetadataRoute } from "next";
import { getAllInsights } from "@/lib/insights";

const BASE = "https://busan-ailab.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const insightPages: MetadataRoute.Sitemap = getAllInsights().map((i) => ({
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
    ...insightPages,
  ];
}
