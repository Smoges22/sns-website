import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { resources, resourcePath } from "@/lib/resources";
import { serviceDefinitions, servicePath } from "@/lib/services";

const routes = [
  "",
  "/about",
  "/services",
  ...serviceDefinitions.map(servicePath),
  "/sample-documents",
  "/sample-assessment",
  "/sample-care-plan",
  "/resources",
  ...resources.map(resourcePath),
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
    priority: route === "" ? 1 : route === "/request-assessment" ? 0.9 : route.startsWith("/sample-") ? 0.6 : 0.7
  }));
}
