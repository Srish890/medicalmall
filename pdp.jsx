/* PDP — Hair Wigs */
const { useState: useStatePDP } = React;

const PDP = ({ navigate }) => {
  const [type, setType] = useStatePDP("ready"); // kept for CTA price logic, selector UI removed
  const [variant, setVariant] = useStatePDP(0);
  const [length, setLength] = useStatePDP('12"');
  const [color, setColor] = useStatePDP("Natural Black");
  const [tab, setTab] = useStatePDP("description");
  const [tryOn, setTryOn] = useStatePDP(false);
  const [hoveredCard, setHoveredCard] = useStatePDP(null);

  return (
    <div className="fade-in" style={{ background: "#fff" }}>
      {/* breadcrumb */}
      <div className="shell" style={{ padding: "20px 32px 0", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 12.5, color: "var(--ink-500)" }}>
          <button onClick={() => navigate("home")} style={{ color: "var(--ink-500)" }}>Home</button>
          <Icon name="chevron" size={10} />
          <button onClick={() => navigate("oncology")} style={{ color: "var(--ink-500)" }}>Oncology</button>
          <Icon name="chevron" size={10} />
          <button onClick={() => navigate("oncology-plp")} style={{ color: "var(--ink-500)" }}>Human Hair Wigs</button>
          <Icon name="chevron" size={10} />
          <span style={{ color: "var(--ink-900)" }}>Women Adira premium wig</span>
        </div>
      </div>

      {/* HERO PRODUCT */}
      <section style={{ padding: "24px 0 32px" }}>
        <div className="shell">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "flex-start" }}>
            {/* gallery */}
            <div>
              <div style={{ position: "relative", borderRadius: 22, overflow: "hidden", background: "#F5F5F2", height: 600 }}>
                <img src="images/wig-pdp.webp" alt='Women Adira premium wig' style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%" }} />
                {/* corner badges */}
                <div style={{ position: "absolute", top: 18, left: 18, display: "flex", gap: 8 }}>
                  <span className="pill gold"><Icon name="ribbon" size={12} /> Oncology-approved</span>
                  <span className="pill"><Icon name="shield" size={12} /> 100% real hair</span>
                </div>
                {/* try-on FAB */}
                <button onClick={() => setTryOn(true)} style={{
                  position: "absolute", bottom: 24, right: 24,
                  background: "var(--green-800)", color: "#F4EFE6",
                  padding: "14px 22px", borderRadius: 999,
                  display: "inline-flex", alignItems: "center", gap: 10,
                  boxShadow: "0 14px 30px -10px rgba(20,32,27,.4)",
                  fontWeight: 500, fontSize: 14
                }}>
                  <Icon name="sparkle" size={16} color="#E2C896" /> Try on
                </button>
                {/* zoom controls */}
                <div style={{ position: "absolute", bottom: 24, left: 24, display: "flex", gap: 8 }}>
                  <button style={thumbBtn}><Icon name="play" size={14} /></button>
                </div>
              </div>
              {/* thumbnails */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10, marginTop: 12 }}>
                {[0, 1, 2, 3, 4].map((i) =>
                <button key={i} onClick={() => setVariant(i)} style={{
                  height: 96, borderRadius: 12,
                  border: variant === i ? "2px solid var(--green-700)" : "2px solid transparent",
                  overflow: "hidden", padding: 0
                }}>
                    <img src={["images/wig-pdp.webp", "images/hair blonde 1.png", "images/Straight.jpg.webp", "images/wavy.webp", "images/wig-1.png"][i]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </button>
                )}
              </div>
              {/* sensitivity strip */}
              <div style={{ marginTop: 22, padding: 18, borderRadius: 14, background: "var(--rose-100)", display: "flex", gap: 14, border: "1px solid rgba(181,104,94,.18)" }}>
                <div style={{ width: 36, height: 36, borderRadius: 999, background: "var(--white)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="heart" size={17} color="var(--rose-500)" />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "var(--ink-900)" }}>If hair loss feels overwhelming today, that's okay.</div>
                  <div style={{ fontSize: 13, color: "var(--ink-700)", marginTop: 4, lineHeight: 1.5 }}>
                    Our hair specialist Sneha is on call. No selling — just a conversation, in your language, in your time.
                    <button style={{ color: "var(--rose-500)", fontWeight: 500, marginLeft: 6 }}>Talk to Sneha →</button>
                  </div>
                </div>
              </div>
            </div>

            {/* product details column */}
            <div style={{ minWidth: 0 }}>
              <h1 style={{ fontSize: 38, lineHeight: 1.05, fontWeight: 700, letterSpacing: "-.025em", color: "var(--ink-900)" }}>Women Adira premium wig</h1>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 14 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <Icon name="star" size={16} color="#F4B400" fill="#F4B400" stroke={1.4} />
                  <span style={{ fontSize: 13, color: "var(--ink-900)", fontWeight: 600 }}>4.9</span>
                </div>
                <span style={{ fontSize: 13, color: "var(--ink-500)" }}>1,240 patient stories</span>
                <span style={{ width: 4, height: 4, borderRadius: 999, background: "var(--ink-300)" }} />
                <span style={{ fontSize: 13, color: "var(--green-700)", fontWeight: 500, display: "inline-flex", gap: 4, alignItems: "center" }}>
                  <Icon name="check" size={13} /> Worn by 2,800+ patients
                </span>
              </div>

              {/* price */}
              <div style={{ marginTop: 28, display: "flex", alignItems: "baseline", gap: 12 }}>
                <span style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-.02em", color: "var(--ink-900)" }}>₹4,800</span>
                <span style={{ fontSize: 16, color: "var(--ink-400)", textDecoration: "line-through" }}>₹6,200</span>
                <span style={{ padding: "3px 10px", borderRadius: 999, background: "#FFEDD5", color: "#C2410C", fontSize: 12, fontWeight: 600, letterSpacing: ".02em" }}>23% OFF</span>
              </div>
              <div style={{ fontSize: 12, fontFamily: "var(--mono)", color: "var(--ink-500)", letterSpacing: ".04em", marginTop: 6 }}>SHIPS IN 48 HRS · INCLUSIVE OF ALL TAXES</div>

              {/* length */}
              <div style={{ marginTop: 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <span className="eyebrow" style={{ color: "var(--ink-700)", fontSize: "13px" }}>Length</span>
                  <span style={{ color: "var(--ink-500)", fontSize: "12px" }}>Selected: <strong style={{ color: "var(--ink-900)", fontSize: "12.512px" }}>{length}</strong></span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
                  {['8"', '12"', '16"', '20"'].map((l) =>
                  <button key={l} onClick={() => setLength(l)} style={{
                    padding: "10px 12px", borderRadius: 10, fontSize: 13,
                    background: length === l ? "var(--green-50)" : "var(--white)",
                    border: length === l ? "1.5px solid var(--green-700)" : "1px solid rgba(20,32,27,.1)",
                    color: length === l ? "var(--green-800)" : "var(--ink-700)",
                    fontWeight: length === l ? 500 : 400
                  }}>{l}</button>
                  )}
                </div>
              </div>

              {/* color */}
              <div style={{ marginTop: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <span className="eyebrow" style={{ color: "var(--ink-700)", fontSize: "13px" }}>Hair colour</span>
                  <span style={{ color: "var(--ink-500)", fontSize: "12px" }}>Selected: <strong style={{ color: "var(--ink-900)", fontSize: "12px" }}>{color}</strong></span>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  {[
                  { n: "Natural Black", c: "#1a1410" },
                  { n: "Espresso", c: "#3d2820" },
                  { n: "Warm Brown", c: "#5d3a26" },
                  { n: "Honey", c: "#8a5a36" },
                  { n: "Salt & Pepper", c: "linear-gradient(135deg, #2a2424 50%, #c8c2bc 50%)" },
                  { n: "Silver Grey", c: "#9a9590" }].
                  map((s) =>
                  <button key={s.n} onClick={() => setColor(s.n)} style={{
                    width: 44, height: 44, borderRadius: 999,
                    background: s.c,
                    border: color === s.n ? "2px solid var(--green-700)" : "2px solid var(--white)",
                    boxShadow: color === s.n ? "0 0 0 2px var(--green-700)" : "0 0 0 1px rgba(20,32,27,.12)"
                  }} title={s.n} />
                  )}
                </div>
              </div>

              {/* try-on prompt */}
              <button onClick={() => setTryOn(true)} style={{
                marginTop: 28, width: "100%",
                background: "#FAFAF8", border: "1px dashed rgba(20,32,27,.2)",
                padding: 18, borderRadius: 16, display: "flex", alignItems: "center", gap: 14, textAlign: "left"
              }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--green-700)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="sparkle" size={20} color="#E2C896" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14.5, fontWeight: 500 }}>See it on you - privately.</div>
                  <div style={{ fontSize: 13, color: "var(--ink-500)", marginTop: 2 }}>Upload one photo. Try every length and colour. Nothing is saved on our servers - your photo never leaves your device.

                  </div>
                </div>
                <Icon name="arrow-right" size={18} color="var(--ink-700)" />
              </button>

              {/* CTA row */}
              <div style={{ marginTop: 28, display: "flex", gap: 12, alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", border: "1px solid rgba(20,32,27,.12)", borderRadius: 999, padding: 4 }}>
                  <button style={qtyBtn}><Icon name="minus" size={14} /></button>
                  <span style={{ width: 32, textAlign: "center", fontFamily: "var(--mono)", fontSize: 14 }}>1</span>
                  <button style={qtyBtn}><Icon name="plus" size={14} /></button>
                </div>
                <button onClick={() => {if (type === "custom") setTryOn(true);}} className="btn btn-primary" style={{ flex: 1, justifyContent: "center", padding: "14px 22px" }}>
                  <Icon name="cart" size={16} /> Add to cart · {type === "ready" ? "₹4,800" : "₹14,200"}
                </button>
                <button style={{ width: 50, height: 50, borderRadius: 999, border: "1px solid rgba(20,32,27,.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="heart" size={18} color="var(--ink-700)" />
                </button>
              </div>

              {/* trust strip */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 22 }}>
                {[
                { i: "shield", t: "Free private fitting at our hospital" },
                { i: "stethoscope", t: "Reviewed by oncology team" },
                { i: "lock", t: "Discreet packaging, always" },
                { i: "phone", t: "30-day care line for fit issues" }].
                map((t) =>
                <div key={t.t} style={{ display: "flex", gap: 10, alignItems: "center", padding: "10px 12px", background: "#FAFAF8", borderRadius: 10, border: "1px solid rgba(20,32,27,.06)" }}>
                    <Icon name={t.i} size={15} color="var(--green-700)" />
                    <span style={{ fontSize: 12.5, color: "var(--ink-700)" }}>{t.t}</span>
                  </div>
                )}
              </div>

              {/* OFFERS — single coupon visible, horizontal scroll */}
              <div style={{ marginTop: 22 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                    <Icon name="ribbon" size={14} color="var(--green-700)" />
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-900)", letterSpacing: "-.005em" }}>Available offers</span>
                    <span style={{ fontSize: 11.5, color: "var(--ink-400)" }}>· 6 offers</span>
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button onClick={() => {const el = document.getElementById("offerScroll");el && el.scrollBy({ left: -el.clientWidth, behavior: "smooth" });}}
                    style={{ width: 28, height: 28, borderRadius: 999, border: "1px solid rgba(20,32,27,.12)", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon name="arrow-left" size={12} color="var(--ink-700)" />
                    </button>
                    <button onClick={() => {const el = document.getElementById("offerScroll");el && el.scrollBy({ left: el.clientWidth, behavior: "smooth" });}}
                    style={{ width: 28, height: 28, borderRadius: 999, border: "1px solid rgba(20,32,27,.12)", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon name="arrow-right" size={12} color="var(--ink-700)" />
                    </button>
                  </div>
                </div>
                <div id="offerScroll" className="no-scrollbar" style={{ display: "flex", gap: 0, overflowX: "auto", scrollBehavior: "smooth", scrollSnapType: "x mandatory", width: "100%", maxWidth: "100%" }}>
                  {[
                  { tag: "First-time", code: "CARE100", title: "₹500 off your first wig", sub: "Min order ₹3,000", color: "var(--green-700)", bg: "var(--green-50)", icon: "sparkle" },
                  { tag: "HDFC Bank", code: "HDFC10", title: "10% instant discount", sub: "Up to ₹1,500 · Credit cards", color: "#0046AD", bg: "#EAF1FA", icon: "shield" },
                  { tag: "ICICI Bank", code: "ICICI750", title: "₹750 off on EMI", sub: "3, 6, 9 month tenures", color: "#A6232A", bg: "#FBEBEC", icon: "shield" },
                  { tag: "Care Credit", code: "AUTO", title: "No-cost EMI on care plans", sub: "Auto-applied at checkout", color: "#8a6a2a", bg: "#F6EBD3", icon: "ribbon" },
                  { tag: "Survivor", code: "STRONG20", title: "20% off — survivor program", sub: "Verify with onco team", color: "var(--rose-500)", bg: "var(--rose-100)", icon: "heart" },
                  { tag: "Free", code: "—", title: "Free private fitting", sub: "Auto-applied · 14 hospitals", color: "var(--ink-700)", bg: "#FAFAF8", icon: "stethoscope" }].
                  map((o) =>
                  <div key={o.code + o.title} style={{
                    flex: "0 0 100%",
                    scrollSnapAlign: "start",
                    borderRadius: 14,
                    border: "1px solid rgba(20,32,27,.08)",
                    background: "#fff",
                    padding: "14px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    position: "relative",
                    boxSizing: "border-box"
                  }}>
                      <span style={{ width: 38, height: 38, borderRadius: 10, background: o.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon name={o.icon} size={16} color={o.color} />
                      </span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                          <span style={{ fontSize: 10.5, fontWeight: 600, color: o.color, letterSpacing: ".05em", textTransform: "uppercase" }}>{o.tag}</span>
                          <span style={{ fontFamily: "var(--mono)", fontSize: 10.5, fontWeight: 600, color: "var(--ink-700)", letterSpacing: ".05em", padding: "1px 6px", border: "1px dashed rgba(20,32,27,.2)", borderRadius: 4 }}>{o.code}</span>
                        </div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: "var(--ink-900)", letterSpacing: "-.005em", lineHeight: 1.3 }}>{o.title}</div>
                        <div style={{ fontSize: 12, color: "var(--ink-500)", lineHeight: 1.4, marginTop: 1 }}>{o.sub}</div>
                      </div>
                      <button style={{ fontSize: 11.5, fontWeight: 600, color: "var(--green-700)", letterSpacing: ".02em", flexShrink: 0 }}>APPLY →</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS TABS */}
      <section style={{ padding: "56px 0 64px", background: "#FAF8F5" }}>
        <div className="shell">
          <div style={{ display: "flex", gap: 4, borderBottom: "1px solid rgba(20,32,27,.08)", marginBottom: 32 }}>
            {[
            { k: "description", l: "About this wig" },
            { k: "fit", l: "Sizing & fit" },
            { k: "care", l: "Care & maintenance" },
            { k: "stories", l: "Patient stories" },
            { k: "faq", l: "FAQ" }].
            map((t) =>
            <button key={t.k} onClick={() => setTab(t.k)} style={{
              padding: "14px 22px", fontSize: 14,
              fontWeight: tab === t.k ? 600 : 400,
              color: tab === t.k ? "var(--ink-900)" : "var(--ink-400)",
              borderBottom: tab === t.k ? "2px solid var(--green-700)" : "2px solid transparent",
              marginBottom: -1
            }}>{t.l}</button>
            )}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 60 }}>
            <div>
              {tab === "description" &&
              <>
                  <h3 style={{ marginBottom: 16, fontSize: 22, fontWeight: 700, letterSpacing: "-.018em", color: "var(--ink-900)" }}>Designed for the days that matter most.</h3>
                  <p className="lead" style={{ marginBottom: 20 }}>
                    Adira is hand-tied with breathable lace at the crown — for cool comfort during long chemotherapy days. The natural hairline is finished with baby hairs that move and fall like your own.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 28 }}>
                    {[
                  { h: "Made from", d: "Ethically sourced human hair · 100% remy", i: "spa" },
                  { h: "Cap construction", d: "Hand-tied lace front, monofilament top", i: "shield" },
                  { h: "Weight", d: "Featherlight — under 95g", i: "leaf" },
                  { h: "Skin contact", d: "Hypoallergenic, dermatologist-tested", i: "heart" }].
                  map((s) =>
                  <div key={s.h} style={{ padding: 18, background: "var(--paper)", borderRadius: 14, border: "1px solid rgba(20,32,27,.06)" }}>
                        <div style={{ width: 36, height: 36, borderRadius: 9, background: "var(--green-50)", border: "1px solid var(--green-100)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Icon name={s.i} size={16} color="var(--green-700)" />
                        </div>
                        <div style={{ fontSize: 13, fontWeight: 600, marginTop: 12, color: "var(--ink-900)" }}>{s.h}</div>
                        <div style={{ fontSize: 12.5, color: "var(--ink-500)", marginTop: 2, lineHeight: 1.5 }}>{s.d}</div>
                      </div>
                  )}
                  </div>
                </>
              }
              {tab === "fit" &&
              <>
                  <h3 style={{ marginBottom: 16, fontSize: 22, fontWeight: 700, letterSpacing: "-.018em", color: "var(--ink-900)" }}>Three ways to get the fit right.</h3>
                  <ol style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                    {[
                  { n: "01", h: "Virtual try-on with sizing guide", d: "Our AR tool measures your head circumference from a photo — no tape needed." },
                  { n: "02", h: "In-hospital fitting (free)", d: "Visit any of our 14 partner hospitals for a private 1:1 with our hair specialist." },
                  { n: "03", h: "Home fitting kit", d: "We ship 3 sizes for ₹100 (refunded). Try at home, send back the rest." }].
                  map((s) =>
                  <li key={s.n} style={{ display: "flex", gap: 18, padding: 18, background: "#FAFAF8", borderRadius: 14 }}>
                        <span style={{ fontFamily: "var(--mono)", fontSize: 24, color: "var(--green-700)" }}>{s.n}</span>
                        <div>
                          <div style={{ fontSize: 15.5, fontWeight: 500, letterSpacing: "-.005em" }}>{s.h}</div>
                          <div style={{ fontSize: 13.5, color: "var(--ink-500)", marginTop: 4, lineHeight: 1.55 }}>{s.d}</div>
                        </div>
                      </li>
                  )}
                  </ol>
                </>
              }
              {tab === "care" &&
              <>
                  <h3 style={{ marginBottom: 16, fontSize: 22, fontWeight: 700, letterSpacing: "-.018em", color: "var(--ink-900)" }}>Easy care for everyday wear.</h3>
                  <p style={{ fontSize: 14.5, color: "var(--ink-500)", lineHeight: 1.6 }}>
                    Wash every 8–10 wears with our oncology-safe wig shampoo. Air-dry on a stand — never wring. We send a free care kit with every wig, and our hair specialist runs a 20-minute video session before your first wear.
                  </p>
                </>
              }
              {tab === "stories" &&
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {[
                { name: "Anita", age: 47, q: "I cried the first time I put it on. Then I forgot I was wearing it.", journey: "Stage II breast cancer · 2024" },
                { name: "Reema", age: 38, q: "The custom fitting was at our hospital. Quiet room, just me and Sneha. I felt cared for, not sold to.", journey: "Lymphoma · 2025" }].
                map((s) =>
                <div key={s.name} style={{ padding: 22, borderRadius: 16, background: "#FAFAF8", border: "1px solid rgba(20,32,27,.06)" }}>
                      <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 21, lineHeight: 1.4, color: "var(--ink-900)", margin: 0 }}>"{s.q}"</p>
                      <div style={{ marginTop: 14, fontSize: 13, color: "var(--ink-500)" }}>{s.name}, {s.age} — {s.journey}</div>
                    </div>
                )}
                </div>
              }
              {tab === "faq" &&
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                "Will it look natural at the hairline?",
                "Can I wear it during chemotherapy?",
                "Do you ship discreetly?",
                "What if it doesn't fit?",
                "Is it heat-styleable?"].
                map((q) =>
                <div key={q} style={{ display: "flex", justifyContent: "space-between", padding: "16px 18px", background: "#FAFAF8", borderRadius: 12, border: "1px solid rgba(20,32,27,.06)", alignItems: "center" }}>
                      <span style={{ fontSize: 14.5 }}>{q}</span>
                      <Icon name="plus" size={16} color="var(--ink-500)" />
                    </div>
                )}
                </div>
              }
            </div>
            {/* sidebar — doctor validation + journey */}
            <div>
              <div style={{ background: "var(--green-50)", color: "var(--ink-900)", padding: 28, borderRadius: 18, border: "1px solid var(--green-100)" }}>
                <div className="eyebrow" style={{ color: "var(--green-700)" }}>From our oncology team</div>
                <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 21, lineHeight: 1.4, marginTop: 14 }}>
                  "We chose Adira after testing 14 brands. The skin contact alone matters — many wigs irritate scalps that are already sensitive."
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 22 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 999, background: "rgba(20,32,27,.08)" }} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>Dr. Priya Iyer</div>
                    <div style={{ fontSize: 12.5, color: "var(--ink-500)" }}>Onco-rehabilitation lead</div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 18, padding: 24, background: "var(--white)", borderRadius: 18, border: "1px solid rgba(20,32,27,.07)" }}>
                <div className="eyebrow">In your kit, free</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "14px 0 0", display: "flex", flexDirection: "column", gap: 10 }}>
                  {["Onco-safe wig shampoo (60ml)", "Soft-bristle detangling brush", "Wig stand (collapsible)", "Care guide (printed + digital)", "20-min video session with Sneha"].map((t) =>
                  <li key={t} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 13.5 }}>
                      <Icon name="check" size={14} color="var(--green-700)" /> {t}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLEMENTARY CARE */}
      <section style={{ padding: "56px 0 72px", background: "#fff" }}>
        <div className="shell">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 32 }}>
            <div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 13, letterSpacing: ".1em", color: "var(--green-700)", textTransform: "uppercase", marginBottom: 8 }}>Complete your care</div>
              <h2 style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-.02em", margin: 0 }}>The full hair-recovery kit.</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {[
            { brand: "Medical Mall", title: "Onco-safe shampoo", price: "₹420", old: "₹540", offer: 22, rating: 4.6, reviews: 38, img: "images/cream.jpg" },
            { brand: "Medical Mall", title: "Silk-lined sleep cap", price: "₹780", old: "₹920", offer: 15, rating: 4.8, reviews: 54, img: "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?w=600&q=80" },
            { brand: "Medical Mall", title: "Bamboo headscarf set", price: "₹1,290", old: "₹1,520", offer: 15, rating: 4.7, reviews: 29, img: "https://images.unsplash.com/photo-1556228852-80b6e5eeff06?w=600&q=80" },
            { brand: "Medical Mall", title: "Wig care travel kit", price: "₹890", old: "₹1,050", offer: 15, rating: 4.5, reviews: 41, img: "images/wig-pdp.webp" }].
            map((p, i) => {
              const cardKey = `comp-${i}`;
              const isHovered = hoveredCard === cardKey;
              return (
                <div key={cardKey}
                  onMouseEnter={() => setHoveredCard(cardKey)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    background: "#FAF8F5", borderRadius: 14, overflow: "hidden",
                    border: "1px solid rgba(20,32,27,.07)",
                    boxShadow: isHovered ? "0 16px 36px -12px rgba(20,32,27,.15)" : "none",
                    transform: isHovered ? "translateY(-3px)" : "translateY(0)",
                    transition: "box-shadow 200ms ease, transform 180ms ease",
                    cursor: "pointer",
                  }}>
                  <div style={{ position: "relative", height: 260, background: "#fff", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 10, left: 10, zIndex: 2, display: "flex", gap: 6, flexWrap: "wrap" }}>
                      <span style={{ background: "#FFEDD5", color: "#C2410C", padding: "4px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: ".02em" }}>{p.offer}% OFF</span>
                    </div>
                    <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 400ms ease", transform: isHovered ? "scale(1.04)" : "scale(1)" }} />
                    <div style={{
                      position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 14px",
                      transform: isHovered ? "translateY(0)" : "translateY(100%)",
                      transition: "transform 220ms cubic-bezier(0.23,1,0.32,1)",
                    }}>
                      <button style={{
                        width: "100%", padding: "10px 0", borderRadius: 999,
                        background: "rgba(255,255,255,.92)", backdropFilter: "blur(8px)",
                        border: "1px solid rgba(20,32,27,.10)", fontSize: 13, fontWeight: 600,
                        color: "var(--ink-900)", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, cursor: "pointer",
                      }}>
                        <Icon name="search" size={13} /> Quick view
                      </button>
                    </div>
                  </div>
                  <div style={{ padding: "16px 18px 20px" }}>
                    <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--green-700)", marginBottom: 4 }}>{p.brand}</div>
                    <div style={{ fontSize: 14.5, fontWeight: 600, letterSpacing: "-.01em", lineHeight: 1.35, color: "var(--ink-900)", marginBottom: 8 }}>{p.title}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 10 }}>
                      {[1,2,3,4,5].map(s => (
                        <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill={s <= Math.round(p.rating) ? "#F59E0B" : "#E5E7EB"}>
                          <path d="M6 1l1.545 3.09L11 4.635l-2.5 2.41.59 3.41L6 8.77l-3.09 1.685.59-3.41L1 4.635l3.455-.545z"/>
                        </svg>
                      ))}
                      <span style={{ fontSize: 11, color: "var(--ink-400)", marginLeft: 2 }}>({p.reviews})</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 7 }}>
                      <span style={{ fontSize: 16, fontWeight: 700, color: "var(--ink-900)" }}>{p.price}</span>
                      <span style={{ fontSize: 12, color: "var(--ink-400)", textDecoration: "line-through" }}>{p.old}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VIRTUAL TRY-ON MODAL */}
      {tryOn && <TryOnModal onClose={() => setTryOn(false)} length={length} color={color} type={type} />}

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
    </div>);

};

