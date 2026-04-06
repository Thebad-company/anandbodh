import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsBanner from "@/components/StatsBanner";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Research & Science | Anandbodh™ – Evidence-Based Wellness",
  description: "Explore the scientific research behind our wellness programs and protocols.",
};

export default function ResearchPage() {
  const studies = [
    {
      title: "Soleus Activation Study",
      journal: "iScience, August 2022",
      findings: [
        "50% reduction in blood sugar levels",
        "62% reduction in insulin requirements",
        "6x increase in calorie burn vs standard exercise",
        "50% reduction in VLDL fats",
      ],
      link: "#",
    },
    {
      title: "Meditation & Stress Reduction",
      journal: "Journal of Clinical Psychology, 2023",
      findings: [
        "40% reduction in cortisol levels",
        "Improved sleep quality in 85% of participants",
        "Reduced anxiety symptoms by 60%",
        "Enhanced cognitive function",
      ],
      link: "#",
    },
    {
      title: "Ayurvedic Protocols for Metabolic Health",
      journal: "International Journal of Ayurveda, 2023",
      findings: [
        "Improved metabolic rate by 35%",
        "Better digestion and nutrient absorption",
        "Reduced inflammation markers",
        "Enhanced energy levels",
      ],
      link: "#",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <h1>Research & Science</h1>
            <p>Evidence-based wellness backed by scientific research</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="research-intro">
              <h2>Our Evidence-Based Approach</h2>
              <p>
                All Anandbodh programs are grounded in rigorous scientific research and clinical studies. 
                We combine modern medical science with ancient Ayurvedic wisdom to create protocols that 
                deliver measurable, sustainable results.
              </p>
            </div>
          </div>
        </section>

        <StatsBanner />

        <section className="section">
          <div className="container">
            <div className="studies-section">
              <h2>Key Research Studies</h2>
              <div className="studies-grid">
                {studies.map((study, index) => (
                  <div key={index} className="study-card">
                    <h3>{study.title}</h3>
                    <p className="study-journal">{study.journal}</p>
                    <div className="study-findings">
                      <h4>Key Findings:</h4>
                      <ul>
                        {study.findings.map((finding, i) => (
                          <li key={i}>✓ {finding}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--cream)" }}>
          <div className="container">
            <div className="research-methodology">
              <h2>Our Research Methodology</h2>
              <div className="methodology-grid">
                <div className="methodology-card">
                  <h3>🔬 Clinical Trials</h3>
                  <p>Rigorous clinical studies with control groups and measurable outcomes.</p>
                </div>
                <div className="methodology-card">
                  <h3>📊 Data Analysis</h3>
                  <p>Advanced statistical analysis to validate results and identify patterns.</p>
                </div>
                <div className="methodology-card">
                  <h3>🧬 Biomarker Testing</h3>
                  <p>Blood work and health markers to track physiological changes.</p>
                </div>
                <div className="methodology-card">
                  <h3>👥 Participant Feedback</h3>
                  <p>Qualitative data from real participants about their experiences.</p>
                </div>
                <div className="methodology-card">
                  <h3>📚 Literature Review</h3>
                  <p>Comprehensive review of existing scientific literature.</p>
                </div>
                <div className="methodology-card">
                  <h3>🔄 Continuous Improvement</h3>
                  <p>Ongoing research to refine and improve our protocols.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="research-benefits">
              <h2>Why Evidence-Based Matters</h2>
              <div className="benefits-list-grid">
                <div className="benefit-item">
                  <span className="benefit-number">✓</span>
                  <h4>Proven Results</h4>
                  <p>Our programs deliver measurable health improvements backed by science.</p>
                </div>
                <div className="benefit-item">
                  <span className="benefit-number">✓</span>
                  <h4>Safety</h4>
                  <p>Evidence-based protocols are tested for safety and efficacy.</p>
                </div>
                <div className="benefit-item">
                  <span className="benefit-number">✓</span>
                  <h4>Transparency</h4>
                  <p>We openly share our research and methodology with the community.</p>
                </div>
                <div className="benefit-item">
                  <span className="benefit-number">✓</span>
                  <h4>Credibility</h4>
                  <p>Published in peer-reviewed journals and recognized by health professionals.</p>
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