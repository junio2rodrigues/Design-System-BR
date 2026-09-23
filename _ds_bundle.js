/* @ds-bundle: {"format":4,"namespace":"PetrobrasApresentaEsDesignSystem_2ad5e3","components":[{"name":"AgendaList","sourcePath":"components/content/AgendaList.jsx"},{"name":"BulletList","sourcePath":"components/content/BulletList.jsx"},{"name":"ContactCard","sourcePath":"components/content/ContactCard.jsx"},{"name":"PhotoFigure","sourcePath":"components/content/PhotoFigure.jsx"},{"name":"QuoteCard","sourcePath":"components/content/QuoteCard.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"FarolList","sourcePath":"components/data/FarolList.jsx"},{"name":"HIERARQUIA_CONTROLES","sourcePath":"components/data/RiskThermometer.jsx"},{"name":"RiskThermometer","sourcePath":"components/data/RiskThermometer.jsx"},{"name":"StatHighlight","sourcePath":"components/data/StatHighlight.jsx"},{"name":"FAROL","sourcePath":"components/data/StatusLegend.jsx"},{"name":"StatusLegend","sourcePath":"components/data/StatusLegend.jsx"},{"name":"ChapterCover","sourcePath":"components/layout/ChapterCover.jsx"},{"name":"ContentPanel","sourcePath":"components/layout/ContentPanel.jsx"},{"name":"LessonCard","sourcePath":"components/layout/ContentPanel.jsx"},{"name":"Footnote","sourcePath":"components/layout/Footnote.jsx"},{"name":"Pictogram","sourcePath":"components/layout/Pictogram.jsx"},{"name":"SlideFrame","sourcePath":"components/layout/SlideFrame.jsx"},{"name":"SlideTitle","sourcePath":"components/layout/SlideTitle.jsx"}],"sourceHashes":{"components/content/AgendaList.jsx":"cd5b7b556e8e","components/content/BulletList.jsx":"ba49ddbd98ac","components/content/ContactCard.jsx":"eff2c6bd7263","components/content/PhotoFigure.jsx":"ec641db142f8","components/content/QuoteCard.jsx":"9d60e3a5bea3","components/data/DataTable.jsx":"f5e0880b7cce","components/data/FarolList.jsx":"70f2b191484f","components/data/RiskThermometer.jsx":"6d06b161b045","components/data/StatHighlight.jsx":"5e86c57f5df6","components/data/StatusLegend.jsx":"b32da1bcd676","components/layout/ChapterCover.jsx":"e65889591f3f","components/layout/ContentPanel.jsx":"6f3730b727f0","components/layout/Footnote.jsx":"487e83ec0b63","components/layout/Pictogram.jsx":"53f267d6d13c","components/layout/SlideFrame.jsx":"76bb76fab79b","components/layout/SlideTitle.jsx":"e767bf78ec8d","research/pptx2svg.js":"c7043c54e7e2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PetrobrasApresentaEsDesignSystem_2ad5e3 = window.PetrobrasApresentaEsDesignSystem_2ad5e3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/AgendaList.jsx
try { (() => {
function AgendaList({
  items = [],
  columns = 2,
  numberColor = 'var(--text-muted)',
  style
}) {
  return /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ', 1fr)',
      columnGap: 'var(--col-gap)',
      rowGap: 'var(--gap-list)',
      gridAutoFlow: 'column',
      gridTemplateRows: 'repeat(' + Math.ceil(items.length / columns) + ', auto)',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      color: numberColor
    }
  }, i + 1 + '.'), /*#__PURE__*/React.createElement("span", {
    style: {
      textWrap: 'pretty'
    }
  }, it))));
}
Object.assign(__ds_scope, { AgendaList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/AgendaList.jsx", error: String((e && e.message) || e) }); }

// components/content/BulletList.jsx
try { (() => {
function BulletList({
  items = [],
  marker = 'bullet',
  markerColor = 'var(--pb-verde)',
  size = 'var(--fs-body)',
  gap = 'var(--gap-list)',
  style
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap,
      fontSize: size,
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      fontFamily: 'var(--font-core)',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, marker === 'none' ? null : /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      marginTop: '0.45em',
      width: marker === 'dash' ? 14 : 9,
      height: marker === 'dash' ? 3 : 9,
      borderRadius: marker === 'dash' ? 0 : '50%',
      background: markerColor
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      textWrap: 'pretty'
    }
  }, it))));
}
Object.assign(__ds_scope, { BulletList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BulletList.jsx", error: String((e && e.message) || e) }); }

// components/content/ContactCard.jsx
try { (() => {
function ContactCard({
  name,
  email,
  phone,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-body-small)',
      lineHeight: 1.5,
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-title)'
    }
  }, name), email ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email,
    style: {
      color: 'var(--link)',
      textDecoration: 'none'
    }
  }, email)) : null, phone ? /*#__PURE__*/React.createElement("div", null, 'Telefone: ' + phone) : null);
}
Object.assign(__ds_scope, { ContactCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ContactCard.jsx", error: String((e && e.message) || e) }); }

// components/content/PhotoFigure.jsx
try { (() => {
function PhotoFigure({
  src,
  alt = '',
  caption,
  credit,
  height = 380,
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-core)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height,
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 20,
      fontFamily: 'var(--font-notes)',
      fontSize: 'var(--fs-footnote)',
      color: 'var(--pb-preto)'
    }
  }, /*#__PURE__*/React.createElement("span", null, caption), credit ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      flex: '0 0 auto'
    }
  }, credit) : null));
}
Object.assign(__ds_scope, { PhotoFigure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PhotoFigure.jsx", error: String((e && e.message) || e) }); }

// components/content/QuoteCard.jsx
try { (() => {
function QuoteCard({
  quote,
  support,
  panelSrc = 'assets/shape-quote-green-yellow.png',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 680,
      minHeight: 300,
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: panelSrc,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'fill'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '54px 64px 44px 74px',
      fontFamily: 'var(--font-core)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-slide-title)',
      color: 'var(--pb-preto)',
      letterSpacing: 'var(--tracking-title)',
      lineHeight: 'var(--lh-title)'
    }
  }, '\u201C' + (quote || '') + '\u201D'), support ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontSize: 'var(--fs-body-small)',
      color: 'var(--pb-preto)',
      lineHeight: 'var(--lh-body)',
      maxWidth: 460
    }
  }, support) : null));
}
Object.assign(__ds_scope, { QuoteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/QuoteCard.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function DataTable({
  columns = [],
  rows = [],
  style
}) {
  const th = {
    textAlign: 'left',
    padding: '12px 16px',
    color: 'var(--text-title)',
    fontWeight: 'var(--weight-bold)',
    borderBottom: '2px solid var(--pb-verde)'
  };
  const td = {
    padding: '12px 16px',
    borderBottom: '1px solid #E6E6E6'
  };
  return /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: 'collapse',
      width: '100%',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-body-small)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      ...th,
      textAlign: i ? 'right' : 'left'
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, r.map((c, j) => /*#__PURE__*/React.createElement("td", {
    key: j,
    style: {
      ...td,
      textAlign: j ? 'right' : 'left'
    }
  }, c))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/FarolList.jsx
try { (() => {
function FarolList({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gap-list)',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-body-small)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      flex: '0 0 auto',
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: it.color || 'var(--status-iniciar)',
      marginTop: '0.35em'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      textWrap: 'pretty'
    }
  }, it.label))));
}
Object.assign(__ds_scope, { FarolList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/FarolList.jsx", error: String((e && e.message) || e) }); }

// components/data/RiskThermometer.jsx
try { (() => {
const HIERARQUIA_CONTROLES = ['Eliminação', 'Substituição', 'Engenharia', 'Administrativo', 'EPI'];

/** Barra-termômetro de eficácia dos controles: azul-petróleo (mais eficaz) → laranja (menos eficaz). */
function RiskThermometer({
  levels = HIERARQUIA_CONTROLES,
  marks = [],
  height = 217,
  barSrc = 'assets/termometro-controle-riscos.png',
  caption = 'Termômetro de eficácia — do mais eficaz ao menos eficaz',
  style
}) {
  const step = height / levels.length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      ...style
    }
  }, caption ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-notes)',
      fontSize: 11,
      color: 'var(--text-muted)',
      marginBottom: 10
    }
  }, caption) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: '0 0 auto',
      width: 29,
      height
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: barSrc,
    alt: "",
    style: {
      width: 29,
      height,
      display: 'block'
    }
  }), marks.map((m, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    style: {
      position: 'absolute',
      left: 7.5,
      top: step * (m + 0.5) - 7,
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: 'var(--pb-branco)',
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      height,
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-thermo)'
    }
  }, levels.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, l)))));
}
Object.assign(__ds_scope, { HIERARQUIA_CONTROLES, RiskThermometer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/RiskThermometer.jsx", error: String((e && e.message) || e) }); }

// components/data/StatHighlight.jsx
try { (() => {
function StatHighlight({
  label = 'Destaque',
  value,
  color = 'var(--pb-verde)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-small)',
      color: 'var(--text-muted)',
      letterSpacing: 'var(--tracking-label)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 44,
      color,
      letterSpacing: '0.02em',
      lineHeight: 1.1
    }
  }, value));
}
Object.assign(__ds_scope, { StatHighlight });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatHighlight.jsx", error: String((e && e.message) || e) }); }

// components/data/StatusLegend.jsx
try { (() => {
const FAROL = [{
  label: 'Concluído',
  color: 'var(--status-concluido)'
}, {
  label: 'Em andamento',
  color: 'var(--status-andamento)'
}, {
  label: 'Parado/ Atrasado',
  color: 'var(--status-parado)'
}, {
  label: 'Iniciar',
  color: 'var(--status-iniciar)'
}];
function StatusLegend({
  items = FAROL,
  prefix = 'Status:',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-body-small)',
      color: 'var(--text-body)',
      ...style
    }
  }, prefix ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, prefix) : null, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: it.color,
      display: 'block'
    }
  }), it.label)));
}
Object.assign(__ds_scope, { FAROL, StatusLegend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatusLegend.jsx", error: String((e && e.message) || e) }); }

// components/layout/ChapterCover.jsx
try { (() => {
function ChapterCover({
  number,
  title,
  shapeSrc = 'assets/shape-chapter-green-lime.png',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: shapeSrc,
    alt: "",
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--slide-margin-x)',
      bottom: 96
    }
  }, number ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-chapter-number)',
      color: 'var(--pb-branco)',
      letterSpacing: '0.08em',
      lineHeight: 1
    }
  }, number) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontSize: 'var(--fs-slide-title)',
      color: 'var(--pb-branco)',
      letterSpacing: 'var(--tracking-title)',
      lineHeight: 'var(--lh-title)',
      maxWidth: 520
    }
  }, title)));
}
Object.assign(__ds_scope, { ChapterCover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/ChapterCover.jsx", error: String((e && e.message) || e) }); }

// components/layout/ContentPanel.jsx
try { (() => {
/** Cartão claro que agrupa um bloco de conteúdo sobre o fundo branco do slide. */
function ContentPanel({
  children,
  tone = 'neutro',
  accent,
  padding = 16,
  style
}) {
  const bg = tone === 'verde' ? 'var(--surface-panel-verde)' : 'var(--surface-panel)';
  const border = tone === 'verde' ? 'transparent' : 'var(--border-panel)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      border: '1px solid ' + border,
      borderTop: accent ? '4px solid ' + accent : '1px solid ' + border,
      borderRadius: 'var(--radius-panel)',
      padding,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-core)',
      color: 'var(--text-body)',
      ...style
    }
  }, children);
}

/** Uma lição aprendida: número em laranja, título em verde e o texto de apoio, dentro de um painel. */
function LessonCard({
  number,
  title,
  children,
  color = 'var(--pb-laranja)',
  style
}) {
  return /*#__PURE__*/React.createElement(ContentPanel, {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      ...style
    }
  }, number != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      fontSize: 28,
      lineHeight: 1,
      color,
      minWidth: 20
    }
  }, number) : null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      color: 'var(--text-title)',
      marginBottom: 4
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.45
    }
  }, children)));
}
Object.assign(__ds_scope, { ContentPanel, LessonCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/ContentPanel.jsx", error: String((e && e.message) || e) }); }

// components/layout/Footnote.jsx
try { (() => {
function Footnote({
  children,
  long = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-notes)',
      fontSize: 'var(--fs-footnote)',
      color: 'var(--pb-preto)',
      lineHeight: 1.4,
      textAlign: long ? 'justify' : 'left',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Footnote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Footnote.jsx", error: String((e && e.message) || e) }); }

// components/layout/Pictogram.jsx
try { (() => {
function Pictogram({
  src,
  alt = '',
  size = 120,
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: size,
      height: size,
      objectFit: 'contain'
    }
  }), label ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-body-small)',
      color: 'var(--text-body)',
      textAlign: 'center'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Pictogram });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Pictogram.jsx", error: String((e && e.message) || e) }); }

// components/layout/SlideFrame.jsx
try { (() => {
const tone = {
  white: {
    bg: 'var(--surface-base)',
    fg: 'var(--text-body)'
  },
  green: {
    bg: 'var(--pb-verde)',
    fg: 'var(--pb-branco)'
  },
  photo: {
    bg: 'var(--pb-cinza)',
    fg: 'var(--pb-branco)'
  }
};
function SlideFrame({
  sectionLabel,
  variant = 'white',
  badge = true,
  logo = true,
  logoSrc = 'assets/logo-br-petrobras.png',
  badgeSrc = 'assets/badge-interna.png',
  style,
  children
}) {
  const t = tone[variant] || tone.white;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 'var(--slide-w)',
      height: 'var(--slide-h)',
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-core)',
      overflow: 'hidden',
      boxSizing: 'border-box',
      ...style
    }
  }, sectionLabel ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--slide-margin-x)',
      top: 26,
      fontSize: 'var(--fs-section-label)',
      fontStyle: 'italic',
      color: variant === 'white' ? 'var(--text-muted)' : 'rgba(255,255,255,.85)',
      letterSpacing: 'var(--tracking-label)'
    }
  }, sectionLabel) : null, logo ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "BR PETROBRAS",
    style: {
      position: 'absolute',
      right: 30,
      top: 22,
      width: 'var(--logo-w)',
      filter: variant === 'white' ? 'none' : 'brightness(0) invert(1)'
    }
  }) : null, children, badge ? /*#__PURE__*/React.createElement("img", {
    src: badgeSrc,
    alt: "Interna",
    style: {
      position: 'absolute',
      right: 30,
      bottom: 26,
      width: 'var(--badge-size)'
    }
  }) : null);
}
Object.assign(__ds_scope, { SlideFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SlideFrame.jsx", error: String((e && e.message) || e) }); }

// components/layout/SlideTitle.jsx
try { (() => {
function SlideTitle({
  children,
  color = 'var(--text-title)',
  rule = true,
  ruleColor = 'var(--accent-rule)',
  size = 'var(--fs-slide-title)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: size,
      fontWeight: 'var(--weight-title)',
      color,
      letterSpacing: 'var(--tracking-title)',
      lineHeight: 'var(--lh-title)',
      textWrap: 'pretty'
    }
  }, children), rule ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'var(--rule-w)',
      height: 'var(--rule-h)',
      background: ruleColor,
      marginTop: 16
    }
  }) : null);
}
Object.assign(__ds_scope, { SlideTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SlideTitle.jsx", error: String((e && e.message) || e) }); }

// research/pptx2svg.js
try { (() => {
// PPTX DrawingML -> SVG converter (used via eval inside run_script)
globalThis.mkZip = async function (blob) {
  const buf = new Uint8Array(await blob.arrayBuffer());
  const dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  let e = -1;
  for (let i = buf.length - 22; i >= 0; i--) {
    if (dv.getUint32(i, true) === 0x06054b50) {
      e = i;
      break;
    }
  }
  const n = dv.getUint16(e + 10, true),
    cdOff = dv.getUint32(e + 16, true);
  let p = cdOff;
  const map = {};
  for (let i = 0; i < n; i++) {
    const method = dv.getUint16(p + 10, true),
      csize = dv.getUint32(p + 20, true),
      fnl = dv.getUint16(p + 28, true),
      efl = dv.getUint16(p + 30, true),
      fcl = dv.getUint16(p + 32, true),
      lho = dv.getUint32(p + 42, true);
    map[new TextDecoder().decode(buf.subarray(p + 46, p + 46 + fnl))] = {
      method,
      csize,
      lho
    };
    p += 46 + fnl + efl + fcl;
  }
  return {
    map,
    blob: async name => {
      const en = map[name];
      if (!en) throw new Error('missing ' + name);
      const lfnl = dv.getUint16(en.lho + 26, true),
        lefl = dv.getUint16(en.lho + 28, true);
      const start = en.lho + 30 + lfnl + lefl;
      const sub = buf.subarray(start, start + en.csize);
      if (en.method === 0) return new Blob([sub]);
      return await new Response(new Blob([sub]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).blob();
    },
    text: async function (name) {
      return await (await this.blob(name)).text();
    }
  };
};
const NS = 'http://schemas.openxmlformats.org/drawingml/2006/main';
const g1 = (el, tag) => el ? el.getElementsByTagNameNS(NS, tag)[0] : null;
const child = (el, tag) => {
  if (!el) return null;
  for (const c of el.children) if (c.localName === tag) return c;
  return null;
};
function xfrmOf(el) {
  // returns {off,ext,ch,chExt,rot,flipH,flipV} from spPr/grpSpPr
  const x = child(el, 'xfrm');
  if (!x) return null;
  const off = child(x, 'off'),
    ext = child(x, 'ext'),
    cho = child(x, 'chOff'),
    che = child(x, 'chExt');
  return {
    ox: +off?.getAttribute('x') || 0,
    oy: +off?.getAttribute('y') || 0,
    cx: +ext?.getAttribute('cx') || 0,
    cy: +ext?.getAttribute('cy') || 0,
    chx: cho ? +cho.getAttribute('x') : null,
    chy: cho ? +cho.getAttribute('y') : null,
    chcx: che ? +che.getAttribute('cx') : null,
    chcy: che ? +che.getAttribute('cy') : null,
    rot: +(x.getAttribute('rot') || 0) / 60000,
    flipH: x.getAttribute('flipH') === '1',
    flipV: x.getAttribute('flipV') === '1'
  };
}
// matrix helpers [a,b,c,d,e,f]
const mul = (m, o) => [m[0] * o[0] + m[2] * o[1], m[1] * o[0] + m[3] * o[1], m[0] * o[2] + m[2] * o[3], m[1] * o[2] + m[3] * o[3], m[0] * o[4] + m[2] * o[5] + m[4], m[1] * o[4] + m[3] * o[5] + m[5]];
const apply = (m, x, y) => [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]];
function groupMatrix(f) {
  // child-space -> parent-space
  if (f.chcx == null) return [1, 0, 0, 1, 0, 0];
  const sx = f.chcx ? f.cx / f.chcx : 1,
    sy = f.chcy ? f.cy / f.chcy : 1;
  return [sx, 0, 0, sy, f.ox - f.chx * sx, f.oy - f.chy * sy];
}
function shapeMatrix(f, pw, ph) {
  // path-space (pw,ph) -> parent space, incl flips + rot about center
  const sx = pw ? f.cx / pw : 1,
    sy = ph ? f.cy / ph : 1;
  let m = [sx, 0, 0, sy, 0, 0];
  if (f.flipH) m = mul([-1, 0, 0, 1, f.cx, 0], m);
  if (f.flipV) m = mul([1, 0, 0, -1, 0, f.cy], m);
  if (f.rot) {
    const a = f.rot * Math.PI / 180,
      cxh = f.cx / 2,
      cyh = f.cy / 2;
    m = mul([Math.cos(a), Math.sin(a), -Math.sin(a), Math.cos(a), cxh - Math.cos(a) * cxh + Math.sin(a) * cyh, cyh - Math.sin(a) * cxh - Math.cos(a) * cyh], m);
  }
  return mul([1, 0, 0, 1, f.ox, f.oy], m);
}
function arcSeg(cur, wR, hR, st, sw) {
  // returns svg path segment string, updates cur
  const s = st * Math.PI / (180 * 60000),
    sweep = sw * Math.PI / (180 * 60000);
  const cx = cur[0] - wR * Math.cos(s),
    cy = cur[1] - hR * Math.sin(s);
  const e = s + sweep;
  const ex = cx + wR * Math.cos(e),
    ey = cy + hR * Math.sin(e);
  const large = Math.abs(sweep) > Math.PI ? 1 : 0,
    dir = sweep > 0 ? 1 : 0;
  cur[0] = ex;
  cur[1] = ey;
  return {
    ex,
    ey,
    wR: Math.abs(wR),
    hR: Math.abs(hR),
    large,
    dir
  };
}
function pathToD(pathEl, m) {
  let d = '';
  const cur = [0, 0];
  const P = (x, y) => {
    const [a, b] = apply(m, x, y);
    return a.toFixed(2) + ' ' + b.toFixed(2);
  };
  for (const seg of pathEl.children) {
    const pts = [...seg.children].filter(c => c.localName === 'pt').map(c => [+c.getAttribute('x'), +c.getAttribute('y')]);
    switch (seg.localName) {
      case 'moveTo':
        cur[0] = pts[0][0];
        cur[1] = pts[0][1];
        d += 'M' + P(...pts[0]);
        break;
      case 'lnTo':
        cur[0] = pts[0][0];
        cur[1] = pts[0][1];
        d += 'L' + P(...pts[0]);
        break;
      case 'cubicBezTo':
        cur[0] = pts[2][0];
        cur[1] = pts[2][1];
        d += 'C' + P(...pts[0]) + ',' + P(...pts[1]) + ',' + P(...pts[2]);
        break;
      case 'quadBezTo':
        cur[0] = pts[1][0];
        cur[1] = pts[1][1];
        d += 'Q' + P(...pts[0]) + ',' + P(...pts[1]);
        break;
      case 'arcTo':
        {
          const wR = +seg.getAttribute('wR'),
            hR = +seg.getAttribute('hR');
          const a = arcSeg(cur, wR, hR, +seg.getAttribute('stAng'), +seg.getAttribute('swAng'));
          // transform radii by matrix scale
          const rx = Math.abs(a.wR * m[0]),
            ry = Math.abs(a.hR * m[3]);
          d += 'A' + rx.toFixed(2) + ' ' + ry.toFixed(2) + ' 0 ' + a.large + ' ' + a.dir + ' ' + P(a.ex, a.ey);
          break;
        }
      case 'close':
        d += 'Z';
        break;
    }
  }
  return d;
}
function solid(el) {
  // fill/line color resolver -> hex or null
  if (!el) return null;
  const s = child(el, 'solidFill');
  if (!s) return null;
  const srgb = child(s, 'srgbClr');
  if (srgb) return '#' + srgb.getAttribute('val');
  const sc = child(s, 'schemeClr');
  if (sc) {
    const v = sc.getAttribute('val');
    if (v === 'tx1' || v === 'dk1') return '#000000';
    if (v === 'bg1' || v === 'lt1') return '#ffffff';
    if (v === 'tx2' || v === 'dk2') return '#44546A';
    if (v === 'bg2' || v === 'lt2') return '#E7E6E6';
    const acc = {
      accent1: '#5B9BD5',
      accent2: '#ED7D31',
      accent3: '#A5A5A5',
      accent4: '#FFC000',
      accent5: '#4472C4',
      accent6: '#70AD47'
    };
    return acc[v] || '#000000';
  }
  return null;
}
const PRST_RECT = new Set(['rect', 'roundRect', 'snip1Rect', 'flowChartProcess']);
// Walk a shape tree node, emitting svg elements in absolute slide EMU space
globalThis.emitShape = function (node, m, inheritFill, out) {
  if (node.localName === 'grpSp') {
    const pr = child(node, 'grpSpPr');
    const f = xfrmOf(pr);
    const fill = solid(pr) || inheritFill;
    const mm = f ? mul(m, mul(shapeMatrix({
      ...f,
      rot: f.rot,
      flipH: f.flipH,
      flipV: f.flipV,
      cx: f.cx,
      cy: f.cy,
      ox: 0,
      oy: 0
    }, f.cx, f.cy), [1, 0, 0, 1, 0, 0])) : m;
    // simpler: group transform = translate(off) * scale(ext/chExt) * translate(-chOff)
    let gm = m;
    if (f) {
      let t = groupMatrix(f);
      if (f.flipH || f.flipV || f.rot) {
        let fm = [1, 0, 0, 1, 0, 0];
        if (f.flipH) fm = mul([-1, 0, 0, 1, 2 * f.ox + f.cx, 0], fm);
        if (f.flipV) fm = mul([1, 0, 0, -1, 0, 2 * f.oy + f.cy], fm);
        if (f.rot) {
          const a = f.rot * Math.PI / 180,
            cx = f.ox + f.cx / 2,
            cy = f.oy + f.cy / 2;
          fm = mul([Math.cos(a), Math.sin(a), -Math.sin(a), Math.cos(a), cx - Math.cos(a) * cx + Math.sin(a) * cy, cy - Math.sin(a) * cx - Math.cos(a) * cy], fm);
        }
        t = mul(fm, t);
      }
      gm = mul(m, t);
    }
    for (const c of node.children) if (['grpSp', 'sp', 'pic'].includes(c.localName)) emitShape(c, gm, fill, out);
    return;
  }
  if (node.localName !== 'sp') return;
  const pr = child(node, 'spPr');
  if (!pr) return;
  const f = xfrmOf(pr);
  if (!f) return;
  let fill = solid(pr);
  if (!fill && child(pr, 'grpFill')) fill = inheritFill;
  if (!fill && child(pr, 'noFill')) fill = null;
  const ln = child(pr, 'ln');
  let stroke = ln ? solid(ln) : null;
  if (ln && child(ln, 'grpFill')) stroke = inheritFill;
  let sw = ln && ln.getAttribute('w') ? +ln.getAttribute('w') : null;
  if (!fill && !stroke) return;
  const cg = child(pr, 'custGeom');
  if (cg) {
    const plist = child(cg, 'pathLst');
    if (!plist) return;
    for (const pth of plist.children) {
      const pw = +(pth.getAttribute('w') || 0),
        ph = +(pth.getAttribute('h') || 0);
      const sm = mul(m, shapeMatrix(f, pw || f.cx, ph || f.cy));
      const d = pathToD(pth, sm);
      if (d) out.push({
        d,
        fill,
        stroke,
        sw: sw ? sw * Math.abs(m[0]) : null,
        rule: 'nonzero'
      });
    }
    return;
  }
  const pg = child(pr, 'prstGeom');
  const prst = pg ? pg.getAttribute('prst') : 'rect';
  const sm = mul(m, shapeMatrix(f, f.cx, f.cy));
  if (prst === 'ellipse' || prst === 'flowChartConnector') {
    const c = apply(sm, f.cx / 2, f.cy / 2),
      r1 = apply(sm, f.cx, f.cy / 2),
      r2 = apply(sm, f.cx / 2, f.cy);
    out.push({
      ellipse: {
        cx: c[0],
        cy: c[1],
        rx: Math.abs(r1[0] - c[0]) || Math.abs(r1[1] - c[1]),
        ry: Math.abs(r2[1] - c[1]) || Math.abs(r2[0] - c[0])
      },
      fill,
      stroke,
      sw: sw ? sw * Math.abs(m[0]) : null
    });
  } else {
    const p0 = apply(sm, 0, 0),
      p1 = apply(sm, f.cx, 0),
      p2 = apply(sm, f.cx, f.cy),
      p3 = apply(sm, 0, f.cy);
    out.push({
      d: `M${p0[0].toFixed(2)} ${p0[1].toFixed(2)}L${p1[0].toFixed(2)} ${p1[1].toFixed(2)}L${p2[0].toFixed(2)} ${p2[1].toFixed(2)}L${p3[0].toFixed(2)} ${p3[1].toFixed(2)}Z`,
      fill,
      stroke,
      sw: sw ? sw * Math.abs(m[0]) : null
    });
  }
};
globalThis.bboxOf = function (items) {
  let x0 = 1e18,
    y0 = 1e18,
    x1 = -1e18,
    y1 = -1e18;
  for (const it of items) {
    if (it.ellipse) {
      const e = it.ellipse;
      x0 = Math.min(x0, e.cx - e.rx);
      x1 = Math.max(x1, e.cx + e.rx);
      y0 = Math.min(y0, e.cy - e.ry);
      y1 = Math.max(y1, e.cy + e.ry);
      continue;
    }
    for (const m of it.d.matchAll(/(-?[\d.]+) (-?[\d.]+)/g)) {
      const x = +m[1],
        y = +m[2];
      if (x < x0) x0 = x;
      if (x > x1) x1 = x;
      if (y < y0) y0 = y;
      if (y > y1) y1 = y;
    }
  }
  return {
    x0,
    y0,
    x1,
    y1,
    w: x1 - x0,
    h: y1 - y0
  };
};
globalThis.toSvg = function (items, opts = {}) {
  const bb = bboxOf(items);
  const pad = (opts.pad ?? 0.04) * Math.max(bb.w, bb.h);
  const vb = [bb.x0 - pad, bb.y0 - pad, bb.w + 2 * pad, bb.h + 2 * pad];
  const mono = opts.mono !== false;
  const body = items.map(it => {
    const fill = it.fill ? mono ? 'currentColor' : it.fill : 'none';
    const st = it.stroke ? ` stroke="${mono ? 'currentColor' : it.stroke}"${it.sw ? ` stroke-width="${it.sw.toFixed(1)}"` : ''} stroke-linejoin="round" stroke-linecap="round"` : '';
    if (it.ellipse) {
      const e = it.ellipse;
      return `<ellipse cx="${e.cx.toFixed(1)}" cy="${e.cy.toFixed(1)}" rx="${e.rx.toFixed(1)}" ry="${e.ry.toFixed(1)}" fill="${fill}"${st}/>`;
    }
    return `<path d="${it.d}" fill="${fill}"${st}/>`;
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb.map(v => Math.round(v)).join(' ')}" width="64" height="64">${body}</svg>`;
};
globalThis.textOf = function (sp) {
  const t = [...sp.getElementsByTagNameNS(NS, 't')].map(n => n.textContent).join('');
  return t.replace(/\s+/g, ' ').trim();
};
globalThis.slugify = function (s) {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48);
};
'ok';
})(); } catch (e) { __ds_ns.__errors.push({ path: "research/pptx2svg.js", error: String((e && e.message) || e) }); }

__ds_ns.AgendaList = __ds_scope.AgendaList;

__ds_ns.BulletList = __ds_scope.BulletList;

__ds_ns.ContactCard = __ds_scope.ContactCard;

__ds_ns.PhotoFigure = __ds_scope.PhotoFigure;

__ds_ns.QuoteCard = __ds_scope.QuoteCard;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.FarolList = __ds_scope.FarolList;

__ds_ns.HIERARQUIA_CONTROLES = __ds_scope.HIERARQUIA_CONTROLES;

__ds_ns.RiskThermometer = __ds_scope.RiskThermometer;

__ds_ns.StatHighlight = __ds_scope.StatHighlight;

__ds_ns.FAROL = __ds_scope.FAROL;

__ds_ns.StatusLegend = __ds_scope.StatusLegend;

__ds_ns.ChapterCover = __ds_scope.ChapterCover;

__ds_ns.ContentPanel = __ds_scope.ContentPanel;

__ds_ns.LessonCard = __ds_scope.LessonCard;

__ds_ns.Footnote = __ds_scope.Footnote;

__ds_ns.Pictogram = __ds_scope.Pictogram;

__ds_ns.SlideFrame = __ds_scope.SlideFrame;

__ds_ns.SlideTitle = __ds_scope.SlideTitle;

})();
