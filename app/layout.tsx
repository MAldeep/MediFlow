import type { Metadata } from "next";
import { Public_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

// Configure Public Sans
const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  // Public Sans is a variable font, but you can specify weights if needed
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediFlow - For Optimal Clinic Management",
  description: "Advanced management system for healthcare providers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${publicSans.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
