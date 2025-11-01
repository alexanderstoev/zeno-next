import { ReactNode } from "react";

import { UIProvider } from "@/app/providers/ui";

export default function Providers({ children }: { children: ReactNode }) {
  return <UIProvider>{children}</UIProvider>;
}
