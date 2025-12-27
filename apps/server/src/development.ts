import rootApplication from "~/index";

rootApplication.listen(3000);

console.log(
  `🦊 Elysia is running at ${rootApplication.server?.hostname}:${rootApplication.server?.port}`,
);
