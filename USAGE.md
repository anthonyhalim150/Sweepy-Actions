
# 🧹 Sweepy Actions — Usage Example

Easily integrate Sweepy into your GitHub workflows to automatically detect and clean unused files, assets, exports, dead links, variables, configs, aliases, dependencies, and more.

---

## 🚀 Basic Setup

Add the following to your `.github/workflows/sweepy.yml`:

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

✅ Sweepy will scan your entire project automatically, detecting:

- Unused JavaScript, TypeScript, CSS, SCSS, HTML, JSON files
- Dead links in Markdown and HTML files
- Unused exports, variables, `.env` keys, configs, aliases, npm dependencies
- Orphaned media assets (PNG, JPG, SVG, WebP)

Sweepy runs without requiring additional arguments — **zero-config by default**!

---

## ⚙️ Custom Detection Example

You can limit the detection to specific types using `--detect`:

```yaml
- uses: anthonyhalim150/Sweepy-Actions@v1
  with:
    args: '--detect js css links'
```

✅ This example will only scan for unused JavaScript, CSS files, and dead links.

---

## 📖 Full Sweepy Documentation

- 🔗 [Sweepy CLI Documentation](https://github.com/anthonyhalim150/sweepy)
- 📦 [Sweepy npm Package](https://www.npmjs.com/package/sweepy)

---

🧹 Keep your codebase clean automatically — with Sweepy Actions!
