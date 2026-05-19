/* Human Hair Wigs — V2 category page
   Fully rebuilt from design.md tokens + components.
   Sections: Hero carousel · Featured wigs · Shop by texture · Testimonials · Virtual try-on */

const WigsV2 = ({ navigate }) => {
  const [slide, setSlide] = React.useState(0);
  const [hovered, setHovered] = React.useState(null);
  const [productTab, setProductTab] = React.useState("women");

  /* ── DATA ─────────────────────────────────────── */

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

  const slides = [
    {
      eyebrow: "New collection",
      head: <>Sunlit strands,<br/><span className="italic-em" style={{ color: "var(--gold-300)" }}>instantly</span></>,
      sub: "Add dimensional colour and effortless depth without commitment.",
      cta: "Shop all",
      action: () => navigate("oncology-plp-v2"),
      img: "images/image.png",
    },
    {
      eyebrow: "Limited-time offer",
      head: <>15% off<br/><span className="italic-em" style={{ color: "var(--gold-300)" }}>premium fits</span></>,
      sub: "Custom human-hair wig bundles, hand-tied and individually fitted.",
      cta: "Shop the sale",
      action: () => navigate("oncology-plp-v2"),
      img: "images/phone.avif",
    },
    {
      eyebrow: "Hand-crafted",
      head: <>Made by hand,<br/><span className="italic-em" style={{ color: "var(--gold-300)" }}>with care</span></>,
      sub: "Every wig is hand-tied and individually fit by certified stylists.",
      cta: "Book a free fitting",
      action: () => navigate("home-v2"),
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=85",
    },
  ];

  React.useEffect(() => {
    const id = setInterval(() => setSlide(s => (s + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  const textures = [
    { label: "Straight",        img: "images/Straight.jpg.webp",       action: () => { window.__plpInitialFilter = { textures: ["straight"] }; navigate("oncology-plp-v2"); } },
    { label: "Wavy",            img: "images/wavy.webp",               action: () => { window.__plpInitialFilter = { textures: ["wavy"]     }; navigate("oncology-plp-v2"); } },
    { label: "Curly",           img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=70", action: () => { window.__plpInitialFilter = { textures: ["curly"]    }; navigate("oncology-plp-v2"); } },
    { label: "Kinky / Coily",   img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=70", action: () => { window.__plpInitialFilter = { textures: ["kinky"]    }; navigate("oncology-plp-v2"); } },
    { label: "Lightly layered", img: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=600&q=70", action: () => navigate("oncology-plp-v2") },
  ];

  const testimonials = [
    { quote: "I wore my wig to my niece's wedding and felt like myself again. The fit, the colour — it was everything.", name: "LeAnn R.",   tag: "Verified  Custom Fit",   avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=70" },
    { quote: "Soft, natural and easy to wear. The team helped me match my pre-chemo hair almost exactly.",              name: "Wanda S.",   tag: "Verified  Bounce Wave",  avatar: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=200&q=70" },
    { quote: "Every interaction was kind. They didn't rush me. The wig itself is beautifully crafted — I get compliments every day.", name: "Anasa K.",   tag: "Verified  Body Wave",    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=70" },
    { quote: "Soft on my scalp, light on my head, and the colour is exactly what I asked for. Confidence on day one.",  name: "Verlinda M.", tag: "Verified  Pure Wavy",    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=70" },
  ];

  return (
    <div className="fade-in" style={{ background: "var(--paper)", paddingTop: 80 }}>

      {/* ── 1 · HERO CAROUSEL — full-width, starts below nav (page has paddingTop:80) ── */}
      <section style={{ padding: 0 }}>
        <div style={{ position: "relative", overflow: "hidden", height: 520, background: "var(--paper-2)" }}>

          {/* Breadcrumb — overlaid on image, top-left; gradient above makes text legible */}
          <div style={{ position: "absolute", top: 18, left: 32, zIndex: 5, display: "flex", alignItems: "center", gap: "var(--space-xs)", fontSize: 12.5 }}>
            <button onClick={() => navigate("home-v2")} style={{ color: "rgba(255,255,255,.8)", background: "none", border: "none", cursor: "pointer", padding: 0 }}>Home</button>
            <Icon name="chevron" size={10} color="rgba(255,255,255,.5)" />
            <button onClick={() => navigate("oncology-v2")} style={{ color: "rgba(255,255,255,.8)", background: "none", border: "none", cursor: "pointer", padding: 0 }}>Oncology</button>
            <Icon name="chevron" size={10} color="rgba(255,255,255,.5)" />
            <span style={{ color: "rgba(255,255,255,.95)", fontWeight: 500 }}>Human Hair Wigs</span>
          </div>

          {/* Slides */}
          {slides.map((s, i) => (
            <div
              key={i}
              style={{
                position: "absolute", inset: 0,
                display: "grid", gridTemplateColumns: "1.05fr 1fr",
                opacity: i === slide ? 1 : 0,
                pointerEvents: i === slide ? "auto" : "none",
                transition: "opacity 500ms cubic-bezier(0.23,1,0.32,1)",
              }}
            >
              {/* Image side */}
              <div style={{ position: "relative", overflow: "hidden", background: "#EFE7DB" }}>
                <img src={s.img} alt="" loading="lazy"
                  style={{
                    width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", display: "block",
                    transform: i === slide ? "scale(1.0)" : "scale(1.04)",
                    transition: "transform 800ms cubic-bezier(0.23,1,0.32,1)",
                  }}
                />
                {/* Top shadow — makes breadcrumb text legible over any image */}
                <div aria-hidden style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 100, zIndex: 2, pointerEvents: "none",
                  background: "linear-gradient(to bottom, rgba(14,28,20,.52) 0%, rgba(14,28,20,.10) 65%, transparent 100%)",
                }} />
              </div>

              {/* Text side — paper-2 light pane, content truly centered */}
              <div style={{
                padding: "0 52px", display: "flex", flexDirection: "column", justifyContent: "center",
                background: "var(--paper-2)",
              }}>
                {/* Headline — ink-900, italic-em in gold-300 (no eyebrow) */}
                <h1 className="h-display-lg" style={{ color: "var(--ink-900)", marginBottom: "var(--space-md)" }}>
                  {s.head}
                </h1>
                {/* Body — ink-700 */}
                <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink-700)", maxWidth: 360, margin: "0 0 var(--space-lg)" }}>
                  {s.sub}
                </p>
                {/* CTA — btn-primary on light surface */}
                <div>
                  <button onClick={s.action} className="btn btn-primary">
                    {s.cta} <Icon name="arrow-right" size={14} color="currentColor" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Slide dots — positioned in the image half (left ~26%) */}
          <div style={{ position: "absolute", bottom: 22, left: "26%", transform: "translateX(-50%)", display: "flex", gap: "var(--space-xs)", zIndex: 2 }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={"Slide " + (i + 1)}
                style={{
                  width: i === slide ? 24 : 8, height: 8, borderRadius: 999, border: "none", padding: 0, cursor: "pointer",
                  background: i === slide ? "var(--white)" : "rgba(255,255,255,.35)",
                  transition: "width 260ms cubic-bezier(0.23,1,0.32,1), background 220ms ease",
                }}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ── 2 · FEATURED WIGS ─────────────────────────────────── */}
      <section style={{ background: "var(--white)", padding: "var(--space-section) 0 88px" }}>
        <div className="shell">

          {/* Header row */}
          <div style={{ marginBottom: "var(--space-md)" }}>
            <div className="eyebrow">
              <span className="gold-rule" />
              Featured wigs
            </div>
            <h2 className="h-display-md">Find your perfect fit</h2>
          </div>

          {/* Tabs + View all */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--space-lg)" }}>
            <div style={{ display: "flex", gap: "var(--space-xs)" }}>
              {[{ k: "women", l: "Women" }, { k: "men", l: "Men" }].map(t => (
                <button
                  key={t.k}
                  onClick={() => setProductTab(t.k)}
                  className={"pill-tab" + (productTab === t.k ? " is-active" : "")}
                >
                  {t.l}
                </button>
              ))}
            </div>
            <button
              className="link-view-all"
              onClick={() => { window.__plpInitialFilter = { categories: [productTab] }; navigate("oncology-plp-v2"); }}
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
            >
              View all <Icon name="arrow-right" size={15} color="var(--green-700)" />
            </button>
          </div>

          {/* Horizontal scroll — 3 ProductCards per row */}
          <div className="no-scrollbar" style={{
            display: "flex", gap: "var(--space-base)",
            overflowX: "auto", scrollSnapType: "x mandatory", scrollBehavior: "smooth",
            paddingBottom: "var(--space-xs)",
          }}>
            {visibleProducts.map(p => {
              const off = Math.round((1 - p.price / p.mrp) * 100);
              return (
                <div key={p.id} style={{ flex: "0 0 calc((100% - 40px) / 3)", scrollSnapAlign: "start" }}>
                  <ProductCard
                    image={p.img}
                    title={p.title}
                    length={p.length}
                    price={`₹${p.price.toLocaleString("en-IN")}`}
                    oldPrice={`₹${p.mrp.toLocaleString("en-IN")}`}
                    off={off}
                    badge={p.tag && !p.tag.includes("OFF") ? p.tag : undefined}
                    brand={p.brand}
                    meta={`${p.texture} · ${p.cap.replace("-", " ")}`}
                    rating={p.rating}
                    reviews={p.reviews}
                    onClick={() => navigate("pdp-v2")}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ── 3 · SHOP BY TEXTURE ───────────────────────────────── */}
      <section style={{ background: "var(--paper)", padding: "var(--space-section) 0" }}>
        <div className="shell">

          {/* Centered header */}
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto var(--space-xl)" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <span className="gold-rule" />
              Shop by texture
              <span className="gold-rule" />
            </div>
            <h2 className="h-display-md" style={{ marginBottom: "var(--space-sm)" }}>
              Match your natural texture
            </h2>
            <p className="lead-sm">From poker-straight to coily — every texture, real human hair.</p>
          </div>

          {/* 5-col texture grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "var(--space-md)" }}>
            {textures.map((t, i) => (
              <button
                key={t.label}
                onClick={t.action}
                onMouseEnter={() => setHovered("tex-" + i)}
                onMouseLeave={() => setHovered(null)}
                style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)", background: "transparent", border: "none", padding: 0, cursor: "pointer", textAlign: "center" }}
              >
                <div style={{
                  position: "relative", aspectRatio: "3/4", overflow: "hidden",
                  borderRadius: "var(--radius-lg)", background: "var(--paper-2)",
                  transform: hovered === "tex-" + i ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: hovered === "tex-" + i ? "var(--shadow-hover-card)" : "var(--shadow-sm)",
                  transition: "transform 220ms cubic-bezier(0.23,1,0.32,1), box-shadow 220ms ease",
                }}>
                  <img src={t.img} alt={t.label} loading="lazy"
                    style={{
                      position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
                      transform: hovered === "tex-" + i ? "scale(1.06)" : "scale(1)",
                      transition: "transform 520ms cubic-bezier(0.23,1,0.32,1)",
                    }}
                  />
                </div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".12em", color: "var(--ink-700)", textTransform: "uppercase", fontWeight: 500 }}>
                  {t.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>


      {/* ── 4 · TESTIMONIALS ──────────────────────────────────── */}
      <section style={{ background: "var(--white)", padding: "var(--space-section) 0" }}>
        <div className="shell">

          {/* Dark editorial banner */}
          <div style={{
            position: "relative", overflow: "hidden",
            borderRadius: "var(--radius-xl)",
            padding: "40px 56px", marginBottom: "var(--space-base)",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "linear-gradient(115deg, var(--green-900) 0%, #195E30 100%)",
          }}>
            <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1600&q=70" alt=""
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.22 }}
            />
            <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(14,42,32,.5) 0%, rgba(14,42,32,.82) 100%)" }} />

            <div style={{ position: "relative", textAlign: "center", maxWidth: 680 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-xs)", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".10em", color: "var(--gold-300)", textTransform: "uppercase", marginBottom: "var(--space-md)" }}>
                <span style={{ letterSpacing: "0.18em" }}>★★★★★</span>
                <span>· Loved by clients</span>
              </div>
              <h2 style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(32px, 3.8vw, 50px)", color: "var(--white)", letterSpacing: "-.01em", lineHeight: 1.1, margin: "0 0 var(--space-sm)" }}>
                Thousands of 5-star reviews
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,.75)", lineHeight: 1.6, margin: 0 }}>
                Real stories from people who found comfort, confidence and themselves again.
              </p>
            </div>
          </div>

          {/* Testimonial cards — design.md card-testimonial */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-md)" }}>
            {testimonials.map((r, i) => (
              <div
                key={r.name}
                className="card-testimonial"
              >
                {/* Star rating */}
                <div style={{ color: "var(--gold-300)", fontSize: 13, letterSpacing: "0.10em", marginBottom: "var(--space-md)" }}>★★★★★</div>

                {/* Quote — Instrument Serif italic */}
                <blockquote style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, fontSize: 15, lineHeight: 1.55, color: "var(--ink-700)", margin: 0, flex: 1 }}>
                  "{r.quote}"
                </blockquote>

                {/* Gold rule + Attribution */}
                <div style={{ marginTop: "var(--space-lg)", paddingTop: "var(--space-md)", borderTop: "1px solid rgba(20,32,27,.07)" }}>
                  <div style={{ width: 28, height: 1, background: "var(--gold-300)", marginBottom: "var(--space-sm)" }} />
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
                    <img src={r.avatar} alt={r.name} loading="lazy"
                      style={{ width: 34, height: 34, borderRadius: "var(--radius-full)", objectFit: "cover", flexShrink: 0 }}
                    />
                    <div>
                      <div style={{ fontSize: 13.5, fontWeight: 500, color: "var(--ink-900)", lineHeight: 1.3 }}>{r.name}</div>
                      <div style={{ fontSize: 11, fontFamily: "var(--mono)", letterSpacing: ".06em", textTransform: "uppercase", color: "var(--green-700)", fontWeight: 500, marginTop: 2 }}>{r.tag}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── 5 · VIRTUAL TRY-ON BANNER ─────────────────────────── */}
      <section style={{ background: "var(--paper)", padding: "var(--space-xxl) var(--space-lg)" }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          background: "radial-gradient(120% 140% at 0% 100%, #237156 0%, #1A5240 35%, #14402F 70%, var(--green-900) 100%)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden", position: "relative", height: 460,
        }}>

          {/* Dot texture */}
          <div aria-hidden style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(rgba(226,200,150,.16) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            maskImage: "radial-gradient(80% 100% at 30% 50%, transparent 20%, #000 70%)",
            WebkitMaskImage: "radial-gradient(80% 100% at 30% 50%, transparent 20%, #000 70%)",
            pointerEvents: "none",
          }} />
          {/* Gold glow */}
          <div aria-hidden style={{
            position: "absolute", top: -120, right: 80, width: 420, height: 420,
            background: "radial-gradient(circle, rgba(226,200,150,.22) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />

          {/* LEFT — copy */}
          <div style={{ position: "absolute", top: "50%", left: 64, transform: "translateY(-50%)", color: "var(--white)", maxWidth: 540, zIndex: 2 }}>
            <div style={{
              fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".14em",
              color: "var(--gold-300)", textTransform: "uppercase", marginBottom: "var(--space-md)",
              display: "inline-flex", alignItems: "center", gap: "var(--space-sm)",
            }}>
              <span style={{ width: 24, height: 1, background: "var(--gold-300)" }} />
              Powered by GlamAR
            </div>
            <h2 style={{
              fontFamily: "var(--serif)", fontWeight: 400,
              fontSize: "clamp(30px, 3.4vw, 44px)", lineHeight: 1.08,
              letterSpacing: "-.015em", margin: "0 0 var(--space-md)", color: "var(--white)",
            }}>
              Try any wig —{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold-300)" }}>right from your phone.</em>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,.75)", maxWidth: 440, margin: "0 0 var(--space-lg)" }}>
              Switch styles, lengths and colours in real time using our virtual try-on.
            </p>

            {/* Gold CTA — design.md: gold fill on dark surfaces */}
            <button
              style={{
                display: "inline-flex", alignItems: "center", gap: "var(--space-xs)",
                padding: "12px 24px", borderRadius: "var(--radius-full)",
                background: "var(--gold-300)", color: "var(--green-900)",
                fontSize: 13.5, fontWeight: 500, letterSpacing: "-.01em",
                border: "none", cursor: "pointer",
                boxShadow: "0 8px 20px -8px rgba(0,0,0,.35)",
                transition: "transform 160ms cubic-bezier(0.23,1,0.32,1), box-shadow 160ms ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}
              onMouseDown={e => { e.currentTarget.style.transform = "scale(0.97)"; }}
              onMouseUp={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
            >
              <Icon name="Camera" size={14} color="#14201B" />
              Launch virtual try-on
            </button>
          </div>

          {/* RIGHT — phone mockup */}
          <div style={{ position: "absolute", right: 80, bottom: -20, zIndex: 2 }}>
            <div aria-hidden style={{
              position: "absolute", left: "50%", bottom: 80, transform: "translateX(-50%)",
              width: 260, height: 26, background: "rgba(0,0,0,.45)", filter: "blur(26px)", borderRadius: "50%",
            }} />
            <div style={{
              width: 320, height: 600,
              background: "#0F1714", borderRadius: 42, padding: 9, position: "relative",
              boxShadow: "var(--shadow-lg), 0 0 0 1.5px rgba(255,255,255,.06) inset",
            }}>
              <div style={{ width: "100%", height: "100%", background: "var(--white)", borderRadius: 34, overflow: "hidden" }}>
                <img src="images/mobile VTO.png" alt="Virtual try-on preview"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
              </div>
              <div aria-hidden style={{
                position: "absolute", top: 16, left: "50%", transform: "translateX(-50%)",
                width: 84, height: 22, background: "#0F1714", borderRadius: 999, zIndex: 2,
              }} />
            </div>
          </div>

        </div>
      </section>


      {/* ── FLOATING CHAT BUTTON ─────────────────────────────── */}
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

window.WigsV2 = WigsV2;
