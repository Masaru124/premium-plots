# Setty Relators — design system

Direction: **Bengaluru Estate Sovereign**. Deep royal sapphire is the canvas, imperial forest green
is the biophilic slab, champagne gold is the only accent and never fills a large surface. Type is
alabaster on sapphire, set in Playfair Display over Plus Jakarta Sans. Surfaces are matte; separation
comes from tone and a 1px gold hairline, never from a drop shadow.

The editorial idea is unchanged from the tasteskill draw (`place-carries-it`, seed 1950092125): the
photograph is the argument, and the desk's own listing line — corridor, project, quoted price — sits
beneath it like a wall label. Choosing a corridor changes both photograph and line.

## Palette

| Token | Value | Role |
| --- | --- | --- |
| `--ink` | `#0B192C` | base canvas, structural ground |
| `--ink-deep` | `#070F1B` | recessed gallery band, scrim, footer/hero ground |
| `--ink-soft` | `#11233D` | elevated container, cards, inputs |
| `--blue` | `#1B3A5C` | raised royal blue: panel hover, inked button hover |
| `--blue-deep` | `#14294A` | the blue chapter band (`.section-blue`) |
| `--forest` | `#133324` | biophilic slab for a chapter set apart |
| `--forest-deep` | `#0E2619` | forest hover |
| `--green` | `#2F6B4E` | verified / available marks |
| `--sheet` | `#FBFBFD` | the register printed on alabaster (`.sheet`) |
| `--sheet-soft` | `#4A5666` | secondary copy on the sheet (7.4:1) |
| `--sheet-tint` | `#F1F3F7` | alternating register row on the sheet |
| `--gold-on-light` | `#8A6A12` | gold as type on alabaster (4.9:1) |
| `--gold` | `#D4AF37` | the one accent: action, price, hairline |
| `--gold-light` | `#E9C349` | gold on forest |
| `--gold-pale` | `#FFE088` | focus and hover on dark |
| `--gold-deep` | `#A8871F` | gold press |
| `--white` | `#FBFBFD` | display and body type, primary button field |
| `--text-soft` | `#B0B8C4` | secondary copy, captions, labels |
| `--text-dim` | `#8F9097` | tertiary meta, placeholders |
| `--rule` | `rgba(251,251,253,.10)` | tonal separation inside a panel |
| `--rule-strong` | `rgba(212,175,55,.22)` | gold hairline between surfaces |

Rules: gold is never a large solid fill. Gold hairlines frame cards. Contrast checked — alabaster on
sapphire 15:1, soft grey 7:1, gold on sapphire 6.6:1 (body size only).

## Typography

| Class | Face | Size | Use |
| --- | --- | --- | --- |
| `.display-xl` | Playfair Display 500 | clamp 40 → 80px, lh 1 | page headline, one per page |
| `.display-lg` | Playfair Display 500 | clamp 32 → 52px, lh 1.06 | section headline |
| `.display-md` | Playfair Display 500 | clamp 25.6 → 36px | sub-headline, panel title |
| `.lede` | Plus Jakarta Sans | clamp 17 → 20px | standfirst |
| body | Plus Jakarta Sans | 17px / 1.65 | running text, forms |
| `.label` | Plus Jakarta Sans | 14px | caption above a figure or field |
| `.label-caps` | Plus Jakarta Sans | 13px, 0.1em, uppercase | catalogue specimen label only |

Muted copy is `--text-soft`; never set running text below 15px.

## Layout

`.shell` is 1320px with 20px gutters on mobile, 40px from 768px. `.page-section` is 88 / 120 / 144px
block padding. Twelve columns, content usually 7/5 or 8/4. Text measures cap at 62ch.

## Surfaces

- **Canvas** `--ink`. Most of the site.
- **Elevated** `--ink-soft`, used for cards and the sticky desk panel.
- **Recessed** `--ink-deep`, used for the hero title band, the showcase and scrims over photographs.
- **Blue band** `--blue-deep` (`.section-blue`) for the developer proof chapter.
- **Forest slab** `--forest` for a chapter that should read as a different room (`.section-navy`).
- **The sheet** `--sheet`: one white field on the page, the register itself, set in sapphire ink with
  `--gold-on-light` prices and `--sheet-tint` alternating rows. A hero photograph carries the first
  screen; the title band beneath it sits on solid ink so no type ever fights a picture.
- **Fields** sit on `--ink` with a 1px alabaster hairline at 16% and a gold focus, never on the same
  tone as their panel.
- **Plates** are photographs with no border radius bleed; captions use `.plate-line` (15px, price in
  Playfair gold).

## Buttons

| Class | Look | Use |
| --- | --- | --- |
| `.btn-gold` | alabaster field, sapphire type, 4px radius | the one action on a screen |
| `.btn-primary` | transparent, 1px gold border, gold type | luxury secondary |
| `.btn-quiet` | transparent, 1px alabaster hairline | tertiary and on-ink controls |

Minimum height 48px, no shadows, hover changes colour only.

## Motion

One authored entrance per page: `.hero-settle` on the hero, and `.js-reveal [data-reveal]` for
sections as they arrive (the class is only added when motion is allowed, so content is never hidden
without script). `.hero-plate` drifts a hero photograph from 1.06 to 1 once. Reduced motion turns all
of it off.

## Components

- **Plate line** — corridor/project on the left, quoted price in Playfair gold on the right.
- **Register row** — photograph, project, location, prose, specs, price and actions in one ruled row.
- **Desk panel** — sticky elevated panel beside a listing: specs as a label/value list and two actions.
- **Masterplan grid** — units as square tiles on raised sapphire, selected unit gold, sold struck out.
- **Data tables** — real tables only, gold header rule, generous cell padding, `data-ui` so the
  hairline audit treats them as interface rather than decoration.

## Accessibility

Focus is a 2px gold outline with 3px offset, pale gold on forest. Every photograph carries a caption
that says what it is or states that it is representative. Interactive rows keep 44px targets. Paid or
seller-quoted figures are labelled as such wherever they appear.