const qtyBtn = { width: 36, height: 36, borderRadius: 999, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--ink-700)" };
const thumbBtn = { width: 40, height: 40, borderRadius: 999, background: "rgba(250,247,242,.92)", color: "var(--ink-900)", display: "flex", alignItems: "center", justifyContent: "center" };

/* Try-on modal — GlamAR-style flow
   Steps: entry → scan → scanning → countdown → preview → result
   - scanning: corner-bracket camera frame (auto-advances after 2s)
   - countdown: green frame with 3-2-1 (auto-advances on 0)
   - preview: full photo with Retake / Confirm
   - result: try-on workspace with wig selector + PDP-style CTA row */
const TryOnModal = ({ onClose }) => {
  const [step, setStep] = useStatePDP("entry");
  const [count, setCount] = useStatePDP(3);

  // scanning → countdown after 2s
  React.useEffect(() => {
    if (step !== "scanning") return;
    const t = setTimeout(() => setStep("countdown"), 2000);
    return () => clearTimeout(t);
  }, [step]);

  // countdown 3 → 2 → 1 → preview, total 3s
  React.useEffect(() => {
    if (step !== "countdown") return;
    setCount(3);
    const ts = [
      setTimeout(() => setCount(2), 1000),
      setTimeout(() => setCount(1), 2000),
      setTimeout(() => setStep("preview"), 3000),
    ];
    return () => ts.forEach(clearTimeout);
  }, [step]);

  const isInstructionStep = step === "entry" || step === "scan";
  const isCameraStep = step === "scanning" || step === "countdown" || step === "preview";

  // Modal sizing per step
  const widthByStep = {
    entry:     "min(940px, 96vw)",
    scan:      "min(620px, 96vw)",
    scanning:  "min(900px, 96vw)",
    countdown: "min(900px, 96vw)",
    preview:   "min(900px, 96vw)",
    result:    "min(1100px, 96vw)",
  };

  const goBack = () => {
    if (step === "scan")      setStep("entry");
    else if (step === "scanning" || step === "countdown") setStep("scan");
    else if (step === "preview")  setStep("scanning");
    else if (step === "result")   setStep("preview");
  };

  return (
    <div onClick={e => e.target === e.currentTarget && onClose()} style={{
      position: "fixed", inset: 0, zIndex: 100,
      background: "rgba(20,32,27,.45)",
      backdropFilter: "blur(6px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 24,
    }}>
      <div style={{
        width: widthByStep[step],
        maxHeight: "92vh",
        background: "#FFFFFF",
        borderRadius: 18,
        boxShadow: "0 40px 80px -20px rgba(20,32,27,.30), 0 4px 12px -4px rgba(20,32,27,.10)",
        animation: "tryOnEnter .22s cubic-bezier(0.23,1,0.32,1)",
        display: "flex", flexDirection: "column",
        overflow: "hidden",
        transition: "width 320ms cubic-bezier(0.23,1,0.32,1)",
      }}>

        {/* ── HEADER (white) ── */}
        <div style={{
          padding: "14px 18px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexShrink: 0,
        }}>
          {/* Left: back arrow on non-entry steps */}
          {step !== "entry" ? (
            <button onClick={goBack} aria-label="Back" style={iconBtnStyle}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(20,32,27,.06)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <Icon name="arrow-left" size={18} color="#1F1F1F" stroke={1.6} />
            </button>
          ) : <span />}

          {/* Right: close only */}
          <button onClick={onClose} aria-label="Close" style={iconBtnStyle}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(20,32,27,.06)"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            <Icon name="x" size={18} color="#1F1F1F" stroke={1.5} />
          </button>
        </div>

        {/* ── BODY ── */}
        <div style={{
          flex: 1, minHeight: 0,
          background: isInstructionStep ? "#F4F4F4" : "#FFFFFF",
          padding: isInstructionStep ? "0 20px 16px" : 0,
          overflowY: "auto",
          display: "flex", flexDirection: "column",
        }}>
          {/* Instruction-step body (entry/scan) */}
          {isInstructionStep && (
            <>
              <div style={{
                position: "relative", flex: 1,
                display: "flex", alignItems: "center", justifyContent: "center",
                minHeight: step === "scan" ? 480 : 440,
              }}>
                <div style={{
                  width: "100%",
                  opacity: step === "entry" ? 1 : 0,
                  pointerEvents: step === "entry" ? "auto" : "none",
                  transition: "opacity 280ms cubic-bezier(0.23,1,0.32,1)",
                  position: step === "entry" ? "relative" : "absolute",
                  inset: step === "entry" ? "auto" : 0,
                }}>
                  {step === "entry" && <TryOnEntry onContinue={() => setStep("scan")} />}
                </div>
                <div style={{
                  width: "100%",
                  opacity: step === "scan" ? 1 : 0,
                  pointerEvents: step === "scan" ? "auto" : "none",
                  transition: "opacity 280ms cubic-bezier(0.23,1,0.32,1)",
                  position: step === "scan" ? "relative" : "absolute",
                  inset: step === "scan" ? "auto" : 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {step === "scan" && <TryOnScan onStart={() => setStep("scanning")} />}
                </div>
              </div>
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                paddingTop: 18, paddingBottom: 4,
                fontSize: 14, color: "#1F1F1F",
              }}>
                <span>Powered by</span>
                <GlamARLogo />
              </div>
            </>
          )}

          {/* Camera-step body (scanning/countdown/preview) */}
          {isCameraStep && (
            <div style={{ position: "relative", flex: 1, minHeight: 480, display: "flex", flexDirection: "column" }}>
              {step === "scanning"  && <TryOnScanning />}
              {step === "countdown" && <TryOnCountdown count={count} />}
              {step === "preview"   && <TryOnPreview onRetake={() => setStep("scanning")} onConfirm={() => setStep("result")} />}
            </div>
          )}

          {/* Result-step body */}
          {step === "result" && (
            <TryOnResult />
          )}
        </div>

      </div>
    </div>
  );
};

