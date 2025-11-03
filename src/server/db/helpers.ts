import { pgTableCreator, uuid } from "drizzle-orm/pg-core";

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
