import { Hono } from "@hono/hono";

const app = new Hono();

app.get("/", (ctx) => ctx.text("Hi"));

Deno.serve({ port: 3000 }, app.fetch);
