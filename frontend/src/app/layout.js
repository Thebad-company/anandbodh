import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { StripeProvider } from "@/context/StripeContext";
import { generateMetadata, pageMetadata } from "@/lib/seoMetadata";

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
  ...generateMetadata({
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    keywords: pageMetadata.home.keywords,
    url: pageMetadata.home.url,
  }),
  icons: {
    icon: "/favicon.jpeg",
    apple: "/apple-touch-icon.png",
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
