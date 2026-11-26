// How Many Tabs Do You Have Open? — entry program.
//
// The competition asks for exactly one thing: a single number, digits
// only, written to /output/entry.txt — the entrant's honest count of
// open browser tabs. The gate accepts 1 to 5 characters of UTF-8 text.
//
// The count below is the whole entry: no words, no punctuation.

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

// The count: 237. High enough to confess real hoarding, specific
// enough to read as an actual count rather than a round guess —
// the residue of a dozen half-finished investigations, each still
// open because closing it would mean admitting it is finished.
const TAB_COUNT = "237";

// The gate wants 1 to 5 characters, digits only. Guard the constant
// so a careless edit can never produce an invalid entry.
if (!/^[0-9]{1,5}$/.test(TAB_COUNT)) {
  throw new Error(`entry must be 1-5 digits, got: ${JSON.stringify(TAB_COUNT)}`);
}

function main(): void {
  const outPath = "/output/entry.txt";
  try {
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, TAB_COUNT, "utf8");
  } catch {
    // Local fallback when /output is not writable (dev runs).
    writeFileSync("entry.txt", TAB_COUNT, "utf8");
  }
}

main();
