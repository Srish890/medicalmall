/* Shared primitives & icons for Medical Mall prototype */

const { useState, useEffect, useRef, useMemo } = React;

/* ---------- Icons (Lucide via UMD on unpkg) ----------
   Library: https://github.com/lucide-icons/lucide
   Old project-local names are aliased to Lucide PascalCase names. */
const LUCIDE_ALIAS = {
  "star": "Star", "search": "Search", "eye": "Eye", "cart": "ShoppingCart",
  "user": "User", "phone": "Phone", "leaf": "Leaf", "shield": "ShieldCheck",
  "stethoscope": "Stethoscope", "chat": "MessageSquare", "sparkle": "Sparkles",
  "arrow-left": "ArrowLeft", "arrow-right": "ArrowRight", "arrow-up-right": "ArrowUpRight",
  "chevron": "ChevronRight", "chevron-down": "ChevronDown",
  "upload": "Upload", "camera": "Camera", "truck": "Truck", "refresh": "RefreshCw",
  "heart": "Heart", "play": "Play", "lock": "Lock", "check": "Check", "x": "X",
  "plus": "Plus", "minus": "Minus", "ribbon": "Ribbon", "pill-icon": "Pill",
  "hand": "Hand", "scissors": "Scissors", "spa": "Flower2", "droplet": "Droplet",
  "moon": "Moon", "menu": "Menu", "filter": "Filter", "info": "Info",
  "compass": "Compass", "calendar": "Calendar", "award": "Award", "hospital": "Hospital",
};

const lucideNodeToReact = (node, key) => {
  if (!Array.isArray(node)) return null;
  const [tag, attrs, children] = node;
  const reactAttrs = { key, ...attrs };
  // SVG attribute → React DOM key conversions
  if (reactAttrs["stroke-width"] !== undefined) { reactAttrs.strokeWidth = reactAttrs["stroke-width"]; delete reactAttrs["stroke-width"]; }
  if (reactAttrs["stroke-linecap"] !== undefined) { reactAttrs.strokeLinecap = reactAttrs["stroke-linecap"]; delete reactAttrs["stroke-linecap"]; }
  if (reactAttrs["stroke-linejoin"] !== undefined) { reactAttrs.strokeLinejoin = reactAttrs["stroke-linejoin"]; delete reactAttrs["stroke-linejoin"]; }
  const kids = (children || []).map((c, i) => lucideNodeToReact(c, i));
  return React.createElement(tag, reactAttrs, kids.length ? kids : undefined);
};

const Icon = ({ name, size = 20, stroke = 1.6, color = "currentColor", fill = "none" }) => {
  const lucideKey = LUCIDE_ALIAS[name] || name;
  const iconNode = (typeof window !== "undefined" && window.lucide) ? window.lucide[lucideKey] : null;
  if (!iconNode) return null;
  // Lucide UMD shape: ["svg", {defaultAttrs}, [...inner children]]
  const innerChildren = Array.isArray(iconNode[2]) ? iconNode[2] : [];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {innerChildren.map((node, i) => lucideNodeToReact(node, i))}
    </svg>
  );
};

/* ---------- Logo ---------- */
const Logo = ({ inverse = false }) =>
<div style={{ display: "flex", alignItems: "center", gap: 0 }}>
    <img src="logo.png" alt="Reliance Foundation" style={{ height: 40, width: "auto", display: "block", filter: inverse ? "brightness(0) invert(1)" : "none" }} />
  </div>;


