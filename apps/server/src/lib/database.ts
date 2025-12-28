import { createDatabaseClient } from "@tiny/drizzle-orm";

import { env } from "~/constant/env";

export const database = createDatabaseClient({
  databaseUrl: env.DATABASE_URL,
  databaseAuthToken: env.DATABASE_AUTH_TOKEN
});
