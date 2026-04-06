import Link from "next/link";

export default function FinalCTA() {
    return (
        <section id="final-cta" className="section" aria-labelledby="cta-heading">
            <div className="container">
                <span className="final-cta-label">Begin Today</span>
                <h2 id="cta-heading">
                    Transform Your Life.
                    <br />
                    Increase Your Healthspan.
                </h2>
                <p>
                    Use coupon <strong>WELLPRO25</strong> for a free WakeUp Score
                    Assessment — your personalized roadmap to reversing lifestyle
                    disorders.
                </p>
                <div className="final-cta-btns">
                    <Link
                        href="/contact"
                        className="btn btn-white"
                        id="cta-start-btn"
                    >
                        Get WakeUp Score FREE →
                    </Link>
                    <Link
                        href="/programs"
                        className="btn btn-outline-white"
                        id="cta-explore-btn"
                    >
                        Explore All Courses
                    </Link>
                </div>
            </div>
        </section>
    );
}
