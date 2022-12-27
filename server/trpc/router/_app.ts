import { router } from "../trpc";
import { authRouter } from "./auth";
import { threadRouter } from "./thread";

export const appRouter = router({
  auth: authRouter,
  thread: threadRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
