import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";

import { databaseHooks } from "@/server/auth/database-hooks";
import { organizationPlugin } from "@/server/auth/organization-plugin";
import { socialProviders } from "@/server/auth/providers";
import { db } from "@/server/db";

export const auth = betterAuth({
  appName: "Zeno",
  database: drizzleAdapter(db, { provider: "pg", transaction: true }),
  emailAndPassword: { enabled: false },
  plugins: [nextCookies(), organizationPlugin],
  advanced: {
    database: {
      generateId: () => crypto.randomUUID(),
    },
  },
  databaseHooks: databaseHooks,
  socialProviders: socialProviders,
});
