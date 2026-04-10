"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import Link from "next/link";
import {
  BreadcrumbSchema,
  FAQSchema,
  OrganizationSchema,
  WebPageSchema,
} from "@/components/StructuredData";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (sectionIndex, itemIndex) => {
    const key = `${sectionIndex}-${itemIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "How do I get started with Anandbodh?",
          a: "Simply sign up on our website, take the WakeUp Score Assessment to understand your unique constitution, and choose the program that resonates with you. Our experts will guide you through the next steps.",
        },
        {
          q: "Do I need any prior experience?",
          a: "No experience necessary. Our programs are designed for beginners and advanced practitioners alike. We provide step-by-step guidance for everyone.",
        },
        {
          q: "What if I have health conditions?",
          a: "We recommend consulting with your healthcare provider before starting any new wellness program. Our experts can also provide personalized guidance based on your health profile.",
        },
      ],
    },
    {
      category: "Programs",
      questions: [
        {
          q: "How long does each program take?",
          a: "Most programs require 20-30 minutes daily. You can adjust the duration based on your schedule. Consistency matters more than duration.",
        },
        {
          q: "Can I do multiple programs simultaneously?",
          a: "Yes, many members combine Soleus Activation with meditation and Ayurvedic practices. Start with one program and add others as you progress.",
        },
        {
          q: "What results can I expect?",
          a: "Results vary by individual, but most members report improved energy within 3-5 days and significant health improvements within 2-3 weeks.",
        },
      ],
    },
    {
      category: "Soleus Activation",
      questions: [
        {
          q: "Is Soleus Activation safe?",
          a: "Yes, Soleus Activation is safe for most people. It's a low-impact technique that doesn't require equipment. Always consult your doctor if you have specific health concerns.",
        },
        {
          q: "How often should I practice?",
          a: "Daily practice of 20 minutes is ideal for best results. Even 3-4 times per week shows significant benefits.",
        },
        {
          q: "Can it help with Type 2 Diabetes?",
          a: "Yes, the iScience August 2022 study showed 50% blood sugar reduction and 62% less insulin required with consistent practice.",
        },
      ],
    },
    {
      category: "Meditation",
      questions: [
        {
          q: "I can't quiet my mind. Can I still meditate?",
          a: "Yes, meditation isn't about having a blank mind. It's about observing your thoughts without judgment. Our guided meditations help you develop this skill.",
        },
        {
          q: "How long before I feel the benefits?",
          a: "Many people feel calmer after just one session. Deeper benefits like improved sleep and reduced anxiety typically appear within 2-3 weeks.",
        },
        {
          q: "What if I fall asleep during meditation?",
          a: "It's normal, especially if you're sleep-deprived. Your body is healing. As you practice more, you'll develop better awareness.",
        },
      ],
    },
    {
      category: "Ayurveda",
      questions: [
        {
          q: "How do I know my dosha?",
          a: "Take our free Dosha Assessment quiz on the website. Our experts can also help you determine your unique constitution.",
        },
        {
          q: "Do I need to change my diet completely?",
          a: "No, we recommend gradual changes. Start by adding dosha-balancing foods and gradually reduce foods that aggravate your dosha.",
        },
        {
          q: "Are Ayurvedic herbs safe?",
          a: "Yes, when used correctly. Our program provides guidance on safe, high-quality herbs. Always inform your doctor about any supplements.",
        },
      ],
    },
    {
      category: "Community & Support",
      questions: [
        {
          q: "Is there community support?",
          a: "Yes, we have active forums, healing groups, and expert sessions. You'll connect with thousands of members on similar journeys.",
        },
        {
          q: "Can I interact with experts?",
          a: "Absolutely. We offer regular expert talks, Q&A sessions, and personalized consultations for premium members.",
        },
        {
          q: "What if I need help?",
          a: "Our support team is available via email and chat. We also have a comprehensive knowledge base and video tutorials.",
        },
      ],
    },
  ];

  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema
        breadcrumbs={[
          { name: "Home", url: "https://anandbodh.com" },
          { name: "FAQ", url: "https://anandbodh.com/faq" },
        ]}
      />
      <WebPageSchema
        title="FAQ | Anandbodh™ – Wellness Questions Answered"
        description="Get answers about Anandbodh programs, Soleus Activation, meditation, Ayurveda, memberships, and how to get started."
        url="https://anandbodh.com/faq"
        image="https://anandbodh.com/hero-bg.png"
      />
      <FAQSchema
        faqs={faqs.flatMap((section) =>
          section.questions.map((question) => ({
            question: question.q,
            answer: question.a,
          }))
        )}
      />
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <h1>Frequently Asked Questions</h1>
            <p>Find answers to common questions about Anandbodh and our wellness programs</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="faq-container">
              {faqs.map((section, sectionIndex) => (
                <div key={sectionIndex} className="faq-section">
                  <h2 className="faq-category-title">{section.category}</h2>
                  <div className="faq-items">
                    {section.questions.map((item, itemIndex) => {
                      const key = `${sectionIndex}-${itemIndex}`;
                      const isOpen = openItems[key];
                      
                      return (
                        <div 
                          key={itemIndex} 
                          className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
                        >
                          <button
                            className="faq-question"
                            onClick={() => toggleItem(sectionIndex, itemIndex)}
                            aria-expanded={isOpen}
                          >
                            <span>{item.q}</span>
                            <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                          </button>
                          <div className={`faq-answer ${isOpen ? 'faq-answer-open' : ''}`}>
                            <p>{item.a}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--cream)" }}>
          <div className="container">
            <div className="faq-cta">
              <h2>Still have questions?</h2>
              <p>Our support team is here to help. Reach out anytime.</p>
              <Link href="/contact" className="btn btn-primary">Contact Us</Link>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
