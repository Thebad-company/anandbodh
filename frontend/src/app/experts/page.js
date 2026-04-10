import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { Icon } from "@/components/Icons";
import { generateMetadata, pageMetadata } from "@/lib/seoMetadata";

export const metadata = generateMetadata({
  title: pageMetadata.experts.title,
  description: pageMetadata.experts.description,
  keywords: pageMetadata.experts.keywords,
  url: pageMetadata.experts.url,
});

export default function ExpertsPage() {
  const experts = [
    {
      name: "Dr. Rajni Samota",
      title: "Founder & Chief Wellness Officer",
      specialty: "Integrative Medicine & Lifestyle Disorders",
      bio: "20+ years of experience in reversing lifestyle disorders through evidence-based wellness protocols.",
      image: "/experts/expert-dr-rajni-samota.png",
    },
    {
      name: "Dr. Vincent Keny",
      title: "Wellness Coach & Life Transformation Expert",
      specialty: "Holistic Health & Personal Development",
      bio: "Expert in guiding individuals through transformative wellness journeys with compassion and wisdom.",
      image: "/experts/expert-dr-vincent-keny.png",
    },
    {
      name: "Dr. Priya Desai",
      title: "Ayurvedic Medicine Specialist",
      specialty: "Ayurveda & Longevity",
      bio: "Expert in Ayurvedic protocols for metabolic health and cellular rejuvenation.",
      image: "/experts/expert-ayurveda-specialist.png",
    },
    {
      name: "Arjun Patel",
      title: "Meditation & Mindfulness Teacher",
      specialty: "Mental Health & Stress Management",
      bio: "Certified meditation teacher helping thousands achieve inner peace and mental clarity.",
      image: "/experts/expert-meditation-teacher.png",
    },
    {
      name: "Ananya Verma",
      title: "Yoga Instructor & Movement Specialist",
      specialty: "Yoga & Physical Wellness",
      bio: "Expert yoga instructor specializing in therapeutic yoga for healing and vitality.",
      image: "/experts/expert-yoga-instructor.png",
    },
    {
      name: "Dr. Rohan Singh",
      title: "Nutritionist & Wellness Coach",
      specialty: "Nutrition & Lifestyle Design",
      bio: "Specializes in personalized nutrition plans for reversing metabolic disorders.",
      image: "/experts/expert-nutritionist.png",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <h1>Meet Our Experts</h1>
            <p>World-class wellness leaders dedicated to your transformation</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="experts-intro">
              <h2>Your Wellness Team</h2>
              <p>
                Our team of experienced doctors, Ayurvedic practitioners, meditation coaches, and wellness specialists 
                are committed to guiding you through your wellness journey with evidence-based practices and personalized support.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="experts-grid">
              {experts.map((expert, index) => (
                <div key={index} className="expert-card">
                  <div className="expert-avatar">
                    <Image
                      src={expert.image}
                      alt={expert.name}
                      width={200}
                      height={200}
                      className="expert-photo"
                    />
                  </div>
                  <h3>{expert.name}</h3>
                  <p className="expert-title">{expert.title}</p>
                  <p className="expert-specialty">{expert.specialty}</p>
                  <p className="expert-bio">{expert.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--cream)" }}>
          <div className="container">
            <div className="expertise-areas">
              <h2>Areas of Expertise</h2>
              <div className="expertise-grid">
                <div className="expertise-item">
                  <span className="expertise-icon">
                    <Icon name="Heart" size={32} />
                  </span>
                  <h4>Integrative Medicine</h4>
                  <p>Combining modern science with ancient wisdom</p>
                </div>
                <div className="expertise-item">
                  <span className="expertise-icon">
                    <Icon name="Meditation" size={32} />
                  </span>
                  <h4>Meditation & Mindfulness</h4>
                  <p>Mental health and stress management</p>
                </div>
                <div className="expertise-item">
                  <span className="expertise-icon">
                    <Icon name="Leaf" size={32} />
                  </span>
                  <h4>Ayurvedic Medicine</h4>
                  <p>Traditional healing for modern wellness</p>
                </div>
                <div className="expertise-item">
                  <span className="expertise-icon">
                    <Icon name="Utensils" size={32} />
                  </span>
                  <h4>Nutrition Science</h4>
                  <p>Personalized dietary protocols</p>
                </div>
                <div className="expertise-item">
                  <span className="expertise-icon">
                    <Icon name="Dumbbell" size={32} />
                  </span>
                  <h4>Exercise Science</h4>
                  <p>Soleus Activation and metabolic training</p>
                </div>
                <div className="expertise-item">
                  <span className="expertise-icon">
                    <Icon name="Users" size={32} />
                  </span>
                  <h4>Community Support</h4>
                  <p>Accountability and peer learning</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="expert-sessions">
              <h2>Expert Sessions & Consultations</h2>
              <p style={{ textAlign: "center", marginBottom: "2rem" }}>
                Connect directly with our experts for personalized guidance and support.
              </p>
              <div className="sessions-grid">
                <div className="session-card">
                  <h3>
                    <Icon name="Rocket" size={24} style={{ marginRight: "8px" }} />
                    Live Expert Talks
                  </h3>
                  <p>Weekly sessions on wellness topics, Q&A with experts, and community discussions.</p>
                </div>
                <div className="session-card">
                  <h3>
                    <Icon name="Message" size={24} style={{ marginRight: "8px" }} />
                    One-on-One Consultations
                  </h3>
                  <p>Personalized sessions with experts tailored to your specific health needs.</p>
                </div>
                <div className="session-card">
                  <h3>
                    <Icon name="Book" size={24} style={{ marginRight: "8px" }} />
                    Workshops & Trainings
                  </h3>
                  <p>In-depth workshops on specific wellness topics and techniques.</p>
                </div>
                <div className="session-card">
                  <h3>
                    <Icon name="Message" size={24} style={{ marginRight: "8px" }} />
                    Community Forums
                  </h3>
                  <p>Ask questions and get expert advice in our active community forums.</p>
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
