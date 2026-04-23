#!/usr/bin/env node
/**
 * Usage: npm run new -- "<Challenge Title>" <relative/path/to/folder>
 * Example: npm run new -- "Two Sum" arrays/two-pointers
 */

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

function usage() {
  console.error(
    [
      "Usage: npm run new -- \"<Challenge Title>\" <relative-dir>",
      "Example: npm run new -- \"Two Sum\" arrays/two-pointers",
      "",
      "Note: use `--` before the title so npm forwards all arguments to this script.",
    ].join("\n"),
  );
}

function titleToKebab(title) {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function kebabToCamel(kebab) {
  const parts = kebab.split("-").filter(Boolean);
  if (parts.length === 0) return "solve";
  return (
    parts[0] +
    parts
      .slice(1)
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join("")
  );
}

function geerate() {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    usage();
    process.exit(1);
  }

  const relDir = args[args.length - 1];
  const title = args.slice(0, -1).join(" ").trim();
  const kebab = titleToKebab(title);

  if (!title || !kebab) {
    console.error("Invalid title: need letters or numbers after trimming.");
    usage();
    process.exit(1);
  }

  const targetDir = path.resolve(root, relDir);
  const relativeToRoot = path.relative(root, targetDir);
  if (
    relativeToRoot.startsWith("..") ||
    path.isAbsolute(relativeToRoot) ||
    relativeToRoot === ""
  ) {
    console.error(`Invalid directory: ${relDir}`);
    process.exit(1);
  }

  const base = kebab;
  const tsPath = path.join(targetDir, `${base}.ts`);
  const testPath = path.join(targetDir, `${base}.test.ts`);
  const fnName = kebabToCamel(kebab);

  if (fs.existsSync(tsPath) || fs.existsSync(testPath)) {
    console.error(`Refusing to overwrite existing files:\n  ${tsPath}\n  ${testPath}`);
    process.exit(1);
  }

  fs.mkdirSync(targetDir, { recursive: true });

  const tsContents = `/**
 * ${title}
 */
export function ${fnName}(): void {
  // TODO
}
`;

  const testContents = `import { ${fnName} } from "./${base}";

describe("${fnName}", () => {
  it("is exported", () => {
    expect(typeof ${fnName}).toBe("function");
  });
});
`;

  fs.writeFileSync(tsPath, tsContents, "utf8");
  fs.writeFileSync(testPath, testContents, "utf8");

  console.log(`Created:\n  ${path.relative(root, tsPath)}\n  ${path.relative(root, testPath)}`);
}

geerate();
