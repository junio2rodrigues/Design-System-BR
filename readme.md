# Petrobras Apresentações — Design System

Design system for corporate presentations built to the two source files supplied by
**SHEYLLA APRESENTAÇÕES PETROBRAS/CAPCO**. Everything here is transcribed from those
files; nothing is invented.

## Sources given

| Source | How it was read |
| --- | --- |
| `uploads/Modelos para apresentação BR.pdf` (85 pages) — official "Modelo personalizável para apresentações corporativas", by Comunicação e Marcas | Text extracted (`research/modelos-br-text.md`), pages rendered for visual reference (`research/shots/set1–4.png`), embedded brand images extracted (`research/pdfimg/`) |
| `uploads/Pictogramas Petrobras (1).pptx` (55 slides) — "Banco de Pictogramas", DTDI | Unzipped; text extracted (`research/pictogramas-text.md`), raster pictograms extracted (`research/media/`) |
| Local folder `DESIGNSYSTEM/` | Contains only the same two decks plus the PDF. `Modelos para apresentação BR.pptx` exceeds the 30 MiB import limit, so the **PDF is the working source of truth** for that template. |

There is no product codebase and no Figma file: this system is a **presentation
system**, not an app UI system. Its "products" are the corporate deck template and the
pictogram bank.

## Brand palette (from p.83, "Cores Petrobras")

Principais — Verde Petrobras `#008542` (R0 G133 B66), Amarelo Petrobras `#FDC82F` (R253 G200 B47).
Apoio — Verde água `#00B2A9`, Verde claro `#C4D600`, Amarelo claro `#EBFF00`,
Laranja `#ED8B00`, Cinza `#75787B`, Azul escuro `#006298`, Azul claro `#3DDAFF`.

Rules stated in the deck:
- **White is the base of every piece**, always preferred.
- Allowed combinations: *1 cor principal + 1 cor de apoio*, or *2 cores principais + 1 cor de apoio*.
- Bold highlights may use any palette colour **except yellow** and except colours
  without contrast on white. Never underline; never use off-palette colours.
- p.85 gives an accessibility note: choose palette combinations legible for
  colour-vision deficiency.

## Typography

- **Petrobras Sans** — titles and body (declared font of both decks).
- **Trebuchet MS, 8 pt, black** — footnotes/sources, left-aligned for short notes,
  justified for long ones (stated verbatim on p.62).
- Body text 14 pt; agenda numerals 14 pt; one blank line between topics; topics max 2 lines.
- Slide titles max 2–3 lines depending on layout; chapter titles max 2 lines.
- Titles are set light with wide letter-spacing, in Verde Petrobras, followed by a
  short yellow dash rule.

Point sizes are also resolved to px for a 1280×720 canvas (`--fs-slide-title: 36px`,
`--fs-body: 25px`, …); the source slide is 25.4 cm = 720 pt wide, so 1 pt = 1.778 px.

### Typefaces
**Petrobras Sans** is the corporate face and is applied throughout — `--font-core:
"Petrobras Sans", "Segoe UI", Tahoma, Arial, sans-serif`. It came back into the system from
the user's July/2026 revision of the SMS OPSUB guide, which is set in it. **Arial** covers
the 8 pt footnote role (`--font-notes`), matching that same file; the original template
named Trebuchet MS there.

No webfont binary was supplied, so `tokens/fonts.css` resolves Petrobras Sans with
`src: local(…)` — it renders correctly wherever the font is installed (as on the
authoring machines) and falls back gracefully elsewhere. Send the `.woff2`/`.ttf` if these
decks must render identically off-network.

## CONTENT FUNDAMENTALS

The source deck is itself written in the voice it prescribes, so its own copy is the model.

