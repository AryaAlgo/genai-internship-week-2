# Week 2 GenAI Internship — Minimum 8 Project Pack

This pack contains eight project implementations, two from each section of the Week-2 brief.

## Project selection
- Section A: Project 4 CBT Mock Test Engine; Project 5 Scribbly Notes
- Section B: Project 7 Bill Book; Project 8 Auto Rally
- Section C: Project 10 Job Clipper; Project 12 Chat Saver
- Section D: Project 16 Your Own Skill; Project 17 Same Page, New Design

## Run locally
Most web apps are static HTML/CSS/JavaScript:
1. Open the relevant `index.html` in a browser, or serve the project folder with `python3 -m http.server 8000`.
2. Visit `http://localhost:8000`.
3. For installable PWAs, use localhost or HTTPS, then choose Install App / Add to Home Screen.

Chrome extensions:
1. Open `chrome://extensions`.
2. Enable Developer mode.
3. Choose Load unpacked and select the relevant extension folder.

Agent skill:
- Read `section-d/your-own-skill/SKILL.md`.
- The skill is a reusable instruction file. Its invocation depends on the agent platform's supported skill format.

## Important scope and honest testing notes
These are working MVP implementations designed to meet the core project features in the brief. They are not evidence that every external acceptance test has already passed:
- Bill Book includes a UPI payment URI and generated QR for the entered UPI ID; verify with a test UPI app and never make a real payment during testing.
- Bill Book and Auto Rally are installable mobile web apps (PWAs), not native APKs. If the instructor strictly requires native Android APKs, package them with Android Studio/Capacitor and test on a physical Android phone.
- Chrome extensions need to be loaded and tested in Chrome on at least the required websites.
- Job Clipper uses editable manual entry as a fallback; page auto-detection is best-effort and depends on site structure.
- Chat Saver supports extraction on common chat interfaces; site DOM changes may require selector updates.
- PDF export in Scribbly Notes uses the browser's print dialog (Save as PDF).
- Complete the `TESTING_CHECKLIST.md` and add your own screenshots before submission.

No real personal documents, API keys, passwords, or payment credentials are included.
