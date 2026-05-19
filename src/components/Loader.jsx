export default function Loader() {
  return (
    <div id="page-loader">
      <div className="loader-logo">VB<span>.dev</span></div>
      <div className="loader-bar-track">
        <div className="loader-bar-fill"></div>
      </div>
      <div className="loader-label">Loading portfolio…</div>
    </div>
  );
}