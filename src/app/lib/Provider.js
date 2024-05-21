"use client";

import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }) => {
  return (
    <SessionProvider>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </SessionProvider>
  );
};

export default Providers;
