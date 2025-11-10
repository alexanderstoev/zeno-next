"use client";

import { authClient } from "@/server/auth/client";

export const Signin = () => {
  const handleSignin = async () => {
    await authClient.signIn.social({
      provider: "discord",
      callbackURL: "/dashboard",
    });
  };
  return <button onClick={() => handleSignin()}>Sign in</button>;
};
