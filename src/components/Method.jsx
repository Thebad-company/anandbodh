export default function Method() {
    const steps = [
        {
            num: 1,
            title: "Awaken — Jagruti",
            desc: "Begin with the WakeUp Score Assessment to discover your unique mind-body constitution, chronic stress patterns, and true purpose. Test your Wake Up Quotient.",
        },
        {
            num: 2,
            title: "Activate — Kayakalpam",
            desc: "Practice Soleus Activation, Divyanubhuti Dhyan & Ayurvedic protocols daily. Reverse lifestyle disorders at the cellular level through mitochondrial activation — just 20 minutes.",
        },
        {
            num: 3,
            title: "Thrive — Satsang",
            desc: "Sustain your transformation through community (Satsang), expert guidance, and the 7-pillar ecosystem: Jagruti, Utkarsh, Ayurveda, Kayakalpam, Dhyanam, Seva & Satsang.",
        },
    ];

    return (
        <section id="method" className="section" aria-labelledby="method-heading">
            <div className="container">
                <div className="method-header fade-up visible">
                    <span
                        className="section-label"
                        style={{ color: "var(--gold-light)" }}
                    >
                        Our Philosophy
                    </span>
                    <h2 id="method-heading">The Anandbodh Method: Root Cause Approach</h2>
                    <p>
                        Physical, Mental, Emotional and Spiritual Health are inter-related.
                        Chronic Stress is the root cause of most lifestyle disorders. We
                        address the root cause, not just the symptoms.
                        <br />
                        <em>
                            If we lived in perfect bio/psycho-social/spiritual harmony, we
                            wouldn't get the issues in our tissues.
                        </em>
                    </p>
                </div>

                <div className="method-steps">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`method-step fade-up visible fade-up-delay-${index + 1}`}
                        >
                            <div className="step-number">{step.num}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
