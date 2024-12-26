import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://clmntgbr.github.io",
  base: "portfolio",
  trailingSlash: "always",
  integrations: [tailwind()],
});
