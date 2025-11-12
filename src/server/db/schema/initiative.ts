import { InferSelectModel } from "drizzle-orm";
import { index, uuid } from "drizzle-orm/pg-core";
import z from "zod";

import { createTable, defaultColumns } from "@/server/db/helpers";
import { organization } from "@/server/db/schema/auth";

export const initiatives = createTable(
  "initiative",
  (d) => ({
    ...defaultColumns(),
    organizationId: uuid("organization_id")
      .notNull()
      .references(() => organization.id, { onDelete: "cascade" }),

    title: d.text("title").notNull(),
    content: d.text("content"),
    pinned: d.boolean("pinned").default(false),
  }),
  (d) => [
    index("initiative_organization_id_idx").on(d.organizationId),
    index("initiative_title_idx").on(d.title),
  ]
);

export const insertInitiativeSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(255, "Title too long"),
  organizationId: z.uuid(),
  description: z
    .string()
    .max(1000, "Description is too long. Try to be more consice. Keep it under 1000 characters.")
    .optional()
    .nullable(),
});

export const updateInitiativeSchema = insertInitiativeSchema.extend({
  id: z.uuid(),
});

export type TInsertInitiativeInput = z.infer<typeof insertInitiativeSchema>;
export type TUpdateInitiativeInput = z.infer<typeof updateInitiativeSchema>;
export type TSelectInitiative = InferSelectModel<typeof initiatives>;
