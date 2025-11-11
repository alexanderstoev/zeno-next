import { pgTableCreator, timestamp, uuid } from "drizzle-orm/pg-core";

import { db } from "@/server/db";
import { TInsertActivityLog, activityLog } from "@/server/db/schema";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `zeno_${name}`);

/**
 * Standard UUID primary key column.
 * Always 36 chars, default = crypto.randomUUID()
 */
export const idColumn = () =>
  uuid()
    .primaryKey()
    .notNull()
    .$defaultFn(() => crypto.randomUUID());

/**
 * Standard UUID foreign key column.
 * Not null, 36 chars.
 */
export const fkColumn = (columnName: string) => uuid(columnName).notNull();

export const defaultColumns = () => {
  return {
    id: idColumn(),
    createdAt: timestamp().defaultNow().notNull(),
    updatedAt: timestamp()
      .$onUpdate(() => new Date())
      .notNull(),
  };
};

export async function logActivity({
  userId,
  userName,
  initiativeId,
  initiativeName,
  organizationId,
  organizationName,
  entity,
  entityId,
  action,
  details,
}: TInsertActivityLog) {
  await db.insert(activityLog).values({
    userId,
    userName,
    organizationId,
    organizationName,
    initiativeId,
    initiativeName,
    entity,
    entityId,
    action,
    details,
  });
}