- **Language:** Brazilian Portuguese. Titles and labels carry no terminal punctuation.
- **Person:** instructions to the deck author use *você* and the imperative
  ("Utilize os tópicos", "Não sublinhe palavras", "Busque imagens com qualidade de
  resolução"). Institutional content is impersonal — third person, no "nós".
- **Casing:** sentence case everywhere. Titles are never all-caps; the wide
  letter-spacing does the emphasis work instead. Small caps / all-caps appear only in a
  few diagram labels (`MANTER SATISFEITO`, `FORÇA MOTRIZ`).
- **Length discipline is part of the brand:** slide titles ≤ 2–3 lines, topics ≤ 2 lines,
  captions exactly 1 line, chapter titles ≤ 2 lines, few topics per slide.
- **Emphasis:** bold in a palette colour. Never underline, never italic for emphasis
  (italic is reserved for the small "Título da seção" label).
- **Emoji: never.** Not one appears in either source file.
- **Placeholders in the template read as instructions**, e.g. "Espaço reservado para
  legenda (máximo 1 linha)", "Coloque aqui o título do gráfico", "Insira o título aqui".
  Keep that convention when you build new placeholder slides.
- **Vibe:** sober, technical, institutional. Objective and economical
  ("Seja o mais objetivo e sucinto possível"), never promotional or playful.
- **Numbers:** Brazilian formatting — `1.234`, `0,00`, `R$ 123.000,00`, `12,3%`,
  quarters as `1º Trim`.

## VISUAL FOUNDATIONS

- **Base:** white, always. Colour arrives as large angular shapes and photography, not as
  page backgrounds. At most one or two coloured backgrounds per deck (chapter dividers,
  full-bleed photo slides).
- **Signature motif:** hard-edged **diagonal cuts** — green and lime wedges sliced at
  roughly 20–30°, sometimes overlapping into a second colour. They anchor the left or
  bottom-left of the slide and bleed off the canvas. No soft shapes, no blobs.
- **Gradients:** the chapter/cover shapes carry a subtle green→lime blend baked into the
  supplied artwork. Do **not** add CSS gradients of your own, and never a blue-violet one.
- **Type as texture:** titles are light-weight with `0.06em` tracking, which reads almost
  as spaced-out lettering in the PDF ("M o d e l o  p e r s o n a l i z á v e l").
- **The yellow dash** (28 × 3 px) under a title, or a literal em dash in the copy, is the
  standard title terminator.
- **Photography:** real operational and workplace imagery — offshore platforms, control
  rooms, laboratories, meetings, agriculture. Neutral-to-cool daylight, high saturation on
  the safety orange of uniforms, no grain, no duotone, no filters. Cropped full-bleed or
  into halves; never rounded, never with a drop shadow.
- **Corner radii:** effectively none. Slides, photos, tables and shapes are square-cornered.
  `--radius-card: 14px` exists only for the soft-cornered quote/highlight panels supplied
  as artwork, and `--radius-pill` for status dots and legend circles.
- **Cards:** the template has no shadowed card UI. "Cards" are flat colour panels
  (the orange quote panel) or plain white areas separated by whitespace. **No shadows
  anywhere** — no inner shadow, no outer shadow, no elevation system.
- **Borders:** hairline `#E6E6E6` row separators in tables, a 2 px Verde Petrobras rule
  under table headers, and nothing else. No outlined boxes around content.
- **Transparency and blur:** none in the source. Text over photography relies on choosing a
  dark region of the image, not on scrims, capsules or protection gradients. The only
  translucency used here is the section label over photography
  (`rgba(255,255,255,.85)`).
- **Fixed elements:** BR PETROBRAS lockup top-right (132 px, inverted to white over dark
  imagery); the green "I" classification badge bottom-right (26 px); the italic
  "Título da seção" label top-left. All three appear on nearly every slide.
- **Layout:** left margin 56 px, top/bottom 40 px, two-column grid with a 48 px gutter,
  title → body gap 28 px, block gap 20 px, list gap 12 px (one line, per the deck).
- **Charts:** flat fills in a fixed series order (verde, azul escuro, amarelo, verde claro,
  verde água, laranja), no 3D, no shadows, value labels inside the slice in white or black
  for contrast, legend to the right.
- **Status:** the "farol" convention — a filled circle whose colour is the status
  (green concluded, yellow in progress, orange stopped/late, grey to start).
- **Animation:** the source is a static PowerPoint template and specifies none. Keep motion
  out of recreations; if a click-through prototype needs it, use a plain 150 ms opacity
  fade and nothing else. No bounces, no slides-in, no parallax.
- **Hover / press states:** not defined by the source (there is no interactive product).
  For prototypes: hover = darken the palette colour by roughly 8 %, press = darken 14 %
  with no scale change. Links use Azul escuro, hovering to Verde Petrobras.
  Flag any richer interaction as an addition rather than brand truth.

## ICONOGRAPHY

- The brand's icon system is the **Banco de Pictogramas Petrobras** (DTDI), delivered as a
  PowerPoint library of roughly 1,300 pictograms. They are grouped by theme
  (TI/digital, operations, safety, energy, people, sustainability). Style: flat, mostly
  monoline-plus-fill, drawn in the institutional palette — green, teal and lime with grey
  and dark blue accents — on transparent backgrounds, square-ish and generously sized on
  the slide (roughly 96–140 px at 1280×720).
- In the deck they appear beside a column heading or a short list, one pictogram per idea,
  never as a decorative row and never inline with text.
- There is **no icon font and no SVG sprite** in the sources. Most pictograms are native
  PowerPoint DrawingML vectors; the ones already rasterised in the file were extracted to
  `assets/pictograms/` and are used through the `Pictogram` component. A converter for the
  remaining DrawingML shapes is prototyped at `research/pptx2svg.js` but not finished —
  see Caveats.
- **No CDN icon set is used or substituted.** Lucide/Heroicons would be visibly off-brand
  next to the pictogram style, so nothing was swapped in. Use only pictograms from
  `assets/pictograms/`; if you need one that is not there, ask for it to be exported from
  the bank.
- **Bullets** are plain filled circles (or short dashes), coloured from the palette, not
  glyphs. **Unicode as icon:** only the curly quotation marks on the quote slide and the
  em dash under titles. **Emoji: never.**
- **Logo:** `assets/logo-br-petrobras.png` is the official BR PETROBRAS lockup lifted from
  the template — 303 × 88, transparent. It was **not** redrawn. Invert it to white
  (`filter: brightness(0) invert(1)`) over dark imagery; never recolour it otherwise.

## Assets (`assets/`)

- `logo-br-petrobras.png` — official BR PETROBRAS lockup, 303×88, transparent.
- `badge-interna.png` — green "I" classification badge, bottom-right of every slide.
- `shape-cover-diagonal.png`, `shape-chapter-green-lime.png`,
  `shape-quote-green-yellow.png`, `shape-orange-panel.png`, `shape-farol-green.png` —
  the template's angular brand shapes.
- `photo-meeting.png`, `photo-control-room.png`, `photo-offshore.png`, `map-world.png`.
- `pictograms/` — rasterised pictograms from the DTDI bank.

## Index

Root manifest:

- `styles.css` — the single entry point consumers link. `@import`s only.
- `tokens/fonts.css`, `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`.
- `thumbnail.html` — homepage tile.
- `readme.md` (this file), `SKILL.md` — portable Agent Skill wrapper.
- `guidelines/` — 16 foundation specimen cards (Colors, Type, Spacing, Brand).
- `slides/` — 12 sample slides, one file per slide type, tagged for the Slides group.
- `templates/apresentacao-br/` — `ApresentacaoBr.dc.html`, the 6-slide editable starting
  deck, plus `ds-base.js` which loads this system's CSS and bundle.
- `templates/guia-sms-opsub-deck/` — `GuiaSmsOpsubDeck.dc.html`, the same guide as a
  presentable 23-slide deck on `deck-stage` (keyboard nav, thumbnail rail, print-to-PDF,
  PPTX export). `deck-nav.js` turns the index's `#anchor` links into slide jumps.
- `templates/guia-sms-opsub/` — `GuiaSmsOpsub.dc.html`, the 23-slide "Guia de Prevenção e
  Aprendizagem — Anomalias de SMS na OPSUB" (julho/2026), rebuilt on this system from the
  user's PowerPoint. Its images live in `assets/guia-sms/`.

#### Painéis e termômetro (revisão jul/2026)

The user's own revision of the guide introduced two patterns, now part of the system:

- **Painel de conteúdo** — `#F4F7F9` fill, `#DDE4E9` hairline, 10 px radius, 12–18 px
  padding. It groups a block that used to float on white: the descrição/causas column, the
  Ações list, and each lesson on the lessons pages. On those pages the 2×2 grid was
  replaced by four full-width panels stacked down the left column.
- **Termômetro de controle de riscos** — the stacked green bars were replaced by a single
  vertical gradient bar (`assets/termometro-controle-riscos.png`, azul-petróleo → verde →
  amarelo → laranja, 29×217 px) with the hierarchy set beside it in 14 px bold
  `#41535E`. White dots on the bar mark the levels the occurrence's actions reached.
  The gradient reads efficacy, not severity — it is deliberately distinct from the
  anomaly-signalling code below.

#### Sinalização de anomalias (regra Petrobras)

Red is never used to signal accidents. This system codes anomaly classes as:
Acidente com lesão → **Laranja `#ED8B00`**; Incidente → **Amarelo `#FDC82F`** (fills and
badges only, black text — yellow is never used for coloured type on white);
Acidente ambiental → **Verde água `#00B2A9`**, with Verde claro as its accent rule.
- `research/` — extraction working files: `modelos-br-text.md`,
  `pictogramas-text.md`, `shots/`, `pdfimg/`, `media/`, `pptx2svg.js`.

### Components

`components/layout/` — **SlideFrame**, **SlideTitle**, **ChapterCover**, **Footnote**, **Pictogram**, **ContentPanel** (+ **LessonCard**).
`components/content/` — **BulletList**, **AgendaList**, **QuoteCard**, **PhotoFigure**, **ContactCard**.
`components/data/` — **StatusLegend** (+ the `FAROL` status constant), **FarolList**, **DataTable**, **StatHighlight**, **RiskThermometer** (+ `HIERARQUIA_CONTROLES`).

Each directory carries a `@dsCard` card showing its variants, and every component has a
sibling `.d.ts` props contract and a `.prompt.md` usage note.

#### Intentional additions

The source is a slide template, not a component library, so the inventory above was derived
from the slide layouts it defines — one component per recurring layout element. Two entries
have no direct counterpart in the source and exist for practical reasons:

- **Pictogram** — a wrapper so pictograms are placed from `assets/pictograms/` instead of
  being hand-drawn.
- **StatHighlight** — the "Destaque 12,3%" callout that appears beside charts, factored out
  because it recurs with different values.
- **ContentPanel / LessonCard / RiskThermometer** — not additions but extractions: all
  three come from the user's July/2026 revision of the SMS OPSUB guide (see below).

### Sample slides

Capa · Agenda ou sumário · Divisão de capítulos · Conteúdo simples · Duas colunas ·
Citação em destaque · Imagens com legenda · Imagem full-bleed · Gráfico com destaque ·
Tabela · Farol de atividades · Conclusão e contatos.

## Caveats

- Petrobras Sans has no webfont binary in this project; it resolves through `local()` and
  needs the font installed. Trebuchet MS is substituted by Arial for the 8 pt notes,
  following the user's own July/2026 file.
- Only the rasterised pictograms could be extracted. The ~1,300 native DrawingML
  pictograms in the bank still need a vector export.
- `Modelos para apresentação BR.pptx` could not be imported (size limit); the PDF was used.
- Chart slides reproduce the template's flat pie/column style in CSS; the source's
  full chart gallery (line, stacked column, timeline, organogram, stakeholder matrix,
  strategic map, Brazil and continent maps) is documented in
  `research/modelos-br-text.md` but not yet built as slides.
