import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isVercel = process.env.VERCEL === "1";

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),

      // ✅ Prerender in production ONLY when NOT building on Vercel
      mode === "production" &&
        !isVercel &&
        prerender({
          routes: ["/", "/about", "/projects", "/packages", "/contact", "/quote"],
          renderer: "@prerenderer/renderer-puppeteer",
          rendererOptions: {
            renderAfterDocumentEvent: "render-event",
            timeout: 30000,
            headless: true,
          },
          postProcess(renderedRoute) {
            console.log(`[Prerender] Captured: ${renderedRoute.route}`);
          },
        }),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
