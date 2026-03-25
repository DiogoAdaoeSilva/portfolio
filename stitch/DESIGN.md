```markdown
# Design System: Architectural Minimalism & Tonal Depth

## 1. Overview & Creative North Star: "The Monolith & The Void"
The Creative North Star for this design system is **"The Monolith & The Void."** 

We are moving away from the "web-as-a-wireframe" mentality. Instead, we view the interface as a physical architectural space. The "Monolith" represents our deep slate elements (`primary`, `on-background`)—weighted, authoritative, and permanent. The "Void" represents our expansive use of `surface` and `background`—not merely empty space, but a deliberate "gallery" environment that gives content room to breathe.

By utilizing high-contrast typography scales (Inter) and removing structural lines, we create a high-end editorial experience. We break the grid through intentional asymmetry, where large display type may sit offset to a content block, creating a sense of sophisticated, non-linear flow.

---

## 2. Colors: Tonal Transition Over Borders
Our palette is a study in subtle shifts. The goal is "perceived depth" through material layering.

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders are strictly prohibited for sectioning or containment. 
Boundaries must be defined solely through background color shifts. For instance, a side-rail or a secondary content area should use `surface-container-low` (#f2f4f2) to distinguish itself from the main `background` (#f9f9f7). 

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked fine papers. 
- **Base Layer:** `surface` (#f9f9f7).
- **Secondary Logic:** `surface-container-low` (#f2f4f2) for subtle grouping.
- **Interactive Layers:** `surface-container` (#ecefec) or `surface-container-high` (#e5e9e6) for elements that require immediate user focus.
- **Deep Inset:** `surface-dim` (#d4dcd8) can be used for footer or "well" areas to ground the page.

### Signature Textures & Materiality
- **The Slate Gradient:** For primary CTAs or Hero sections, use a linear gradient from `primary` (#595f66) to `primary_dim` (#4d5359). This prevents the deep slate from looking "flat" or "digital," giving it a stone-like density.
- **Glassmorphism:** For floating navigation or modals, use `surface_container_lowest` (#ffffff) at 80% opacity with a `20px` backdrop-blur. This allows the architectural background shifts to bleed through, maintaining the "Void" feel.

---

## 3. Typography: Editorial Authority
We use **Inter** exclusively, but we treat it with the reverence of a serif. The key is extreme scale contrast.

- **Display (lg/md/sm):** These are our "Monoliths." Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero headlines. Color: `on-surface` (#2d3432).
- **Headline & Title:** Used for section starts. Use `headline-lg` (2rem) to lead the eye. 
- **Body (lg/md):** Our "Workhorse." `body-lg` (1rem) is the standard for readability. Maintain a generous line-height (1.6) to support the architectural feel.
- **Labels (md/sm):** Always in `on-surface-variant` (#5a605e). Use these for meta-data or "micro-copy."

**Layout Tip:** Align `display-lg` text to the left margin, but indent the corresponding `body-md` text by a `spacing-16` (5.5rem) value to create a sophisticated, asymmetrical editorial column.

---

## 4. Elevation & Depth: Atmospheric Layering
Traditional drop shadows are too "software-generic." We use **Atmospheric Layering.**

- **The Layering Principle:** To lift a card, place a `surface-container-lowest` (#ffffff) element onto a `surface-container` (#ecefec) background. The 1% shift in hex value is enough for the human eye to perceive a change in plane without visual noise.
- **Ambient Shadows:** If a floating element (like a dropdown) is required, use a shadow with a blur of `40px`, Y-offset of `12px`, and an opacity of 4% using the `on-surface` color. It should feel like a soft shadow on a gallery wall, not a "glow."
- **The Ghost Border:** If accessibility requires a container edge, use `outline-variant` (#adb3b0) at **15% opacity**. It should be barely visible—a "whisper" of a line.

---

## 5. Components: Sculpted Elements

### Buttons
- **Primary:** Background: `primary` (#595f66). Type: `on-primary` (#f4f8ff). Shape: Sharp `0px` corners. Padding: `spacing-4` (vertical) x `spacing-8` (horizontal).
- **Tertiary (Text):** No background. `label-md` bold. Use a `spacing-1` bottom-padding and a `1px` underline using `primary_container` for a refined, editorial link feel.

### Cards & Lists
- **Rule:** Forbid divider lines. 
- Use `spacing-10` (3.5rem) to separate list items. The "Void" is your divider. 
- For cards, use a tonal shift to `surface-container-lowest` to denote the hit area.

### Input Fields
- **Refinement:** No 4-sided boxes. Use a background fill of `surface-container-low` (#f2f4f2) with a `2px` bottom-border of `outline-variant` (#adb3b0). 
- **Focus State:** Transition the bottom-border to `primary` (#595f66).

### Additional: The "Editorial Masthead"
A custom component for this system. A full-bleed `surface-container-lowest` bar at the top of a page, using `title-sm` for navigation links, with a `spacing-24` (8.5rem) top margin to push the content down, creating an expensive, spacious entry point.

---

## 6. Do’s and Don’ts

### Do:
- **Use Asymmetry:** Balance a heavy `primary` element on the left with a massive `spacing-20` (7rem) void on the right.
- **Embrace the Hard Edge:** With `roundedness: 0px`, every element is a sharp architectural block. Ensure alignment is mathematically perfect.
- **Trust the Tones:** If a section feels "lost," don't add a border. Shift the background one tier higher in the `surface-container` scale.

### Don’t:
- **Don’t use "Pure Black":** Use `on-surface` (#2d3432) for text. Pure black is too harsh for this soft, natural palette.
- **Don’t use Shadows on Everything:** Only use shadows for "Floating" elements (Modals, Tooltips). Everything else must sit "flush" or "stacked."
- **Don’t Overcrowd:** If you can’t fit an element without reducing whitespace below `spacing-6`, the element doesn't belong on that layer. Move it to a sub-page or a drawer.

---
**Director's Note:** This system succeeds when it feels "quiet." If the interface feels loud or cluttered, return to the "Void." Increase your spacing tokens and let the typography do the heavy lifting.```