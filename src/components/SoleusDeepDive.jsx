import Link from "next/link";

export default function SoleusDeepDive() {
    const points = [
        {
            num: "01",
            title: "Soleus Shakti",
            desc: "Clapping, rubbing, and tapping techniques that activate micro-electrical circuits (Nadis) and wake up mitochondria in the muscle.",
        },
        {
            num: "02",
            title: "Soleus Pranayam",
            desc: "Kapalbhati coupled with \"Om\" humming to boost cellular respiration, oxygen supply, and parasympathetic relaxation.",
        },
        {
            num: "03",
            title: "Divyanubhuti Dhyan",
            desc: "Resonance-based meditation to build patience, relieve chronic pain, and create a sustained feeling of tranquility — Divyanubhuti (Divine Experience).",
        },
    ];

    return (
        <section className="soleus-section section" aria-labelledby="soleus-heading">
            <div className="container">
                <div className="soleus-inner">
                    {/* Left: Visual */}
                    <div className="soleus-visual fade-up visible">
                        <div className="soleus-muscle-card">
                            <div className="soleus-muscle-diagram">
                                <div className="muscle-glow"></div>
                                <div className="muscle-label-top">Lower Leg</div>
                                <div className="muscle-body">
                                    <div className="muscle-highlight">SOLEUS</div>
                                    <div className="muscle-sublabel">Postural Muscle</div>
                                </div>
                                <div className="muscle-facts">
                                    <div className="mf">
                                        <span>🔋</span> Always active — even at rest
                                    </div>
                                    <div className="mf">
                                        <span>⚡</span> Rich in mitochondria
                                    </div>
                                    <div className="mf">
                                        <span>🩸</span> Direct link to blood sugar
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Copy */}
                    <div className="soleus-copy fade-up visible fade-up-delay-2">
                        <span className="section-label" style={{ color: "var(--gold)" }}>
                            The Science
                        </span>
                        <h2 id="soleus-heading">Why the Soleus Muscle Changes Everything</h2>
                        <p>
                            The Soleus is a small but extraordinarily powerful postural muscle
                            in the lower leg. Unlike other muscles that fatigue quickly, the
                            Soleus has rare oxidative metabolism — it burns fat and glucose{" "}
                            <em>even while you sit still</em>.
                        </p>
                        <div className="soleus-points">
                            {points.map((point, index) => (
                                <div key={index} className="soleus-point">
                                    <div className="sp-num">{point.num}</div>
                                    <div className="sp-body">
                                        <strong>{point.title}</strong>
                                        <p>{point.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link
                            href="/programs/soleus-activation"
                            className="btn btn-primary"
                            style={{ marginTop: "1.5rem" }}
                            id="soleus-cta-btn"
                        >
                            Join the Soleus Series →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
