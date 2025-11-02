import { ReactNode } from "react";

import { UIProvider } from "@/app/providers/ui";
import { TRPCReactProvider } from "@/trpc/react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <TRPCReactProvider>
      <UIProvider>{children}</UIProvider>
    </TRPCReactProvider>
  );
}
