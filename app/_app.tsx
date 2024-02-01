// pages/_app.tsx

import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import RootLayout from "./layout";
import "../styles/globals.css"; // Your global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <RootLayout>
        {/* Layout might contain additional components or structures */}
        <Component {...pageProps} />
      </RootLayout>
    </ThemeProvider>
  );
}

export default MyApp;
