// One-Line Office Jokes — u-markk-st-one-line-office-jokes-a51f2bcc
// Writes a single-line office joke to /output/entry.txt.
// Deterministic: same output on every run, no deps, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I told the printer it was out of toner; it printed a 40-page error report to prove me wrong.";

const OUT = "/output/entry.txt";
// Gate assert (RULES.txt): UTF-8, 1–199 chars, not only whitespace, one line.
if (ENTRY.length < 1 || ENTRY.length > 199) {
  throw new Error(`entry length ${ENTRY.length} outside 1–199`);
}
if (!ENTRY.trim()) throw new Error("entry is only whitespace");
if (ENTRY.includes("\n")) throw new Error("entry must be a single line");
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${OUT}`);
