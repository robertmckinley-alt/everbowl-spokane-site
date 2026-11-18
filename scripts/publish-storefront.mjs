import { copyFileSync } from "node:fs";

// Serve the storefront at the domain root. Its adjacent assets and the
// archived Journal routes are still served from /new/.
copyFileSync(
  new URL("../dist/new/index.html", import.meta.url),
  new URL("../dist/index.html", import.meta.url),
);
