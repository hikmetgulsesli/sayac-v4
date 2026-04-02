# Design System Strategy: The Kinetic Monolith

## 1. Overview & Creative North Star
The visual identity of this design system is guided by the Creative North Star: **"Kinetic Monolith."** 

Utility apps often fall into the trap of looking like generic tools. This system rejects that. Instead, we treat the utility—the act of counting and tracking—as a high-precision, cinematic experience. By combining the aggressive, geometric precision of **Space Grotesk** with a deep, atmospheric color palette, we create a UI that feels less like a mobile app and more like a high-end physical instrument. 

We break the "template" look through **intentional scale disparity**. We pair massive, screen-dominating counter values with tiny, refined labels. This contrast creates a sophisticated hierarchy that feels editorial and premium.

---

## 2. Colors & Surface Architecture
The palette is built on a foundation of deep nocturnal slates, using functional vibrant accents to drive action.

### The "No-Line" Rule
Standard UI relies on borders to define space. **This system prohibits 1px solid borders for sectioning.** Boundaries must be defined solely through background color shifts. Use `surface_container_low` for secondary sections and `surface_dim` for the base canvas. If two areas touch, their distinction comes from a tonal jump, not a line.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. We use the following nesting logic to create depth:
*   **Base Canvas:** `surface` (#070d1f).
*   **Secondary Zones:** `surface_container_low`.
*   **Interactive Focal Points:** `surface_container_high` or `surface_container_highest`.

### The "Glass & Gradient" Rule
To elevate the experience beyond flat design, floating elements (like modals or navigation bars) should utilize **Glassmorphism**. Use semi-transparent variants of `surface_container` with a `backdrop-blur` of 12px–20px. 
*   **Signature Textures:** For the main "Increase" action, do not use a flat green. Apply a subtle linear gradient from `primary` (#4ae176) to `primary_dim` (#38d36a) at a 145-degree angle to give the button a tactile, "lit from within" soul.

---

## 3. Typography: Editorial Utility
Typography is the primary engine of this design system's personality.

*   **Display & Headline (Space Grotesk):** This is our "Brutalist" voice. Used for the counter and major headers. It should feel massive, unapologetic, and tightly tracked. 
    *   *Display-LG:* 3.5rem (and up to 8xl for counters).
*   **Body & Labels (Inter):** This is our "Functional" voice. Inter provides the necessary legibility to balance the expressive nature of Space Grotesk. 
    *   *Body-LG:* 1rem for primary actions.
    *   *Label-MD:* 0.75rem for metadata, using `on_surface_variant` to keep it humble.

The hierarchy is achieved by "Value Weighting." A huge `display-lg` number in `primary` tells the user the "What," while a tiny `label-sm` in `on_surface_variant` provides the "Context."

---

## 4. Elevation & Depth: Tonal Layering
We move away from traditional drop shadows, which can muddy a dark UI. 

*   **The Layering Principle:** Depth is achieved by "stacking." A `surface_container_highest` element placed on a `surface_dim` background provides enough contrast to imply elevation without a single pixel of shadow.
*   **Ambient Shadows:** For floating elements, use an extra-diffused shadow. 
    *   *Shadow Color:* Use a 10% opacity version of `surface_tint`.
    *   *Blur:* 40px–60px. This creates a "glow" rather than a "shadow," fitting the dark mode aesthetic.
*   **The Ghost Border Fallback:** If accessibility requires a container edge, use the **Ghost Border**. Apply `outline_variant` at 15% opacity. It should be felt, not seen.

---

## 5. Components

### The Primary Counter
The heart of the app. It uses `display-lg` (or larger) in `Space Grotesk Bold`. The color should be `on_surface`. When the value changes, use a vertical slide transition to reinforce the "Kinetic" nature of the system.

### Buttons (The Kinetic Triggers)
*   **Primary (Increase):** Background: `primary_container`. Text: `on_primary_container`. Roundedness: `full`.
*   **Secondary (Decrease):** Background: `secondary_container`. Text: `on_secondary_container`. Roundedness: `full`.
*   **Tertiary (Reset):** Background: `transparent`. Text: `on_tertiary_fixed_variant`. This button should feel "recessed" into the UI, indicating its destructive but necessary nature.

### Cards & Lists
**Forbid the use of divider lines.** Separate list items using `spacing-3` (1rem) of vertical white space or by alternating background tones between `surface_container_low` and `surface_container`.

### Input Fields
Inputs should not be "boxes." They should be "Platforms." Use a `surface_container_highest` background with a `full` roundedness scale. The focus state is signaled by a transition to `primary_dim` using a 2px "Ghost Border" at 40% opacity.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** embrace negative space. If a counter is the only thing on the screen, let it own the space. 
*   **Do** use `spacing-16` and `spacing-20` for massive, airy margins that feel intentional.
*   **Do** ensure the `on_error` and `on_primary` colors provide a 7:1 contrast ratio against their containers for maximum accessibility.

### Don’t:
*   **Don't** use 1px solid white borders. They create visual friction and make the app look dated.
*   **Don't** use standard "drop shadows" (Black 25% opacity). They disappear in dark mode and look muddy.
*   **Don't** cram multiple fonts. Stick strictly to the Space Grotesk/Inter pairing to maintain the high-end editorial feel.