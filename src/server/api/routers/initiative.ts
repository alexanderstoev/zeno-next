import { and, desc, eq } from "drizzle-orm";
import z from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { initiatives, insertInitiativeSchema, updateInitiativeSchema } from "@/server/db/schema";
import { logActivity } from "@/server/db/utils";

export const initiativeRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    const result = await ctx.db
      .select()
      .from(initiatives)
      .where(eq(initiatives.organizationId, ctx.session.user.id))
      .orderBy(desc(initiatives.updatedAt));

    //   orderBy: (initiatives, { desc }) => [desc(initiatives.createdAt)],
    // });

    return result ?? null;
  }),

  get: protectedProcedure.input(z.object({ id: z.string() })).query(async ({ ctx, input }) => {
    const result = await ctx.db.query.initiatives.findFirst({
      where: (initiatives, { eq, and }) =>
        and(eq(initiatives.id, input.id), eq(initiatives.organizationId, ctx.session.user.id)),
    });

    return result ?? null;
  }),

  add: protectedProcedure.input(insertInitiativeSchema).mutation(async ({ ctx, input }) => {
    const values = { ...input, createdBy: ctx.session.user.id };
    const result = (await ctx.db.insert(initiatives).values(values).returning()).pop();
    if (result) {
      void logActivity({
        userId: ctx.session.user.id,
        userName: ctx.session.user.name,
        initiativeId: result.id,
        action: "update",
        entity: "initiative",
        entityId: result.id,
        details: "Updated " + result.title,
      });
    }
    return result;
  }),
  update: protectedProcedure.input(updateInitiativeSchema).mutation(async ({ ctx, input }) => {
    const values = { ...input, createdBy: ctx.session.user.id };
    const result = await ctx.db
      .update(initiatives)
      .set(values)
      .where(and(eq(initiatives.id, input.id), eq(initiatives.organizationId, ctx.session.user.id)))
      .returning();

    void logActivity({
      userId: ctx.session.user.id,
      userName: ctx.session.user.name,
      initiativeId: input.id,
      action: "update",
      entity: "initiative",
      entityId: input.id,
      details: "Updated " + result[0]?.title,
    });

    return result;
  }),
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const result = ctx.db
        .delete(initiatives)
        .where(
          and(eq(initiatives.id, input.id), eq(initiatives.organizationId, ctx.session.user.id))
        );
      return result;
    }),
});
