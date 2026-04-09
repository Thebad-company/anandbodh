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
  keywords: "wellness programs, health coaching, meditation, ayurveda, soleus activation, lifestyle disorders, healthspan",
  icons: {
    icon: "/favicon.jpeg",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://anandbodh.com"),
  alternates: {
    canonical: "https://anandbodh.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anandbodh.com",
    siteName: "Anandbodh™",
    title: "Anandbodh™ – The Happy Life | Increase Your Healthspan",
    description: "Evidence-based tools to reverse lifestyle disorders — combining Physical, Mental, Emotional & Spiritual health into one integrated system.",
    images: [
      {
        url: "https://anandbodh.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anandbodh - The Happy Life",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anandbodh™ – The Happy Life | Increase Your Healthspan",
    description: "Evidence-based tools to reverse lifestyle disorders — combining Physical, Mental, Emotional & Spiritual health into one integrated system.",
    images: ["https://anandbodh.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Add your Google verification code
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
