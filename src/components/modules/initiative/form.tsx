"use client";

import { IconSquareRoundedPlus } from "@tabler/icons-react";
import "@tanstack/react-form-zod";

import { Dialog } from "@/components/ui/dialog";

export const InitiativeForm = () => {
  return (
    <>
      <Dialog id="InitiativeFormModal">
        <Dialog.trigger>
          <IconSquareRoundedPlus />
          Add initiative
        </Dialog.trigger>
        <Dialog.content>
          <h3 className="text-lg font-bold">Initiative</h3>
        </Dialog.content>
      </Dialog>
    </>
  );
};
