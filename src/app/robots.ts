import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/sonyeo/",
      },
      {
        userAgent: "Yeti", // Naver bot
        allow: "/",
        disallow: "/sonyeo/",
      },
    ],
    sitemap: "https://axground.vercel.app/sitemap.xml",
    host: "https://axground.vercel.app",
  };
}
