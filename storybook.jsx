/* Storybook — living reference for the Medical Mall design system.
   Every token + component from design.md, plus the homepage-specific
   components. Each entry is tagged Global or Home Page. */

const SB_TOKENS = {
  colors: [
    { name: "green-cta",  val: "#16933F", desc: "Primary action colour — solid CTA button fills, plus eyebrow labels, active tab text and icon strokes." },
    { name: "green-900",  val: "#0E2A20", desc: "Darkest green — hero, footer and reassurance-banner backgrounds, plus headings on dark surfaces." },
    { name: "green-800",  val: "#0F6A2E", desc: "Mid-dark green — button hover states and secondary dark surfaces." },
    { name: "green-100",  val: "#DDE9E1", desc: "Pale green tint — soft section backgrounds and subtle fills." },
    { name: "gold-600",      val: "#B58A3D", desc: "Deep gold — gold text on light surfaces and the 'Home Page' scope tag." },
    { name: "gold-300",      val: "#E2C896", desc: "Signature gold accent — gold rules, badges, active-pill highlight and the hero emphasis word." },
    { name: "gold-100",      val: "#F3E8D0", desc: "Pale gold wash — badge backgrounds and warm tinted surfaces." },
    { name: "star-yellow",   val: "#F4B400", desc: "Star rating colour — used exclusively for filled star icons on all product cards and PDPs." },
    { name: "ink-900",    val: "#14201B", desc: "Primary text — all headings and card titles; the strongest text colour." },
    { name: "ink-700",    val: "#2A3833", desc: "Secondary text — body copy, prices, and ghost/secondary button labels." },
    { name: "ink-500",    val: "#4F5C56", desc: "Muted text — leads, captions and supporting copy under headings." },
    { name: "ink-400",    val: "#6E7A74", desc: "Faint text — meta rows, input placeholders and the lightest readable label." },
    { name: "ink-300",    val: "#97A19B", desc: "Faintest ink — dividers and dot separators only; too light for body text." },
    { name: "white",      val: "#FFFFFF", desc: "Pure white — card surfaces, product info strips and the search-bar fill." },
    { name: "paper",      val: "#FAF7F2", desc: "Default page background — the warm ivory base on every page." },
    { name: "paper-2",    val: "#F4EFE6", desc: "Slightly deeper ivory — card-paper surfaces and inset code chips." },
    { name: "paper-3",    val: "#ECE6D8", desc: "Deepest ivory — subtle dividers and layered backgrounds." },
    { name: "rose-500",   val: "#B5685E", desc: "Muted rose — empathy accent reserved for oncology moments." },
  ],
  spacing: [
    { name: "xxs", val: "4px" },
    { name: "xs", val: "8px" },
    { name: "sm", val: "12px" },
    { name: "md", val: "16px" },
    { name: "base", val: "20px" },
    { name: "lg", val: "32px" },
    { name: "xl", val: "48px" },
    { name: "xxl", val: "64px" },
    { name: "section", val: "96px" },
  ],
  radius: [
    { name: "xs", val: "6px" },
    { name: "sm", val: "10px" },
    { name: "md", val: "18px" },
    { name: "lg", val: "24px" },
    { name: "xl", val: "28px" },
    { name: "full", val: "9999px" },
  ],
  shadows: [
    { name: "--shadow-sm",          token: "shadows.sm" },
    { name: "--shadow",             token: "shadows.md" },
    { name: "--shadow-lg",          token: "shadows.lg" },
    { name: "--shadow-hover-card",  token: "shadows.hover-card" },
    { name: "--shadow-hover-lift",  token: "shadows.hover-lift" },
  ],
};

