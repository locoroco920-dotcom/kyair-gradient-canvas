import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Ensures per-route meta tags exist in the initial HTML (validators/view-source)
    mode === "production" &&
      prerender({
        routes: ["/", "/about", "/projects", "/packages", "/contact"],
        renderer: "@prerenderer/renderer-puppeteer",
        rendererOptions: {
          renderAfterDocumentEvent: "render-event",
          timeout: 30000,
          headless: true,
        },
        postProcess(renderedRoute) {
          // Log which routes were prerendered (visible in build logs)
          console.log(`[Prerender] Captured: ${renderedRoute.route}`);
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
