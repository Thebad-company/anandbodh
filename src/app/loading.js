export default function Loading() {
  return (
    <div className="loading-page">
      <div className="loading-content">
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-icon">🧘</div>
        </div>
        <p className="loading-text">Loading your wellness journey...</p>
      </div>
    </div>
  );
}
