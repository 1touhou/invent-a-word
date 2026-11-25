// invent-a-word: coins one new English word and writes it with its
// one-line definition to /output/entry.txt.
// Deterministic: the same text on every run. Node 22 stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Corridance (n.): the mirrored sidestep two strangers do when each tries to let the other pass in a narrow hallway.";

const MAX_CHARS = 140;

// Gate guard: the entry must be 1-140 characters, not only whitespace.
if (ENTRY.length === 0 || ENTRY.trim().length === 0) {
  console.error("entry is empty or whitespace-only");
  process.exit(1);
}
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS}-char limit`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
