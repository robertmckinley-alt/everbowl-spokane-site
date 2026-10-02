import { useEffect, useRef, useState, type FormEvent } from "react";

import { A, HERO_CHAPTERS } from "./assets";

type Variant = "fuel" | "wild" | "fresh";

const VARIANTS: { id: Variant; label: string; swatch: string }[] = [
  { id: "fuel", label: "Fuel", swatch: "#35c25e" },
  { id: "wild", label: "Wild", swatch: "#ff3e9a" },
  { id: "fresh", label: "Fresh", swatch: "#22c55e" },
];

// Signature bowls with a photo (the three bases: açaí, pitaya, cacao).
const FEATURE_BOWLS = [
  { name: "Everbowl", ingredients: "Açaí, granola, banana, strawberry, blueberry.", img: A.bowlAcai, tag: "Açaí base" },
  { name: "Blue Lagoon", ingredients: "Blue majic, pitaya, coco love, chia pudding, strawberry, pineapple, coconut.", img: A.bowlPitaya, tag: "Pitaya base" },
  { name: "The Whatever Bowl", ingredients: "Your bases, your fruit, your superfoods. Built from scratch, your rules.", img: A.bowlCustom, tag: "Build your own" },
];

// The full signature bowl lineup.
const SIGNATURE_BOWLS = [
  { name: "Everbowl", ingredients: "Açaí, granola, banana, strawberry, blueberry." },
  { name: "PB Everbowl", ingredients: "Açaí, granola, peanut butter, banana, strawberry, blueberry." },
  { name: "Berry Boost", ingredients: "Açaí, chia pudding, banana, strawberry, blueberry, goji berry." },
  { name: "Blue Lagoon", ingredients: "Blue majic, pitaya, coco love, chia pudding, strawberry, pineapple, coconut." },
  { name: "Pitayum", ingredients: "Açaí, pitaya, coco love, granola, banana, pineapple, kiwi, coconut." },
  { name: "Mango Majic", ingredients: "Mango, blue majic, granola, pineapple, strawberry, kiwi, coconut." },
  { name: "Full Moon", ingredients: "Vanilla, cacao wow, granola, banana, strawberry, peanut butter, cacao nibs." },
  { name: "Nutty Butty", ingredients: "Vanilla, everoats, banana, strawberry, peanut butter, almond butter, almonds, cinnamon." },
  { name: "Perfect Date", ingredients: "Cacao wow, coco love, granola, peanut butter, banana, blueberry, date." },
];

const WHATEVER_BOWLS = [
  { name: "Regular Whatever Bowl", price: "$11.99" },
  { name: "Large Whatever Bowl", price: "$14.99" },
  { name: "Kids Bowl", price: "$7.99" },
  { name: "Chia Pudding Bowl", price: "$7.99" },
  { name: "Oats Bowl", price: "$7.99" },
  { name: "Hot Oats (GF)", price: "$7.99" },
];

const SMOOTHIES = [
  { name: "Nanaberry Bliss", ingredients: "Vanilla, banana, strawberry, almond milk." },
  { name: "PB Cacao Dream", ingredients: "Cacao wow, banana, cacao nibs, peanut butter, almond milk." },
  { name: "Pitaya Paradise", ingredients: "Pitaya, coco love, strawberry, pineapple, coconut milk." },
  { name: "Glow Up", ingredients: "Mango, pineapple, apple juice." },
  { name: "Evergreen", ingredients: "Blue majic, coco love, mango, pineapple, spinach, apple juice." },
];

const TOASTS = [
  { name: "Classic Avocado Toast", price: "$6.99", ingredients: "House-made avocado spread, everything seasoning, chili flakes, honey." },
  { name: "Bruschetta Avocado Toast", price: "$7.99", ingredients: "Avocado spread, marinated tomatoes, basil, balsamic glaze." },
  { name: "PB Crunch Toast", price: "$6.99", ingredients: "Crunchy peanut butter spread, banana, cacao nibs, honey." },
  { name: "Whatever Toast", price: "$8.99", ingredients: "Build your own on toasted artisan rustic bread." },
];

const SIPS = [
  "Strawberry Lemonade", "Dragon Fruit Lemonade", "Cold Brew",
  "Cold Brew + Cinnamon Cold Foam", "Cold Brew + Cacao Cold Foam", "Cold Brew + PB Cold Foam",
  "Cinnamon Ice Blended Coffee", "Cacao Ice Blended Coffee", "PB Protein Ice Blended Coffee",
  "Iced Matcha", "Iced Strawberry Matcha", "Ice Blended Matcha", "Ice Blended Strawberry Matcha",
];

