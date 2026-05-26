/* AR Wig Virtual Try-On — Mall Kiosk 1512×2688 px (32 in @ 96 PPI, 9:16)
   Medical Mall Design System                                              */
const { useState, useEffect } = React;

/* ── Canvas constants ────────────────────────────────────────────────── */
/* 32 in diagonal @ 96 PPI, 9:16 ratio:
   diagonal = √(1512² + 2688²) / 96  = 3085 / 96  ≈ 32.1 in           */
const KK_W = 1512;
const KK_H = 2688;

/* ── Kiosk type / layout defaults ────────────────────────────────────── */
/* Single source for the kiosk's text + button scale — kiosk runs at
   1512×2688 so every value is much larger than design.md's web scale. */
const KK_SIDE_PAD = 40;                // 40px content inset on all sides
const KK_BTN_W    = KK_W - KK_SIDE_PAD * 2;  // 1432 — main CTA width
const KK_BTN_H    = 184;
/* 40px breathing room from the bars too. Equals KK_BOTTOMBAR_H (152) + 40. */
const KK_BTN_BOTTOM = 192;

/* ── Medical Mall design tokens ─────────────────────────────────────── */
const T = {
  paper:    "#FAF7F2",
  paper2:   "#F4EFE6",
  white:    "#FFFFFF",
  ink900:   "#14201B",
  ink700:   "#2D3D35",
  ink500:   "#4F5C56",
  ink400:   "#6E7A74",
  greenCta: "#16933F",
  green800: "#0F6A2E",
  green100: "rgba(22,147,63,0.07)",
  green100b:"rgba(22,147,63,0.14)",
  gold300:  "#E2C896",
  warnAmber:"#F5B400",
  shadowSm: "0 1px 2px rgba(20,32,27,.06), 0 1px 1px rgba(20,32,27,.04)",
  shadowMd: "0 6px 18px -8px rgba(20,32,27,.18), 0 2px 4px rgba(20,32,27,.05)",
  shadowLg: "0 24px 48px -20px rgba(20,32,27,.22), 0 4px 10px rgba(20,32,27,.06)",
};

/* ── Global CSS ──────────────────────────────────────────────────────── */
const KioskStyles = () => {
  useEffect(() => {
    const id = "ar-kiosk-css";
    if (document.getElementById(id)) return;
    const s = document.createElement("style");
    s.id = id;
    s.textContent = `
      .kk-root {
        width: ${KK_W}px;
        min-height: ${KK_H}px;
        background: #FAF7F2;
        font-family: 'PP Neue Montreal', 'Inter', sans-serif;
        overflow: hidden;
        position: relative;
        touch-action: manipulation;
        user-select: none;
      }

      @keyframes kkSlideIn {
        from { transform: translateX(100%); opacity: 0; }
        to   { transform: translateX(0);    opacity: 1; }
      }

      /* Attract pulse — green-cta glow ring */
      @keyframes kkPulse {
        0%,100% { box-shadow: 0 17px 56px -11px rgba(22,147,63,0.45), 0 0 0 0   rgba(22,147,63,0.38); transform: scale(1.00); }
        50%      { box-shadow: 0 17px 56px -11px rgba(22,147,63,0.55), 0 0 0 31px rgba(22,147,63,0);   transform: scale(1.02); }
      }
      .kk-pulse { animation: kkPulse 2.6s cubic-bezier(0.34,1.56,0.64,1) infinite; }

      @keyframes kkBob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
      .kk-bob { animation: kkBob 3.8s ease-in-out infinite; }

      /* Countdown — starts at scale(0.92), never scale(0) */
      @keyframes kkCount {
        0%  { transform: scale(0.92); opacity: 0; }
        22% { transform: scale(1.06); opacity: 1; }
        70% { transform: scale(1.00); opacity: 1; }
        100%{ transform: scale(1.10); opacity: 0; }
      }
      .kk-count { animation: kkCount 1s cubic-bezier(0.23,1,0.32,1) forwards; }

      /* Shutter — fast flash, asymmetric slow fade */
      @keyframes kkShutter { 0%{opacity:0} 12%{opacity:0.82} 100%{opacity:0} }
      .kk-shutter { animation: kkShutter 320ms cubic-bezier(0.23,1,0.32,1) forwards; }

      /* Camera ring — opacity only, GPU-safe */
      @keyframes kkGlow { 0%,100%{opacity:.45} 50%{opacity:1} }
      .kk-ring        { animation: kkGlow 2.2s cubic-bezier(0.77,0,0.175,1) infinite; }
      .kk-ring-warn   { animation: kkGlow 1.6s ease-in-out infinite; border-color: #F5B400 !important; }
      .kk-ring-ready  { animation: none; opacity: 1; border-color: #16933F !important; border-style: solid !important; }

      /* Captured-photo soft cutout — fades the rectangular frame edges away
         on the paper backdrop so only the subject reads. */
      .kk-cutout {
        -webkit-mask-image: radial-gradient(ellipse 72% 70% at 50% 46%, #000 55%, rgba(0,0,0,0) 100%);
                mask-image: radial-gradient(ellipse 72% 70% at 50% 46%, #000 55%, rgba(0,0,0,0) 100%);
      }

      /* Countdown progress fill — sweeps from left to right inside the CTA.
         Driven by --kk-dur so the duration matches the remaining countdown. */
      @keyframes kkCdFill { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      .kk-cd-fill {
        position: absolute; inset: 0;
        background: rgba(255,255,255,0.20);
        transform-origin: left center;
        animation: kkCdFill var(--kk-dur, 3s) linear forwards;
      }

      /* Spinner for the 'Generating catalog' overlay */
      @keyframes kkSpin { from { transform: rotate(0); } to { transform: rotate(360deg); } }
      .kk-spin {
        width: 132px; height: 132px; border-radius: 50%;
        border: 10px solid rgba(22,147,63,0.15);
        border-top-color: #16933F;
        animation: kkSpin 1.05s linear infinite;
      }

      .kk-btn {
        transition: transform 160ms cubic-bezier(0.23,1,0.32,1),
                    box-shadow 160ms cubic-bezier(0.23,1,0.32,1);
        outline: none;
      }
      .kk-btn:active { transform: scale(0.97) !important; }

      .kk-card {
        opacity: 0;
        transform: translateY(20px);
        animation: kkCard 300ms cubic-bezier(0.23,1,0.32,1) forwards;
      }
      @keyframes kkCard { to { opacity: 1; transform: translateY(0); } }
      .kk-card:nth-child(1) { animation-delay: 60ms;  }
      .kk-card:nth-child(2) { animation-delay: 135ms; }

      @keyframes kkToast {
        from { opacity:0; transform:translate(-50%, 25px); }
        to   { opacity:1; transform:translate(-50%, 0);    }
      }
      .kk-toast { animation: kkToast 280ms cubic-bezier(0.23,1,0.32,1); }

      @media (hover: hover) and (pointer: fine) {
        .kk-choice:hover {
          border-color: #16933F !important;
          box-shadow: 0 11px 39px rgba(22,147,63,0.11) !important;
          transform: translateY(-3px);
          transition: transform 180ms cubic-bezier(0.23,1,0.32,1),
                      box-shadow 180ms ease, border-color 160ms ease;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .kk-pulse, .kk-ring, .kk-card, .kk-bob { animation: none !important; opacity: 1 !important; transform: none !important; }
        .kk-count { animation: kkCount .7s ease forwards !important; }
        .kk-btn { transition: none !important; }
      }
    `;
    document.head.appendChild(s);
    return () => { const el = document.getElementById(id); if (el) el.remove(); };
  }, []);
  return null;
};

