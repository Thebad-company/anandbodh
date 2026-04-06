"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

function Reveal({ children, delay = 0 }) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal-wrap reveal-up ${isVisible ? "revealed" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function WhyChoose() {
  const reasons = [
    {
      icon: "🔬",
      title: "Evidence-Based Approach",
      desc: "Every program is backed by clinical research and peer-reviewed studies. We don't guess — we measure, validate, and deliver proven results.",
    },
    {
      icon: "🧘",
      title: "Ancient Wisdom Meets Modern Science",
      desc: "We blend 5,000 years of Ayurvedic and yogic wisdom with cutting-edge metabolic science, creating protocols that work with your biology.",
    },
    {
      icon: "👥",
      title: "Thriving Community of 10,000+",
      desc: "Join a supportive ecosystem of wellness seekers, healers, and experts. Share experiences, celebrate wins, and grow together.",
    },
    {
      icon: "🎯",
      title: "Personalized Wellness Journeys",
      desc: "No one-size-fits-all solutions. We assess your unique constitution (Prakriti), lifestyle, and goals to create your custom path.",
    },
    {
      icon: "📊",
      title: "Measurable Health Outcomes",
      desc: "Track your progress with real metrics: blood sugar reduction, insulin sensitivity, metabolic rate, stress markers, and more.",
    },
    {
      icon: "🌿",
      title: "Holistic Integration",
      desc: "We address Physical, Mental, Emotional, and Spiritual health as one interconnected system. True wellness requires all four pillars.",
    },
  ];

  return (
    <section className="why-choose-section">
      <div className="container">
        <Reveal>
          <div className="section-header-center">
            <span className="section-label">Why Anandbodh</span>
            <h2>The First Integrated Ecosystem for Wellness</h2>
            <p>
              We're not just another wellness platform. We're a complete system designed to reverse lifestyle disorders and restore your natural vitality.
            </p>
          </div>
        </Reveal>

        <div className="why-choose-grid">
          {reasons.map((reason, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="why-choose-card">
                <div className="why-choose-icon">{reason.icon}</div>
                <h3>{reason.title}</h3>
                <p>{reason.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
