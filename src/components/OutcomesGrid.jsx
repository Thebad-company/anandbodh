export default function OutcomesGrid() {
    const outcomes = [
        { icon: "⚡", text: "Attain All-Day Energy" },
        { icon: "⚖️", text: "Healthy Weight Loss" },
        { icon: "🩸", text: "BP & Diabetes Tamed" },
        { icon: "🔥", text: "Increase Metabolic Rate" },
        { icon: "🌿", text: "Naturally Reverse Asthma" },
        { icon: "✨", text: "Glow Naturally" },
        { icon: "🩺", text: "Manage Blood Sugar Easily" },
        { icon: "🛡️", text: "Prevent Chronic Disease" },
    ];

    return (
        <section
            className="outcomes-section section"
            aria-labelledby="outcomes-heading"
        >
            <div className="container">
                <div className="section-header fade-up visible">
                    <span className="section-label">What You'll Achieve</span>
                    <h2 id="outcomes-heading">Reverse Lifestyle Disorders</h2>
                    <p>
                        If we lived in perfect bio/psycho-social/spiritual harmony, we
                        wouldn't get the issues in our tissues.
                        <br />
                        The Anandbodh approach addresses each one at the root.
                    </p>
                </div>
                <div className="outcomes-grid">
                    {outcomes.map((outcome, index) => (
                        <div
                            key={index}
                            className={`outcome-tile fade-up visible fade-up-delay-${Math.floor(index / 2) + 1
                                }`}
                        >
                            <div className="outcome-icon">{outcome.icon}</div>
                            <span>{outcome.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
