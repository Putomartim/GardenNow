import heroImage from "@/assets/hero-image.jpg";

const contactEmail = "oronaldo\u00E9gay@gmail.com";
const contactMailto = `mailto:${encodeURIComponent(
  contactEmail,
)}?subject=OasisBloom%20Consultation`;

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
];

const values = [
  {
    title: "Botanical Curatorship",
    description:
      "Hand-sourced exotic flora layered with native soils for resilient, mesmerizing tapestries.",
  },
  {
    title: "Atmospheric Storytelling",
    description:
      "Scents, textures, and soundscapes choreographed to transport guests to distant biomes.",
  },
  {
    title: "Sustainable Alchemy",
    description:
      "Regenerative irrigation and solar lighting weave luxury with long-term stewardship.",
  },
];

const steps = [
  {
    number: "01",
    title: "Dream Immersion",
    description:
      "We journey through your inspirations, collecting sensory cues and lifestyle rhythms.",
  },
  {
    number: "02",
    title: "Biophilic Blueprint",
    description:
      "Our designers sketch layered ecosystems, lighting, and water features tailored to your terrain.",
  },
  {
    number: "03",
    title: "Living Installation",
    description:
      "Horticulturists sculpt the landscape, acclimating rare species and calibrating microclimates.",
  },
  {
    number: "04",
    title: "Ongoing Reverie",
    description:
      "Stewardship plans ensure every bloom stays radiant and every experience feels freshly unveiled.",
  },
];

const services = [
  {
    title: "Jungle Atriums",
    description:
      "Dramatic indoor conservatories with misted canopies, uplighting, and curated understories.",
  },
  {
    title: "Desert Nocturne",
    description:
      "Sculptural xeriscapes that glow after dusk, combining volcanic stone and fragrance trails.",
  },
  {
    title: "Rainforest Retreats",
    description:
      "Immersive backyard sanctuaries with water walls, sound therapy, and bioluminescent accents.",
  },
  {
    title: "Floating Courtyards",
    description:
      "Tiered aquatic gardens balancing koi ecosystems with lounging pavilions and moonlit decks.",
  },
];

const projects = [
  {
    name: "Mirage Estate",
    location: "Sedona, AZ",
    highlight:
      "A sculpted canyon oasis featuring basalt walkways and glowstone fire terraces.",
  },
  {
    name: "Celestial Canopy",
    location: "Costa Mesa, CA",
    highlight:
      "An atrium rainforest where hanging orchids dance with programmable aurora lighting.",
  },
  {
    name: "Lagoon Solstice",
    location: "Austin, TX",
    highlight:
      "A lagoon lounge wrapped in tropical palms, misting arcs, and artisanal stone lounges.",
  },
];

