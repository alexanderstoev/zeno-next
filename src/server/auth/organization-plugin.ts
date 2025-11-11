import { organization } from "better-auth/plugins";

export const organizationPlugin = organization({
  schema: {
    organization: {
      additionalFields: {
        isPersonal: {
          type: "boolean",
          input: false,
        },
        ownerId: {
          type: "string",
          input: false,
        },
      },
    },
  },
});
