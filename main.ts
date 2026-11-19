// news-image-20261118: copies the pre-drawn entry.png to /output/entry.png.
// Node 22, standard library only, no network. The copy is byte-for-byte, so
// two runs write identical bytes. Run it with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
