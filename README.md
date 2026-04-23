# dsa-training

Personal repo for **data structures and algorithms** practice: small TypeScript modules, one challenge per file, checked with **Jest** and organized by topic (arrays, hash tables, trees, graphs, and so on).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run typecheck` | Run the TypeScript compiler with `--noEmit`. |
| `npm run build` | Emit JavaScript and declarations into `dist/`. |
| `npm test` | Run all `*.test.ts` files with Jest. |
| `npm run test:watch` | Jest in watch mode. |
| `npm run new -- "<Title>" <path>` | Scaffold `<kebab-case>.ts` and `.test.ts` under `path` (see `scripts/new-challenge.cjs`). |

Example:

```bash
npm run new -- "Two Sum" arrays/two-pointers
```

Use `--` so npm forwards the arguments to the generator.

## Challenge log

| Challenge | Pattern | Difficulty | Time complexity | Status |
| --- | --- | --- | --- | --- |
| Reverse String | Two pointers | Easy | O(n) | ⏰ In Progress |

