import homepage from "./index.html";
import homepageBR from "./index-br.html";
import { resolve, dirname } from "path";

const dir = dirname(new URL(import.meta.url).pathname);
const zisaPath = resolve(dir, "public/zisa.jpg");

const zisaResponse = new Response(await Bun.file(zisaPath).bytes(), {
  headers: { "Content-Type": "image/jpeg", "Cache-Control": "public, max-age=31536000" },
});

const server = Bun.serve({
  port: process.env.PORT || 3000,
  routes: {
    "/": homepage,
    "/br": homepageBR,
    "/zisa.jpg": zisaResponse,
  },
  development: {
    hmr: true,
    console: true,
  },
});

console.log(`⚖️  BetterCallZisa running at http://localhost:${server.port}`);
console.log(`🇧🇷  PT-BR version at http://localhost:${server.port}/br`);
