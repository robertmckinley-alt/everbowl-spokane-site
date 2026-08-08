import { useEffect, useRef, useState, type FormEvent } from "react";

import { A, HERO_CHAPTERS } from "./assets";

type Variant = "fuel" | "wild" | "fresh";

const VARIANTS: { id: Variant; label: string; swatch: string }[] = [
  { id: "fuel", label: "Fuel", swatch: "#35c25e" },
  { id: "wild", label: "Wild", swatch: "#ff3e9a" },
  { id: "fresh", label: "Fresh", swatch: "#22c55e" },
];

const BOWLS = [
  { name: "Everbowl", ingredients: "Açaí, granola, banana, strawberry, blueberry.", price: "$13.20", img: A.bowlAcai, tags: ["Açaí base", "Fan favorite"] },
  { name: "Blue Lagoon", ingredients: "Pitaya, blue majik, coco love, chia pudding, strawberry, pineapple, coconut.", price: "$13.20", img: A.bowlPitaya, tags: ["Pitaya base"] },
  { name: "Full Moon", ingredients: "Cacao, vanilla, granola, banana, strawberry, peanut butter, cacao nibs.", price: "$13.20", img: A.bowlNutty, tags: ["Cacao base"] },
];

const SMOOTHIES = [
  { name: "Nannaberry Bliss", ingredients: "Vanilla, strawberry, banana, almond milk.", price: "$10.80" },
  { name: "PB Cacao Dream", ingredients: "Cacao, banana, peanut butter, cacao nibs, almond milk.", price: "$10.80" },
  { name: "Pitaya Paradise", ingredients: "Pitaya, coco love, strawberry, pineapple, coconut milk.", price: "$10.80" },
  { name: "Go Greens", ingredients: "Vanilla, banana, greens powder, almond milk.", price: "$12.00" },
  { name: "Unbeetable", ingredients: "Blue majik, pineapple, beet root, coconut milk.", price: "$12.00" },
];

const PILLARS = [
  { icon: A.iconLeaf, title: "Real fruit", copy: "Whole fruit and ancestral superfoods, nothing fake." },
  { icon: A.iconMove, title: "Fuel for movement", copy: "Built to power the trail, the river, and the gym." },
  { icon: A.iconFresh, title: "Made fresh", copy: "Blended and built the moment you order." },
];

const MARQUEE = ["Fuel for movement", "Eat good vibes", "We unevolve", "Real fruit only", "Açaí · Pitaya · Cacao"];
const IG_TILES = [A.bowlAcai, A.bowlPitaya, A.smoothies, A.bowlNutty];

// Placeholder Spokane details — swap for the real location's info before launch.
const ORDER_URL = "https://www.everbowl.com/";
const CATERING_URL = "https://www.everbowl.com/acai-bowl-catering-near-me";
const PHONE = "(509) 555-0142";
const PHONE_HREF = "tel:+15095550142";
const ADDRESS = "1235 W Summit Pkwy, Spokane, WA 99201";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=1235+W+Summit+Pkwy+Spokane+WA+99201";
const MAPS_EMBED = "https://www.google.com/maps?q=1235+W+Summit+Pkwy+Spokane+WA+99201&output=embed";
const INSTAGRAM_URL = "https://www.instagram.com/everbowl/";

const clamp = (v: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));

function ScrubHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(0);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

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
  }, [reduced]);

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
          src={A.heroVideo}
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
                <h1 className="mt-2 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-eb-bone md:text-7xl">
                  {c.title}
                </h1>
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
            <a href="#catering" className="text-sm font-medium text-eb-muted-light transition-colors hover:text-eb-bone">Catering</a>
            <a href="#location" className="text-sm font-medium text-eb-muted-light transition-colors hover:text-eb-bone">Visit</a>
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

      {/* Menu */}
      <section id="menu" className="scroll-mt-20 bg-eb-bone-soft">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 font-display text-sm font-semibold uppercase tracking-wide text-eb-green-deep">The bowls</p>
              <h2 className="max-w-[16ch] font-display text-4xl font-extrabold leading-none tracking-tight text-eb-ink md:text-6xl">Piled high, blended fresh.</h2>
            </div>
            <p className="max-w-[34ch] text-base leading-relaxed text-eb-muted">Signature bowls, or build your own Whatever Bowl from the base up. Every one is made when you order it.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <article className="eb-card overflow-hidden rounded-3xl bg-eb-bone md:col-span-7">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img src={BOWLS[0].img} alt={BOWLS[0].name} className="h-full w-full object-cover" />
                <span className="absolute left-5 top-5 rounded-full bg-eb-green px-3 py-1 font-display text-sm font-bold text-eb-plum-deep">{BOWLS[0].price}</span>
              </div>
              <div className="p-7">
                <div className="mb-2 flex flex-wrap gap-2">{BOWLS[0].tags.map((t) => <span key={t} className="eb-tag">{t}</span>)}</div>
                <h3 className="font-display text-3xl font-extrabold tracking-tight text-eb-ink">{BOWLS[0].name}</h3>
                <p className="mt-2 max-w-[42ch] text-base leading-relaxed text-eb-muted">{BOWLS[0].ingredients}</p>
              </div>
            </article>
            <article className="flex flex-col justify-between rounded-3xl bg-eb-plum p-7 text-eb-bone md:col-span-5">
              <div>
                <p className="font-display text-sm font-semibold text-eb-green">Build your own</p>
                <h3 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight">The Whatever Bowl</h3>
                <p className="mt-3 text-base leading-relaxed text-eb-muted-light">Pick your bases, load your fruit, stack your superfoods. Your bowl, your rules.</p>
              </div>
              <div className="mt-6 flex items-end gap-6">
                <div><p className="font-display text-2xl font-extrabold text-eb-green">$13.20</p><p className="text-xs text-eb-muted-light">Regular</p></div>
                <div><p className="font-display text-2xl font-extrabold text-eb-green">$16.80</p><p className="text-xs text-eb-muted-light">Large</p></div>
              </div>
            </article>
            {BOWLS.slice(1).map((b, i) => (
              <article key={b.name} className={"eb-card overflow-hidden rounded-3xl bg-eb-bone " + (i === 0 ? "md:col-span-5" : "md:col-span-7")}>
                <div className="flex h-full flex-col sm:flex-row">
                  <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-auto sm:w-1/2">
                    <img src={b.img} alt={b.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-6">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      {b.tags.map((t) => <span key={t} className="eb-tag">{t}</span>)}
                      <span className="font-display text-lg font-extrabold text-eb-green-deep">{b.price}</span>
                    </div>
                    <h3 className="font-display text-2xl font-extrabold tracking-tight text-eb-ink">{b.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-eb-muted">{b.ingredients}</p>
                  </div>
                </div>
              </article>
            ))}
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
              <p className="mt-4 max-w-[38ch] text-base leading-relaxed text-eb-muted-light">Blended thick with real fruit and superfood boosts. Grab one to go and keep the day rolling.</p>
              <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="eb-btn-rewards mt-7">Order online</a>
            </div>
            <div className="overflow-hidden rounded-3xl"><img src={A.smoothies} alt="Everbowl smoothies to go" className="h-full w-full object-cover" /></div>
          </div>
          <div className="mt-12 flex snap-x gap-5 overflow-x-auto pb-4">
            {SMOOTHIES.map((s) => (
              <div key={s.name} className="w-64 shrink-0 snap-start rounded-2xl border border-eb-violet/40 bg-eb-plum-deep/70 p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-xl font-bold text-eb-bone">{s.name}</h3>
                  <span className="font-display text-base font-extrabold text-eb-green">{s.price}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-eb-muted-light">{s.ingredients}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catering */}
      <section id="catering" className="scroll-mt-20 bg-eb-bone">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl"><img src={A.bowlAcai} alt="Everbowl catering spread" className="h-full w-full object-cover" /></div>
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
            <p className="mt-5 text-lg font-semibold text-eb-ink">Kendall Yards</p>
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
                  <li><a href="#order" className="transition-colors hover:text-eb-bone">Rewards</a></li>
                  <li><a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-eb-bone">Order online</a></li>
                  <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-eb-bone">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-2 border-t border-eb-violet/30 pt-6 text-xs text-eb-muted-light">
            <p>© 2026 Everbowl Spokane. Fuel for movement.</p>
            <p>Menu items and pricing reflect Everbowl's national menu. Spokane address, phone, hours, and ordering / catering links are placeholders for this concept site.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
