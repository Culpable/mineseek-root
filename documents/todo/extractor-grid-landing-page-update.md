# Extractor Grid Landing Page Updates

### Tasks

- Make naming consistent: use “Extractor Grid” everywhere (hero, metadata, video labels)  
- Improve hero subtitle (5 options) and implement chosen copy  
- Update Export card to mention Leapfrog  
- Add progress trail visual to the How it works section  
- Replace numbered steps with icons  
- Add Template library mini‑grid  
- Make AI copy specific to geology use case  
- Provide 5 variations for “Instant Structuring” and implement best  
- Add new feature cards: OCR, Freeform Queries, Human‑in‑the‑loop Controls  
- Create this progress document

---

### ~~Make naming consistent: use “Extractor Grid” everywhere~~ ✅ **COMPLETED**
- Updated `src/app/extractor-table/layout.jsx` metadata title/description to “Extractor Grid Demo”.
- Updated hero H1 to “The Extractor Grid”.
- Updated video title/play label to reference “Extractor Grid”.

### ~~Improve hero subtitle (5 options) and implement chosen copy~~ ✅ **COMPLETED**
- Implemented: “Turn geological PDFs into clean, export‑ready tables—complete with evidence and confidence.”
- Alternatives considered:
  1) “Extract every interval from geological PDFs and export in minutes—no manual retyping.”
  2) “From PDF to structured tables in one pass, with confidence scores and evidence.”
  3) “Convert reports into Leapfrog‑ready tables with audit‑friendly confidence and evidence.”
  4) “AI‑structured geology data from PDFs—capturing all intervals, ready to export.”
  5) “Upload a report, get clean tables—evidence‑backed and export‑ready.”

### ~~Update Export card to mention Leapfrog~~ ✅ **COMPLETED**
- Export card text now: “Download CSV/Excel aligned to downstream tools such as Leapfrog, with user‑friendly headers and stable schemas.”

### ~~Add progress trail visual to the How it works section~~ ✅ **COMPLETED**
- Added a horizontal progress rail with icons and labels: Upload → OCR (if needed) → Extract → Export.

### ~~Replace numbered steps with icons~~ ✅ **COMPLETED**
- Replaced numeric badges with `ArrowUpTrayIcon`, `SparklesIcon`, and `ArrowDownTrayIcon` in the three steps.

### ~~Add Template library mini‑grid~~ ✅ **COMPLETED**
- Added new `TemplateLibrary()` section with cards for Stratigraphic Intervals, Lithology Intervals, Collar Information, Survey Information, Mineralisation Intervals.
 - Added “Alteration Zones” per feature guide (hydrothermal alteration zones and assemblages).

### ~~Make AI copy specific to geology use case~~ ✅ **COMPLETED**
- “AI‑Powered Insights” replaced with concrete geology‑specific benefits across features and steps.

### ~~Provide 5 variations for “Instant Structuring” and implement best~~ ✅ **COMPLETED**
- Variations drafted:
  1) “Map extracted fields into tidy, standardised tables—ready for analysis and export.”
  2) “Turn raw extractions into consistent columns with friendly headers and stable keys.”
  3) “Standardise intervals into clean rows with mapped fields and consistent schemas.”
  4) “Auto‑structure geology data into organised tables with predictable headers.”
  5) “Produce analysis‑ready tables with mapped headers and schema consistency.”
- Implemented #2 for clarity and specificity.

### ~~Add new feature cards: OCR, Freeform Queries, Human‑in‑the‑loop Controls~~ ✅ **COMPLETED**
- Added three dedicated cards with precise wording and icons, in addition to the original six features (total now 9).
 - OCR card reframed to user‑centric: “Understands Handwritten Notes” (mentions OCR in description only).
 - Updated iconography: handwriting feature uses a pencil icon in feature card and progress rail.

### ~~Create this progress document~~ ✅ **COMPLETED**

---

## What’s left to change (future enhancements) 🔄

- Evidence & Confidence spotlight screenshot with a callout explaining right‑click to view supporting passages.
- “Works with your tools” integration band using existing logos; add a “Download sample CSV” link.
- Timestamped chapter links beneath the demo video (Templates, OCR fallback, Evidence & Confidence, Export).
- Performance/scale callout with animated numbers (docs per batch, TTFB, CSV size, safeguards).
- Compact FAQ addressing scanned PDFs, accuracy levels, multi‑table, limits, pricing.
- Analytics events for video progress, CTA clicks, template library interactions, sample CSV downloads.