const PILLARS = [
  { icon: A.iconLeaf, title: "Real fruit", copy: "Whole fruit and ancestral superfoods, nothing fake." },
  { icon: A.iconMove, title: "Fuel for movement", copy: "Built to power the trail, the river, and the gym." },
  { icon: A.iconFresh, title: "Made fresh", copy: "Blended and built the moment you order." },
];

const MARQUEE = ["Fuel for movement", "Eat good vibes", "We unevolve", "Real fruit only", "Açaí · Pitaya · Cacao"];
const IG_TILES = [A.bowlAcai, A.bowlPitaya, A.smoothies, A.bowlCustom];

// Real Spokane details. Order / catering / app links are still placeholders.
const ORDER_URL = "https://www.everbowl.com/";
const CATERING_URL = "https://www.everbowl.com/acai-bowl-catering-near-me";
const PHONE = "(509) 555-0142";
const PHONE_HREF = "tel:+15095550142";
const ADDRESS = "13324 E. Sprague Ave, Suite 101, Spokane Valley, WA 99216";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=13324+E+Sprague+Ave+Suite+101+Spokane+Valley+WA+99216";
const MAPS_EMBED = "https://www.google.com/maps?q=13324+E+Sprague+Ave+Suite+101+Spokane+Valley+WA+99216&output=embed";
const INSTAGRAM_URL = "https://www.instagram.com/everbowl/";

const clamp = (v: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));

function ScrubHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(0);
  // Start false so SSR and the client's first render match (hydration-safe),
  // then read the real preference after mount.
  const [reduced, setReduced] = useState(false);
  // Pick the hero source after mount: the 2560w HD encode for large screens,
  // the lighter 1280w encode for phones. SSR renders the light one.
  const [heroSrc, setHeroSrc] = useState(A.heroVideo);

  useEffect(() => {
    setReduced(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false);
    const w = window.innerWidth * Math.min(window.devicePixelRatio || 1, 2);
    if (w > 1280) setHeroSrc(A.heroVideoHD);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    video.play().then(() => video.pause()).catch(() => {});

    let raf = 0;
    let target = 0;
    const tick = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const p = clamp(-rect.top / (total || 1));
      const dur = video.duration || 15;
      target = p * dur;
      if (Number.isFinite(target) && video.readyState >= 1) {
        if (Math.abs(video.currentTime - target) > 0.03) video.currentTime = target;
      }
      const idx = Math.min(HERO_CHAPTERS.length - 1, Math.floor(p * HERO_CHAPTERS.length));
      setActive(idx);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    tick();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced, heroSrc]);

  return (
    <section
      ref={sectionRef}
      className="eb-hero"
      style={{ height: reduced ? "100svh" : `${HERO_CHAPTERS.length * 100}vh` }}
    >
      <div className="eb-hero__sticky">
        <video
          ref={videoRef}
          className="eb-hero__video"
          src={heroSrc}
          poster={A.heroPoster}
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          {...(reduced ? { autoPlay: true, loop: true } : {})}
        />
        <div className="eb-hero__scrim" />
        <div className="eb-hero__stage">
          <div className="eb-hero__inner">
            {HERO_CHAPTERS.map((c, i) => (
              <div
                key={i}
                className="eb-hero__chapter"
                style={{
                  opacity: reduced ? (i === 0 ? 1 : 0) : active === i ? 1 : 0,
                  transform: !reduced && active === i ? "translateY(0)" : "translateY(12px)",
                  pointerEvents: active === i ? "auto" : "none",
                }}
                aria-hidden={active === i ? undefined : true}
              >
                <p className="font-display text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--eb-accent)" }}>
                  {c.kicker}
                </p>
                {i === 0 ? (
                  <h1 className="mt-2 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-eb-bone md:text-7xl">
                    {c.title}
                  </h1>
                ) : (
                  <p className="mt-2 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-eb-bone md:text-7xl" role="heading" aria-level={2}>
                    {c.title}
                  </p>
                )}
                <p className="mt-4 max-w-[42ch] text-lg leading-relaxed text-eb-muted-light">{c.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="rounded-full px-3 py-1 text-xs font-semibold text-eb-bone" style={{ background: "rgba(247,242,233,0.14)" }}>
                      {t}
                    </span>
                  ))}
                </div>
                {c.cta ? (
                  <div className="eb-hero-actions">
                    <a href="#menu" className="eb-link-arrow">See the menu ↓</a>
                    <a href="#order" className="eb-btn-order">Order online</a>
                  </div>
                ) : null}
              </div>
            ))}
            {!reduced && (
              <>
                <div className="eb-hero__progress">
                  {HERO_CHAPTERS.map((_, i) => (
                    <span key={i} className={"eb-hero__dot" + (i === active ? " eb-hero__dot--on" : "")} />
                  ))}
                </div>
                <div className="eb-hero__hint">Scroll</div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [variant, setVariant] = useState<Variant>("fuel");
  const [signedUp, setSignedUp] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.variant = variant;
  }, [variant]);

  function onSignup(e: FormEvent) {
    e.preventDefault();
    setSignedUp(true);
  }

  return (
    <main className="font-body bg-eb-bone text-eb-ink">
      {/* Variant switcher */}
      <div className="fixed bottom-4 right-4 z-[60] flex items-center gap-1.5 rounded-full border border-eb-violet/30 bg-eb-plum/85 px-2 py-1.5 backdrop-blur-md">
        <span className="px-1.5 text-xs font-semibold text-eb-muted-light">Vibe</span>
        {VARIANTS.map((v) => (
          <button
            key={v.id}
            onClick={() => setVariant(v.id)}
            aria-pressed={variant === v.id}
            title={v.label}
            className={"flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors " + (variant === v.id ? "bg-eb-bone text-eb-plum" : "text-eb-muted-light hover:text-eb-bone")}
          >
            <span className="eb-swatch" style={{ background: v.swatch }} />
            {v.label}
          </button>
        ))}
      </div>

      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-eb-violet/25 bg-eb-plum/75 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="flex items-center gap-2.5">
            <img src={A.monogram} alt="Everbowl" className="h-8 w-8 rounded-lg" />
            <span className="font-display text-lg font-extrabold lowercase tracking-tight text-eb-bone">
              everbowl <span className="text-eb-green">spokane</span>
            </span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#menu" className="text-sm font-medium text-eb-muted-light transition-colors hover:text-eb-bone">Bowls</a>
            <a href="#smoothies" className="text-sm font-medium text-eb-muted-light transition-colors hover:text-eb-bone">Smoothies</a>
            <a href="#toast" className="text-sm font-medium text-eb-muted-light transition-colors hover:text-eb-bone">Toast</a>
            <a href="#location" className="text-sm font-medium text-eb-muted-light transition-colors hover:text-eb-bone">Visit</a>
            <a href="/blog/" className="text-sm font-medium text-eb-muted-light transition-colors hover:text-eb-bone">Journal</a>
          </div>
          <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="eb-btn-order text-sm">Order online</a>
        </nav>
      </header>

      <span id="top" />

      <ScrubHero />

      {/* Marquee */}
      <div className="eb-marquee bg-eb-plum py-4 text-eb-bone">
        <div className="eb-marquee__track">
          {[...MARQUEE, ...MARQUEE].map((word, i) => (
            <span key={i} className="flex items-center gap-6 font-display text-xl font-semibold">
              <span>{word}</span>
              <span className="text-eb-green">✳</span>
            </span>
          ))}
        </div>
      </div>

      {/* Pillars */}
      <section className="bg-eb-bone">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-y-8 px-5 py-14 sm:grid-cols-3 sm:divide-x sm:divide-eb-bone-line">
          {PILLARS.map((p) => (
            <div key={p.title} className="flex flex-col items-start gap-3 sm:px-8 sm:first:pl-0">
              <img src={p.icon} alt="" className="h-10 w-10" />
              <h3 className="font-display text-xl font-bold text-eb-ink">{p.title}</h3>
              <p className="max-w-[26ch] text-sm leading-relaxed text-eb-muted">{p.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Menu: bowls */}
      <section id="menu" className="scroll-mt-20 bg-eb-bone-soft">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 font-display text-sm font-semibold uppercase tracking-wide text-eb-green-deep">The bowls</p>
              <h2 className="max-w-[16ch] font-display text-4xl font-extrabold leading-none tracking-tight text-eb-ink md:text-6xl">
                Piled high, blended fresh.
              </h2>
            </div>
            <p className="max-w-[34ch] text-base leading-relaxed text-eb-muted">
              Every signature bowl comes <span className="font-semibold text-eb-ink">Regular $11.99</span> or <span className="font-semibold text-eb-ink">Large $14.99</span>. Made to order, every time.
            </p>
          </div>

          {/* Feature trio (the three bases) */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {FEATURE_BOWLS.map((b) => (
              <article key={b.name} className="eb-card overflow-hidden rounded-3xl bg-eb-bone">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img src={b.img} alt={b.name} className="h-full w-full object-cover" />
                  <span className="absolute left-4 top-4 eb-tag">{b.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-extrabold tracking-tight text-eb-ink">{b.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-eb-muted">{b.ingredients}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Full signature lineup */}
          <h3 className="mb-6 mt-16 font-display text-2xl font-extrabold tracking-tight text-eb-ink">All signature bowls</h3>
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
            {SIGNATURE_BOWLS.map((b) => (
              <div key={b.name} className="flex justify-between gap-4 border-t border-eb-bone-line pt-4">
                <div>
                  <h4 className="font-display text-lg font-bold text-eb-ink">{b.name}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-eb-muted">{b.ingredients}</p>
                </div>
                <span className="shrink-0 font-display text-sm font-bold text-eb-green-deep">$11.99+</span>
              </div>
            ))}
          </div>

          {/* Build your own / Whatever Bowls */}
          <div className="mt-14 rounded-3xl bg-eb-plum p-8 text-eb-bone md:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-display text-sm font-semibold text-eb-green">Build your own</p>
                <h3 className="mt-2 font-display text-3xl font-extrabold tracking-tight">The Whatever Bowl</h3>
                <p className="mt-2 max-w-[44ch] text-base leading-relaxed text-eb-muted-light">
                  Pick your bases, load your fruit, stack your superfoods. Plus kids, chia, oats and hot-oats bowls.
                </p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
              {WHATEVER_BOWLS.map((w) => (
                <div key={w.name} className="flex items-baseline justify-between gap-3 border-t border-eb-violet/30 pt-3">
                  <span className="text-sm font-medium text-eb-bone">{w.name}</span>
                  <span className="font-display text-sm font-bold text-eb-green">{w.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smoothies */}
      <section id="smoothies" className="relative scroll-mt-20 overflow-hidden bg-eb-plum">
        <img src={A.plate} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-eb-plum/70" />
        <div className="relative mx-auto max-w-6xl px-5 py-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-2 font-display text-sm font-semibold uppercase tracking-wide text-eb-green">Sip the superfoods</p>
              <h2 className="font-display text-4xl font-extrabold leading-none tracking-tight text-eb-bone md:text-6xl">Smoothies that actually move.</h2>
              <p className="mt-4 max-w-[38ch] text-base leading-relaxed text-eb-muted-light">
                Blended thick with real fruit and superfood boosts. <span className="font-semibold text-eb-bone">Regular $9.99 / Large $10.99</span>, or build your own Whatever Smoothie.
              </p>
              <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="eb-btn-rewards mt-7">Order online</a>
            </div>
            <div className="overflow-hidden rounded-3xl"><img src={A.smoothies} alt="Everbowl smoothies to go" className="h-full w-full object-cover" /></div>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {SMOOTHIES.map((s) => (
              <div key={s.name} className="rounded-2xl border border-eb-violet/40 bg-eb-plum-deep/70 p-6">
                <h3 className="font-display text-xl font-bold text-eb-bone">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-eb-muted-light">{s.ingredients}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toast */}
      <section id="toast" className="scroll-mt-20 bg-eb-bone">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-10">
            <p className="mb-2 font-display text-sm font-semibold uppercase tracking-wide text-eb-green-deep">Toast</p>
            <h2 className="font-display text-4xl font-extrabold leading-none tracking-tight text-eb-ink md:text-6xl">On artisan rustic bread.</h2>
          </div>
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
            {TOASTS.map((t) => (
              <div key={t.name} className="flex justify-between gap-4 border-t border-eb-bone-line pt-4">
                <div>
                  <h4 className="font-display text-lg font-bold text-eb-ink">{t.name}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-eb-muted">{t.ingredients}</p>
                </div>
                <span className="shrink-0 font-display text-sm font-bold text-eb-green-deep">{t.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sips */}
      <section id="sips" className="bg-eb-bone-soft">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="mb-8">
            <p className="mb-2 font-display text-sm font-semibold uppercase tracking-wide text-eb-green-deep">Sips</p>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-eb-ink md:text-4xl">Lemonades, cold brew &amp; matcha.</h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {SIPS.map((s) => (
              <span key={s} className="rounded-full border border-eb-bone-line bg-eb-bone px-4 py-2 text-sm font-medium text-eb-ink">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Catering */}
      <section id="catering" className="scroll-mt-20 bg-eb-bone">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl"><img src={A.spread} alt="Everbowl catering spread" className="h-full w-full object-cover" /></div>
            <div>
              <p className="mb-2 font-display text-sm font-semibold uppercase tracking-wide text-eb-green-deep">Catering</p>
              <h2 className="font-display text-4xl font-extrabold leading-none tracking-tight text-eb-ink md:text-6xl">Feed the whole crew.</h2>
              <p className="mt-4 max-w-[40ch] text-base leading-relaxed text-eb-muted">Team offsites, practices, birthdays, and events. Build-your-own bowl bars and smoothie boxes for groups of any size, delivered fresh.</p>
              <div className="mt-7 flex flex-wrap gap-4">
                <a href={CATERING_URL} target="_blank" rel="noopener noreferrer" className="eb-btn-order">Order catering</a>
                <a href={PHONE_HREF} className="eb-link-pin self-center">Call {PHONE}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location + Call Us + map */}
      <section id="location" className="scroll-mt-20 bg-eb-bone-soft">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-2 font-display text-sm font-semibold uppercase tracking-wide text-eb-green-deep">Visit us</p>
            <h2 className="font-display text-4xl font-extrabold leading-none tracking-tight text-eb-ink md:text-6xl">Fuel up in Spokane.</h2>
            <p className="mt-5 text-lg font-semibold text-eb-ink">Spokane Valley</p>
            <p className="text-base leading-relaxed text-eb-muted">{ADDRESS}</p>
            <p className="mt-1 text-base"><a href={PHONE_HREF} className="font-medium text-eb-green-deep hover:underline">{PHONE}</a></p>
            <dl className="mt-7 space-y-2 border-t border-eb-bone-line pt-6 text-base">
              <div className="flex justify-between"><dt className="text-eb-muted">Mon - Fri</dt><dd className="font-medium text-eb-ink">8:00 AM - 8:00 PM</dd></div>
              <div className="flex justify-between"><dt className="text-eb-muted">Saturday</dt><dd className="font-medium text-eb-ink">8:00 AM - 8:00 PM</dd></div>
              <div className="flex justify-between"><dt className="text-eb-muted">Sunday</dt><dd className="font-medium text-eb-ink">9:00 AM - 6:00 PM</dd></div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-5">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="eb-link-pin">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                Get directions
              </a>
              <a href={PHONE_HREF} className="eb-link-pin">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
                Call us
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-eb-bone-line">
            <iframe title="Everbowl Spokane location map" src={MAPS_EMBED} className="h-full min-h-[340px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      {/* App + Now Hiring */}
      <section className="bg-eb-plum">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-5 py-16 md:grid-cols-2">
          <div className="rounded-3xl bg-eb-plum-deep/60 p-8 text-eb-bone">
            <p className="font-display text-sm font-semibold text-eb-green">Get the app</p>
            <h3 className="mt-3 font-display text-3xl font-extrabold tracking-tight">Order faster. Earn on every bowl.</h3>
            <p className="mt-3 max-w-[38ch] text-base leading-relaxed text-eb-muted-light">Order ahead, skip the line, and stack Everbowl Rewards points from your phone.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-eb-violet/50 px-5 py-3 text-sm font-semibold text-eb-bone transition-colors hover:border-eb-green"> App Store</a>
              <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-eb-violet/50 px-5 py-3 text-sm font-semibold text-eb-bone transition-colors hover:border-eb-green">▶ Google Play</a>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-3xl bg-eb-green p-8 text-eb-plum-deep">
            <div>
              <p className="font-display text-sm font-bold">Now hiring</p>
              <h3 className="mt-3 font-display text-3xl font-extrabold tracking-tight">Work here. Eat good.</h3>
              <p className="mt-3 max-w-[38ch] text-base font-medium leading-relaxed">We're building the Spokane crew. Flexible shifts, free bowls, good people.</p>
            </div>
            <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-eb-plum px-6 py-3 font-display text-sm font-bold text-eb-bone transition-transform hover:scale-[1.02] active:scale-95">Apply to work here</a>
          </div>
        </div>
      </section>

      {/* Everfan newsletter */}
      <section className="bg-eb-bone">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-eb-green-deep">Become an Everfan</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-none tracking-tight text-eb-ink md:text-5xl">Acaisome news, straight to your inbox.</h2>
          <p className="mt-4 text-base leading-relaxed text-eb-muted">New flavors, Spokane events, and members-only drops. No spam, just good vibes.</p>
          {signedUp ? (
            <p className="mt-8 font-display text-lg font-bold text-eb-green-deep">You're in. Welcome to the crew.</p>
          ) : (
            <form onSubmit={onSignup} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="everfan-email" className="sr-only">Email address</label>
              <input id="everfan-email" type="email" required placeholder="you@email.com" className="w-full rounded-full border border-eb-bone-line bg-white px-5 py-3 text-eb-ink outline-none placeholder:text-eb-muted focus:border-eb-green" />
              <button type="submit" className="eb-btn-order justify-center">Sign up</button>
            </form>
          )}
        </div>
      </section>

      {/* Instagram */}
      <section className="bg-eb-bone-soft">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-eb-ink">@everbowlspokane</h2>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="eb-link-pin">Follow on Instagram</a>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {IG_TILES.map((src, i) => (
              <a key={i} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="eb-card block aspect-square overflow-hidden rounded-2xl">
                <img src={src} alt="Everbowl on Instagram" className="h-full w-full object-cover" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Order & rewards */}
      <section id="order" className="scroll-mt-20 bg-eb-green">
        <div className="mx-auto max-w-6xl px-5 py-20 text-eb-plum-deep">
          <p className="font-display text-sm font-bold uppercase tracking-wide">Everbowl Rewards</p>
          <h2 className="mt-3 max-w-[18ch] font-display text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">Eat bowls. Earn stuff.</h2>
          <p className="mt-5 max-w-[46ch] text-lg font-medium">Rack up points on every bowl and smoothie, score members-only perks, and get a treat on your birthday.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-eb-plum px-7 py-3.5 font-display text-base font-bold text-eb-bone transition-transform hover:scale-[1.02] active:scale-95">Order online</a>
            <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl border-2 border-eb-plum px-7 py-3 font-display text-base font-bold text-eb-plum transition-colors hover:bg-eb-plum hover:text-eb-bone">Join Everbowl Rewards</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-eb-plum-deep text-eb-bone">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div>
              <div className="flex items-center gap-2.5">
                <img src={A.monogram} alt="" className="h-9 w-9 rounded-lg" />
                <span className="font-display text-xl font-extrabold lowercase tracking-tight">everbowl <span className="text-eb-green">spokane</span></span>
              </div>
              <p className="mt-4 max-w-[30ch] text-sm leading-relaxed text-eb-muted-light">Ancestral superfoods, blended fresh. Fuel for movement in the heart of Spokane.</p>
            </div>
            <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
              <div>
                <p className="mb-3 font-display font-bold text-eb-green">Menu</p>
                <ul className="space-y-2 text-eb-muted-light">
                  <li><a href="#menu" className="transition-colors hover:text-eb-bone">Bowls</a></li>
                  <li><a href="#smoothies" className="transition-colors hover:text-eb-bone">Smoothies</a></li>
                  <li><a href="#toast" className="transition-colors hover:text-eb-bone">Toast &amp; Sips</a></li>
                  <li><a href="#catering" className="transition-colors hover:text-eb-bone">Catering</a></li>
                </ul>
              </div>
              <div>
                <p className="mb-3 font-display font-bold text-eb-green">Visit</p>
                <ul className="space-y-2 text-eb-muted-light">
                  <li><a href="#location" className="transition-colors hover:text-eb-bone">Location</a></li>
                  <li><a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-eb-bone">Directions</a></li>
                  <li><a href={PHONE_HREF} className="transition-colors hover:text-eb-bone">Call us</a></li>
                </ul>
              </div>
              <div>
                <p className="mb-3 font-display font-bold text-eb-green">More</p>
                <ul className="space-y-2 text-eb-muted-light">
                  <li><a href="/blog/" className="transition-colors hover:text-eb-bone">Journal</a></li>
                  <li><a href="#order" className="transition-colors hover:text-eb-bone">Rewards</a></li>
                  <li><a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-eb-bone">Order online</a></li>
                  <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-eb-bone">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-2 border-t border-eb-violet/30 pt-6 text-xs text-eb-muted-light">
            <p>© 2026 Everbowl Spokane. Fuel for movement.</p>
            <p>Menu and pricing based on Everbowl's Mission Valley online ordering. Phone and ordering / catering links are placeholders for this concept site.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
