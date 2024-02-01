// app/providers.jsx
"use client";
// ("use client");
import React, { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

interface MyProviders {
  children: ReactNode;
}

export function Providers({ children }: MyProviders) {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return <>{children}</>;
  }
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
