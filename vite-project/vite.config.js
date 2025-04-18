import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // ← add this line:
  base: "/Porrfolio-AhmadAlnajjar/",

  plugins: [react(), tailwindcss()],

  // optional: if you want your build output in "build" instead of "dist":
  // build: {
  //   outDir: 'build'
  // }
});
