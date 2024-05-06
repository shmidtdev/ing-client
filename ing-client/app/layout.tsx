import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {ApplicationContext, ApplicationContextProvider} from "@/app/ApplicationContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Инж-Импорт Групп"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApplicationContextProvider>
          <Navbar />
          {children}
          <Footer />
        </ApplicationContextProvider>
      </body>
    </html>
  );
}
