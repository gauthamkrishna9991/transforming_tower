import { Application, Context, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const router = new Router();

router.get("/", (context: Context) => {
  context.response.body = "Hello, World!";
});

app.use(router.routes());

await app.listen({ port: 8000 });
