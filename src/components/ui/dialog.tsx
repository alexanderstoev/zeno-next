import { ReactNode, createContext, useContext } from "react";

export interface DialogProps {
  children: ReactNode;
  id: string;
}

const DialogContext = createContext<{
  id: string;
} | null>(null);

export function Dialog({ children, id }: DialogProps) {
  return <DialogContext.Provider value={{ id }}>{children}</DialogContext.Provider>;
}

Dialog.trigger = function Trigger({ children }: { children: ReactNode }) {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error("Dialog.Trigger must be used within Dialog");
  const showDialog = (id: string) => {
    const dialog = document.getElementById(id);
    if (dialog instanceof HTMLDialogElement) dialog.showModal();
  };
  return (
    <button className="btn btn-success flex items-center gap-1" onClick={() => showDialog(ctx?.id)}>
      {children}
    </button>
  );
};

Dialog.content = function Content({ children }: { children: ReactNode }) {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error("Dialog.Trigger must be used within Dialog");
  return (
    <dialog id={ctx.id} className="modal">
      <div className="modal-box">{children}</div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
