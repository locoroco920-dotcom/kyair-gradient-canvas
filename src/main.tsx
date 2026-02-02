import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Used by build-time prerendering to wait until the app + react-helmet has updated the <head>.
// This does not affect runtime behavior.
requestAnimationFrame(() => {
  document.dispatchEvent(new Event("render-event"));
});
