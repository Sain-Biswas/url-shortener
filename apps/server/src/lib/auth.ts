import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { openAPI } from "better-auth/plugins";
import { env } from "~/constant/env";
import { database } from "~/lib/database";

export const auth = betterAuth({
  baseURL: env.SERVER_BASE_URL,
  appName: "Tiny URL",
  trustedOrigins: [env.FRONTEND_BASE_URL],
  basePath: "/auth",
  database: drizzleAdapter(database, {
    provider: "sqlite"
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    maxPasswordLength: 128,
    minPasswordLength: 8
  },
  plugins: [
    openAPI({
      disableDefaultReference: env.NEXT_PUBLIC_VERCEL_ENV !== "development"
    })
  ]
});
