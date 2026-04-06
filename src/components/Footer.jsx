import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer role="contentinfo">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <div
                            style={{
                                background: "rgba(255,255,255,0.92)",
                                padding: "8px 12px",
                                borderRadius: "8px",
                                display: "inline-block",
                                marginBottom: "1.25rem",
                            }}
                        >
                            <Image
                                src="/AnandBodhLogo-1536x512.jpg"
                                alt="Anandbodh Logo"
                                width={144}
                                height={48}
                                className="footer-logo-img"
                            />
                        </div>
                        <p className="footer-tagline">
                            The first integrated ecosystem on health solutions & wellbeing.
                            Evidence-based tools to reverse lifestyle disorders.
                        </p>
                        <p
                            style={{
                                fontSize: "0.8rem",
                                color: "rgba(255,255,255,0.5)",
                                margin: "0.5rem 0 1rem",
                            }}
                        >
                            📍 B1/21, Gandhi Path Rd, Vaishali Nagar, Jaipur, Rajasthan 302021,
                            India
                            <br />
                            ✉️ hello@anandbodh.com
                        </p>
                        <div className="footer-socials">
                            <Link
                                href="https://www.youtube.com/@anandbodh"
                                target="_blank"
                                className="footer-social"
                            >
                                ▶
                            </Link>
                            <Link
                                href="https://www.instagram.com/anandbodh"
                                target="_blank"
                                className="footer-social"
                            >
                                𝒊
                            </Link>
                            <Link
                                href="https://www.facebook.com/anandbodh"
                                target="_blank"
                                className="footer-social"
                            >
                                𝑓
                            </Link>
                            <Link
                                href="https://www.linkedin.com/company/anandbodh"
                                target="_blank"
                                className="footer-social"
                            >
                                in
                            </Link>
                        </div>
                    </div>

                    {/* Programs */}
                    <div className="footer-col">
                        <h5>Programs</h5>
                        <ul>
                            <li>
                                <Link href="/programs/soleus-activation">Soleus Activation</Link>
                            </li>
                            <li>
                                <Link href="/programs/meditation">Dhyan Meditation</Link>
                            </li>
                            <li>
                                <Link href="/programs/ayurveda">Ayurveda Longevity</Link>
                            </li>
                            <li>
                                <Link href="/programs/thrive-at-work">Thrive@Work</Link>
                            </li>
                            <li>
                                <Link href="/programs/wake-up-life">Wake Up Life</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Learn */}
                    <div className="footer-col">
                        <h5>Learn</h5>
                        <ul>
                            <li>
                                <Link href="/blog">Blog & Articles</Link>
                            </li>
                            <li>
                                <Link href="/research">Research & Science</Link>
                            </li>
                            <li>
                                <Link href="/experts">Our Experts</Link>
                            </li>
                            <li>
                                <Link href="/faq">FAQ</Link>
                            </li>
                            <li>
                                <Link href="/newsletter">Newsletter</Link>
                            </li>
                            <li>
                                <Link href="/testimonials">Testimonials</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="footer-col">
                        <h5>Company</h5>
                        <ul>
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link href="/experts">Our Experts</Link>
                            </li>
                            <li>
                                <Link href="/careers">Careers</Link>
                            </li>
                            <li>
                                <Link href="/community">Community</Link>
                            </li>
                            <li>
                                <Link href="/pricing">Pricing</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © 2026 Anandbodh™ — The Happy Life. All rights reserved. | Increase
                        Your Healthspan, With Increasing Your Lifespan.
                    </p>
                    <div className="footer-bottom-links">
                        <Link href="/">
                            Home
                        </Link>
                        <Link href="/sitemap-page">Sitemap</Link>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
