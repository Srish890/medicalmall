/* Shared homepage-section components — reused by Home V2 and other pages.
   The original standalone Homepage screen was removed; this file now only
   holds the two cross-page section components below. */
const { useState: useStateHome } = React;

/* ---- Find the Right Care — scroll-driven editorial ---- */
const FindTheRightCare = ({ navigate }) => {
  const items = [
    { key: "oncology", label: "Oncology",       desc: "Wigs, prosthetics, post-mastectomy bras and oncology-safe daily care — curated for every stage of recovery.", img: "images/happy patient.avif" },
    { key: "mother",   label: "Mother & Baby",  desc: "Pregnancy multivitamins, postpartum essentials and gentle baby care — from clinicians who've seen it all.",      img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1400&q=80" },
    { key: "physio",   label: "Physio & Rehab", desc: "Mobility aids, compression therapy and post-surgery recovery — fitted by our physiotherapists in person or online.", img: "images/physio main.avif" },
    { key: "skin",     label: "Skin Care",      desc: "Dermatologist-curated cleansers, serums and sun protection — formulated for sensitive, post-treatment and everyday skin.", img: "images/premium_photo-1684407616442-8d5a1b7c978e.avif" },
  ];
  const [active, setActive] = useStateHome(0);
  const wrapRef = React.useRef(null);

  React.useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const progress = Math.max(0, Math.min(0.9999, -rect.top / total));
      const idx = Math.min(items.length - 1, Math.floor(progress * items.length));
      setActive(idx);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={wrapRef} style={{ position: "relative", height: `${items.length * 220}vh`, background: "#0E1A14" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", background: "#0E1A14" }}>
        {/* image stack */}
        <div style={{ position: "absolute", inset: 0, transform: `translateY(-${active * 100}%)`, transition: "transform 900ms cubic-bezier(0.7,0,0.15,1)", willChange: "transform" }}>
          {items.map((it) => (
            <div key={it.key} style={{ height: "100vh", width: "100%", position: "relative" }}>
              <img src={it.img} alt={it.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(14,26,20,.05) 0%, rgba(14,26,20,.18) 40%, rgba(14,26,20,.78) 100%)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(14,26,20,.55) 0%, rgba(14,26,20,.05) 45%, rgba(14,26,20,0) 70%)" }} />
            </div>
          ))}
        </div>

        {/* top eyebrow */}
        <div style={{ position: "absolute", top: "10vh", left: "6vw", zIndex: 2 }}>
          <div style={{ fontFamily: "var(--sans)", fontSize: 13.5, fontWeight: 600, letterSpacing: ".10em", color: "rgba(255,255,255,.82)", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 28, height: 1, background: "#E2C896" }}/> Find the right care
          </div>
        </div>

        {/* left text — animates per slide */}
        <div style={{ position: "absolute", left: "6vw", bottom: "10vh", zIndex: 2, maxWidth: 620 }}>
          <h2 key={`t-${active}`} style={{
            fontSize: "clamp(40px, 5.6vw, 76px)", fontWeight: 500, color: "#fff",
            letterSpacing: "-.025em", lineHeight: 1.04, margin: 0,
            animation: "fadeUp .55s cubic-bezier(0.23,1,0.32,1) both"
          }}>{items[active].label}</h2>
          <p key={`d-${active}`} style={{
            fontSize: 17, color: "rgba(255,255,255,.82)", marginTop: 22,
            lineHeight: 1.55, maxWidth: 520,
            animation: "fadeUp .55s cubic-bezier(0.23,1,0.32,1) .08s both"
          }}>{items[active].desc}</p>
          <button key={`b-${active}`} onClick={() => navigate("oncology-v2")}
            onMouseEnter={e => e.currentTarget.style.background = "#e8e8e8"}
            onMouseLeave={e => e.currentTarget.style.background = "#fff"}
            style={{
              marginTop: 28, padding: "13px 24px", background: "#fff", color: "var(--ink-900)",
              borderRadius: 999, fontWeight: 500, fontSize: 14.5,
              display: "inline-flex", alignItems: "center", gap: 8,
              animation: "fadeUp .55s cubic-bezier(0.23,1,0.32,1) .16s both",
              cursor: "pointer", border: "none",
              transition: "background 160ms ease",
            }}>Explore {items[active].label.toLowerCase()} <Icon name="arrow-right" size={14} /></button>
        </div>

        {/* right numbered nav */}
        <div style={{ position: "absolute", right: "5vw", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: 4, zIndex: 2 }}>
          {items.map((it, i) => {
            const isActive = active === i;
            return (
              <button key={it.key} onClick={() => {
                const el = wrapRef.current;
                if (!el) return;
                const total = el.offsetHeight - window.innerHeight;
                const targetY = el.offsetTop + ((i + 0.05) / items.length) * total;
                window.scrollTo({ top: targetY, behavior: "smooth" });
              }} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                gap: 22, padding: "12px 0 12px 16px",
                background: "transparent", border: "none",
                borderLeft: isActive ? "1.5px solid #fff" : "1.5px solid rgba(255,255,255,.18)",
                color: isActive ? "#fff" : "rgba(255,255,255,.45)",
                transition: "all 280ms cubic-bezier(0.23,1,0.32,1)",
                cursor: "pointer", minWidth: 240, textAlign: "left"
              }}>
                <span style={{ fontSize: 16, fontWeight: isActive ? 500 : 400, letterSpacing: "-.005em" }}>{it.label}</span>
                <span style={{ fontFamily: "var(--mono)", fontSize: 13, letterSpacing: ".06em", opacity: isActive ? 1 : .8 }}>{String(i + 1).padStart(2, "0")}</span>
              </button>
            );
          })}
        </div>

        {/* scroll hint */}
        <div style={{ position: "absolute", bottom: 22, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, color: "rgba(255,255,255,.5)", fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: ".15em", textTransform: "uppercase", zIndex: 2 }}>
          <span>{String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
          <div style={{ width: 1, height: 22, background: "linear-gradient(180deg, rgba(255,255,255,.6), transparent)" }}/>
        </div>
      </div>
    </section>
  );
};

