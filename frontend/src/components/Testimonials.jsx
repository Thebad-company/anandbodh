export default function Testimonials() {
    const testimonials = [
        {
            avatar: "B",
            name: "Bryan Arnoldy",
            location: "Entrepreneur, Scoot Inc.",
            text: "Perfect place to grow and learn from true experts. The programs are thoughtfully designed and the community support is unlike anything I have experienced before. I wholeheartedly recommend it.",
        },
        {
            avatar: "J",
            name: "Joshua William",
            location: "Data Science, Google",
            text: "I'm closer than ever to achieving my wellness goals. The structured programs are perfect for those without time for traditional education — science-backed and incredibly effective.",
        },
        {
            avatar: "S",
            name: "Sushmita S.",
            location: "Content Creator",
            text: "The integration of Ayurveda and modern science is what sets Anandbodh apart. I've felt a significant shift in my energy levels and mental clarity since joining.",
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
                            <div className="testimonial-stars">★★★★★</div>
                            <p className="testimonial-text">{t.text}</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{t.avatar}</div>
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
