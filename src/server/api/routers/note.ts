import z from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const noteRouter = createTRPCRouter({
  getRescent: publicProcedure
    .input(z.object({ initiativeId: z.string(), limit: z.number().optional() }))
    .query(async ({ ctx, input }) => {
      const notes = ctx.db.query.notes.findMany();
      return notes;
    }),
});
