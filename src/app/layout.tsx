import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Draggable Tldraw",
  description: "A draggable Tldraw whiteboard using React-Grid-Layout and Tldrawp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{ background: "url('/bg.svg')" }}
        className={"bg-opacity-5 " + inter.className}
      >
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
