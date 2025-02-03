import type { Metadata } from "next";
import "./globals.css";
import {Header} from "@/components/header"; 
import {Footer} from "@/components/footer"; 

export const metadata: Metadata = {
  title: "Dev Controle",
  description: "Gerencie seus clientes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
