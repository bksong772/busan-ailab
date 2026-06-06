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
    sitemap: "https://axground.vercel.app/sitemap.xml",
    host: "https://axground.vercel.app",
  };
}
