import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const input = resolve(process.env.MAKEFUN_BOT_DIR ?? '/bot', 'POST.json');
const output = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'POST.json');

mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, readFileSync(input));
