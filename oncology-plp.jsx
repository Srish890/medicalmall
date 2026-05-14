/* Oncology > Hair Wigs PLP — wig-specific listing with hair filters
   Reached from Wigs L2 "Shop For Women / Men", or homepage "View all". */
const OncologyPLP = ({ navigate }) => {
  // Read any pre-applied filter from upstream pages (Wigs L2 "Shop for…"),
  // then consume + clear so it doesn't sticky-apply on re-entries.
  const initialFilter = (() => {
    const f = (typeof window !== "undefined" && window.__plpInitialFilter) || {};
    if (typeof window !== "undefined") delete window.__plpInitialFilter;
    return f;
  })();

  const [priceMax, setPriceMax]     = React.useState(15000);
  const [categories, setCategories] = React.useState(initialFilter.categories || []);
  const [textures, setTextures]     = React.useState(initialFilter.textures   || []);
  const [lengths, setLengths]       = React.useState(initialFilter.lengths    || []);
  const [caps, setCaps]             = React.useState(initialFilter.caps       || []);
  const [inStock, setInStock]       = React.useState(true);
  const [brands, setBrands]         = React.useState([]);
  const [rating, setRating]         = React.useState(0);
  const [sort, setSort]             = React.useState("relevance");

  const [hoveredCard, setHoveredCard] = React.useState(null);

  const toggle = (val, setter, arr) =>
    setter(arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val]);

  // Wig-only product catalogue — high-quality portrait images first, smaller wig-thumb stylings later
  const allProducts = [
    { id: 8,  title: "Honey-highlight long wig",      brand: "Adira",    price: 7800,  mrp: 9200,  img: "images/Straight.jpg.webp",   category: "women", texture: "wavy",     length: '20"', cap: "lace-front",    stock: true,  rating: 4.9, reviews: 211, tag: "Featured" },
    { id: 1,  title: "Premium wavy human-hair wig",  brand: "Adira",    price: 4800,  mrp: 6200,  img: "images/wig-pdp.webp",        category: "women", texture: "wavy",     length: '16"', cap: "hand-tied",     stock: true,  rating: 4.8, reviews: 124, tag: "Bestseller" },
    { id: 2,  title: "Custom lace-front wig",         brand: "Adira",    price: 12500, mrp: 14800, img: "images/hair blonde 1.png",   category: "women", texture: "straight", length: '20"', cap: "lace-front",    stock: true,  rating: 4.9, reviews: 47,  tag: "Featured" },
    { id: 6,  title: "Curly body wave wig",           brand: "Reform",   price: 6200,  mrp: 7400,  img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80", category: "women", texture: "curly",    length: '16"', cap: "full-cap",      stock: true,  rating: 4.7, reviews: 64  },
    { id: 7,  title: "Coily natural-finish wig",      brand: "Adira",    price: 6800,  mrp: 7900,  img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80", category: "women", texture: "kinky",    length: '14"', cap: "full-cap",      stock: false, rating: 4.6, reviews: 38  },
    { id: 12, title: "Lightweight wavy bob",          brand: "Calm Co.", price: 3800,  mrp: 4500,  img: "images/wavy.webp",           category: "women", texture: "wavy",     length: '12"', cap: "monofilament",  stock: true,  rating: 4.6, reviews: 88,  tag: "20% OFF" },
    { id: 10, title: "Discreet men's hairpiece",      brand: "Adira",    price: 6800,  mrp: 7800,  img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80", category: "men",   texture: "straight", length: '8"',  cap: "lace-front",    stock: true,  rating: 4.7, reviews: 54  },
    { id: 11, title: "Men's natural wave system",     brand: "Reform",   price: 5900,  mrp: 6800,  img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600&q=80", category: "men",   texture: "wavy",     length: '8"',  cap: "hand-tied",     stock: true,  rating: 4.5, reviews: 42  },
    { id: 5,  title: "Long blonde with bangs",        brand: "Reform",   price: 5400,  mrp: 6500,  img: "images/wig-1.png",           category: "women", texture: "wavy",     length: '20"', cap: "full-cap",      stock: true,  rating: 4.5, reviews: 78,  tag: "20% OFF" },
    { id: 4,  title: "Sleek bob with bangs",          brand: "Adira",    price: 4200,  mrp: 4900,  img: "images/wig-2.png",           category: "women", texture: "straight", length: '12"', cap: "hand-tied",     stock: true,  rating: 4.7, reviews: 156 },
    { id: 3,  title: "Pixie blonde — ready to wear",  brand: "Calm Co.", price: 3200,  mrp: 3900,  img: "images/wig-3.png",           category: "women", texture: "straight", length: '8"',  cap: "monofilament",  stock: true,  rating: 4.6, reviews: 92  },
    { id: 9,  title: "Salt & pepper bob",             brand: "Adira",    price: 4500,  mrp: 5400,  img: "images/wig-4.png",           category: "women", texture: "straight", length: '12"', cap: "hand-tied",     stock: true,  rating: 4.8, reviews: 110 },
  ];

  const categoryOptions = [
    { v: "women", l: "Women" },
    { v: "men",   l: "Men" },
  ];

  const textureOptions = [
    { v: "straight", l: "Straight" },
    { v: "wavy",     l: "Wavy" },
    { v: "curly",    l: "Curly" },
    { v: "kinky",    l: "Kinky / Coily" },
  ];

  const lengthOptions = [
    { v: '8"',  l: '8" — pixie / chin' },
    { v: '12"', l: '12" — bob / shoulder' },
    { v: '16"', l: '16" — collarbone' },
    { v: '20"', l: '20" — mid-back' },
  ];

  const capOptions = [
    { v: "lace-front",    l: "Lace front" },
    { v: "hand-tied",     l: "Hand-tied" },
    { v: "full-cap",      l: "Full cap" },
    { v: "monofilament",  l: "Monofilament" },
  ];

  const brandOptions = ["Adira", "Reform", "Calm Co."];

  // Filter pipeline
  let products = allProducts.filter(p => p.price <= priceMax);
  if (categories.length) products = products.filter(p => categories.includes(p.category));
  if (textures.length)   products = products.filter(p => textures.includes(p.texture));
  if (lengths.length)    products = products.filter(p => lengths.includes(p.length));
  if (caps.length)       products = products.filter(p => caps.includes(p.cap));
  if (brands.length)     products = products.filter(p => brands.includes(p.brand));
  if (inStock)           products = products.filter(p => p.stock);
  if (rating)            products = products.filter(p => p.rating >= rating);

  if (sort === "price-low")  products = [...products].sort((a, b) => a.price - b.price);
  if (sort === "price-high") products = [...products].sort((a, b) => b.price - a.price);
  if (sort === "rating")     products = [...products].sort((a, b) => b.rating - a.rating);

  const activeFilterCount =
    categories.length + textures.length + lengths.length + caps.length + brands.length +
    (rating ? 1 : 0) + (priceMax < 15000 ? 1 : 0);

  const clearAll = () => {
    setPriceMax(15000); setCategories([]); setTextures([]); setLengths([]); setCaps([]);
    setBrands([]); setRating(0);
  };

  const Section = ({ title, children, defaultOpen = true }) => {
    const [open, setOpen] = React.useState(defaultOpen);
    return (
      <div style={{ borderBottom: "1px solid rgba(20,32,27,.08)", padding: "16px 0" }}>
        <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13, fontWeight: 600, letterSpacing: "-.005em", color: "var(--ink-900)" }}>
          {title}
          <span style={{ transform: open ? "rotate(90deg)" : "none", transition: "transform .2s", color: "var(--ink-400)" }}>›</span>
        </button>
        {open && <div style={{ marginTop: 14 }}>{children}</div>}
      </div>
    );
  };

  const Check = ({ checked, onChange, label, sub }) => (
    <label style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "6px 0", cursor: "pointer" }}>
      <span style={{
        width: 16, height: 16, borderRadius: 4, marginTop: 2,
        border: `1.5px solid ${checked ? "var(--green-cta)" : "rgba(20,32,27,.25)"}`,
        background: checked ? "var(--green-cta)" : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        {checked && <span style={{ color: "#fff", fontSize: 11, lineHeight: 1 }}>✓</span>}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} style={{ display: "none" }}/>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, color: "var(--ink-700)", lineHeight: 1.3 }}>{label}</div>
        {sub && <div style={{ fontSize: 11.5, color: "var(--ink-400)", marginTop: 2, lineHeight: 1.35 }}>{sub}</div>}
      </div>
    </label>
  );

  return (
    <div className="fade-in" style={{ background: "#fff" }}>
      {/* Full-bleed image header with dark overlay */}
      <section style={{ position: "relative", height: 200, overflow: "hidden" }}>
        <img src="images/hair full.webp" alt="Hair wigs" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}/>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(0,0,0,.62) 0%, rgba(0,0,0,.32) 60%, rgba(0,0,0,.10) 100%)" }}/>
        <div className="shell" style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "rgba(255,255,255,.85)", marginBottom: 10 }}>
            <button onClick={() => navigate("home")}     style={{ color: "rgba(255,255,255,.85)" }}>Home</button>
            <Icon name="chevron" size={10} color="rgba(255,255,255,.65)"/>
            <button onClick={() => navigate("oncology")} style={{ color: "rgba(255,255,255,.85)" }}>Oncology</button>
            <Icon name="chevron" size={10} color="rgba(255,255,255,.65)"/>
            <span style={{ color: "#fff" }}>Human Hair Wigs</span>
          </div>
          <h1 style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-.025em", margin: 0, color: "#fff", lineHeight: 1.05 }}>Human Hair Wigs</h1>
        </div>
      </section>

      {/* Result count strip */}
      <section style={{ padding: "14px 0", background: "#fff", borderBottom: "1px solid rgba(20,32,27,.06)" }}>
        <div className="shell" style={{ display: "flex", justifyContent: "flex-end", fontSize: 12.5, color: "var(--ink-500)" }}>
          <span><span style={{ fontWeight: 600, color: "var(--ink-900)" }}>{products.length}</span> of {allProducts.length} wigs</span>
        </div>
      </section>

      {/* Listing layout */}
      <section style={{ padding: "24px 0 64px" }}>
        <div className="shell" style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 32, alignItems: "flex-start" }}>

          {/* FILTERS — left */}
          <aside style={{ position: "sticky", top: 76, alignSelf: "flex-start" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, borderBottom: "1px solid rgba(20,32,27,.1)" }}>
              <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "-.01em" }}>Filters {activeFilterCount > 0 && <span style={{ marginLeft: 6, fontSize: 11, color: "#fff", background: "var(--green-cta)", padding: "2px 7px", borderRadius: 999, fontWeight: 600 }}>{activeFilterCount}</span>}</div>
              {activeFilterCount > 0 && <button onClick={clearAll} style={{ fontSize: 12, color: "var(--green-cta)", fontWeight: 500 }}>Clear all</button>}
            </div>

            {/* Category */}
            <Section title="Category">
              {categoryOptions.map(c => (
                <Check key={c.v} checked={categories.includes(c.v)} onChange={() => toggle(c.v, setCategories, categories)} label={c.l}/>
              ))}
            </Section>

            {/* Texture */}
            <Section title="Texture">
              {textureOptions.map(t => (
                <Check key={t.v} checked={textures.includes(t.v)} onChange={() => toggle(t.v, setTextures, textures)} label={t.l}/>
              ))}
            </Section>

            {/* Length */}
            <Section title="Length">
              {lengthOptions.map(l => (
                <Check key={l.v} checked={lengths.includes(l.v)} onChange={() => toggle(l.v, setLengths, lengths)} label={l.l}/>
              ))}
            </Section>

            {/* Cap construction */}
            <Section title="Cap construction">
              {capOptions.map(c => (
                <Check key={c.v} checked={caps.includes(c.v)} onChange={() => toggle(c.v, setCaps, caps)} label={c.l}/>
              ))}
            </Section>

            {/* Price */}
            <Section title="Price range">
              <div style={{ fontSize: 12, color: "var(--ink-500)", marginBottom: 10 }}>
                Up to <span style={{ color: "var(--ink-900)", fontWeight: 600 }}>₹{priceMax.toLocaleString("en-IN")}</span>
              </div>
              <input type="range" min={2000} max={15000} step={100} value={priceMax} onChange={e => setPriceMax(parseInt(e.target.value))} style={{ width: "100%", accentColor: "var(--green-cta)" }}/>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--ink-400)", marginTop: 4 }}>
                <span>₹2,000</span><span>₹15,000+</span>
              </div>
            </Section>

            {/* Brand */}
            <Section title="Brand" defaultOpen={false}>
              {brandOptions.map(b => (
                <Check key={b} checked={brands.includes(b)} onChange={() => toggle(b, setBrands, brands)} label={b}/>
              ))}
            </Section>

            {/* Rating */}
            <Section title="Customer rating" defaultOpen={false}>
              {[4.5, 4, 3.5, 0].map(r => (
                <label key={r} style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 0", cursor: "pointer" }}>
                  <input type="radio" checked={rating === r} onChange={() => setRating(r)} style={{ accentColor: "var(--green-cta)" }}/>
                  <span style={{ fontSize: 13, color: "var(--ink-700)" }}>{r === 0 ? "All ratings" : `★ ${r}+ & up`}</span>
                </label>
              ))}
            </Section>

            {/* Availability */}
            <Section title="Availability" defaultOpen={true}>
              <Check checked={inStock} onChange={() => setInStock(!inStock)} label="In stock"/>
            </Section>
          </aside>

          {/* PRODUCTS — right */}
          <div>
            {/* Sort + active chips */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18, gap: 16, flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {categories.map(c => (
                  <span key={c} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11.5, padding: "5px 10px", background: "var(--green-50)", color: "var(--green-cta)", borderRadius: 999, fontWeight: 500 }}>
                    {categoryOptions.find(o => o.v === c)?.l}
                    <button onClick={() => toggle(c, setCategories, categories)}>×</button>
                  </span>
                ))}
                {textures.map(t => (
                  <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11.5, padding: "5px 10px", background: "var(--green-50)", color: "var(--green-cta)", borderRadius: 999, fontWeight: 500 }}>
                    {textureOptions.find(o => o.v === t)?.l}
                    <button onClick={() => toggle(t, setTextures, textures)}>×</button>
                  </span>
                ))}
                {lengths.map(l => (
                  <span key={l} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11.5, padding: "5px 10px", background: "var(--green-50)", color: "var(--green-cta)", borderRadius: 999, fontWeight: 500 }}>
                    {l}
                    <button onClick={() => toggle(l, setLengths, lengths)}>×</button>
                  </span>
                ))}
                {caps.map(c => (
                  <span key={c} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11.5, padding: "5px 10px", background: "var(--green-50)", color: "var(--green-cta)", borderRadius: 999, fontWeight: 500 }}>
                    {capOptions.find(o => o.v === c)?.l}
                    <button onClick={() => toggle(c, setCaps, caps)}>×</button>
                  </span>
                ))}
                {brands.map(b => (
                  <span key={b} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11.5, padding: "5px 10px", background: "var(--green-50)", color: "var(--green-cta)", borderRadius: 999, fontWeight: 500 }}>
                    {b}
                    <button onClick={() => toggle(b, setBrands, brands)}>×</button>
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 12.5, color: "var(--ink-500)" }}>Sort by</span>
                <select value={sort} onChange={e => setSort(e.target.value)} style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid rgba(20,32,27,.15)", fontSize: 13, background: "#fff", color: "var(--ink-900)" }}>
                  <option value="relevance">Relevance</option>
                  <option value="price-low">Price: low to high</option>
                  <option value="price-high">Price: high to low</option>
                  <option value="rating">Top rated</option>
                </select>
              </div>
            </div>

            {/* Products grid */}
            {products.length === 0 ? (
              <div style={{ padding: "80px 20px", textAlign: "center", border: "1px dashed rgba(20,32,27,.15)", borderRadius: 12 }}>
                <div style={{ fontSize: 16, fontWeight: 600, color: "var(--ink-900)" }}>No wigs match these filters</div>
                <div style={{ fontSize: 13, color: "var(--ink-500)", marginTop: 6 }}>Try removing a filter or clearing all.</div>
                <button onClick={clearAll} className="btn btn-primary btn-sm" style={{ marginTop: 16, justifyContent: "center" }}>Clear all filters</button>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
                {products.map(p => {
                  const off = Math.round((1 - p.price / p.mrp) * 100);
                  const isHovered = hoveredCard === p.id;
                  return (
                    <div key={p.id}
                      onClick={() => navigate("pdp")}
                      onMouseEnter={() => setHoveredCard(p.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      style={{
                        background: "#FAF8F5", borderRadius: 14, overflow: "hidden",
                        border: "1px solid rgba(20,32,27,.07)",
                        display: "flex", flexDirection: "column", position: "relative",
                        cursor: "pointer",
                        boxShadow: isHovered ? "0 16px 36px -12px rgba(20,32,27,.15)" : "none",
                        transform: isHovered ? "translateY(-3px)" : "translateY(0)",
                        transition: "box-shadow 200ms ease, transform 180ms ease",
                      }}
                    >
                      <div style={{ position: "relative", height: 260, background: "#fff", overflow: "hidden" }}>
                        {/* Badges */}
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
                        {!p.stock && (
                          <div style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,.6)", zIndex: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <span style={{ background: "var(--ink-900)", color: "#fff", fontSize: 11, padding: "5px 14px", borderRadius: 999, fontWeight: 600, letterSpacing: ".05em" }}>OUT OF STOCK</span>
                          </div>
                        )}
                        <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
                        {/* Quick view — slides up on hover */}
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
            )}
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

window.OncologyPLP = OncologyPLP;
