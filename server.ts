import homepage from "./index.html";

const server = Bun.serve({
  port: process.env.PORT || 3000,
  routes: {
    "/": homepage,
  },
  development: {
    hmr: true,
    console: true,
  },
});

console.log(`⚖️  BetterCallZisa running at http://localhost:${server.port}`);
