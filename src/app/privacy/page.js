import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Anandbodh™",
  description: "Our privacy policy and commitment to protecting your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <h1>Privacy Policy</h1>
            <p>Your privacy is important to us</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="legal-content">
              <h2>1. Introduction</h2>
              <p>
                Anandbodh™ ("we," "us," "our," or "Company") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website and use our services.
              </p>

              <h2>2. Information We Collect</h2>
              <p>We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>
              <ul>
                <li><strong>Personal Data:</strong> Name, email address, phone number, age, health information</li>
                <li><strong>Device Information:</strong> Browser type, IP address, operating system</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent, links clicked</li>
                <li><strong>Payment Information:</strong> Processed securely through third-party providers</li>
              </ul>

              <h2>3. Use of Your Information</h2>
              <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:</p>
              <ul>
                <li>Create and manage your account</li>
                <li>Process your transactions and send related information</li>
                <li>Email you regarding your account or order</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to our services</li>
                <li>Generate a personal profile about you</li>
                <li>Increase the efficiency and operation of the site</li>
                <li>Monitor and analyze usage and trends to improve your experience with the site</li>
                <li>Notify you of updates to the site</li>
                <li>Offer new products, services, and/or recommendations to you</li>
              </ul>

              <h2>4. Disclosure of Your Information</h2>
              <p>We may share your information in the following situations:</p>
              <ul>
                <li><strong>By Law or to Protect Rights:</strong> If required by law or to protect our rights</li>
                <li><strong>Third-Party Service Providers:</strong> We may share your information with vendors, consultants, and service providers</li>
                <li><strong>Business Transfers:</strong> Your information may be transferred as part of a merger or acquisition</li>
              </ul>

              <h2>5. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to protect your personal information. 
                However, no method of transmission over the Internet or method of electronic storage is 100% secure.
              </p>

              <h2>6. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> privacy@anandbodh.com<br />
                <strong>Address:</strong> B1/21, Gandhi Path Rd, Vaishali Nagar, Jaipur, Rajasthan 302021, India
              </p>

              <h2>7. Changes to This Privacy Policy</h2>
              <p>
                We reserve the right to modify this privacy policy at any time. Changes and clarifications will take effect 
                immediately upon their posting to the website. If we make material changes to this policy, we will notify you 
                here that it has been updated.
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