/* ---------- Image helper (Unsplash) ---------- */
const Img = ({ src, alt = "", style = {}, label, ratio = "4/3" }) =>
<div style={{ position: "relative", overflow: "hidden", borderRadius: 16, background: "var(--paper-2)", aspectRatio: ratio, ...style }}>
    <img src={src} alt={alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
    {label && <span style={{ position: "absolute", bottom: 10, left: 10, padding: "4px 10px", borderRadius: 999, background: "rgba(250,247,242,.92)", fontSize: 11, fontFamily: "var(--mono)", letterSpacing: ".05em", color: "var(--ink-700)" }}>{label}</span>}
  </div>;


/* ---------- Top utility bar ---------- */
const UtilityBar = () =>
<div style={{
  background: "var(--green-900)",
  color: "rgba(244,239,230,.85)",
  fontSize: 12.5,
  padding: "8px 32px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontFamily: "var(--sans)",
  letterSpacing: ".01em"
}}>
    <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
        <Icon name="shield" size={13} stroke={1.6} color="#E2C896" /> Hospital-backed since 1925
      </span>
      <span style={{ opacity: .4 }}>·</span>
      <span>Free clinical consult on orders ₹2000+</span>
    </div>
    <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
        <Icon name="phone" size={13} stroke={1.6} /> Care line · 1800 102 4567
      </span>
      <span style={{ opacity: .4 }}>·</span>
      <span>EN <Icon name="chevron-down" size={11} /></span>
    </div>
  </div>;


/* ---------- Header ---------- */
const Header = ({ navigate, current, cartCount = 2, forceGlass = false }) => {
  const [catOpen, setCatOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const catRef = useRef(null);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const atTop = y < 80;
      setScrolled(!atTop);
      if (atTop) {
        // back at top — always show in default state
        setHidden(false);
      } else if (y > lastY.current + 6) {
        // scrolling down — hide
        setHidden(true);
        setCatOpen(false);
      } else if (y < lastY.current - 4) {
        // scrolling up — reveal
        setHidden(false);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!catOpen) return;
    const handler = (e) => { if (catRef.current && !catRef.current.contains(e.target)) setCatOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [catOpen]);

  const navItems = [
    { key: "categories", label: "Find the right care" },
    { key: "journeys", label: "Recovery journeys" },
  ];

  const categories = [
    { key: "oncology",  label: "Oncology",      desc: "Wigs, scarves, oncology-safe care",    live: true  },
    { key: "mother",    label: "Mother & Baby",  desc: "Pregnancy & postpartum essentials",    live: false },
    { key: "physio",    label: "Physio & Rehab", desc: "Mobility & post-surgery",              live: false },
    { key: "cardiac",   label: "Cardiac Care",   desc: "Heart-safe daily essentials",          live: false },
    { key: "diabetes",  label: "Diabetes",       desc: "Glucose, nutrition, footwear",         live: false },
    { key: "wellness",  label: "Wellness",       desc: "Curated by our nutritionists",         live: false },
  ];

  /* colours swap based on scroll — white on hero, dark on pill */
  const pill = scrolled;              // pill shape & size — only when truly scrolled
  const glass = scrolled || forceGlass; // glass bg & ink colours — also on forceGlass pages
  const textCol  = glass ? "var(--ink-900)" : "rgba(255,255,255,.92)";
  const iconCol  = glass ? "var(--ink-700)" : "rgba(255,255,255,.85)";

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      paddingTop: pill ? 8 : 0,
      background: "transparent",
      pointerEvents: "none",
      transform: hidden ? "translateY(-110%)" : "translateY(0)",
      transition: "transform 320ms cubic-bezier(0.23,1,0.32,1), padding-top 320ms cubic-bezier(0.23,1,0.32,1)",
    }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        /* unscrolled: edge-to-edge generous padding | scrolled: centred pill */
        padding: pill ? "6px 16px" : "20px 56px",
        maxWidth: pill ? 920 : "100%",
        margin: "0 auto",
        background: glass ? "rgba(255,255,255,.72)" : "transparent",
        backdropFilter: glass ? "blur(28px) saturate(160%)" : "none",
        WebkitBackdropFilter: glass ? "blur(28px) saturate(160%)" : "none",
        borderRadius: pill ? 999 : 0,
        border: pill ? "1px solid rgba(255,255,255,.55)" : "none",
        borderBottom: (!pill && glass) ? "1px solid rgba(20,32,27,.07)" : undefined,
        boxShadow: glass ? "0 1px 2px rgba(20,32,27,.06), 0 1px 1px rgba(20,32,27,.04)" : "none",
        transition: "all 360ms cubic-bezier(0.23,1,0.32,1)",
        pointerEvents: "auto",
      }}>

        {/* Left: logo + nav */}
        <div style={{ display: "flex", alignItems: "center", gap: pill ? 22 : 36, transition: "gap 320ms cubic-bezier(0.23,1,0.32,1)" }}>
          <div style={{ cursor: "pointer", display: "flex", alignItems: "center", transform: pill ? "scale(.72)" : "scale(1)", transformOrigin: "left center", transition: "transform 320ms cubic-bezier(0.23,1,0.32,1)" }} onClick={() => navigate("home-v2")}>
            <Logo inverse={!glass} />
          </div>
          <nav style={{ display: "flex", gap: pill ? 24 : 32, transition: "gap 320ms cubic-bezier(0.23,1,0.32,1)" }}>
            {navItems.map((n) => n.key === "categories" ? (
              <div key="categories" ref={catRef} style={{ position: "relative" }}>
                <button onClick={() => setCatOpen(o => !o)} style={{
                  fontSize: pill ? 13.5 : 15, color: textCol, fontWeight: 500, padding: "4px 0",
                  borderBottom: catOpen ? `2px solid ${glass ? "var(--green-cta)" : "rgba(255,255,255,.8)"}` : "2px solid transparent",
                  display: "inline-flex", alignItems: "center", gap: 5,
                  transition: "color 320ms ease, font-size 320ms cubic-bezier(0.23,1,0.32,1)",
                }}>
                  {n.label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{ transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)", transform: catOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {catOpen && (
                  <div style={{
                    position: "absolute", top: "calc(100% + 14px)", left: "50%", transform: "translateX(-50%)",
                    background: "#fff", borderRadius: 14, border: "1px solid rgba(20,32,27,.09)",
                    boxShadow: "0 16px 40px -12px rgba(20,32,27,.18)", padding: 8,
                    display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2, width: 340,
                    animation: "fadeUp .15s cubic-bezier(0.23,1,0.32,1)",
                  }}>
                    {categories.map(c => (
                      <button key={c.key} onClick={() => { navigate("oncology-v2"); setCatOpen(false); }}
                        style={{ textAlign: "left", padding: "10px 12px", borderRadius: 10, background: "transparent", cursor: "pointer", transition: "background 150ms ease" }}
                        onMouseEnter={e => e.currentTarget.style.background = "var(--paper-2,#F5F5F2)"}
                        onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                      >
                        <div style={{ fontSize: 13.5, fontWeight: 500, color: "var(--ink-900)", letterSpacing: "-.005em" }}>{c.label}</div>
                        <div style={{ fontSize: 12, color: "var(--ink-500)", marginTop: 2, lineHeight: 1.35 }}>{c.desc}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button key={n.key} onClick={() => navigate(n.key)} style={{
                fontSize: pill ? 13.5 : 15, color: textCol, fontWeight: 500, padding: "4px 0",
                borderBottom: current === n.key ? `2px solid ${glass ? "var(--green-cta)" : "rgba(255,255,255,.8)"}` : "2px solid transparent",
                transition: "color 320ms ease, font-size 320ms cubic-bezier(0.23,1,0.32,1)", whiteSpace: "nowrap",
              }}>{n.label}</button>
            ))}
          </nav>
        </div>

        {/* Right: actions */}
        <div style={{ display: "flex", alignItems: "center", gap: pill ? 4 : 12, transition: "gap 320ms cubic-bezier(0.23,1,0.32,1)" }}>

          {/* Talk to a specialist */}
          <button
            onMouseEnter={e => {
              if (glass) {
                e.currentTarget.style.background = "rgba(37,141,72,.06)";
                e.currentTarget.style.borderColor = "rgba(37,141,72,.30)";
                e.currentTarget.style.color = "var(--green-700)";
              } else {
                e.currentTarget.style.background = "rgba(255,255,255,.12)";
              }
            }}
            onMouseLeave={e => {
              if (glass) {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.borderColor = "rgba(20,32,27,.12)";
                e.currentTarget.style.color = "var(--ink-700)";
              } else {
                e.currentTarget.style.background = "transparent";
              }
            }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: pill ? "7px 16px" : "8px 18px",
              borderRadius: 9999,
              fontSize: pill ? 13 : 14,
              fontWeight: 500,
              fontFamily: "var(--sans)",
              whiteSpace: "nowrap",
              cursor: "pointer",
              letterSpacing: ".005em",
              transition: "all 320ms cubic-bezier(0.23,1,0.32,1)",
              /* dark surface (unscrolled): btn-outline-white — frosted pill from design system */
              /* glass surface (scrolled/forceGlass): secondary — white fill, neutral border */
              background: glass ? "#fff" : "rgba(255,255,255,.10)",
              color: glass ? "var(--ink-700)" : "rgba(255,255,255,.92)",
              border: glass ? "1px solid rgba(20,32,27,.12)" : "1.5px solid rgba(255,255,255,.35)",
              backdropFilter: glass ? "none" : "blur(6px)",
              WebkitBackdropFilter: glass ? "none" : "blur(6px)",
            }}
          >
            <Icon name="MessageSquare" size={pill ? 14 : 15} color="currentColor" stroke={1.8} />
            Talk to a specialist
          </button>

          <button style={{ ...iconBtn, width: pill ? 34 : 38, height: pill ? 34 : 38, transition: "all 320ms cubic-bezier(0.23,1,0.32,1)" }}>
            <Icon name="search" size={pill ? 18 : 20} color={iconCol} />
          </button>
          <button style={{ ...iconBtn, width: pill ? 34 : 38, height: pill ? 34 : 38, transition: "all 320ms cubic-bezier(0.23,1,0.32,1)" }}>
            <Icon name="user" size={pill ? 18 : 20} color={iconCol} />
          </button>
          <button style={{ ...iconBtn, position: "relative", width: pill ? 34 : 38, height: pill ? 34 : 38, transition: "all 320ms cubic-bezier(0.23,1,0.32,1)" }} title="Cart">
            <Icon name="cart" size={pill ? 18 : 20} color={iconCol} />
            {cartCount > 0 && <span style={cartBadge}>{cartCount}</span>}
          </button>
        </div>

      </div>
    </header>
  );
};

const iconBtn = {
  width: 38, height: 38,
  borderRadius: 999,
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  color: "var(--ink-700)",
  transition: "background .15s ease"
};
const cartBadge = {
  position: "absolute",
  top: 4, right: 4,
  background: "var(--green-700)",
  color: "#F4EFE6",
  fontSize: 10,
  fontWeight: 500,
  width: 16, height: 16,
  borderRadius: 999,
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  fontFamily: "var(--mono)"
};

/* ---------- Footer ---------- */
const Footer = ({ lightBg = false } = {}) =>
<div style={{
  background: lightBg ? "var(--paper)" : "linear-gradient(to bottom, #000 0%, #0a0a0a 60%, #111 100%)",
  padding: lightBg ? "80px 0 32px" : "0 0 32px",
}}>
<footer style={{ background: "#0E2A20", color: "rgba(255,255,255,.7)", padding: "64px 48px 32px", margin: "0 24px", borderRadius: "28px", position: "relative", zIndex: 2, boxShadow: lightBg ? "0 -8px 28px -12px rgba(20,32,27,.18)" : "0 -24px 60px -20px rgba(0,0,0,.5)" }}>
    <div className="shell" style={{ maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr", gap: 40, paddingBottom: 56 }}>
        <div>
          <div style={{ background: "#fff", display: "inline-block", padding: "8px 12px", borderRadius: 8 }}><Logo /></div>
          <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,.75)", maxWidth: 320 }}>
            Hospital-backed pharmacy from Reliance Foundation. We curate, source and dispense only what our specialists would prescribe.
          </p>
          <div style={{ display: "flex", gap: 8, marginTop: 22 }}>
            <span className="pill dark"><Icon name="shield" size={12} /> NABH accredited</span>
            <span className="pill dark"><Icon name="award" size={12} /> ISO 9001</span>
          </div>
        </div>
        {[
      { h: "Care", items: ["Oncology", "Mother & Baby", "Physio & rehab", "Cardiac", "Wellness", "Diabetes"] },
      { h: "Journeys", items: ["Post-surgery", "Chemotherapy", "Hair recovery", "Lymphedema", "Mobility"] },
      { h: "Patients", items: ["Upload prescription", "Track order", "Returns", "Insurance", "FAQ"] },
      { h: "Hospital", items: ["About", "Doctors", "Locations", "Press", "Careers"] }].
      map((col) =>
      <div key={col.h}>
            <div className="eyebrow" style={{ color: "#E2C896", marginBottom: 14 }}>{col.h}</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {col.items.map((i) => <li key={i} style={{ fontSize: 14 }}>{i}</li>)}
            </ul>
          </div>
      )}
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,.18)", paddingTop: 24, display: "flex", justifyContent: "space-between", fontSize: 12.5, color: "rgba(255,255,255,.7)", fontFamily: "var(--mono)", letterSpacing: ".05em", textTransform: "uppercase" }}>
        <span>© 2026 Reliance Foundation Medical Mall</span>
        <span>Privacy · Terms · Pharmacy Council Reg #MH-04-2891</span>
      </div>
    </div>
  </footer>
</div>;


/* ---------- AI chat (floating + open panel) ---------- */
const CareAssistant = ({ open, setOpen }) => {
  const [messages, setMessages] = useState([
  { role: "bot", text: "Hello — I'm Asha, your care assistant. Are you exploring for yourself, or for someone in your care?" }]
  );
  const [input, setInput] = useState("");
  const send = () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, {
        role: "bot",
        text: "Thank you for sharing. Based on what you've described, I'd suggest exploring our chemotherapy support journey. I can connect you with Dr. Mehta if it would help — there's no charge for this conversation.",
        chips: ["See chemotherapy support", "Book a 15-min call", "Upload prescription"]
      }]);
    }, 700);
  };

  return (
    <>
      {/* Floating button */}
      <button onClick={() => setOpen(!open)} style={{
        position: "fixed", bottom: 28, right: 28, zIndex: 80,
        background: "var(--green-700)", color: "#F4EFE6",
        borderRadius: 999, padding: "14px 22px",
        display: "flex", alignItems: "center", gap: 10,
        boxShadow: "0 16px 32px -10px rgba(20,32,27,.4), 0 0 0 6px rgba(36,102,72,.08)",
        fontWeight: 500, fontSize: 14,
        transition: "all .2s"
      }}>
        <span style={{ position: "relative", display: "inline-flex" }}>
          <Icon name="sparkle" size={18} color="#E2C896" />
          <span style={{
            position: "absolute", top: -2, right: -2,
            width: 8, height: 8, background: "#E2C896", borderRadius: 999,
            boxShadow: "0 0 0 3px rgba(226,200,150,.3)"
          }} />
        </span>
        {open ? "Close" : "Talk to a care assistant"}
      </button>

      {/* Panel */}
      {open &&
      <div style={{
        position: "fixed", bottom: 92, right: 28, zIndex: 80,
        width: 400, height: 540,
        background: "var(--paper)", borderRadius: var_radius_lg(),
        boxShadow: "0 30px 60px -20px rgba(20,32,27,.35), 0 6px 14px rgba(20,32,27,.1)",
        border: "1px solid rgba(20,32,27,.08)",
        display: "flex", flexDirection: "column",
        overflow: "hidden",
        animation: "fadeUp .25s ease both"
      }}>
          {/* header */}
          <div style={{ padding: "18px 20px", background: "var(--green-700)", color: "#F4EFE6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ width: 38, height: 38, borderRadius: 999, background: "rgba(244,239,230,.16)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name="sparkle" size={18} color="#E2C896" />
              </div>
              <div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 17, lineHeight: 1.1 }}>Asha · Care Assistant</div>
                <div style={{ fontSize: 11.5, opacity: .75, fontFamily: "var(--mono)", marginTop: 2, letterSpacing: ".05em" }}>
                  ● Online · Reviewed by Dr. R. Mehta, MBBS
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ color: "#F4EFE6", padding: 4 }}><Icon name="x" size={18} /></button>
          </div>
          {/* messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "20px 18px", display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ background: "var(--gold-100)", border: "1px solid rgba(181,138,61,.2)", padding: "10px 12px", borderRadius: 10, fontSize: 12.5, color: "var(--ink-700)", display: "flex", gap: 8 }}>
              <Icon name="lock" size={14} color="var(--gold-600)" />
              <span>This conversation is private and reviewed by clinical staff. We don't store identifying information.</span>
            </div>
            {messages.map((m, i) =>
          <div key={i} style={{
            alignSelf: m.role === "user" ? "flex-end" : "flex-start",
            maxWidth: "82%"
          }}>
                <div style={{
              background: m.role === "user" ? "var(--green-700)" : "var(--white)",
              color: m.role === "user" ? "#F4EFE6" : "var(--ink-900)",
              padding: "11px 14px",
              borderRadius: m.role === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
              fontSize: 14, lineHeight: 1.45,
              border: m.role === "user" ? "none" : "1px solid rgba(20,32,27,.07)"
            }}>
                  {m.text}
                </div>
                {m.chips &&
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
                    {m.chips.map((c) =>
              <button key={c} style={{
                padding: "6px 12px", borderRadius: 999,
                background: "var(--green-50)", border: "1px solid var(--green-100)",
                fontSize: 12.5, color: "var(--green-700)", fontWeight: 500
              }}>{c}</button>
              )}
                  </div>
            }
              </div>
          )}
          </div>
          {/* input */}
          <div style={{ padding: "12px 14px", borderTop: "1px solid rgba(20,32,27,.07)", background: "var(--white)" }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", background: "var(--paper)", borderRadius: 999, padding: "6px 6px 6px 16px", border: "1px solid rgba(20,32,27,.08)" }}>
              <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Ask anything · symptoms, products, side-effects…"
            style={{ flex: 1, border: "none", background: "transparent", outline: "none", fontSize: 14, color: "var(--ink-900)" }} />
              <button onClick={send} style={{ background: "var(--green-700)", color: "#F4EFE6", borderRadius: 999, width: 34, height: 34, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name="arrow-right" size={16} />
              </button>
            </div>
            <div style={{ fontSize: 11, color: "var(--ink-400)", textAlign: "center", marginTop: 8, fontFamily: "var(--mono)", letterSpacing: ".04em" }}>
              For emergencies dial 102 · Asha is not a substitute for a doctor
            </div>
          </div>
        </div>
      }
    </>);

};
function var_radius_lg() {return "18px";}