const iconBtnStyle = {
  width: 32, height: 32, borderRadius: 8,
  display: "flex", alignItems: "center", justifyContent: "center",
  transition: "background 160ms ease",
};

/* ── State 1: two-column entry ── */
const TryOnEntry = ({ onContinue }) => {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "minmax(260px, 1fr) minmax(340px, 1.5fr)",
      gap: 12, width: "100%", alignItems: "stretch",
    }}>
      {/* LEFT — QR card */}
      <div style={{
        background: "#FFFFFF", borderRadius: 14,
        padding: "32px 24px",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        textAlign: "center",
      }}>
        <div style={{
          width: 180, height: 180,
          background: "#FFFFFF",
          border: "1px solid rgba(20,32,27,.08)",
          borderRadius: 12,
          padding: 10,
          marginBottom: 20,
        }}>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=0&data=https%3A%2F%2Fmedicalmall.example%2Ftryon"
            alt="Scan QR with smartphone"
            style={{ width: "100%", height: "100%", display: "block" }}
          />
        </div>
        <div style={{
          fontSize: 15, fontWeight: 600, color: "#1F1F1F",
          lineHeight: 1.35, letterSpacing: "-.01em", marginBottom: 8,
          maxWidth: 240,
        }}>
          Scan QR code with smartphone for better face scanning
        </div>
        <div style={{ fontSize: 12.5, color: "#7A7A7A", lineHeight: 1.5 }}>
          The Result will be shown here
        </div>
      </div>

      {/* RIGHT — model + instructions + buttons */}
      <div style={{
        background: "#FFFFFF", borderRadius: 14,
        padding: 16,
        display: "flex", flexDirection: "column",
      }}>
        {/* Model image */}
        <div style={{
          width: "100%", height: 200,
          borderRadius: 10, overflow: "hidden",
          background: "linear-gradient(180deg, #F8F8F8 0%, #EFEFEF 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <img
            src="images/tryon-model.png"
            alt="Try-on model preview"
            style={{
              maxWidth: "100%", maxHeight: "100%",
              width: "auto", height: "auto",
              objectFit: "contain", display: "block",
            }}
          />
        </div>

        {/* Instructions */}
        <div style={{ padding: "16px 6px 4px" }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: "#1F1F1F", letterSpacing: "-.005em", marginBottom: 12 }}>
            Instructions to get started
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <InstructionRow icon="lighting" label="Make sure you are in good lighting" />
            <InstructionRow icon="glasses"  label="Remove glasses or face covering" />
            <InstructionRow icon="makeup"   label="Avoid makeup for best results" />
          </div>
        </div>

        {/* Buttons */}
        <div style={{
          marginTop: "auto", paddingTop: 16, paddingBottom: 4,
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10,
        }}>
          <TryOnBtn variant="outline" onClick={() => {/* upload flow placeholder */}}>
            Upload photo
          </TryOnBtn>
          <TryOnBtn variant="filled" onClick={onContinue}>
            Continue on this device
          </TryOnBtn>
        </div>
      </div>
    </div>
  );
};

