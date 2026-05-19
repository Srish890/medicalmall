/* Human Hair Wigs — L2 category page
   Reuses homepage tokens, buttons, cards, and section rhythm.
   Sections: Hero carousel · Shop by category · Shop by texture · Testimonials */

const Wigs = ({ navigate }) => {
  const [slide, setSlide] = React.useState(0);
  const [hovered, setHovered] = React.useState(null);
  const [productTab, setProductTab] = React.useState("women");

  // Featured wig catalogue
  const featuredWigs = [
    { id: 8,  title: "Honey-highlight long wig",     brand: "Adira",    price: 7800,  mrp: 9200,  img: "images/Straight.jpg.webp",   category: "women", length: '20"', texture: "wavy",     cap: "lace-front",   rating: 4.9, reviews: 211, tag: "Featured" },
    { id: 1,  title: "Premium wavy human-hair wig",  brand: "Adira",    price: 4800,  mrp: 6200,  img: "images/wig-pdp.webp",        category: "women", length: '16"', texture: "wavy",     cap: "hand-tied",    rating: 4.8, reviews: 124, tag: "Bestseller" },
    { id: 2,  title: "Custom lace-front wig",        brand: "Adira",    price: 12500, mrp: 14800, img: "images/hair blonde 1.png",   category: "women", length: '20"', texture: "straight", cap: "lace-front",   rating: 4.9, reviews: 47,  tag: "Featured" },
    { id: 6,  title: "Curly body wave wig",          brand: "Reform",   price: 6200,  mrp: 7400,  img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80", category: "women", length: '16"', texture: "curly",    cap: "full-cap",     rating: 4.7, reviews: 64  },
    { id: 7,  title: "Coily natural-finish wig",     brand: "Adira",    price: 6800,  mrp: 7900,  img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80", category: "women", length: '14"', texture: "kinky",    cap: "full-cap",     rating: 4.6, reviews: 38  },
    { id: 12, title: "Lightweight wavy bob",         brand: "Calm Co.", price: 3800,  mrp: 4500,  img: "images/wavy.webp",           category: "women", length: '12"', texture: "wavy",     cap: "monofilament", rating: 4.6, reviews: 88,  tag: "20% OFF" },
    { id: 10, title: "Discreet men's hairpiece",     brand: "Adira",    price: 6800,  mrp: 7800,  img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80", category: "men",   length: '8"',  texture: "straight", cap: "lace-front",   rating: 4.7, reviews: 54  },
    { id: 11, title: "Men's natural wave system",    brand: "Reform",   price: 5900,  mrp: 6800,  img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600&q=80", category: "men",   length: '8"',  texture: "wavy",     cap: "hand-tied",    rating: 4.5, reviews: 42  },
  ];
  const visibleProducts = featuredWigs.filter(p => p.category === productTab);

  const scrollWigs = (dir) => {
    const el = document.getElementById("wigsScroll");
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.66), behavior: "smooth" });
  };

  const slides = [
    {
      eyebrow: "New collection",
      head1: "Sunlit strands,",
      head2: "instantly",
      sub: "Add dimensional colour and effortless depth without commitment.",
      cta: "Shop all",
      action: () => navigate("oncology-v2"),
      images: ["images/image.png"],
    },
    {
      eyebrow: "Limited-time offer",
      head1: "15% off",
      head2: "premium fits",
      sub: "Custom human-hair wig bundles, hand-tied and individually fitted.",
      cta: "Shop the sale",
      action: () => navigate("oncology-v2"),
      images: ["images/phone.avif"],
    },
    {
      eyebrow: "Hand-crafted",
      head1: "Made by hand,",
      head2: "with care",
      sub: "Every wig is hand-tied and individually fit by certified stylists.",
      cta: "Book a free fitting",
      action: () => navigate("home-v2"),
      images: ["https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=85"],
    },
  ];

  React.useEffect(() => {
    const id = setInterval(() => setSlide(s => (s + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  const cur = slides[slide];

  const categories = [
    {
      label: "For Women",
      desc: "Hand-tied, lace-front and full-cap human-hair wigs in every length and texture.",
      img: "images/wig-pdp.webp",
      bg: "#3A2E2A",
      action: () => { window.__plpInitialFilter = { categories: ["women"] }; navigate("oncology-plp-v2"); },
    },
    {
      label: "For Men",
      desc: "Discreet hairpieces and natural-looking systems, fitted and styled to suit you.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1100&q=70",
      bg: "#243D2F",
      action: () => { window.__plpInitialFilter = { categories: ["men"] }; navigate("oncology-plp-v2"); },
    },
  ];

  const textures = [
    { label: "Straight",         img: "images/Straight.jpg.webp" },
    { label: "Wavy",             img: "images/wavy.webp" },
    { label: "Curly",            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=70" },
    { label: "Kinky / Coily",    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=70" },
    { label: "Lightly layered",  img: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=600&q=70" },
  ];

  const testimonials = [
    {
      quote: "I wore my wig to my niece's wedding and felt like myself again. The fit, the colour — it was everything.",
      name: "LeAnn R.",
      tag: "Verified · Custom Fit",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=70",
    },
    {
      quote: "Soft, natural and easy to wear. The team helped me match my pre-chemo hair almost exactly.",
      name: "Wanda S.",
      tag: "Verified · Bounce Wave",
      avatar: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=200&q=70",
    },
    {
      quote: "Every interaction was kind. They didn't rush me. The wig itself is beautifully crafted — I get compliments every day.",
      name: "Anasa K.",
      tag: "Verified · Body Wave",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=70",
    },
    {
      quote: "Soft on my scalp, light on my head, and the colour is exactly what I asked for. Confidence on day one.",
      name: "Verlinda M.",
      tag: "Verified · Pure Wavy",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=70",
    },
  ];

  return (
    <div className="fade-in" style={{ background: "#FAF8F5" }}>

      {/* ─────────── 1 · HERO CAROUSEL ─────────── */}
      <section style={{ background: "#FAF8F5", padding: 0 }}>
        {/* Breadcrumb — stays inside shell so it aligns with rest of page */}
        <div className="shell">
          <div style={{ padding: "20px 0 16px", display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "var(--ink-500)" }}>
            <button onClick={() => navigate("home-v2")} style={{ color: "var(--ink-500)" }}>Home</button>
            <Icon name="chevron" size={10} color="var(--ink-400)"/>
            <button onClick={() => navigate("oncology-v2")} style={{ color: "var(--ink-500)" }}>Oncology</button>
            <Icon name="chevron" size={10} color="var(--ink-400)"/>
            <span style={{ color: "var(--ink-900)" }}>Human Hair Wigs</span>
          </div>
        </div>

        {/* Banner — FULL-BLEED, no rounded corners, no border, spans 100% of viewport */}
        <div style={{
          position: "relative", overflow: "hidden",
          background: "var(--paper)", height: 420,
          width: "100%",
        }}>
            {slides.map((s, i) => (
              <div
                key={i}
                onClick={s.fullBleed ? s.action : undefined}
                style={{
                  position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
                  display: s.fullBleed ? "block" : "grid",
                  gridTemplateColumns: s.fullBleed ? undefined : "1.05fr 1fr",
                  opacity: i === slide ? 1 : 0,
                  pointerEvents: i === slide ? "auto" : "none",
                  transition: "opacity 500ms cubic-bezier(0.23,1,0.32,1)",
                  cursor: s.fullBleed ? "pointer" : "default",
                }}
              >
                {s.fullBleed ? (
                  /* Full-bleed pre-designed banner */
                  <img src={s.images[0]} alt=""
                    style={{
                      width: "100%", height: "100%",
                      objectFit: "cover", objectPosition: "center",
                      display: "block",
                    }}
                  />
                ) : (
                  <>
                    {/* Image side */}
                    <div style={{ position: "relative", overflow: "hidden", background: "#EFE7DB" }}>
                      {s.collage ? (
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 4, height: "100%" }}>
                          {s.images.map((src, k) => (
                            <div key={k} style={{ overflow: "hidden", background: "#000" }}>
                              <img src={src} alt="" loading="lazy"
                                   style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <img src={s.images[0]} alt="" loading="lazy"
                             style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", display: "block" }}/>
                      )}
                    </div>

                    {/* Text side */}
                    <div style={{ padding: "60px 56px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                      <div style={{ fontFamily: "var(--mono)", fontSize: 13, letterSpacing: ".1em", color: "var(--green-700)", textTransform: "uppercase", marginBottom: 20 }}>
                        {s.eyebrow}
                      </div>
                      <h1 style={{ fontSize: "clamp(36px, 4.5vw, 56px)", fontWeight: 600, letterSpacing: "-.025em", lineHeight: 1.05, margin: "0 0 16px", color: "var(--ink-900)" }}>
                        {s.head1}<br/>
                        <span className="italic-em" style={{ fontSize: "1.05em" }}>{s.head2}</span>
                      </h1>
                      <p style={{ fontSize: 16, color: "var(--ink-500)", lineHeight: 1.6, margin: "0 0 28px", maxWidth: 380 }}>
                        {s.sub}
                      </p>
                      <div>
                        <button onClick={s.action} className="btn btn-primary" style={{ fontSize: 14 }}>
                          {s.cta} <Icon name="arrow-right" size={14} color="#fff"/>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* Dot navigation */}
            <div style={{
              position: "absolute", bottom: 22, left: "50%", transform: "translateX(-50%)",
              display: "flex", gap: 8, zIndex: 2,
            }}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  aria-label={"Go to slide " + (i + 1)}
                  style={{
                    width: i === slide ? 24 : 8, height: 8, borderRadius: 999,
                    background: i === slide ? "var(--green-cta)" : "rgba(20,32,27,.20)",
                    transition: "width 260ms cubic-bezier(0.23,1,0.32,1), background 220ms ease",
                  }}
                />
              ))}
            </div>
          </div>
      </section>


      {/* ─────────── 1.5 · FEATURED WIGS — horizontal scroll with tabs ─────────── */}
      <section style={{ background: "#fff", padding: "64px 0 56px" }}>
        <div className="shell">
          {/* Heading */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 13, letterSpacing: ".1em", color: "var(--green-700)", textTransform: "uppercase", marginBottom: 8 }}>
              Featured wigs
            </div>
            <h2 style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-.02em", margin: 0 }}>
              Find your perfect fit
            </h2>
          </div>

          {/* Tabs + arrows on same row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
            <div style={{ display: "flex", gap: 8 }}>
              {[{ k: "women", l: "Women" }, { k: "men", l: "Men" }].map(t => (
                <button key={t.k} onClick={() => setProductTab(t.k)} style={{
                  padding: "8px 18px", borderRadius: 999,
                  background: productTab === t.k ? "var(--green-50)" : "transparent",
                  color: productTab === t.k ? "var(--green-800)" : "var(--ink-500)",
                  border: "1px solid " + (productTab === t.k ? "rgba(37,141,72,.25)" : "rgba(20,32,27,.1)"),
                  fontSize: 13.5, fontWeight: productTab === t.k ? 600 : 400,
                  transition: "all .15s ease",
                }}>{t.l}</button>
              ))}
            </div>
            <button
              onClick={() => {
                window.__plpInitialFilter = { categories: [productTab] };
                navigate("oncology-plp-v2");
              }}
              onMouseEnter={e => { e.currentTarget.style.gap = "10px"; }}
              onMouseLeave={e => { e.currentTarget.style.gap = "8px"; }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent", border: "none",
                fontSize: 16, fontWeight: 600, color: "var(--green-700)",
                letterSpacing: "-.005em", cursor: "pointer", padding: 0,
                transition: "gap 200ms cubic-bezier(0.23,1,0.32,1)",
              }}>
              View all
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </div>

          {/* Horizontal scroll — 3 cards visible at a time */}
          <div id="wigsScroll" className="no-scrollbar" style={{
            display: "flex", gap: 20, overflowX: "auto",
            scrollSnapType: "x mandatory", scrollBehavior: "smooth",
            paddingBottom: 6,
          }}>
            {visibleProducts.map(p => {
              const off = Math.round((1 - p.price / p.mrp) * 100);
              const isHovered = hovered === "wig-" + p.id;
              return (
                <div key={p.id}
                  onClick={() => navigate("pdp")}
                  onMouseEnter={() => setHovered("wig-" + p.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    flex: "0 0 calc((100% - 40px) / 3)",
                    scrollSnapAlign: "start",
                    background: "#FAF8F5", borderRadius: 14, overflow: "hidden",
                    border: "1px solid rgba(20,32,27,.07)",
                    display: "flex", flexDirection: "column", position: "relative",
                    cursor: "pointer",
                    boxShadow: isHovered ? "0 16px 36px -12px rgba(20,32,27,.15)" : "none",
                    transform: isHovered ? "translateY(-3px)" : "translateY(0)",
                    transition: "box-shadow 200ms ease, transform 180ms ease",
                  }}
                >
                  <div style={{ position: "relative", height: 280, background: "#fff", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 12, left: 12, zIndex: 2, display: "flex", gap: 6 }}>
                      {p.tag && (p.tag === "Bestseller" || p.tag === "Featured") && (
                        <span style={{ background: "#E2C896", color: "#0E2A20", padding: "4px 10px", borderRadius: 999, fontSize: 11, fontWeight: 600 }}>{p.tag}</span>
                      )}
                      {p.tag && p.tag.includes("OFF") && (
                        <span style={{ background: "#FFEDD5", color: "#C2410C", padding: "4px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700 }}>{p.tag}</span>
                      )}
                      {!p.tag && off > 0 && (
                        <span style={{ background: "#FFEDD5", color: "#C2410C", padding: "4px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700 }}>{off}% OFF</span>
                      )}
                    </div>
                    <img src={p.img} alt={p.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
                    <div style={{
                      position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 14px",
                      transform: isHovered ? "translateY(0)" : "translateY(100%)",
                      transition: "transform 220ms cubic-bezier(0.23,1,0.32,1)",
                    }}>
                      <button onClick={e => e.stopPropagation()} style={{
                        width: "100%", padding: "11px 0", borderRadius: 999,
                        background: "rgba(255,255,255,.92)", backdropFilter: "blur(8px)",
                        border: "1px solid rgba(20,32,27,.12)",
                        fontSize: 13, fontWeight: 600, color: "var(--ink-900)",
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
                      }}>
                        <Icon name="eye" size={14} color="var(--ink-700)" /> Quick view
                      </button>
                    </div>
                  </div>
                  <div style={{ padding: "16px 18px 20px" }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "var(--ink-400)", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 6 }}>{p.brand}</div>
                    <div style={{ fontSize: 14.5, fontWeight: 600, lineHeight: 1.35, color: "var(--ink-900)", marginBottom: 6 }}>{p.title}</div>
                    <div style={{ fontSize: 11.5, color: "var(--ink-500)", marginBottom: 8, fontFamily: "var(--mono)", letterSpacing: ".03em", textTransform: "uppercase" }}>
                      {p.length} · {p.texture} · {p.cap.replace("-", " ")}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, marginBottom: 10 }}>
                      <span style={{ color: "#D4A627" }}>★</span>
                      <span style={{ color: "var(--ink-700)", fontWeight: 600 }}>{p.rating}</span>
                      <span style={{ color: "var(--ink-400)" }}>({p.reviews})</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                      <span style={{ fontSize: 18, fontWeight: 700, color: "var(--ink-900)" }}>₹{p.price.toLocaleString("en-IN")}</span>
                      <span style={{ fontSize: 13, color: "var(--ink-400)", textDecoration: "line-through" }}>₹{p.mrp.toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ─────────── 3 · SHOP BY TEXTURE ─────────── */}
      <section style={{ background: "#FAF8F5", padding: "64px 0 64px" }}>
        <div className="shell">
          <div style={{ textAlign: "center", maxWidth: 580, margin: "0 auto 36px" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 13, letterSpacing: ".1em", color: "var(--green-700)", textTransform: "uppercase", marginBottom: 10 }}>
              Shop by texture
            </div>
            <h2 style={{ fontSize: 34, fontWeight: 800, letterSpacing: "-.025em", margin: "0 0 10px" }}>
              Match your natural texture
            </h2>
            <p style={{ fontSize: 15, color: "var(--ink-500)", lineHeight: 1.6, margin: 0 }}>
              From poker-straight to coily — every texture, real human hair.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
            {textures.map((t, i) => (
              <button
                key={t.label}
                onClick={() => navigate("pdp")}
                onMouseEnter={() => setHovered("tex-" + i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "flex", flexDirection: "column", textAlign: "center", gap: 14,
                  background: "transparent", border: "none", padding: 0,
                }}
              >
                <div style={{
                  position: "relative", aspectRatio: "3/4", overflow: "hidden",
                  borderRadius: 14, background: "#EDE6D8",
                  transform: hovered === "tex-" + i ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: hovered === "tex-" + i ? "0 18px 38px -18px rgba(20,32,27,.22)" : "0 1px 2px rgba(20,32,27,.05)",
                  transition: "transform 220ms cubic-bezier(0.23,1,0.32,1), box-shadow 220ms ease",
                }}>
                  <img src={t.img} alt={t.label} loading="lazy"
                       style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}/>
                </div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".12em", color: "var(--ink-700)", textTransform: "uppercase", fontWeight: 500 }}>
                  {t.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>


      {/* ─────────── 4 · TESTIMONIALS ─────────── */}
      <section style={{ background: "#fff", padding: "88px 0 88px" }}>
        <div className="shell">
          {/* Banner panel */}
          <div style={{
            position: "relative", overflow: "hidden", borderRadius: 16,
            padding: "36px 56px", marginBottom: 24,
            display: "flex", alignItems: "center", justifyContent: "center",
            minHeight: 0,
            background: "linear-gradient(115deg, #0E2A20 0%, #195E30 100%)",
          }}>
            <img
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1600&q=70"
              alt=""
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.28 }}
            />
            <div aria-hidden style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(180deg, rgba(14,42,32,.55) 0%, rgba(14,42,32,.85) 100%)",
            }}/>
            <div aria-hidden style={{ position: "absolute", right: -60, top: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,.04)" }}/>

            <div style={{ position: "relative", textAlign: "center", maxWidth: 720 }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", color: "#E2C896", textTransform: "uppercase", marginBottom: 14, display: "inline-flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "#E2C896", letterSpacing: "0.18em" }}>★★★★★</span>
                <span>· Loved by clients</span>
              </div>
              <h2 style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "clamp(34px, 4.4vw, 52px)", fontWeight: 400, color: "#fff", letterSpacing: "-.01em", margin: "0 0 12px", lineHeight: 1.1 }}>
                Thousands of 5-star reviews
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,.78)", lineHeight: 1.6, margin: 0 }}>
                Real stories from people who found comfort, confidence and themselves again.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {testimonials.map((r, i) => (
              <div
                key={r.name}
                onMouseEnter={() => setHovered("rev-" + i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(20,32,27,.07)",
                  borderRadius: 14,
                  padding: "22px",
                  display: "flex", flexDirection: "column", gap: 14,
                  boxShadow: hovered === "rev-" + i ? "0 16px 36px -18px rgba(20,32,27,.20)" : "0 1px 2px rgba(20,32,27,.04)",
                  transform: hovered === "rev-" + i ? "translateY(-3px)" : "translateY(0)",
                  transition: "transform 220ms cubic-bezier(0.23,1,0.32,1), box-shadow 220ms ease",
                }}
              >
                <div style={{ display: "flex", gap: 1, color: "#D4A627", fontSize: 14, letterSpacing: "0.12em" }}>
                  ★★★★★
                </div>
                <div style={{ fontSize: 14, color: "var(--ink-700)", lineHeight: 1.6, flex: 1 }}>
                  "{r.quote}"
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 14, borderTop: "1px solid rgba(20,32,27,.07)" }}>
                  <img src={r.avatar} alt={r.name} loading="lazy"
                       style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover" }}/>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--ink-900)" }}>{r.name}</div>
                    <div style={{ fontSize: 10.5, color: "var(--green-700)", fontWeight: 500, fontFamily: "var(--mono)", letterSpacing: ".06em", textTransform: "uppercase", marginTop: 2 }}>
                      {r.tag}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIRTUAL TRY-ON BANNER ── */}
      <section style={{ background: "var(--cream)", padding: "56px 32px" }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          background: "radial-gradient(120% 140% at 0% 100%, #237156 0%, #1A5240 35%, #14402F 70%, #0E2A20 100%)",
          borderRadius: 20, overflow: "hidden",
          position: "relative",
          height: 460,
        }}>
          {/* dotted pattern */}
          <div aria-hidden style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(rgba(226,200,150,.16) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            maskImage: "radial-gradient(80% 100% at 30% 50%, transparent 20%, #000 70%)",
            WebkitMaskImage: "radial-gradient(80% 100% at 30% 50%, transparent 20%, #000 70%)",
            pointerEvents: "none",
          }}/>
          {/* gold glow */}
          <div aria-hidden style={{
            position: "absolute", top: -120, right: 80, width: 420, height: 420,
            background: "radial-gradient(circle, rgba(226,200,150,.22) 0%, transparent 65%)",
            pointerEvents: "none",
          }}/>
          {/* soft inner ring */}
          <div aria-hidden style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(180deg, rgba(255,255,255,.04) 0%, transparent 30%)",
            pointerEvents: "none",
          }}/>

          {/* LEFT — copy */}
          <div style={{
            position: "absolute", top: "50%", left: 64, transform: "translateY(-50%)",
            color: "#fff", maxWidth: 540, zIndex: 2,
          }}>
            <div style={{
              fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".14em",
              color: "#E2C896", textTransform: "uppercase", marginBottom: 14,
              display: "inline-flex", alignItems: "center", gap: 10,
            }}>
              <span style={{ width: 24, height: 1, background: "#E2C896" }}/>
              Powered by GlamAR
            </div>
            <h2 style={{
              fontFamily: "var(--serif)", fontWeight: 400,
              fontSize: "clamp(32px, 3.6vw, 44px)", lineHeight: 1.08,
              letterSpacing: "-.015em", margin: "0 0 14px",
            }}>
              Try any wig — <em style={{ fontStyle: "italic", color: "#E2C896" }}>right from your phone.</em>
            </h2>
            <p style={{
              fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,.78)",
              maxWidth: 440, margin: "0 0 22px",
            }}>
              Switch styles, lengths and colours in real time using our virtual try-on.
            </p>
            <button
              onClick={() => { window.__plpInitialFilter = null; window.location.hash = "#pdp"; }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 24px", borderRadius: 999,
                background: "#E2C896", color: "#14402F",
                fontSize: 13.5, fontWeight: 600, letterSpacing: "-.01em",
                border: "none", cursor: "pointer",
                transition: "transform 160ms cubic-bezier(0.23,1,0.32,1), box-shadow 160ms ease",
                boxShadow: "0 8px 20px -8px rgba(0,0,0,.35)",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}
              onMouseDown={e => { e.currentTarget.style.transform = "scale(0.97)"; }}
              onMouseUp={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
              Launch virtual try-on
            </button>
          </div>

          {/* RIGHT — phone mockup, straight, larger */}
          <div style={{
            position: "absolute", right: 80, bottom: -20, zIndex: 2,
          }}>
            {/* shadow plate */}
            <div aria-hidden style={{
              position: "absolute", left: "50%", bottom: 80, transform: "translateX(-50%)",
              width: 260, height: 26, background: "rgba(0,0,0,.45)",
              filter: "blur(26px)", borderRadius: "50%", zIndex: 0,
            }}/>
            <div style={{
              width: 320, height: 600,
              background: "#0F1714", borderRadius: 42,
              padding: 9, position: "relative",
              boxShadow: "0 40px 70px -22px rgba(0,0,0,.55), 0 0 0 1.5px rgba(255,255,255,.06) inset",
            }}>
              <div style={{
                width: "100%", height: "100%",
                background: "#FFF", borderRadius: 34, overflow: "hidden",
              }}>
                <img src="images/mobile VTO.png" alt="Virtual try-on preview"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}/>
              </div>
              <div aria-hidden style={{
                position: "absolute", top: 16, left: "50%", transform: "translateX(-50%)",
                width: 84, height: 22, background: "#0F1714", borderRadius: 999, zIndex: 2,
              }}/>
            </div>
          </div>
        </div>
      </section>

      {/* ── FLOATING CHAT BUTTON ── */}
      <div style={{ position: "fixed", bottom: 28, right: 28, zIndex: 80 }}>
        <button style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "14px 22px", borderRadius: 999,
          background: "var(--green-800)", color: "#fff",
          boxShadow: "0 10px 28px -8px rgba(14,42,32,.45)",
          fontSize: 14, fontWeight: 600, letterSpacing: "-.01em",
          transition: "transform 160ms cubic-bezier(0.23,1,0.32,1), box-shadow 160ms ease",
          border: "none", cursor: "pointer",
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 36px -8px rgba(14,42,32,.55)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 28px -8px rgba(14,42,32,.45)"; }}
        onMouseDown={e => e.currentTarget.style.transform = "scale(0.97)"}
        onMouseUp={e => e.currentTarget.style.transform = "translateY(-2px)"}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          Talk to us
        </button>
      </div>

    </div>
  );
};

window.Wigs = Wigs;
