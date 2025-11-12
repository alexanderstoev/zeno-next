import { initiativeRouter } from "@/server/api/routers/initiative";
import { noteRouter } from "@/server/api/routers/note";
import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";

export const appRouter = createTRPCRouter({
  note: noteRouter,
  initiative: initiativeRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
