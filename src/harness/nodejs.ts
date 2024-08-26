import { app } from "../api/app";
import { cors } from "hono/cors";
import { serve } from "@hono/node-server";

app.use(
  "/*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "OPTIONS"],
  })
);

const port = 3000;
console.log(`Server is running on port ${port}`);
serve({ fetch: app.fetch, port });
