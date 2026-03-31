import homepage from "./index.html";

const server = Bun.serve({
  port: process.env.PORT || 3000,
  routes: {
    "/": homepage,
    "/zisa.png": new Response(await Bun.file("./public/zisa.png").bytes(), {
      headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=31536000" },
    }),
  },
  development: {
    hmr: true,
    console: true,
  },
});

console.log(`⚖️  BetterCallZisa running at http://localhost:${server.port}`);
