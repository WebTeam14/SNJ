import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionTitle } from "@/components/site/Section";
import logo from "@/assets/logo.PNG";
import ctaLamp from "@/assets/cta-lamp.jpg";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Swastha NavJeevan | Holistic Cancer Healing" },
    ],
  }),
  component: About,
});

const institutions = [
  {
    name: "ISKCON Navi Mumbai",
    role: "Spiritual Home & Host",
    desc: "A spiritual home of bhakti and community — anchoring the SNJ programme in compassion, dharma and service. The temple campus has housed healing gatherings for decades.",
  },
  {
    name: "BVCE / BCVE",
    role: "Value Education & Human Development",
    desc: "Delivers the human quotient framework (Body-Mind-Intelligence-Soul) through psychological rehabilitation, emotional resilience, and lifestyle transformation.",
  },
  {
    name: "BAHRC",
    role: "Research & Retreat Infrastructure",
    desc: "Bhakti Vedanta Ashram & Holistic Research Centre — the research and retreat infrastructure that supports SNJ field work. BAHRC measures outcomes and maintains protocols.",
  },
  {
    name: "Swaayu Cancer Care Centre",
    role: "Integrative Ayurvedic Partner",
    desc: "Clinical Ayurveda partner — integrating evidence-based ayurvedic care with the modern integrative oncology framework.",
  },
];

function About() {
  return (
    <>
      {/* Header Logo & Title */}
      <section className="bg-[#0A1428] pt-32 pb-20">
        <div className="container-wide text-center">
          <div className="flex justify-center mb-8">
            <img src={logo} alt="Swastha NavJeevan" className="h-40 w-auto" />
          </div>
          <h1 className="text-6xl font-serif text-white">Swastha NavJeevan</h1>
          <p className="text-xl text-white/80 mt-3">"New Life in Health" — A Holistic Cancer Wellness Initiative</p>
          <p className="text-sm text-white/60 mt-2">Body • Mind • Intelligence • Soul — Science, AYUSH & Vedic Wisdom, Unified</p>
        </div>
      </section>

     {/* Mission & Vision */}
<Section tone="white">
  <div className="container-wide max-w-[1700px] mx-auto px-6 lg:px-12">

    {/* Heading */}
    <div className="text-center mb-20">
      <p className="uppercase tracking-[0.4em] text-teal-600 font-semibold text-sm">
        OUR PURPOSE
      </p>

      <h2 className="mt-5 text-5xl md:text-6xl font-serif text-[#0F1E3A]">
        Mission & Vision
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-600">
        Swastha NavJeevan integrates scientific research, Ayurveda, spirituality,
        psychology and compassionate care into one unified healing journey.
      </p>
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">

      {/* Mission Card */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        className="
        relative
        overflow-hidden
        rounded-[36px]
        p-14
        min-h-[500px]
        bg-gradient-to-br
        from-[#13254A]
        via-[#0F1E3A]
        to-[#08111F]
        text-white
        shadow-[0_30px_80px_rgba(0,0,0,.25)]
        border border-white/10
        "
      >

        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">

          <div className="flex items-center gap-5 mb-10">

            <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center text-3xl">
              🎯
            </div>

            <div>

              <div className="uppercase tracking-[0.3em] text-orange-300 text-sm">
                Our Mission
              </div>

              <h3 className="font-serif text-4xl mt-2">
                Advancing Holistic Healing
              </h3>

            </div>

          </div>

          <p className="text-xl leading-10 text-white/90">
            To systematically advance the science of holistic healing to society
            at large, and educate every individual in the integrated wisdom of
            <span className="text-amber-300 font-semibold">
              {" "}Body, Mind, Intelligence and Consciousness
            </span>,
            addressing the root imbalance behind disease while inspiring
            lasting wellness, resilience and compassionate living across the world.
          </p>

        </div>

      </motion.div>

      {/* Vision Card */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6, delay: .15 }}
        viewport={{ once: true }}
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        className="
        relative
        overflow-hidden
        rounded-[36px]
        p-14
        min-h-[500px]
        bg-gradient-to-br
        from-[#13254A]
        via-[#0F1E3A]
        to-[#08111F]
        text-white
        shadow-[0_30px_80px_rgba(0,0,0,.25)]
        border border-white/10
        "
      >

        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">

          <div className="flex items-center gap-5 mb-10">

            <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center text-3xl">
              ✨
            </div>

            <div>

              <div className="uppercase tracking-[0.3em] text-yellow-300 text-sm">
                Our Vision
              </div>

              <h3 className="font-serif text-4xl mt-2">
                A World Beyond Survival
              </h3>

            </div>

          </div>

          <p className="text-xl leading-10 text-white/90">
            To become the world's leading organisation for holistic healing,
            transforming the lives of
            <span className="text-amber-300 font-semibold">
              {" "}cancer patients, caregivers, families and survivors
            </span>
            through a comprehensive model of scientific care, Ayurveda,
            emotional resilience, spiritual wellbeing and lifelong wellness.
          </p>

        </div>

      </motion.div>

    </div>

  </div>
</Section>

      {/* Four Institutions */}
      <Section tone="cream">
        <div className="container-wide">
          <SectionTitle
            eyebrow="Four Institutions, One Intention"
            title="Built on devotion.<br/>Bound by science."
            lead=""
          />

          <div className="mt-20 space-y-24">
            {institutions.map((inst, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="grid lg:grid-cols-12 gap-12 items-center"
              >
                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="text-teal-600 uppercase text-sm tracking-widest mb-2">{inst.role}</div>
                  <h3 className="text-4xl font-serif mb-6">{inst.name}</h3>
                  <p className="text-lg text-muted-foreground">{inst.desc}</p>
                </div>
                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img src={ctaLamp} alt={inst.name} className="rounded-3xl shadow-xl w-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Origin Story */}
      <Section tone="white">
        <div className="container-wide max-w-3xl">
          <SectionTitle
            eyebrow="The Origin Story"
            title="It began with one listening."
            lead="A clinician, a monk, an oncologist and a teacher sat together with families navigating cancer. They listened beyond the protocols — to fear, to faith, to the small wishes of ordinary life."
          />
          <p className="mt-8 text-lg text-muted-foreground">
            The Holistic Cancer Healing Retreat is the answer they have been shaping ever since — slowly, carefully, with four institutions choosing to walk the same ground, in the same direction, without hurry.
          </p>
        </div>
      </Section>

      {/* Final CTA */}
      <Section tone="gradient-navy">
        <div className="container-narrow text-center">
          <h2 className="text-4xl font-serif text-white mb-4">Healing is not just the killing of cancer — it is treating the whole cancer patient.</h2>
          <p className="text-white/80 text-lg">Every patient, every faith, completely free of charge.</p>
          <Link to="/get-involved" className="btn-gold btn-gold-hover mt-10">Begin Journey</Link>
        </div>
      </Section>
    </>
  );
}