import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionTitle } from "@/components/site/Section";
import heroImg from "@/assets/hero-temple-dawn.jpg";
import img1 from "@/assets/dim-body.jpg";
import img2 from "@/assets/dim-mind.jpg";
import img3 from "@/assets/dim-intelligence.jpg";
import img4 from "@/assets/dim-soul.jpg";
import img5 from "@/assets/facility-retreat.jpg";
import img6 from "@/assets/about-science-wisdom.jpg";
import img7 from "@/assets/cta-lamp.jpg";
import { X } from "lucide-react";

const photos = [
  { src: heroImg, title: "Sanctuary at Dawn", caption: "The retreat setting at BAHRC, ISKCON Navi Mumbai — sunrise over the sanctuary." },
  { src: img1, title: "Movement Session", caption: "Adaptive yoga cohort — Body dimension. Fatigue, pain and inflammation eased through breath and gentle motion." },
  { src: img2, title: "Mindfulness Practice", caption: "Guided meditation and MBSR — Mind dimension. Cortisol falls, NK-cell activity rises." },
  { src: img3, title: "Contemplative Study", caption: "Journalling and philosophical inquiry — Intelligence dimension. Meaning-making as medicine." },
  { src: img4, title: "Community Vigil", caption: "Candlelit community circle — Soul dimension. Non-denominational, open to every faith." },
  { src: img5, title: "Retreat Pavilion", caption: "Marble pavilion by the lily pond — a quiet space for solitude between sessions." },
  { src: img6, title: "Science Meets Wisdom", caption: "The programme sits at the intersection of modern oncology and ancient healing arts." },
  { src: img7, title: "A Single Flame", caption: "The gesture of care — one hand, one flame, one patient at a time." },
];

const events = [
  { date: "30 May 2026", title: "Inaugural HCHR Retreat", desc: "200+ cancer patients, inaugurated by the Governor of Maharashtra." },
  { date: "Sept 2026", title: "Cohort II — Residential Week", desc: "Second cohort. Applications open. Nutritionist-led menus and expanded art therapy studio." },
  { date: "Q4 2026", title: "AYUSH National Conference", desc: "BAHRC clinical team presenting integrative oncology outcomes." },
  { date: "2027", title: "ACTREC–TMC Study Kick-off", desc: "Phase I observational study begins in partnership with Tata Memorial Centre." },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery & Events — Swastha NavJeevan" },
      { name: "description", content: "Moments from the inaugural retreat and upcoming events at Swastha NavJeevan." },
      { property: "og:title", content: "Gallery & Events — Swastha NavJeevan" },
      { property: "og:description", content: "The day history was made — and what's coming next." },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const close = () => setActive(null);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The day history <span class='gold-underline'>was made.</span>"
        lead="Moments from the inaugural Swastha NavJeevan retreat — and glimpses of the community we are building for every cancer patient."
        image={img4}
        imageAlt="Candles held in cupped hands during the inaugural retreat"
      />

      <Section tone="cream">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Moments"
            title="A residential week, in pictures."
          />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {photos.map((p, i) => (
              <button
                type="button"
                key={p.title}
                onClick={() => setActive(i)}
                className="group relative rounded-xl overflow-hidden aspect-[4/5] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
                aria-label={`View ${p.title}`}
              >
                <img src={p.src} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-left text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  <div className="display-serif text-sm">{p.title}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Upcoming & Past Events"
            title="Where the programme is going next."
          />
          <ol className="mt-10 space-y-3">
            {events.map((e, i) => (
              <li key={e.title} className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-8 rounded-2xl bg-[var(--color-cream)] p-5 md:p-6 lift">
                <div className="flex md:flex-col md:items-start items-baseline gap-3">
                  <div className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-teal)] font-bold">Milestone 0{i + 1}</div>
                  <div className="display-serif text-xl text-[var(--color-navy)]">{e.date}</div>
                </div>
                <div>
                  <h3 className="display-serif text-xl text-[var(--color-navy)]">{e.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={photos[active].title}
          className="fixed inset-0 z-[3000] bg-black/95 flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2"
          >
            <X size={26} />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={photos[active].src} alt={photos[active].title} className="w-full max-h-[78vh] object-contain rounded-lg" />
            <div className="mt-4 text-center text-white">
              <div className="display-serif text-2xl">{photos[active].title}</div>
              <div className="text-sm text-white/70 mt-1 max-w-2xl mx-auto">{photos[active].caption}</div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-white/40 mt-2">
                {String(active + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