/* ── Screen transition ──────────────────────────────────────────────── */
const ScreenTransition = ({ screenKey, children }) => {
  const [cur, setCur]   = useState(screenKey);
  const [prev, setPrev] = useState(null);
  useEffect(() => {
    if (screenKey === cur) return;
    setPrev(cur);
    setCur(screenKey);
    const t = setTimeout(() => setPrev(null), 360);
    return () => clearTimeout(t);
  }, [screenKey]);
  return (
    <div style={{ position:"relative", width:"100%", height: KK_H, overflow:"hidden" }}>
      {prev !== null && (
        <div style={{ position:"absolute", inset:0, pointerEvents:"none", zIndex:1 }}>
          {children(prev)}
        </div>
      )}
      <div
        key={cur}
        style={{
          position:"absolute", inset:0, zIndex:2,
          background: T.paper,
          animation: prev !== null ? "kkSlideIn 320ms cubic-bezier(0.32,0.72,0,1) both" : "none",
        }}
      >
        {children(cur)}
      </div>
    </div>
  );
};

/* ── Top bar — Reliance Foundation Hospital logo (shown on screens 2+).
   Optional rightSlot for screen-specific actions (e.g. wishlist on catalog). */
const KK_TOPBAR_H = 152;
const KioskTopBar = ({ rightSlot }) => (
  <div style={{
    position:"absolute", top:0, left:0, right:0,
    height: KK_TOPBAR_H,
    padding:"24px 40px",
    display:"flex", alignItems:"center", justifyContent:"space-between",
    background: T.paper,
    borderBottom:`1px solid rgba(20,32,27,0.06)`,
    zIndex: 50,
  }}>
    <img
      src="logo.png"
      alt="Reliance Foundation Hospital"
      style={{ height:88, width:"auto", display:"block", objectFit:"contain" }}
      onError={(e) => { e.target.style.display="none"; }}
    />
    {rightSlot}
  </div>
);

/* ── Bottom bar — full-width row with the wheelchair button on the left.
   Optional rightSlot for screen-specific actions (e.g. sign-out on catalog). */
const KK_BOTTOMBAR_H = 152;   // 20px top + 112 button + 20px bottom
const KioskBottomBar = ({ rightSlot }) => (
  <div style={{
    position:"absolute", left:0, right:0, bottom:0,
    height: KK_BOTTOMBAR_H,
    padding:"20px 40px 20px 20px",
    display:"flex", alignItems:"center", justifyContent:"space-between",
    background: T.paper,
    borderTop:`1px solid rgba(20,32,27,0.06)`,
    zIndex:60,
  }}>
    <button
      className="kk-btn"
      aria-label="Accessibility mode"
      onClick={() => {}}
      style={{
        width:112, height:112, borderRadius:18,
        background: T.ink900, border:"none",
        display:"flex", alignItems:"center", justifyContent:"center",
        cursor:"pointer",
        boxShadow: T.shadowMd,
      }}
    >
      <img
        src="images/Kiosk Images/wheelchair.png"
        alt=""
        style={{ width:78, height:78, display:"block", objectFit:"contain", filter:"invert(1)" }}
        onError={(e) => { e.target.style.display="none"; }}
      />
    </button>
    {rightSlot}
  </div>
);

