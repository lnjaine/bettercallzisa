import homepage from "./index.html";
import { resolve, dirname } from "path";

const dir = dirname(new URL(import.meta.url).pathname);
const zisaPath = resolve(dir, "public/zisa.jpg");

const server = Bun.serve({
  port: process.env.PORT || 3000,
  routes: {
    "/": homepage,
    "/zisa.jpg": new Response(await Bun.file(zisaPath).bytes(), {
      headers: { "Content-Type": "image/jpeg", "Cache-Control": "public, max-age=31536000" },
    }),
  },
  development: {
    hmr: true,
    console: true,
  },
});

console.log(`⚖️  BetterCallZisa running at http://localhost:${server.port}`);
