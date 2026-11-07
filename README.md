# Access Lab — Accessibility Playground

A polished, recording-friendly static site for teaching common accessibility barriers and demonstrating practical fixes. **This site intentionally includes inaccessible examples.** Keep the demo-only warning in place, don't collect personal data through the examples, and don't copy broken patterns into production.

## What's in the playground

Each demo uses a before → impact → after narrative:

1. A logo image without an `alt` attribute, followed by an informative alternative-text example.
2. A form control without a visible label.
3. Low-contrast text.
4. A safe, escapable keyboard focus-loop simulation, followed by a native dialog example.
5. A visual-only status update compared with a polite live region.
6. Status conveyed by color alone.

Use a card's **Show the fix** control to switch its example, **Show all fixes** to reveal all fixes, and **Reset demos** to return to the broken examples. The focus-loop simulation is intentionally escapable using Escape and the on-screen end button; it demonstrates the behavior without leaving a visitor trapped.

The header brand mark intentionally has no `alt` attribute to support the requested logo demo. Its example's fixed state includes alternative text. In production, provide appropriate text alternatives for informative images, or `alt=""` for decorative images.

## Preview locally

Open `index.html`, or serve the project from its root directory:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Publish with GitHub Pages

A workflow in `.github/workflows/pages.yml` builds and deploys this static site whenever changes are pushed to `main`, and can also be started manually.

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. Push to `main` or run **Deploy to GitHub Pages** from the Actions tab.
4. After the deployment workflow succeeds, Pages will show the published URL (usually `https://graphicidentity.github.io/accessibility-demo-playground/`).

The first-time Pages source selection is a repository setting and must be confirmed by a repository administrator. The workflow uses the GitHub Pages deployment actions and repository `pages: write` / `id-token: write` permissions.

## Accessibility and WCAG notes

The criterion references are learning pointers, not a claim that each short example fully captures a success criterion or that this site is an audit. WCAG conformance depends on the full experience and context. Screen reader behavior varies by browser and assistive technology; test with real users and tools. See the [W3C WCAG 2.2 Understanding documents](https://www.w3.org/WAI/WCAG22/Understanding/).
