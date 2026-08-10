import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

import App from "./App";
import "./styles.css";

const root = document.getElementById("root")!;

// The build prerenders static HTML into #root. Hydrate it when present so the
// first paint is the server markup; fall back to a fresh render in dev.
if (root.hasChildNodes()) {
  hydrateRoot(
    root,
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