/* ---------- TrustPill — frosted accreditation badge for hero / dark surfaces ---------- */
const TrustPill = ({ icon = "shield", iconColor = "rgba(110,230,160,1)", children }) =>
  <div className="badge-glass">
    {icon && <Icon name={icon} size={13} color={iconColor} />}
    <span>{children}</span>
  </div>;

/* ---------- SearchBar — hero search pill ---------- */
const SearchBar = ({
  placeholder = "Search medicines, wigs, devices…",
  buttonLabel = "Search",
  onSubmit,
}) => {
  const [value, setValue] = React.useState("");
  const submit = (e) => { e.preventDefault(); onSubmit && onSubmit(value); };
  return (
    <form className="search-bar" onSubmit={submit}>
      <Icon name="search" size={18} color="var(--ink-400)" />
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
      />
      <button type="submit" className="btn btn-primary" style={{ padding: "11px 22px" }}>
        {buttonLabel}
      </button>
    </form>
  );
};

/* ---------- ProductCard — the global product-card component (design.md: card-product) ----------
   Used in every product grid: Home V2 / Oncology V2 recommendations, the PLP, and the storybook.
   Optional fields (hoverImage, badge, brand, meta, rating, oldPrice) render only when supplied. */
const ProductCard = ({
  image, hoverImage, title, length, price, oldPrice, off = 0,
  badge, brand, meta, rating, reviews,
  outOfStock = false, onClick, onQuickView,
}) => {
  const [hovered, setHovered] = React.useState(false);

  /* Image badge — editorial labels only (Featured, Bestseller, Popular, New).
     Promotional / discount text ("% OFF", "Sale") is NEVER shown as an image overlay;
     it appears inline next to the price instead. */
  const isEditorial = badge && /featured|bestseller|popular|new arrival|new/i.test(badge);

  /* Auto-compute discount % when off prop is 0 or omitted.
     Works with both raw numbers (4800) and formatted strings ("₹4,800"). */
  const _strip = v => parseFloat(String(v).replace(/[^0-9.]/g, '')) || 0;
  const computedOff = off > 0 ? off : (() => {
    const p = _strip(price), op = _strip(oldPrice);
    return (p && op && op > p) ? Math.round((1 - p / op) * 100) : 0;
  })();

  return (
    <div
      className="card-product"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="card-product-bg">
        {isEditorial && (
          <span className="badge-pill-warm" style={{ position: "relative", zIndex: 3, alignSelf: "flex-start" }}>
            {badge}
          </span>
        )}
        {outOfStock && (
          <div aria-hidden style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,.6)", zIndex: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ background: "var(--ink-900)", color: "var(--white)", fontSize: 11.5, padding: "5px 14px", borderRadius: "var(--radius-full)", fontWeight: 600, letterSpacing: ".05em" }}>OUT OF STOCK</span>
          </div>
        )}
        {hoverImage && (
          <img
            src={hoverImage} alt="" aria-hidden
            style={{
              position: "absolute", inset: 0, width: "100%", height: "100%",
              objectFit: "cover", display: "block",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "scale(1)" : "scale(1.04)",
              transition: "opacity 360ms var(--ease-out), transform 600ms var(--ease-out)",
              zIndex: 1, pointerEvents: "none",
            }}
          />
        )}
        <img
          src={image} alt={title}
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", display: "block", zIndex: 0,
            opacity: hoverImage && hovered ? 0 : 1,
            transition: "opacity 280ms ease",
          }}
        />
        <div style={{ flex: 1 }} />
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, padding: "var(--space-sm)",
          transform: hovered ? "translateY(0)" : "translateY(110%)",
          transition: "transform 260ms var(--ease-out)",
          zIndex: 4, pointerEvents: hovered ? "auto" : "none",
        }}>
          <button
            className="btn btn-quick-view"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={(e) => { e.stopPropagation(); onQuickView && onQuickView(); }}
          >
            <Icon name="eye" size={14} color="var(--ink-900)" /> Quick view
          </button>
        </div>
      </div>
      <div style={{ background: "var(--white)", padding: "var(--space-md) var(--space-base) var(--space-base)" }}>
        {brand && (
          <div style={{ fontSize: 11.5, fontWeight: 600, color: "var(--ink-400)", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: "var(--space-xxs)" }}>
            {brand}
          </div>
        )}
        <div style={{ fontSize: 15, fontWeight: 500, color: "var(--ink-900)", letterSpacing: "-.008em", lineHeight: 1.35, marginBottom: "var(--space-xxs)" }}>
          {title}{length ? ` ${length}` : ""}
        </div>
        {rating != null && (
          <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: "var(--space-xs)" }}>
            <Icon name="star" size={14} color="var(--gold-600)" fill="var(--gold-600)" />
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-900)" }}>{rating}</span>
            {reviews != null && <span style={{ fontSize: 13, color: "var(--ink-400)" }}>({reviews})</span>}
          </div>
        )}
        {meta && (
          <div style={{ fontSize: 11.5, color: "var(--ink-500)", fontFamily: "var(--mono)", letterSpacing: ".03em", textTransform: "uppercase", marginBottom: "var(--space-xs)" }}>
            {meta}
          </div>
        )}
        <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-xs)", flexWrap: "wrap" }}>
          <span style={{ fontSize: 17, fontWeight: 600, color: "var(--ink-900)" }}>{price}</span>
          {oldPrice && <span style={{ fontSize: 13, color: "var(--ink-400)", textDecoration: "line-through" }}>{oldPrice}</span>}
          {computedOff > 0 && <span style={{ fontSize: 12.5, fontWeight: 600, color: "var(--green-cta)" }}>{computedOff}% OFF</span>}
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { Icon, Logo, Header, Footer, UtilityBar, CareAssistant, Img, TrustPill, SearchBar, ProductCard });
