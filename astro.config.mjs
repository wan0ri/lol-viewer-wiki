import { defineConfig, passthroughImageService } from "astro/config";

export default defineConfig({
  site: "https://lol-viewer-wiki.pages.dev",
  image: {
    service: passthroughImageService()
  }
});
