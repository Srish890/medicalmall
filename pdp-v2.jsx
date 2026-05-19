/* PDP V2 — Hair Wigs
   Fully rebuilt from design.md tokens + components.
   Try-on modal reuses TryOnModal from pdp.jsx (loaded first in index.html). */

const PDPV2 = ({ navigate }) => {
  const [variant, setVariant] = React.useState(0);
  const [length, setLength] = React.useState('12"');
  const [color, setColor] = React.useState("Natural Black");
  const [tab, setTab] = React.useState("description");
  const [tryOn, setTryOn] = React.useState(false);
  const [qty, setQty] = React.useState(1);

  const thumbImages = [
    "images/wig-pdp.webp",
    "images/hair blonde 1.png",
    "images/Straight.jpg.webp",
    "images/wavy.webp",
    "images/wig-1.png",
  ];

  const colors = [
    { n: "Natural Black",  c: "#1a1410" },
    { n: "Espresso",       c: "#3d2820" },
    { n: "Warm Brown",     c: "#5d3a26" },
    { n: "Honey",          c: "#8a5a36" },
    { n: "Salt & Pepper",  c: "linear-gradient(135deg, #2a2424 50%, #c8c2bc 50%)" },
    { n: "Silver Grey",    c: "#9a9590" },
  ];

  const detailCards = [
    { h: "Made from",       d: "Ethically sourced human hair · 100% remy", i: "spa" },
    { h: "Cap construction",d: "Hand-tied lace front, monofilament top",   i: "shield" },
    { h: "Weight",          d: "Featherlight — under 95g",                  i: "leaf" },
    { h: "Skin contact",    d: "Hypoallergenic, dermatologist-tested",      i: "heart" },
  ];

  const fitSteps = [
    { n: "01", h: "Virtual try-on with sizing guide",   d: "Our AR tool measures your head circumference from a photo — no tape needed." },
    { n: "02", h: "In-hospital fitting (free)",         d: "Visit any of our 14 partner hospitals for a private 1:1 with our hair specialist." },
    { n: "03", h: "Home fitting kit",                   d: "We ship 3 sizes for ₹100 (refunded). Try at home, send back the rest." },
  ];

  const stories = [
    { name: "Anita", age: 47, q: "I cried the first time I put it on. Then I forgot I was wearing it.",                                          journey: "Stage II breast cancer · 2024" },
    { name: "Reema", age: 38, q: "The custom fitting was at our hospital. Quiet room, just me and Sneha. I felt cared for, not sold to.",        journey: "Lymphoma · 2025" },
  ];

  const faqs = [
    "Will it look natural at the hairline?",
    "Can I wear it during chemotherapy?",
    "Do you ship discreetly?",
    "What if it doesn't fit?",
    "Is it heat-styleable?",
  ];

  const kitItems = [
    "Onco-safe wig shampoo (60ml)",
    "Soft-bristle detangling brush",
    "Wig stand (collapsible)",
    "Care guide (printed + digital)",
    "20-min video session with Sneha",
  ];

  const offers = [
    { tag: "First-time",  code: "CARE100",  title: "₹500 off your first wig",      sub: "Min order ₹3,000",               color: "var(--green-700)",  bg: "var(--green-50)",   icon: "sparkle" },
    { tag: "HDFC Bank",   code: "HDFC10",   title: "10% instant discount",          sub: "Up to ₹1,500 · Credit cards",    color: "#0046AD",           bg: "#EAF1FA",           icon: "shield"  },
    { tag: "Care Credit", code: "AUTO",     title: "No-cost EMI on care plans",     sub: "Auto-applied at checkout",        color: "#8a6a2a",           bg: "var(--gold-100)",   icon: "ribbon"  },
    { tag: "Survivor",    code: "STRONG20", title: "20% off — survivor program",    sub: "Verify with onco team",           color: "var(--rose-500)",   bg: "var(--rose-100)",   icon: "heart"   },
    { tag: "Free",        code: "—",        title: "Free private fitting",          sub: "Auto-applied · 14 hospitals",     color: "var(--ink-700)",    bg: "var(--paper)",      icon: "stethoscope" },
  ];

  const compCare = [
    { title: "Onco-safe shampoo",    price: "₹420",   oldPrice: "₹540",   img: "images/cream.jpg",          brand: "Medical Mall", rating: 4.6, reviews: 38,  badge: "22% OFF" },
    { title: "Silk-lined sleep cap", price: "₹780",   oldPrice: "₹920",   img: "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?w=600&q=80", brand: "Medical Mall", rating: 4.8, reviews: 54, badge: "15% OFF" },
    { title: "Bamboo headscarf set", price: "₹1,290", oldPrice: "₹1,520", img: "https://images.unsplash.com/photo-1556228852-80b6e5eeff06?w=600&q=80",    brand: "Medical Mall", rating: 4.7, reviews: 29, badge: "15% OFF" },
    { title: "Wig care travel kit",  price: "₹890",   oldPrice: "₹1,050", img: "images/wig-pdp.webp",        brand: "Medical Mall", rating: 4.5, reviews: 41, badge: "15% OFF" },
  ];

  return (
    <div className="fade-in" style={{ background: "var(--white)" }}>

      {/* ── BREADCRUMB — clears fixed nav (80px) ────────────── */}
      <div className="shell" style={{ paddingTop: 104, paddingBottom: "var(--space-sm)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-xs)", fontSize: 12.5, color: "var(--ink-500)" }}>
          <button onClick={() => navigate("home-v2")}        style={{ color: "var(--ink-500)", background: "none", border: "none", cursor: "pointer", padding: 0 }}>Home</button>
          <Icon name="chevron" size={10} color="var(--ink-400)" />
          <button onClick={() => navigate("oncology-v2")}    style={{ color: "var(--ink-500)", background: "none", border: "none", cursor: "pointer", padding: 0 }}>Oncology</button>
          <Icon name="chevron" size={10} color="var(--ink-400)" />
          <button onClick={() => navigate("oncology-plp-v2")} style={{ color: "var(--ink-500)", background: "none", border: "none", cursor: "pointer", padding: 0 }}>Human Hair Wigs</button>
          <Icon name="chevron" size={10} color="var(--ink-400)" />
          <span style={{ color: "var(--ink-900)" }}>Women Adira premium wig</span>
        </div>
      </div>

      {/* ── HERO PRODUCT ────────────────────────────────────── */}
      <section style={{ padding: "var(--space-lg) 0 var(--space-section)" }}>
        <div className="shell">
          <div style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: "var(--space-xxl)", alignItems: "flex-start" }}>

            {/* ── LEFT: Gallery ── */}
            <div>
              {/* Main image */}
              <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", background: "var(--paper-2)", height: 580 }}>
                <img
                  src={thumbImages[variant]}
                  alt="Women Adira premium wig"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%", transition: "opacity 220ms ease" }}
                />
                {/* Badges */}
                <div style={{ position: "absolute", top: "var(--space-base)", left: "var(--space-base)", display: "flex", gap: "var(--space-xs)", zIndex: 2 }}>
                  <span className="pill gold"><Icon name="ribbon" size={12} /> Oncology-approved</span>
                  <span className="pill"><Icon name="shield" size={12} /> 100% real hair</span>
                </div>
                {/* Try-on FAB */}
                <button
                  onClick={() => setTryOn(true)}
                  className="btn btn-primary"
                  style={{ position: "absolute", bottom: "var(--space-base)", right: "var(--space-base)" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <Icon name="sparkle" size={15} color="var(--gold-300)" /> Try on
                </button>
              </div>

              {/* Thumbnails */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "var(--space-xs)", marginTop: "var(--space-sm)" }}>
                {thumbImages.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setVariant(i)}
                    style={{
                      height: 88, borderRadius: "var(--radius-md)", padding: 0, overflow: "hidden",
                      border: variant === i ? "2px solid var(--green-cta)" : "2px solid transparent",
                      background: "var(--paper-2)", transition: "border-color 160ms ease",
                    }}
                  >
                    <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </button>
                ))}
              </div>

              {/* Sensitivity strip — rose-100 per design.md */}
              <div style={{ marginTop: "var(--space-lg)", padding: "var(--space-md)", borderRadius: "var(--radius-md)", background: "var(--rose-100)", display: "flex", gap: "var(--space-md)", border: "1px solid rgba(181,104,94,.18)" }}>
                <div style={{ width: 36, height: 36, borderRadius: "var(--radius-full)", background: "var(--white)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="heart" size={16} color="var(--rose-500)" />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "var(--ink-900)", lineHeight: 1.4 }}>If hair loss feels overwhelming today, that's okay.</div>
                  <div style={{ fontSize: 13, color: "var(--ink-700)", marginTop: 4, lineHeight: 1.5 }}>
                    Our hair specialist Sneha is on call. No selling — just a conversation, in your language, in your time.{" "}
                    <button style={{ color: "var(--rose-500)", fontWeight: 500, background: "none", border: "none", cursor: "pointer", padding: 0 }}>Talk to Sneha →</button>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Product details ── */}
            <div style={{ minWidth: 0 }}>

              {/* Title — h-display-md, weight 500 per design.md */}
              <h1 className="h-display-md" style={{ marginBottom: "var(--space-md)" }}>
                Women Adira premium wig
              </h1>

              {/* Rating row */}
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-md)", marginBottom: "var(--space-lg)" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                  <Icon name="star" size={15} color="var(--gold-600)" fill="var(--gold-600)" />
                  <span style={{ fontSize: 13.5, fontWeight: 600, color: "var(--ink-900)" }}>4.9</span>
                </div>
                <span style={{ fontSize: 13, color: "var(--ink-500)" }}>1,240 patient stories</span>
                <span style={{ width: 3, height: 3, borderRadius: "var(--radius-full)", background: "var(--ink-300)", flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: "var(--green-700)", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 4 }}>
                  <Icon name="check" size={13} color="var(--green-700)" /> 2,800+ patients
                </span>
              </div>

              {/* Price */}
              <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-sm)", marginBottom: 6 }}>
                <span style={{ fontSize: 30, fontWeight: 500, letterSpacing: "-.025em", color: "var(--ink-900)" }}>₹4,800</span>
                <span style={{ fontSize: 16, color: "var(--ink-400)", textDecoration: "line-through" }}>₹6,200</span>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: "var(--green-cta)" }}>23% OFF</span>
              </div>
              <div style={{ fontSize: 12, fontFamily: "var(--mono)", color: "var(--ink-400)", letterSpacing: ".04em", textTransform: "uppercase", marginBottom: "var(--space-lg)" }}>
                Ships in 48 hrs · incl. all taxes
              </div>

              {/* Length selector */}
              <div style={{ marginBottom: "var(--space-lg)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-sm)" }}>
                  <span className="eyebrow" style={{ fontSize: 12.5, marginBottom: 0 }}>Length</span>
                  <span style={{ fontSize: 12, color: "var(--ink-500)" }}>Selected: <strong style={{ color: "var(--ink-900)", fontWeight: 500 }}>{length}</strong></span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-xs)" }}>
                  {['8"', '12"', '16"', '20"'].map(l => (
                    <button
                      key={l}
                      onClick={() => setLength(l)}
                      className={length === l ? "pill-tab is-active" : "pill-tab"}
                      style={{ borderRadius: "var(--radius-sm)", textAlign: "center" }}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              {/* Colour selector */}
              <div style={{ marginBottom: "var(--space-lg)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-sm)" }}>
                  <span className="eyebrow" style={{ fontSize: 12.5, marginBottom: 0 }}>Hair colour</span>
                  <span style={{ fontSize: 12, color: "var(--ink-500)" }}>Selected: <strong style={{ color: "var(--ink-900)", fontWeight: 500 }}>{color}</strong></span>
                </div>
                <div style={{ display: "flex", gap: "var(--space-sm)" }}>
                  {colors.map(s => (
                    <button
                      key={s.n}
                      onClick={() => setColor(s.n)}
                      title={s.n}
                      style={{
                        width: 42, height: 42, borderRadius: "var(--radius-full)",
                        background: s.c,
                        border: color === s.n ? "2px solid var(--green-cta)" : "2px solid var(--white)",
                        boxShadow: color === s.n ? "0 0 0 2px var(--green-cta)" : "0 0 0 1px rgba(20,32,27,.12)",
                        transition: "box-shadow 160ms ease",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Try-on prompt — card-paper per design.md */}
              <button
                onClick={() => setTryOn(true)}
                className="card-paper"
                style={{ width: "100%", textAlign: "left", display: "flex", alignItems: "center", gap: "var(--space-md)", cursor: "pointer", border: "1px solid rgba(20,32,27,.08)", marginBottom: "var(--space-lg)", padding: "var(--space-md)" }}
              >
                <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "var(--green-cta)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="sparkle" size={20} color="var(--gold-300)" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "var(--ink-900)", marginBottom: 3 }}>See it on you — privately.</div>
                  <div style={{ fontSize: 13, color: "var(--ink-500)", lineHeight: 1.5 }}>Upload one photo. Try every length and colour. Nothing is saved — your photo never leaves your device.</div>
                </div>
                <Icon name="arrow-right" size={16} color="var(--ink-400)" />
              </button>

              {/* CTA row */}
              <div style={{ display: "flex", gap: "var(--space-sm)", alignItems: "center", marginBottom: "var(--space-md)" }}>
                {/* Quantity stepper */}
                <div style={{ display: "flex", alignItems: "center", border: "1px solid rgba(20,32,27,.12)", borderRadius: "var(--radius-full)", padding: 4, flexShrink: 0 }}>
                  <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: 34, height: 34, borderRadius: "var(--radius-full)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--ink-700)", background: "none", border: "none", cursor: "pointer" }}>
                    <Icon name="minus" size={14} />
                  </button>
                  <span style={{ width: 30, textAlign: "center", fontFamily: "var(--mono)", fontSize: 14 }}>{qty}</span>
                  <button onClick={() => setQty(qty + 1)} style={{ width: 34, height: 34, borderRadius: "var(--radius-full)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--ink-700)", background: "none", border: "none", cursor: "pointer" }}>
                    <Icon name="plus" size={14} />
                  </button>
                </div>
                <button className="btn btn-primary" style={{ flex: 1, justifyContent: "center", padding: "14px 20px" }}>
                  <Icon name="cart" size={15} color="var(--white)" /> Add to cart · ₹4,800
                </button>
                <button className="btn-icon-circle btn" style={{ flexShrink: 0 }}>
                  <Icon name="heart" size={17} color="var(--ink-700)" />
                </button>
              </div>

              {/* Trust strip — card-default style */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-xs)", marginBottom: "var(--space-lg)" }}>
                {[
                  { i: "shield",      t: "Free private fitting at our hospital" },
                  { i: "stethoscope", t: "Reviewed by oncology team" },
                  { i: "lock",        t: "Discreet packaging, always" },
                  { i: "phone",       t: "30-day care line for fit issues" },
                ].map(t => (
                  <div key={t.t} style={{ display: "flex", gap: "var(--space-sm)", alignItems: "center", padding: "10px var(--space-sm)", background: "var(--white)", borderRadius: "var(--radius-sm)", border: "1px solid rgba(20,32,27,.06)", boxShadow: "var(--shadow-sm)" }}>
                    <Icon name={t.i} size={14} color="var(--green-700)" />
                    <span style={{ fontSize: 12.5, color: "var(--ink-700)", lineHeight: 1.35 }}>{t.t}</span>
                  </div>
                ))}
              </div>

              {/* Offers strip */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-sm)" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-xs)" }}>
                    <Icon name="ribbon" size={14} color="var(--green-700)" />
                    <span style={{ fontSize: 13, fontWeight: 500, color: "var(--ink-900)", letterSpacing: "-.005em" }}>Available offers</span>
                    <span style={{ fontSize: 11.5, color: "var(--ink-400)" }}>· {offers.length} offers</span>
                  </div>
                  <div style={{ display: "flex", gap: 4 }}>
                    {["left", "right"].map(dir => (
                      <button key={dir} className="btn btn-icon-circle"
                        style={{ width: 28, height: 28 }}
                        onClick={() => { const el = document.getElementById("offerScrollV2"); el && el.scrollBy({ left: dir === "left" ? -el.clientWidth : el.clientWidth, behavior: "smooth" }); }}
                      >
                        <Icon name={"arrow-" + dir} size={12} color="var(--ink-700)" />
                      </button>
                    ))}
                  </div>
                </div>
                <div id="offerScrollV2" className="no-scrollbar" style={{ display: "flex", gap: 0, overflowX: "auto", scrollBehavior: "smooth", scrollSnapType: "x mandatory" }}>
                  {offers.map(o => (
                    <div key={o.code} style={{
                      flex: "0 0 100%", scrollSnapAlign: "start",
                      borderRadius: "var(--radius-md)", border: "1px solid rgba(20,32,27,.08)",
                      background: "var(--white)", padding: "var(--space-md)", display: "flex", alignItems: "center", gap: "var(--space-md)",
                    }}>
                      <span style={{ width: 38, height: 38, borderRadius: "var(--radius-sm)", background: o.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon name={o.icon} size={16} color={o.color} />
                      </span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-xs)", marginBottom: 3 }}>
                          <span style={{ fontSize: 10.5, fontWeight: 600, color: o.color, letterSpacing: ".05em", textTransform: "uppercase" }}>{o.tag}</span>
                          <span style={{ fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--ink-700)", letterSpacing: ".05em", padding: "1px 6px", border: "1px dashed rgba(20,32,27,.2)", borderRadius: "var(--radius-xs)" }}>{o.code}</span>
                        </div>
                        <div style={{ fontSize: 13.5, fontWeight: 500, color: "var(--ink-900)", letterSpacing: "-.005em", lineHeight: 1.3 }}>{o.title}</div>
                        <div style={{ fontSize: 12, color: "var(--ink-500)", lineHeight: 1.4, marginTop: 2 }}>{o.sub}</div>
                      </div>
                      <button style={{ fontSize: 11.5, fontWeight: 600, color: "var(--green-cta)", letterSpacing: ".02em", background: "none", border: "none", cursor: "pointer", flexShrink: 0 }}>APPLY →</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ── DETAIL TABS ─────────────────────────────────────── */}
      <section style={{ padding: "var(--space-section) 0", background: "var(--paper)" }}>
        <div className="shell">

          {/* Tab bar — underline style */}
          <div style={{ display: "flex", gap: 4, borderBottom: "1px solid rgba(20,32,27,.08)", marginBottom: "var(--space-lg)" }}>
            {[
              { k: "description", l: "About this wig" },
              { k: "fit",         l: "Sizing & fit" },
              { k: "care",        l: "Care & maintenance" },
              { k: "stories",     l: "Patient stories" },
              { k: "faq",         l: "FAQ" },
            ].map(t => (
              <button key={t.k} onClick={() => setTab(t.k)} style={{
                padding: "12px 20px", fontSize: 14,
                fontWeight: tab === t.k ? 500 : 400,
                color: tab === t.k ? "var(--ink-900)" : "var(--ink-400)",
                borderBottom: tab === t.k ? "2px solid var(--green-cta)" : "2px solid transparent",
                marginBottom: -1, background: "none", border: "none",
                borderBottomStyle: "solid",
                borderBottomWidth: 2,
                borderBottomColor: tab === t.k ? "var(--green-cta)" : "transparent",
                cursor: "pointer", transition: "color 160ms ease",
              }}>{t.l}</button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "var(--space-xxl)" }}>

            {/* ── Tab content ── */}
            <div>
              {tab === "description" && (
                <>
                  <h3 className="h-display-sm" style={{ marginBottom: "var(--space-md)" }}>
                    Designed for the days that matter most.
                  </h3>
                  <p className="lead" style={{ marginBottom: "var(--space-lg)" }}>
                    Adira is hand-tied with breathable lace at the crown — for cool comfort during long chemotherapy days. The natural hairline is finished with baby hairs that move and fall like your own.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-md)" }}>
                    {detailCards.map(s => (
                      <div key={s.h} className="card-paper" style={{ padding: "var(--space-md)" }}>
                        <div style={{ width: 36, height: 36, borderRadius: "var(--radius-sm)", background: "var(--green-50)", border: "1px solid var(--green-100)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-sm)" }}>
                          <Icon name={s.i} size={16} color="var(--green-700)" />
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: "var(--ink-900)", marginBottom: 4 }}>{s.h}</div>
                        <div style={{ fontSize: 12.5, color: "var(--ink-500)", lineHeight: 1.5 }}>{s.d}</div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {tab === "fit" && (
                <>
                  <h3 className="h-display-sm" style={{ marginBottom: "var(--space-md)" }}>Three ways to get the fit right.</h3>
                  <ol style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
                    {fitSteps.map(s => (
                      <li key={s.n} className="card-paper" style={{ display: "flex", gap: "var(--space-lg)", padding: "var(--space-md)" }}>
                        <span style={{ fontFamily: "var(--mono)", fontSize: 22, color: "var(--green-cta)", flexShrink: 0, lineHeight: 1 }}>{s.n}</span>
                        <div>
                          <div style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-.005em", color: "var(--ink-900)", marginBottom: 4 }}>{s.h}</div>
                          <div style={{ fontSize: 13.5, color: "var(--ink-500)", lineHeight: 1.55 }}>{s.d}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </>
              )}

              {tab === "care" && (
                <>
                  <h3 className="h-display-sm" style={{ marginBottom: "var(--space-md)" }}>Easy care for everyday wear.</h3>
                  <p className="lead-sm" style={{ color: "var(--ink-500)" }}>
                    Wash every 8–10 wears with our oncology-safe wig shampoo. Air-dry on a stand — never wring. We send a free care kit with every wig, and our hair specialist runs a 20-minute video session before your first wear.
                  </p>
                </>
              )}

              {tab === "stories" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
                  {stories.map(s => (
                    <div key={s.name} className="card-testimonial">
                      <div style={{ width: 28, height: 1, background: "var(--gold-300)", marginBottom: "var(--space-md)" }} />
                      <blockquote style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, fontSize: 20, lineHeight: 1.45, color: "var(--ink-900)", margin: 0, flex: 1 }}>
                        "{s.q}"
                      </blockquote>
                      <div style={{ marginTop: "var(--space-md)", fontSize: 13, color: "var(--ink-500)" }}>{s.name}, {s.age} — {s.journey}</div>
                    </div>
                  ))}
                </div>
              )}

              {tab === "faq" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
                  {faqs.map(q => (
                    <div key={q} className="card-paper" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--space-md)" }}>
                      <span style={{ fontSize: 14, color: "var(--ink-900)", fontWeight: 400 }}>{q}</span>
                      <Icon name="plus" size={16} color="var(--ink-400)" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ── Sidebar ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
              {/* Doctor quote — white card lifts off paper section floor */}
              <div style={{ padding: "var(--space-lg) var(--space-md)", background: "var(--white)", borderRadius: "var(--radius-md)", border: "1px solid rgba(20,32,27,.07)", boxShadow: "var(--shadow-sm)" }}>
                <div className="eyebrow" style={{ marginBottom: "var(--space-sm)" }}>
                  <span className="gold-rule" />
                  From our oncology team
                </div>
                <blockquote style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, fontSize: 19, lineHeight: 1.45, color: "var(--ink-900)", margin: "0 0 var(--space-lg)" }}>
                  "We chose Adira after testing 14 brands. The skin contact alone matters — many wigs irritate scalps that are already sensitive."
                </blockquote>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "var(--radius-full)", background: "rgba(20,32,27,.08)" }} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: "var(--ink-900)" }}>Dr. Priya Iyer</div>
                    <div style={{ fontSize: 12, color: "var(--ink-500)" }}>Onco-rehabilitation lead</div>
                  </div>
                </div>
              </div>

              {/* Kit — card-default */}
              <div style={{ padding: "var(--space-lg) var(--space-md)", background: "var(--white)", borderRadius: "var(--radius-md)", border: "1px solid rgba(20,32,27,.07)", boxShadow: "var(--shadow-sm)" }}>
                <div className="eyebrow" style={{ marginBottom: "var(--space-sm)" }}>
                  <span className="gold-rule" />
                  In your kit, free
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
                  {kitItems.map(t => (
                    <li key={t} style={{ display: "flex", gap: "var(--space-sm)", alignItems: "center", fontSize: 13.5, color: "var(--ink-700)" }}>
                      <Icon name="check" size={14} color="var(--green-cta)" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ── COMPLEMENTARY CARE ─────────────────────────────── */}
      <section style={{ padding: "var(--space-section) 0", background: "var(--paper)" }}>
        <div className="shell">
          <div style={{ marginBottom: "var(--space-xl)" }}>
            <div className="eyebrow">
              <span className="gold-rule" />
              Complete your care
            </div>
            <h2 className="h-display-md">The full hair-recovery kit.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-base)" }}>
            {compCare.map(p => (
              <ProductCard
                key={p.title}
                image={p.img}
                title={p.title}
                price={p.price}
                oldPrice={p.oldPrice}
                badge={p.badge}
                brand={p.brand}
                rating={p.rating}
                reviews={p.reviews}
                onClick={() => navigate("pdp-v2")}
              />
            ))}
          </div>
        </div>
      </section>


      {/* ── TRY-ON MODAL (reuses TryOnModal from pdp.jsx) ──── */}
      {tryOn && <TryOnModal onClose={() => setTryOn(false)} length={length} color={color} />}

      {/* ── FLOATING CHAT BUTTON ───────────────────────────── */}
      <div style={{ position: "fixed", bottom: 28, right: 28, zIndex: 80 }}>
        <button
          style={{
            display: "inline-flex", alignItems: "center", gap: "var(--space-sm)",
            padding: "14px 22px", borderRadius: "var(--radius-full)",
            background: "var(--green-800)", color: "var(--white)",
            boxShadow: "var(--shadow-lg)",
            fontSize: 14, fontWeight: 500, letterSpacing: "-.01em",
            border: "none", cursor: "pointer",
            transition: "transform 160ms cubic-bezier(0.23,1,0.32,1), box-shadow 160ms ease",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 36px -8px rgba(14,42,32,.55)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--shadow-lg)"; }}
          onMouseDown={e => e.currentTarget.style.transform = "scale(0.97)"}
          onMouseUp={e => e.currentTarget.style.transform = "translateY(-2px)"}
        >
          <Icon name="MessageSquare" size={18} color="var(--white)" />
          Talk to us
        </button>
      </div>

    </div>
  );
};

window.PDPV2 = PDPV2;
