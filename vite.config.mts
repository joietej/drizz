import { vitePlugin as remix } from "@remix-run/dev";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import deno from "@deno/vite-plugin";

export default defineConfig({
  plugins: [
    deno(),
    remix({
      future: {
        v3_fetcherPersist: false,
        v3_relativeSplatPath: false,
        v3_throwAbortReason: false,
      },
    }),
  ],
  resolve: { alias: { "~/": fileURLToPath(import.meta.resolve("./app/")) } },
});
