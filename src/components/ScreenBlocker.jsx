const ScreenBlocker = () => {
  return (
    <div className="screen-blocker">
      <div className="sb-card">
        <div className="sb-text">
          <p className="sb-title">Hey there 👋</p>

          <p>
            You’ve opened my <strong>macOS-styled portfolio</strong>.
          </p>

          <p>
  This portfolio is designed for
  <strong> desktop & tablet</strong>. For the best experience, please use a desktop or tablet.
</p>

          <p>
            On mobile, you can view my
            <strong> minimal, mobile-friendly portfolio</strong>.
          </p>

          <p className="sb-note">
            Don’t forget to open it on desktop to enjoy the full
            <strong> macOS vibe</strong> 🍎
          </p>
        </div>

        <a
          href="https://gaggz1.github.io/minimal-portfolio/"
          target="_blank"
          rel="noopener noreferrer"
          className="sb-cta"
        >
          📱 Mobile Portfolio →
        </a>
      </div>
    </div>
  );
};

export default ScreenBlocker;
