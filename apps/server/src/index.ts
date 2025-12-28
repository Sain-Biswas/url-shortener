import { cors } from "@elysiajs/cors";
import { Elysia, t } from "elysia";

import { env } from "~/constant/env";
import { auth } from "~/lib/auth";
import { linkRouter } from "~/routes/links";

const app = new Elysia()
  .use(
    cors({
      origin: env.FRONTEND_BASE_URL,
      credentials: true
    })
  )
  .mount(auth.handler)
  .use(linkRouter)
  .get(
    "/health",
    () => ({
      message: "Service is operational",
      code: "HEALTHY" as const,
      status: "OK" as const,
      timestamp: new Date()
    }),
    {
      response: {
        200: t.Object(
          {
            message: t.String(),
            code: t.Literal("HEALTHY"),
            status: t.Literal("OK"),
            timestamp: t.Date()
          },
          {
            description: "Server response when server is running.",
            examples: {
              message: "Service is operational",
              code: "HEALTHY",
              status: "OK",
              timestamp: "2025-12-28T20:57:10.960Z"
            },
            title: "Success Health"
          }
        )
      },
      detail: {
        tags: ["Miscellaneous"],
        description: "Used to check if the server is running or down.",
        summary: "Check Health"
      }
    }
  );

export default app;