/* ── Screen 1 — Welcome / Attract ────────────────────────────────────── */
const Screen1Welcome = ({ onStart }) => (
  <div style={{
    width: KK_W, minHeight: KK_H,
    background: T.paper,
    display:"flex", flexDirection:"column",
    alignItems:"center", justifyContent:"flex-start",
    padding:`40px 40px ${KK_BTN_BOTTOM}px`,
    position:"relative", overflow:"hidden",
  }}>
    {/* Decorative radial blobs */}
    <div style={{
      position:"absolute", top:-308, right:-252,
      width:924, height:924, borderRadius:"50%",
      background:"radial-gradient(circle, #F4EFE6 0%, transparent 68%)",
      pointerEvents:"none",
    }}/>
    <div style={{
      position:"absolute", bottom:-252, left:-224,
      width:728, height:728, borderRadius:"50%",
      background:"radial-gradient(circle, rgba(22,147,63,0.06) 0%, transparent 70%)",
      pointerEvents:"none",
    }}/>

    {/* Reliance Foundation logo — centered above the illustration */}
    <img
      src="logo.png"
      alt="Reliance Foundation Hospital"
      style={{ height:140, width:"auto", objectFit:"contain", display:"block", marginBottom:36, zIndex:1 }}
      onError={(e) => { e.target.style.display="none"; }}
    />

    {/* Illustration — end-to-end with 20px L/R gap */}
    <div className="kk-bob" style={{ marginBottom:60, zIndex:1 }}>
      <img
        src="images/Kiosk Images/illustration.png"
        alt="Virtual Wig Try-On Illustration"
        style={{ width: KK_BTN_W, height:"auto", objectFit:"contain", display:"block" }}
        onError={(e) => { e.target.style.display="none"; }}
      />
    </div>

    <h1 style={{
      fontFamily:"'PP Neue Montreal','Inter',sans-serif",
      fontWeight:500, fontSize:95,
      color: T.ink900, textAlign:"center",
      lineHeight:1.1, margin:"0 0 28px",
      letterSpacing:"-.022em", zIndex:1,
    }}>
      Find Your Perfect Look
    </h1>

    <p style={{
      fontFamily:"'PP Neue Montreal', 'Inter', sans-serif",
      fontWeight:400, fontSize:46,
      color: T.ink500, textAlign:"center",
      lineHeight:1.5, margin:0,
      maxWidth:1180, zIndex:1,
    }}>
      Try different wig styles virtually
    </p>

    <button
      className="kk-btn kk-pulse"
      onClick={onStart}
      style={{
        width: KK_BTN_W, height: KK_BTN_H, borderRadius:9999,
        background: T.greenCta, border:"none",
        display:"flex", alignItems:"center", justifyContent:"center", gap:32,
        cursor:"pointer", zIndex:1,
        marginTop:"auto",
      }}
    >
      <Icon name="hand" size={60} stroke={1.8} color="#fff"/>
      <span style={{
        fontFamily:"'PP Neue Montreal','Inter',sans-serif",
        fontWeight:600, fontSize:58, color:"#fff", letterSpacing:".01em",
      }}>Tap to Get Started</span>
    </button>
  </div>
);

/* ── Screen 2 — Photo Choice ─────────────────────────────────────────── */
const ChoiceCard = ({ iconName, title, desc, onClick }) => {
  const [pressed, setPressed] = useState(false);
  return (
    <button
      className="kk-btn kk-choice kk-card"
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => { setPressed(false); onClick(); }}
      onPointerLeave={() => setPressed(false)}
      style={{
        width:"100%", minHeight:320,
        borderRadius:34,
        background: T.paper2,
        border:`2px solid rgba(20,32,27,0.09)`,
        boxShadow: pressed ? "none" : T.shadowMd,
        display:"flex", alignItems:"center",
        padding:"64px 84px", gap:72,
        cursor:"pointer", textAlign:"left",
        transition:"border-color 160ms ease, box-shadow 160ms ease",
      }}
    >
      <div style={{
        width:136, height:136, borderRadius:"50%",
        background:"rgba(22,147,63,0.10)",
        display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
      }}>
        <Icon name={iconName} size={62} stroke={1.6} color={T.greenCta}/>
      </div>
      <div style={{ flex:1 }}>
        <div style={{
          fontFamily:"'PP Neue Montreal','Inter',sans-serif",
          fontWeight:600, fontSize:56, color: T.ink900, marginBottom:18,
        }}>{title}</div>
        <div style={{
          fontFamily:"'PP Neue Montreal','Inter',sans-serif",
          fontWeight:400, fontSize:38, color: T.ink500, lineHeight:1.5,
        }}>{desc}</div>
      </div>
      <span style={{ flexShrink:0, display:"flex" }}>
        <Icon name="chevron" size={46} stroke={1.6} color={T.ink400}/>
      </span>
    </button>
  );
};

const Screen2Choice = ({ onCamera, onNoPhoto, onBack }) => (
  <div style={{
    width: KK_W, minHeight: KK_H,
    background: T.paper,
    display:"flex", flexDirection:"column",
    padding:`${KK_TOPBAR_H + 40}px ${KK_SIDE_PAD}px ${KK_BTN_BOTTOM}px`,
  }}>
    <button className="kk-btn" onClick={onBack} style={{
      display:"flex", alignItems:"center", gap:18,
      background:"none", border:"none", cursor:"pointer",
      padding:"11px 0", marginBottom:48, alignSelf:"flex-start",
    }}>
      <Icon name="arrow-left" size={48} stroke={1.8} color={T.ink400}/>
      <span style={{
        fontFamily:"'PP Neue Montreal','Inter',sans-serif",
        fontWeight:500, fontSize:36, color: T.ink400,
      }}>Go Back</span>
    </button>

    <h2 style={{
      fontFamily:"'PP Neue Montreal','Inter',sans-serif",
      fontWeight:500, fontSize:84,
      color: T.ink900, margin:"0 0 60px",
      lineHeight:1.1, letterSpacing:"-.02em",
      whiteSpace:"nowrap",
    }}>
      How would you like to try on wigs?
    </h2>

    <div style={{ display:"flex", flexDirection:"column", gap:39 }}>
      <ChoiceCard
        iconName="camera"
        title="Take a Quick Photo"
        desc="We'll snap a photo so you can see each wig on your own face."
        onClick={onCamera}
      />
      <ChoiceCard
        iconName="user"
        title="Continue Without a Photo"
        desc="Browse styles on a default model — no camera needed."
        onClick={onNoPhoto}
      />
    </div>
  </div>
);

/* ── Screen 3 — Camera Capture ───────────────────────────────────────── */
/* Prototype: instead of the live webcam stream we render a fixed portrait
   (images/Kiosk Images/image.png) so the screen demonstrates the alignment +
   countdown flow in a browser preview where the camera isn't wired up. */
const FACE_IMG = "images/Kiosk Images/image.png";

