import Elysia from "elysia";
import { z } from "zod";

import { auth } from "~/lib/auth";
import { database } from "~/lib/database";

interface CreateElysiaRouterOptions {
  tags: string[];
  prefix: string;
}

export function createElysiaRouter({
  tags,
  prefix
}: CreateElysiaRouterOptions) {
  return new Elysia({
    tags,
    prefix
  })
    .macro("auth", {
      resolve: async ({ status, request: { headers }, path }) => {
        const session = await auth.api.getSession({ headers });

        if (!session)
          return status(401, {
            path,
            message: "User authentication is required to access this resource.",
            timestamp: new Date(),
            status: 401,
            code: "UNAUTHORIZED"
          });

        return {
          user: session.user,
          session: session.session
        };
      },
      response: {
        401: z.object({
          path: z.string(),
          message: z.string(),
          timestamp: z.date(),
          status: z.literal(401),
          code: z.literal("UNAUTHORIZED")
        })
      }
    })
    .decorate("database", database);
}
