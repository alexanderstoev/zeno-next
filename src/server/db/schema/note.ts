import { type InferSelectModel } from "drizzle-orm";
import { index } from "drizzle-orm/pg-core";
import z from "zod";

import { createTable, idColumn } from "@/server/db/helpers";

export const notes = createTable(
  "note",
  (d) => ({
    id: idColumn(),
    // createdBy: fkColumn("created_by"),
    // initiativeId: fkColumn("initiative_id"),

    title: d.text("title").notNull(),
    content: d.text("content"),
    pinned: d.boolean("pinned").default(false),

    createdAt: d.timestamp().defaultNow().notNull(),
    updatedAt: d.timestamp().$onUpdate(() => new Date()),
  }),
  (d) => [
    // index("note_created_by_idx").on(d.createdBy),
    index("note_title_idx").on(d.title),
  ]
);

// export const notesRelations = relations(notes, ({ one, many }) => ({
//   creator: one(users, {
//     fields: [notes.createdBy],
//     references: [users.id],
//   }),
//   initiative: one(initiatives, {
//     fields: [notes.initiativeId],
//     references: [initiatives.id],
//   }),
//   tags: many(notesTags),
// }));

export const insertNoteSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(255, "Title too long"),
  content: z.string().max(2000, "Description too long").optional().nullable(),
  pinned: z.number().optional(),
  initiativeId: z.string().uuid(),
});

export const updateNoteSchema = insertNoteSchema.extend({
  id: z.uuid(),
});

export type TInsertNoteInput = z.infer<typeof insertNoteSchema>;
export type TUpdateNoteInput = z.infer<typeof updateNoteSchema>;

export type TSelectNoteFull = InferSelectModel<typeof notes>;
export type TSelectNoteLite = Omit<TSelectNoteFull, "content">;
export type TSelectNotePreview = TSelectNoteFull;
