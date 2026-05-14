/* Shared primitives & icons for Medical Mall prototype */

const { useState, useEffect, useRef, useMemo } = React;

/* ---------- Icons (stroke-only, minimal) ---------- */
const Icon = ({ name, size = 20, stroke = 1.6, color = "currentColor", fill = "none" }) => {
  const s = { width: size, height: size, fill, stroke: color, strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "star":return <svg viewBox="0 0 24 24" {...s}><path d="M12 2.5l2.95 6.4 6.55.9-4.75 4.6 1.15 6.6L12 17.85 6.1 21l1.15-6.6L2.5 9.8l6.55-.9z" /></svg>;
    case "search":return <svg viewBox="0 0 24 24" {...s}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>;
    case "eye":return <svg viewBox="0 0 24 24" {...s}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>;
    case "cart":return <svg viewBox="0 0 24 24" {...s}><path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.5L22 8H6" /><circle cx="9" cy="21" r="1.4" /><circle cx="18" cy="21" r="1.4" /></svg>;
    case "user":return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>;
    case "phone":return <svg viewBox="0 0 24 24" {...s}><path d="M5 4h3l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>;
    case "leaf":return <svg viewBox="0 0 24 24" {...s}><path d="M5 21c0-9 6-15 15-15 0 9-6 15-15 15Z" /><path d="M5 21c4-4 8-8 12-12" /></svg>;
    case "shield":return <svg viewBox="0 0 24 24" {...s}><path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></svg>;
    case "stethoscope":return <svg viewBox="0 0 24 24" {...s}><path d="M5 3v6a4 4 0 0 0 8 0V3" /><path d="M9 13v3a5 5 0 0 0 10 0v-2" /><circle cx="19" cy="11" r="2" /></svg>;
    case "chat":return <svg viewBox="0 0 24 24" {...s}><path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-7l-4 3v-3H6a2 2 0 0 1-2-2V6Z" /></svg>;
    case "sparkle":return <svg viewBox="0 0 24 24" {...s}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" /></svg>;
    case "arrow-left":return <svg viewBox="0 0 24 24" {...s}><path d="M19 12H5M11 18l-6-6 6-6" /></svg>;
    case "arrow-right":return <svg viewBox="0 0 24 24" {...s}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
    case "arrow-up-right":return <svg viewBox="0 0 24 24" {...s}><path d="M7 17 17 7M9 7h8v8" /></svg>;
    case "chevron":return <svg viewBox="0 0 24 24" {...s}><path d="m9 6 6 6-6 6" /></svg>;
    case "chevron-down":return <svg viewBox="0 0 24 24" {...s}><path d="m6 9 6 6 6-6" /></svg>;
    case "upload":return <svg viewBox="0 0 24 24" {...s}><path d="M12 16V4M7 9l5-5 5 5" /><path d="M5 20h14" /></svg>;
    case "camera":return <svg viewBox="0 0 24 24" {...s}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>;
    case "truck":return <svg viewBox="0 0 24 24" {...s}><path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z" /><circle cx="7" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></svg>;
    case "refresh":return <svg viewBox="0 0 24 24" {...s}><path d="M3 12a9 9 0 0 1 15.5-6.3L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-15.5 6.3L3 16" /><path d="M3 21v-5h5" /></svg>;
    case "heart":return <svg viewBox="0 0 24 24" {...s}><path d="M12 20s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9Z" /></svg>;
    case "play":return <svg viewBox="0 0 24 24" {...s}><path d="m7 5 12 7-12 7Z" /></svg>;
    case "lock":return <svg viewBox="0 0 24 24" {...s}><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>;
    case "check":return <svg viewBox="0 0 24 24" {...s}><path d="m5 12 5 5 9-11" /></svg>;
    case "x":return <svg viewBox="0 0 24 24" {...s}><path d="M6 6l12 12M18 6 6 18" /></svg>;
    case "plus":return <svg viewBox="0 0 24 24" {...s}><path d="M12 5v14M5 12h14" /></svg>;
    case "minus":return <svg viewBox="0 0 24 24" {...s}><path d="M5 12h14" /></svg>;
    case "ribbon":return <svg viewBox="0 0 24 24" {...s}><path d="M9 3 12 9l3-6" /><path d="M9 9c-2 4-2 8 3 12 5-4 5-8 3-12" /></svg>;
    case "pill-icon":return <svg viewBox="0 0 24 24" {...s}><rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-30 12 12)" /><path d="M9.5 7.5 16.5 14.5" /></svg>;
    case "hand":return <svg viewBox="0 0 24 24" {...s}><path d="M9 11V5a1.5 1.5 0 0 1 3 0v5" /><path d="M12 10V4a1.5 1.5 0 0 1 3 0v6" /><path d="M15 10V6a1.5 1.5 0 0 1 3 0v8a6 6 0 0 1-6 6 6 6 0 0 1-6-6v-3a1.5 1.5 0 0 1 3 0" /></svg>;
    case "scissors":return <svg viewBox="0 0 24 24" {...s}><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="m9 8 12 10M9 16 21 6" /></svg>;
    case "spa":return <svg viewBox="0 0 24 24" {...s}><path d="M12 22c-4-2-8-6-8-12 4 0 8 4 8 8M12 22c4-2 8-6 8-12-4 0-8 4-8 8" /></svg>;
    case "droplet":return <svg viewBox="0 0 24 24" {...s}><path d="M12 3s7 7 7 12a7 7 0 0 1-14 0c0-5 7-12 7-12Z" /></svg>;
    case "moon":return <svg viewBox="0 0 24 24" {...s}><path d="M20 14A8 8 0 0 1 10 4a8 8 0 1 0 10 10Z" /></svg>;
    case "menu":return <svg viewBox="0 0 24 24" {...s}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
    case "filter":return <svg viewBox="0 0 24 24" {...s}><path d="M4 5h16l-6 8v6l-4-2v-4L4 5Z" /></svg>;
    case "info":return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9" /><path d="M12 8h.01M11 12h1v5h1" /></svg>;
    case "compass":return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9" /><path d="m9 15 2-6 6-2-2 6-6 2Z" /></svg>;
    case "calendar":return <svg viewBox="0 0 24 24" {...s}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></svg>;
    case "award":return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="9" r="6" /><path d="m9 14-2 7 5-3 5 3-2-7" /></svg>;
    case "hospital":return <svg viewBox="0 0 24 24" {...s}><path d="M3 21h18M5 21V7l7-4 7 4v14" /><path d="M12 9v6M9 12h6" /></svg>;
    default:return null;
  }
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
const Header = ({ navigate, current, cartCount = 2 }) => {
  const [catOpen, setCatOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const catRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
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
  const textCol  = scrolled ? "var(--ink-900)" : "rgba(255,255,255,.92)";
  const iconCol  = scrolled ? "var(--ink-700)" : "rgba(255,255,255,.85)";

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      paddingTop: scrolled ? 12 : 0,
      background: "transparent",
      pointerEvents: "none",
      transition: "padding-top 320ms cubic-bezier(0.23,1,0.32,1)",
    }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        /* unscrolled: edge-to-edge generous padding | scrolled: centred pill */
        padding: scrolled ? "6px 16px" : "20px 56px",
        maxWidth: scrolled ? 920 : "100%",
        margin: "0 auto",
        background: scrolled ? "rgba(255,255,255,.88)" : "transparent",
        backdropFilter: scrolled ? "blur(22px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(22px) saturate(180%)" : "none",
        borderRadius: scrolled ? 999 : 0,
        border: scrolled ? "1px solid rgba(255,255,255,.75)" : "none",
        boxShadow: scrolled ? "0 4px 24px -4px rgba(20,32,27,.18), 0 1px 6px rgba(20,32,27,.08)" : "none",
        transition: "all 360ms cubic-bezier(0.23,1,0.32,1)",
        pointerEvents: "auto",
      }}>

        {/* Left: logo + nav */}
        <div style={{ display: "flex", alignItems: "center", gap: scrolled ? 22 : 36, transition: "gap 320ms cubic-bezier(0.23,1,0.32,1)" }}>
          <div style={{ cursor: "pointer", display: "flex", alignItems: "center", transform: scrolled ? "scale(.72)" : "scale(1)", transformOrigin: "left center", transition: "transform 320ms cubic-bezier(0.23,1,0.32,1)" }} onClick={() => navigate("home")}>
            <Logo inverse={!scrolled} />
          </div>
          <nav style={{ display: "flex", gap: scrolled ? 24 : 32, transition: "gap 320ms cubic-bezier(0.23,1,0.32,1)" }}>
            {navItems.map((n) => n.key === "categories" ? (
              <div key="categories" ref={catRef} style={{ position: "relative" }}>
                <button onClick={() => setCatOpen(o => !o)} style={{
                  fontSize: scrolled ? 13.5 : 15, color: textCol, fontWeight: 500, padding: "4px 0",
                  borderBottom: catOpen ? `2px solid ${scrolled ? "var(--green-cta)" : "rgba(255,255,255,.8)"}` : "2px solid transparent",
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
                      <button key={c.key} onClick={() => { navigate("oncology"); setCatOpen(false); }}
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
                fontSize: scrolled ? 13.5 : 15, color: textCol, fontWeight: 500, padding: "4px 0",
                borderBottom: current === n.key ? `2px solid ${scrolled ? "var(--green-cta)" : "rgba(255,255,255,.8)"}` : "2px solid transparent",
                transition: "color 320ms ease, font-size 320ms cubic-bezier(0.23,1,0.32,1)", whiteSpace: "nowrap",
              }}>{n.label}</button>
            ))}
          </nav>
        </div>

        {/* Right: actions */}
        <div style={{ display: "flex", alignItems: "center", gap: scrolled ? 4 : 12, transition: "gap 320ms cubic-bezier(0.23,1,0.32,1)" }}>
          <button style={{ ...iconBtn, width: scrolled ? 34 : 38, height: scrolled ? 34 : 38, transition: "all 320ms cubic-bezier(0.23,1,0.32,1)" }}>
            <Icon name="search" size={scrolled ? 18 : 20} color={iconCol} />
          </button>
          <button style={{ ...iconBtn, width: scrolled ? 34 : 38, height: scrolled ? 34 : 38, transition: "all 320ms cubic-bezier(0.23,1,0.32,1)" }}>
            <Icon name="user" size={scrolled ? 18 : 20} color={iconCol} />
          </button>
          <button style={{ ...iconBtn, position: "relative", width: scrolled ? 34 : 38, height: scrolled ? 34 : 38, transition: "all 320ms cubic-bezier(0.23,1,0.32,1)" }} title="Cart">
            <Icon name="cart" size={scrolled ? 18 : 20} color={iconCol} />
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
  background: lightBg ? "#fff" : "linear-gradient(to bottom, #000 0%, #0a0a0a 60%, #111 100%)",
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

Object.assign(window, { Icon, Logo, Header, Footer, UtilityBar, CareAssistant, Img });