/* ---- Meet our Specialists — horizontal scroll, editorial cards ---- */
const MeetOurSpecialists = () => {
  const specialists = [
    { name: "Dr. Priya Ramanathan, MD",  role: "Head of Oncology",              tags: ["Breast cancer", "Post-treatment care"],   img: "images/Doc cutout/doctorcut1.webp", imgHeight: "108%", bio: "Oncologist with 22 years at Reliance Foundation, guiding women through recovery with quiet care." },
    { name: "Dr. Anjali Mehta, MBBS",    role: "Mother & Baby, Lead Clinician", tags: ["Pregnancy", "Postpartum"],                img: "images/Doc cutout/doccutout 3.png", imgHeight: "86%",  bio: "Obstetrician and lactation expert building gentle care plans from pregnancy to the first year." },
    { name: "Dr. Vikram Shah, DM",       role: "Head of Physio & Rehab",        tags: ["Mobility", "Post-surgery recovery"],      img: "images/Doc cutout/doctorcut1.webp", imgHeight: "108%", bio: "Two decades of rehab across orthopaedics and oncology, helping patients return to daily life." },
  ];
  const railRef = React.useRef(null);
  const scrollBy = (dir) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section style={{ background: "#FAF8F5", padding: "84px 0 88px", position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", top: -160, left: "10%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(226,200,150,.16) 0%, transparent 70%)" }} />

      <div className="shell" style={{ position: "relative" }}>
        {/* Header */}
        <div style={{ margin: "0 0 24px" }}>
          <div style={{ fontFamily: "var(--sans)", fontSize: 13.5, fontWeight: 600, letterSpacing: ".10em", color: "var(--green-700)", textTransform: "uppercase", marginBottom: 16, display: "inline-flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 24, height: 1, background: "#E2C896" }} /> Our specialists
          </div>
          <h2 style={{ fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 500, letterSpacing: "-.025em", margin: "0 0 14px", lineHeight: 1.1, color: "var(--ink-900)" }}>
            The best care, by <span className="italic-em">India's best clinicians</span>
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
            <p style={{ fontSize: 17, color: "var(--ink-500)", lineHeight: 1.6, margin: 0, maxWidth: 560 }}>
              Meet the team of leading specialists with decades of combined experience across oncology, mother &amp; baby, physiotherapy and skin care.
            </p>
            <div style={{ display: "flex", gap: 8, flexShrink: 0, marginLeft: "auto" }}>
              {[-1, 1].map((d) => (
                <button
                  key={d}
                  onClick={() => scrollBy(d)}
                  aria-label={d === -1 ? "Previous specialists" : "Next specialists"}
                  style={{
                    width: 44, height: 44, borderRadius: 999,
                    background: "#fff", border: "1px solid rgba(20,32,27,.10)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    color: "var(--ink-700)", cursor: "pointer",
                    transition: "background 160ms ease, border-color 160ms ease, color 160ms ease, transform 160ms cubic-bezier(0.23,1,0.32,1)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "rgba(37,141,72,.06)";
                    e.currentTarget.style.borderColor = "rgba(37,141,72,.30)";
                    e.currentTarget.style.color = "var(--green-700)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.borderColor = "rgba(20,32,27,.10)";
                    e.currentTarget.style.color = "var(--ink-700)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                  onMouseDown={e => { e.currentTarget.style.transform = "scale(0.97)"; }}
                  onMouseUp={e => { e.currentTarget.style.transform = "scale(1)"; }}
                >
                  <Icon name={d === -1 ? "arrow-left" : "arrow-right"} size={16} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Three equal-width specialist cards */}
        <div
          ref={railRef}
          className="specialists-rail"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 22,
          }}
        >
          {specialists.map((s) => (
            <article
              key={s.name}
              style={{ display: "flex", flexDirection: "column", gap: 18 }}
            >
              {/* Portrait card — cutout bleeds bottom-left, text anchored on the right */}
              <div
                style={{
                  position: "relative",
                  background: "var(--paper-2, #F4EFE6)",
                  borderRadius: 20,
                  height: 260,
                  border: "1px solid rgba(20,32,27,.05)",
                  overflow: "hidden",
                  display: "grid",
                  gridTemplateColumns: "44% 1fr",
                }}
              >
                {/* Image column — cutout pinned bottom-left, no padding on left/bottom */}
                <div style={{ position: "relative", height: "100%" }}>
                  <img
                    src={s.img}
                    alt={s.name}
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      height: s.imgHeight || "108%",
                      width: "100%",
                      objectFit: "contain",
                      objectPosition: "bottom left",
                      display: "block",
                      pointerEvents: "none",
                    }}
                  />
                </div>

                {/* Text column — vertically centered, never collides with the cutout */}
                <div style={{
                  paddingRight: 22,
                  paddingLeft: 8,
                  display: "flex", flexDirection: "column", justifyContent: "center", gap: 14,
                }}>
                  <div style={{ fontSize: 15.5, fontWeight: 600, lineHeight: 1.3, color: "var(--ink-900)", letterSpacing: "-.01em" }}>
                    {s.role}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {s.tags.map((tag) => (
                      <div key={tag} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span aria-hidden style={{ width: 3, height: 16, background: "#E2C896", borderRadius: 1, flexShrink: 0 }} />
                        <span style={{ fontSize: 13, color: "var(--ink-700)", lineHeight: 1.3 }}>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Caption below card */}
              <div style={{ padding: "0 4px" }}>
                <div style={{ fontSize: 17, fontWeight: 500, color: "var(--ink-900)", letterSpacing: "-.01em", marginBottom: 8 }}>
                  {s.name}
                </div>
                <p style={{ fontSize: 14.5, color: "var(--ink-500)", lineHeight: 1.6, margin: 0 }}>
                  {s.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
