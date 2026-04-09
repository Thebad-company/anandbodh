"use client";

import Image from "next/image";

export default function Testimonials() {
    const testimonials = [
        {
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
            name: "Bryan Arnoldy",
            location: "Entrepreneur, Scoot Inc.",
            text: "Perfect place to grow and learn from true experts. The programs are thoughtfully designed and the community support is unlike anything I have experienced before. I wholeheartedly recommend it.",
            rating: 5,
        },
        {
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
            name: "Joshua William",
            location: "Data Science, Google",
            text: "I'm closer than ever to achieving my wellness goals. The structured programs are perfect for those without time for traditional education — science-backed and incredibly effective.",
            rating: 5,
        },
        {
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
            name: "Sushmita S.",
            location: "Content Creator",
            text: "The integration of Ayurveda and modern science is what sets Anandbodh apart. I've felt a significant shift in my energy levels and mental clarity since joining.",
            rating: 5,
        },
    ];

    return (
        <section
            id="testimonials"
            className="section"
            aria-labelledby="testimonials-heading"
        >
            <div className="container">
                <div className="section-header fade-up visible">
                    <span className="section-label">Real Stories</span>
                    <h2 id="testimonials-heading">Lives Transformed</h2>
                    <p>
                        Not motivational quotes — real outcomes from real people on the
                        Anandbodh journey.
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className={`testimonial-card fade-up visible fade-up-delay-${index + 1
                                }`}
                        >
                            <span className="testimonial-quote-mark">&quot;</span>
                            <div className="testimonial-stars">
                                {[...Array(t.rating)].map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                            <p className="testimonial-text">{t.text}</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    <Image
                                        src={t.image}
                                        alt={t.name}
                                        width={44}
                                        height={44}
                                        className="author-image"
                                    />
                                </div>
                                <div>
                                    <div className="author-name">{t.name}</div>
                                    <div className="author-location">{t.location}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