/* ── State 2: single-column scan instructions ── */
const TryOnScan = ({ onStart }) => {
  return (
    <div style={{
      width: "100%",
      background: "#FFFFFF",
      borderRadius: 14,
      padding: 16,
      display: "flex", flexDirection: "column",
    }}>
      {/* Model image */}
      <div style={{
        width: "100%", height: 240,
        borderRadius: 10, overflow: "hidden",
        background: "linear-gradient(180deg, #FAFAFA 0%, #EEEEEE 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        <img
          src="images/tryon-model.png"
          alt="Try-on model preview"
          style={{
            maxWidth: "100%", maxHeight: "100%",
            width: "auto", height: "auto",
            objectFit: "contain", display: "block",
          }}
        />
      </div>

      {/* Instructions */}
      <div style={{ padding: "20px 6px 4px" }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: "#1F1F1F", letterSpacing: "-.005em", marginBottom: 14 }}>
          Instructions to get started
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <InstructionRow icon="hat"     label="Remove hats or caps" />
          <InstructionRow icon="hair"    label="Pull hair away from your face" />
          <InstructionRow icon="forehead" label="Keep forehead and ears visible" />
        </div>
      </div>

      {/* Single full-width button */}
      <div style={{ paddingTop: 18, paddingBottom: 4 }}>
        <TryOnBtn variant="filled" onClick={onStart} fullWidth>
          Start scan
        </TryOnBtn>
      </div>
    </div>
  );
};

/* ── State 3: scanning · corner-bracket frame, auto-advances ── */
const TryOnScanning = () => (
  <div style={{
    position: "relative", flex: 1, minHeight: 480,
    background: "linear-gradient(180deg, #C8BE9E 0%, #B8AB85 70%, #ACA382 100%)",
    overflow: "hidden",
  }}>
    <img src="images/scan-model.png" alt=""
      style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "contain", objectPosition: "center 70%", display: "block",
      }}
    />
    {/* 4 corner brackets */}
    <div style={{ position: "absolute", top: "12%", left: "30%", right: "30%", bottom: "10%" }}>
      {[
        { top: 0, left: 0, borderTop: "3px solid #fff", borderLeft: "3px solid #fff", borderTopLeftRadius: 8 },
        { top: 0, right: 0, borderTop: "3px solid #fff", borderRight: "3px solid #fff", borderTopRightRadius: 8 },
        { bottom: 0, left: 0, borderBottom: "3px solid #fff", borderLeft: "3px solid #fff", borderBottomLeftRadius: 8 },
        { bottom: 0, right: 0, borderBottom: "3px solid #fff", borderRight: "3px solid #fff", borderBottomRightRadius: 8 },
      ].map((s, i) => (
        <div key={i} style={{ position: "absolute", width: 64, height: 64, ...s }} />
      ))}
    </div>
  </div>
);

