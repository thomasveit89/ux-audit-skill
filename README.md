  _   ___  __     _             _ _ _   
 | | | \ \/ /    / \  _   _  __| (_| |_ 
 | | | |\  /    / _ \| | | |/ _` | | __|
 | |_| |/  \   / ___ | |_| | (_| | | |_ 
  \___//_/\_\ /_/   \_\__,_|\__,_|_|\__|
                                      
# ux-audit — Claude Code Skill

A Claude Code skill that audits any website, app, or UI against a bundled library of **102 UX laws, cognitive biases, and heuristics**.

Point it at a URL, a screenshot, or a codebase and get a prioritized, citable audit report in seconds.

Built on the same 102-principle library as my iOS app, [DESIGNSNACK: Laws & Patterns](https://apps.apple.com/us/app/designsnack-laws-patterns/id6754067995) — flashcards and AI quizzes if you'd rather study the principles than audit against them.

---

## Example output

Real output from running this skill against the [DESIGNSNACK App Store listing](https://apps.apple.com/us/app/designsnack-laws-patterns/id6754067995) itself:

```
# UX Audit: DESIGNSNACK — Laws & Patterns (App Store listing)
July 2026 · Evaluated against 102 UX laws, cognitive biases, and heuristics

## Summary
🔴 Critical issues      0
🟡 Warnings             1
✅ Strengths noted      2

Top priority: Lead with the outcome, not the inventory — "100+ UX
principles & laws" tells visitors what's inside, not why it's worth
their time.

## 🟡 Warnings

### Aha! Moment · attention
> "The moment users comprehend and appreciate the core value of a product."

What's happening: The subtitle states quantity ("100+ UX principles
& laws") rather than outcome. A design student scanning the App
Store can't tell in one glance whether this saves them from Googling
laws mid-interview-prep, or is just a static glossary.

Fix: Pair the count with a concrete outcome, e.g. "100+ UX laws —
ace your next design review or interview."

## ✅ What's Working

- Free-to-try with a $2.99 unlock lowers the commitment barrier
  before asking for payment.
- "No tracking or ads" is stated plainly — a clear trust signal for
  a professional/education-focused audience.
```

---

## Installation

Requires Node.js 18+.

```bash
git clone https://github.com/thomasveit89/ux-audit-skill.git
cd ux-audit-skill
node scripts/install.mjs
```

That's it. The skill is now available in every Claude Code session.

---

## Usage

In any Claude Code session:

```
/ux-audit https://yoursite.com
/ux-audit path/to/screenshot.png
/ux-audit app/components/HomePage.tsx
```

Or just describe what you want audited — the skill auto-triggers on:
- "audit my UI"
- "UX review"
- "check my design"
- "am I violating any UX laws?"

---

## What gets evaluated

102 principles across 6 categories:

| Category | What it covers |
|---|---|
| **attention** | How you direct and sustain user focus |
| **decisions** | How you support (or hinder) decision-making |
| **memory** | How much you ask users to remember |
| **persuasion** | Trust signals, social proof, motivation |
| **usability** | Core interaction quality |
| **visual** | Layout, hierarchy, Gestalt principles |

The principles include named laws (Fitts's Law, Hick's Law, Miller's Rule, Jakob's Law…), cognitive biases (Anchoring, Loss Aversion, Social Proof…), and Nielsen heuristics, each with concrete `do`/`dont` guidance.

---

## How it works

1. The skill reads `principles.json` (bundled, 102 principles)
2. Fetches and analyzes the target via `WebFetch` or reads provided files
3. Evaluates the UI against each contextually relevant principle
4. Returns a structured markdown report with severity ratings and named citations

The principles file is bundled so the skill works fully offline — no external API calls.

---

## Roadmap

- [ ] Playwright integration — automated screenshots with annotated violation overlays
- [ ] HTML report output — shareable visual report with screenshots inline
- [ ] Multi-page audit — crawl and audit full user flows, not just single pages
- [ ] Severity scoring — numerical score per category and overall
- [ ] CI integration — fail builds when critical UX violations are detected

---

## Data source

`principles.json` is a curated, bundled library of UX laws, cognitive biases, and design heuristics — the same one behind [DESIGNSNACK: Laws & Patterns](https://apps.apple.com/us/app/designsnack-laws-patterns/id6754067995) on iOS. Pull requests adding or refining principles are welcome.

---

## License

MIT — see [LICENSE](LICENSE).
