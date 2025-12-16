import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import type { ApiResponse } from "shared/dist";

new Elysia()
  .use(cors())
  .get("/", "Hello Elysia!")
  .get(
    "/hello",
    (): ApiResponse => ({
      message: "Hello BEVR!",
      success: true,
    })
  )
  .listen(3000, (server) => {
    console.log(`🦊 Elysia is running at http://${server.hostname}:3000`);
  });
