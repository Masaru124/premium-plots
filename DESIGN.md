# Setty Relators — design system

Direction: **the place carries it** (tasteskill draw, seed 1950092125, sector real-estate, tone luxury,
`--keep palette,type`). The photograph is the argument; type sets the listing the way a wall label sets
a work. The name is small where it identifies and large where it titles.

## The idea

On this page, **the desk's own listing line — corridor, project, quoted price — becomes the caption
beneath a full-bleed photograph**, and choosing a corridor changes both the photograph and the line.

Competitor test: a rival broker could not use the same sentence with its own content, because the
corridors (Nandi Hills, Jiganki edge, Bannerghatta) and seller-quoted prices are this desk's own
inventory.

Live thing: the corridor selector in the hero. It uses the real corridor list and real project rows,
works with a thumb, and renders the default project without JavaScript.

## Palette (brand values, unchanged)

| Token | Value | Role |
| --- | --- | --- |
| `--ink` | `#0B1F3A` | structural ground, headings, primary button |
| `--ink-deep` | `#071527` | scrim over photographs, footer |
| `--ink-soft` | `#142E54` | hover, secondary panels |
| `--gold` | `#C8A34D` | the one accent: primary action, wordmark mark |
| `--gold-light` | `#DFC06E` | gold on ink |
| `--gold-ink` | `#7A5C10` | gold as text on paper (5.7:1) |
| `--paper` | `#F8F8F5` | page ground, plates |
| `--stone` | `#EFEEE8` | section tone step, form fields |
| `--text` | `#1A1A1A` | running text |
| `--text-soft` | `#4C4C4C` | secondary text |

One ground, one ink, one accent. Colour lives in the photographs; gold appears on the action and one
other thing per screen. Surfaces separate by a tone step, not a line or a shadow.

## Type

- Display: Playfair Display (`--font-display`), 400, tracking −0.02 to −0.025em, leading 0.98–1.1.
- Text: Poppins (`--font-body`), 400/500.
- Five steps in use, and only these: **80 / 52 / 24 / 19 / 17 / 14** (display, section, plate heading,
  lead, body, small). Body never below 17px; labels never below 13px. No uppercase or letter-spaced
  micro-labels.
- Measures cap at 52–62ch. Headlines stay inside two lines at every width.

## Space and frame

- One shell: `max-width: 1320px`, equal gutters 20px (mobile) / 40px (desktop).
- Sections: 88 / 120 / 144px block padding.
- No hairlines, no outlined boxes, no shadows at rest. A table or a form field may keep its own lines.
- Photographs are square-cornered and full-bleed where the composition allows.

## Components

- **Button**: 48px minimum, 2px radius, one flat fill. Gold (primary), ink (primary alternate), toned
  paper (secondary). Sentence case, 14px, no tracking.
- **Plate**: photograph + `.plate-line` caption (project, corridor, price right-aligned, tabular figures).
- **Register sheet**: a paper panel on a stone field, groups by category, prices right-aligned, no rules.
- **Memo**: the desk's worked arithmetic — one named plot, one rate, one caveat, one action.
- **Proof card**: developer names set as a printed list on a slightly rotated paper card, clipped by the
  section edge.
- **FAQ**: native `<details>`/`<summary>`, 44px targets, no dividers.
- **Contact**: an opaque paper card on a full-bleed photograph.

## Motion

- Signature move: the hero plate drifts from 1.06 to 1 over 26s, as light settling.
- Section entrances: headings, plates and cards rise 18px and fade, staggered 70ms per sibling, once.
  Gated behind `.js-reveal`; without script nothing is hidden.
- Every control has hover, focus-visible, active and disabled states.
- `prefers-reduced-motion` removes travel and keeps state feedback.

## Accessibility

- Focus ring: 2px `--gold-deep` on paper, `--gold-light` on ink, 3px offset.
- Every control is a real button or link with a visible name; icon-only controls carry `aria-label`.
- Toggles use `aria-pressed`; the dialog traps focus, locks scroll and returns focus to its trigger.
- Text contrast: body `#1A1A1A` on `#F8F8F5` (15.9:1), soft `#4C4C4C` (7.4:1), gold text on paper
  `#7A5C10` (5.7:1), white at ≥70% on ink (≥7:1).
