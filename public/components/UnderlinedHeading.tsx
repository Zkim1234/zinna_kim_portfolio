export default function UnderlinedHeading({ text }) {
  return (
    <div className="flex flex-col">
      <h3
        className="text-lg"
        style={{ color: "var(--dark-green)" }}
      >
        {text}
      </h3>
      <div
        className="mt-2"
        style={{
          height: "3px",
          backgroundColor: "var(--dark-green)",
          width: "fit-content",
        }}
      />
    </div>
  );
}
