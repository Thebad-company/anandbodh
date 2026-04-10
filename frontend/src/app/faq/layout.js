import { generateMetadata, pageMetadata } from "@/lib/seoMetadata";

export const metadata = generateMetadata({
  title: pageMetadata.faq.title,
  description: pageMetadata.faq.description,
  keywords: pageMetadata.faq.keywords,
  url: pageMetadata.faq.url,
});

export default function FAQLayout({ children }) {
  return children;
}
