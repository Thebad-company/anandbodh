"use client";

import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Testimonials from "@/components/Testimonials";
import Community from "@/components/Community";
import OutcomesGrid from "@/components/OutcomesGrid";
import ForumsActivity from "@/components/ForumsActivity";
import Method from "@/components/Method";
import StatsBanner from "@/components/StatsBanner";
import WhyChoose from "@/components/WhyChoose";
import Footer from "@/components/Footer";
import {
  OrganizationSchema,
  BreadcrumbSchema,
  WebPageSchema,
  WebSiteSchema,
} from "@/components/StructuredData";

// ─── LOTTIE JSON URLs (LottieFiles open-source CDN) ─────────────
// We lazy-load via dynamic import trick using state
import { useState, useEffect } from "react";

function useLottie(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData(null));
  }, [url]);
  return data;
}

// ─── ANIMATED ICON COMPONENT ─────────────────────────────────────
function LottieIcon({ url, fallback, size = 56 }) {
  const animData = useLottie(url);
  if (!animData) return <span style={{ fontSize: size * 0.6 }}>{fallback}</span>;
  return (
    <Lottie
      animationData={animData}
      loop
      autoplay
      style={{ width: size, height: size }}
    />
  );
}

// ─── SCROLL REVEAL WRAPPER ───────────────────────────────────────
function Reveal({ children, delay = 0, className = "", direction = "up" }) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal-wrap reveal-${direction} ${isVisible ? "revealed" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ─── DATA ────────────────────────────────────────────────────────
const mainNav = [
  { label: "Home", href: "/", icon: "🏠", active: true },
  { label: "Activity Feed", href: "/insights", icon: "📰" },
  { label: "Programs", href: "/programs", icon: "🎓" },
  { label: "Groups", href: "/groups", icon: "👥" },
  { label: "Forums", href: "/forums", icon: "💬" },
  { label: "Blog", href: "/blog", icon: "📝" },
];

const personalNav = [
  { label: "My Dashboard", href: "/user-dashboard", icon: "📊" },
  { label: "My Jagruti Score", href: "/programs/wake-up-life", icon: "📈" },
];

// Lottie URLs from LottieFiles open CDN
const navShortcuts = [
  {
    label: "Programs",
    href: "/programs",
    lottieUrl: "https://assets5.lottiefiles.com/packages/lf20_tutvdkg0.json",
    fallback: "🎓",
    color: "#6B9ED2",
    bg: "#dbeeff",
  },
  {
    label: "Forums",
    href: "/forums",
    lottieUrl: "https://assets9.lottiefiles.com/packages/lf20_3uwmd5vi.json",
    fallback: "💬",
    color: "#5DAF8A",
    bg: "#d8f5e9",
  },
  {
    label: "Social Groups",
    href: "/groups",
    lottieUrl: "https://assets10.lottiefiles.com/packages/lf20_obhph3t0.json",
    fallback: "👥",
    color: "#E08A8A",
    bg: "#fde9e9",
  },
  {
    label: "Activity",
    href: "/insights",
    lottieUrl: "https://assets3.lottiefiles.com/packages/lf20_qm8eqzse.json",
    fallback: "📊",
    color: "#9B8AC4",
    bg: "#ede8ff",
  },
];

const categoryPills = ["Healing", "Heart Health", "Manifest", "Sleep", "Stress", "Wellness", "Yoga"];

const featuredPostThumbs = [
  { alt: "ECG Chart", emoji: "❤️" },
  { alt: "Healthy Food", emoji: "🥗" },
  { alt: "Massage Therapy", emoji: "💆" },
  { alt: "Ayurvedic Herbs", emoji: "🌿" },
];

const pillars = [
  {
    label: "Physical Health",
    lottieUrl: "https://assets2.lottiefiles.com/packages/lf20_ysrn2iwp.json",
    fallback: "💪",
    cls: "physical",
  },
  {
    label: "Mental Health",
    lottieUrl: "https://assets5.lottiefiles.com/packages/lf20_khzniaya.json",
    fallback: "🧠",
    cls: "mental",
  },
  {
    label: "Emotional Health",
    lottieUrl: "https://assets7.lottiefiles.com/packages/lf20_kqp8wk1c.json",
    fallback: "❤️",
    cls: "emotional",
  },
  {
    label: "Spiritual Health",
    lottieUrl: "https://assets8.lottiefiles.com/packages/lf20_ek6nvyqz.json",
    fallback: "🙏",
    cls: "spiritual",
  },
];

const conditionCards = [
  {
    title: "Get Rid Of Thyroid Issues",
    subtitle: "Like: Poor Gut Health, Low Energy Level, Excessive Oxidative Stress, High TSH & Low T4, T3",
    lottieUrl: "https://assets10.lottiefiles.com/packages/lf20_5tkzkblw.json",
    fallback: "🦋",
    color: "#E8D5F5",
  },
  {
    title: "We Salute Cancer Warriors!!",
    subtitle: "Triple your metabolic rate. Rejuvenating mitochondria & cell wall permeability prevents and reverses cancer.",
    lottieUrl: "https://assets4.lottiefiles.com/packages/lf20_kxsd2ytf.json",
    fallback: "💪",
    color: "#D5EDF5",
  },
  {
    title: "Out of gas at the end of the day?",
    subtitle: "Boost your metabolic activity by up to 3 times and increase your Vitality.",
    lottieUrl: "https://assets6.lottiefiles.com/packages/lf20_fyye8qs8.json",
    fallback: "⚡",
    color: "#D5F5E3",
  },
  {
    title: "Too low BP? Too high BP?",
    subtitle: "Activate your vascular pathways and regulate blood pressure naturally.",
    lottieUrl: "https://assets1.lottiefiles.com/packages/lf20_kxsd2ytf.json",
    fallback: "🫀",
    color: "#F5E6D5",
  },
];

const activeGroups = [
  { name: "जागृति – Wake Up Life", time: "active 7 weeks ago", emoji: "🌅" },
  { name: "उत्कर्ष – Thrive@Work", time: "active 7 weeks ago", emoji: "💼" },
  { name: "आयुर्वेद – Āyurveda Longevity Knowledge", time: "active 5 months ago", emoji: "🌿" },
  { name: "कायाकल्पम् – Lifestyle Disorders Reversal", time: "active 5 months ago", emoji: "🧘" },
  { name: "ध्यानम् – Dhyan Meditation", time: "active 5 months ago", emoji: "🕉️" },
];

const recentPosts = [
  { title: "Meditation as Medicine: The Science of Stillness", href: "/blog/meditation-as-medicine", emoji: "🧘" },
  { title: "Emotional Detox: Healing Beyond the Physical Body", href: "/blog/emotional-detox", emoji: "💚" },
  { title: "Living In Tune: How Dosha Balance Creates Life Balances", href: "/blog/ayurveda-balance", emoji: "☯️" },
  { title: "Stress Science: How Chronic Stress Drives Lifestyle Disorders", href: "/blog/stress-science", emoji: "🩺" },
  { title: "Inner Energy, Outer Health: The Secret Path to Healing", href: "/blog/reversing-disorders", emoji: "✨" },
];

// ─── COMPONENT ───────────────────────────────────────────────────
import Navbar from "@/components/Navbar";

export default function Home() {
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });

  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <BreadcrumbSchema breadcrumbs={[
        { name: "Home", url: "https://anandbodh.com" },
      ]} />
      <WebPageSchema
        title="Anandbodh™ – The Happy Life | Increase Your Healthspan"
        description="Evidence-based wellness programs that combine Soleus Activation, meditation, Ayurveda, and community support to reverse lifestyle disorders."
        url="https://anandbodh.com"
        image="https://anandbodh.com/hero-bg.png"
      />
      <Navbar />
      <main className="portal-page type-v2">

      {/* ══════════════════════════════════════
          LEFT SIDEBAR
      ══════════════════════════════════════ */}
      <aside className="portal-sidebar-v2">
        <div className="portal-brand-v2">
          <Link href="/">
            <Image
              src="/AnandBodhLogo-1536x512.jpg"
              alt="Anandbodh Logo"
              width={160}
              height={53}
              className="portal-brand-logo"
              priority
            />
          </Link>
        </div>

        <nav className="portal-nav-v2">
          <p className="portal-nav-label">Main</p>
          <ul>
            {mainNav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={item.active ? "portal-nav-item active" : "portal-nav-item"}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="portal-nav-label portal-nav-gap">Personal</p>
          <ul>
            {personalNav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="portal-nav-item">
                  <span className="nav-icon">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="portal-sidebar-footer">
          <Link href="/community" className="portal-btn-full">
            Join Community
          </Link>
          <div className="portal-auth-links">
            <Link href="/login" className="nav-auth">Log In</Link>
          </div>
        </div>
      </aside>

      {/* ══════════════════════════════════════
          CENTER COLUMN
      ══════════════════════════════════════ */}
      <section className="portal-main-v2">

        {/* HERO STACK */}
        <Reveal direction="up">
          <div className="hero-stack">
            {/* Banner 1 */}
            <div className="hero-banner hero-brand">
              <div className="hero-brand-content">
                <div className="hero-tagline">REJUVENATION • VITALITY • LONGEVITY</div>
                <h1 className="hero-brand-title">
                  Increase Your<br /><em>Healthspan</em> with Evidence-Based Wellness Programs
                </h1>
                <p className="hero-brand-sub">
                  <strong>FIRST INTEGRATED ECOSYSTEM</strong><br />on HEALTH SOLUTIONS &amp; WELLBEING.
                </p>
                <p className="hero-brand-evidence">
                  <em>Evidence based</em> tools<br />to <em>reverse lifestyle disorders.</em>
                </p>
                <Link href="/programs/soleus-activation" className="hero-cta-btn">
                  Join Soleus Activation ✓
                </Link>
                <div className="hero-benefit-chips">
                  <span className="hero-benefit-chip">Body</span>
                  <span className="hero-benefit-chip">Mind</span>
                  <span className="hero-benefit-chip">Spirit</span>
                </div>
              </div>
              <div className="hero-brand-visual">
                <div className="hero-meditation-orb">
                  <div className="orb-glow"></div>
                  <div className="orb-ring"></div>
                  <div className="orb-figure">🧘</div>
                  <div className="orb-particles">
                    {[...Array(8)].map((_, i) => (
                      <span key={i} className="orb-particle" style={{ "--i": i }}></span>
                    ))}
                  </div>
                </div>
                <p className="hero-orb-caption">Harmonize Body, Mind, and Spirit</p>
              </div>
            </div>

            {/* Banner 2 */}
            <div className="hero-banner hero-community">
              <div className="hero-lotus-bg">
                <div className="lotus-petals">
                  {["#FF6B8A", "#FF9B5A", "#FFCD3C", "#87D068", "#5BC8F5", "#A78BFA", "#F472B6", "#34D399"].map((c, i) => (
                    <div key={i} className="lotus-petal" style={{ "--color": c, "--angle": `${i * 45}deg` }}></div>
                  ))}
                </div>
                <div className="lotus-center-figure">🧘‍♀️</div>
              </div>
              <div className="hero-community-text">
                <h2 className="hero-community-title">
                  ✨ DISCOVER A SPACE WHERE HEALTH MEETS HARMONY ✨
                </h2>
                <p className="hero-community-sub">
                  🧘‍♀️ Mind + 🏃 Body + 🌿 Spirit = 🌟 The Happy Life, Thriving Together! 🌟
                </p>
                <Link href="/about" className="hero-learn-btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* NAV SHORTCUTS */}
        <div className="nav-shortcuts-row">
          {navShortcuts.map((item, i) => (
            <Reveal key={item.label} delay={i * 80} direction="up">
              <Link href={item.href} className="nav-shortcut-card" style={{ "--accent": item.color, "--accent-bg": item.bg }}>
                <div className="shortcut-icon-circle">
                  <LottieIcon url={item.lottieUrl} fallback={item.fallback} size={52} />
                </div>
                <span className="shortcut-label">{item.label}</span>
                <div className="shortcut-arrow">→</div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* FEATURED POST */}
        <Reveal direction="up">
          <div className="featured-post-card">
            <div className="featured-post-header">
              <div className="category-pills-row">
                {categoryPills.map((pill) => (
                  <span key={pill} className="category-pill">{pill}</span>
                ))}
              </div>
              <h2 className="featured-post-title">
                Heartbeats Of Life: Wellness Lessons From The ECG
              </h2>
            </div>
            <div className="featured-thumbs-row">
              {featuredPostThumbs.map((t, i) => (
                <div key={i} className="featured-thumb">
                  <div className="featured-thumb-content">
                    <span className="featured-thumb-emoji">{t.emoji}</span>
                    <span className="featured-thumb-label">{t.alt}</span>
                  </div>
                  <span className="thumb-comments">0 💬</span>
                </div>
              ))}
            </div>
              <div className="featured-post-ctas">
              <Link href="/community" className="featured-cta-primary">
                Join The Happy Life Community
              </Link>
              <span className="featured-cta-or">Or</span>
              <Link href="/blog/stress-science" className="featured-cta-secondary">
                Explore Stress Science
              </Link>
            </div>
          </div>
        </Reveal>

        {/* REVERSE LIFESTYLE DISORDERS */}
        <section className="reverse-disorders-section">
          <Reveal direction="up">
            <h2 className="section-title-lg">Reverse <strong>Lifestyle Disorders</strong></h2>
            <p className="section-desc">
              We aim to address the <strong>Root Causes</strong> of <strong>health problems</strong> that are aggravated by{" "}
              <strong><u>Chronic Stress</u></strong> that has ongoing <strong>harmful effects</strong> on all aspects of your{" "}
              <strong>body, mind and spirit.</strong> Our <Link href="/programs">evidence-based wellness programs</Link> combine{" "}
              <Link href="/programs/soleus-activation">soleus activation</Link>, <Link href="/programs/meditation">meditation</Link>, and{" "}
              <Link href="/programs/ayurveda">ayurvedic protocols</Link> to help you thrive.
            </p>
          </Reveal>

          {/* Chronic Stress Diagram */}
          <Reveal direction="up" delay={100}>
            <div className="stress-diagram-card">
              <div className="stress-diagram-badge">LIVE BETTER</div>
              <div className="stress-diagram-inner">
                <div className="diagram-root">
                  <div className="diagram-root-box">
                    <span className="diagram-node-title">ROOT CAUSE</span>
                    <small>Genetics + Environment + Cell Damage</small>
                  </div>
                  <div className="diagram-arrow-right" aria-hidden="true">→</div>
                </div>
                <div className="diagram-center">
                  <div className="diagram-stress-circle">
                    <span className="diagram-node-title">CHRONIC STRESS</span>
                    <small>Causes hormonal, immunological, and brain problems.</small>
                  </div>
                  <div className="diagram-arrows-out" aria-hidden="true">→</div>
                </div>
                <div className="diagram-outcomes">
                  {pillars.map((p, i) => (
                    <div key={p.label} className={`diagram-outcome ${p.cls}`} style={{ animationDelay: `${i * 0.15}s` }}>
                      <span className="outcome-icon">
                        <LottieIcon url={p.lottieUrl} fallback={p.fallback} size={32} />
                      </span>
                      <div className="outcome-label">{p.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* 4-Pillars Callout */}
          <Reveal direction="up" delay={200}>
            <div className="pillars-callout-bar">
              <p className="pillars-callout-title">
                💪 PHYSICAL + 🧠 MENTAL + ❤️ EMOTIONAL + 🌿 SPIRITUAL
              </p>
              <p className="pillars-callout-sub">
                True well-being &amp; happiness comes from nurturing every aspect of yourself.<br />
                When one thrives, they all thrive!
              </p>
              <Link href="/about" className="pillars-learn-btn">
                Learn More
              </Link>
            </div>
          </Reveal>
        </section>

        {/* TESTIMONIALS */}
        <Reveal direction="up">
          <Testimonials />
        </Reveal>

        {/* COMMUNITY */}
        <Reveal direction="up">
          <Community />
        </Reveal>

        {/* OUTCOMES GRID */}
        <Reveal direction="up">
          <OutcomesGrid />
        </Reveal>

        {/* FORUMS ACTIVITY */}
        <Reveal direction="up">
          <ForumsActivity />
        </Reveal>

        {/* METHOD */}
        <Reveal direction="up">
          <Method />
        </Reveal>

        {/* STATS BANNER */}
        <Reveal direction="up">
          <StatsBanner />
        </Reveal>

        {/* WHY CHOOSE */}
        <Reveal direction="up">
          <WhyChoose />
        </Reveal>

        {/* ISSUES IN TISSUES + VIDEO */}
        <section className="tissues-section">
          <Reveal direction="up">
            <h2 className="section-title-lg">Issues Get Stored <strong>In Our Tissues</strong></h2>
            <p className="section-desc">
              Bio-social harmony is the key to lasting health. Our bodies store emotional and physical stress
              in the tissues — leading to chronic conditions. Understanding this connection is the first step to healing.
              Learn more about <Link href="/blog/stress-science">the science of stress</Link> and how our <Link href="/programs">wellness programs</Link> address it.
            </p>
          </Reveal>
          <Reveal direction="up" delay={150}>
            <div className="video-embed-wrapper">
              <iframe
                src="https://www.youtube.com/embed/VN0F7QJkd80"
                title="AnandBodh – Soleus Activation for Better Health"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="tissue-video"
              ></iframe>
            </div>
          </Reveal>
        </section>

        {/* CONDITION CARDS */}
        <section className="conditions-section">
          <Reveal direction="up">
            <h2 className="section-title-lg">Benefits Of <strong>Soleus Activation Series</strong></h2>
          </Reveal>
          <div className="conditions-carousel">
            {conditionCards.map((card, i) => (
              <Reveal key={i} delay={i * 100} direction="up">
                <div className="condition-card" style={{ "--card-bg": card.color }}>
                  <div className="condition-card-head">
                    <div className="condition-card-lottie">
                      <LottieIcon url={card.lottieUrl} fallback={card.fallback} size={56} />
                    </div>
                    <h3 className="condition-card-title">{card.title}</h3>
                  </div>
                  <p className="condition-card-sub">{card.subtitle}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

      </section>

      {/* ══════════════════════════════════════
          RIGHT SIDEBAR
      ══════════════════════════════════════ */}
      <aside className="portal-sidebar-right">

        {/* Login Widget */}
        <div className="widget-card widget-login">
          <h3>Member Login</h3>
          <div className="login-field">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={loginForm.username}
              onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
              className="login-input"
            />
          </div>
          <div className="login-field">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              className="login-input"
            />
          </div>
          <Link href="/login" className="login-btn">Log In</Link>
          <p className="login-register">
            New here?{" "}
            <Link href="/signin" className="login-register-link">Sign Up</Link>
          </p>
        </div>

        {/* Active Groups Widget */}
        <div className="widget-card widget-groups">
          <div className="widget-header-row">
            <h3>Groups</h3>
            <Link href="/community" className="widget-see-all">SEE ALL</Link>
          </div>
          <div className="widget-tabs">
            <button className="widget-tab active">ACTIVE</button>
            <button className="widget-tab">NEWEST</button>
            <button className="widget-tab">POPULAR</button>
          </div>
          <ul className="groups-list">
            {activeGroups.map((g, i) => (
              <li key={i} className="group-item">
                <div className="group-avatar">{g.emoji}</div>
                <div className="group-info">
                  <strong className="group-name">{g.name}</strong>
                  <span className="group-time">{g.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Posts Widget */}
        <div className="widget-card widget-posts">
          <div className="widget-header-row">
            <h3>Recent Posts</h3>
            <Link href="/blog" className="widget-see-all">SEE ALL</Link>
          </div>
          <ul className="posts-list">
            {recentPosts.map((p, i) => (
              <li key={i} className="post-item">
                <div className="post-thumb">{p.emoji}</div>
                <Link href={p.href} className="post-title">{p.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Soleus CTA Widget */}
        <div className="widget-card widget-soleus-cta">
          <div className="soleus-cta-icon">
            <LottieIcon
              url="https://assets9.lottiefiles.com/packages/lf20_jbb5vh45.json"
              fallback="🦵"
              size={80}
            />
          </div>
          <h3>Have You Done Your Soleus Today?</h3>
          <p>🔥 Unlock <strong>the Secret</strong> to Boundless <strong>Energy</strong> and Vibrant <strong>Health!</strong></p>
          <Link href="/programs/soleus-activation" className="soleus-cta-btn">
            Join Soleus Activation
          </Link>
        </div>

      </aside>
    </main>
    <Footer />
    </>
  );
}
