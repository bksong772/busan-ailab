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
    sitemap: "https://axfactory.vercel.app/sitemap.xml",
    host: "https://axfactory.vercel.app",
  };
}
