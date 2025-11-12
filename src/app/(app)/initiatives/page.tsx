import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/server/auth";

import { ListInititatives } from "@/components/modules/initiative/list";

export default async function InitiativesPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    redirect("/");
  }
  return (
    <div>
      <header className="">
        <ListInititatives />
      </header>
    </div>
  );
}
