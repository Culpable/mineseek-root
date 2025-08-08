# Documentation Guidelines

---

## 1. Overview 

- Summarise the feature or system's purpose and its core functionality in ≤ 3 sentences.
- Mention only the most critical technology, dependency, or constraint.
- **Focus on comprehensive coverage with maximum information density**—include all essential details but eliminate redundancy.
- Avoid implementation trivia—those belong in later sections.

> **Example**  
> "The **Database Upload Pipeline** ingests broker trail-report workbooks,  
> standardises them into canonical CSVs, validates column integrity, encrypts  
> sensitive fields, and bulk-inserts records into Postgres."

<important_note>

> 📝 **NOTE:** Do NOT reference specific line numbers in the guide. Instead, reference the location by file name and/or function name (e.g., "Add after the performSearch method" or "Update the IStorage interface"). Line numbers change frequently and make documentation outdated quickly.

</important_note>

---

## 2. Content Density & Structure Principles

**Information Density Requirements:**
- Every sentence must contribute unique, actionable information
- Use tables for comparative data, configuration options, or structured relationships
- Group related concepts into logical sections with clear hierarchies
- Eliminate filler words and redundant explanations
- **Avoid redundancy**: Never repeat the same information unless it requires critical emphasis for safety or correctness

**When to Use Markdown Tables:**

| Use Case | Example | Benefit |
|----------|---------|---------|
| **Configuration options** | Environment variables, settings, flags | Quick reference and comparison |
| **API endpoints** | Routes, methods, parameters | Structured overview of interfaces |
| **File types & formats** | Extensions, purposes, handling rules | Clear categorization |
| **Error codes & meanings** | Status codes, descriptions, actions | Rapid troubleshooting |
| **Component relationships** | Dependencies, interactions, data flow | Visual hierarchy understanding |

---

## 3. File Location

- Unless specified otherwise, new documentation for new features should be saved at `documents/guides/`
- Use a descriptive filename with underscore prefix: `_feature_name.md`

---

## 4. Markdown Formatting Standards

- **Lists**: Use dashes (`-`) for unordered lists, not asterisks (`*`) or bullet points (`•`)
  ```markdown
  ✓ Correct:
  - First item
  - Second item
  
  ✗ Incorrect:
  • First item
  * Second item
  ```
- **Code blocks**: Use triple backticks with language specification
- **Headers**: Use consistent header levels with proper spacing
- **Tables**: Use for comparative data; aligned columns with headers
- **Line breaks**: Add blank lines between sections for readability

---

## 5. Information Highlighting Guidelines

Use XML tags with proper spacing to highlight critical information or important notes.

**Critical Issues**
```markdown
<critical_warning>

> 🚨 **CRITICAL:** This action will cause data loss or system failure, or is a common source of error that requires additional emphasis.

</critical_warning>
```

**Important Information**
```markdown
<important_note>

> 📝 **NOTE:** This step is essential for proper functionality.

</important_note>
```

**Usage:**
- **CRITICAL**: Reserved for actions causing irreversible damage, data loss, or security vulnerabilities
- **NOTE**: Essential information affecting functionality or user experience

Always include blank lines before and after XML tags.

---

## 6. File Structure Diagram

<important_note>

> 📝 **NOTE:** File structure diagrams are ESSENTIAL for understanding which files are affected by issues or features. Without them, readers must search and guess file locations, significantly reducing documentation usefulness and increasing debugging time. Unless specified, all file structure diagrams should be included in the documentation.

</important_note>

- Render a concise tree using ASCII characters (`├──`, `│`, `└──`).
- Show every *logical* layer: package, sub-package, and key files.
- Append a one-line description **per file** (max. 80 chars).
- Collapse very deep trees with an ellipsis (`…`) to preserve readability.

> **Example**
> ```
> trailtracker/
> ├── routes/
> │   └── database/
> │       ├── db_upload_router.py      # /upload-to-history route handler
> │       ├── db_confirmation_router.py# /confirm-upload route handler
> │       └── standardise_pre_commit/  # Validation pipeline
> │           └── …                    # See Workflow section for full path
> └── models.py                        # SQLAlchemy models, encryption helpers
> ```

---

## 7. Workflow Diagram

- Use **Mermaid diagrams** for all workflow and architectural documentation
- Choose the appropriate diagram type based on what you're documenting:

| Diagram Type | Use For | Key Elements |
|--------------|---------|--------------|
| `flowchart` | Logic flows and processes | Decision points, actions, branches |
| `sequenceDiagram` | Component interactions | Messages, lifelines, timing |
| `classDiagram` | Object structures | Relationships, inheritance, methods |
| `graph TD` | Top-down directional flows | Dependencies, hierarchies |

- **Essential diagram elements**: Clear node labels, meaningful connection labels, decision points with labeled branches, start/end points
- **Mermaid syntax requirements**: Double quotes around text with spaces, `<br/>` for line breaks, darker colors for contrast
- **Color coding for key components**:

| Component Type | Color Code | Usage |
|----------------|------------|-------|
| Entry/start points | `fill:#1e40af` (dark blue) | Process initiation |
| Decision points | `fill:#b91c1c` (dark red) | Conditionals, branches |
| Critical processing | `fill:#047857` (dark green) | Core business logic |
| End points/outputs | `fill:#92400e` (dark brown) | Final results |

> **Example Flowchart**
> ```mermaid
> flowchart TD
>     START["START"]
>     START --> saveFiles["save_uploaded_files"]
>     saveFiles --> isExcel{"Is Excel?"}
>     isExcel -->|"Yes"| preProcess["upload_aggregator_pre_processing()"]
>     isExcel -->|"No"| bypass["bypass_conversion"]
>     preProcess --> buildResponse["build_response_to_frontend"]
>     bypass --> buildResponse
>     buildResponse --> END["END"]
>     
>     style START fill:#1e40af,color:#ffffff
>     style isExcel fill:#b91c1c,color:#ffffff
>     style preProcess fill:#047857,color:#ffffff
>     style END fill:#92400e,color:#ffffff
> ```

---

## 8. Optional Deep-Dive Sections (include when relevant)

- **Data Structures** – SQLAlchemy models, config dicts, or custom classes.
- **Key Functions** – Signature, parameters, side-effects, and caveats.
- **Integration Points** – External API calls, CLI entry points, Celery jobs.
- **Error Handling & Edge Cases** – Enumerate known pitfalls, linked
  exceptions, and how the system recovers or fails fast.

---

## 9. Subtle Nuances & Points of Error

Document *anything* that frequently trips up maintainers:

- Hidden dependencies (e.g., "Requires Flask *application* context, not just
  request context – see `routes/__init__.py` for initialisation order.")
- Non-obvious ordering constraints (e.g., "Duplicate check **must** run after
  standardisation to ensure canonical IDs.")
- Environment-specific pitfalls (e.g., "SQLite in development lacks pgcrypto, so
  encryption helpers silently no-op.")
- Performance land-mines (e.g., "Loading entire XLSX sheets into memory may
  exceed the 512 MB Heroku dyno limit for large LMG files.")

---

## 10. Prohibitions

**Unless requested:**

✘ Do **not** include time estimates, owners, sprint tasks, or "future improvements".  
✘ Avoid speculation—document observed behaviour only.  
✘ Skip unit-test details; link to the test suite if essential.  
✘ Eliminate redundant explanations—say it once, clearly and completely (except for critical warnings or points of failure that require emphasis).