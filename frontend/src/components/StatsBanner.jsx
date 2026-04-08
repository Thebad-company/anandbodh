export default function StatsBanner() {
    return (
        <section className="stats-banner" aria-label="Clinical research results">
            <div className="container">
                <div className="stats-banner-inner">
                    <div className="stats-banner-label">
                        📖 iScience, Aug 2022 — Soleus Activation Study
                    </div>
                    <div className="stats-banner-grid">
                        <div className="stat-pill">
                            <span className="stat-pill-num">
                                50<small>%</small>
                            </span>
                            <span className="stat-pill-desc">Blood Sugar Reduction</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-pill">
                            <span className="stat-pill-num">
                                62<small>%</small>
                            </span>
                            <span className="stat-pill-desc">Less Insulin Required</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-pill">
                            <span className="stat-pill-num">
                                6<small>×</small>
                            </span>
                            <span className="stat-pill-desc">More Calories Burned</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-pill">
                            <span className="stat-pill-num">
                                50<small>%</small>
                            </span>
                            <span className="stat-pill-desc">VLDL Fats Reduced</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
