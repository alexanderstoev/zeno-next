import { Session } from "better-auth";
import { eq } from "drizzle-orm";

import { slugify } from "@/server/auth/utils";
import { db } from "@/server/db";
import { organization, user } from "@/server/db/schema";

export const databaseHooks = {
  session: {
    create: {
      after: async (session: Session) => {
        // check if we have a personal org
        const org = await db
          .select()
          .from(organization)
          .where(eq(organization.ownerId, session.userId));

        if (org.length > 0) return;

        // create a personal org
        const usr = (await db.select().from(user).where(eq(user.id, session.userId))).pop();
        if (!usr) return;
        const slug = "team-" + slugify(usr?.name);

        await db.insert(organization).values({
          name: usr?.name + " Org",
          slug,
          isPersonal: true,
          ownerId: usr.id,
        });
      },
    },
  },
};
