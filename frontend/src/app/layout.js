import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { StripeProvider } from "@/context/StripeContext";
import { generateMetadata, pageMetadata } from "@/lib/seoMetadata";
import Script from "next/script";

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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8LXB9H4KMT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8LXB9H4KMT');
          `}
        </Script>
        <AuthProvider>
          <StripeProvider>
            {children}
          </StripeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