const Screen3Camera = ({ onConfirm, onBack }) => {
  const [phase, setPhase]             = useState("aligning");
  const [countNum, setCountNum]       = useState(null);
  const [capturedUrl, setCapturedUrl] = useState(null);
  const [shutter, setShutter]         = useState(false);

  /* Auto-flow: aligning (yellow 4s) → countdown (green 3-2-1) → captured */
  useEffect(() => {
    if (phase !== "aligning") return;
    const t = setTimeout(() => {
      setPhase("countdown");
      let n = 3; setCountNum(n);
      const tick = () => {
        n--;
        if (n > 0) { setTimeout(() => { setCountNum(n); tick(); }, 1000); }
        else       { setTimeout(capture, 1000); }
      };
      tick();
    }, 4000);
    return () => clearTimeout(t);
  }, [phase]);

  const capture = () => {
    setCapturedUrl(FACE_IMG);
    setShutter(true);
    setTimeout(() => setShutter(false), 320);
    setPhase("captured");
  };

  const retake = () => {
    setCapturedUrl(null);
    setCountNum(null);
    setPhase("aligning");
  };
  const stopAndBack = () => onBack();

  /* ── Viewport sizing ──
     Stage height tuned so the captured screen fits the Confirm/Retake row
     plus the privacy strip above the bottom bar (KK_BTN_BOTTOM = 192). */
  const STAGE_W = KK_BTN_W;       // matches the 40px-gutter content width (1432)
  const STAGE_H = 1400;           // camera card height
  const CIRCLE  = 940;            // sharp face circle diameter

  const ringClass =
    phase === "countdown" || phase === "captured" ? "kk-ring-ready"
    : phase === "aligning" ? "kk-ring kk-ring-warn"
    : "kk-ring";

  const headline =
    phase === "captured" ? "Looking great!"
    : phase === "countdown" ? "Hold still…"
    : phase === "aligning" ? "Almost there — face centred"
    : "Position your face in the circle";

  const subline =
    phase === "captured" ? "Confirm or retake."
    : phase === "countdown" ? "Capturing in a moment."
    : phase === "aligning" ? "Looking good — hold steady."
    : "Look straight at the camera.";

  return (
    <div style={{
      width: KK_W, minHeight: KK_H,
      background: T.paper,
      display:"flex", flexDirection:"column",
      alignItems:"center", padding:`${KK_TOPBAR_H + 40}px ${KK_SIDE_PAD}px ${KK_BTN_BOTTOM}px`,
    }}>
      <div style={{ width:"100%", marginBottom:36 }}>
        <button className="kk-btn" onClick={stopAndBack} style={{
          display:"flex", alignItems:"center", gap:18,
          background:"none", border:"none", cursor:"pointer", padding:"11px 0",
        }}>
          <Icon name="arrow-left" size={48} stroke={1.8} color={T.ink400}/>
          <span style={{
            fontFamily:"'PP Neue Montreal','Inter',sans-serif",
            fontWeight:500, fontSize:36, color: T.ink400,
          }}>Go Back</span>
        </button>
      </div>

      <h2 style={{
        fontFamily:"'PP Neue Montreal','Inter',sans-serif",
        fontWeight:500, fontSize:62,
        color: T.ink900, margin:"0 0 14px",
        textAlign:"center", letterSpacing:"-.016em",
      }}>{headline}</h2>
      <p style={{
        fontFamily:"'PP Neue Montreal', 'Inter', sans-serif",
        fontWeight:400, fontSize:40, color: T.ink500,
        margin:"0 0 28px", textAlign:"center", lineHeight:1.4,
      }}>{subline}</p>

      {/* Camera stage — blurred backdrop + sharp face circle */}
      <div style={{
        position:"relative", width: STAGE_W, height: STAGE_H,
        borderRadius:48, overflow:"hidden",
        background: T.paper2,
        marginBottom:32,
        boxShadow: T.shadowMd,
      }}>
        {/* Blurred backdrop — fills stage */}
        {phase !== "captured" && (
          <img
            src={FACE_IMG}
            alt=""
            style={{
              position:"absolute", inset:0,
              width:"100%", height:"100%", objectFit:"cover",
              filter:"blur(48px) saturate(1.05) brightness(0.78)",
            }}
          />
        )}

        {/* Captured-photo backdrop (paper) when in captured phase */}
        {phase === "captured" && (
          <div style={{ position:"absolute", inset:0, background: T.paper }}/>
        )}

        {/* Captured photo — soft-mask cutout so background fades into paper */}
        {phase === "captured" && capturedUrl && (
          <img
            src={capturedUrl}
            alt="Your photo"
            className="kk-cutout"
            style={{
              position:"absolute", inset:0,
              width:"100%", height:"100%", objectFit:"cover",
            }}
          />
        )}

        {/* Sharp circular face image */}
        {phase !== "captured" && (
          <div style={{
            position:"absolute", left:"50%", top:"50%",
            transform:"translate(-50%, -50%)",
            width: CIRCLE, height: CIRCLE,
            borderRadius:"50%", overflow:"hidden",
            background:"#1A2620",
            boxShadow:"0 24px 80px -16px rgba(20,32,27,0.45)",
          }}>
            <img
              src={FACE_IMG}
              alt="Your face"
              style={{ width:"100%", height:"100%", objectFit:"cover" }}
            />
          </div>
        )}

        {/* Ring around the circle */}
        {phase !== "captured" && (
          <div style={{
            position:"absolute", left:"50%", top:"50%",
            transform:"translate(-50%, -50%)",
            width: CIRCLE, height: CIRCLE,
            borderRadius:"50%", pointerEvents:"none", zIndex:4,
          }}>
            <div
              className={ringClass}
              style={{
                width:"100%", height:"100%", borderRadius:"50%",
                border: phase === "countdown"
                  ? `14px solid ${T.greenCta}`
                  : phase === "aligning"
                    ? `10px dashed ${T.warnAmber}`
                    : `14px solid ${T.greenCta}`,
                boxShadow: phase === "aligning"
                  ? `0 0 0 12px rgba(245,180,0,0.14), 0 0 64px rgba(245,180,0,0.18)`
                  : `0 0 0 12px rgba(22,147,63,0.14), 0 0 64px rgba(22,147,63,0.12)`,
              }}
            />
          </div>
        )}

        {/* Countdown number */}
        {phase === "countdown" && countNum && (
          <div className="kk-count" key={countNum} style={{
            position:"absolute", left:"50%", top:"50%",
            transform:"translate(-50%, -50%)",
            zIndex:10,
            fontFamily:"'PP Neue Montreal','Inter',sans-serif",
            fontWeight:700, fontSize:360,
            color:"#fff",
            textShadow:"0 6px 56px rgba(20,32,27,0.75)",
            lineHeight:1,
          }}>{countNum}</div>
        )}

        {/* Shutter flash */}
        {shutter && (
          <div className="kk-shutter" style={{
            position:"absolute", inset:0,
            background: T.paper, zIndex:20, pointerEvents:"none",
          }}/>
        )}
      </div>

      {/* Captured: Confirm + Retake row, privacy notice underneath, the whole
         block bottom-anchored so it sits flush above the wheelchair bar. */}
      {phase === "captured" && (
        <div style={{ width: KK_BTN_W, marginTop:"auto" }}>
          <div style={{ display:"flex", gap:32 }}>
            <button
              className="kk-btn"
              onClick={() => onConfirm(capturedUrl)}
              style={{
                flex:1, height: KK_BTN_H, borderRadius:9999,
                background: T.greenCta, border:"none",
                display:"flex", alignItems:"center", justifyContent:"center", gap:24,
                cursor:"pointer",
                boxShadow:"0 17px 45px -11px rgba(22,147,63,0.48)",
              }}
            >
              <Icon name="check" size={50} stroke={2.2} color="#fff"/>
              <span style={{
                fontFamily:"'PP Neue Montreal','Inter',sans-serif",
                fontWeight:600, fontSize:48, color:"#fff",
              }}>Confirm</span>
            </button>
            <button
              className="kk-btn"
              onClick={retake}
              style={{
                flex:1, height: KK_BTN_H, borderRadius:9999,
                background:"transparent",
                border:`2px solid rgba(20,32,27,0.18)`,
                display:"flex", alignItems:"center", justifyContent:"center", gap:24,
                cursor:"pointer",
              }}
            >
              <Icon name="refresh" size={44} stroke={1.8} color={T.ink900}/>
              <span style={{
                fontFamily:"'PP Neue Montreal','Inter',sans-serif",
                fontWeight:500, fontSize:46, color: T.ink900,
              }}>Retake</span>
            </button>
          </div>

          <div style={{
            marginTop:28,
            background: T.green100,
            border:`1px solid ${T.green100b}`,
            borderRadius:20, padding:"28px 40px",
            display:"flex", alignItems:"center", gap:24,
          }}>
            <span style={{ flexShrink:0, display:"flex" }}>
              <Icon name="lock" size={40} stroke={1.8} color={T.greenCta}/>
            </span>
            <span style={{
              fontFamily:"'PP Neue Montreal','Inter',sans-serif",
              fontWeight:400, fontSize:34, color: T.ink700, lineHeight:1.45,
            }}>
              This experience is fully private — your photo is used only for virtual try-on and disappears once you're done.
            </span>
          </div>
        </div>
      )}

      {/* Countdown CTA — appears only when the ring goes green. End-to-end
         pill with a left→right progress fill that runs the 3s countdown. */}
      {phase === "countdown" && (
        <div style={{
          width: KK_BTN_W, marginTop:"auto",
          height: KK_BTN_H, borderRadius:9999,
          background: T.greenCta,
          position:"relative", overflow:"hidden",
          boxShadow:"0 17px 45px -11px rgba(22,147,63,0.48)",
        }}>
          <div className="kk-cd-fill"/>
          <div style={{
            position:"relative", zIndex:1,
            width:"100%", height:"100%",
            display:"flex", alignItems:"center", justifyContent:"center", gap:26,
          }}>
            <Icon name="camera" size={54} stroke={1.8} color="#fff"/>
            <span style={{
              fontFamily:"'PP Neue Montreal','Inter',sans-serif",
              fontWeight:600, fontSize:52, color:"#fff",
            }}>Clicking in {countNum}…</span>
          </div>
        </div>
      )}

      {/* Pre-capture privacy strip — sits at bottom while user is being framed.
         Hidden during countdown (the CTA takes its place). */}
      {phase !== "captured" && phase !== "countdown" && (
        <div style={{
          width: KK_BTN_W, marginTop:"auto",
          background: T.green100,
          border:`1px solid ${T.green100b}`,
          borderRadius:20, padding:"32px 48px",
          display:"flex", alignItems:"center", gap:24,
        }}>
          <span style={{ flexShrink:0, display:"flex" }}>
            <Icon name="lock" size={46} stroke={1.8} color={T.greenCta}/>
          </span>
          <span style={{
            fontFamily:"'PP Neue Montreal','Inter',sans-serif",
            fontWeight:400, fontSize:40, color: T.ink700, lineHeight:1.5,
          }}>
            This experience is fully private — your photo is used only for virtual try-on and disappears once you're done.
          </span>
        </div>
      )}
    </div>
  );
};

