# Accessibility Demo Playground

This repository is a simple static website designed to teach common WCAG accessibility issues in a visual, easy-to-demo way. The page intentionally includes accessibility problems so you can present them live on camera, then reveal the corrected version with a single click.

## What is included

- Missing form labels
- Low contrast text
- Color-only status communication
- Click-only interactions
- Broken heading order
- Invisible focus styles
- A fixed version for each example

## Local preview

Because this is a static site, you can preview it by opening `index.html` directly in a browser or by serving it locally:

```bash
cd accessibility-demo-playground
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Demo usage

- Use the top-right toggle to reveal the accessible versions.
- Use the `Reset demo` button to restore the intentionally broken examples.
- Each example is meant to be educational and should be clearly labeled as a demo-only playground.

## Notes

This project is intentionally not production-ready, because the goal is to showcase common accessibility failures in a controlled way.
