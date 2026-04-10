import { generateMetadata, pageMetadata } from "@/lib/seoMetadata";

export const metadata = generateMetadata({
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
  keywords: pageMetadata.contact.keywords,
  url: pageMetadata.contact.url,
});

export default function ContactLayout({ children }) {
  return children;
}
