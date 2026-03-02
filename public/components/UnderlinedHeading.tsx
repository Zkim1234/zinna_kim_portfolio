interface UnderlinedHeadingProps {
  text: string;
}

export default function UnderlinedHeading({ text }: UnderlinedHeadingProps) {
  return (
    <div className="flex flex-col" style={{ width: "fit-content" }}>
      <h3
        className="text-md"
        style={{ color: "var(--dark-green)" }}
      >
        {text}
      </h3>
      <div
        className="mt-2"
        style={{
          height: "4px",
          backgroundColor: "var(--dark-green)",
          width: "110%",
        }}
      />
    </div>
  );
}
