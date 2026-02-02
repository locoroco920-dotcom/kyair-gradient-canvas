import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Build-time prerendering waits for a custom DOM event ("render-event").
// We dispatch it inside the router *after* the route + Helmet have mounted,
// so the prerendered HTML contains the correct per-route <head>.
