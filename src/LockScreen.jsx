import { useEffect } from "react";
import "./LockScreen.css";

export default function LockScreen({ onUnlock }) {
  useEffect(() => {
    const unlock = () => onUnlock();
    window.addEventListener("keydown", unlock);
    return () => window.removeEventListener("keydown", unlock);
  }, [onUnlock]);

  return (
    <div className="lock-screen" onClick={onUnlock}>
      <div className="lock-top">
        <div className="lock-date">
          {new Date().toLocaleDateString(undefined, {
            weekday: "short",
            month: "short",
            day: "numeric",
          })}
        </div>
        <div className="lock-time">
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>

      <div className="lock-bottom">
        <img src={`${import.meta.env.BASE_URL}profile.jpg`} className="profile-pic" />
        <div className="profile-name">Gagan Chauhan</div>
        <div className="unlock-hint">
          Click anywhere or press any key to unlock
        </div>
      </div>
    </div>
  );
}
