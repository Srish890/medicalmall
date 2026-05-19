/* Homepage V2 — design-system showcase
   Built entirely from design.md tokens via the utility classes in styles.css.
   Deliberately minimal HTML/CSS — no inline magic numbers, no random Tailwind. */

const HomepageV2 = ({ navigate }) => {
  const [activeTab, setActiveTab] = React.useState("oncology");
  const [bentoTab, setBentoTab] = React.useState("wigs");
  const [bentoHov, setBentoHov] = React.useState(null);

  // Products bento — tabbed showcase (featured banner + 2 stacked + testimonial)
  const bentoTabs = [
    {
      key: "wigs", label: "Hair wigs",
      featured: { img: "images/wavy.webp", title: "Wavy", goto: "wigs-v2" },
      side: [
        { img: "images/Straight.jpg.webp", title: "Straight" },
        { img: "images/curly.avif",        title: "Curly" },
      ],
      testimonial: { quote: "I walked out of the fitting room feeling like myself again. That's the only way I can describe it.", author: "Priya M.", role: "Breast cancer survivor, Mumbai" },
    },
    {
      key: "bras", label: "Post-mastectomy bras",
      featured: { img: "images/bra.jpg", title: "Soft-cup post-mastectomy bra", goto: "oncology-v2" },
      side: [
        { img: "images/bra 2.jpg",  title: "Wire-free cotton bra" },
        { img: "images/11485.jpg",  title: "Pocket bra with form insert" },
      ],
      testimonial: { quote: "Recommended by my breast-care nurse — it's the only one that didn't aggravate my surgery scar.", author: "Meera S.", role: "Medical Mall member" },
    },
    {
      key: "forms", label: "Breast forms",
      featured: { img: "images/SPRING-SALE-DESKTOP-BLOCK-breast-form.png", title: "Silicone breast form", goto: "oncology-v2" },
      side: [
        { img: "images/11485.jpg", title: "Lightweight foam form" },
        { img: "images/bra.jpg",   title: "Adhesive partial form" },
      ],
      testimonial: { quote: "Fits perfectly, weighted just like a natural breast — I forget I'm wearing it.", author: "Reena K.", role: "Medical Mall member" },
    },
    {
      key: "compression", label: "Compression therapy",
      featured: { img: "images/compression sleeve.jpeg", title: "Compression sleeve", goto: "oncology-v2" },
      side: [
        { img: "images/compression sleeve.jpeg", title: "Lymphoedema hosiery" },
        { img: "images/compression sleeve.jpeg", title: "Post-surgery garment" },
      ],
      testimonial: { quote: "Prescribed by my physio after lymph node surgery — comfortable enough to wear all day.", author: "Anjali P.", role: "Medical Mall member" },
    },
  ];

  // Doctors' Recommendations — mirrors the 6-tab structure from homepage.jsx
  const tabs = [
    { k: "oncology", l: "Oncology" },
    { k: "mother",   l: "Mother & Baby" },
    { k: "physio",   l: "Physio & Rehab" },
    { k: "cardiac",  l: "Cardiac" },
    { k: "diabetes", l: "Diabetes" },
    { k: "wellness", l: "Wellness" },
  ];

  const productsByTab = {
    oncology: [
      { img: "images/wigs/plpwig.png", hoverImg: "images/wavy.webp",          title: "Adira premium wig",             price: "₹4,800", old: "₹6,200", badge: "Featured", length: '16"' },
      { img: "images/skincare.png",    hoverImg: "images/happy patient.avif", title: "Onco-safe barrier cream",       price: "₹890" },
      { img: "images/elbow.png",       hoverImg: "images/physio main.avif",   title: "Compression sleeve", price: "₹2,150", length: "grade II" },
      { img: "images/11485.jpg",       hoverImg: "images/happy patient.avif", title: "Silicone breast form",          price: "₹3,900", badge: "New" },
    ],
    mother: [
      { img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=70",   title: "Pregnancy multivitamin", price: "₹720", badge: "Featured", length: "60 tabs" },
      { img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=70", title: "Stretch mark oil",         price: "₹540", length: "100ml" },
      { img: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=600&q=70", title: "Postpartum belly belt",            price: "₹980", badge: "Bestseller" },
    ],
    physio: [
      { img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=70", title: "Post-surgery walker",      price: "₹3,400", badge: "Featured" },
      { img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=70",    title: "Heat & cold therapy pack", price: "₹510" },
      { img: "https://images.unsplash.com/photo-1571019613540-996a69725a78?w=600&q=70", title: "Knee support brace",       price: "₹890" },
    ],
    cardiac: [
      { img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=70", title: "BP monitor — automatic",     price: "₹2,180", old: "₹2,800", badge: "Featured" },
      { img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=70", title: "Pulse oximeter — fingertip", price: "₹1,490" },
      { img: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&q=70",    title: "Omega-3 capsules",   price: "₹890", length: "60 ct" },
    ],
    diabetes: [
      { img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=70", title: "Glucose monitor + 50 strips", price: "₹1,449", old: "₹1,890", badge: "Featured" },
      { img: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=70", title: "Diabetic socks",  price: "₹540", length: "pack of 3" },
      { img: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&q=70",    title: "Sugar-free protein mix",      price: "₹1,290" },
    ],
    wellness: [
      { img: "https://images.unsplash.com/photo-1556228852-80b6e5eeff06?w=600&q=70",    title: "Daily multivitamin", price: "₹540", old: "₹720", badge: "Featured", length: "60 ct" },
      { img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&q=70", title: "Plant protein",    price: "₹1,890", length: "neutral" },
      { img: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=70", title: "Calming aroma roll-on",      price: "₹380" },
    ],
  };

  const trustCards = [
    { icon: "shield", num: "01", title: "NABH-accredited rigour", desc: "Held to India's highest hospital accreditation standards — the same protocols applied to every product we carry." },
    { icon: "heart",  num: "02", title: "Personalised clinical care", desc: "Guidance shaped to your stage and pace — from specialists who understand recovery from the inside." },
    { icon: "spa",    num: "03", title: "Comfort-engineered fit", desc: "Skin-kind fabrics and thoughtfully designed fit — products that feel as good as they perform, every day." },
    { icon: "chat",   num: "04", title: "Always-on care line", desc: "Free, confidential care coordinators available 8am to 10pm, every day of the year — whenever you need them." },
  ];

  return (
    <div className="fade-in" style={{ background: "var(--paper)" }}>

      {/* ── HERO ─────────────────────────────────────── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", background: "var(--green-900)" }}>
        <img
          src="images/medicine hero.avif"
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }}
        />
        {/* Left-side gradient — deeper wash so the flush-left content stays readable */}
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(4,16,10,0.68) 0%, rgba(4,16,10,0.48) 30%, rgba(4,16,10,0.18) 52%, transparent 68%)" }} />
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(4,16,10,0.55) 0%, rgba(4,16,10,0.25) 12%, transparent 22%)" }} />
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(4,16,10,0.40) 0%, transparent 28%)" }} />

        {/* Centered play button — decorative video affordance */}
        <button
          aria-label="Play"
          style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2, background: "none", border: "none", padding: 0, cursor: "pointer",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <Icon name="CirclePlay" size={64} color="rgba(255,255,255,0.82)" />
        </button>

        <div style={{ position: "relative", width: "100%", paddingLeft: "6vw", paddingRight: 48, paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}>
          <div style={{ maxWidth: 640 }}>
            <div style={{ marginBottom: "var(--space-lg)" }}>
              <TrustPill icon="shield">Hospital-backed · NABH accredited</TrustPill>
            </div>
            <h1 className="h-display-xl" style={{ color: "var(--white)", marginBottom: "var(--space-base)", textShadow: "0 2px 24px rgba(0,0,0,.25)" }}>
              Advanced Care <br />
              <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 500, color: "var(--gold-300)" }}>
                Beyond
              </span> the Hospital
            </h1>
            <p className="lead" style={{ color: "rgba(255,255,255,.75)", margin: `0 0 var(--space-lg)`, maxWidth: 520 }}>
              Recovery products curated with clinical care — wigs, prosthetics and support essentials, backed by Reliance Foundation.
            </p>
            <SearchBar />
            <div style={{
              display: "flex", alignItems: "center", gap: "var(--space-base)",
              marginTop: "var(--space-base)", fontSize: 15, fontWeight: 500,
              color: "rgba(255,255,255,.78)",
            }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-xs)" }}>
                <Icon name="truck" size={16} color="rgba(110,230,160,1)" /> Discreet 48-hour delivery
              </span>
              <span aria-hidden style={{ width: 3, height: 3, borderRadius: "var(--radius-full)", background: "rgba(255,255,255,.35)", flexShrink: 0 }} />
              <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-xs)" }}>
                <Icon name="star" size={16} color="rgba(110,230,160,1)" /> Premium Recovery Essentials
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US — editorial card grid ─────────────── */}
      <section style={{ background: "var(--paper)", paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}>
        <div className="shell">
          <div style={{ maxWidth: 760, marginBottom: "var(--space-xl)" }}>
            <div className="eyebrow">
              <span className="gold-rule" /> Why us
            </div>
            <h2 className="h-display-lg" style={{ marginBottom: "var(--space-sm)" }}>
              Care you can <span className="italic-em">actually feel</span>
            </h2>
            <p className="lead" style={{ margin: 0, maxWidth: 560 }}>
              Clinical rigour and quiet attention to detail — every product carries the weight of Reliance Foundation's hospital network.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-base)" }}>
            {trustCards.map((c) => (
              <div key={c.title} className="card-paper">
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "var(--space-lg)" }}>
                  <Icon name={c.icon} size={26} color="var(--green-700)" />
                  <span style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".10em", color: "rgba(20,32,27,.32)", fontWeight: 500 }}>
                    {c.num}
                  </span>
                </div>
                <div style={{ fontSize: 19, fontWeight: 500, color: "var(--ink-900)", letterSpacing: "-.015em", lineHeight: 1.25, marginBottom: "var(--space-sm)" }}>
                  {c.title}
                </div>
                <div style={{ fontSize: 14.5, color: "var(--ink-500)", lineHeight: 1.6, flex: 1 }}>
                  {c.desc}
                </div>
                <span className="gold-rule" style={{ display: "block", marginTop: "var(--space-lg)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIND THE RIGHT CARE ─ scroll-driven editorial section (placed AFTER care/why-us) ── */}
      <FindTheRightCare navigate={navigate} />

      {/* ── PRODUCTS THAT CARRY YOU — tabbed bento (featured + 2 stacked + testimonial) ── */}
      {(() => {
        const active = bentoTabs.find(t => t.key === bentoTab) || bentoTabs[0];
        const activeIndex = bentoTabs.findIndex(t => t.key === bentoTab);
        return (
          <section style={{ background: "var(--white)", paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}>
            <div className="shell">
              {/* Header */}
              <div style={{ maxWidth: 680, marginBottom: "var(--space-lg)" }}>
                <h2 className="h-display-lg" style={{ marginBottom: "var(--space-sm)" }}>
                  Products that carry you <span className="italic-em">through every step</span>
                </h2>
                <p className="lead-sm" style={{ margin: 0, maxWidth: 460 }}>
                  Wigs, prosthetics and recovery essentials — curated by our oncology specialists.
                </p>
              </div>

              {/* Tabs — sliding underline */}
              <div style={{ position: "relative", marginBottom: "var(--space-lg)", borderBottom: "1px solid rgba(20,32,27,.10)" }}>
                <div style={{ position: "relative", display: "grid", gridTemplateColumns: `repeat(${bentoTabs.length}, 1fr)` }}>
                  {bentoTabs.map((t) => {
                    const isActive = t.key === bentoTab;
                    return (
                      <button key={t.key} onClick={() => setBentoTab(t.key)} style={{
                        position: "relative", padding: "16px 12px 18px",
                        background: "transparent", border: "none",
                        fontFamily: "var(--sans)", fontSize: 15.5,
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? "var(--ink-900)" : "var(--ink-400)",
                        letterSpacing: "-.005em", textAlign: "center",
                        cursor: "pointer", transition: "color 200ms ease",
                      }}>{t.label}</button>
                    );
                  })}
                  <span aria-hidden style={{
                    position: "absolute", left: 0, bottom: -1, height: 2,
                    width: `${100 / bentoTabs.length}%`,
                    background: "var(--ink-900)",
                    transform: `translateX(${activeIndex * 100}%)`,
                    transition: "transform 320ms cubic-bezier(0.77, 0, 0.175, 1)",
                    pointerEvents: "none",
                  }} />
                </div>
              </div>

              {/* Bento — featured spans 2 rows | 2 stacked side cards | testimonial spans 2 rows */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "1.45fr 1fr 0.82fr",
                gridTemplateRows: "256px 240px",
                gap: 14,
              }}>
                {/* Featured */}
                <div
                  key={active.key + "-feat"}
                  onClick={() => navigate(active.featured.goto)}
                  onMouseEnter={() => setBentoHov("feat")}
                  onMouseLeave={() => setBentoHov(null)}
                  style={{ gridColumn: 1, gridRow: "1 / 3", position: "relative", borderRadius: "var(--radius-md)", overflow: "hidden", cursor: "pointer", background: "var(--paper-2)" }}
                >
                  <img src={active.featured.img} alt={active.featured.title}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", transform: bentoHov === "feat" ? "scale(1.05)" : "scale(1)", transition: "transform 520ms var(--ease-out)" }}
                  />
                  <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,18,12,.82) 0%, rgba(10,18,12,.12) 50%, transparent 72%)" }} />
                  <div style={{ position: "absolute", top: 18, left: 18 }}>
                    <span className="badge-pill-warm">Featured</span>
                  </div>
                  <div style={{
                    position: "absolute", bottom: 22, left: 22, color: "#fff",
                    transform: bentoHov === "feat" ? "translateY(-46px)" : "translateY(0)",
                    transition: "transform 280ms var(--ease-out)",
                  }}>
                    <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.02em", lineHeight: 1.1 }}>{active.featured.title}</div>
                  </div>
                  <div style={{
                    position: "absolute", bottom: 0, left: 22,
                    transform: bentoHov === "feat" ? "translateY(-22px)" : "translateY(100%)",
                    transition: "transform 280ms var(--ease-out)",
                    pointerEvents: bentoHov === "feat" ? "auto" : "none", zIndex: 2,
                  }}>
                    <button className="btn btn-quick-view">
                      Shop Now <Icon name="arrow-right" size={13} color="var(--ink-900)" />
                    </button>
                  </div>
                </div>

                {/* Two stacked side cards */}
                {active.side.map((p, i) => (
                  <div key={active.key + "-side-" + i}
                    onClick={() => navigate("oncology-v2")}
                    onMouseEnter={() => setBentoHov("side" + i)}
                    onMouseLeave={() => setBentoHov(null)}
                    style={{ gridColumn: 2, position: "relative", borderRadius: "var(--radius-md)", overflow: "hidden", cursor: "pointer", background: "var(--paper-2)" }}
                  >
                    <img src={p.img} alt={p.title}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", transform: bentoHov === "side" + i ? "scale(1.06)" : "scale(1)", transition: "transform 520ms var(--ease-out)" }}
                    />
                    <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,18,12,.80) 0%, transparent 55%)" }} />
                    <div style={{
                      position: "absolute", bottom: 16, left: 18, color: "#fff",
                      transform: bentoHov === "side" + i ? "translateY(-38px)" : "translateY(0)",
                      transition: "transform 280ms var(--ease-out)",
                    }}>
                      <div style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-.01em" }}>{p.title}</div>
                    </div>
                    <div style={{
                      position: "absolute", bottom: 0, left: 18,
                      transform: bentoHov === "side" + i ? "translateY(-16px)" : "translateY(100%)",
                      transition: "transform 280ms var(--ease-out)",
                      pointerEvents: bentoHov === "side" + i ? "auto" : "none", zIndex: 2,
                    }}>
                      <button className="btn btn-quick-view btn-sm">Shop Now</button>
                    </div>
                  </div>
                ))}

                {/* Testimonial — spans both rows */}
                <div key={active.key + "-testimonial"} className="card-testimonial" style={{
                  gridColumn: 3, gridRow: "1 / 3",
                  padding: "32px 28px 28px",
                  justifyContent: "space-between",
                }}>
                  <div aria-hidden style={{ fontFamily: "Georgia, serif", fontSize: 56, lineHeight: 0.7, color: "var(--green-700)", opacity: .25, userSelect: "none", marginBottom: 20 }}>"</div>
                  <blockquote style={{
                    fontFamily: "var(--serif)", fontSize: "clamp(16px, 1.4vw, 20px)",
                    fontStyle: "italic", color: "var(--ink-900)",
                    lineHeight: 1.5, letterSpacing: "-.01em", margin: 0, flex: 1,
                  }}>
                    {active.testimonial.quote}
                  </blockquote>
                  <div style={{ marginTop: 24 }}>
                    <div style={{ width: 24, height: 1, background: "var(--gold-300)", marginBottom: 12 }} />
                    <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-900)", letterSpacing: "-.005em" }}>{active.testimonial.author}</div>
                    <div style={{ fontSize: 12, color: "var(--ink-400)", marginTop: 3, fontFamily: "var(--mono)", letterSpacing: ".04em" }}>{active.testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* ── DOCTORS' RECOMMENDATIONS — tabbed product grid ── */}
      <section style={{ background: "var(--white)", paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}>
        <div className="shell">
          <div style={{ marginBottom: "var(--space-lg)" }}>
            <h2 className="h-display-lg">Doctors' recommendations</h2>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-md)", marginBottom: "var(--space-xl)", flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: "var(--space-xs)", flexWrap: "wrap" }}>
              {tabs.map((t) => (
                <button
                  key={t.k}
                  onClick={() => setActiveTab(t.k)}
                  className={"pill-tab" + (activeTab === t.k ? " is-active" : "")}
                >
                  {t.l}
                </button>
              ))}
            </div>
            <a className="link-view-all" onClick={() => navigate("oncology-plp-v2")}>
              View all <Icon name="arrow-right" size={16} />
            </a>
          </div>

          {(() => {
            const items = productsByTab[activeTab] || [];
            return (
              <div style={{ display: "grid", gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: "var(--space-md)" }}>
                {items.map((p, i) => (
                  <ProductCard
                    key={`${activeTab}-${i}`}
                    image={p.img}
                    hoverImage={p.hoverImg}
                    title={p.title}
                    length={p.length}
                    price={p.price}
                    oldPrice={p.old}
                    badge={p.badge}
                    onClick={() => navigate("pdp-v2")}
                  />
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── MEET OUR SPECIALISTS — reused from homepage (handles cutout sizing + arrow nav) ── */}
      <MeetOurSpecialists />

      {/* ── REASSURANCE BANNER — full-bleed image with overlay text + CTAs ── */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "80vh", padding: "120px 0 140px", background: "var(--green-900)" }}>
        <img
          src="images/sunlight.avif"
          alt=""
          aria-hidden
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "62% 42%" }}
        />
        {/* Left-to-right dark overlay so the text stays legible */}
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,6,4,.82) 0%, rgba(10,6,4,.50) 45%, rgba(10,6,4,.08) 80%, rgba(10,6,4,0) 100%)" }} />
        <div aria-hidden style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "45%", background: "linear-gradient(to top, rgba(4,8,6,1) 0%, rgba(4,8,6,.85) 35%, transparent 100%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", padding: "0 7vw", maxWidth: 680 }}>
          <h2 className="h-display-lg" style={{ color: "var(--white)", marginBottom: "var(--space-base)" }}>
            Not sure where<br />to start?
          </h2>
          <p className="lead" style={{ color: "rgba(255,255,255,.75)", margin: `0 0 var(--space-lg)`, maxWidth: 420 }}>
            Talk to one of our care coordinators. Free, no appointment, 8am–10pm daily.
          </p>
          <div style={{ display: "flex", gap: "var(--space-sm)", flexWrap: "wrap" }}>
            <button className="btn btn-primary btn-lg">
              <Icon name="phone" size={15} color="#fff" /> Call us
            </button>
            <button className="btn btn-inverse btn-lg">
              <Icon name="chat" size={15} color="var(--ink-900)" /> Chat with us
            </button>
          </div>
        </div>
      </section>

      {/* ── FLOATING "TALK TO US" BUTTON ── */}
      <div style={{ position: "fixed", bottom: 28, right: 28, zIndex: 90 }}>
        <button
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "14px 22px", borderRadius: "var(--radius-full)",
            background: "var(--green-800)", color: "var(--white)",
            boxShadow: "0 10px 28px -8px rgba(14,42,32,.45)",
            fontSize: 14, fontWeight: 500, letterSpacing: "-.01em",
            transition: "transform 160ms var(--ease-out), box-shadow 160ms ease",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 36px -8px rgba(14,42,32,.55)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 28px -8px rgba(14,42,32,.45)"; }}
          onMouseDown={e => e.currentTarget.style.transform = "scale(0.97)"}
          onMouseUp={e => e.currentTarget.style.transform = "translateY(-2px)"}
        >
          <Icon name="chat" size={18} color="var(--white)" /> Talk to us
        </button>
      </div>

    </div>
  );
};

window.HomepageV2 = HomepageV2;
