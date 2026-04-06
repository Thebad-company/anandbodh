"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Counter = ({ end, suffix = "", duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [end, duration]);

    return (
        <div className="community-stat-num">
            {count}
            {suffix}
        </div>
    );
};

export default function Community() {
    const stats = [
        { end: 10000, suffix: "+", label: "Active Members" },
        { end: 12, suffix: "", label: "Healing Groups" },
        { end: 250, suffix: "+", label: "Expert Sessions" },
        { end: 48, suffix: "", label: "Cities Represented" },
    ];

    const groups = [
        {
            icon: "🌅",
            bg: "#EBF2E3",
            name: "जागृति – Wake Up Life",
            members: "General wellness & awareness • Active now",
        },
        {
            icon: "💼",
            bg: "#F0EEF9",
            name: "उत्कर्ष – Thrive@Work",
            members: "Professional wellbeing • Active now",
        },
        {
            icon: "🌿",
            bg: "var(--gold-pale)",
            name: "आयुर्वेद – Āyurveda Longevity Knowledge",
            members: "Traditional wisdom & longevity",
            pulseColor: "#C8943A",
            pulseShadow: "rgba(200,148,58,0.2)",
        },
        {
            icon: "🧘",
            bg: "var(--green-subtle)",
            name: "ध्यानम् – Dhyan Meditation",
            members: "Mental peace & mindfulness",
        },
        {
            icon: "🔄",
            bg: "#FDF0EB",
            name: "कायाकल्पम् – Lifestyle Disorders Reversal",
            members: "Metabolic health focus",
            pulseColor: "#C8943A",
            pulseShadow: "rgba(200,148,58,0.2)",
        },
    ];

    return (
        <section id="community" className="section" aria-labelledby="community-heading">
            <div className="container">
                <div className="community-inner">
                    {/* Left: Copy + Stats */}
                    <div className="fade-up visible">
                        <span className="section-label">Living Community</span>
                        <h2 id="community-heading">You're Not Healing Alone</h2>
                        <p style={{ color: "var(--text-muted)", margin: "1rem 0 0", maxWidth: "420px" }}>
                            Join a global community of conscious individuals who support each
                            other, share progress, and grow together — in structured,
                            purpose-driven groups led by experts.
                        </p>

                        <div className="community-stat-grid">
                            {stats.map((stat, index) => (
                                <div key={index} className="community-stat">
                                    <Counter end={stat.end} suffix={stat.suffix} />
                                    <div className="community-stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="#final-cta"
                            className="btn btn-green"
                            style={{ marginTop: "2rem" }}
                            id="community-join-btn"
                        >
                            Join the Community →
                        </Link>
                    </div>

                    {/* Right: Live Groups */}
                    <div className="community-groups fade-up visible fade-up-delay-2">
                        <p
                            style={{
                                fontSize: "0.8rem",
                                fontWeight: "600",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: "var(--text-muted)",
                                marginBottom: "0.5rem",
                            }}
                        >
                            🔴 Active Groups
                        </p>

                        {groups.map((group, index) => (
                            <div key={index} className="community-group">
                                <div className="group-icon" style={{ background: group.bg }}>
                                    {group.icon}
                                </div>
                                <div className="group-info">
                                    <div className="group-name">{group.name}</div>
                                    <div className="group-members">{group.members}</div>
                                </div>
                                <div
                                    className="group-pulse"
                                    style={
                                        group.pulseColor
                                            ? {
                                                background: group.pulseColor,
                                                boxShadow: `0 0 0 3px ${group.pulseShadow}`,
                                            }
                                            : {}
                                    }
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
