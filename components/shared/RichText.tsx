import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Copy in the data files can carry inline links written as [label](/path),
 * so a paragraph about Brampton can link "raccoon in the attic" to the attic
 * page without the data file knowing anything about React. Only site-relative
 * paths are linked; anything else is left as written.
 */
const LINK_PATTERN = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

export function RichText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK_PATTERN)) {
    const [whole, label, href] = match;
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    parts.push(
      <Link key={index} href={href} className="font-medium text-pine-600 underline underline-offset-2 hover:text-pine-700">
        {label}
      </Link>,
    );
    last = index + whole.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

/** The same copy with the link markup removed, for structured data and word counts. */
export function plainText(text: string): string {
  return text.replace(LINK_PATTERN, "$1");
}
