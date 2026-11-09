# Bharat Space Education Research Centre — GenAI Internship
## Week 2 Project Submission Report

**Student name:** ______________________________  
**Programme / batch:** _________________________  
**Submission date:** ___________________________  
**Instructor:** Karan Bagul  

---

## 1. Objective

The objective of Week 2 was to use a generative-AI coding agent to build practical software projects. The brief requires a minimum of two projects from each of four sections, for a minimum total of eight projects.

## 2. Selected projects

| Section | Project number | Project title | Deliverable |
|---|---:|---|---|
| A — Web tools | 4 | CBT Mock Test Engine | Browser-based mock-test application |
| A — Web tools | 5 | Scribbly Notes | Live notebook-style notes application |
| B — Phone apps and games | 7 | Bill Book | Mobile-first installable billing web app |
| B — Phone apps and games | 8 | Auto Rally | Touch/keyboard racing game web app |
| C — Chrome extensions | 10 | Job Clipper | Chrome Manifest V3 job tracker |
| C — Chrome extensions | 12 | Chat Saver | Chrome Manifest V3 chat exporter |
| D — Video, skills and design | 16 | Your Own Skill | Reusable viva-practice skill instructions |
| D — Video, skills and design | 17 | Same Page, New Design | Original page and redesigned page |

## 3. Project descriptions

### Project 4 — CBT Mock Test Engine
The application provides a sample question bank, JSON question-file upload, question palette, answer selection, mark-for-review state, countdown, local attempt persistence, +4/−1 scoring, and a result summary. The supplied sample contains five questions.

### Project 5 — Scribbly Notes
The application converts typed notes into a notebook-style live preview. It provides selectable typography styles, ink colours, paper styles, long-note page splitting, and browser print-to-PDF.

### Project 7 — Bill Book
The mobile-first billing application supports a shop profile, product entry, quantities, discounts, tax, invoice history, daily sales totals, sharing/printing, and a UPI payment URI QR workflow. The QR image currently uses an external QR-image service, so this component is not fully offline. Use only a test UPI ID and do not make a payment during testing.

### Project 8 — Auto Rally
The game provides keyboard and touch steering, a looping road, collectible objects, obstacles, lap progression, elapsed time, a sound toggle, and locally stored best time. It is packaged as an installable web app rather than a native Android APK.

### Project 10 — Job Clipper
The Chrome extension provides editable job details, a four-stage application board, local storage, search, CSV export, and deadline notifications. Automatic field detection is best-effort and should be checked on three different job websites.

### Project 12 — Chat Saver
The Chrome extension extracts visible conversation content from supported chat pages and provides Markdown download and print-to-PDF. Extraction depends on the page's current DOM structure and must be verified on two supported chat sites.

### Project 16 — Your Own Skill
The `/viva` skill instructions define a one-question-at-a-time oral-exam workflow, feedback, scoring, model answers, and a revision summary. The folder includes three suggested fresh-session test cases.

### Project 17 — Same Page, New Design
The project contains `before.html` and `after.html`. Both pages use the same visible content. The redesigned page introduces stronger visual hierarchy, card grouping, responsive layout, and consistent components.

## 4. Development approach

The projects were prepared using an AI-assisted build workflow:
1. Plan the required features.
2. Write a project-specific prompt.
3. Generate the initial implementation.
4. Review the source code and run the application.
5. Test the acceptance criteria.
6. Improve the implementation based on observed issues.

The prompt log is supplied as `prompts.md`.

## 5. Testing and evidence

**Important:** A project is not considered tested merely because its source files exist. Complete `TESTING_CHECKLIST.md` on the target browser/device and attach genuine screenshots or recordings.

| Project | Test status | Evidence filename / notes |
|---|---|---|
| CBT Mock Test Engine | Not yet independently verified | __________________ |
| Scribbly Notes | Not yet independently verified | __________________ |
| Bill Book | Not yet independently verified | __________________ |
| Auto Rally | Not yet independently verified | __________________ |
| Job Clipper | Not yet independently verified | __________________ |
| Chat Saver | Not yet independently verified | __________________ |
| Your Own Skill | Not yet independently verified | __________________ |
| Same Page, New Design | Not yet independently verified | __________________ |

## 6. Known implementation limitations

- Projects 7 and 8 are installable Progressive Web Apps (PWAs), not native Android APKs. Confirm with the instructor whether an installable PWA is accepted for the phone-app section. If a native APK is required, package and test using an Android build workflow.
- Project 7's QR image is obtained from an external QR service. The local bill records are stored in the browser; do not describe the entire application as fully offline until the QR workflow is replaced with local QR generation and tested offline.
- Project 10's page parsing is heuristic. Manually verify and correct detected fields.
- Project 12's extraction is dependent on supported chat-site DOM selectors. Test and adjust selectors if needed.
- No test screenshots, device-installation proof, or instructor sign-off are fabricated or included.

## 7. Conclusion

The submission package contains implementations and supporting documentation for eight selected projects, with two projects selected from each section. Final submission should include the completed test checklist and genuine evidence captured after running each project.

**Student signature:** ______________________________
