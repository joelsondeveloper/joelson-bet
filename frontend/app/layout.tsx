import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "joelson-bet",
  description: "Sua casa de apostas esportivas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className}antialiased min-h-screen bg-navy-900 text-slate-50`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
