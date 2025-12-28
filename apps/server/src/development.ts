import { fromTypes, openapi } from "@elysiajs/openapi";

import { z } from "zod";
import rootApplication from "~/index";

rootApplication
  .use(
    openapi({ references: fromTypes(), mapJsonSchema: { zod: z.toJSONSchema } })
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${rootApplication.server?.hostname}:${rootApplication.server?.port}`
);
