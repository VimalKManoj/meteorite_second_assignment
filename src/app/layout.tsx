"use client";

import "./globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </body>
    </html>
  );
}
