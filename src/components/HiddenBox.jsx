export default function HiddenBox() {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "2px solid #4CAF50",
        borderRadius: "12px",
        display: "inline-block",
        background: "linear-gradient(135deg, #e0f7e9, #f1fff4)",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        fontSize: "16px",
        color: "#2e7d32",
        fontWeight: "500",
      }}
    >
      🎉 This message is conditionally rendered.
    </div>
  );
}