/* Colour token card — swatch on top, name / hex / description stacked below */
const SBColor = ({ name, val, desc }) => (
  <div style={{
    background: "var(--white)",
    border: "1px solid rgba(20,32,27,.07)",
    borderRadius: "var(--radius-md)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  }}>
    <div style={{ height: 150, background: val, boxShadow: "inset 0 0 0 1px rgba(20,32,27,.06)" }} />
    <div style={{ padding: "var(--space-md)", display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
      <div style={{ fontSize: 15, fontWeight: 600, color: "var(--ink-900)", letterSpacing: "-.01em" }}>{name}</div>
      <code style={{ fontFamily: "var(--mono)", fontSize: 12.5, color: "var(--ink-400)" }}>{val}</code>
      <p style={{ margin: "4px 0 0", fontSize: 13, lineHeight: 1.55, color: "var(--ink-500)" }}>{desc}</p>
    </div>
  </div>
);

/* One catalogued entry — title, optional code hint, a usage note, and the live demo */
const SBItem = ({ title, code, note, children }) => (
  <div style={{
    background: "var(--white)",
    border: "1px solid rgba(20,32,27,.07)",
    borderRadius: "var(--radius-md)",
    padding: "var(--space-lg)",
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-md)",
  }}>
    <div style={{ fontSize: 15, fontWeight: 600, color: "var(--ink-900)", letterSpacing: "-.01em" }}>{title}</div>
    {code && (
      <code style={{
        fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--ink-500)",
        background: "var(--paper-2)", padding: "4px 8px", borderRadius: "var(--radius-xs)",
        alignSelf: "flex-start",
      }}>{code}</code>
    )}
    <div>{children}</div>
    {note && (
      <p style={{
        margin: 0, fontSize: 12.5, lineHeight: 1.55, color: "var(--ink-500)",
        borderLeft: "2px solid var(--gold-300)", paddingLeft: "var(--space-sm)",
      }}>{note}</p>
    )}
  </div>
);

/* Section heading */
const SBSection = ({ eyebrow, title, lead, children }) => (
  <section style={{ paddingTop: "var(--space-section)" }}>
    <div className="shell">
      <div className="eyebrow"><span className="gold-rule" /> {eyebrow}</div>
      <h2 className="h-display-md" style={{ marginBottom: "var(--space-sm)" }}>{title}</h2>
      {lead && <p className="lead-sm" style={{ margin: `0 0 var(--space-xl)`, maxWidth: 620 }}>{lead}</p>}
      {children}
    </div>
  </section>
);

/* Live demo for the FilterSection / FilterCheck shared components */
const SBFilterDemo = () => {
  const [picks, setPicks] = React.useState(["women", "wavy"]);
  const toggle = (v) => setPicks(p => p.includes(v) ? p.filter(x => x !== v) : [...p, v]);
  return (
    <div style={{ maxWidth: 280 }}>
      <FilterSection title="Category">
        {[{ v: "women", l: "Women" }, { v: "men", l: "Men" }].map(o => (
          <FilterCheck key={o.v} checked={picks.includes(o.v)} onChange={() => toggle(o.v)} label={o.l} />
        ))}
      </FilterSection>
      <FilterSection title="Texture" defaultOpen={false}>
        {[{ v: "straight", l: "Straight" }, { v: "wavy", l: "Wavy" }, { v: "curly", l: "Curly" }].map(o => (
          <FilterCheck key={o.v} checked={picks.includes(o.v)} onChange={() => toggle(o.v)} label={o.l} />
        ))}
      </FilterSection>
    </div>
  );
};

const Storybook = ({ navigate }) => {
  const [tab, setTab] = React.useState("oncology");
  const grid = (min) => ({ display: "grid", gridTemplateColumns: `repeat(auto-fill, minmax(${min}, 1fr))`, gap: "var(--space-md)" });

  return (
    <div className="fade-in" style={{ background: "var(--paper)", paddingBottom: "var(--space-section)" }}>

      {/* ── PAGE HEADER ── */}
      <section style={{ background: "var(--green-900)", paddingTop: 140, paddingBottom: "var(--space-xxl)" }}>
        <div className="shell">
          <div className="eyebrow" style={{ color: "var(--gold-300)" }}>
            <span className="gold-rule" /> Design system
          </div>
          <h1 className="h-display-xl" style={{ color: "var(--white)", marginBottom: "var(--space-base)" }}>
            Storybook
          </h1>
          <p className="lead" style={{ color: "rgba(255,255,255,.72)", margin: 0, maxWidth: 560 }}>
            Every token and component in the Medical Mall design system — grouped into reusable
            global pieces and components built specifically for the homepage.
          </p>
        </div>
      </section>

      {/* ════════ FOUNDATIONS ════════ */}

      {/* Colours */}
      <SBSection eyebrow="Foundations" title="Colour tokens" lead="The calm-green + ivory palette, with a single gold accent and a muted rose for oncology-empathy moments.">
        <div style={grid("230px")}>
          {SB_TOKENS.colors.map((c) => (
            <SBColor key={c.name} name={c.name} val={c.val} desc={c.desc} />
          ))}
        </div>
      </SBSection>

      {/* Typography */}
      <SBSection eyebrow="Foundations" title="Typography" lead="Clear Sans for everything functional; Instrument Serif italics reserved for emotional emphasis.">
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
          <SBItem title="h-display-xl" code=".h-display-xl"><div className="h-display-xl">Advanced care</div></SBItem>
          <SBItem title="h-display-lg" code=".h-display-lg"><div className="h-display-lg">Doctors' recommendations</div></SBItem>
          <SBItem title="h-display-md" code=".h-display-md"><div className="h-display-md">Find what feels right</div></SBItem>
          <SBItem title="h-display-sm" code=".h-display-sm"><div className="h-display-sm">Sub-section title</div></SBItem>
          <SBItem title="italic-em (Instrument Serif)" code=".italic-em">
            <div className="h-display-md">Care you can <span className="italic-em">actually feel</span></div>
          </SBItem>
          <SBItem title="eyebrow + gold-rule" code=".eyebrow / .gold-rule">
            <div className="eyebrow"><span className="gold-rule" /> Our specialists</div>
          </SBItem>
          <SBItem title="lead" code=".lead"><p className="lead" style={{ margin: 0 }}>Recovery products curated with clinical care, backed by Reliance Foundation.</p></SBItem>
          <SBItem title="lead-sm" code=".lead-sm"><p className="lead-sm" style={{ margin: 0 }}>A slightly smaller lead for internal-page sections.</p></SBItem>
        </div>
      </SBSection>

      {/* Spacing */}
      <SBSection eyebrow="Foundations" title="Spacing scale" lead="A 4px base scale climbing to a 96px section rhythm.">
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
          {SB_TOKENS.spacing.map((s) => (
            <div key={s.name} style={{ display: "flex", alignItems: "center", gap: "var(--space-md)" }}>
              <code style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-500)", width: 130 }}>--space-{s.name}</code>
              <div style={{ height: 16, width: s.val, background: "var(--green-300)", borderRadius: 3 }} />
              <span style={{ fontSize: 12, color: "var(--ink-400)" }}>{s.val}</span>
            </div>
          ))}
        </div>
      </SBSection>

      {/* Radius */}
      <SBSection eyebrow="Foundations" title="Border radius" lead="Pill-first — every button uses radius-full. Cards land at md–lg.">
        <div style={grid("150px")}>
          {SB_TOKENS.radius.map((r) => (
            <SBItem key={r.name} title={`radius-${r.name}`} code={r.val}>
              <div style={{ height: 72, background: "var(--green-100)", border: "1px solid rgba(37,141,72,.20)", borderRadius: r.val }} />
            </SBItem>
          ))}
        </div>
      </SBSection>

      {/* Shadows */}
      <SBSection eyebrow="Foundations" title="Shadows" lead="Three resting tiers plus two named hover states — all warm-tinted with the ink hue.">
        <div style={grid("200px")}>
          {SB_TOKENS.shadows.map((sh) => (
            <SBItem key={sh.name} title={sh.token} code={`var(${sh.name})`}>
              <div style={{ height: 80, background: "var(--white)", borderRadius: "var(--radius-md)", boxShadow: `var(${sh.name})` }} />
            </SBItem>
          ))}
        </div>
      </SBSection>

      {/* ════════ GLOBAL COMPONENTS ════════ */}

      <SBSection eyebrow="Global components" title="Buttons" lead="Every button is pill-shaped and scales to 0.97 on press.">
        <SBItem title="Button variants" code=".btn .btn-*" note="Used in every CTA across all pages — hero, cards, banners. Variant class sets colour; .btn-sm/.btn-lg set size; all share the pill radius and a 0.97 press-scale.">
          <div style={{ display: "flex", gap: "var(--space-sm)", flexWrap: "wrap", alignItems: "center" }}>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-ghost">Ghost</button>
            <button className="btn btn-primary btn-sm">Small</button>
            <button className="btn btn-primary btn-lg">Large</button>
            <button className="btn-icon-circle" aria-label="Previous"><Icon name="arrow-left" size={16} /></button>
            <button className="btn-icon-circle" aria-label="Next"><Icon name="arrow-right" size={16} /></button>
          </div>
        </SBItem>
        <div style={{ marginTop: "var(--space-md)" }}>
          <SBItem title="Buttons on dark surfaces" code=".btn-inverse / .btn-outline-white" note="Used on dark green and image-backed sections — the hero, Find the right care, and the reassurance banner. The white inverse button stays solid white and darkens slightly on hover; btn-outline-white is the lighter transparent-outline option beside it.">
            <div style={{ background: "var(--green-900)", padding: "var(--space-lg)", borderRadius: "var(--radius-sm)", display: "flex", gap: "var(--space-sm)", flexWrap: "wrap" }}>
              <button className="btn btn-inverse btn-lg">Explore oncology <Icon name="arrow-right" size={14} /></button>
              <button className="btn btn-outline-white btn-lg"><Icon name="phone" size={14} color="#fff" /> Talk to a specialist</button>
            </div>
          </SBItem>
        </div>
      </SBSection>

      <SBSection eyebrow="Global components" title="Badges, tabs & tags">
        <div style={grid("280px")}>

          {/* Badge variation 2 */}
          <SBItem title="Badge — Editorial" code=".badge-pill-warm" note="For curated or merit-based labels: 'Featured', 'Bestseller', 'Popular'. Warm gold-300 fill signals quality and curation without the urgency of a sale badge.">
            <div style={{ display: "flex", gap: "var(--space-xs)", flexWrap: "wrap" }}>
              <span className="badge-pill-warm">Featured</span>
              <span className="badge-pill-warm">Bestseller</span>
              <span className="badge-pill-warm">Popular</span>
            </div>
          </SBItem>

          {/* Badge variation 3 */}
          <SBItem title="Badge — Status (outline)" code=".badge-pill-outline" note="For quiet status labels: 'Limited edition', 'Coming soon', 'By prescription'. Ghost/outline treatment keeps it visible without competing with primary content or sale badges.">
            <div style={{ display: "flex", gap: "var(--space-xs)", flexWrap: "wrap" }}>
              <span className="badge-pill-outline">Limited edition</span>
              <span className="badge-pill-outline">Coming soon</span>
              <span className="badge-pill-outline">By prescription</span>
            </div>
          </SBItem>
          <SBItem title="Pill tabs" code=".pill-tab / .is-active" note="Used to switch content in Doctors' Recommendations and the products bento. One tab carries .is-active at a time; clicking swaps which dataset renders below.">
            <div style={{ display: "flex", gap: "var(--space-xs)" }}>
              <button className="pill-tab is-active">Active</button>
              <button className="pill-tab">Inactive</button>
            </div>
          </SBItem>
          <SBItem title="Tag rows" code=".tag-row / .tag-bar" note="Used in 'Find the right care' to list conditions/needs. Each row pairs a short gold bar marker with a label, stacked vertically as a scannable list.">
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
              <div className="tag-row"><span aria-hidden className="tag-bar" /><span>Breast cancer</span></div>
              <div className="tag-row"><span aria-hidden className="tag-bar" /><span>Post-treatment care</span></div>
            </div>
          </SBItem>
          <SBItem title="View-all link" code=".link-view-all" note="Used on the right of section headers (product grids, recommendations) to jump to the full listing. A text link with a trailing arrow — deliberately a link, not a button, so it reads as secondary.">
            <a className="link-view-all">View all <Icon name="arrow-right" size={16} /></a>
          </SBItem>
          <SBItem title="Filter accordion + checkbox" code="<FilterSection> / <FilterCheck>" note="Shared components in components.jsx — the PLP filter sidebar is built from them. FilterSection is a collapsible group (chevron rotates on toggle); FilterCheck is a controlled checkbox row with the green tick. Edit them once in components.jsx and every filter sidebar updates.">
            <SBFilterDemo />
          </SBItem>
        </div>
      </SBSection>

      <SBSection eyebrow="Global components" title="Cards" lead="Four card archetypes — each with a distinct surface treatment.">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "var(--space-lg)" }}>
          <SBItem title="card-paper — editorial" code=".card-paper" note="Used in 'Why us' / trust sections. An ivory-surface card carrying an icon, title, copy and a gold rule — for explaining value, not selling a product.">
            <div className="card-paper" style={{ minHeight: 180 }}>
              <Icon name="shield" size={26} color="var(--green-700)" />
              <div style={{ fontSize: 17, fontWeight: 500, color: "var(--ink-900)", margin: "var(--space-sm) 0" }}>NABH-accredited rigour</div>
              <div style={{ fontSize: 14, color: "var(--ink-500)", lineHeight: 1.6, flex: 1 }}>India's highest hospital accreditation standards.</div>
              <span className="gold-rule" style={{ display: "block", marginTop: "var(--space-base)" }} />
            </div>
          </SBItem>
          <SBItem title="card-testimonial" code=".card-testimonial" note="Used in the products bento and recommendations to carry a patient quote. Serif italic quote on top, a gold rule and attribution pinned to the bottom.">
            <div className="card-testimonial" style={{ minHeight: 180 }}>
              <blockquote style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 19, color: "var(--ink-900)", lineHeight: 1.42, margin: 0, flex: 1 }}>
                I walked out feeling like myself again.
              </blockquote>
              <div style={{ marginTop: "var(--space-base)" }}>
                <div style={{ width: 28, height: 1, background: "var(--gold-300)", marginBottom: "var(--space-xs)" }} />
                <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--ink-900)" }}>Priya M.</div>
              </div>
            </div>
          </SBItem>
          <SBItem title="card (default white)" code=".card" note="The base white surface used for generic content blocks. Lifts with a hover shadow — the fallback when no specialised card archetype fits.">
            <div className="card" style={{ padding: "var(--space-lg)", minHeight: 120 }}>
              <div style={{ fontSize: 15, fontWeight: 500, color: "var(--ink-900)" }}>Default card</div>
              <div style={{ fontSize: 13.5, color: "var(--ink-500)", marginTop: 4 }}>Hover to lift.</div>
            </div>
          </SBItem>
          <SBItem title="ProductCard — global product card" code="SOURCE OF TRUTH → components.jsx › const ProductCard" note="This is the live ProductCard component — defined ONCE in components.jsx. The card below and every product grid (Home V2 / Oncology V2 recommendations, the PLP, Wigs V2) all render this same component, so editing ProductCard in components.jsx updates every one of them — including this storybook card. This demo shows the default card — badge, image, title, price. Optional props (hoverImage, brand, length, meta, rating + reviews, off, outOfStock) render only when supplied.">
            <ProductCard
              image="images/Straight.jpg.webp"
              hoverImage="images/wavy.webp"
              badge="Featured"
              brand="Adira"
              title="Honey-highlight long wig"
              length='20"'
              rating={4.9}
              reviews={211}
              meta="wavy · lace front"
              price="₹7,800"
              oldPrice="₹9,200"
              off={15}
            />
          </SBItem>
          <SBItem title="Star rating — var(--star-yellow) · #F4B400" code='<Icon name="star" color="var(--star-yellow)" fill="var(--star-yellow)" />' note="The star icon always uses --star-yellow (#F4B400) for fill and stroke — never gold-600. Applied globally in ProductCard and all PDP rating rows.">
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-md)", flexWrap: "wrap" }}>
              {[3.8, 4.2, 4.7, 4.9].map(r => (
                <div key={r} style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "6px 12px", background: "var(--white)", borderRadius: "var(--radius-full)", border: "1px solid rgba(20,32,27,.08)", boxShadow: "var(--shadow-sm)" }}>
                  <Icon name="star" size={14} color="var(--star-yellow)" fill="var(--star-yellow)" />
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-900)" }}>{r}</span>
                </div>
              ))}
            </div>
          </SBItem>
        </div>
      </SBSection>

      <SBSection eyebrow="Global components" title="Icons" lead="All icons render through the <Icon> component, backed by Lucide.">
        <SBItem title="Icon — Lucide-backed" code='<Icon name="heart" />' note="Used everywhere an icon appears — buttons, cards, meta rows. A single wrapper over the Lucide set; name picks the glyph, size and color are props so usage stays consistent.">
          <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
            {["heart", "shield", "search", "truck", "phone", "chat", "star", "eye", "leaf", "stethoscope", "calendar", "award"].map((n) => (
              <div key={n} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, width: 64 }}>
                <Icon name={n} size={24} color="var(--green-700)" />
                <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-400)" }}>{n}</span>
              </div>
            ))}
          </div>
        </SBItem>
      </SBSection>

      {/* ════════ HOME PAGE COMPONENTS ════════ */}

      <SBSection eyebrow="Home Page components" title="Built for the homepage hero" lead="Created for the homepage hero context — they expect a dark / image-backed surface.">
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
          <SBItem title="TrustPill — frosted accreditation badge" code="<TrustPill icon='shield'>…</TrustPill>" note="Used in the homepage hero to surface accreditations over the image. A single frosted-glass pill style (.badge-glass) — only the icon name changes per use.">
            <div style={{ background: "var(--green-900)", padding: "var(--space-lg)", borderRadius: "var(--radius-sm)", display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
              <TrustPill icon="shield">Hospital-backed · NABH accredited</TrustPill>
            </div>
          </SBItem>
          <SBItem title="SearchBar — hero search pill" code="<SearchBar />" note="Used as the homepage hero's primary entry point. A pill input with a submit button. The trust-caption row beneath it is built inline with tokens, not part of this component.">
            <div style={{ background: "var(--green-900)", padding: "var(--space-lg)", borderRadius: "var(--radius-sm)" }}>
              <SearchBar />
            </div>
          </SBItem>
        </div>
      </SBSection>

    </div>
  );
};

window.Storybook = Storybook;
