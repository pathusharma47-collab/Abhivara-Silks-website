import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { SiteNav } from "@/components/SiteNav";
import { Reveal } from "@/components/Reveal";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import craft from "@/assets/craft.jpg";
import editorial from "@/assets/editorial.jpg";
import bridal from "@/assets/collection-bridal.jpg";
import banarasi from "@/assets/collection-banarasi.jpg";
import organza from "@/assets/collection-organza.jpg";
import pochampally from "@/assets/collection-pochampally.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abivara Silks — Crafted Heritage. Woven Elegance." },
      { name: "description", content: "A quiet-luxury house of handwoven Indian silks. Kanchipuram, Banarasi, Gadwal, Organza — curated for the modern woman." },
      { property: "og:title", content: "Abivara Silks" },
      { property: "og:description", content: "Crafted Heritage. Woven Elegance." },
    ],
  }),
  component: Index,
});

const collections = [
  { title: "Bridal Silks", tag: "The Wedding Edit", img: bridal },
  { title: "Banarasi Heritage", tag: "Ivory & Gold", img: banarasi },
  { title: "Organza & Tissue", tag: "Festive Lightness", img: organza },
  { title: "Pochampally Ikat", tag: "Geometry of Craft", img: pochampally },
];

const weaves = [
  "Kanchipuram", "Banarasi", "Gadwal", "Pochampally", "Organza", "Tissue Silk",
];

const heroImages = [hero1, hero2, hero3, hero4];