/* ── State 4: countdown · green frame with 3-2-1, auto-advances ── */
const TryOnCountdown = ({ count }) => (
  <div style={{
    position: "relative", flex: 1, minHeight: 480,
    background: "linear-gradient(180deg, #C8BE9E 0%, #B8AB85 70%, #ACA382 100%)",
    overflow: "hidden",
  }}>
    <img src="images/scan-model.png" alt=""
      style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "contain", objectPosition: "center 70%", display: "block",
      }}
    />
    {/* Green portrait frame */}
    <div style={{
      position: "absolute", top: "14%", left: "38%", right: "38%", bottom: "26%",
      border: "3px solid #4ADE80",
      borderRadius: 18,
      boxShadow: "0 0 0 0 rgba(74,222,128,.0)",
    }}>
      {/* Countdown digit centered, smooth crossfade between values */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div key={count} style={{
          fontSize: 96, fontWeight: 600, color: "#FFFFFF",
          textShadow: "0 2px 12px rgba(0,0,0,.32)",
          letterSpacing: "-.04em",
          animation: "tryOnEnter .26s cubic-bezier(0.23,1,0.32,1)",
        }}>{count}</div>
      </div>
    </div>
    {/* Hold still caption */}
    <div style={{
      position: "absolute", bottom: 28, left: 0, right: 0,
      textAlign: "center",
      fontSize: 16, fontWeight: 500, color: "#FFFFFF",
      textShadow: "0 1px 6px rgba(0,0,0,.4)",
      letterSpacing: "-.005em",
    }}>
      Perfect! hold still
    </div>
  </div>
);

