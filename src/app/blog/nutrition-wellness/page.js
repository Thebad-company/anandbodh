import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Nutrition for Wellness – Anandbodh™",
  description: "Learn how proper nutrition supports your wellness journey and discover evidence-based eating principles.",
};

export default function NutritionWellnessBlog() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero-image">
          <div className="page-hero-overlay">
            <div className="container">
              <h1>Nutrition as Medicine</h1>
              <p>Fuel your body with purpose</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="blog-content">
              <article>
                <div className="blog-meta">
                  <span>📅 April 2026</span>
                  <span>⏱️ 10 min read</span>
                </div>

                <h2>Food as Your First Medicine</h2>
                <p>
                  Hippocrates said, "Let food be thy medicine and medicine be thy food." This ancient 
                  wisdom remains profoundly true. What you eat directly impacts your energy, mood, 
                  immunity, and longevity. Yet most people treat nutrition as an afterthought.
                </p>

                <div className="blog-callout">
                  <strong>💡 Key Insight:</strong> Your food choices today determine your health 
                  outcomes tomorrow. Nutrition is not about restriction—it's about nourishment.
                </div>

                <h3>The Nutrition-Disease Connection</h3>
                <p>
                  Lifestyle diseases like diabetes, heart disease, and obesity are largely preventable 
                  through proper nutrition. Research shows that 80% of chronic diseases are linked to 
                  poor dietary choices.
                </p>

                <p>
                  When you eat whole, nutrient-dense foods, your body:
                </p>
                <ul>
                  <li>Maintains stable blood sugar levels</li>
                  <li>Reduces inflammation throughout the body</li>
                  <li>Strengthens the immune system</li>
                  <li>Improves mental clarity and mood</li>
                  <li>Increases energy and vitality</li>
                  <li>Supports healthy weight management</li>
                </ul>

                <h3>The Five Principles of Wellness Nutrition</h3>

                <div className="blog-callout">
                  <strong>1. Eat Whole Foods:</strong> Choose foods in their natural state. Avoid 
                  processed foods with added sugars, oils, and chemicals.
                </div>

                <div className="blog-callout">
                  <strong>2. Prioritize Plant-Based:</strong> Vegetables, fruits, legumes, and whole 
                  grains should form the foundation of your diet.
                </div>

                <div className="blog-callout">
                  <strong>3. Include Healthy Proteins:</strong> Combine plant proteins (legumes, nuts) 
                  with quality animal proteins if desired.
                </div>

                <div className="blog-callout">
                  <strong>4. Choose Healthy Fats:</strong> Omega-3 rich foods like flax, chia, and 
                  walnuts support brain and heart health.
                </div>

                <div className="blog-callout">
                  <strong>5. Eat Mindfully:</strong> Slow down, chew thoroughly, and eat with awareness. 
                  This improves digestion and satisfaction.
                </div>

                <h3>Ayurvedic Nutrition Principles</h3>
                <p>
                  Ayurveda offers a personalized approach to nutrition based on your unique constitution:
                </p>

                <div className="blog-callout">
                  <strong>For Vata Types:</strong> Warm, grounding foods like root vegetables, whole 
                  grains, and warming spices. Avoid cold, raw foods.
                </div>

                <div className="blog-callout">
                  <strong>For Pitta Types:</strong> Cooling foods like leafy greens, coconut, and 
                  cucumber. Avoid spicy, fried foods.
                </div>

                <div className="blog-callout">
                  <strong>For Kapha Types:</strong> Light, stimulating foods like leafy greens and 
                  legumes. Avoid heavy, oily foods.
                </div>

                <h3>Superfoods for Wellness</h3>
                <p>
                  Certain foods pack exceptional nutritional density:
                </p>
                <ul>
                  <li><strong>Turmeric:</strong> Powerful anti-inflammatory compound</li>
                  <li><strong>Ginger:</strong> Aids digestion and reduces inflammation</li>
                  <li><strong>Leafy Greens:</strong> Rich in minerals and antioxidants</li>
                  <li><strong>Berries:</strong> High in antioxidants and fiber</li>
                  <li><strong>Legumes:</strong> Complete proteins and fiber</li>
                  <li><strong>Nuts & Seeds:</strong> Healthy fats and minerals</li>
                </ul>

                <h3>Practical Nutrition Tips</h3>
                <ul>
                  <li>Eat the rainbow—different colors provide different nutrients</li>
                  <li>Prepare meals at home to control ingredients</li>
                  <li>Stay hydrated with water throughout the day</li>
                  <li>Eat seasonally for maximum nutrition and freshness</li>
                  <li>Practice portion control without obsessing</li>
                  <li>Allow 12 hours between dinner and breakfast for digestion</li>
                </ul>

                <h3>Breaking Free from Diet Culture</h3>
                <p>
                  Wellness nutrition is not about restrictive diets or counting calories. It's about 
                  developing a healthy relationship with food based on nourishment, not deprivation. 
                  Focus on adding nutritious foods rather than eliminating foods.
                </p>

                <h3>The Bottom Line</h3>
                <p>
                  Your nutrition choices are among the most powerful health decisions you make. By 
                  eating whole, plant-based foods aligned with your constitution, you can prevent 
                  disease, increase energy, and optimize your health for decades to come.
                </p>

                <blockquote>
                  "Take care of your body. It's the only place you have to live." — Jim Rohn
                </blockquote>

                <div className="blog-cta">
                  <h3>Learn More About Wellness Nutrition</h3>
                  <p>
                    Our Ayurveda Longevity program includes personalized nutrition guidance and 
                    meal planning based on your unique constitution.
                  </p>
                  <Link href="/programs/ayurveda" className="btn btn-primary">
                    Explore Ayurveda Program →
                  </Link>
                </div>
              </article>

              <aside className="blog-sidebar">
                <div className="sidebar-widget">
                  <h4>Related Articles</h4>
                  <ul>
                    <li>
                      <Link href="/blog/ayurveda-balance">Ayurveda for Balance</Link>
                    </li>
                    <li>
                      <Link href="/blog/stress-science">The Science of Stress</Link>
                    </li>
                    <li>
                      <Link href="/blog/sleep-quality">Sleep Quality & Wellness</Link>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-widget">
                  <h4>Share This Article</h4>
                  <div className="share-buttons">
                    <a href="#" className="share-btn">Facebook</a>
                    <a href="#" className="share-btn">Twitter</a>
                    <a href="#" className="share-btn">LinkedIn</a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
