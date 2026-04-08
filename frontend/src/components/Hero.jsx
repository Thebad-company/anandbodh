import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="hero" aria-labelledby="hero-heading">
            <div className="container">
                <div className="hero-inner">
                    {/* Left: Copy */}
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span>✨</span>
                            Rejuvenation • Vitality • Longevity
                        </div>

                        <h1 id="hero-heading" className="hero-headline">
                            Increase Your Healthspan,
                            <br />
                            <em>With Increasing Your Lifespan</em>
                        </h1>

                        <p className="hero-sub">
                            We aim to address the <strong>Root Causes</strong> of health
                            problems aggravated by Chronic Stress — nurturing 💪 Physical + 🧠
                            Mental + ❤️ Emotional + 🌿 Spiritual health as one integrated
                            system. When one thrives, they all thrive.
                        </p>

                        <div className="hero-ctas">
                            <Link href="#programs" className="btn btn-primary" id="hero-primary-cta">
                                Join Soleus Activation →
                            </Link>
                            <Link href="#programs" className="btn btn-outline" id="hero-secondary-cta">
                                Explore All Courses
                            </Link>
                        </div>

                        <div className="hero-trust">
                            <div className="hero-trust-item">
                                <div className="hero-trust-icon">🩸</div>
                                <div className="hero-trust-text">
                                    <strong>Blood Sugar ↓50%</strong>
                                    iScience Aug 2022 Study
                                </div>
                            </div>
                            <div className="hero-trust-item">
                                <div className="hero-trust-icon">💉</div>
                                <div className="hero-trust-text">
                                    <strong>Insulin Req. ↓62%</strong>
                                    Soleus Activation Protocol
                                </div>
                            </div>
                            <div className="hero-trust-item">
                                <div className="hero-trust-icon">🔥</div>
                                <div className="hero-trust-text">
                                    <strong>6× Calorie Burn</strong>
                                    vs Standard Exercise
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="hero-image-wrap">
                        <Image
                            src="/heroes/hero-meditation-orb.png"
                            alt="A person meditating peacefully in a serene natural setting"
                            width={600}
                            height={540}
                            priority
                            className="hero-image"
                        />

                        {/* Floating badge: Members */}
                        <div className="hero-float-card card-members">
                            <div className="float-avatars">
                                <div className="float-avatar">R</div>
                                <div className="float-avatar">M</div>
                                <div className="float-avatar">S</div>
                                <div className="float-avatar">+</div>
                            </div>
                            <div className="float-text">
                                10,000+ members
                                <span>joined this week</span>
                            </div>
                        </div>

                        {/* Floating badge: Rating */}
                        <div className="hero-float-card card-rating">
                            <div className="float-rating-stars">★★★★★</div>
                            <div className="float-rating-num">4.9</div>
                            <div className="float-rating-label">Community Rating</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
