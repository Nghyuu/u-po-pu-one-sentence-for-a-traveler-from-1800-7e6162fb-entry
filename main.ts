// Copy entry.txt to the make.fun output directory.
// The entry is a single sentence; this script only copies it, byte for byte.
// It resolves entry.txt relative to this script file, never the working
// directory, so it works no matter where it is invoked from.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY_FILE = "entry.txt";
const dir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
copyFileSync(join(dir, ENTRY_FILE), join(outDir, ENTRY_FILE));
