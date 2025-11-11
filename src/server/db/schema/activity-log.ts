import { InferEnum, InferInsertModel } from "drizzle-orm";
import { index, pgEnum } from "drizzle-orm/pg-core";

import { createTable, idColumn } from "@/server/db/helpers";
import { organization, user } from "@/server/db/schema/auth";
import { initiatives } from "@/server/db/schema/initiative";

export const ActivityEntity = pgEnum("activity_entity", [
  "glimpse",
  "task",
  "question",
  "note",
  "initiative",
  "team",
  "profile",
]);
export type EntityType = InferEnum<typeof ActivityEntity>;

export const activityLog = createTable(
  "activity_log",
  (d) => ({
    id: idColumn(),

    // who did it
    userName: d.text("user_name").notNull(),
    userId: d
      .uuid("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "set null" }),

    organizationName: d.text("organization_name"),
    organizationId: d
      .uuid("organization_id")
      .references(() => organization.id, { onDelete: "set null" }),

    initiativeName: d.text("initiative_name"),
    initiativeId: d
      .uuid("initiative_id")
      .references(() => initiatives.id, { onDelete: "set null" }),

    // what was affected
    entity: ActivityEntity("entity").notNull(), // e.g. "initiative", "task", "note"
    entityId: d.text("entity_id"), // optional if no concrete entity

    // what happened
    action: d.text().notNull(), // e.g. "create", "update", "delete"

    // optional details (json)
    details: d.text().notNull(),

    // when it happened
    createdAt: d.timestamp().defaultNow().notNull(),
  }),
  (d) => [
    index("activity_log_user_idx").on(d.userId),
    index("activity_log_entity_idx").on(d.entity),
  ]
);

export type TInsertActivityLog = InferInsertModel<typeof activityLog>;
