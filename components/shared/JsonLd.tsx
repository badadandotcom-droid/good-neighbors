/**
 * Renders structured data as a native <script type="application/ld+json">,
 * per the Next.js JSON-LD guide: `<` is escaped so no string in the payload
 * can ever close the script tag early.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
