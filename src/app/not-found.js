import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "404 - Page Not Found | Anandbodh™",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="not-found-page">
        <div className="container">
          <div className="not-found-content">
            <div className="not-found-icon">🧘‍♀️</div>
            <h1 className="not-found-title">404</h1>
            <h2 className="not-found-subtitle">Page Not Found</h2>
            <p className="not-found-text">
              The path you seek does not exist in this realm.
              <br />
              Let us guide you back to harmony.
            </p>
            <div className="not-found-actions">
              <Link href="/" className="btn btn-primary">
                Return Home
              </Link>
              <Link href="/programs" className="btn btn-outline">
                Explore Programs
              </Link>
            </div>
            <div className="not-found-suggestions">
              <p className="suggestions-title">Popular Pages:</p>
              <div className="suggestions-links">
                <Link href="/about">About Us</Link>
                <Link href="/programs/soleus-activation">Soleus Activation</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/community">Community</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
