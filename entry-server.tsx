import { StrictMode } from "react";
import { renderToString } from "react-dom/server";

import App from "./App";

// Rendered at build time by prerender.js so the deployed index.html ships with
// real, crawlable HTML instead of an empty <div id="root">.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
