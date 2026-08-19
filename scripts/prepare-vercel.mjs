import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const output = resolve(root, "vercel-output");

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(resolve(root, "dist/client"), output, { recursive: true });
await cp(resolve(root, "dist/server/prerendered-routes/index.html"), resolve(output, "index.html"));
await cp(resolve(root, "dist/server/prerendered-routes/404.html"), resolve(output, "404.html"));

console.log("Prepared static Vercel output.");
