/* Oncology > Hair Wigs PLP V2 — listing page rebuilt from design.md components + tokens.
   Product cards use the design.md .card-product component, now with a star-rating row. */

const OncologyPLPV2 = ({ navigate }) => {
  const initialFilter = (() => {
    const f = (typeof window !== "undefined" && window.__plpInitialFilter) || {};
    if (typeof window !== "undefined") delete window.__plpInitialFilter;
    return f;
  })();

  const [sortOpen, setSortOpen] = React.useState(false);
  const sortRef = React.useRef(null);

  // Close sort dropdown on outside click
  React.useEffect(() => {
    const handler = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) setSortOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const [priceMax, setPriceMax]     = React.useState(15000);
  const [categories, setCategories] = React.useState(initialFilter.categories || []);
  const [textures, setTextures]     = React.useState(initialFilter.textures   || []);
  const [lengths, setLengths]       = React.useState(initialFilter.lengths    || []);
  const [caps, setCaps]             = React.useState(initialFilter.caps       || []);
  const [inStock, setInStock]       = React.useState(true);
  const [brands, setBrands]         = React.useState([]);
  const [rating, setRating]         = React.useState(0);
  const [sort, setSort]             = React.useState("relevance");

  const toggle = (val, setter, arr) =>
    setter(arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val]);

  const allProducts = [
    { id: 8,  title: "Honey-highlight long wig",     brand: "Adira",    price: 7800,  mrp: 9200,  img: "images/Straight.jpg.webp", category: "women", texture: "wavy",     length: '20"', cap: "lace-front",   stock: true,  rating: 4.9, reviews: 211, tag: "Featured" },
    { id: 1,  title: "Premium wavy human-hair wig",  brand: "Adira",    price: 4800,  mrp: 6200,  img: "images/wig-pdp.webp",      category: "women", texture: "wavy",     length: '16"', cap: "hand-tied",    stock: true,  rating: 4.8, reviews: 124, tag: "Bestseller" },
    { id: 2,  title: "Custom lace-front wig",        brand: "Adira",    price: 12500, mrp: 14800, img: "images/hair blonde 1.png", category: "women", texture: "straight", length: '20"', cap: "lace-front",   stock: true,  rating: 4.9, reviews: 47,  tag: "Featured" },
    { id: 6,  title: "Curly body wave wig",          brand: "Reform",   price: 6200,  mrp: 7400,  img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80", category: "women", texture: "curly", length: '16"', cap: "full-cap",     stock: true,  rating: 4.7, reviews: 64 },
    { id: 7,  title: "Coily natural-finish wig",     brand: "Adira",    price: 6800,  mrp: 7900,  img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80", category: "women", texture: "kinky", length: '14"', cap: "full-cap",     stock: false, rating: 4.6, reviews: 38 },
    { id: 12, title: "Lightweight wavy bob",         brand: "Calm Co.", price: 3800,  mrp: 4500,  img: "images/wavy.webp",         category: "women", texture: "wavy",     length: '12"', cap: "monofilament", stock: true,  rating: 4.6, reviews: 88,  tag: "20% OFF" },
    { id: 10, title: "Discreet men's hairpiece",     brand: "Adira",    price: 6800,  mrp: 7800,  img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80", category: "men", texture: "straight", length: '8"', cap: "lace-front", stock: true,  rating: 4.7, reviews: 54 },
    { id: 11, title: "Men's natural wave system",    brand: "Reform",   price: 5900,  mrp: 6800,  img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600&q=80", category: "men", texture: "wavy",     length: '8"', cap: "hand-tied",  stock: true,  rating: 4.5, reviews: 42 },
    { id: 5,  title: "Long blonde with bangs",       brand: "Reform",   price: 5400,  mrp: 6500,  img: "images/wig-1.png",         category: "women", texture: "wavy",     length: '20"', cap: "full-cap",     stock: true,  rating: 4.5, reviews: 78,  tag: "20% OFF" },
    { id: 4,  title: "Sleek bob with bangs",         brand: "Adira",    price: 4200,  mrp: 4900,  img: "images/wig-2.png",         category: "women", texture: "straight", length: '12"', cap: "hand-tied",    stock: true,  rating: 4.7, reviews: 156 },
    { id: 3,  title: "Pixie blonde — ready to wear", brand: "Calm Co.", price: 3200,  mrp: 3900,  img: "images/wig-3.png",         category: "women", texture: "straight", length: '8"',  cap: "monofilament", stock: true,  rating: 4.6, reviews: 92 },
    { id: 9,  title: "Salt & pepper bob",            brand: "Adira",    price: 4500,  mrp: 5400,  img: "images/wig-4.png",         category: "women", texture: "straight", length: '12"', cap: "hand-tied",    stock: true,  rating: 4.8, reviews: 110 },
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
    { v: "lace-front",   l: "Lace front" },
    { v: "hand-tied",    l: "Hand-tied" },
    { v: "full-cap",     l: "Full cap" },
    { v: "monofilament", l: "Monofilament" },
  ];
  const brandOptions = ["Adira", "Reform", "Calm Co."];

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
      <div style={{ borderBottom: "1px solid rgba(20,32,27,.08)", padding: "var(--space-md) 0" }}>
        <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 14, fontWeight: 600, letterSpacing: "-.005em", color: "var(--ink-900)" }}>
          {title}
          <span style={{ display: "inline-flex", transform: open ? "rotate(90deg)" : "none", transition: "transform 200ms var(--ease-out)", color: "var(--ink-400)" }}>
            <Icon name="chevron" size={14} />
          </span>
        </button>
        {open && <div style={{ marginTop: "var(--space-sm)" }}>{children}</div>}
      </div>
    );
  };

  const Check = ({ checked, onChange, label }) => (
    <label style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-xs)", padding: "6px 0", cursor: "pointer" }}>
      <span style={{
        width: 16, height: 16, borderRadius: "var(--radius-xs)", marginTop: 2,
        border: `1.5px solid ${checked ? "var(--green-cta)" : "rgba(20,32,27,.25)"}`,
        background: checked ? "var(--green-cta)" : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        {checked && <Icon name="check" size={11} color="var(--white)" />}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} style={{ display: "none" }} />
      <div style={{ fontSize: 13.5, color: "var(--ink-700)", lineHeight: 1.3 }}>{label}</div>
    </label>
  );

  const sortOptions = [
    { v: "relevance",   l: "Relevance" },
    { v: "price-low",   l: "Price: low to high" },
    { v: "price-high",  l: "Price: high to low" },
    { v: "rating",      l: "Top rated" },
  ];
  const sortLabel = sortOptions.find(o => o.v === sort)?.l ?? "Relevance";

  return (
    <div className="fade-in" style={{ background: "#fff" }}>

      {/* ── IMAGE HEADER ─────────────────────────────── */}
      <section style={{ position: "relative", height: 220, overflow: "hidden", background: "var(--green-900)" }}>
        <img src="images/hair full.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(14,42,32,.78) 0%, rgba(14,42,32,.42) 60%, rgba(14,42,32,.14) 100%)" }} />
        <div className="shell" style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-xs)", fontSize: 13, color: "rgba(255,255,255,.85)", marginBottom: "var(--space-sm)" }}>
            <button onClick={() => navigate("home-v2")}     style={{ color: "rgba(255,255,255,.85)", background: "none", border: "none", cursor: "pointer", padding: 0, fontSize: 13 }}>Home</button>
            <Icon name="chevron" size={11} color="rgba(255,255,255,.6)" />
            <button onClick={() => navigate("oncology-v2")} style={{ color: "rgba(255,255,255,.85)", background: "none", border: "none", cursor: "pointer", padding: 0, fontSize: 13 }}>Oncology</button>
            <Icon name="chevron" size={11} color="rgba(255,255,255,.6)" />
            <span style={{ color: "var(--white)" }}>Human Hair Wigs</span>
          </div>
          <h1 className="h-display-md" style={{ color: "var(--white)", margin: 0 }}>Human Hair Wigs</h1>
        </div>
      </section>

      {/* ── LISTING — filters + product grid ─────────── */}
      <section style={{ paddingTop: "var(--space-lg)", paddingBottom: "var(--space-section)" }}>
        <div className="shell" style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: "var(--space-lg)", alignItems: "flex-start" }}>

          {/* FILTERS */}
          <aside style={{ position: "sticky", top: 76, alignSelf: "flex-start" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "var(--space-sm)", borderBottom: "1px solid rgba(20,32,27,.1)" }}>
              <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-.01em", color: "var(--ink-900)", display: "inline-flex", alignItems: "center", gap: "var(--space-xs)" }}>
                Filters
                {activeFilterCount > 0 && (
                  <span style={{ fontSize: 11, color: "var(--white)", background: "var(--green-cta)", padding: "2px 7px", borderRadius: "var(--radius-full)", fontWeight: 600 }}>{activeFilterCount}</span>
                )}
              </div>
              {activeFilterCount > 0 && (
                <button onClick={clearAll} style={{ fontSize: 12, color: "var(--green-cta)", fontWeight: 500, background: "none", border: "none", cursor: "pointer" }}>Clear all</button>
              )}
            </div>

            <Section title="Category">
              {categoryOptions.map(c => (
                <Check key={c.v} checked={categories.includes(c.v)} onChange={() => toggle(c.v, setCategories, categories)} label={c.l} />
              ))}
            </Section>
            <Section title="Texture">
              {textureOptions.map(t => (
                <Check key={t.v} checked={textures.includes(t.v)} onChange={() => toggle(t.v, setTextures, textures)} label={t.l} />
              ))}
            </Section>
            <Section title="Length">
              {lengthOptions.map(l => (
                <Check key={l.v} checked={lengths.includes(l.v)} onChange={() => toggle(l.v, setLengths, lengths)} label={l.l} />
              ))}
            </Section>
            <Section title="Cap construction">
              {capOptions.map(c => (
                <Check key={c.v} checked={caps.includes(c.v)} onChange={() => toggle(c.v, setCaps, caps)} label={c.l} />
              ))}
            </Section>
            <Section title="Price range">
              <div style={{ fontSize: 12, color: "var(--ink-500)", marginBottom: "var(--space-xs)" }}>
                Up to <span style={{ color: "var(--ink-900)", fontWeight: 600 }}>₹{priceMax.toLocaleString("en-IN")}</span>
              </div>
              <input type="range" min={2000} max={15000} step={100} value={priceMax} onChange={e => setPriceMax(parseInt(e.target.value))} style={{ width: "100%", accentColor: "var(--green-cta)" }} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, color: "var(--ink-400)", marginTop: 4 }}>
                <span>₹2,000</span><span>₹15,000+</span>
              </div>
            </Section>
            <Section title="Brand" defaultOpen={false}>
              {brandOptions.map(b => (
                <Check key={b} checked={brands.includes(b)} onChange={() => toggle(b, setBrands, brands)} label={b} />
              ))}
            </Section>
            <Section title="Customer rating" defaultOpen={false}>
              {[4.5, 4, 3.5, 0].map(r => (
                <label key={r} style={{ display: "flex", alignItems: "center", gap: "var(--space-xs)", padding: "6px 0", cursor: "pointer" }}>
                  <input type="radio" checked={rating === r} onChange={() => setRating(r)} style={{ accentColor: "var(--green-cta)" }} />
                  <span style={{ fontSize: 13, color: "var(--ink-700)" }}>{r === 0 ? "All ratings" : `${r}+ & up`}</span>
                </label>
              ))}
            </Section>
            <Section title="Availability">
              <Check checked={inStock} onChange={() => setInStock(!inStock)} label="In stock" />
            </Section>
          </aside>

          {/* PRODUCTS */}
          <div>
            {/* Sort row: count (left) + sort dropdown (right) */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-sm)" }}>
              <span style={{ fontSize: 13.5, color: "var(--ink-500)" }}>
                <span style={{ fontWeight: 600, color: "var(--ink-900)" }}>{products.length}</span> of {allProducts.length} wigs
              </span>
              {/* Custom sort dropdown */}
              <div ref={sortRef} style={{ position: "relative" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-xs)" }}>
                  <span style={{ fontSize: 13, color: "var(--ink-500)" }}>Sort by</span>
                  <button
                    onClick={() => setSortOpen(o => !o)}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      padding: "8px 12px", borderRadius: "var(--radius-sm)",
                      border: "1px solid rgba(20,32,27,.15)", fontSize: 13,
                      background: "#fff", color: "var(--ink-900)",
                      cursor: "pointer", minWidth: 170,
                      justifyContent: "space-between",
                      transition: "border-color 160ms ease",
                    }}
                  >
                    <span>{sortLabel}</span>
                    <span style={{ display: "inline-flex", transform: sortOpen ? "rotate(180deg)" : "none", transition: "transform 180ms cubic-bezier(0.23,1,0.32,1)", color: "var(--ink-400)" }}>
                      <Icon name="chevron-down" size={13} />
                    </span>
                  </button>
                </div>
                {sortOpen && (
                  <div style={{
                    position: "absolute", top: "calc(100% + 6px)", right: 0,
                    background: "#fff", borderRadius: "var(--radius-md)",
                    border: "1px solid rgba(20,32,27,.10)",
                    boxShadow: "0 8px 24px -4px rgba(20,32,27,.14), 0 2px 6px -2px rgba(20,32,27,.08)",
                    zIndex: 40, minWidth: 200, overflow: "hidden",
                    animation: "fadeInDown 140ms cubic-bezier(0.23,1,0.32,1)",
                  }}>
                    {sortOptions.map(o => (
                      <button
                        key={o.v}
                        onClick={() => { setSort(o.v); setSortOpen(false); }}
                        style={{
                          width: "100%", textAlign: "left", padding: "10px 14px",
                          fontSize: 13, background: sort === o.v ? "var(--green-50)" : "transparent",
                          color: sort === o.v ? "var(--green-cta)" : "var(--ink-800)",
                          fontWeight: sort === o.v ? 600 : 400,
                          border: "none", cursor: "pointer",
                          transition: "background 100ms ease",
                          display: "block",
                        }}
                        onMouseEnter={e => { if (sort !== o.v) e.currentTarget.style.background = "rgba(20,32,27,.04)"; }}
                        onMouseLeave={e => { if (sort !== o.v) e.currentTarget.style.background = "transparent"; }}
                      >
                        {o.l}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Active filter chips */}
            {(() => {
              const chips = [
                ...categories.map(c => ({ k: "c-" + c, l: categoryOptions.find(o => o.v === c)?.l, rm: () => toggle(c, setCategories, categories) })),
                ...textures.map(t => ({ k: "t-" + t, l: textureOptions.find(o => o.v === t)?.l, rm: () => toggle(t, setTextures, textures) })),
                ...lengths.map(l => ({ k: "l-" + l, l, rm: () => toggle(l, setLengths, lengths) })),
                ...caps.map(c => ({ k: "p-" + c, l: capOptions.find(o => o.v === c)?.l, rm: () => toggle(c, setCaps, caps) })),
                ...brands.map(b => ({ k: "b-" + b, l: b, rm: () => toggle(b, setBrands, brands) })),
              ];
              if (!chips.length) return null;
              return (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-xs)", marginBottom: "var(--space-base)" }}>
                  {chips.map(chip => (
                    <span key={chip.k} style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-xxs)", fontSize: 11.5, padding: "5px 10px", background: "var(--green-50)", color: "var(--green-cta)", borderRadius: "var(--radius-full)", fontWeight: 500 }}>
                      {chip.l}
                      <button onClick={chip.rm} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--green-cta)", display: "inline-flex" }}><Icon name="x" size={12} /></button>
                    </span>
                  ))}
                </div>
              );
            })()}

            {/* Product grid */}
            {products.length === 0 ? (
              <div style={{ padding: "80px var(--space-base)", textAlign: "center", border: "1px dashed rgba(20,32,27,.15)", borderRadius: "var(--radius-md)" }}>
                <div style={{ fontSize: 16, fontWeight: 600, color: "var(--ink-900)" }}>No wigs match these filters</div>
                <div style={{ fontSize: 13, color: "var(--ink-500)", marginTop: 6 }}>Try removing a filter or clearing all.</div>
                <button onClick={clearAll} className="btn btn-primary btn-sm" style={{ marginTop: "var(--space-md)", justifyContent: "center" }}>Clear all filters</button>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "var(--space-base)" }}>
                {products.map(p => {
                  const off = Math.round((1 - p.price / p.mrp) * 100);
                  return (
                    <ProductCard
                      key={p.id}
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
                      outOfStock={!p.stock}
                      onClick={() => navigate("pdp-v2")}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── FLOATING "TALK TO US" BUTTON ── */}
      <div style={{ position: "fixed", bottom: 28, right: 28, zIndex: 90 }}>
        <button
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "14px 22px", borderRadius: "var(--radius-full)",
            background: "var(--green-800)", color: "var(--white)",
            boxShadow: "0 10px 28px -8px rgba(14,42,32,.45)",
            fontSize: 14, fontWeight: 500, letterSpacing: "-.01em",
            transition: "transform 160ms var(--ease-out), box-shadow 160ms ease",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 36px -8px rgba(14,42,32,.55)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 28px -8px rgba(14,42,32,.45)"; }}
          onMouseDown={e => e.currentTarget.style.transform = "scale(0.97)"}
          onMouseUp={e => e.currentTarget.style.transform = "translateY(-2px)"}
        >
          <Icon name="chat" size={18} color="var(--white)" /> Talk to us
        </button>
      </div>

    </div>
  );
};

window.OncologyPLPV2 = OncologyPLPV2;
