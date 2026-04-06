import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { StripeProvider } from "@/context/StripeContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Anandbodh™ – The Happy Life | Increase Your Healthspan",
  description: "Evidence-based tools to reverse lifestyle disorders — combining Physical, Mental, Emotional & Spiritual health into one integrated system.",
  icons: {
    icon: "/favicon.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        <AuthProvider>
          <StripeProvider>
            {children}
          </StripeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
