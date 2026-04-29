import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ForumPost from "@/components/ForumPost";

export default function ForumPostPage({ params }) {
  return (
    <>
      <Navbar />
      <main>
        <ForumPost postId={params.id} />
      </main>
      <Footer />
    </>
  );
}