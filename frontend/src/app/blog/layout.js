import { generateMetadata, pageMetadata } from "@/lib/seoMetadata";

export const metadata = generateMetadata({
  title: pageMetadata.blog.title,
  description: pageMetadata.blog.description,
  keywords: pageMetadata.blog.keywords,
  url: pageMetadata.blog.url,
});

export default function BlogLayout({ children }) {
  return children;
}
