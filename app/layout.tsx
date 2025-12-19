import type { Metadata } from "next";
import { Inter, Lato, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "Fusion Nextjs",
  description: "Converted from Vite + Express",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lato.variable} ${poppins.variable} ${roboto.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
