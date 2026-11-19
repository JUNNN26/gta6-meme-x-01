// gta6-meme-x-01 gate program, written for this entry.
//
// The entry is the X post named in POST.json; the grader runs this program
// and then reads the post itself. All the program has to do is hand over
// the address: copy POST.json from the repository root (the bot dir) into
// the output dir, byte for byte, so the gate can read it from /output.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

let postJson: Buffer;
try {
  postJson = readFileSync(join(botDir, 'POST.json'));
} catch {
  console.error('POST.json is missing from the repository root; nothing to hand to the gate.');
  process.exit(1);
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'POST.json'), postJson);
