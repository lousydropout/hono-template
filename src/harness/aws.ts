import { app } from "../api/app";
import { cors } from "hono/cors";
import { handle } from "hono/aws-lambda";

app.use(
  "/*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "OPTIONS"],
  })
);

export const handler = handle(app);
