import { Elysia } from "elysia";

const app = 
  new Elysia()
  .get("/", () => "Hello Elysia from Redirect");

export default app;
