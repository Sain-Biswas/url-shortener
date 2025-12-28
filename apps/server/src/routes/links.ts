import { createElysiaRouter } from "~/utility/create-router";

export const linkRouter = createElysiaRouter({
  prefix: "/url",
  tags: ["URL Services"]
}).get("", () => "Hello from Links Route", { auth: true });