/* ── Generating-catalog overlay — sits above the kiosk content while we
   pretend to assemble the personalised catalog (5–6 s). */
const KioskGeneratingOverlay = () => (
  <div style={{
    position:"absolute", inset:0, zIndex:200,
    background: T.paper,
    display:"flex", flexDirection:"column",
    alignItems:"center", justifyContent:"center", gap:56,
  }}>
    <div className="kk-spin"/>
    <div style={{ textAlign:"center" }}>
      <div style={{
        fontFamily:"'PP Neue Montreal','Inter',sans-serif",
        fontWeight:500, fontSize:72, color: T.ink900,
        letterSpacing:"-.018em", marginBottom:18,
      }}>Generating catalog…</div>
      <div style={{
        fontFamily:"'PP Neue Montreal','Inter',sans-serif",
        fontWeight:400, fontSize:36, color: T.ink500,
      }}>Matching wig styles to your look.</div>
    </div>
  </div>
);

/* ── Catalog data + slots ────────────────────────────────────────────── */
const CATALOG_CATEGORIES = [
  { id:"wavy",     label:"Wavy"     },
  { id:"straight", label:"Straight" },
  { id:"curly",    label:"Curly"    },
  { id:"bangs",    label:"Bangs"    },
  { id:"short",    label:"Short"    },
];

const PDP_HOW_TO_USE =
  "Slide on from front to back and anchor at the temples. The grippy inner band keeps the cap in place through a full day's wear — no clips or tape needed.";
const PDP_HOW_TO_WASH =
  "Soak in cool water with a mild sulphate-free shampoo for five minutes. Rinse without rubbing, blot with a soft towel, and air-dry on a wig stand. Avoid heat above 60°C.";

