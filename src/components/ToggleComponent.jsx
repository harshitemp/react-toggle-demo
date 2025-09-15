import { useState } from "react";
import HiddenBox from "./HiddenBox.jsx";

export default function ToggleComponent() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>Conditional Rendering Demo</h2>

      <button
        onClick={() => setVisible(v => !v)}
        style={{
          padding: "8px 14px",
          borderRadius: 6,
          border: "1px solid #888",
          cursor: "pointer",
          background: visible ? "#e0f7e9" : "#e8f0ff"
        }}
      >
        {visible ? "Hide Message" : "Show Message"}
      </button>

      {/* Conditional rendering: only render HiddenBox when visible is true */}
      {visible && <HiddenBox />}
    </div>
  );
}
