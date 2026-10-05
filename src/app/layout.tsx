import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppProvider } from "@/providers/app-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "NusaLearn School LMS",
    template: "%s | NusaLearn",
  },
  description: "A focused learning management system for school communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