const CATALOG_PRODUCTS = [
  {
    sku:"RFH-W001", name:"Coastal Wave", price:14999, image:"images/Kiosk Images/girlwig1.png",
    description:"Effortless beachy waves cut to a shoulder length. Hand-tied virgin remy hair on a breathable mono cap that blends naturally into your hairline.",
    howToUse: PDP_HOW_TO_USE,
    howToWash: PDP_HOW_TO_WASH,
  },
  {
    sku:"RFH-W002", name:"Sun-Kissed Layers", price:16499, image:"images/Kiosk Images/girlwig2.png",
    description:"Soft, sunlit layers framing the face with subtle bangs. Lightweight wefted construction designed for everyday comfort over long sessions.",
    howToUse: PDP_HOW_TO_USE,
    howToWash: PDP_HOW_TO_WASH,
  },
  {
    sku:"RFH-W003", name:"Soft Ombre Bob",    price:13499, image:"images/Kiosk Images/girlwig3.png",
    description:"A chin-grazing bob with a gentle warm-to-cool ombre. Pre-styled and ready to wear — straight out of the box.",
    howToUse: PDP_HOW_TO_USE,
    howToWash: PDP_HOW_TO_WASH,
  },
  {
    sku:"RFH-W004", name:"Cascade Curls",     price:17999, image:"images/Kiosk Images/girlwig4.png",
    description:"Voluminous loose curls with a natural part. Heat-friendly fibre that holds its shape and lets you re-style with low heat.",
    howToUse: PDP_HOW_TO_USE,
    howToWash: PDP_HOW_TO_WASH,
  },
];

/* Right-slot widgets for the persistent top/bottom bars on the catalog. */
const KioskWishlistButton = () => (
  <button
    className="kk-btn"
    aria-label="Wishlist"
    onClick={() => {}}
    style={{
      width:104, height:104, borderRadius:18,
      background: T.greenCta, border:"none",
      display:"flex", alignItems:"center", justifyContent:"center",
      cursor:"pointer",
      boxShadow:"0 12px 32px -10px rgba(22,147,63,0.45)",
    }}
  >
    <Icon name="heart" size={54} stroke={1.8} color="#fff"/>
  </button>
);

const KioskSignOutButton = ({ onSignOut }) => (
  <button
    className="kk-btn"
    aria-label="Sign out"
    onClick={onSignOut}
    style={{
      padding:"12px 4px",
      background:"transparent", border:"none",
      display:"flex", alignItems:"center", gap:16,
      cursor:"pointer",
    }}
  >
    <Icon name="LogOut" size={44} stroke={1.8} color={T.ink900}/>
    <span style={{
      fontFamily:"'PP Neue Montreal','Inter',sans-serif",
      fontWeight:500, fontSize:36, color: T.ink900, letterSpacing:".01em",
    }}>Log out Session</span>
  </button>
);

/* ── Catalog product card ────────────────────────────────────────────── */
const CatalogProductCard = ({ name, price, sku, image, onOpen }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div
      onClick={onOpen}
      style={{
        background: T.white, borderRadius:28, overflow:"hidden",
        position:"relative", display:"flex", flexDirection:"column",
        boxShadow: T.shadowSm,
        cursor: onOpen ? "pointer" : "default",
      }}
    >
      <button
        className="kk-btn"
        aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
        onClick={(e) => { e.stopPropagation(); setLiked(v => !v); }}
        style={{
          position:"absolute", top:24, right:24, zIndex:2,
          width:72, height:72, borderRadius:"50%",
          background: liked ? T.greenCta : "rgba(255,255,255,0.92)",
          border:"none",
          display:"flex", alignItems:"center", justifyContent:"center",
          cursor:"pointer",
          boxShadow: T.shadowSm,
        }}
      >
        <Icon
          name="heart"
          size={36} stroke={1.8}
          color={liked ? "#fff" : T.ink900}
          fill={liked ? "#fff" : "none"}
        />
      </button>
      <div style={{
        aspectRatio:"1/1",
        background:"radial-gradient(120% 90% at 35% 25%, #F6EFE2 0%, #ECDFC4 65%, #D9C9A6 100%)",
      }}>
        <img
          src={image} alt={name}
          style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}
          onError={(e) => { e.target.style.display="none"; }}
        />
      </div>
      <div style={{ padding:"32px 36px 36px" }}>
        <div style={{
          fontFamily:"'PP Neue Montreal','Inter',sans-serif",
          fontWeight:500, fontSize:38, color: T.ink900,
          letterSpacing:"-.012em", marginBottom:10,
        }}>{name}</div>
        <div style={{
          fontFamily:"'PP Neue Montreal','Inter',sans-serif",
          fontWeight:600, fontSize:34, color: T.greenCta,
          marginBottom:14,
        }}>₹{price.toLocaleString("en-IN")}</div>
        <div style={{
          fontFamily:"'PP Neue Montreal','Inter',sans-serif",
          fontWeight:400, fontSize:24, color: T.ink400,
          letterSpacing:".06em", textTransform:"uppercase",
        }}>SKU · {sku}</div>
      </div>
    </div>
  );
};

