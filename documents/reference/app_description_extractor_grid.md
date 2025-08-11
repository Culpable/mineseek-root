Here is a description of the Extractor Grid app from the user's perspective:
<app_description>
# Extractor Grid — User‑Focused Features Guide

## What it is
Extractor Grid turns geological PDFs and reports into ready‑to‑use structured tables. Upload a document, pick a template (or ask a question), and get clean rows you can use immediately in Excel, Leapfrog, or your workflows.

## Why it’s different
- **Extracts everything at once**: Template‑driven extraction pulls ALL intervals/records in a single pass (e.g., every stratigraphic unit or mineralization interval), not just the first match.
- **Handles messy documents**: If a PDF has little/no embedded text, client‑side OCR automatically kicks in with progress feedback—no manual preprocessing.
- **Built‑in validation**: Documents with insufficient text are caught early with clear guidance; structured responses include confidence and evidence.
- **Fast to start, flexible to grow**: Quick multi‑table setup for full geology, or targeted single‑template tables. Switch to freeform questions for ad‑hoc checks.

## How it works (3 simple steps)
1) **Upload your document**
- Drag‑and‑drop PDFs. Text‑based files process immediately; scanned/image PDFs trigger automatic OCR.

2) **We process and extract**
- Your document is chunked, indexed, and queried using a geology‑aware template. For templates, we extract all records as arrays and map them into rows.

3) **You get structured results**
- See results in a spreadsheet‑like grid with the source filename in the first column for every row. Download CSV/Excel anytime.

## Key features

### Structured Template Extraction (Geology‑aware)
- Templates available for: Stratigraphic Intervals, Lithology Intervals, Collar Information, Survey Information, Mineralization Intervals.
- Returns complete arrays of records in one go; the grid automatically creates additional rows and fills columns accordingly.
- Field names are mapped to friendly column headers while preserving precise backend keys for consistent extraction.

#### Available templates
- **Stratigraphic Intervals**: Extract geological formations, rock units, and stratigraphic sequences.
- **Lithology Intervals**: Extract physical rock properties and lithological descriptions.
- **Collar Information**: Extract drill hole location data and specifications.
- **Survey Information**: Extract geophysical survey data and measurements.
- **Mineralisation Intervals**: Extract ore occurrences, assays, and alteration data.
- **Structural Measurements**: Extract structural measurements and fault/joint orientations from drill logs. (Preview)
- **Alteration Zones**: Extract hydrothermal alteration zones and assemblages from drill logs. (Preview)

### Quick Setup or Single‑Template Tables
- **Quick Setup**: Spin up 3–5 ready‑made tables for end‑to‑end geological analysis in seconds.
- **Single‑Template**: Use the table switcher to add a focused table with icon‑guided selection and optional custom name.

### Automatic OCR Fallback (no manual steps)
- If the backend detects too little text, the UI runs client‑side extraction (PDF.js + OCR) and resubmits extracted text automatically.
- Live progress indicators show when we’re uploading, running OCR, and submitting.

### Freeform Query Mode
- Ask targeted questions without a template (e.g., “Is there a table present?”). Great for quick checks or running the same question across many PDFs.
- Choose your preferred answer type (text, list of text, number, list of numbers, boolean).

### Evidence and Confidence
- Every structured extraction includes a confidence score and top evidence chunks used to produce the result.
- Right‑click to view chunks and inspect the supporting passages.

### Human‑in‑the‑loop Controls
- Rerun a row, edit results, or clear and try again—balance automation with human review where needed.

### Source Document Traceability
- The first column displays the original PDF filename for every row—including rows auto‑created from multi‑record extractions—so you always know where each result came from.

### Performance, Batching, and Caching
- Columns for the same template are processed together, sharing a single extraction and cache for consistent, fast results.
- Large arrays are handled gracefully; local storage limits are guarded so the app keeps working even with big extractions.

### Export‑ready
- Download clean CSV/Excel with the exact schema expected by downstream tools (e.g., Leapfrog). Column headers are user‑friendly; data keys stay consistent.

## Common use cases
- Legacy report processing: turn decades of historical exploration reports into searchable, structured tables.
- Regulatory submissions: extract and format for WAMEX, SARIG, and similar.
- Assay data compilation: standardize results from many labs into unified tables.
- Literature review: pull relevant data from technical papers and publications.

## Quality, accuracy, and control
- Content validation prevents bad uploads from causing downstream failures.
- Confidence and evidence are returned on every extraction for transparency.
- Adjustable precision vs speed: run fast defaults for everyday use, or opt into higher‑precision agentic workflows when accuracy is paramount.

## Outputs and integrations
- Instantly export CSV/Excel for analysis or tool import.
- Consistent schemas across templates make mapping straightforward.

## Options and limits
- Performance and cost scale with document size and precision level. OCR adds time to scanned PDFs but happens automatically with a clear progress UI.
- Very large extractions are supported; the app protects against browser storage limits and continues operating without losing results.

---

This guide describes the user experience and benefits of Extractor Grid so you can confidently present it on a landing page (e.g., with bento cards for features, a three‑step “How it works,” and industry use cases).
</app_description>