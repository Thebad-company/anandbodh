'use client';

import EnrollButton from './EnrollButton';

export default function ProgramCTA({ programId, programName, programPrice, description }) {
  return (
    <section className="program-cta-section">
      <div className="container">
        <div className="program-cta-content">
          <h2>Ready to Transform Your Life?</h2>
          <p>{description || `Join our ${programName} program and start your wellness journey today.`}</p>
          
          <div className="program-cta-details">
            <div className="cta-detail">
              <span className="detail-icon">💰</span>
              <div>
                <strong>Investment</strong>
                <p>${programPrice}</p>
              </div>
            </div>
            <div className="cta-detail">
              <span className="detail-icon">🎓</span>
              <div>
                <strong>Lifetime Access</strong>
                <p>Learn at your own pace</p>
              </div>
            </div>
            <div className="cta-detail">
              <span className="detail-icon">✨</span>
              <div>
                <strong>Guaranteed Results</strong>
                <p>30-day money-back guarantee</p>
              </div>
            </div>
          </div>

          <EnrollButton 
            programId={programId} 
            programPrice={programPrice}
            className="program-cta-btn"
          />
        </div>
      </div>
    </section>
  );
}