/* ── Screen 4 — Personalised Catalog ─────────────────────────────────── */
const Screen4Catalog = ({ onProduct }) => {
  const [activeCat, setActiveCat] = useState(CATALOG_CATEGORIES[0].id);
  const SIDEBAR_W = 380;
  return (
    <div style={{
      width: KK_W, minHeight: KK_H,
      background: T.paper,
      padding:`${KK_TOPBAR_H + 40}px ${KK_SIDE_PAD}px ${KK_BTN_BOTTOM}px`,
      display:"flex", flexDirection:"row", gap:32,
    }}>
      {/* Categories sidebar */}
      <aside style={{
        width: SIDEBAR_W, flexShrink:0,
        padding:"40px 32px",
        borderRadius:24,
        background: T.paper2,
      }}>
        <div style={{
          fontFamily:"'PP Neue Montreal','Inter',sans-serif",
          fontWeight:600, fontSize:24, color: T.ink400,
          letterSpacing:".10em", textTransform:"uppercase",
          marginBottom:32,
        }}>Categories</div>
        <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
          {CATALOG_CATEGORIES.map(c => {
            const on = c.id === activeCat;
            return (
              <button
                key={c.id}
                className="kk-btn"
                onClick={() => setActiveCat(c.id)}
                style={{
                  textAlign:"left",
                  padding:"22px 24px",
                  borderRadius:18,
                  background: on ? T.white : "transparent",
                  border: on ? `2px solid ${T.greenCta}` : `2px solid transparent`,
                  cursor:"pointer",
                  fontFamily:"'PP Neue Montreal','Inter',sans-serif",
                  fontWeight: on ? 600 : 500,
                  fontSize:36, color: on ? T.ink900 : T.ink700,
                  boxShadow: on ? T.shadowSm : "none",
                }}
              >{c.label}</button>
            );
          })}
        </div>
      </aside>

      {/* Main: filter row + product grid */}
      <main style={{
        flex:1, padding:"8px 0 0",
        display:"flex", flexDirection:"column",
        minWidth:0,
      }}>
        <div style={{
          display:"flex", alignItems:"center", justifyContent:"space-between",
          marginBottom:32,
        }}>
          <div style={{
            fontFamily:"'PP Neue Montreal','Inter',sans-serif",
            fontWeight:500, fontSize:32, color: T.ink500,
          }}>
            {CATALOG_PRODUCTS.length} styles matched to you
          </div>
          <button
            className="kk-btn"
            style={{
              height:84, padding:"0 36px", borderRadius:9999,
              background: T.white, border:`2px solid rgba(20,32,27,0.12)`,
              display:"flex", alignItems:"center", gap:16,
              cursor:"pointer",
            }}
          >
            <Icon name="filter" size={32} stroke={1.8} color={T.ink900}/>
            <span style={{
              fontFamily:"'PP Neue Montreal','Inter',sans-serif",
              fontWeight:500, fontSize:30, color: T.ink900,
            }}>Filter</span>
          </button>
        </div>

        <div style={{
          display:"grid",
          gridTemplateColumns:"1fr 1fr",
          gap:32,
        }}>
          {CATALOG_PRODUCTS.map(p => (
            <CatalogProductCard key={p.sku} {...p} onOpen={() => onProduct && onProduct(p)}/>
          ))}
        </div>
      </main>
    </div>
  );
};

/* ── Screen 5 — Product Detail (PDP) ─────────────────────────────────── */
/* Scrolls vertically inside the kiosk content area while the "See full look"
   CTA stays pinned just above the bottom bar. */
const KK_PDP_CTA_BAND = 160;   // sticky CTA strip height (CTA + padding)

const PdpSection = ({ title, body }) => (
  <section style={{ marginBottom:48 }}>
    <h3 style={{
      fontFamily:"'PP Neue Montreal','Inter',sans-serif",
      fontWeight:600, fontSize:24, color: T.ink400,
      letterSpacing:".10em", textTransform:"uppercase",
      margin:"0 0 18px",
    }}>{title}</h3>
    <p style={{
      fontFamily:"'PP Neue Montreal','Inter',sans-serif",
      fontWeight:400, fontSize:34, color: T.ink700, lineHeight:1.45,
      margin:0,
    }}>{body}</p>
  </section>
);

const PdpRecommendedCard = ({ p, onOpen }) => (
  <div
    onClick={onOpen}
    style={{
      width:420, flexShrink:0,
      background: T.white, borderRadius:24, overflow:"hidden",
      boxShadow: T.shadowSm, cursor:"pointer",
      display:"flex", flexDirection:"column",
    }}
  >
    <div style={{
      aspectRatio:"1/1",
      background:"radial-gradient(120% 90% at 35% 25%, #F6EFE2 0%, #ECDFC4 65%, #D9C9A6 100%)",
    }}>
      <img
        src={p.image} alt={p.name}
        style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}
        onError={(e) => { e.target.style.display="none"; }}
      />
    </div>
    <div style={{ padding:"24px 28px 28px" }}>
      <div style={{
        fontFamily:"'PP Neue Montreal','Inter',sans-serif",
        fontWeight:500, fontSize:32, color: T.ink900, marginBottom:8,
      }}>{p.name}</div>
      <div style={{
        fontFamily:"'PP Neue Montreal','Inter',sans-serif",
        fontWeight:600, fontSize:28, color: T.greenCta,
      }}>₹{p.price.toLocaleString("en-IN")}</div>
    </div>
  </div>
);

