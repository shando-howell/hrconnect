import type { Metadata } from "next";
import "./globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs'
import ConvexClientProvider from "@/components/ConvexClientProvider";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "HRConnect",
  description: "HR Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider
            signInFallbackRedirectUrl="/dashboard"
            signUpFallbackRedirectUrl="/dashboard"
        >
          <ConvexClientProvider>
            {children}
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
