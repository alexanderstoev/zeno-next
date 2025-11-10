import { ReactNode } from "react";

import { UIProvider } from "@/components/providers/ui";

import { TRPCReactProvider } from "@/trpc/react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <TRPCReactProvider>
      <UIProvider>{children}</UIProvider>
    </TRPCReactProvider>
  );
}
