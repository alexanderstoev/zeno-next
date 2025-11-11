import { env } from "@/env";

export const socialProviders = {
  discord: {
    clientId: env.AUTH_DISCORD_ID,
    clientSecret: env.AUTH_DISCORD_SECRET,
  },
};