function Index() {
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <LoadingScreen />
      <SiteNav />
      <main className="bg-background text-foreground">
        {/* HERO */}
        <section className="relative w-full aspect-[3/4] md:aspect-video overflow-hidden bg-[#190D02]">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentHero}
              src={heroImages[currentHero]}
              alt={`Model wearing a handwoven Abivara silk saree ${currentHero + 1}`}
              className="absolute inset-0 h-full w-full object-cover object-center"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -100 || offset.x < -50) {
                  setCurrentHero((prev) => (prev + 1) % heroImages.length);
                } else if (swipe > 100 || offset.x > 50) {
                  setCurrentHero((prev) => (prev - 1 + heroImages.length) % heroImages.length);
                }
              }}
            />
          </AnimatePresence>

          {/* Carousel Pagination Dots */}
          <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center gap-3">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentHero(idx)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${idx === currentHero ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </section>

        {/* BRAND STORY */}
        <section id="story" className="px-4 py-16 md:px-12 md:py-40">
          <div className="mx-auto grid max-w-[1280px] gap-16 md:grid-cols-12 md:gap-20">
            <Reveal className="md:col-span-5">
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <img src={craft} alt="Artisan weaving silk" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </Reveal>
            <div className="md:col-span-6 md:col-start-7 md:pt-16">
              <Reveal>
                <p className="eyebrow">Our Atelier</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-8 text-2xl sm:text-3xl leading-[1.1] md:text-6xl">
                  Every thread<br />carries a legacy.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-10 max-w-md text-base leading-[1.9] text-muted-foreground">
                  Abivara celebrates the timeless artistry of Indian silk weaving — slow,
                  ancestral, and exacting. Each piece is composed in our atelier with
                  master weavers from Kanchipuram, Varanasi, and the Deccan, then
                  curated for the woman who chooses presence over noise.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <a href="#story" className="mt-10 inline-block text-[11px] uppercase tracking-[0.32em] link-underline">
                  The Abivara Story
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FEATURED COLLECTIONS */}
        <section id="collections" className="border-t border-border bg-ivory px-4 py-16 md:px-12 md:py-36">
          <div className="mx-auto max-w-[1480px]">
            <Reveal>
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="eyebrow">The Edits</p>
                  <h2 className="mt-6 text-2xl sm:text-3xl md:text-6xl">Featured Collections</h2>
                </div>
                <a href="#collections" className="hidden text-[11px] uppercase tracking-[0.32em] link-underline md:inline-block">
                  View All
                </a>
              </div>
            </Reveal>

            <div className="mt-16 grid gap-x-6 gap-y-16 md:grid-cols-12">
              {collections.map((c, i) => (
                <Reveal
                  key={c.title}
                  delay={i * 0.05}
                  className={
                    i === 0
                      ? "md:col-span-7"
                      : i === 1
                        ? "md:col-span-5 md:pt-24"
                        : i === 2
                          ? "md:col-span-5"
                          : "md:col-span-7 md:pt-16"
                  }
                >
                  <a href="#" className="group block hover-zoom">
                    <div className="aspect-[4/5] overflow-hidden bg-secondary">
                      <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <div className="mt-6 flex items-end justify-between">
                      <div>
                        <p className="eyebrow">{c.tag}</p>
                        <h3 className="mt-3 text-2xl md:text-3xl">{c.title}</h3>
                      </div>
                      <span className="text-[11px] uppercase tracking-[0.32em] text-bronze transition-transform duration-500 group-hover:translate-x-2">
                        Discover →
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SIGNATURE WEAVES — horizontal scroll */}
        <section id="weaves" className="py-16 md:py-36">
          <div className="px-6 md:px-12">
            <Reveal>
              <p className="eyebrow">Signature Weaves</p>
              <h2 className="mt-6 max-w-3xl text-2xl sm:text-3xl md:text-6xl">
                Six houses of cloth, one quiet language.
              </h2>
            </Reveal>
          </div>
          <div className="mt-16 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory">
            <ul className="flex min-w-max gap-6 px-6 md:px-12">
              {weaves.map((w, i) => (
                <li key={w} className="w-[65vw] max-w-[320px] shrink-0 md:w-[28vw] snap-center">
                  <a href="#" className="block hover-zoom">
                    <div className="aspect-[3/4] overflow-hidden bg-secondary">
                      <img
                        src={[banarasi, bridal, organza, pochampally, banarasi, bridal][i]}
                        alt={w}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="mt-5 flex items-baseline justify-between">
                      <h3 className="text-2xl">{w}</h3>
                      <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">0{i + 1}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* EDITORIAL CAMPAIGN */}
        <section className="relative h-[65vh] md:h-[100svh] w-full overflow-hidden">
          <img src={editorial} alt="Abivara editorial campaign" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/15" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.4em] text-ivory">The Spring Edit · MMXXVI</p>
            </Reveal>
            <Reveal delay={0.15}>
              <h2 className="mt-8 text-[12vw] leading-[0.95] text-ivory md:text-[8vw]" style={{ fontWeight: 300 }}>
                The Art of <em className="not-italic">Celebration</em>
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <a href="#" className="mt-12 inline-block border border-ivory/80 px-8 py-3.5 text-[11px] uppercase tracking-[0.32em] text-ivory transition-all duration-500 hover:bg-ivory hover:text-foreground">
                View Campaign
              </a>
            </Reveal>
          </div>
        </section>

        {/* CRAFTSMANSHIP */}
        <section className="bg-ivory px-4 py-16 md:px-12 md:py-40">
          <div className="mx-auto grid max-w-[1280px] items-center gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <Reveal><p className="eyebrow">The Hands Behind</p></Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-8 text-3xl leading-[1.1] md:text-5xl">
                  Pure silk.<br />Pure mulberry zari.<br />Pure patience.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-10 text-base leading-[1.9] text-muted-foreground">
                  A single Abivara saree takes between 21 and 90 days at the loom.
                  We work only with weaving clusters who hold the GI mark, paying
                  fairly for time and skill — because heritage should not be hurried.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-10">
                  <div>
                    <dt className="eyebrow">Looms</dt>
                    <dd className="mt-3 font-serif text-3xl text-foreground">42</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Weavers</dt>
                    <dd className="mt-3 font-serif text-3xl text-foreground">128</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Clusters</dt>
                    <dd className="mt-3 font-serif text-3xl text-foreground">06</dd>
                  </div>
                </dl>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <img src={craft} alt="Silk threads on the handloom" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="border-t border-border px-4 py-16 md:px-12 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow">In Her Words</p>
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote className="mt-10 font-serif text-2xl leading-[1.3] text-foreground md:text-5xl">
                “There is a stillness to an Abivara saree —
                a sense that someone has waited a long time
                to give you something true.”
              </blockquote>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-10 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
                Ananya R. · Bengaluru
              </p>
            </Reveal>
          </div>
        </section>

        {/* JOURNAL / NEWSLETTER */}
        <section id="journal" className="bg-ivory px-4 py-16 md:px-12 md:py-32">
          <div className="mx-auto grid max-w-[1280px] gap-16 md:grid-cols-2 md:gap-24">
            <Reveal>
              <p className="eyebrow">The Circle</p>
              <h2 className="mt-6 text-3xl leading-[1.1] md:text-5xl">
                Join the<br />Abivara Circle.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-[1.9] text-muted-foreground">
                Quiet dispatches on new collections, atelier stories, and private
                previews — sent twice a season.
              </p>
              <form className="mt-10 flex items-center gap-4 border-b border-foreground/60 pb-3">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="flex-1 bg-transparent text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
                <button type="submit" className="text-[11px] uppercase tracking-[0.32em] text-bronze-deep link-underline">
                  Subscribe
                </button>
              </form>
            </Reveal>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-border bg-background px-6 py-16 md:px-12">
          <div className="mx-auto max-w-[1480px]">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
              <div className="md:col-span-2">
                <p className="font-serif text-2xl text-foreground">Abivara <span className="text-bronze">Silks</span></p>
                <p className="mt-4 max-w-xs text-sm leading-[1.8] text-muted-foreground">
                  A house of handwoven Indian silks. Crafted in India, worn the world over.
                </p>
              </div>
              {[
                { h: "Collections", items: ["Bridal", "Banarasi", "Kanchipuram", "Organza"] },
                { h: "House", items: ["About", "Journal", "Stores", "Contact"] },
                { h: "Care", items: ["Shipping", "Returns", "Silk Care", "FAQ"] },
              ].map((col) => (
                <div key={col.h}>
                  <p className="eyebrow">{col.h}</p>
                  <ul className="mt-6 space-y-3 text-sm text-foreground">
                    {col.items.map((i) => (
                      <li key={i}><a href="#" className="link-underline">{i}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-[11px] uppercase tracking-[0.28em] text-muted-foreground md:flex-row md:items-center">
              <p>© MMXXVI Abivara Silks. All rights reserved.</p>
              <p>Crafted in India · Worn Worldwide</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