/* ── State 5: preview · captured photo with Retake / Confirm ── */
const TryOnPreview = ({ onRetake, onConfirm }) => {
  const [toast, setToast] = useStatePDP(true);

  React.useEffect(() => {
    const t = setTimeout(() => setToast(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      <div style={{
        flex: 1, minHeight: 380,
        background: "linear-gradient(180deg, #C8BE9E 0%, #B8AB85 70%, #ACA382 100%)",
        overflow: "hidden", position: "relative",
      }}>
        <img src="images/scan-model.png" alt="Your photo"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "contain", objectPosition: "center 60%", display: "block",
          }}
        />

        {/* ── Picture captured toast ── */}
        <div style={{
          position: "absolute", top: 16, left: "50%",
          transform: toast ? "translate(-50%, 0)" : "translate(-50%, -72px)",
          opacity: toast ? 1 : 0,
          transition: "transform 280ms cubic-bezier(0.23,1,0.32,1), opacity 240ms ease",
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(14,28,20,.82)", backdropFilter: "blur(8px)",
          color: "#fff", fontSize: 13.5, fontWeight: 600,
          padding: "10px 18px", borderRadius: 999,
          boxShadow: "0 4px 16px rgba(0,0,0,.25)",
          whiteSpace: "nowrap", pointerEvents: "none",
        }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          Picture captured
        </div>
      </div>
      <div style={{
        background: "#FFFFFF",
        padding: "16px 20px 20px",
        display: "flex", gap: 12, justifyContent: "center",
      }}>
        <TryOnBtn variant="outline" onClick={onRetake}>Retake</TryOnBtn>
        <TryOnBtn variant="filled" onClick={onConfirm}>Confirm</TryOnBtn>
      </div>
    </div>
  );
};

/* ── State 6: result · workspace with wig selector + PDP-style CTA row ── */
const TryOnResult = () => {
  const [wigIdx, setWigIdx] = useStatePDP(0);
  const [colorIdx, setColorIdx] = useStatePDP(0);
  const [qty, setQty] = useStatePDP(1);

  const wigs = [
    { id: "none",  label: "No wig",            thumb: null,                preview: "images/scan-model.png"  },
    { id: "long",  label: "Long with bangs",   thumb: "images/wig-1.png",  preview: "images/hairstyle_3.png" },
    { id: "bob",   label: "Bob with bangs",    thumb: "images/wig-2.png",  preview: "images/hairstyle_4.png" },
    { id: "pixie", label: "Pixie blonde",      thumb: "images/wig-3.png",  preview: "images/hairstyle_2.png" },
    { id: "short", label: "Pixie short",       thumb: "images/wig-4.png",  preview: "images/hairstyle_1.png" },
  ];

  const currentPreview = wigs[wigIdx].preview;

  const colors = [
    { id: "none",  hex: null },
    { id: "green", hex: "#3FA968" },
    { id: "blue",  hex: "#2D3FB8" },
    { id: "wine",  hex: "#7A1F2A" },
  ];

  const wigName = wigIdx === 0 ? "No wig selected" : "Lightweight Luxury";

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", flex: 1, minHeight: 540 }}>
      {/* LEFT — model preview */}
      <div style={{
        position: "relative",
        background: "linear-gradient(180deg, #C8BE9E 0%, #B8AB85 70%, #ACA382 100%)",
        overflow: "hidden",
      }}>
        <img key={currentPreview} src={currentPreview} alt=""
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "contain", objectPosition: "center 60%", display: "block",
            animation: "tryOnEnter 240ms cubic-bezier(0.23,1,0.32,1)",
          }}
        />
        {/* AR re-scan icon bottom-left */}
        <button aria-label="Re-scan" style={{
          position: "absolute", bottom: 16, left: 16,
          width: 40, height: 40, borderRadius: 999,
          background: "#FFFFFF", border: "1px solid rgba(20,32,27,.10)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 12px -4px rgba(20,32,27,.18)",
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1F1F1F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 0 1 15.5-6.3L21 8"/><path d="M21 3v5h-5"/>
            <path d="M21 12a9 9 0 0 1-15.5 6.3L3 16"/><path d="M3 21v-5h5"/>
          </svg>
        </button>
        {/* Expand icon bottom-right */}
        <button aria-label="Expand" style={{
          position: "absolute", bottom: 16, right: 16,
          width: 40, height: 40, borderRadius: 999,
          background: "#FFFFFF", border: "1px solid rgba(20,32,27,.10)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 12px -4px rgba(20,32,27,.18)",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1F1F1F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h6v6"/><path d="m21 3-7 7"/>
            <path d="M9 21H3v-6"/><path d="m3 21 7-7"/>
          </svg>
        </button>
      </div>

      {/* RIGHT — wig selector + CTAs */}
      <div style={{
        background: "#FFFFFF",
        padding: 22,
        display: "flex", flexDirection: "column", gap: 18,
      }}>
        {/* Wig thumbnails — horizontal scrollable */}
        <div className="no-scrollbar" style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
          {wigs.map((w, i) => (
            <button key={w.id} onClick={() => setWigIdx(i)} style={{
              width: 64, height: 64, flexShrink: 0,
              borderRadius: 8, overflow: "hidden",
              background: i === 0 ? "#FFFFFF" : "#E8E0CD",
              border: wigIdx === i ? "1.5px solid #1F1F1F" : "1px solid rgba(20,32,27,.12)",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: 0,
              transition: "border-color 160ms ease",
            }}>
              {i === 0 ? (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#9A9A9A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <img src={w.thumb} alt={w.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              )}
            </button>
          ))}
        </div>

        {/* Color swatches — pill background */}
        <div style={{
          display: "flex", gap: 12,
          padding: "10px 14px",
          background: "#F4F4F4",
          borderRadius: 14,
          alignItems: "center",
        }}>
          {colors.map((c, i) => (
            <button key={c.id} onClick={() => setColorIdx(i)} aria-label={c.id} style={{
              width: 32, height: 32, borderRadius: 999,
              background: c.hex || "#FFFFFF",
              border: c.hex ? "none" : "1px solid rgba(20,32,27,.18)",
              boxShadow: colorIdx === i
                ? "0 0 0 2px #FFFFFF, 0 0 0 4px #1F1F1F"
                : (c.hex ? "0 0 0 1px rgba(20,32,27,.10)" : "none"),
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: 0,
              transition: "box-shadow 180ms ease",
            }}>
              {!c.hex && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9A9A9A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              )}
            </button>
          ))}
        </div>

        {/* Wig name card */}
        <div style={{
          padding: "13px 16px",
          border: "1px solid rgba(20,32,27,.10)",
          borderRadius: 10,
          fontSize: 14.5, color: "#1F1F1F",
        }}>
          {wigName}
        </div>

        {/* CTA row — same composition as PDP */}
        <div style={{ marginTop: "auto", display: "flex", gap: 10, alignItems: "center", paddingTop: 8 }}>
          {/* Quantity stepper */}
          <div style={{
            display: "flex", alignItems: "center",
            border: "1px solid rgba(20,32,27,.12)", borderRadius: 999, padding: 4,
          }}>
            <button onClick={() => setQty(Math.max(1, qty - 1))} style={qtyBtn} aria-label="Decrease">
              <Icon name="minus" size={13} />
            </button>
            <span style={{ width: 28, textAlign: "center", fontFamily: "var(--mono)", fontSize: 13 }}>{qty}</span>
            <button onClick={() => setQty(qty + 1)} style={qtyBtn} aria-label="Increase">
              <Icon name="plus" size={13} />
            </button>
          </div>
          {/* Add to cart — primary */}
          <button className="btn btn-primary" style={{ flex: 1, justifyContent: "center", padding: "12px 16px", fontSize: 13.5 }}>
            <Icon name="cart" size={14} /> Add to cart · ₹4,800
          </button>
          {/* Wishlist heart */}
          <button aria-label="Save" style={{
            width: 44, height: 44, borderRadius: 999,
            border: "1px solid rgba(20,32,27,.12)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <Icon name="heart" size={16} color="var(--ink-700)" />
          </button>
        </div>
      </div>
    </div>
  );
};

/* ── Instruction row ── */
const InstructionRow = ({ icon, label }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
    <div style={{
      width: 32, height: 32, borderRadius: 8,
      background: "#FFFFFF", border: "1px solid rgba(20,32,27,.10)",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      <TryOnIcon name={icon} />
    </div>
    <div style={{ fontSize: 13.5, color: "#1F1F1F", lineHeight: 1.4 }}>
      {label}
    </div>
  </div>
);

/* ── Buttons (rounded pill — tightened) ── */
const TryOnBtn = ({ children, variant = "filled", onClick, fullWidth }) => {
  const base = {
    height: 44,
    borderRadius: 999,
    fontSize: 14, fontWeight: 500, letterSpacing: "-.005em",
    width: fullWidth ? "100%" : "auto",
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    padding: "0 20px",
    transition: "transform 160ms cubic-bezier(0.23,1,0.32,1), background 180ms ease, box-shadow 180ms ease",
    cursor: "pointer",
  };
  const filled = {
    background: "#0E0E0E", color: "#FFFFFF",
    border: "1px solid #0E0E0E",
  };
  const outline = {
    background: "#FFFFFF", color: "#1F1F1F",
    border: "1px solid rgba(20,32,27,.18)",
  };
  return (
    <button
      onClick={onClick}
      onMouseDown={e => e.currentTarget.style.transform = "scale(0.97)"}
      onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      style={{ ...base, ...(variant === "filled" ? filled : outline) }}
    >
      {children}
    </button>
  );
};

/* ── Tiny icon set sized + styled to match GlamAR's outlined look ── */
const TryOnIcon = ({ name }) => {
  const s = { width: 18, height: 18, fill: "none", stroke: "#5A5A5A", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "lighting": // pendant lamp
      return <svg viewBox="0 0 24 24" {...s}><path d="M12 3v3"/><path d="M7 14a5 5 0 0 1 10 0Z"/><path d="M9.5 14h5"/><path d="M11 17v3"/><path d="M13 17v3"/></svg>;
    case "glasses": // face with glasses
      return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9"/><circle cx="9" cy="11" r="1.5"/><circle cx="15" cy="11" r="1.5"/><path d="M10.5 11h3"/><path d="M9 15c1 1 4 1 6 0"/></svg>;
    case "makeup": // face with subtle blush
      return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9"/><circle cx="9" cy="11" r=".7" fill="#5A5A5A" stroke="none"/><circle cx="15" cy="11" r=".7" fill="#5A5A5A" stroke="none"/><path d="M9.5 15c1 .8 4 .8 5 0"/></svg>;
    case "hat": // baseball cap
      return <svg viewBox="0 0 24 24" {...s}><path d="M4 16h13a3 3 0 0 0 3-3v-1H7a3 3 0 0 0-3 3z"/><path d="M7 12V8a4 4 0 0 1 8 0v4"/></svg>;
    case "hair": // face with hair flowing back
      return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9"/><path d="M5 9c1.5-1 4.5-2 7-2s5.5 1 7 2"/><circle cx="9.5" cy="12" r=".7" fill="#5A5A5A" stroke="none"/><circle cx="14.5" cy="12" r=".7" fill="#5A5A5A" stroke="none"/><path d="M10 16c1 .6 3 .6 4 0"/></svg>;
    case "forehead": // face with headband-like indicator
      return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9"/><path d="M5 10h14"/><circle cx="9.5" cy="13" r=".7" fill="#5A5A5A" stroke="none"/><circle cx="14.5" cy="13" r=".7" fill="#5A5A5A" stroke="none"/><path d="M10 16c1 .6 3 .6 4 0"/></svg>;
    default: return null;
  }
};

/* ── GlamAR-style logo (small diamond + wordmark) ── */
const GlamARLogo = () => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M10 1.5 18.5 10 10 18.5 1.5 10Z" stroke="#1F1F1F" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M10 5.5 14.5 10 10 14.5 5.5 10Z" fill="#1F1F1F"/>
    </svg>
    <span style={{ fontWeight: 600, color: "#1F1F1F", letterSpacing: "-.005em" }}>GlamAR</span>
  </span>
);

window.PDP = PDP;