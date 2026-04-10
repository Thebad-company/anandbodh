import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { generateMetadata, pageMetadata } from "@/lib/seoMetadata";

export const metadata = generateMetadata({
  title: pageMetadata.terms.title,
  description: pageMetadata.terms.description,
  keywords: pageMetadata.terms.keywords,
  url: pageMetadata.terms.url,
});

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <h1>Terms of Service</h1>
            <p>Please read these terms carefully</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="legal-content">
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Anandbodh's 
                website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                and under this license you may not:
              </p>
              <ul>
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>

              <h2>3. Disclaimer</h2>
              <p>
                The materials on Anandbodh's website are provided on an 'as is' basis. Anandbodh makes no warranties, expressed or implied, 
                and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of 
                merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2>4. Limitations</h2>
              <p>
                In no event shall Anandbodh or its suppliers be liable for any damages (including, without limitation, damages for loss of 
                data or profit, or due to business interruption) arising out of the use or inability to use the materials on Anandbodh's website.
              </p>

              <h2>5. Accuracy of Materials</h2>
              <p>
                The materials appearing on Anandbodh's website could include technical, typographical, or photographic errors. Anandbodh does 
                not warrant that any of the materials on its website are accurate, complete, or current. Anandbodh may make changes to the 
                materials contained on its website at any time without notice.
              </p>

              <h2>6. Links</h2>
              <p>
                Anandbodh has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. 
                The inclusion of any link does not imply endorsement by Anandbodh of the site. Use of any such linked website is at the user's own risk.
              </p>

              <h2>7. Modifications</h2>
              <p>
                Anandbodh may revise these terms of service for its website at any time without notice. By using this website, you are agreeing 
                to be bound by the then current version of these terms of service.
              </p>

              <h2>8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to 
                the exclusive jurisdiction of the courts in that location.
              </p>

              <h2>9. Health Disclaimer</h2>
              <p>
                The information provided on this website is for educational purposes only and should not be considered medical advice. 
                Always consult with a qualified healthcare provider before starting any new wellness program or making changes to your health routine.
              </p>

              <h2>10. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> legal@anandbodh.com<br />
                <strong>Address:</strong> B1/21, Gandhi Path Rd, Vaishali Nagar, Jaipur, Rajasthan 302021, India
              </p>

              <p style={{ marginTop: "2rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
                Last updated: March 2025
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
