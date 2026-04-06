import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import Link from "next/link";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "Pricing | Anandbodh™ – Wellness Plans",
  description: "Choose the perfect wellness plan for your journey. Flexible pricing for all budgets.",
};

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "₹999",
      period: "/month",
      description: "Perfect for beginners",
      features: [
        "Access to all programs",
        "WakeUp Score Assessment",
        "Basic meditation library",
        "Community forums",
        "Email support",
        "Monthly wellness tips",
      ],
      cta: "Start Free Trial",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "₹2,999",
      period: "/month",
      description: "Most popular choice",
      features: [
        "Everything in Starter",
        "Expert consultations (2/month)",
        "Personalized wellness plan",
        "Advanced programs",
        "Priority support",
        "Weekly expert talks",
        "Progress tracking",
        "Nutrition guidance",
      ],
      cta: "Get Started",
      highlighted: true,
    },
    {
      name: "Premium",
      price: "₹5,999",
      period: "/month",
      description: "For serious transformation",
      features: [
        "Everything in Pro",
        "Unlimited expert consultations",
        "One-on-one coaching",
        "Custom meal plans",
        "Advanced biomarker testing",
        "VIP community access",
        "Exclusive workshops",
        "Lifetime access to content",
      ],
      cta: "Unlock Premium",
      highlighted: false,
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <h1>Simple, Transparent Pricing</h1>
            <p>Choose the plan that fits your wellness journey</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="pricing-intro">
              <h2>Invest in Your Health</h2>
              <p>
                Your health is your greatest wealth. Our flexible pricing plans make wellness accessible 
                to everyone, with options for every budget and commitment level.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="pricing-grid">
              {plans.map((plan, index) => (
                <div key={index} className={`pricing-card ${plan.highlighted ? "highlighted" : ""}`}>
                  {plan.highlighted && <div className="popular-badge">Most Popular</div>}
                  
                  <h3>{plan.name}</h3>
                  <p className="pricing-description">{plan.description}</p>
                  
                  <div className="pricing-amount">
                    <span className="price">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                  
                  <Link href="/contact" className={`pricing-btn ${plan.highlighted ? "btn-primary" : "btn-outline"}`}>
                    {plan.cta}
                  </Link>
                  
                  <div className="pricing-features">
                    <h4>Includes:</h4>
                    <ul>
                      {plan.features.map((feature, i) => (
                        <li key={i}>
                          <span className="feature-icon">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--cream)" }}>
          <div className="container">
            <div className="pricing-faq">
              <h2>Pricing FAQs</h2>
              <div className="faq-items">
                <details className="faq-item">
                  <summary>Can I change my plan anytime?</summary>
                  <p>Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
                </details>
                
                <details className="faq-item">
                  <summary>Is there a free trial?</summary>
                  <p>Yes, all plans come with a 7-day free trial. No credit card required to start.</p>
                </details>
                
                <details className="faq-item">
                  <summary>What payment methods do you accept?</summary>
                  <p>We accept all major credit cards, debit cards, UPI, and net banking options.</p>
                </details>
                
                <details className="faq-item">
                  <summary>Is there a refund policy?</summary>
                  <p>Yes, we offer a 30-day money-back guarantee if you're not satisfied with your plan.</p>
                </details>
                
                <details className="faq-item">
                  <summary>Do you offer annual discounts?</summary>
                  <p>Yes, annual plans come with 20% discount compared to monthly billing.</p>
                </details>
                
                <details className="faq-item">
                  <summary>Can I get a group discount?</summary>
                  <p>Yes, we offer special pricing for groups of 5 or more. Contact our sales team for details.</p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="pricing-guarantee">
              <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Our Guarantee</h2>
              <div className="guarantee-grid">
                <div className="guarantee-card">
                  <div className="guarantee-icon">
                    <Icon name="Lock" size={40} />
                  </div>
                  <h3>Money-Back Guarantee</h3>
                  <p>30-day refund if you're not satisfied with your results.</p>
                </div>
                <div className="guarantee-card">
                  <div className="guarantee-icon">
                    <Icon name="Rocket" size={40} />
                  </div>
                  <h3>Results Guaranteed</h3>
                  <p>Follow our programs and see measurable health improvements.</p>
                </div>
                <div className="guarantee-card">
                  <div className="guarantee-icon">
                    <Icon name="Users" size={40} />
                  </div>
                  <h3>Expert Support</h3>
                  <p>Access to our team of wellness experts throughout your journey.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}