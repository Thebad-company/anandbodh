import Link from "next/link";

export default function FeaturedInsights() {
    const articles = [
        {
            tag: "🧠 Mental Wellness",
            title: "Meditation as Medicine: The Science of Stillness",
            desc: "How regular meditation creates measurable changes in brain structure, cortisol levels, and immune response — backed by decades of clinical research.",
            link: "/blog",
        },
        {
            tag: "💗 Metabolic Health",
            title: "The Science of Stress: How Chronic Stress Alters Brain and Body",
            desc: "Chronic stress rewires the brain, disrupts hormones, and directly causes lifestyle disorders. Understanding this is the first step to reversal.",
            link: "/blog",
        },
        {
            tag: "🌿 Ayurveda",
            title: "Living In Tune: How Dosha Balance Creates Life Balance",
            desc: "Each person has a unique constitutional blueprint (Prakriti). When your dosha is in balance, disease cannot take root — and vitality becomes your natural state.",
            link: "/blog",
        },
    ];

    return (
        <section
            className="insights-section section"
            aria-labelledby="insights-heading"
        >
            <div className="container">
                <div className="section-header fade-up visible">
                    <span className="section-label">
                        From The Anandbodh Knowledge Base
                    </span>
                    <h2 id="insights-heading">Featured Insights</h2>
                    <p>
                        Evidence-based thinking, ancient wisdom, and modern science —
                        curated for your wellness journey.
                    </p>
                </div>
                <div className="insights-grid">
                    {articles.map((article, index) => (
                        <article
                            key={index}
                            className={`insight-card fade-up visible fade-up-delay-${index + 1
                                }`}
                        >
                            <div className="insight-tag">{article.tag}</div>
                            <h4>{article.title}</h4>
                            <p>{article.desc}</p>
                            <Link
                                href={article.link}
                                className="insight-link"
                            >
                                Read Article →
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
