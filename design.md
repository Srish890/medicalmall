## Overview

Medical Mall is a hospital-backed pharmacy from Reliance Foundation. The system reads as **clinical but warm** — a calm green (`{colors.green-cta}` — #16933F) anchors every primary CTA over an ivory page (`{colors.paper}` — #FAF7F2), softened by a single gold accent (`{colors.gold-300}` — #E2C896) that appears as the small horizontal rule before every section eyebrow, as the italic serif emphasis on display headlines, and as gold pill badges over product photography.

Type pairs **Clear Sans** for everything functional (display, body, buttons, eyebrows) with **Instrument Serif** italics reserved for the one or two phrases per page that need to feel emotional — "actually feel," "India's best clinicians," "right for today." Display weights stay modest: h1 at 500, never 700. The system trusts gold rules + serif italics + photography to carry visual weight.

The shape language is **uniformly soft**. Buttons are pill-shaped (`{rounded.full}` 9999px), cards land at 18–24px (`{rounded.md}` to `{rounded.lg}`), and corner-rounding is consistent across every interactive surface. There is no hard-cornered button or card anywhere in the system.

## Colors

### Brand
- **Green CTA** (`{colors.green-cta}` — #16933F): The single brand voltage. Carries every primary CTA, the active pill-tab state, gold-rule eyebrow text, View-all links, and the italic-em color. Modest in saturation — clinical, not loud.
- **Green 800** (`{colors.green-800}` — #0F6A2E): The hover/active state of `{colors.green-cta}`. Also the fill of the floating "Talk to us" button.
- **Green 900** (`{colors.green-900}` — #0E2A20): The deepest brand tone. Used for the global footer fill, the dark Support-CTA gradient (#0E2A20 → #195E30), and on-dark text.

### Gold (Accent)
- **Gold 300** (`{colors.gold-300}` — #E2C896): The signature accent. Used as the 24×1 horizontal rule before every section eyebrow, the gold pill badge background on featured cards ("Featured", "New"), and as the italic-emphasis text color over dark backgrounds. The single warm note in an otherwise green-and-ivory palette.
- **Gold 100** (`{colors.gold-100}` — #F3E8D0) and **Gold 600** (`{colors.gold-600}` — #B58A3D): For warm-themed `.pill.gold` chips.

### Surface
- **Paper** (`{colors.paper}` — #FAF7F2): The default page floor. A warm ivory — never pure white. Most pages alternate sections between paper and white.
- **Paper-2** (`{colors.paper-2}` — #F4EFE6): Slightly heavier ivory — used as `{component.card-paper}` background, specialist card fill, and the cream gradient stop inside product cards.
- **Paper-3** (`{colors.paper-3}` — #ECE6D8): The deepest cream tone — used in placeholder gradients and the bottom of the radial product-card backdrop.
- **White** (`{colors.white}` — #FFFFFF): The contrast surface for elevated cards (`{component.card-default}`), pill tabs, and the active-tab background.

### Text
- **Ink 900** (`{colors.ink-900}` — #14201B): The default text color. Used for display headlines, body paragraphs, primary CTA text on light surfaces. Never pure black.
- **Ink 700** (`{colors.ink-700}` — #2A3833): A secondary running-text color used on icon-button labels and `{component.button-secondary}` text.
- **Ink 500** (`{colors.ink-500}` — #4F5C56): Body-copy muted state. Used for lead paragraphs, descriptions, and inactive pill tab labels.
- **Ink 400** (`{colors.ink-400}` — #6E7A74): The lightest readable text — used for caption attribution lines and meta micro-text.

### Editorial Accent
- **Rose 500** (`{colors.rose-500}` — #B5685E): A muted terracotta reserved for oncology-empathy moments. Used very sparingly — never on CTAs.

## Typography

### Font Family
**Primary (sans):** `Clear Sans` with fallbacks to `Geist`, `Inter`, `-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `sans-serif`.
**Secondary (serif italic):** `Instrument Serif` with fallbacks to `Newsreader`, `Georgia`, `serif`. The serif is **only** used for italic emphasis inside otherwise-sans headlines (`{typography.italic-em}`) and for testimonial blockquotes (`{typography.blockquote}`). Never for body or running text.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 68px | 500 | 1.05 | -0.025em | Hero h1 ("Care that holds you, at every step") |
| `{typography.display-lg}` | 48px | 500 | 1.10 | -0.025em | Major section h2 ("The best care, by India's best clinicians") |
| `{typography.display-md}` | 36px | 500 | 1.15 | -0.022em | Internal-page section h2 ("Find what feels right for today") |
| `{typography.display-sm}` | 28px | 500 | 1.20 | -0.018em | Sub-section h3 ("Doctors' recommendations") |
| `{typography.italic-em}` | inherit | 400 | inherit | -0.005em | Italic phrase in serif within a headline ("actually feel") |
| `{typography.blockquote}` | 23px | 400 italic | 1.42 | -0.01em | Testimonial quote in `{component.card-testimonial}` |
| `{typography.title-md}` | 19px | 500 | 1.25 | -0.015em | Card titles inside `{component.card-paper}` ("NABH-accredited rigour") |
| `{typography.title-sm}` | 17px | 500 | 1.30 | -0.01em | Specialist names below cards ("Dr. Priya Ramanathan, MD") |
| `{typography.body-lg}` | 17px | 400 | 1.60 | 0 | Lead paragraphs under section headings |
| `{typography.body-md}` | 15px | 400 | 1.60 | 0 | Default running-text inside cards |
| `{typography.body-sm}` | 14px | 400 | 1.50 | 0 | Card meta lines, caption descriptions, bio text |
| `{typography.caption}` | 13px | 500 | 1.40 | 0 | Specialty tags, micro-labels |
| `{typography.eyebrow}` | 13.5px | 600 | 1.20 | 0.10em (uppercase) | Section eyebrow above h2 ("OUR SPECIALISTS") |
| `{typography.badge}` | 11.5px | 600 | 1.20 | 0.02em | Gold pill badge text ("Featured", "New") |
| `{typography.button-md}` | 14px | 500 | 1.20 | 0.01em | Default button label |
| `{typography.button-sm}` | 13px | 600 | 1.20 | 0.01em | Quick-view pill button label |
| `{typography.link}` | 16px | 500 | 1.40 | 0 | Inline "View all →" links in green-700 |

### Principles
Display headlines stay at weight 500 — never 700. Visual weight comes from the gold rule + italic serif phrase combination, not from typographic mass. The single typographic moment of warmth in any section is the italic-em phrase set in Instrument Serif — it should appear at most once per headline and never twice in adjacent sections.

Eyebrows always get the 24×1 gold rule prefix on hero/major sections; internal-page sections may drop the eyebrow entirely (only the h2 remains) to keep the rhythm quieter.

## Border Radius

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Never used on interactive elements; only on full-bleed images that span edge-to-edge |
| `{rounded.xs}` | 6px | Micro-pills inside data displays (kbd-style chips) |
| `{rounded.sm}` | 10px | Form inputs, dense table cells |
| `{rounded.md}` | 18px | Default card radius (`{component.card-default}`, `{component.card-testimonial}`, `{component.card-specialist}`) |
| `{rounded.lg}` | 24px | Heavier editorial cards (`{component.card-paper}`, `{component.card-product}`) and the seasonal-offer banners |
| `{rounded.xl}` | 28px | The footer card (`#0E2A20` fill with 28px radius and a 24px outer margin) |
| `{rounded.full}` | 9999px | **Every button**, pill tab, badge, icon-button, and avatar in the system |

The defining shape rule: **buttons are always pill-shaped.** No 8px / 10px button radius anywhere — `{rounded.full}` is the single button-radius token across the entire system.

## Spacing

Base unit: **4px**. Tokens climb on a near-doubling scale.

| Token | Value | Use |
|---|---|---|
| `{spacing.xxs}` | 4px | Micro gaps between badge text and icon |
| `{spacing.xs}` | 8px | Pill tab gap, small card internal gutter |
| `{spacing.sm}` | 12px | Default icon + label gap inside buttons |
| `{spacing.md}` | 16px | Card title → body gap, default card-grid gutter |
| `{spacing.base}` | 20px | Section content row gap, default product-card grid gap |
| `{spacing.lg}` | 32px | `{component.card-paper}` internal padding-x; section-header bottom margin (medium sections) |
| `{spacing.xl}` | 48px | Major editorial header bottom margin (large sections, marginBottom 56) |
| `{spacing.xxl}` | 64px | Reserved for full-bleed banner internal padding |
| `{spacing.section}` | 96px | Standard section vertical padding (`padding: 96px 0 100px`) |

### Section Padding
Major page bands run `{spacing.section}` (96px) top and ~100px bottom. Internal sections (under hero) keep this rhythm. Tighter sub-sections (e.g., the seasonal-offer tile strip) drop to flush 0 padding because they sit immediately above another section that already has top padding.

### Shell Container
Max content width: **1280px** centered, with **32px** horizontal padding (`.shell { max-width: 1280px; margin: 0 auto; padding: 0 32px; }`).

## Shadows

The system caps elevation at **three tiers** plus the flat baseline.

| Token | Value | Use |
|---|---|---|
| `{shadows.none}` | flat | 90% of surfaces — body, hero, full-bleed banners, footer |
| `{shadows.sm}` | `0 1px 2px rgba(20,32,27,.06), 0 1px 1px rgba(20,32,27,.04)` | Default `{component.card-default}` rest state |
| `{shadows.md}` | `0 6px 18px -8px rgba(20,32,27,.18), 0 2px 4px rgba(20,32,27,.05)` | Card hover state, dropdown menus |
| `{shadows.lg}` | `0 24px 48px -20px rgba(20,32,27,.22), 0 4px 10px rgba(20,32,27,.06)` | Modal dialogs, the floating chat button |
| `{shadows.hover-card}` | `0 16px 40px -12px rgba(20,32,27,.18)` | Middle-stack cards in the "Products that carry you" section, on hover |
| `{shadows.hover-lift}` | `0 24px 48px -16px rgba(20,32,27,.18), 0 4px 12px -4px rgba(20,32,27,.08)` | Doctor's recommendation product cards on hover (paired with `translateY(-4px)`) |

All shadows are tinted with the ink-900 hue (`rgba(20,32,27,...)`) — never pure black — so the elevation feels warm rather than clinical-grey.

## Buttons

**All button radii are `{rounded.full}` (pill-shaped).** This is the single most distinctive shape rule in the system.

### `{component.button-primary}`
Green-CTA fill, white text, 12×20px padding, pill radius, height 44. The default CTA: "Shop oncology essentials", "Book a free consult", "Search". Hover lifts 1px and darkens to `{colors.green-800}`. Press scales to `0.97`.

### `{component.button-primary-lg}`
Same as primary but at 14×26px / 15px label / 48px height. Used on hero CTAs.

### `{component.button-secondary}`
White fill, ink-700 text, 1px neutral hairline (`rgba(20,32,27,.10)`), pill radius. Hover swaps to a subtle green tint (background `rgba(37,141,72,.06)`, border `rgba(37,141,72,.30)`, text `{colors.green-700}`). Press scales to `0.97`. Used on secondary actions like "Talk to a care specialist" or arrow controls in horizontal rails.

### `{component.button-ghost}`
Transparent fill, ink-900 text, 1px outline at `rgba(20,32,27,.18)`, pill radius. Hover adds a subtle dark tint (`rgba(20,32,27,.04)`). Used for tertiary actions on light pages.

### `{component.button-inverse}`
Solid white fill, ink-900 text, pill radius, no border. Hover darkens slightly to `#E8E8E8`. Class: `.btn .btn-inverse`. The white inverse CTA for **dark / image-backed surfaces** — the hero, *Find the right care*, and the reassurance banner. Use this (not `{component.button-secondary}`) on dark backgrounds: `button-secondary`'s green-tint hover is built for light surfaces and reads wrong on dark.

### `{component.button-icon-circle}`
Circular 44×44 button used for horizontal-rail arrows, header utilities. White fill, neutral border, secondary green-tint hover.

### `{component.button-quick-view}`
A frosted white pill that slides up from the bottom of product cards on hover (`transform: translateY(110%)` → `translateY(0)`, 260ms cubic-bezier). 11×18px padding, 13px / 600 label, backdrop-blur 8px. On hover the frosted fill (`rgba(255,255,255,.92)`) goes solid white. Class: `.btn .btn-quick-view` (add `.btn-sm` for the compact variant on smaller tiles). Used for the "Quick view" affordance on Doctor's Recommendation cards and the "Shop Now" pill on the *Products that carry you* bento tiles.

### Press Feedback
Every interactive button gets `transform: scale(0.97)` on `:active` with a 160ms ease-out transition. This is the system's standard tactile-feedback signature.

## Search & Badges

Two reusable hero-context components live in `components.jsx` and are exposed globally:

### `<TrustPill>` — frosted accreditation badge
Used over dark / image-backed surfaces to signal credentials (NABH, ISO, etc.). Renders as a glass-morphism pill (`rgba(255,255,255,.10)` background, `.18` border, 8px backdrop-blur) with an optional Lucide icon and uppercase mono label. Class: `.badge-glass`.

```jsx
<TrustPill icon="shield">Hospital-backed · NABH accredited</TrustPill>
```

- **`icon`** — Lucide name (default `"shield"`); pass `null` to omit.
- **`iconColor`** — defaults to mint-green (`rgba(110,230,160,1)`).
- **`children`** — the label (will render in 11px / .08em / uppercase mono).

### `<SearchBar>` — hero search pill
The primary entry point on the homepage hero. Renders a rounded white pill (`.search-bar`) with a search icon, input, and a Search button. Grows a green focus ring on `:focus-within` (4px `rgba(14,92,49,.28)` glow).

```jsx
<SearchBar
  placeholder="Search medicines, wigs, devices…"
  buttonLabel="Search"
  onSubmit={(value) => console.log(value)}
/>
```

- **`placeholder`** — input placeholder text.
- **`buttonLabel`** — submit button label (default `"Search"`).
- **`onSubmit(value)`** — fires on Enter or button click.

The trust-caption row sometimes shown beneath the hero search bar is **not** part of this component — build it inline from spacing and colour tokens at the call site.

## Cards

The system uses **four card archetypes**, each with a distinct surface treatment.

### `{component.card-default}`
Standard white card. `{rounded.md}` (18px), 1px subtle border, `{shadows.sm}` at rest, lifts on hover. The base for any generic content tile (e.g., the homepage "Trust & Care" cards once a hover state attaches).

### `{component.card-paper}`
Editorial cream card. `{rounded.lg}` (24px), `{colors.paper-2}` fill, 1px border, **no shadow**. Internal padding 32×28px. Used for the four-card "Why us" grid where each card is numbered (01–04), holds an icon at top, title, description, and a 24×1 gold rule at bottom.

### `{component.card-product}` — the `<ProductCard>` component
The signature product card. Implemented as **one shared React component, `<ProductCard>`**, in [components.jsx](components.jsx) and used in *every* product grid — Home V2 and Oncology V2 recommendations, and the PLP. Edit it once, every grid updates. 24px radius (`.card-product`), white shell with a warm cream gradient on the image area (`.card-product-bg`), min-height 460px. On hover: lifts 4px with `{shadows.hover-lift}`, an optional lifestyle photo fades in, and the `{component.button-quick-view}` pill slides up from below.

Info-strip order: brand → title (with `length` appended) → star rating → spec line → price row. Props — `image`, `title`, `price` (a formatted string) are required; optional: `length` (e.g. `'16"'` — appended to the title heading on hair cards), `hoverImage`, `oldPrice`, `off` (discount percent — renders an `X% OFF` label beside the struck price), `badge`, `brand`, `meta` (spec line), `rating` + `reviews` (gold star row, sits directly under the title), `outOfStock`, `onClick`, `onQuickView`. All optional fields render only when supplied — the same component serves the minimal recommendations card and the fuller PLP / Wigs card.

```jsx
<ProductCard image={p.img} title={p.title} length='16"' price="₹4,800"
  oldPrice="₹6,200" off={23} badge="Featured" brand="Adira"
  meta="wavy · hand tied" rating={4.8} reviews={124}
  onClick={() => navigate("pdp")} />
```

### `{component.card-testimonial}`
Cream blockquote card. `{rounded.md}` (18px), `{colors.paper}` fill, 1px subtle border. 40×32×36px padding. Holds a 72px serif quotation glyph at top (in green-700 at 35% opacity), the italic Instrument-Serif blockquote in the center, then a 28×1 gold rule above the attribution block (author + role).

### `{component.card-specialist}`
Cream specialist card. Fixed 260px height. `{rounded.md}` (18px), `{colors.paper-2}` fill. Internally a 2-column grid (44% / 1fr) — left column holds a doctor cutout pinned bottom-left with `objectFit: contain`; right column holds the role title, then a stack of specialty tags, each prefixed by a 3×16 gold vertical bar (`{colors.gold-300}`). No padding on the image column so the cutout bleeds to the bottom and left edges. Caption (name + 2-line bio) sits below the card, never inside.

### Card Hover Pattern
All interactive cards share the same hover treatment:
- `transform: translateY(-2px)` to `translateY(-4px)` (subtler for thumbnails, stronger for primary product cards)
- Shadow upgrades from `{shadows.sm}` or none → `{shadows.hover-card}` or `{shadows.hover-lift}`
- Transition: `transform 220ms cubic-bezier(0.23,1,0.32,1), box-shadow 220ms ease`
- Inner image (when present): scales from `1.04` → `1.08` over 520ms cubic-bezier for a slow editorial zoom

The combined effect — subtle lift, warm shadow, gentle image zoom — should feel "alive but never bouncy." If the hover starts to feel toy-like, scale back the translate and shorten the duration.

## Icons

**Always use [Lucide](https://github.com/lucide-icons/lucide) for every icon. Never hand-draw `<svg>` paths and never add a second icon library.** Lucide is wired in via the `<Icon name="..."/>` component in [components.jsx](components.jsx) and the UMD script in [index.html](index.html).

```jsx
<Icon name="heart" size={16} color="var(--green-700)" stroke={1.6} />
```

- **`name`** — a project alias defined in `LUCIDE_ALIAS` (e.g. `"chat"`, `"cart"`), or any [Lucide name in PascalCase](https://lucide.dev/icons) (e.g. `"Sparkles"`, `"ShieldCheck"`). Unmapped names fall through to Lucide directly, so new icons need zero code changes.
- **`size`** — pixel value, defaults to 20.
- **`color`** — any CSS colour or token; defaults to `currentColor`.
- **`stroke`** — stroke width, defaults to 1.6.

If Lucide genuinely lacks an icon, propose adding it as a single SVG file in `images/` used via `<img>` — never mix icon systems, icon fonts, or other icon packages.

## Working rules — READ BEFORE BUILDING ANYTHING

> **GOLDEN RULE — VERY IMPORTANT. Always create designs using components and tokens from this file only.** No inline magic numbers, no ad-hoc Tailwind values, no hand-rolled CSS when a token or class already covers the case. **Before you tell the user a task is done, stop and re-check your own work:** go element by element and ask yourself *"did this come from a design.md component or token?"* If you cannot point to the design.md source for something you wrote, it is **not done** — fix it first, then report. Only after this self-recheck passes do you tell the user you are done.

These rules apply whenever you build a new page, a variant of an existing page, or port a section across pages.

1. **Build every section — confirm the list with the user first.** When recreating or remixing a page, every section from the source must be present in the target, in the same order unless the request reorders them. Before building, list the sections you are about to create **in plain human language** and ask the user to confirm that list. Never silently drop a section; if one is intentionally omitted, call it out.

2. **Build only from design.md components.** Eyebrows use `.eyebrow` + `.gold-rule`; headlines use `.h-display-*`; buttons use the `.btn .btn-*` family; cards use `.card-*`; tabs use `.pill-tab`. If you find yourself writing the same inline `style={{ … }}` block twice, it is already a class — find it or raise it.

3. **Ask the user before creating any new component.** If a section needs a treatment no existing class covers, stop and ask the user — in plain language — whether to create a new component. Propose its name, where it lives (`components.jsx` for shared, inline for page-local), and its props. Wait for confirmation, then document it here.

4. **Prefer variants over new components.** Before creating anything new, check whether it can instead be a *variant* of an existing component (a new size, colour, or surface treatment). Use the **emil-design-eng** design skill to judge whether two treatments are genuinely different components or one component with variants. Only build new when nothing existing can be varied to fit.

5. **Storybook on request.** When the user asks to "see the storybook", build or refresh the dedicated `storybook` page that visibly catalogues every token and component as live, rendered examples.

6. **Always use Lucide for icons.** See the [Icons](#icons) section.

7. **Verify before declaring done.** After any non-trivial change, parse-check the touched JSX files and headless-load the page to confirm React mounts with a clean console — then run the Golden Rule self-recheck above before telling the user it is done.

8. **Storybook removals are global.** The storybook is the live catalogue of the system — not a separate sandbox. If the user asks to remove a component, badge, card, token, or variant **from the storybook**, that element is being retired from the whole system: delete it from `styles.css` / `components.jsx` and remove or replace **every usage across every page**, permanently. Never leave a removal as a storybook-only deletion. The one exception: if the thing being removed is still load-bearing elsewhere (e.g. a CSS class a live component depends on), flag that conflict to the user before deleting, and propose what its usages should switch to.

9. **Global components are single-source — every change propagates to all pages.** A global component lives in exactly one place: `components.jsx` (`Header`, `Footer`, `ProductCard`, `TrustPill`, `SearchBar`, `Icon`, …). Because every page renders that one definition, **any deletion, update, or addition to a global component automatically applies to every page that uses it** — that is the entire point of a shared component. Whenever you delete, edit, or extend a global component:
   - Make the change **once**, in the component's definition in `components.jsx` — never copy or re-implement its markup inside a page.
   - **Grep every page** for the component's usages so you know exactly where it lands.
   - If the change adds, removes, or renames a prop, update **every call site** on every page that uses it, in the same change.
   - Verify the change rendered correctly on each affected page before declaring done.
   - If a page still hand-builds its own copy of something that should be this component, replace that copy with the shared component so future changes propagate too.
   This applies in both directions: a storybook edit propagates to the pages, and a page-level request to change a global component propagates to the storybook and every other page.

## Design Tokens (machine-readable reference)

The raw token values behind this system — colours, typography, radii, spacing, shadows, and component specs. The documentation above is the source of truth for *intent*; this block is the source of truth for *values*.

```yaml
version: alpha
name: Medical-Mall-design-system
description: A warm, hospital-backed pharmacy aesthetic anchored on ivory paper (#FAF7F2) and a calm clinical green (#16933F), softened by a single gold accent (#E2C896) for editorial moments. Type pairs Clear Sans for everything functional with Instrument Serif italics reserved for the one or two phrases per page that carry emotion. Buttons are uniformly pill-shaped (full radius), cards are softly rounded (18px), and elevation stays restrained — most surfaces are flat ivory with one shadow tier on hover. The system trusts photography, generous whitespace, and italic serif emphasis to do the heavy lifting rather than typographic muscle.

colors:
  green-cta: "#16933F"
  green-900: "#0E2A20"
  green-800: "#0F6A2E"
  green-700: "#16933F"
  green-500: "#2F7A56"
  green-300: "#9DC2B0"
  green-100: "#DDE9E1"
  green-50:  "#F1F6F2"
  gold-600: "#B58A3D"
  gold-500: "#C99D52"
  gold-300: "#E2C896"
  gold-100: "#F3E8D0"
  ink-900: "#14201B"
  ink-700: "#2A3833"
  ink-500: "#4F5C56"
  ink-400: "#6E7A74"
  ink-300: "#97A19B"
  paper:   "#FAF7F2"
  paper-2: "#F4EFE6"
  paper-3: "#ECE6D8"
  white:   "#FFFFFF"
  rose-500: "#B5685E"
  rose-100: "#F3E2DC"
  on-primary: "#FFFFFF"
  on-dark:    "#FFFFFF"
  scrim:      "#0E2A20"

typography:
  display-xl:
    fontFamily: "'Clear Sans', 'Geist', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 68px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.025em
  display-lg:
    fontFamily: "'Clear Sans', 'Geist', 'Inter', sans-serif"
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.025em
  display-md:
    fontFamily: "'Clear Sans', 'Geist', 'Inter', sans-serif"
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.022em
  display-sm:
    fontFamily: "'Clear Sans', 'Geist', 'Inter', sans-serif"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.018em
  italic-em:
    fontFamily: "'Instrument Serif', 'Newsreader', Georgia, serif"
    fontStyle: italic
    fontWeight: 400
    color: "{colors.green-700}"
    letterSpacing: -0.005em
  blockquote:
    fontFamily: "'Instrument Serif', 'Newsreader', Georgia, serif"
    fontSize: 23px
    fontWeight: 400
    fontStyle: italic
    lineHeight: 1.42
    letterSpacing: -0.01em
  title-md:
    fontFamily: "'Clear Sans', 'Geist', 'Inter', sans-serif"
    fontSize: 19px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.015em
  title-sm:
    fontFamily: "'Clear Sans', 'Geist', 'Inter', sans-serif"
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: -0.01em
  body-lg:
    fontFamily: "'Clear Sans', 'Geist', 'Inter', sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-md:
    fontFamily: "'Clear Sans', 'Geist', 'Inter', sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "'Clear Sans', 'Geist', 'Inter', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "'Clear Sans', 'Geist', 'Inter', sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  eyebrow:
    fontFamily: "'Clear Sans', 'Geist', 'Inter', sans-serif"
    fontSize: 13.5px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.10em
    textTransform: uppercase
    color: "{colors.green-700}"
  badge:
    fontFamily: "'Clear Sans', 'Geist', 'Inter', sans-serif"
    fontSize: 11.5px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.02em
  button-md:
    fontFamily: "'Clear Sans', 'Geist', 'Inter', sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.01em
  button-sm:
    fontFamily: "'Clear Sans', 'Geist', 'Inter', sans-serif"
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.01em
  link:
    fontFamily: "'Clear Sans', 'Geist', 'Inter', sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
    color: "{colors.green-700}"

rounded:
  none: 0px
  xs:   6px
  sm:   10px
  md:   18px
  lg:   24px
  xl:   28px
  full: 9999px

spacing:
  xxs:     4px
  xs:      8px
  sm:      12px
  md:      16px
  base:    20px
  lg:      32px
  xl:      48px
  xxl:     64px
  section: 96px

shadows:
  none:  "none"
  sm:    "0 1px 2px rgba(20,32,27,.06), 0 1px 1px rgba(20,32,27,.04)"
  md:    "0 6px 18px -8px rgba(20,32,27,.18), 0 2px 4px rgba(20,32,27,.05)"
  lg:    "0 24px 48px -20px rgba(20,32,27,.22), 0 4px 10px rgba(20,32,27,.06)"
  hover-card: "0 16px 40px -12px rgba(20,32,27,.18)"
  hover-lift: "0 24px 48px -16px rgba(20,32,27,.18), 0 4px 12px -4px rgba(20,32,27,.08)"
  inset-press: "inset 0 0 0 1px rgba(20,32,27,.08)"

components:
  button-primary:
    backgroundColor: "{colors.green-cta}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 12px 20px
    height: 44px
    hoverBackground: "{colors.green-800}"
    hoverTransform: "translateY(-1px)"
    activeTransform: "scale(0.97)"
  button-primary-lg:
    backgroundColor: "{colors.green-cta}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 14px 26px
    height: 48px
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-700}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 12px 20px
    border: "1px solid rgba(20,32,27,.10)"
    hoverBackground: "rgba(37,141,72,.06)"
    hoverBorderColor: "rgba(37,141,72,.30)"
    hoverTextColor: "{colors.green-700}"
    activeTransform: "scale(0.97)"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-900}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 12px 20px
    border: "1px solid rgba(20,32,27,.18)"
    hoverBackground: "rgba(20,32,27,.04)"
  button-inverse:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-900}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 12px 20px
    hoverBackground: "#E8E8E8"
  button-icon-circle:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-700}"
    rounded: "{rounded.full}"
    height: 44px
    width: 44px
    border: "1px solid rgba(20,32,27,.10)"
    hoverBackground: "rgba(37,141,72,.06)"
    hoverBorderColor: "rgba(37,141,72,.30)"
    hoverTextColor: "{colors.green-700}"
    activeTransform: "scale(0.97)"
  button-quick-view:
    backgroundColor: "rgba(255,255,255,.92)"
    backdropFilter: "blur(8px)"
    textColor: "{colors.ink-900}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
    padding: 11px 18px
    border: "1px solid rgba(20,32,27,.12)"
    hoverBackground: "{colors.white}"
  card-default:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-900}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    border: "1px solid rgba(20,32,27,.06)"
    shadow: "{shadows.sm}"
    hoverShadow: "{shadows.md}"
    hoverTransform: "translateY(-2px)"
  card-paper:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink-900}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    border: "1px solid rgba(20,32,27,.05)"
    padding: 32px 28px 28px
  card-product:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-900}"
    typography: "{typography.body-md}"
    rounded: 24px
    border: "1px solid rgba(20,32,27,.06)"
    shadow: "0 1px 2px rgba(20,32,27,.03)"
    hoverShadow: "{shadows.hover-lift}"
    hoverTransform: "translateY(-4px)"
  card-product-image:
    background: "radial-gradient(120% 90% at 35% 25%, #F6EFE2 0%, #ECDFC4 65%, #D9C9A6 100%)"
    rounded: 24px
  card-testimonial:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-900}"
    typography: "{typography.blockquote}"
    rounded: "{rounded.md}"
    border: "1px solid rgba(20,32,27,.07)"
    padding: 40px 32px 36px
  card-specialist:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink-900}"
    typography: "{typography.title-sm}"
    rounded: "{rounded.md}"
    border: "1px solid rgba(20,32,27,.05)"
    height: 260px
  badge-pill-warm:
    backgroundColor: "{colors.gold-300}"
    textColor: "{colors.green-900}"
    typography: "{typography.badge}"
    rounded: "{rounded.full}"
    padding: 6px 13px
  pill-tab-active:
    backgroundColor: "{colors.white}"
    textColor: "{colors.green-800}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 9px 20px
    border: "1px solid rgba(37,141,72,.30)"
  pill-tab-inactive:
    backgroundColor: "transparent"
    textColor: "{colors.ink-500}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: 9px 20px
    border: "1px solid rgba(20,32,27,.10)"
```
