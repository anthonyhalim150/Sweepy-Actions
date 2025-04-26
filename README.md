
# 🧹 Sweepy Actions

> Run Sweepy automatically in your GitHub workflows to detect and clean unused files, dead links, exports, variables, configs, aliases, dependencies, and more.

[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/anthonyhalim150/Sweepy-Actions/test.yml?label=Tests&style=flat-square)](https://github.com/anthonyhalim150/Sweepy-Actions/actions)
[![GitHub License](https://img.shields.io/github/license/anthonyhalim150/Sweepy-Actions?style=flat-square)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg?style=flat-square)](https://github.com/anthonyhalim150/Sweepy-Actions/pulls)
[![Sweepy NPM Downloads](https://img.shields.io/npm/dm/sweepy?label=Sweepy%20Downloads&style=flat-square)](https://www.npmjs.com/package/sweepy)

---

# 📦 What is Sweepy?

**Sweepy** is an all-in-one, AST-powered tool for eliminating:
- Unused files (JS, TS, CSS, SCSS, HTML, JSON)
- Unused exports and variables
- Dead links (in Markdown and HTML)
- Unused media assets (PNG, JPG, SVG, WebP)
- Unused `.env` keys
- Dead or misconfigured aliases
- Unused or undeclared npm dependencies
- Orphaned configs (`tsconfig`, `.babelrc`, `.prettierrc`)

Sweepy keeps your codebase **clean, fast, and efficient**.

> [Learn more about Sweepy →](https://github.com/anthonyhalim150/sweepy)

---

# 🚀 Sweepy Action

This GitHub Action allows you to:

- Detect unused JS, TS, CSS, SCSS, HTML, JSON, assets, exports, variables
- Find dead links across Markdown and HTML
- Identify dead aliases, unused `.env` keys, and config files
- Support dynamic imports, JSX component tracking, alias resolution
- Auto-fail pull requests with unused code or dead links
- Generate full JSON, text, or HTML reports
- Integrate safely with dry-run mode for CI

✅ Easy to install  
✅ CI/CD friendly  
✅ Full Sweepy support by default

---

# 🛠️ Installation

Add this to your `.github/workflows/sweepy.yml`:

```yaml
name: Sweepy Scan

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  sweepy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - name: Install dependencies
        run: |
          if [ -f package.json ]; then
            npm install
          fi
      - name: Run Sweepy
        uses: anthonyhalim150/Sweepy-Actions@v1

      
```

✅ No arguments needed — Sweepy auto-detects everything by default.

---

# ⚙️ Inputs

| Name | Description | Default |
|:--|:--|:--|
| `args` | Optional arguments to pass to Sweepy CLI | _(none)_ |

---

# 📚 Examples

### Full Project Sweep (default)

```yaml
- uses: anthonyhalim150/Sweepy-Actions@v1
```

_(No arguments needed — Sweepy will detect everything automatically.)_

---

### Scan Only JavaScript, CSS, and Dead Links

```yaml
- uses: anthonyhalim150/Sweepy-Actions@v1
  with:
    args: '--detect js css links'
```
---

# 📚 Full Usage Example

📖 [See full usage and examples →](./USAGE.md)


---

# 📜 License

This GitHub Action is released under the [MIT License](./LICENSE).

---

# 📈 Links

- 🔗 [Sweepy GitHub Repo](https://github.com/anthonyhalim150/sweepy)
- 📦 [Sweepy npm package](https://www.npmjs.com/package/sweepy)

---
