import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  "",
  "/about",
  "/services",
  "/services/rn-assessments",
  "/services/negotiated-care-plans",
  "/who-we-serve",
  "/how-it-works",
  "/request-assessment",
  "/contact",
  "/privacy",
  "/terms"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route === "/request-assessment" ? 0.9 : 0.7
  }));
}
