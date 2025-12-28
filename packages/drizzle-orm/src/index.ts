import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import * as schema from "~/schema";

interface CreateDatabaseClientInputs {
  databaseUrl: string;
  databaseAuthToken: string;
}

export function createDatabaseClient({
  databaseAuthToken,
  databaseUrl
}: CreateDatabaseClientInputs) {
  const client = createClient({
    url: databaseUrl,
    authToken: databaseAuthToken
  });

  return drizzle({ client, schema });
}
