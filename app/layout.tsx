import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { dmMono, spaceGrotesk } from "../config/font";
import AuthProvider from "@/components/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stellix",
  description: "Scaling brands at stellar speed",
  icons: {
    icon: '/assets/decoration/stellix_dark_white.png'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmMono.variable}`}>
      <body className="font-sans antialiased dark bg-background">
        
      <AuthProvider>
          {children}
        </AuthProvider>
        
      </body>
    </html>
  );
}
