'use client'
import { SessionProvider } from "next-auth/react";
import { ProviderRedux } from "./providerRedux";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProviderRedux>
          <SessionProvider>{children}</SessionProvider>
        </ProviderRedux>
      </body>
    </html>
  );
}