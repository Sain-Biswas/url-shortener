import rootApplication from "~/index";

rootApplication.listen(8080);

console.log(
  `🦊 Elysia is running at ${rootApplication.server?.hostname}:${rootApplication.server?.port}`,
);
