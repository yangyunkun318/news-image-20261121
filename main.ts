// Entry for the 21 November 2026 news image.
// The finished picture lives in this repository as entry.png; this program
// reads it and writes the same bytes to the output directory, where the
// grader picks it up as /output/entry.png.
// It needs no network and no wall clock, and it reads nothing outside
// this repository — the picture is already here, the program just moves it.
//
// To try it on your own machine, run:
//   mkdir -p out
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const picture = readFileSync(new URL('./entry.png', import.meta.url));
if (picture.length === 0) {
  throw new Error('entry.png is empty');
}
mkdirSync(outDir, { recursive: true });
const target = `${outDir}/entry.png`;
writeFileSync(target, picture);
const written = statSync(target).size;
if (written !== picture.length) {
  throw new Error(`entry.png copied ${written} of ${picture.length} bytes`);
}
