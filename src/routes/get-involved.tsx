import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionTitle } from "@/components/site/Section";
import ctaLamp from "@/assets/cta-lamp.jpg";
import { HeartHandshake, FlaskConical, HandCoins, Mail, Phone, MapPin } from "lucide-react";

type Audience = "patients" | "partners" | "research";

const panels: Record<Audience, {
  icon: typeof HeartHandshake;
  title: string;
  lead: string;
  bullets: string[];
  cta: string;
}> = {
  patients: {
    icon: HeartHandshake,
    title: "For Patients & Families",
    lead: "The programme is fully free, residential and open to every cancer patient — irrespective of religion, caste, gender or income. A short conversation is all it takes to begin.",
    bullets: [
      "Fully funded — accommodation, meals, therapies, follow-up",
      "Single residential week, small cohorts",
      "Family accommodation available for one caregiver",
      "Non-pharmacological — safe alongside chemotherapy, radiation and surgery",
      "Continuing peer support after you return home",
    ],
    cta: "Request a call from our care team",
  },
  partners: {
    icon: HandCoins,
    title: "For CSR & Philanthropic Partners",
    lead: "Fully CSR-eligible under Schedule VII (health) of the Companies Act. Every rupee funds free care — with transparent outcome reporting cohort-by-cohort.",
    bullets: [
      "CSR Schedule VII (i) — promoting health care",
      "Named cohort sponsorship and co-branding options",
      "Impact dashboard: patients served, QoL deltas, retention",
      "Site visits, cohort observation and outcome audits welcome",
      "Multi-year partnership tiers available",
    ],
    cta: "Request the partnership deck",
  },
  research: {
    icon: FlaskConical,
    title: "For Clinicians & Researchers",
    lead: "Swastha NavJeevan is a living clinical research programme. We welcome oncologists, integrative practitioners and academic collaborators.",
    bullets: [
      "ACTREC–Tata Memorial Centre collaboration",
      "IRB-reviewed protocols · consented outcome data",
      "Standardised PROs (FACT-G, MDASI, HADS)",
      "Biomarker sub-study (cortisol, NK-cell activity)",
      "Open-access publications and open-source protocol",
    ],
    cta: "Request the scientific framework",
  },
};

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Swastha NavJeevan" },
      {
        name: "description",
        content:
          "Whether you are a patient, a partner or a researcher — start a conversation with the Swastha NavJeevan team. The programme is free and open to all.",
      },
      { property: "og:title", content: "Get Involved — Swastha NavJeevan" },
      { property: "og:description", content: "Book a free consultation, partner with us, or join the research programme." },
      { property: "og:image", content: ctaLamp },
      { property: "og:url", content: "/get-involved" },
    ],
    links: [{ rel: "canonical", href: "/get-involved" }],
  }),
  component: GetInvolved,
});

function GetInvolved() {
  const [tab, setTab] = useState<Audience>("patients");
  const p = panels[tab];
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Start a conversation. <br/><span class='gold-underline'>We'll take it from here.</span>"
        lead="One programme, three ways to engage — as a patient, a partner or a researcher. Every path starts with a simple, no-obligation conversation."
        image={ctaLamp}
        imageAlt="Two hands cradling a lit candle among white flower petals"
      />

      <Section tone="cream">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 p-1.5 bg-white rounded-full w-fit shadow-[var(--shadow-soft)]">
            {(Object.keys(panels) as Audience[]).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setTab(k)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  tab === k
                    ? "bg-[var(--color-navy)] text-white shadow-[var(--shadow-soft)]"
                    : "text-muted-foreground hover:text-[var(--color-navy)]"
                }`}
              >
                {panels[k].title.replace("For ", "")}
              </button>
            ))}
          </div>

          <div className="mt-10 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
            <div>
              <div className="w-14 h-14 rounded-xl bg-[var(--color-gold)]/15 text-[var(--color-gold)] flex items-center justify-center mb-5">
                <p.icon size={26} />
              </div>
              <h2 className="display-serif text-3xl sm:text-4xl text-[var(--color-navy)] leading-tight">{p.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.lead}</p>
              <ul className="mt-6 space-y-2.5">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-foreground/85">
                    <span className="text-[var(--color-gold)] mt-1">◆</span>{b}
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 sm:p-8 shadow-[var(--shadow-soft)]">
              <div className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-teal)] font-bold">{p.cta}</div>
              <h3 className="display-serif text-2xl text-[var(--color-navy)] mt-1">No forms. No fees. No obligation.</h3>
              {submitted ? (
                <div className="mt-6 rounded-xl bg-[var(--color-teal)]/10 border border-[var(--color-teal)]/30 p-5 text-sm text-[var(--color-teal)]">
                  Thank you. A member of our team will be in touch within 24 hours. If it is urgent,
                  please call the patient support line below.
                </div>
              ) : (
                <div className="mt-5 grid gap-3">
                  <label className="grid gap-1 text-sm">
                    <span className="text-muted-foreground">Your name</span>
                    <input required className="rounded-lg border border-input bg-white px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]" />
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="grid gap-1 text-sm">
                      <span className="text-muted-foreground">Email</span>
                      <input type="email" required className="rounded-lg border border-input bg-white px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]" />
                    </label>
                    <label className="grid gap-1 text-sm">
                      <span className="text-muted-foreground">Phone</span>
                      <input type="tel" className="rounded-lg border border-input bg-white px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]" />
                    </label>
                  </div>
                  <label className="grid gap-1 text-sm">
                    <span className="text-muted-foreground">Anything you'd like us to know</span>
                    <textarea rows={4} className="rounded-lg border border-input bg-white px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]" />
                  </label>
                  <button type="submit" className="btn-gold btn-gold-hover justify-center mt-2">Send</button>
                  <p className="text-[11px] text-muted-foreground text-center">
                    Your details are used only to contact you about Swastha NavJeevan. Never shared.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </Section>

      <Section tone="gradient-navy">
        <div className="container-wide grid md:grid-cols-3 gap-6 relative z-10">
          {[
            { icon: Mail, title: "Email", val: "care@swasthanavjeevan.org", href: "mailto:care@swasthanavjeevan.org" },
            { icon: Phone, title: "Patient support", val: "+91 22 0000 0000", href: "tel:+912200000000" },
            { icon: MapPin, title: "Visit", val: "BAHRC, ISKCON Navi Mumbai, Kharghar", href: "https://maps.google.com/?q=ISKCON+Navi+Mumbai" },
          ].map(({ icon: I, title, val, href }) => (
            <a key={title} href={href} className="group rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-gold)]/20 text-[var(--color-gold-bright)] flex items-center justify-center">
                <I size={22} />
              </div>
              <div className="mt-4 text-[11px] tracking-[0.2em] uppercase text-[var(--color-gold-bright)] font-bold">{title}</div>
              <div className="display-serif text-xl mt-1 text-white group-hover:underline underline-offset-4">{val}</div>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
