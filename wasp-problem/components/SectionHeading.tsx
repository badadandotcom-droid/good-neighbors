export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "light",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className="mx-auto max-w-xl text-center">
      {eyebrow && (
        <p
          className={`inline-flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase ${dark ? "text-yellow" : "text-muted"}`}
        >
          <span className="h-0.5 w-5 bg-yellow" aria-hidden="true" />
          {eyebrow}
          <span className="h-0.5 w-5 bg-yellow" aria-hidden="true" />
        </p>
      )}
      <h2
        className={`${eyebrow ? "mt-3" : ""} text-3xl leading-tight sm:text-4xl ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {lede && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-white/75" : "text-muted"}`}>
          {lede}
        </p>
      )}
    </div>
  );
}
