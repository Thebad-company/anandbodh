import Link from "next/link";

export default function Programs() {
    const programs = [
        {
            accent: "var(--green-medium)",
            tagBg: "var(--green-subtle)",
            tagColor: "var(--green-medium)",
            tag: "Metabolic Health",
            title: "Soleus Activation Series",
            desc: (
                <>
                    Activate your body's metabolic highway using{" "}
                    <strong>Divyanubhuti Soleus Yoga</strong> — a blend of ancient yogic
                    practice and modern science. Reduces blood sugar by 50%, insulin
                    requirement by 62%, and burns 6× more calories (iScience, Aug 2022).
                    Includes Soleus Shakti, Soleus Pranayam & Divyanubhuti Dhyan.
                </>
            ),
            duration: "41 Sessions",
            price: "$100 · Free Trial",
            link: "/programs/soleus-activation",
        },
        {
            accent: "var(--gold)",
            tagBg: "var(--gold-pale)",
            tagColor: "var(--gold)",
            tag: "Purpose & Growth",
            title: "7 Habits Commitment – Dr. Vincent Keny",
            desc: (
                <>
                    <em>
                        &quot;Lost in the journey of life? Not knowing your true purpose,
                        capability, and will?&quot;
                    </em>{" "}
                    Dr. Vincent Keny (PhD, Author, Life Coach, New Delhi) guides you
                    through the 7-pillar awakening: Jagruti → Utkarsh → Ayurveda →
                    Kayakalpam → Dhyanam → Seva → Satsang. Begin with the{" "}
                    <strong>WakeUp Quotient Test</strong>.
                </>
            ),
            duration: "9 Sessions",
            price: "$100",
            link: "/programs/wake-up-life",
        },
    ];

    return (
        <section id="programs" className="section" aria-labelledby="programs-heading">
            <div className="container">
                <div
                    className="section-header fade-up visible"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        flexWrap: "wrap",
                        gap: "1rem",
                    }}
                >
                    <div>
                        <span className="section-label">Courses & Programs</span>
                        <h2 id="programs-heading">Transform Your Life</h2>
                        <p>
                            Structured, expert-led journeys backed by science and ancient wisdom.
                        </p>
                    </div>
                    <Link
                        href="/programs"
                        className="btn btn-outline"
                        style={{ whiteSpace: "nowrap" }}
                    >
                        View All Courses →
                    </Link>
                </div>

                <div className="programs-grid">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className={`program-card fade-up visible fade-up-delay-${index + 1}`}
                        >
                            <div
                                className="program-card-accent"
                                style={{ background: program.accent }}
                            ></div>
                            <div className="program-card-body">
                                <span
                                    className="program-tag"
                                    style={{ background: program.tagBg, color: program.tagColor }}
                                >
                                    {program.tag}
                                </span>
                                <h4>{program.title}</h4>
                                <p>{program.desc}</p>
                                <div className="program-meta">
                                    <div className="program-meta-item">
                                        <span>📅</span> {program.duration}
                                    </div>
                                    <div className="program-meta-item">
                                        <span>💲</span> {program.price}
                                    </div>
                                    <Link
                                        href={program.link}
                                        className="program-link"
                                    >
                                        Enroll →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
