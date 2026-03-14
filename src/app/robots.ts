import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Yeti", // Naver bot
        allow: "/",
      },
    ],
    sitemap: "https://busan-ailab.vercel.app/sitemap.xml",
    host: "https://busan-ailab.vercel.app",
  };
}
