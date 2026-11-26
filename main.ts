// Miswave — a second, independent entry for make.fun competition
// u-deranalabs-invent-a-word-we-need-17a020e0 ("Invent a Word We Need").
//
// Writes one invented word with a one-line definition to entry.txt.
// Deterministic: Node 22 stdlib only, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one invented word, one clear line, at most 140 characters.
const ENTRY =
  "Miswave (n.): the friendly wave you give a stranger who was actually waving at someone behind you.";

const MAX_CHARS = 140;

// Length gate: the competition allows 1 to 140 characters of UTF-8 text,
// not only white space. Fail loudly instead of writing an invalid entry.
const entryLength = [...ENTRY].length;
if (entryLength < 1 || entryLength > MAX_CHARS) {
  throw new Error(
    `Entry is ${entryLength} characters, outside the 1-${MAX_CHARS} limit: ${JSON.stringify(ENTRY)}`,
  );
}
if (ENTRY.trim() === "") {
  throw new Error("Entry must not be only white space");
}

// Output directory: MAKEFUN_OUTPUT_DIR when set to a non-empty value,
// otherwise the competition default /output. An empty env value must
// fall back to the default, never to the current working directory.
const rawOutputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "";
const outputDir = rawOutputDir.trim() === "" ? "/output" : rawOutputDir;

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY + "\n", "utf8");

console.log(`Wrote ${ENTRY.length} characters to ${join(outputDir, "entry.txt")}`);