const Screen5PDP = ({ product, onBack, onProduct }) => {
  if (!product) return null;
  const recommended = CATALOG_PRODUCTS.filter(p => p.sku !== product.sku);
  return (
    <div style={{
      width: KK_W, height: KK_H,
      background: T.paper,
      position:"relative",
    }}>
      {/* Scrollable content area, sits between top bar and the sticky CTA + bottom bar */}
      <div style={{
        position:"absolute",
        top: KK_TOPBAR_H,
        left:0, right:0,
        bottom: KK_BOTTOMBAR_H + KK_PDP_CTA_BAND,
        overflowY:"auto",
        padding:"32px 40px 48px",
      }}>
        {/* Back link */}
        <button className="kk-btn" onClick={onBack} style={{
          display:"flex", alignItems:"center", gap:18,
          background:"none", border:"none", cursor:"pointer",
          padding:"8px 0", marginBottom:24,
        }}>
          <Icon name="arrow-left" size={48} stroke={1.8} color={T.ink400}/>
          <span style={{
            fontFamily:"'PP Neue Montreal','Inter',sans-serif",
            fontWeight:500, fontSize:36, color: T.ink400,
          }}>Back to catalog</span>
        </button>

        {/* Hero image */}
        <div style={{
          width:"100%", aspectRatio:"1/1", borderRadius:32, overflow:"hidden",
          background:"radial-gradient(120% 90% at 35% 25%, #F6EFE2 0%, #ECDFC4 65%, #D9C9A6 100%)",
          marginBottom:36,
          boxShadow: T.shadowSm,
        }}>
          <img
            src={product.image} alt={product.name}
            style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}
            onError={(e) => { e.target.style.display="none"; }}
          />
        </div>

        {/* Title block */}
        <h2 style={{
          fontFamily:"'PP Neue Montreal','Inter',sans-serif",
          fontWeight:500, fontSize:72,
          color: T.ink900, margin:"0 0 14px",
          lineHeight:1.1, letterSpacing:"-.018em",
        }}>{product.name}</h2>
        <div style={{
          fontFamily:"'PP Neue Montreal','Inter',sans-serif",
          fontWeight:600, fontSize:46, color: T.greenCta,
          marginBottom:10,
        }}>₹{product.price.toLocaleString("en-IN")}</div>
        <div style={{
          fontFamily:"'PP Neue Montreal','Inter',sans-serif",
          fontWeight:400, fontSize:24, color: T.ink400,
          letterSpacing:".06em", textTransform:"uppercase",
          marginBottom:44,
        }}>SKU · {product.sku}</div>

        <PdpSection title="Description" body={product.description}/>
        <PdpSection title="How to use"  body={product.howToUse}/>
        <PdpSection title="How to wash" body={product.howToWash}/>

        {/* Recommended rail */}
        <div style={{ marginTop:16 }}>
          <h3 style={{
            fontFamily:"'PP Neue Montreal','Inter',sans-serif",
            fontWeight:600, fontSize:24, color: T.ink400,
            letterSpacing:".10em", textTransform:"uppercase",
            margin:"0 0 24px",
          }}>You may also like</h3>
          <div style={{
            display:"flex", gap:24,
            overflowX:"auto",
            paddingBottom:12,
          }}>
            {recommended.map(p => (
              <PdpRecommendedCard key={p.sku} p={p} onOpen={() => onProduct && onProduct(p)}/>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky CTA — hugs the bottom bar */}
      <div style={{
        position:"absolute",
        bottom: KK_BOTTOMBAR_H,
        left:0, right:0,
        padding:"24px 40px",
        background: T.paper,
        borderTop:`1px solid rgba(20,32,27,0.08)`,
        zIndex:30,
      }}>
        <button
          className="kk-btn"
          onClick={() => alert("See full look — would render this wig on the user's photo.")}
          style={{
            width:"100%", height: KK_BTN_H, borderRadius:9999,
            background: T.greenCta, border:"none",
            display:"flex", alignItems:"center", justifyContent:"center", gap:26,
            cursor:"pointer",
            boxShadow:"0 17px 45px -11px rgba(22,147,63,0.48)",
          }}
        >
          <Icon name="sparkle" size={50} stroke={1.8} color="#fff"/>
          <span style={{
            fontFamily:"'PP Neue Montreal','Inter',sans-serif",
            fontWeight:600, fontSize:52, color:"#fff",
          }}>See full look</span>
        </button>
      </div>
    </div>
  );
};

/* ── Kiosk scale-to-fit wrapper ───────────────────────────────────────
   No device chrome — the 1512×2688 kiosk canvas is scaled to fit the
   browser viewport while preserving its 9:16 aspect ratio. */
const KioskDeviceFrame = ({ children }) => {
  /* Reserve vertical room for the outer page paddings + the bottom preview label. */
  const PAGE_CHROME_V = 16 /*pad top*/ + 16 /*pad bottom*/ + 22 /*bottom label*/;
  const PAGE_CHROME_H = 32;

  const [SCALE, setSCALE] = useState(0.32);
  useEffect(() => {
    const recalc = () => {
      const sW = (window.innerWidth  - PAGE_CHROME_H) / KK_W;
      const sH = (window.innerHeight - PAGE_CHROME_V) / KK_H;
      setSCALE(Math.max(0.16, Math.min(sW, sH)));
    };
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, []);

  const VW = Math.round(KK_W * SCALE);
  const VH = Math.round(KK_H * SCALE);

  return (
    <div style={{
      width: VW, height: VH,
      overflow:"hidden",
      borderRadius: 20,
      boxShadow:"0 24px 64px -16px rgba(20,32,27,0.28)",
      background: T.paper,
      position:"relative",
    }}>
      <div style={{
        width: KK_W, height: KK_H,
        transform:`scale(${SCALE})`,
        transformOrigin:"top left",
        position:"absolute", top:0, left:0,
      }}>
        {children}
      </div>
    </div>
  );
};

/* ── Root app ─────────────────────────────────────────────────────────── */
const ARKioskApp = () => {
  const [screen, setScreen]               = useState(1);
  const [generating, setGenerating]       = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleConfirmPhoto = () => {
    setGenerating(true);
    setScreen(4);
    setTimeout(() => setGenerating(false), 5500);
  };

  const openProduct = (p) => {
    setSelectedProduct(p);
    setScreen(5);
  };

  return (
    <div style={{
      minHeight:"100vh",
      background:"#DDD8CF",
      display:"flex", flexDirection:"column",
      alignItems:"center", justifyContent:"flex-start",
      paddingTop:16, paddingBottom:16,
    }}>
      <KioskStyles/>

      <KioskDeviceFrame>
        <div style={{ position:"relative", width: KK_W, height: KK_H }}>
          <ScreenTransition screenKey={screen}>
            {(s) => {
              if (s === 1) return (
                <Screen1Welcome onStart={() => setScreen(2)}/>
              );
              if (s === 2) return (
                <Screen2Choice
                  onCamera={() => setScreen(3)}
                  onNoPhoto={() => alert("Browsing with default model — wig gallery would open here.")}
                  onBack={() => setScreen(1)}
                />
              );
              if (s === 3) return (
                <Screen3Camera
                  onConfirm={handleConfirmPhoto}
                  onBack={() => setScreen(2)}
                />
              );
              if (s === 4) return (
                <Screen4Catalog onProduct={openProduct}/>
              );
              if (s === 5) return (
                <Screen5PDP
                  product={selectedProduct}
                  onBack={() => setScreen(4)}
                  onProduct={openProduct}
                />
              );
              return null;
            }}
          </ScreenTransition>
          {screen !== 1 && (
            <KioskTopBar rightSlot={(screen === 4 || screen === 5) ? <KioskWishlistButton/> : null}/>
          )}
          <KioskBottomBar
            rightSlot={(screen === 4 || screen === 5) ? <KioskSignOutButton onSignOut={() => setScreen(1)}/> : null}
          />
          {generating && <KioskGeneratingOverlay/>}
        </div>
      </KioskDeviceFrame>

      <p style={{
        margin:"6px 0 0", fontSize:11,
        color:"rgba(20,32,27,0.25)",
        fontFamily:"'PP Neue Montreal','Inter',sans-serif",
        letterSpacing:".06em",
      }}>Interact inside the screen · All interactions contained within frame</p>
    </div>
  );
};
