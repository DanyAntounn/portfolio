import { cp, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = join(root, "dist");
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const entry of ["index.html", "src", "robots.txt", "sitemap.xml"]) {
  try { await cp(join(root, entry), join(output, entry), { recursive: true }); }
  catch (error) { if (error.code !== "ENOENT") throw error; }
}
try { await cp(join(root, "public"), output, { recursive: true }); }
catch (error) { if (error.code !== "ENOENT") throw error; }
console.log("Static site built successfully in dist/");
