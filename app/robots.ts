import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/cgi-bin/",
    },
    sitemap: "https://nsmedialab.co.za/sitemap.xml",
  };
}
