import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Java Day | Votuporaga-SP",
  description: "Web Site da comunidade JavaNoroeste, edição em Votuporanga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://javanoroeste.com.br/javanoroeste/javaday_riopreto/src/assets/favico.svg"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}