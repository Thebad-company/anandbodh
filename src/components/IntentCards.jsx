"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const LottieIcon = ({ url }) => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAnimationData(data))
            .catch((err) => console.error("Lottie load error:", err));
    }, [url]);

    if (!animationData) return <div style={{ width: 80, height: 80 }} />;

    return (
        <Lottie
            animationData={animationData}
            loop={true}
            style={{ width: 80, height: 80 }}
        />
    );
};

export default function IntentCards() {
    const [revealRef, isVisible] = useScrollReveal();
    const cards = [
        {
            url: "https://assets10.lottiefiles.com/packages/lf20_tutvdkg0.json",
            title: "I want to reduce stress & anxiety",
            desc: "Science-backed meditation + breathwork programs to calm your mind and restore inner peace.",
            arrow: "Explore Dhyan Programs →",
            label: "I want to reduce stress and anxiety",
        },
        {
            url: "https://assets3.lottiefiles.com/packages/lf20_puciaact.json",
            title: "I'm exploring Ayurveda",
            desc: "Personalised Ayurvedic protocols for longevity, gut health, and seasonal wellness.",
            arrow: "Discover Ayurveda →",
            label: "I'm exploring Ayurveda",
        },
        {
            url: "https://assets4.lottiefiles.com/packages/lf20_fcfjwiyb.json",
            title: "I struggle with sleep & energy",
            desc: "Targeted programs to reverse lifestyle disorders and reclaim deep, restorative rest.",
            arrow: "Restore Vitality →",
            label: "I struggle with sleep and energy",
        },
        {
            url: "https://assets9.lottiefiles.com/packages/lf20_wd1udlcz.json",
            title: "I want structured wellness programs",
            desc: "Step-by-step guided programs combining meditation, Ayurveda, and expert coaching.",
            arrow: "View All Programs →",
            label: "I want structured wellness programs",
        },
    ];

    return (
        <section id="intent" className="section" aria-labelledby="intent-heading" ref={revealRef}>
            <div className="container">
                <div className={`section-header fade-up ${isVisible ? "visible" : ""}`}>
                    <span className="section-label">Find Your Path</span>
                    <h2 id="intent-heading">What Brings You Here?</h2>
                    <p>
                        Every healing journey is personal. Tell us where you are, and we'll
                        guide you from there.
                    </p>
                </div>

                <div className="intent-grid">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`intent-card fade-up ${isVisible ? "visible" : ""} fade-up-delay-${index + 1}`}
                            tabIndex="0"
                            role="button"
                            aria-label={card.label}
                        >
                            <div className="intent-icon lottie-icon">
                                <LottieIcon url={card.url} />
                            </div>
                            <h4>{card.title}</h4>
                            <p>{card.desc}</p>
                            <span className="intent-arrow">{card.arrow}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
