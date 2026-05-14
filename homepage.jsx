/* Homepage — Reliance Foundation Medical Mall */
const { useState: useStateHome } = React;

/* ---- Add-to-Cart / Configure Modal ---- */
const CartModal = ({ product, onClose }) => {
  const [step, setStep] = useStateHome(1);
  const [type, setType] = useStateHome("ready-made");
  const [color, setColor] = useStateHome("#1a1a1a");
  const [length, setLength] = useStateHome("Shoulder");

  const isCustom = type === "custom";

  const wigColors = [
    { hex: "#1a1a1a", name: "Natural Black" },
    { hex: "#4a3728", name: "Dark Brown" },
    { hex: "#9B6B2A", name: "Auburn" },
    { hex: "#C4A882", name: "Honey Blonde" },
    { hex: "#E8D5B7", name: "Light Blonde" },
    { hex: "#F0EDE8", name: "Silver White" },
  ];
  const lengths = ["Pixie", "Bob", "Shoulder", "Long"];

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(14,42,32,.52)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", animation: "fadeUp .18s cubic-bezier(0.23,1,0.32,1)" }}>
      <div style={{ width: "min(460px, 92vw)", background: "var(--paper, #FAFAF8)", borderRadius: 20, boxShadow: "0 28px 60px -16px rgba(20,32,27,.4)", overflow: "hidden" }}>

        {/* Header */}
        <div style={{ padding: "22px 24px 0", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ flex: 1, paddingRight: 12 }}>
            {isCustom && (
              <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
                {[1, 2].map(s => (
                  <div key={s} style={{ height: 3, borderRadius: 99, flex: 1, background: step >= s ? "var(--green-cta)" : "rgba(20,32,27,.1)", transition: "background .25s ease" }} />
                ))}
              </div>
            )}
            <div style={{ fontSize: 11, fontFamily: "var(--mono)", letterSpacing: ".08em", color: "var(--ink-400)", textTransform: "uppercase" }}>
              {step === 1 ? (isCustom ? "Step 1 of 2 — Configure" : "Quick add") : "Step 2 of 2 — Virtual try-on"}
            </div>
            <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-.01em", marginTop: 4, color: "var(--ink-900)" }}>
              {step === 1 ? "Customise your wig" : "See how it looks"}
            </div>
          </div>
          <button onClick={onClose} style={{ color: "var(--ink-400)", padding: 4, marginTop: 2 }}>
            <Icon name="x" size={18} />
          </button>
        </div>

        {step === 1 ? (
          <div style={{ padding: "20px 24px 24px", display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Type */}
            <div>
              <div style={{ fontSize: 12, fontWeight: 500, color: "var(--ink-500)", marginBottom: 8, letterSpacing: ".02em", textTransform: "uppercase" }}>Type</div>
              <div style={{ display: "flex", gap: 8 }}>
                {[{ v: "ready-made", l: "Ready-made" }, { v: "custom", l: "Custom fit" }].map(t => (
                  <button key={t.v} onClick={() => setType(t.v)} style={{
                    flex: 1, padding: "10px 14px", borderRadius: 10,
                    background: type === t.v ? "var(--green-50, #EEF7EE)" : "#fff",
                    border: "1.5px solid " + (type === t.v ? "var(--green-cta)" : "rgba(20,32,27,.1)"),
                    fontSize: 13.5, fontWeight: type === t.v ? 600 : 400,
                    color: type === t.v ? "var(--green-800)" : "var(--ink-700)",
                    transition: "all .15s ease"
                  }}>{t.l}</button>
                ))}
              </div>
            </div>

            {/* Colour */}
            <div>
              <div style={{ fontSize: 12, fontWeight: 500, color: "var(--ink-500)", marginBottom: 8, letterSpacing: ".02em", textTransform: "uppercase" }}>
                Colour — <span style={{ fontWeight: 400, textTransform: "none" }}>{wigColors.find(c => c.hex === color)?.name}</span>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {wigColors.map(c => (
                  <button key={c.hex} onClick={() => setColor(c.hex)} style={{
                    width: 30, height: 30, borderRadius: 999, background: c.hex, border: "none",
                    boxShadow: color === c.hex ? "0 0 0 2px var(--paper,#FAFAF8), 0 0 0 4px var(--green-cta)" : "0 0 0 1px rgba(20,32,27,.2)",
                    transition: "box-shadow .15s ease"
                  }} />
                ))}
              </div>
            </div>

            {/* Length */}
            <div>
              <div style={{ fontSize: 12, fontWeight: 500, color: "var(--ink-500)", marginBottom: 8, letterSpacing: ".02em", textTransform: "uppercase" }}>Length</div>
              <div style={{ display: "flex", gap: 8 }}>
                {lengths.map(l => (
                  <button key={l} onClick={() => setLength(l)} style={{
                    flex: 1, padding: "8px 10px", borderRadius: 8,
                    background: length === l ? "var(--green-50, #EEF7EE)" : "#fff",
                    border: "1.5px solid " + (length === l ? "var(--green-cta)" : "rgba(20,32,27,.1)"),
                    fontSize: 13, fontWeight: length === l ? 600 : 400,
                    color: length === l ? "var(--green-800)" : "var(--ink-700)",
                    transition: "all .15s ease"
                  }}>{l}</button>
                ))}
              </div>
            </div>

            <button onClick={() => { if (isCustom) setStep(2); else onClose(); }}
              className="btn btn-primary" style={{ justifyContent: "center", width: "100%", marginTop: 4 }}>
              {isCustom ? <><span>Next — Virtual try-on</span><Icon name="arrow-right" size={15} /></> : "Add to cart"}
            </button>
          </div>
        ) : (
          /* Step 2 — Virtual try-on */
          <div style={{ padding: "20px 24px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { icon: "upload", label: "Upload a photo", sub: "JPG or PNG, kept on this device" },
              { icon: "camera", label: "Use camera", sub: "Live preview, no recording" },
              { icon: "user", label: "Use a model instead", sub: "If you'd rather not see yet" },
            ].map(opt => (
              <button key={opt.label} style={{
                display: "flex", alignItems: "center", gap: 14,
                padding: "14px 16px", borderRadius: 12,
                background: "var(--paper-2, #F5F5F2)", border: "1px solid rgba(20,32,27,.06)",
                textAlign: "left", cursor: "pointer",
              }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name={opt.icon} size={17} color="var(--ink-600)" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "var(--ink-900)" }}>{opt.label}</div>
                  <div style={{ fontSize: 12, color: "var(--ink-500)", marginTop: 1 }}>{opt.sub}</div>
                </div>
                <Icon name="arrow-right" size={15} color="var(--ink-400)" />
              </button>
            ))}
            <div style={{ background: "var(--green-50, #EEF7EE)", borderRadius: 10, padding: "10px 14px", fontSize: 12, color: "var(--ink-600)", lineHeight: 1.5, display: "flex", gap: 8, alignItems: "flex-start" }}>
              <Icon name="lock" size={13} color="var(--green-700)" /><span>Photos process locally on your device. We never store or transmit your image.</span>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
              <button onClick={() => setStep(1)} style={{ padding: "12px 18px", borderRadius: 999, border: "1.5px solid rgba(20,32,27,.12)", fontSize: 14, fontWeight: 500, color: "var(--ink-700)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                <Icon name="arrow-left" size={14} /> Back
              </button>
              <button onClick={onClose} className="btn btn-primary" style={{ flex: 1, justifyContent: "center" }}>Add to cart</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


/* ---- Hero Image Background ---- */
const HeroBg = () => (
  <div style={{
    position: "absolute", inset: 0, zIndex: 0,
    backgroundImage: "url('images/hero.png')",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  }} />
);

/* ---- Hero Shader Lines — WebGL animated lines overlay ---- */
const HeroShaderLines = () => {
  const canvasRef = React.useRef(null);

  const vsSource = `
    attribute vec4 aVertexPosition;
    void main() {
      gl_Position = aVertexPosition;
    }
  `;

  const fsSource = `
    precision highp float;
    uniform vec2 iResolution;
    uniform float iTime;

    const float overallSpeed = 0.2;
    const float gridSmoothWidth = 0.015;
    const float axisWidth = 0.05;
    const float majorLineWidth = 0.025;
    const float minorLineWidth = 0.0125;
    const float majorLineFrequency = 5.0;
    const float minorLineFrequency = 1.0;
    const float scale = 5.0;
    const vec4 lineColor = vec4(0.18, 0.82, 0.50, 1.0);
    const float minLineWidth = 0.01;
    const float maxLineWidth = 0.2;
    const float lineSpeed = 1.0 * overallSpeed;
    const float lineAmplitude = 1.0;
    const float lineFrequency = 0.2;
    const float warpSpeed = 0.2 * overallSpeed;
    const float warpFrequency = 0.5;
    const float warpAmplitude = 1.0;
    const float offsetFrequency = 0.5;
    const float offsetSpeed = 1.33 * overallSpeed;
    const float minOffsetSpread = 0.6;
    const float maxOffsetSpread = 2.0;
    const int linesPerGroup = 16;

    #define drawCircle(pos, radius, coord) smoothstep(radius + gridSmoothWidth, radius, length(coord - (pos)))
    #define drawSmoothLine(pos, halfWidth, t) smoothstep(halfWidth, 0.0, abs(pos - (t)))
    #define drawCrispLine(pos, halfWidth, t) smoothstep(halfWidth + gridSmoothWidth, halfWidth, abs(pos - (t)))

    float random(float t) {
      return (cos(t) + cos(t * 1.3 + 1.3) + cos(t * 1.4 + 1.4)) / 3.0;
    }

    float getPlasmaY(float x, float horizontalFade, float offset) {
      return random(x * lineFrequency + iTime * lineSpeed) * horizontalFade * lineAmplitude + offset;
    }

    void main() {
      vec2 fragCoord = gl_FragCoord.xy;
      vec2 uv = fragCoord.xy / iResolution.xy;
      vec2 space = (fragCoord - iResolution.xy / 2.0) / iResolution.x * 2.0 * scale;

      float horizontalFade = 1.0 - (cos(uv.x * 6.28) * 0.5 + 0.5);
      float verticalFade = 1.0 - (cos(uv.y * 6.28) * 0.5 + 0.5);

      space.y += random(space.x * warpFrequency + iTime * warpSpeed) * warpAmplitude * (0.5 + horizontalFade);
      space.x += random(space.y * warpFrequency + iTime * warpSpeed + 2.0) * warpAmplitude * horizontalFade;

      vec4 lines = vec4(0.0);

      for(int l = 0; l < linesPerGroup; l++) {
        float normalizedLineIndex = float(l) / float(linesPerGroup);
        float offsetTime = iTime * offsetSpeed;
        float offsetPosition = float(l) + space.x * offsetFrequency;
        float rand = random(offsetPosition + offsetTime) * 0.5 + 0.5;
        float halfWidth = mix(minLineWidth, maxLineWidth, rand * horizontalFade) / 2.0;
        float offset = random(offsetPosition + offsetTime * (1.0 + normalizedLineIndex)) * mix(minOffsetSpread, maxOffsetSpread, horizontalFade);
        float linePosition = getPlasmaY(space.x, horizontalFade, offset);
        float line = drawSmoothLine(linePosition, halfWidth, space.y) / 2.0 + drawCrispLine(linePosition, halfWidth * 0.15, space.y);

        float circleX = mod(float(l) + iTime * lineSpeed, 25.0) - 12.0;
        vec2 circlePosition = vec2(circleX, getPlasmaY(circleX, horizontalFade, offset));
        float circle = drawCircle(circlePosition, 0.01, space) * 4.0;

        line = line + circle;
        lines += line * lineColor * rand;
      }

      vec4 fragColor = vec4(0.0, 0.0, 0.0, 0.0);
      fragColor += lines * verticalFade;
      gl_FragColor = fragColor;
    }
  `;

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { alpha: true });
    if (!gl) return;

    const loadShader = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return null;
      return shader;
    };

    const vs = loadShader(gl.VERTEX_SHADER, vsSource);
    const fs = loadShader(gl.FRAGMENT_SHADER, fsSource);
    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);

    const vertexLoc = gl.getAttribLocation(program, 'aVertexPosition');
    const resLoc = gl.getUniformLocation(program, 'iResolution');
    const timeLoc = gl.getUniformLocation(program, 'iTime');

    const resizeCanvas = () => {
      canvas.width = Math.round((canvas.parentElement ? canvas.parentElement.offsetWidth : window.innerWidth) * 0.65);
      canvas.height = 160;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    let startTime = Date.now();
    let raf;
    const render = () => {
      const t = (Date.now() - startTime) / 1000;
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, t);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(vertexLoc, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(vertexLoc);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{
      position: "absolute", top: 0, left: 0,
      width: "65%", height: 160,
      pointerEvents: "none", zIndex: 3, display: "block",
      opacity: 0.55,
      transform: "rotate(-11deg) translateY(10%)",
      transformOrigin: "left top",
    }} />
  );
};

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
          <button key={`b-${active}`} onClick={() => navigate("oncology")}
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

const Homepage = ({ navigate }) => {
  const [docTab, setDocTab] = useStateHome("oncology");
  const [cartModal, setCartModal] = useStateHome(null);
  const [hoveredCard, setHoveredCard] = useStateHome(null);
  const [catPage, setCatPage] = useStateHome(0);
  const [essentialsTab, setEssentialsTab] = useStateHome("wigs");
  const categories = [
    { key: "oncology", label: "Oncology", desc: "Wigs, scarves & oncology-safe care", img: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=500&q=70" },
    { key: "mother",   label: "Mother & Baby",  desc: "Pregnancy & postpartum essentials",  img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=500&q=70" },
    { key: "physio",   label: "Physio & Rehab", desc: "Mobility & post-surgery",            img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=70" },
    { key: "cardiac",  label: "Cardiac Care",   desc: "Heart-safe daily essentials",        img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=500&q=70" },
    { key: "diabetes", label: "Diabetes",       desc: "Glucose, nutrition, footwear",       img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&q=70" },
    { key: "wellness", label: "Wellness",       desc: "Curated by our nutritionists",       img: "https://images.unsplash.com/photo-1571019613540-996a69725a78?w=500&q=70" },
  ];

  const productsByTab = {
    oncology: [
      { img: "images/wigs/plpwig.png",                 hoverImg: "images/wavy.webp",          title: "Adira premium wig",             price: "₹4,800", old: "₹6,200", badge: "Featured",    isCutout: false },
      { img: "images/skincare.png",                    hoverImg: "images/happy patient.avif", title: "Onco-safe barrier cream",       price: "₹890",   discount: 10,                       isCutout: false },
      { img: "images/elbow.png",                       hoverImg: "images/physio main.avif",   title: "Compression sleeve · grade II", price: "₹2,150",                                     isCutout: false },
      { img: "images/11485.jpg",                       hoverImg: "images/happy patient.avif", title: "Silicone breast form",          price: "₹3,900",                badge: "New",         isCutout: false },
    ],
    mother: [
      { img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=70",   title: "Pregnancy multivitamin · 60 tabs", price: "₹720",  discount: 15, badge: "Featured", badgeStyle: { background: "#E2C896", color: "#0E2A20" } },
      { img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=70", title: "Stretch mark oil · 100ml",          price: "₹540" },
      { img: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=600&q=70", title: "Postpartum belly belt",             price: "₹980",  badge: "Bestseller", badgeStyle: { background: "#E2C896", color: "#0E2A20" } },
    ],
    physio: [
      { img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=70", title: "Post-surgery walker",              price: "₹3,400", badge: "Featured", badgeStyle: { background: "#E2C896", color: "#0E2A20" } },
      { img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=70",    title: "Heat & cold therapy pack",         price: "₹510",  discount: 10 },
      { img: "https://images.unsplash.com/photo-1571019613540-996a69725a78?w=600&q=70", title: "Knee support brace",               price: "₹890" },
    ],
    cardiac: [
      { img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=70", title: "BP monitor — automatic",   price: "₹2,180", old: "₹2,800", badge: "Featured", badgeStyle: { background: "#E2C896", color: "#0E2A20" } },
      { img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=70", title: "Pulse oximeter — fingertip", price: "₹1,490" },
      { img: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&q=70",    title: "Omega-3 capsules · 60 ct",   price: "₹890",  discount: 10 },
    ],
    diabetes: [
      { img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=70", title: "Glucose monitor + 50 strips", price: "₹1,449", old: "₹1,890", badge: "Featured", badgeStyle: { background: "#E2C896", color: "#0E2A20" } },
      { img: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=70", title: "Diabetic socks · pack of 3",   price: "₹540" },
      { img: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&q=70",    title: "Sugar-free protein mix",       price: "₹1,290", discount: 10 },
    ],
    wellness: [
      { img: "https://images.unsplash.com/photo-1556228852-80b6e5eeff06?w=600&q=70",    title: "Daily multivitamin · 60 ct", price: "₹540", old: "₹720", badge: "Featured", badgeStyle: { background: "#E2C896", color: "#0E2A20" } },
      { img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&q=70", title: "Plant protein · neutral",      price: "₹1,890" },
      { img: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=70", title: "Calming aroma roll-on",         price: "₹380", discount: 15 },
    ],
  };

  const docTabs = [
    { k: "oncology", l: "Oncology" },
    { k: "mother",   l: "Mother & Baby" },
    { k: "physio",   l: "Physio & Rehab" },
    { k: "cardiac",  l: "Cardiac" },
    { k: "diabetes", l: "Diabetes" },
    { k: "wellness", l: "Wellness" },
  ];

  return (
    <div className="fade-in" style={{ background: "#FAF8F5" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

        {/* Background image */}
        <HeroBg />

        {/* Left-side gradient — only covers left 55%, keeping right image clean */}
        <div aria-hidden style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(to right, rgba(4,16,10,0.68) 0%, rgba(4,16,10,0.48) 30%, rgba(4,16,10,0.18) 52%, transparent 68%)",
        }} />
        {/* Top vignette — keeps the dark-green continuous under the nav */}
        <div aria-hidden style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(to bottom, rgba(4,16,10,0.55) 0%, rgba(4,16,10,0.25) 12%, transparent 22%)",
        }} />
        {/* Bottom vignette */}
        <div aria-hidden style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(to top, rgba(4,16,10,0.40) 0%, transparent 28%)",
        }} />

        {/* Content — flush left */}
        <div style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", alignItems: "center", padding: "120px 0 180px", width: "100%", paddingLeft: "6vw", paddingRight: 48 }}>
          <div style={{ width: "min(560px, 46%)", minWidth: 400, textAlign: "left" }}>

            {/* Accreditation badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 14px", borderRadius: 999,
              background: "rgba(255,255,255,.10)", border: "1px solid rgba(255,255,255,.18)",
              backdropFilter: "blur(8px)",
              marginBottom: 24,
            }}>
              <Icon name="shield" size={13} color="rgba(110,230,160,1)" />
              <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".08em", color: "rgba(200,255,225,1)", textTransform: "uppercase" }}>
                Hospital-backed · NABH accredited
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: "clamp(40px, 5vw, 68px)", fontWeight: 500,
              lineHeight: 1.05, letterSpacing: "-.025em",
              color: "#fff", margin: "0 0 20px",
              textShadow: "0 2px 24px rgba(0,0,0,.25)",
            }}>
              You deserve to feel<br/>
              <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 500, color: "#E2C896" }}>
                like yourself
              </span> again.
            </h1>

            {/* Sub-copy */}
            <p style={{
              fontSize: 17, color: "rgba(255,255,255,.70)", lineHeight: 1.65,
              margin: "0 0 32px", maxWidth: 500,
            }}>
              Recovery products curated with clinical care — wigs, prosthetics and support essentials,
              backed by Reliance Foundation.
            </p>

            {/* Search bar */}
            <div style={{
              display: "flex", alignItems: "center", maxWidth: 540, gap: 10,
              background: "rgba(255,255,255,.90)", borderRadius: 999,
              padding: "5px 5px 5px 20px",
              border: "1px solid rgba(255,255,255,.22)",
              boxShadow: "0 16px 40px -12px rgba(0,0,0,.40), 0 2px 6px rgba(0,0,0,.15)",
              backdropFilter: "blur(12px)",
              transition: "box-shadow 220ms cubic-bezier(0.23,1,0.32,1), border-color 220ms ease",
            }}
              onFocusCapture={e => {
                e.currentTarget.style.boxShadow = "0 0 0 4px rgba(14,92,49,.28), 0 16px 40px -10px rgba(0,0,0,.40)";
                e.currentTarget.style.borderColor = "var(--green-cta)";
              }}
              onBlurCapture={e => {
                e.currentTarget.style.boxShadow = "0 16px 40px -12px rgba(0,0,0,.40), 0 2px 6px rgba(0,0,0,.15)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,.22)";
              }}
            >
              <Icon name="search" size={18} color="var(--ink-400)" />
              <input placeholder="Search medicines, wigs, devices…"
                style={{ flex: 1, border: "none", outline: "none", padding: "12px 12px", fontSize: 15, background: "transparent", color: "var(--ink-900)" }} />
              <button className="btn btn-primary" style={{ padding: "11px 22px", fontSize: 14 }}>Search</button>
            </div>

            {/* Trust row */}
            <div style={{ display: "flex", alignItems: "center", gap: 22, marginTop: 24, fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,.78)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <Icon name="check" size={16} color="rgba(110,230,160,1)" /> Free 1:1 fittings
              </span>
              <span style={{ width: 3, height: 3, borderRadius: 999, background: "rgba(255,255,255,.35)" }}/>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <Icon name="truck" size={16} color="rgba(110,230,160,1)" /> Discreet 48-hour delivery
              </span>
            </div>

          </div>
        </div>

      </section>

      {/* ── TRUST & CARE — editorial, four cream cards ── */}
      <section style={{ background: "#FAF8F5", padding: "96px 0 100px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", top: -160, right: "8%", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(226,200,150,.18) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div aria-hidden style={{ position: "absolute", bottom: -120, left: "12%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(157,194,176,.16) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="shell" style={{ position: "relative" }}>
          {/* Editorial header — matches MeetOurSpecialists / FindTheRightCare rhythm */}
          <div style={{ maxWidth: 760, margin: "0 0 56px" }}>
            <div style={{ fontFamily: "var(--sans)", fontSize: 13.5, fontWeight: 600, letterSpacing: ".10em", color: "var(--green-700)", textTransform: "uppercase", marginBottom: 16, display: "inline-flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 24, height: 1, background: "#E2C896" }} /> Why us
            </div>
            <h2 style={{ fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 500, letterSpacing: "-.025em", margin: "0 0 14px", lineHeight: 1.1, color: "var(--ink-900)" }}>
              Care you can <span className="italic-em">actually feel</span>
            </h2>
            <p style={{ fontSize: 17, color: "var(--ink-500)", lineHeight: 1.6, margin: 0, maxWidth: 560 }}>
              Clinical rigour and quiet attention to detail — every product carries the weight of Reliance Foundation's hospital network.
            </p>
          </div>

          {/* 4 editorial cards */}
          {(() => {
            const cards = [
              { icon: "shield",   title: "NABH-accredited rigour",       desc: "Held to India's highest hospital accreditation standards — the same protocols applied to every product we carry.", num: "01" },
              { icon: "heart",    title: "Personalised clinical care",   desc: "Guidance shaped to your stage and pace — from specialists who understand recovery from the inside.",                  num: "02" },
              { icon: "spa",      title: "Comfort-engineered fit",       desc: "Skin-kind fabrics and thoughtfully designed fit — products that feel as good as they perform, every day.",            num: "03" },
              { icon: "chat",     title: "Always-on care line",          desc: "Free, confidential care coordinators available 8am to 10pm, every day of the year — whenever you need them.",        num: "04" },
            ];
            return (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22 }}>
                {cards.map((c) => (
                  <div key={c.title}
                    style={{
                      position: "relative",
                      background: "var(--paper-2, #F4EFE6)",
                      borderRadius: 20,
                      border: "1px solid rgba(20,32,27,.05)",
                      padding: "32px 28px 28px",
                      display: "flex", flexDirection: "column",
                    }}
                  >
                    {/* Top row — icon + numbered index */}
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 36 }}>
                      <Icon name={c.icon} size={26} color="var(--green-700)" />
                      <span style={{
                        fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".10em",
                        color: "rgba(20,32,27,.32)", fontWeight: 500,
                      }}>{c.num}</span>
                    </div>

                    {/* Title */}
                    <div style={{
                      fontSize: 19, fontWeight: 500,
                      color: "var(--ink-900)", letterSpacing: "-.015em",
                      lineHeight: 1.25, marginBottom: 12,
                    }}>
                      {c.title}
                    </div>

                    {/* Description */}
                    <div style={{
                      fontSize: 14.5, color: "var(--ink-500)", lineHeight: 1.6,
                      flex: 1,
                    }}>
                      {c.desc}
                    </div>

                    {/* Gold accent — same language as eyebrows + specialist tags */}
                    <span style={{ width: 24, height: 1, background: "#E2C896", display: "block", marginTop: 28 }} />
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── FIND THE RIGHT CARE — scroll-driven editorial ── */}
      <FindTheRightCare navigate={navigate} />


      {/* ── PRODUCTS THAT CARRY YOU — tabbed showcase (hero + 2 cards + testimonial) ── */}
      {(() => {
        const essentialsTabs = [
          {
            key: "wigs",  label: "Hair wigs",
            layout: { topLandscape: true,  leftOffset: 60, stackOffset: 0 },
            featured: { img: "images/wavy.webp",            title: "Adira premium wig — ready-made", price: "₹4,800", old: "₹6,200", topLabel: "Featured · Hair recovery", cta: "Shop wigs",         goto: "wigs" },
            side: [
              { img: "images/wigmain2.png",                 title: "Natural black · long",            price: "₹4,100" },
              { img: "images/wigmain.png",                  title: "Honey blonde · shoulder length", price: "₹3,400" },
            ],
            testimonial: { quote: "I walked out of the fitting room feeling like myself again. That's the only way I can describe it.", author: "Priya M.", role: "Breast cancer survivor, Mumbai" },
          },
          {
            key: "bras",  label: "Post-mastectomy bras",
            layout: { topLandscape: false, leftOffset: 0,  stackOffset: 50 },
            featured: { img: "images/bra.jpg",              title: "Soft-cup post-mastectomy bra",    price: "₹2,150", old: "₹2,800", topLabel: "Featured · Daily wear",    cta: "Shop bras",         goto: "oncology" },
            side: [
              { img: "images/bra 2.jpg",                    title: "Wire-free cotton everyday bra",   price: "₹1,890" },
              { img: "images/11485.jpg",                    title: "Pocket bra with form insert",     price: "₹2,640" },
            ],
            testimonial: { quote: "Recommended by my breast-care nurse — it's the only one that didn't aggravate my surgery scar.", author: "Meera S.", role: "Medical Mall member" },
          },
          {
            key: "forms", label: "Breast forms",
            layout: { topLandscape: false, leftOffset: 40, stackOffset: 20 },
            featured: { img: "images/SPRING-SALE-DESKTOP-BLOCK-breast-form.png", title: "Silicone breast form · skin-matched", price: "₹5,400", old: "₹6,800", topLabel: "Featured · Prosthetics",    cta: "Shop forms",        goto: "oncology" },
            side: [
              { img: "images/11485.jpg",                    title: "Lightweight foam form",            price: "₹2,200" },
              { img: "images/bra.jpg",                      title: "Adhesive partial form",            price: "₹3,100" },
            ],
            testimonial: { quote: "Fits perfectly, weighted just like a natural breast — I forget I'm wearing it.", author: "Reena K.", role: "Medical Mall member" },
          },
          {
            key: "compression", label: "Compression therapy",
            layout: { topLandscape: true,  leftOffset: 80, stackOffset: 30 },
            featured: { img: "images/compression sleeve.jpeg", title: "Compression sleeve · grade II", price: "₹2,150", old: "₹2,500", topLabel: "Featured · Lymphoedema",   cta: "Shop compression",  goto: "oncology" },
            side: [
              { img: "images/compression sleeve.jpeg",      title: "Lymphoedema hosiery",              price: "₹1,690" },
              { img: "images/compression sleeve.jpeg",      title: "Post-surgery garment",             price: "₹2,890" },
            ],
            testimonial: { quote: "Prescribed by my physio after lymph node surgery — comfortable enough to wear all day.", author: "Anjali P.", role: "Medical Mall member" },
          },
        ];
        const active = essentialsTabs.find(t => t.key === essentialsTab) || essentialsTabs[0];

        return (
          <section style={{ background: "#fff", padding: "96px 0 100px", position: "relative" }}>
            <div className="shell">
              {/* Header — no eyebrow */}
              <div style={{ maxWidth: 820, margin: "0 0 40px" }}>
                <h2 style={{
                  fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 500,
                  lineHeight: 1.1, letterSpacing: "-.025em",
                  color: "var(--ink-900)", margin: "0 0 16px",
                }}>
                  Products that carry you{" "}
                  <span className="italic-em">through every step</span>
                </h2>
                <p style={{
                  fontSize: 17, color: "var(--ink-500)",
                  lineHeight: 1.6, margin: 0, maxWidth: 560,
                }}>
                  Wigs, prosthetics and recovery essentials — curated by our oncology specialists, delivered with quiet care.
                </p>
              </div>

              {/* Tabs — Oura-style: evenly spaced, sliding underline indicator, full-width hairline */}
              {(() => {
                const activeIndex = Math.max(0, essentialsTabs.findIndex(t => t.key === essentialsTab));
                return (
                  <div style={{ position: "relative", marginBottom: 36, borderBottom: "1px solid rgba(20,32,27,.10)" }}>
                    <div style={{ position: "relative", display: "grid", gridTemplateColumns: `repeat(${essentialsTabs.length}, 1fr)` }}>
                      {essentialsTabs.map((t) => {
                        const isActive = t.key === essentialsTab;
                        return (
                          <button
                            key={t.key}
                            onClick={() => setEssentialsTab(t.key)}
                            style={{
                              position: "relative",
                              padding: "18px 12px 20px",
                              background: "transparent", border: "none",
                              fontFamily: "var(--sans)",
                              fontSize: 16,
                              fontWeight: isActive ? 600 : 400,
                              color: isActive ? "var(--ink-900)" : "var(--ink-500)",
                              letterSpacing: "-.005em",
                              textAlign: "center",
                              cursor: "pointer",
                              transition: "color 200ms ease",
                            }}
                          >
                            {t.label}
                          </button>
                        );
                      })}

                      {/* Sliding indicator — single bar that translates between tabs */}
                      <span aria-hidden style={{
                        position: "absolute",
                        left: 0,
                        bottom: -1,
                        height: 2,
                        width: `${100 / essentialsTabs.length}%`,
                        background: "var(--ink-900)",
                        transform: `translateX(${activeIndex * 100}%)`,
                        transition: "transform 320ms cubic-bezier(0.77, 0, 0.175, 1)",
                        willChange: "transform",
                        pointerEvents: "none",
                      }} />
                    </div>
                  </div>
                );
              })()}

              {/* 3-column showcase — testimonial pinned right; left banner + middle stack shift per tab for visual rhythm */}
              {(() => {
                const L = active.layout || { topLandscape: true, leftOffset: 60, stackOffset: 0 };
                const featuredCol = (
                  <div key="featured" style={{ marginTop: L.leftOffset }}>
                    {(() => {
                      const isLeftHovered = hoveredCard === "ess-left";
                      return (
                        <div
                          onClick={() => navigate("pdp")}
                          onMouseEnter={() => setHoveredCard("ess-left")}
                          onMouseLeave={() => setHoveredCard(null)}
                          style={{
                            position: "relative",
                            borderRadius: 20, overflow: "hidden",
                            cursor: "pointer",
                            background: "var(--paper-2, #F4EFE6)",
                            aspectRatio: "491 / 467",
                          }}
                        >
                          <img
                            src={active.featured.img}
                            alt={active.featured.title}
                            style={{
                              position: "absolute", inset: 0, width: "100%", height: "100%",
                              objectFit: "cover", display: "block",
                              transform: isLeftHovered ? "scale(1.08)" : "scale(1.04)",
                              transition: "transform 520ms cubic-bezier(0.23,1,0.32,1)",
                            }}
                          />
                          {/* Bottom label + Shop Now (button slides in below the text) */}
                          <div style={{
                            position: "absolute", bottom: 0, left: 0, right: 0,
                            padding: "64px 24px 22px",
                            background: "linear-gradient(to top, rgba(14,26,20,.78) 0%, rgba(14,26,20,.20) 60%, transparent 100%)",
                            color: "#fff",
                          }}>
                            <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".10em", textTransform: "uppercase", opacity: .7, marginBottom: 6 }}>
                              {active.featured.topLabel}
                            </div>
                            <div style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-.01em" }}>{active.featured.title}</div>
                            <div style={{
                              overflow: "hidden",
                              maxHeight: isLeftHovered ? 60 : 0,
                              marginTop: isLeftHovered ? 14 : 0,
                              opacity: isLeftHovered ? 1 : 0,
                              transition: "max-height 320ms cubic-bezier(0.23,1,0.32,1), margin-top 320ms cubic-bezier(0.23,1,0.32,1), opacity 240ms ease",
                            }}>
                              <button
                                onClick={e => { e.stopPropagation(); navigate(active.featured.goto); }}
                                style={{
                                  padding: "11px 22px", borderRadius: 999,
                                  background: "rgba(255,255,255,.95)", backdropFilter: "blur(8px)",
                                  border: "1px solid rgba(20,32,27,.12)",
                                  fontSize: 14, fontWeight: 600, color: "var(--ink-900)",
                                  display: "inline-flex", alignItems: "center", gap: 8,
                                  cursor: "pointer",
                                }}
                              >
                                Shop Now <Icon name="arrow-right" size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                );

                const stackCol = (
                  <div key="stack" style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: L.stackOffset || 0 }}>
                    {active.side.map((p, i) => {
                      const cardId = `ess-mid-${i}`;
                      const isHovered = hoveredCard === cardId;
                      const isTopLandscape = (i === 0) === L.topLandscape;
                      return (
                        <div
                          key={`${active.key}-${i}`}
                          onClick={() => navigate("pdp")}
                          onMouseEnter={() => setHoveredCard(cardId)}
                          onMouseLeave={() => setHoveredCard(null)}
                          style={{
                            aspectRatio: isTopLandscape ? "254 / 186" : "254 / 354",
                            position: "relative",
                            borderRadius: 20, overflow: "hidden",
                            cursor: "pointer",
                            background: "var(--paper-2, #F4EFE6)",
                            transform: isHovered ? "translateY(-3px)" : "translateY(0)",
                            boxShadow: isHovered ? "0 16px 40px -12px rgba(20,32,27,.18)" : "none",
                            transition: "transform 220ms cubic-bezier(0.23,1,0.32,1), box-shadow 220ms ease",
                          }}
                        >
                          <img
                            src={p.img}
                            alt={p.title}
                            style={{
                              position: "absolute", inset: 0, width: "100%", height: "100%",
                              objectFit: "cover", display: "block",
                              transform: isHovered ? "scale(1.10)" : "scale(1.06)",
                              transition: "transform 520ms cubic-bezier(0.23,1,0.32,1)",
                            }}
                          />
                          {/* Title + Shop Now button (slides in below the title on hover) */}
                          <div style={{
                            position: "absolute", bottom: 0, left: 0, right: 0,
                            padding: "56px 18px 16px",
                            background: "linear-gradient(to top, rgba(14,26,20,.82) 0%, rgba(14,26,20,.20) 60%, transparent 100%)",
                            color: "#fff",
                          }}>
                            <div style={{ fontSize: 14, fontWeight: 500, letterSpacing: "-.005em", lineHeight: 1.3 }}>{p.title}</div>
                            <div style={{
                              overflow: "hidden",
                              maxHeight: isHovered ? 50 : 0,
                              marginTop: isHovered ? 10 : 0,
                              opacity: isHovered ? 1 : 0,
                              transition: "max-height 320ms cubic-bezier(0.23,1,0.32,1), margin-top 320ms cubic-bezier(0.23,1,0.32,1), opacity 240ms ease",
                            }}>
                              <button
                                onClick={e => { e.stopPropagation(); navigate("pdp"); }}
                                style={{
                                  padding: "9px 18px", borderRadius: 999,
                                  background: "rgba(255,255,255,.95)", backdropFilter: "blur(8px)",
                                  border: "1px solid rgba(20,32,27,.12)",
                                  fontSize: 13, fontWeight: 600, color: "var(--ink-900)",
                                  display: "inline-flex", alignItems: "center", gap: 6,
                                  cursor: "pointer",
                                }}
                              >
                                Shop Now <Icon name="arrow-right" size={13} />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );

                const testimonialCol = (
                  <div key="testimonial" style={{
                    background: "#FAF8F5",
                    borderRadius: 20,
                    padding: "40px 32px 36px",
                    display: "flex", flexDirection: "column",
                    border: "1px solid rgba(20,32,27,.07)",
                    alignSelf: "center",
                    marginTop: 60,
                    minHeight: 420,
                  }}>
                    <div style={{
                      fontFamily: "Georgia, serif",
                      fontSize: 72, lineHeight: 0.7,
                      color: "var(--green-700)", opacity: .35,
                      marginBottom: 20, userSelect: "none",
                    }}>{"“"}</div>
                    <blockquote style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(18px, 1.55vw, 23px)",
                      fontWeight: 400, fontStyle: "italic",
                      color: "var(--ink-900)", lineHeight: 1.42, letterSpacing: "-.01em",
                      margin: 0, flex: 1,
                    }}>
                      {active.testimonial.quote}
                    </blockquote>
                    <div style={{ marginTop: 28 }}>
                      <div style={{ width: 28, height: 1, background: "#E2C896", marginBottom: 14 }} />
                      <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--ink-900)", letterSpacing: "-.005em" }}>
                        {active.testimonial.author}
                      </div>
                      <div style={{ fontSize: 12, color: "var(--ink-400)", marginTop: 3, fontFamily: "var(--mono)", letterSpacing: ".04em" }}>
                        {active.testimonial.role}
                      </div>
                    </div>
                  </div>
                );

                return (
                  <div style={{ display: "grid", gridTemplateColumns: "555fr 254fr 340fr", gap: 20, alignItems: "start" }}>
                    {featuredCol}
                    {stackCol}
                    {testimonialCol}
                  </div>
                );
              })()}

            </div>
          </section>
        );
      })()}

      {/* ── PROMO BANNER ── */}

      {/* ── DOCTORS' RECOMMENDATIONS (tabbed, 3 premium cards) ── */}
      <section style={{ background: "#FAF8F5", padding: "80px 0 88px", position: "relative" }}>
        {/* Subtle radial glow top-right */}
        <div aria-hidden style={{ position: "absolute", top: -80, right: "8%", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(226,200,150,.13) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="shell" style={{ position: "relative" }}>

          {/* Header row — no eyebrow, sans-only heading */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: "clamp(34px, 3.8vw, 52px)", fontWeight: 500, letterSpacing: "-.025em", margin: 0, lineHeight: 1.06, color: "var(--ink-900)" }}>
              Doctors' recommendations
            </h2>
          </div>

          {/* Pill tabs + View all link */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 36, flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {docTabs.map((t) => {
                const isActive = docTab === t.k;
                return (
                  <button
                    key={t.k}
                    onClick={() => setDocTab(t.k)}
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
            <button
              onClick={() => navigate("oncology-plp")}
              style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 14, fontWeight: 500, color: "var(--green-700)", whiteSpace: "nowrap", background: "none", border: "none", padding: 0, cursor: "pointer", transition: "color 160ms ease" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--green-800)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--green-700)"}
            >
              View all <Icon name="arrow-right" size={14} />
            </button>
          </div>

          {/* Showcase cards — warm cream gradient, floating cutout, gold pill + circular specialist stamp */}
          {(() => {
            const items = productsByTab[docTab] || [];
            return (
              <div style={{ display: "grid", gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: 16 }}>
                {items.map((p, idx) => {
                  const isWig = p.title.toLowerCase().includes("wig");
                  const cardId = `${docTab}-${idx}`;
                  const isHovered = hoveredCard === cardId;
                  return (
                    <div
                      key={p.title}
                      onClick={() => { if (isWig) navigate("pdp"); }}
                      onMouseEnter={() => setHoveredCard(cardId)}
                      onMouseLeave={() => setHoveredCard(null)}
                      style={{
                        position: "relative",
                        borderRadius: 24,
                        overflow: "hidden",
                        cursor: isWig ? "pointer" : "default",
                        background: "#fff",
                        border: "1px solid rgba(20,32,27,.06)",
                        minHeight: 460,
                        display: "flex",
                        flexDirection: "column",
                        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                        boxShadow: isHovered ? "0 24px 48px -16px rgba(20,32,27,.18), 0 4px 12px -4px rgba(20,32,27,.08)" : "0 1px 2px rgba(20,32,27,.03)",
                        transition: "transform 320ms cubic-bezier(0.23,1,0.32,1), box-shadow 320ms cubic-bezier(0.23,1,0.32,1)",
                      }}
                    >
                      {/* Top section — warm gradient with badge, stamp, and floating cutout */}
                      <div style={{
                        position: "relative",
                        flex: 1,
                        background: "radial-gradient(120% 90% at 35% 25%, #F6EFE2 0%, #ECDFC4 65%, #D9C9A6 100%)",
                        padding: "20px 22px 24px",
                        display: "flex", flexDirection: "column",
                        overflow: "hidden",
                      }}>
                        {/* Hover lifestyle image — full-bleed girl photo that fades in */}
                        {p.hoverImg && (
                          <img
                            src={p.hoverImg}
                            alt=""
                            aria-hidden
                            style={{
                              position: "absolute", inset: 0,
                              width: "100%", height: "100%",
                              objectFit: "cover",
                              opacity: isHovered ? 1 : 0,
                              transform: isHovered ? "scale(1)" : "scale(1.04)",
                              transition: "opacity 360ms cubic-bezier(0.23,1,0.32,1), transform 600ms cubic-bezier(0.23,1,0.32,1)",
                              zIndex: 1,
                              pointerEvents: "none",
                            }}
                          />
                        )}

                        {/* Top row — gold pill badge */}
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

                        {/* Product image — full-bleed background for non-cutout, floating cutout otherwise */}
                        {p.isCutout ? (
                          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", margin: "12px 0 8px", zIndex: 2, opacity: isHovered ? 0 : 1, transition: "opacity 280ms ease" }}>
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
                              opacity: isHovered ? 0 : 1,
                              transition: "opacity 280ms ease",
                            }}
                          />
                        )}
                        {/* Spacer keeps the badge anchored top and Quick view anchored bottom for non-cutout cards */}
                        {!p.isCutout && <div style={{ flex: 1 }} />}

                        {/* Quick view — slides up on hover */}
                        <div style={{
                          position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 14px",
                          transform: isHovered ? "translateY(0)" : "translateY(110%)",
                          transition: "transform 260ms cubic-bezier(0.23,1,0.32,1)",
                          zIndex: 4,
                          pointerEvents: isHovered ? "auto" : "none",
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

                      {/* Bottom text section — white background, restrained type hierarchy */}
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

      {/* ── MEET OUR SPECIALISTS — horizontal scroll, editorial cards ── */}
      <MeetOurSpecialists />

      {/* ── REASSURANCE BANNER — content-driven height; image extends behind the floating footer card with bleed on all sides ── */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "80vh", padding: "120px 0 140px", background: "#1a0e08" }}>
        {/* Background image — focal point on the subject */}
        <img
          src="images/sunlight.avif"
          alt=""
          aria-hidden
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "62% 42%" }}
        />
        {/* Left-to-right dark overlay so text is legible */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,6,4,.82) 0%, rgba(10,6,4,.50) 45%, rgba(10,6,4,.08) 80%, rgba(10,6,4,0) 100%)" }} />
        {/* Bottom dark gradient — covers any gap between image edge and footer */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "45%", background: "linear-gradient(to top, rgba(4,8,6,1) 0%, rgba(4,8,6,.85) 35%, transparent 100%)", pointerEvents: "none" }} />

        {/* Content — heading + subtext + buttons all in banner */}
        <div style={{ position: "relative", padding: "0 7vw", maxWidth: 680 }}>
          <h2 style={{
            fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 500,
            color: "#fff", letterSpacing: "-.03em", lineHeight: 1.06,
            margin: "0 0 20px",
          }}>
            Not sure where<br/>to start?
          </h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,.75)", lineHeight: 1.6, margin: "0 0 36px", maxWidth: 420 }}>
            Talk to one of our care coordinators. Free, no appointment, 8am–10pm daily.
          </p>
          <div style={{ display: "flex", gap: 14 }}>
            <button className="btn btn-primary" style={{ fontSize: 15, padding: "13px 28px" }}>
              <Icon name="phone" size={15} color="#fff" /> Call us
            </button>
            <button style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "13px 28px", borderRadius: 999,
              background: "#fff", color: "var(--ink-900)",
              border: "none", fontFamily: "var(--sans)",
              fontSize: 15, fontWeight: 500, cursor: "pointer",
              transition: "background 160ms ease",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "#e8e8e8"}
              onMouseLeave={e => e.currentTarget.style.background = "#fff"}
            >
              <Icon name="chat" size={15} color="var(--ink-700)" /> Chat with us
            </button>
          </div>
        </div>

      </section>

      {cartModal && <CartModal product={cartModal} onClose={() => setCartModal(null)} />}

      {/* ── FLOATING CHAT BUTTON ── */}
      <div style={{
        position: "fixed", bottom: 28, right: 28, zIndex: 90,
        display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10,
      }}>
        <button style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "14px 22px", borderRadius: 999,
          background: "var(--green-800)", color: "#fff",
          boxShadow: "0 10px 28px -8px rgba(14,42,32,.45)",
          fontSize: 14, fontWeight: 500, letterSpacing: "-.01em",
          transition: "transform 160ms cubic-bezier(0.23,1,0.32,1), box-shadow 160ms ease",
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

window.Homepage = Homepage;