const Index = () => (
  <div id="top" className="min-h-screen bg-[#02110A] text-zinc-100">
    <header className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Exotic garden hideaway"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#02110A]/95" />
        <div className="absolute -left-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-emerald-500/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-lime-400/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-6xl flex-col px-6 pb-16 pt-10 sm:px-10">
        <nav className="flex items-center justify-between text-sm uppercase tracking-[0.3em]">
          <a href="#top" className="font-semibold text-lime-200">
            OasisBloom Gardens
          </a>
          <div className="hidden gap-8 text-xs text-zinc-300 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-lime-200"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={contactMailto}
            className="rounded-full border border-lime-300/40 px-5 py-2 text-xs font-semibold text-lime-100 transition hover:bg-lime-300/10"
          >
            Book a Vision Call
          </a>
        </nav>

        <div className="mt-20 grid gap-12 md:grid-cols-[1.5fr_1fr] md:items-end">
          <div className="space-y-8">
            <p className="text-xs uppercase tracking-[0.6em] text-lime-300/80">
              Cultivating the extraordinary
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-lime-50 sm:text-5xl lg:text-6xl">
              Create a living sanctuary where rare botanicals and modern luxury
              entwine.
            </h1>
            <p className="max-w-xl text-base text-zinc-300 sm:text-lg">
              OasisBloom Gardens crafts sensorial landscapes for visionaries who
              crave lush escapes. From rainforest courtyards to desert nocturnes,
              our designers orchestrate environments that awaken every sense.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={contactMailto}
                className="rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-emerald-950 shadow-lg shadow-lime-900/30 transition hover:bg-lime-200"
              >
                Plan Your Oasis
              </a>
              <a
                href="#projects"
                className="rounded-full border border-lime-300/40 px-6 py-3 text-sm font-semibold text-lime-100 transition hover:border-lime-200 hover:text-lime-200"
              >
                Explore Our Worlds
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-lime-200/30 bg-white/5 p-6 backdrop-blur-lg">
            <div className="flex items-end justify-between text-lime-200">
              <p className="text-xs uppercase tracking-[0.4em]">Signature</p>
              <span className="text-xs font-semibold">Since 1998</span>
            </div>
            <p className="mt-6 text-3xl font-semibold text-lime-50">
              500+ bespoke landscapes
            </p>
            <p className="mt-3 text-sm text-zinc-300">
              Private residences, boutique resorts, and wellness sanctuaries
              transformed into evocative journeys.
            </p>
            <hr className="my-6 border-lime-300/20" />
            <p className="text-xs uppercase tracking-[0.3em] text-lime-200/80">
              Featured Collection
            </p>
            <p className="mt-2 text-sm text-zinc-200">
              The Mirage Estate layers basalt pathways, scent gardens, and
              glowstone fire terraces for twilight gatherings.
            </p>
          </div>
        </div>
      </div>
    </header>

    <main className="relative z-10 mx-auto max-w-6xl space-y-20 px-6 py-20 sm:px-10">
      <section id="values" className="space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-lime-300/80">
              Our Essence
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-lime-50 sm:text-4xl">
              We design experiences that echo distant horizons.
            </h2>
          </div>
          <a
            href={contactMailto}
            className="self-start rounded-full border border-lime-300/40 px-5 py-2 text-xs font-semibold text-lime-100 transition hover:border-lime-200 hover:text-lime-200 md:self-end"
          >
            Start a concept session
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="group rounded-3xl border border-lime-300/10 bg-gradient-to-b from-white/5 to-transparent p-8 transition hover:border-lime-200/30 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-lime-200/30 text-sm uppercase tracking-[0.3em] text-lime-100/80">
                {value.title.slice(0, 1)}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-lime-50">
                {value.title}
              </h3>
              <p className="mt-3 text-sm text-zinc-300">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="process"
        className="rounded-3xl border border-lime-300/15 bg-[#03170F] p-10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-lime-300/80">
              How it happens
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-lime-50 sm:text-4xl">
              A four-phase journey for your exotic haven.
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-300">
            Each chapter is orchestrated to keep you immersed—transparent
            collaboration, couture planting palettes, and experiential reveals
            that build anticipation.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="flex flex-col justify-between rounded-3xl border border-lime-300/10 bg-white/5 p-6 text-sm text-zinc-300 transition hover:border-lime-200/30 hover:bg-white/10"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.4em] text-lime-300/90">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-lime-50">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-lime-300/80">
              Signature Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-lime-50 sm:text-4xl">
              Crafted worlds to match your fantasy.
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-300">
            Whether you desire a rainforest hideaway or a desert mirage, our
            multidisciplinary team sculpts living art that evolves with you.
          </p>
        </div>
        <div className="no-scrollbar flex gap-6 overflow-x-auto pb-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="relative aspect-[3/4] w-72 flex-shrink-0 overflow-hidden rounded-3xl border border-lime-200/20 bg-gradient-to-br from-emerald-700/50 via-emerald-900/40 to-black/60 p-6 transition hover:border-lime-200/50 hover:shadow-[0_20px_50px_-25px_rgba(72,187,120,0.6)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,249,157,0.35),transparent_60%)]" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-[0.4em] text-lime-200/90">
                    Oasis
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold text-lime-50">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-lime-100/80">
                    {service.description}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.4em] text-lime-200/60">
                  Enquire
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="testimonials"
        className="rounded-3xl border border-lime-300/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10"
      >
        <p className="text-xs uppercase tracking-[0.5em] text-lime-300/80">
          Reverie
        </p>
        <blockquote className="mt-6 space-y-6 text-lg leading-relaxed text-lime-50">
          <p>
            “OasisBloom choreographed our entire estate into a sequence of
            ethereal moments. The fragrance trail at dusk, the ambient water
            hum, the warmth of the fire terraces—every note feels intentional
            and alive.”
          </p>
          <footer className="text-sm uppercase tracking-[0.4em] text-lime-200/80">
            SERRA DEVIN, FOUNDER · NOVA AERIE WELLNESS
          </footer>
        </blockquote>
      </section>

      <section id="projects" className="space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-lime-300/80">
              Latest Works
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-lime-50 sm:text-4xl">
              Garden narratives unfolding worldwide.
            </h2>
          </div>
          <a
            href={contactMailto}
            className="self-start rounded-full border border-lime-300/40 px-5 py-2 text-xs font-semibold text-lime-100 transition hover:border-lime-200 hover:text-lime-200 md:self-end"
          >
            Request a private tour
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group relative overflow-hidden rounded-3xl border border-lime-200/15 bg-[#03170F]"
            >
              <div className="absolute inset-0">
                <img
                  src={heroImage}
                  alt="Lush garden scene"
                  className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02110A]/95 via-black/40 to-transparent" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-end p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-lime-300/80">
                  {project.location}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-lime-50">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm text-zinc-200">{project.highlight}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-3xl border border-lime-300/15 bg-[#04190F] p-10 text-center">
        <div className="absolute inset-x-0 top-[-40%] h-96 bg-[radial-gradient(circle_at_center,rgba(217,249,157,0.25),transparent_75%)]" />
        <div className="relative space-y-6">
          <p className="text-xs uppercase tracking-[0.5em] text-lime-300/80">
            Begin Your Transformation
          </p>
          <h2 className="text-3xl font-semibold text-lime-50 sm:text-4xl">
            Ready to cultivate an exotic sanctuary in your own world?
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-zinc-300">
            Share your aspirations with our curators and we’ll craft a bespoke
            blueprint that harmonizes architecture, ecology, and artful living.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={contactMailto}
              className="rounded-full bg-lime-300 px-7 py-3 text-sm font-semibold text-emerald-950 shadow-lg shadow-lime-900/30 transition hover:bg-lime-200"
            >
              Schedule a Discovery Call
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="rounded-full border border-lime-300/40 px-7 py-3 text-sm font-semibold text-lime-100 transition hover:border-lime-200 hover:text-lime-200"
            >
              Email {contactEmail}
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer className="relative z-10 border-t border-lime-300/10 bg-[#010906] px-6 py-10 text-xs text-zinc-400 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-lime-200/80">
            OasisBloom Gardens
          </p>
          <p className="mt-2 text-xs text-zinc-400">
            Sensory landscapes crafted for dreamers of the extraordinary.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="uppercase tracking-[0.3em] transition hover:text-lime-200"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="text-right">
          <p className="uppercase tracking-[0.3em] text-lime-200/70">Connect</p>
          <a
            href={contactMailto}
            className="mt-2 block text-xs text-zinc-400 transition hover:text-lime-200"
          >
            {contactEmail}
          </a>
        </div>
      </div>
      <p className="mt-6 text-center text-[10px] uppercase tracking-[0.4em] text-zinc-500">
        © {new Date().getFullYear()} OasisBloom Gardens · All rights reserved
      </p>
    </footer>
  </div>
);

export default Index;
