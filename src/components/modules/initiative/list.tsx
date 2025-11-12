"use client";

import { InitiativeForm } from "@/components/modules/initiative/form";

import { api } from "@/trpc/react";

export const ListInititatives = () => {
  const { data: inititatives } = api.initiative.getAll.useQuery();
  return (
    <>
      <header className="flex items-center justify-between">
        <h1 className="text-primary text-2xl">Inititatives</h1>
        <span className="text-base-content/60">Showing all 2 initiatives</span>
        <InitiativeForm />
      </header>
      {inititatives &&
        inititatives.map((initiative) => {
          <p>{initiative.title}</p>;
        })}
    </>
  );
};
