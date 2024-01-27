import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const boroto = Roboto({ 
  weight: '400',
  subsets: ['latin'],
  });

export const metadata: Metadata = {
  title: "Java Day Votuporaga SP",
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
        <link rel="icon" href="https://javanoroeste.com.br/javanoroeste/javaday_riopreto/src/assets/favico.svg" />
      </head>
      <body 
        className={boroto.className}>
        {children}
      </body>
    </html>
  );
}
