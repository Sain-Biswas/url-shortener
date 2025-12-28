import { createDatabaseClient } from "@tiny/drizzle-orm";

import { env } from "~/constant/env";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
export const database = createDatabaseClient({
  databaseUrl: env.DATABASE_URL,
  databaseAuthToken: env.DATABASE_AUTH_TOKEN
});
