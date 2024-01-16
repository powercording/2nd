import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecoilProvider from "./recoil-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "2nd frontend dev test",
  description: "2nd frontend dev test by @powercording",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <RecoilProvider>
        <body className={inter.className}>{children}</body>
      </RecoilProvider>
    </html>
  );
}
