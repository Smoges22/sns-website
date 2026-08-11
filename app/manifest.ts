import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.brand,
    description: site.descriptor,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0A2F59",
    icons: [
      {
        src: "/images/branding/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/branding/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
