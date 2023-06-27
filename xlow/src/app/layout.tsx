"use client";
import "./globals.css";
import { Saira } from "next/font/google";
import { Header } from "@/components/header";
import { FilterContextProvider } from "@/contexts/filter-contexts";

const saira = Saira({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <FilterContextProvider>
          <Header />
          {children}
        </FilterContextProvider>
      </body>
    </html>
  );
}
