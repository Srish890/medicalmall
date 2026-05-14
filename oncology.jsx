/* Oncology — L1 category page
   Reuses homepage design tokens, buttons, cards, spacing, and gradient banner.
   Sections: Hero · Subcategories · Trust & Care · Featured solutions · Support CTA */

const Oncology = ({ navigate }) => {
  const [hovered, setHovered] = React.useState(null);
  const [oncoTab, setOncoTab] = React.useState("wigs");
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const oncoTabs = [
    { k: "wigs",  l: "Hair wigs" },
    { k: "bras",  l: "Post-mastectomy bras" },
    { k: "forms", l: "Breast forms" },
    { k: "swim",  l: "Swim prosthesis" },
  ];

  const productsByTab = {
    wigs: [
      { img: "images/wigs/plpwig.png",                                                  hoverImg: "images/wavy.webp",          title: "Adira premium topper",     price: "₹4,800", old: "₹6,200", badge: "Featured", isCutout: false },
      { img: "images/wigs/96b2e5b9-0803-40a8-8252-d3adc67524a9.png",                                                           title: "Wavy lace-front · long",   price: "₹3,400",                                  isCutout: false },
      { img: "images/wigs/ce685f55-6a60-4357-9e06-f6ac359149ca.png",                                                           title: "Clip-in fringe topper",    price: "₹4,100",                badge: "New",     isCutout: false },
      { img: "images/wigs/plpwig.png",                                                                                         title: "Soft bob · natural black", price: "₹5,200",                                  isCutout: false },
    ],
    bras: [
      { img: "images/bra.jpg",                                                                title: "Soft-cup post-mastectomy bra",   price: "₹2,150", old: "₹2,800", badge: "Featured", isCutout: false },
      { img: "images/bra 2.jpg",                                                              title: "Wire-free cotton everyday bra",  price: "₹1,890",                                  isCutout: false },
      { img: "images/11485.jpg",                                                              title: "Pocket bra with form insert",    price: "₹2,640",                badge: "New",     isCutout: false },
    ],
    forms: [
      { img: "images/SPRING-SALE-DESKTOP-BLOCK-breast-form.png",                              title: "Silicone breast form · skin-matched", price: "₹5,400", old: "₹6,800", badge: "Featured", isCutout: false },
      { img: "images/11485.jpg",                                                              title: "Lightweight foam form",          price: "₹2,200",                                  isCutout: false },
      { img: "images/bra.jpg",                                                                title: "Adhesive partial form",          price: "₹3,100",                badge: "New",     isCutout: false },
    ],
    swim: [
      { img: "images/SPRING-SALE-DESKTOP-BLOCK-breast-form.png",                              title: "Aqua-safe swim prosthesis",      price: "₹4,200", old: "₹5,400", badge: "Featured", isCutout: false },
      { img: "images/bra 2.jpg",                                                              title: "Quick-dry mastectomy swimsuit",  price: "₹3,150",                                  isCutout: false },
      { img: "images/11485.jpg",                                                              title: "Chlorine-resistant pocket top",  price: "₹2,890",                                  isCutout: false },
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
      onClick: () => navigate("wigs"),
    },
    {
      key: "post-mastectomy-bras",
      stage: "Post-surgery comfort",
      label: "Post-mastectomy bras & camisoles",
      desc: "Wire-free, soft-cup styles designed to feel cotton-soft on healing skin. Front closures and drain pockets where you need them.",
      img: "images/bra 2.jpg",
      imgPosition: "center 30%",
      cta: "Shop bras & camisoles",
    },
    {
      key: "swim-prosthesis",
      stage: "Confidence in water",
      label: "Swim prosthesis",
      desc: "Lightweight, water-safe forms shaped for the pool, the sea, and easy summer days. Quick-drying and chlorine-resistant.",
      img: "images/SPRING-SALE-DESKTOP-BLOCK-breast-form.png",
      cta: "Shop swim",
    },
  ];

  return (
    <div className="fade-in" style={{ background: "#fff" }}>

      {/* ───────── 1 · HERO ───────── */}
      <section style={{ position: "relative", height: "82vh", minHeight: 620, overflow: "hidden" }}>
        <img
          src="images/oncology-hero.jpg"
          alt="Woman in a head scarf, arms raised joyfully against a bright sky"
          loading="eager"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%", transform: "scale(1.28) translateX(9%)", transformOrigin: "center center", filter: "contrast(1.06) saturate(1.1) brightness(1.03)" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(105deg, rgba(14,42,32,.78) 0%, rgba(14,42,32,.50) 50%, rgba(14,42,32,.18) 100%)",
        }}/>

        <div className="shell" style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "rgba(255,255,255,.75)", marginBottom: 22 }}>
            <button onClick={() => navigate("home")} style={{ color: "rgba(255,255,255,.75)" }}>Home</button>
            <Icon name="chevron" size={10} color="rgba(255,255,255,.55)"/>
            <span style={{ color: "#fff" }}>Oncology</span>
          </div>

          <div style={{ maxWidth: 640 }}>
            <h1 style={{
              fontSize: "clamp(44px, 5.4vw, 72px)", fontWeight: 500,
              lineHeight: 1.05, letterSpacing: "-.025em",
              color: "#fff", margin: "0 0 20px",
              textShadow: "0 2px 24px rgba(0,0,0,.25)",
            }}>
              Care that holds you,<br/>
              <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 500, color: "#E2C896" }}>
                at every step
              </span>.
            </h1>

            <p style={{ fontSize: 17, color: "rgba(255,255,255,.70)", lineHeight: 1.65, margin: "0 0 32px", maxWidth: 500 }}>
              Comfort, dignity and confidence — through diagnosis, treatment and beyond.
              Curated with oncology specialists, delivered with quiet care.
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button className="btn btn-primary" style={{ fontSize: 14 }}>
                Shop oncology essentials
              </button>
              <button className="btn" style={{
                fontSize: 14, color: "#fff",
                border: "1.5px solid rgba(255,255,255,.35)",
                background: "rgba(255,255,255,.1)", backdropFilter: "blur(6px)",
              }}>
                <Icon name="phone" size={14} color="#fff"/> Talk to a care specialist
              </button>
            </div>
          </div>
        </div>

        {/* Trust strip — mirrors homepage */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          background: "rgba(10,22,16,.65)", backdropFilter: "blur(10px)",
          borderTop: "1px solid rgba(255,255,255,.1)",
        }}>
          <div className="shell" style={{ display: "flex", padding: "14px 0", justifyContent: "space-around" }}>
            {[
              { icon: "shield",      stat: "NABH",      label: "accredited care" },
              { icon: "stethoscope", stat: "60+",       label: "oncology specialists" },
              { icon: "heart",       stat: "Free",      label: "1:1 consults & fittings" },
              { icon: "truck",       stat: "Discreet",  label: "48-hour delivery" },
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Icon name={t.icon} size={16} color="#E2C896"/>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", lineHeight: 1 }}>{t.stat}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,.55)", marginTop: 2 }}>{t.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ───────── 2 · TOP SUBCATEGORIES — full-bleed editorial banners ───────── */}
      <section style={{ background: "#fff", padding: "96px 0 0" }}>
        {/* Section header (kept within shell) — no eyebrow, no italic */}
        <div className="shell" style={{ marginBottom: 48 }}>
          <div style={{ maxWidth: 720 }}>
            <h2 style={{ fontSize: "clamp(26px, 2.6vw, 36px)", fontWeight: 500, letterSpacing: "-.022em", margin: "0 0 12px", lineHeight: 1.15, color: "var(--ink-900)" }}>
              Find what feels right for today
            </h2>
            <p style={{ fontSize: 16, color: "var(--ink-500)", lineHeight: 1.6, margin: 0, maxWidth: 540 }}>
              Hand-picked for each stage of the journey. Take your time — there's no wrong place to start.
            </p>
          </div>
        </div>

        {/* Full-bleed alternating banners — break out of shell */}
        <div>
          {subcategories.map((c, i) => {
            const imageOnLeft = i % 2 === 0;
            const ImageSide = (
              <div style={{
                position: "relative", overflow: "hidden",
                background: "#1a221c",
                minHeight: 600,
              }}>
                <img
                  src={c.img}
                  alt={c.label}
                  style={{
                    position: "absolute", inset: 0, width: "100%", height: "100%",
                    objectFit: "cover", objectPosition: c.imgPosition || "center 22%",
                    display: "block",
                    transform: hovered === "sub-" + i ? "scale(1.04)" : "scale(1)",
                    transition: "transform 700ms cubic-bezier(0.23,1,0.32,1)",
                  }}
                />
              </div>
            );
            const TextSide = (
              <div style={{
                padding: "clamp(48px, 6vw, 96px) clamp(40px, 6vw, 96px)",
                display: "flex", flexDirection: "column", justifyContent: "center",
                background: i % 2 === 0 ? "#fff" : "#FAF8F5",
                minHeight: 600,
              }}>
                <div style={{
                  fontFamily: "var(--sans)", fontSize: 13.5, fontWeight: 600, letterSpacing: ".10em",
                  color: "var(--green-700)", textTransform: "uppercase", marginBottom: 22,
                  display: "inline-flex", alignItems: "center", gap: 10,
                }}>
                  <span style={{ width: 24, height: 1, background: "#E2C896" }} /> {c.stage}
                </div>
                <h3 style={{
                  fontSize: "clamp(26px, 2.5vw, 36px)", fontWeight: 500, letterSpacing: "-.022em",
                  lineHeight: 1.15, color: "var(--ink-900)", margin: "0 0 18px",
                  maxWidth: 520,
                }}>
                  {c.label}
                </h3>
                <p style={{
                  fontSize: 16, color: "var(--ink-500)", lineHeight: 1.6,
                  margin: "0 0 32px", maxWidth: 480,
                }}>
                  {c.desc}
                </p>
                <div>
                  <button
                    onClick={c.onClick}
                    className="btn btn-primary"
                    style={{ fontSize: 14, padding: "14px 24px" }}
                  >
                    {c.cta} <Icon name="arrow-right" size={14} color="#fff"/>
                  </button>
                </div>
              </div>
            );
            return (
              <div
                key={c.key}
                onMouseEnter={() => setHovered("sub-" + i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr",
                  width: "100%",
                }}
              >
                {imageOnLeft ? <>{ImageSide}{TextSide}</> : <>{TextSide}{ImageSide}</>}
              </div>
            );
          })}
        </div>
      </section>


      {/* ───────── 3 · DOCTORS' RECOMMENDATIONS — tabbed product listing (subcategories) ───────── */}
      <section style={{ background: "#FAF8F5", padding: "96px 0 100px", position: "relative" }}>
        <div aria-hidden style={{ position: "absolute", top: -80, right: "8%", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(226,200,150,.13) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="shell" style={{ position: "relative" }}>
          {/* Header */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: "clamp(26px, 2.6vw, 36px)", fontWeight: 500, letterSpacing: "-.022em", margin: 0, lineHeight: 1.15, color: "var(--ink-900)" }}>
              Doctors' recommendations
            </h2>
          </div>

          {/* Pill tabs + View all link */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 36, flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {oncoTabs.map((t) => {
                const isActive = oncoTab === t.k;
                return (
                  <button
                    key={t.k}
                    onClick={() => setOncoTab(t.k)}
                    style={{
                      padding: "9px 20px", borderRadius: 999,
                      background: isActive ? "#fff" : "transparent",
                      color: isActive ? "var(--green-800)" : "var(--ink-500)",
                      border: "1px solid " + (isActive ? "rgba(37,141,72,.30)" : "rgba(20,32,27,.10)"),
                      fontSize: 13.5, fontWeight: isActive ? 600 : 400,
                      transition: "all 160ms ease",
                      cursor: "pointer",
                    }}
                  >{t.l}</button>
                );
              })}
            </div>
            <a
              onClick={() => navigate("oncology-plp")}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 16, fontWeight: 500, color: "var(--green-700)", whiteSpace: "nowrap", cursor: "pointer" }}
            >
              View all <Icon name="arrow-right" size={16} />
            </a>
          </div>

          {/* Product cards — warm cream gradient, floating image, gold pill badge, hover lifestyle + quick view */}
          {(() => {
            const items = productsByTab[oncoTab] || [];
            return (
              <div style={{ display: "grid", gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: 16 }}>
                {items.map((p, idx) => {
                  const cardId = `${oncoTab}-${idx}`;
                  const isCardHovered = hoveredCard === cardId;
                  return (
                    <div
                      key={p.title + idx}
                      onClick={() => navigate("pdp")}
                      onMouseEnter={() => setHoveredCard(cardId)}
                      onMouseLeave={() => setHoveredCard(null)}
                      style={{
                        position: "relative",
                        borderRadius: 24,
                        overflow: "hidden",
                        cursor: "pointer",
                        background: "#fff",
                        border: "1px solid rgba(20,32,27,.06)",
                        minHeight: 460,
                        display: "flex",
                        flexDirection: "column",
                        transform: isCardHovered ? "translateY(-4px)" : "translateY(0)",
                        boxShadow: isCardHovered ? "0 24px 48px -16px rgba(20,32,27,.18), 0 4px 12px -4px rgba(20,32,27,.08)" : "0 1px 2px rgba(20,32,27,.03)",
                        transition: "transform 320ms cubic-bezier(0.23,1,0.32,1), box-shadow 320ms cubic-bezier(0.23,1,0.32,1)",
                      }}
                    >
                      {/* Top section — warm gradient with badge + floating image */}
                      <div style={{
                        position: "relative",
                        flex: 1,
                        background: "radial-gradient(120% 90% at 35% 25%, #F6EFE2 0%, #ECDFC4 65%, #D9C9A6 100%)",
                        padding: "20px 22px 24px",
                        display: "flex", flexDirection: "column",
                        overflow: "hidden",
                      }}>
                        {p.hoverImg && (
                          <img
                            src={p.hoverImg}
                            alt=""
                            aria-hidden
                            style={{
                              position: "absolute", inset: 0,
                              width: "100%", height: "100%",
                              objectFit: "cover",
                              opacity: isCardHovered ? 1 : 0,
                              transform: isCardHovered ? "scale(1)" : "scale(1.04)",
                              transition: "opacity 360ms cubic-bezier(0.23,1,0.32,1), transform 600ms cubic-bezier(0.23,1,0.32,1)",
                              zIndex: 1,
                              pointerEvents: "none",
                            }}
                          />
                        )}

                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", position: "relative", zIndex: 3 }}>
                          {p.badge && (
                            <span style={{
                              padding: "6px 13px", borderRadius: 999,
                              fontSize: 11.5, fontWeight: 600, letterSpacing: ".02em",
                              background: "#E2C896",
                              color: "#0E2A20",
                            }}>
                              {p.badge}
                            </span>
                          )}
                        </div>

                        {p.isCutout ? (
                          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", margin: "12px 0 8px", zIndex: 2, opacity: isCardHovered ? 0 : 1, transition: "opacity 280ms ease" }}>
                            <img
                              src={p.img}
                              alt={p.title}
                              style={{
                                maxWidth: "82%",
                                maxHeight: 240,
                                objectFit: "contain",
                                display: "block",
                                filter: "drop-shadow(0 18px 28px rgba(60,40,18,.22))",
                              }}
                            />
                            <div aria-hidden style={{
                              position: "absolute",
                              bottom: -2, left: "22%", right: "22%",
                              height: 14, borderRadius: "50%",
                              background: "radial-gradient(ellipse at center, rgba(60,40,18,.18) 0%, transparent 70%)",
                              filter: "blur(2px)",
                            }} />
                          </div>
                        ) : (
                          <img
                            src={p.img}
                            alt={p.title}
                            style={{
                              position: "absolute", inset: 0,
                              width: "100%", height: "100%",
                              objectFit: "cover",
                              display: "block",
                              zIndex: 0,
                              opacity: isCardHovered ? 0 : 1,
                              transition: "opacity 280ms ease",
                            }}
                          />
                        )}
                        {!p.isCutout && <div style={{ flex: 1 }} />}

                        {/* Quick view — slides up on hover */}
                        <div style={{
                          position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 14px",
                          transform: isCardHovered ? "translateY(0)" : "translateY(110%)",
                          transition: "transform 260ms cubic-bezier(0.23,1,0.32,1)",
                          zIndex: 4,
                          pointerEvents: isCardHovered ? "auto" : "none",
                        }}>
                          <button onClick={e => e.stopPropagation()} style={{
                            width: "100%", padding: "11px 0", borderRadius: 999,
                            background: "rgba(255,255,255,.92)", backdropFilter: "blur(8px)",
                            border: "1px solid rgba(20,32,27,.12)",
                            fontSize: 13, fontWeight: 600, color: "var(--ink-900)",
                            display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
                            cursor: "pointer",
                          }}>
                            <Icon name="eye" size={14} color="var(--ink-700)" /> Quick view
                          </button>
                        </div>
                      </div>

                      {/* Bottom text section */}
                      <div style={{ background: "#fff", padding: "18px 22px 20px" }}>
                        <div style={{
                          fontSize: 15.5, fontWeight: 500,
                          color: "var(--ink-900)",
                          letterSpacing: "-.008em",
                          lineHeight: 1.35,
                          marginBottom: 4,
                        }}>
                          {p.title}
                        </div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: 7 }}>
                          <span style={{ fontSize: 13.5, fontWeight: 500, color: "var(--ink-700)", letterSpacing: "-.005em" }}>{p.price}</span>
                          {p.old && <span style={{ fontSize: 12, color: "var(--ink-400)", textDecoration: "line-through" }}>{p.old}</span>}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>
      </section>


      {/* ───────── 3.5 · SEASONAL OFFERS — full-bleed end-to-end 3-tile strip, no heading ───────── */}
      <section style={{ width: "100%", overflow: "hidden", background: "#FAF8F5" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", height: 360, lineHeight: 0 }}>
          {[
            { img: "images/Straight.jpg.webp",                eyebrow: "Human Hair Wigs",  label: "SAVE UP TO 40% OFF", pos: "center 20%",  key: "onc-promo-0", action: () => navigate("wigs") },
            { img: "images/bra.jpg",                          eyebrow: "Post-mastectomy",  label: "SAVE UP TO 30% OFF", pos: "center 8%",   key: "onc-promo-1", action: () => navigate("oncology-plp") },
            { img: "images/SPRING-SALE-DESKTOP-BLOCK-breast-form.png", eyebrow: "Breast Forms", label: "SAVE UP TO 20% OFF", pos: "center center", key: "onc-promo-2", action: () => navigate("oncology-plp") },
          ].map((tile) => (
            <div
              key={tile.key}
              onClick={tile.action}
              onMouseEnter={() => setHovered(tile.key)}
              onMouseLeave={() => setHovered(null)}
              style={{ position: "relative", overflow: "hidden", cursor: "pointer" }}
            >
              <img
                src={tile.img} alt={tile.eyebrow}
                style={{
                  width: "100%", height: "100%", objectFit: "cover", objectPosition: tile.pos, display: "block",
                  transform: hovered === tile.key ? "scale(1.05)" : "scale(1)",
                  transition: "transform 600ms cubic-bezier(0.23,1,0.32,1)",
                }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(14,42,32,.82) 0%, rgba(14,42,32,.12) 55%, transparent 100%)",
              }}/>
              <div style={{
                position: "absolute", inset: 0,
                boxShadow: hovered === tile.key ? "inset 0 0 0 3px rgba(226,200,150,.5)" : "inset 0 0 0 0px rgba(226,200,150,0)",
                transition: "box-shadow 200ms ease",
              }}/>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 28px", lineHeight: 1 }}>
                <div style={{
                  fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".12em",
                  color: "#E2C896", textTransform: "uppercase", marginBottom: 10,
                }}>
                  {tile.eyebrow}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: "-.015em" }}>{tile.label}</div>
                  <div style={{
                    opacity: hovered === tile.key ? 1 : 0,
                    transform: hovered === tile.key ? "translateX(0)" : "translateX(6px)",
                    transition: "opacity 200ms ease, transform 200ms ease",
                  }}>
                    <Icon name="arrow-right" size={16} color="#fff"/>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

window.Oncology = Oncology;
