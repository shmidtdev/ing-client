import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {ApplicationContext, ApplicationContextProvider} from "@/app/ApplicationContext";
import {OrderContext, OrderContextProvider} from "@/app/OrderContext";
import OffCanvasBlur from "@/components/OffcanvasBlur";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Инж-Импорт Групп",
  icons: ["../favicon.svg"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <OrderContextProvider>
          <ApplicationContextProvider>
            <OffCanvasBlur />
            <Navbar />
            {children}
            <Footer />
          </ApplicationContextProvider>
        </OrderContextProvider>
      </body>
    </html>
  );
}
