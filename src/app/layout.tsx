import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Draggable Tldraw",
  description:
    "A draggable Tldraw whiteboard using React-Grid-Layout and Tldraw",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#4299e1",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary errorComponent={Error}>
      <html lang="en">
        <body
          style={{ background: "url('/bg.svg')" }}
          className={"bg-opacity-5 " + inter.className}
        >
          {children}
          <Footer></Footer>
        </body>
      </html>
    </ErrorBoundary>
  );
}
