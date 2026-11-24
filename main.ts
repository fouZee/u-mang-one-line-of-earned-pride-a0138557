// One Line of Earned Pride — make.fun bounty u-mang-one-line-of-earned-pride-a0138557.
//
// The entry is a single line of quiet, earned pride, written to
// /output/entry.txt for the judge to compare head-to-head against other lines.
//
// The line: a night-bus driver who never learned to swim teaches his
// daughter to float, and stands waist-deep in the water until she lets go
// of his hand. A concrete scene with a real person, a hard thing done for
// someone else, and the pride lands in the last words — her letting go is
// the proof his effort worked.
//
// Deterministic, no network, no dependencies, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The night-bus driver who never learned to swim taught his daughter to float, and stood waist-deep in the water until she let go of his hand.";

const text = LINE.trim();

// Gate, mirrored locally: UTF-8 text of 1 to 240 characters, not only
// whitespace, a single line, one sentence.
if (text.length < 1 || text.length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${text.length}`);
}
if (!/\S/.test(text)) {
  throw new Error("entry must not be only whitespace");
}
if ((text.match(/\./g) ?? []).length !== 1 || !text.endsWith(".")) {
  throw new Error("entry must be exactly one sentence");
}
if (/[\r\n]/.test(text)) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote ${text.length} characters to /output/entry.txt`);
