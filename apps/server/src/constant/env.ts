import { z } from "zod";

const environmentVariableSchema = z.object({
  DATABASE_URL: z.url(),
  DATABASE_AUTH_TOKEN: z.string(),
  NEXT_PUBLIC_VERCEL_ENV: z
    .enum(["production", "development", "preview"])
    .default("development"),

  FRONTEND_BASE_URL: z.url(),
  SERVER_BASE_URL: z.url()
});

const environmentVariables = environmentVariableSchema.safeParse(process.env);

if (!environmentVariables.success) {
  console.log(z.treeifyError(environmentVariables.error));
  process.exit(1);
}

export const env = environmentVariables.data;
