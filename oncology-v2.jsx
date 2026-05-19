/* Oncology V2 — category page rebuilt entirely from design.md components + tokens.
   Sections: Hero · Top subcategories · Doctors' recommendations · Seasonal offers · Floating "Talk to us". */

const OncologyV2 = ({ navigate }) => {
  const [hovered, setHovered] = React.useState(null);
  const [oncoTab, setOncoTab] = React.useState("wigs");

  const oncoTabs = [
    { k: "wigs",  l: "Hair wigs" },
    { k: "bras",  l: "Post-mastectomy bras" },
    { k: "forms", l: "Breast forms" },
    { k: "swim",  l: "Swim prosthesis" },
  ];

  const productsByTab = {
    wigs: [
      { img: "images/wigs/plpwig.png", hoverImg: "images/wavy.webp", title: "Adira premium topper",     price: "₹4,800", old: "₹6,200", badge: "Featured" },
      { img: "images/wigs/96b2e5b9-0803-40a8-8252-d3adc67524a9.png",  title: "Wavy lace-front",          price: "₹3,400", length: 'long' },
      { img: "images/wigs/ce685f55-6a60-4357-9e06-f6ac359149ca.png",  title: "Clip-in fringe topper",    price: "₹4,100", badge: "New" },
      { img: "images/wigs/plpwig.png",                                title: "Soft bob",                 price: "₹5,200", length: 'natural black' },
    ],
    bras: [
      { img: "images/bra.jpg",   title: "Soft-cup post-mastectomy bra",  price: "₹2,150", old: "₹2,800", badge: "Featured" },
      { img: "images/bra 2.jpg", title: "Wire-free cotton everyday bra", price: "₹1,890" },
      { img: "images/11485.jpg", title: "Pocket bra with form insert",   price: "₹2,640", badge: "New" },
    ],
    forms: [
      { img: "images/SPRING-SALE-DESKTOP-BLOCK-breast-form.png", title: "Silicone breast form", price: "₹5,400", old: "₹6,800", badge: "Featured", length: "skin-matched" },
      { img: "images/11485.jpg", title: "Lightweight foam form",  price: "₹2,200" },
      { img: "images/bra.jpg",   title: "Adhesive partial form",  price: "₹3,100", badge: "New" },
    ],
    swim: [
      { img: "images/SPRING-SALE-DESKTOP-BLOCK-breast-form.png", title: "Aqua-safe swim prosthesis",     price: "₹4,200", old: "₹5,400", badge: "Featured" },
      { img: "images/bra 2.jpg", title: "Quick-dry mastectomy swimsuit", price: "₹3,150" },
      { img: "images/11485.jpg", title: "Chlorine-resistant pocket top", price: "₹2,890" },
    ],
  };

  const subcategories = [
    {
      key: "wigs",
      stage: "Custom-fit · Virtual try-on",
      label: "Human-hair wigs",
      desc: "Real human hair, hand-tied and individually fitted. Try on virtually from home before you commit.",
      img: "images/wig-pdp.webp",
      cta: "Explore wigs",
      onClick: () => navigate("wigs-v2"),
    },
    {
      key: "post-mastectomy-bras",
      stage: "Post-surgery comfort",
      label: "Post-mastectomy bras & camisoles",
      desc: "Wire-free, soft-cup styles designed to feel cotton-soft on healing skin. Front closures and drain pockets where you need them.",
      img: "images/bra 2.jpg",
      imgPosition: "center 30%",
      cta: "Shop bras & camisoles",
      onClick: () => navigate("oncology-plp-v2"),
    },
    {
      key: "swim-prosthesis",
      stage: "Confidence in water",
      label: "Swim prosthesis",
      desc: "Lightweight, water-safe forms shaped for the pool, the sea, and easy summer days. Quick-drying and chlorine-resistant.",
      img: "images/SPRING-SALE-DESKTOP-BLOCK-breast-form.png",
      cta: "Shop swim",
      onClick: () => navigate("oncology-plp-v2"),
    },
  ];

  const seasonalTiles = [
    { img: "images/Straight.jpg.webp", eyebrow: "Human Hair Wigs", label: "Save up to 40% off", pos: "center 20%",  key: "onc-promo-0", action: () => navigate("wigs-v2") },
    { img: "images/bra.jpg",           eyebrow: "Post-mastectomy", label: "Save up to 30% off", pos: "center 8%",   key: "onc-promo-1", action: () => navigate("oncology-plp-v2") },
    { img: "images/SPRING-SALE-DESKTOP-BLOCK-breast-form.png", eyebrow: "Breast Forms", label: "Save up to 20% off", pos: "center center", key: "onc-promo-2", action: () => navigate("oncology-plp-v2") },
  ];

  return (
    <div className="fade-in" style={{ background: "var(--paper)" }}>

      {/* ── HERO ─────────────────────────────────────── */}
      <section style={{ position: "relative", height: "82vh", minHeight: 620, display: "flex", alignItems: "center", overflow: "hidden", background: "var(--green-900)" }}>
        <img
          src="images/oncology-hero.jpg"
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" }}
        />
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(14,42,32,.88) 0%, rgba(14,42,32,.58) 48%, rgba(14,42,32,.20) 100%)" }} />
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(14,42,32,.55) 0%, transparent 22%)" }} />

        <div className="shell" style={{ position: "relative", width: "100%", paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-xs)", fontSize: 13, color: "rgba(255,255,255,.75)", marginBottom: "var(--space-base)" }}>
            <button onClick={() => navigate("home-v2")} style={{ color: "rgba(255,255,255,.75)", background: "none", border: "none", cursor: "pointer", padding: 0, fontSize: 13 }}>Home</button>
            <Icon name="chevron" size={11} color="rgba(255,255,255,.55)" />
            <span style={{ color: "var(--white)" }}>Oncology</span>
          </div>

          <div style={{ maxWidth: 640 }}>
            <h1 className="h-display-xl" style={{ color: "var(--white)", marginBottom: "var(--space-base)", textShadow: "0 2px 24px rgba(0,0,0,.25)" }}>
              Care that holds you,<br />
              <span className="italic-em" style={{ color: "var(--gold-300)" }}>at every step</span>
            </h1>
            <p className="lead" style={{ color: "rgba(255,255,255,.75)", margin: "0 0 var(--space-lg)", maxWidth: 500 }}>
              Comfort, dignity and confidence — through diagnosis, treatment and beyond. Curated with oncology specialists, delivered with quiet care.
            </p>
            <div style={{ display: "flex", gap: "var(--space-sm)", flexWrap: "wrap" }}>
              <button className="btn btn-primary">Shop oncology essentials</button>
            </div>
          </div>
        </div>

        {/* Trust strip — frosted bar pinned to the hero base */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          background: "rgba(10,22,16,.65)",
          backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
          borderTop: "1px solid rgba(255,255,255,.1)",
        }}>
          <div className="shell" style={{ display: "flex", padding: "var(--space-md) 0", justifyContent: "space-around", flexWrap: "wrap", gap: "var(--space-base)" }}>
            {[
              { icon: "shield",      stat: "NABH",     label: "accredited care" },
              { icon: "stethoscope", stat: "60+",      label: "oncology specialists" },
              { icon: "heart",       stat: "Free",     label: "1:1 consults & fittings" },
              { icon: "truck",       stat: "Discreet", label: "48-hour delivery" },
            ].map((t) => (
              <div key={t.label} style={{ display: "flex", alignItems: "center", gap: "var(--space-xs)" }}>
                <Icon name={t.icon} size={16} color="var(--gold-300)" />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--white)", lineHeight: 1 }}>{t.stat}</div>
                  <div style={{ fontSize: 11.5, color: "rgba(255,255,255,.55)", marginTop: 2 }}>{t.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOP SUBCATEGORIES — full-bleed alternating banners ── */}
      <section style={{ background: "var(--white)", paddingTop: "var(--space-section)" }}>
        <div className="shell" style={{ marginBottom: "var(--space-xl)" }}>
          <div style={{ maxWidth: 720 }}>
            <h2 className="h-display-md" style={{ marginBottom: "var(--space-sm)" }}>
              Find what feels right for today
            </h2>
            <p className="lead-sm" style={{ margin: 0, maxWidth: 540 }}>
              Hand-picked for each stage of the journey. Take your time — there's no wrong place to start.
            </p>
          </div>
        </div>

        <div>
          {subcategories.map((c, i) => {
            const imageOnLeft = i % 2 === 0;
            const ImageSide = (
              <div style={{ position: "relative", overflow: "hidden", background: "var(--green-900)", minHeight: 600 }}>
                <img
                  src={c.img}
                  alt={c.label}
                  style={{
                    position: "absolute", inset: 0, width: "100%", height: "100%",
                    objectFit: "cover", objectPosition: c.imgPosition || "center 22%", display: "block",
                    transform: hovered === "sub-" + i ? "scale(1.04)" : "scale(1)",
                    transition: "transform 700ms var(--ease-out)",
                  }}
                />
              </div>
            );
            const TextSide = (
              <div style={{
                padding: "clamp(48px, 6vw, 96px) clamp(40px, 6vw, 96px)",
                display: "flex", flexDirection: "column", justifyContent: "center",
                background: imageOnLeft ? "var(--white)" : "var(--paper-2)",
                minHeight: 600,
              }}>
                <div className="eyebrow" style={{ marginBottom: "var(--space-base)" }}>
                  <span className="gold-rule" /> {c.stage}
                </div>
                <h3 className="h-display-sm" style={{ margin: "0 0 var(--space-sm)", maxWidth: 520 }}>
                  {c.label}
                </h3>
                <p className="lead-sm" style={{ margin: "0 0 var(--space-lg)", maxWidth: 480 }}>
                  {c.desc}
                </p>
                <div>
                  <button onClick={c.onClick} className="btn btn-primary btn-lg">
                    {c.cta} <Icon name="arrow-right" size={14} color="var(--white)" />
                  </button>
                </div>
              </div>
            );
            return (
              <div
                key={c.key}
                onMouseEnter={() => setHovered("sub-" + i)}
                onMouseLeave={() => setHovered(null)}
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", width: "100%" }}
              >
                {imageOnLeft ? <>{ImageSide}{TextSide}</> : <>{TextSide}{ImageSide}</>}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── DOCTORS' RECOMMENDATIONS — tabbed product grid ── */}
      <section style={{ background: "var(--paper)", paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}>
        <div className="shell">
          <div style={{ marginBottom: "var(--space-lg)" }}>
            <h2 className="h-display-sm">Doctors' recommendations</h2>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-md)", marginBottom: "var(--space-xl)", flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: "var(--space-xs)", flexWrap: "wrap" }}>
              {oncoTabs.map((t) => (
                <button
                  key={t.k}
                  onClick={() => setOncoTab(t.k)}
                  className={"pill-tab" + (oncoTab === t.k ? " is-active" : "")}
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
            const items = productsByTab[oncoTab] || [];
            return (
              <div style={{ display: "grid", gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: "var(--space-md)" }}>
                {items.map((p, i) => (
                  <ProductCard
                    key={`${oncoTab}-${i}`}
                    image={p.img}
                    hoverImage={p.hoverImg}
                    title={p.title}
                    price={p.price}
                    oldPrice={p.old}
                    badge={p.badge}
                    length={p.length}
                    onClick={() => navigate("pdp-v2")}
                  />
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── SEASONAL OFFERS — full-bleed end-to-end 3-tile strip ── */}
      <section style={{ width: "100%", overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", height: 360, lineHeight: 0 }}>
          {seasonalTiles.map((tile) => (
            <div
              key={tile.key}
              onClick={tile.action}
              onMouseEnter={() => setHovered(tile.key)}
              onMouseLeave={() => setHovered(null)}
              style={{ position: "relative", overflow: "hidden", cursor: "pointer" }}
            >
              <img
                src={tile.img}
                alt={tile.eyebrow}
                style={{
                  width: "100%", height: "100%", objectFit: "cover", objectPosition: tile.pos, display: "block",
                  transform: hovered === tile.key ? "scale(1.05)" : "scale(1)",
                  transition: "transform 600ms var(--ease-out)",
                }}
              />
              <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,42,32,.82) 0%, rgba(14,42,32,.12) 55%, transparent 100%)" }} />
              <div aria-hidden style={{
                position: "absolute", inset: 0,
                boxShadow: hovered === tile.key ? "inset 0 0 0 3px rgba(226,200,150,.5)" : "inset 0 0 0 0 rgba(226,200,150,0)",
                transition: "box-shadow 200ms ease",
              }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "var(--space-lg) var(--space-lg)", lineHeight: 1.2 }}>
                <div className="eyebrow" style={{ color: "var(--gold-300)", marginBottom: "var(--space-sm)" }}>
                  {tile.eyebrow}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div className="h-display-sm" style={{ color: "var(--white)" }}>{tile.label}</div>
                  <div style={{
                    opacity: hovered === tile.key ? 1 : 0,
                    transform: hovered === tile.key ? "translateX(0)" : "translateX(6px)",
                    transition: "opacity 200ms ease, transform 200ms ease",
                  }}>
                    <Icon name="arrow-right" size={18} color="var(--white)" />
                  </div>
                </div>
              </div>
            </div>
          ))}
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

window.OncologyV2 = OncologyV2;
