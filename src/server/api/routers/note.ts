import z from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const noteRouter = createTRPCRouter({
  getRescent: publicProcedure
    .input(z.object({ initiativeId: z.string(), limit: z.number().optional() }))
    .query(async ({ ctx, input }) => {
      return { ihu: "ahu" };
    }),
});
