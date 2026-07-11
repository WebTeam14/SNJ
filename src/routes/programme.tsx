import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionTitle } from "@/components/site/Section";
import { FourDShowcase, dimensions } from "@/components/site/FourDShowcase";
import facilityImg from "@/assets/facility-retreat.jpg";
import dimBody from "@/assets/dim-body.jpg";

const artTherapies = [
  { icon: "🎵", title: "Sound & Music Therapy", desc: "Rhythm, chanting and instrumental music reduce anxiety, pain and treatment fatigue — Cochrane 2016." },
  { icon: "✍️", title: "Expressive Writing", desc: "Structured writing sessions lift immune markers and lower disease severity — JAMA 1999." },
  { icon: "🎨", title: "Visual Art & Craft", desc: "Painting, clay and mandala work reduce nausea and pain during chemotherapy — Palliat Med RCT." },
  { icon: "🌿", title: "Nature Immersion", desc: "Structured time in gardens and quiet outdoor spaces reduces prefrontal rumination — Stanford / PNAS 2015." },
  { icon: "🧘", title: "Movement & Dance", desc: "Adaptive movement helps restore body confidence and mobility during and after treatment." },
  { icon: "💬", title: "Peer Circles", desc: "Small group dialogue with fellow patients — proven to reduce isolation and existential distress." },
];

export const Route = createFileRoute("/programme")({
  head: () => ({
    meta: [
      { title: "The 4D Programme — Swastha NavJeevan" },
      {
        name: "description",
        content:
          "Body, Mind, Intelligence, Soul — the four-dimensional integrative oncology programme, delivered in a single residential week. Free for every cancer patient.",
      },
      { property: "og:title", content: "The 4D Programme — Swastha NavJeevan" },
      { property: "og:description", content: "Four sessions. One complete healing. Explore the science-backed programme." },
      { property: "og:image", content: dimBody },
      { property: "og:url", content: "/programme" },
    ],
    links: [{ rel: "canonical", href: "/programme" }],
  }),
  component: Programme,
});

function Programme() {
  return (
    <>
      <PageHero
        eyebrow="The 4D Programme"
        title="Four sessions. <br/><span class='gold-underline'>One complete healing.</span>"
        lead="A single residential week that addresses every dimension of what cancer takes from a person — Body, Mind, Intelligence, Soul. Grounded in RCT-level evidence. Open to patients of every faith and none."
        image={dimBody}
        imageAlt="A silhouette practicing yoga at dawn — symbolising the Body dimension"
      />

      <Section tone="white">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Live the Framework"
            title="Explore each dimension."
            lead="Auto-rotating through the four sessions — or tap any dimension to focus."
          />
          <div className="mt-12">
            <FourDShowcase />
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Art-Based Therapies"
            title="The world's most under-used cancer medicine."
            lead="Every therapy below is a peer-reviewed adjunct to standard oncology care — non-pharmacological, side-effect free, and woven into the retreat week."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {artTherapies.map((a) => (
              <div key={a.title} className="rounded-2xl bg-white p-6 lift">
                <div className="text-3xl">{a.icon}</div>
                <h3 className="display-serif text-xl text-[var(--color-navy)] mt-3">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <img
            src={facilityImg}
            alt="Retreat garden with marble pavilion and lily pond"
            className="h-72 lg:h-full w-full object-cover"
            loading="lazy"
          />
          <div className="bg-[var(--color-navy-deep)] text-white p-10 lg:p-16 flex items-center">
            <div className="max-w-lg">
              <div className="eyebrow eyebrow-onDark mb-4">World-class facilities</div>
              <h2 className="display-serif text-3xl sm:text-4xl leading-tight">
                Sacred surroundings. <span className="gold-underline">Clinical rigour.</span>
              </h2>
              <p className="mt-5 text-white/75 leading-relaxed">
                Residential accommodation, sattvic vegetarian meals, gardens for quiet time, dedicated
                therapy rooms and a clinical team on call. Everything a cancer patient needs to arrive,
                exhale and heal — for a week.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                {[
                  "Private and shared residential rooms",
                  "Nutritionist-supervised sattvic meals",
                  "24/7 nursing and clinical support",
                  "Quiet gardens, therapy pavilions, art studios",
                  "Family accommodation available",
                ].map((x) => (
                  <li key={x} className="flex gap-3 items-start">
                    <span className="text-[var(--color-gold-bright)] mt-1">◆</span>{x}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/get-involved" className="btn-gold btn-gold-hover">Ask about the next cohort →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
