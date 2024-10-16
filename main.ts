import { type Context, Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";
import { logger } from "@hono/hono/logger";
import { createRequestHandler } from "@remix-run/server-runtime";

const app = new Hono();
// @ts-ignore no def
const handler = createRequestHandler(await import("./build/server/index.js"));

app.get("/health", (ctx) => ctx.text("healthy"));

app.use(logger());

app.use("/favicon.ico", serveStatic({ path: "./public/favicon.ico" }));
app.use("/assets/*", serveStatic({ root: "./build/client/" }));
app.use("/public/*", serveStatic({ root: "./" }));

// @ts-ignore no def
app.use("/", (ctx: Context) => handler(ctx.req.raw));

Deno.serve({ port: 3001 }, app.fetch);
