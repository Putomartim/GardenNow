import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import {
  contactEmail,
  contactPhone,
  contactPhoneCompact,
  getFlagSrc,
  type LanguageKey,
} from "@/data/site-content";
import { circuitPagesContent } from "@/data/circuit-pages";
import { useLanguagePreference } from "@/hooks/use-language-preference";

const languageLabels: Record<LanguageKey, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
  fr: "Français",
};

const uiTexts: Record<
  LanguageKey,
  {
    homeLabel: string;
    backLabel: string;
    quickInfoTitle: string;
    highlightsTitle: string;
    experienceTitle: string;
    briefingTitle: string;
    galleryTitle: string;
    contactHeading: string;
    contactPhoneLabel: string;
    contactEmailLabel: string;
    backToCircuits: string;
  }
> = {
  pt: {
    homeLabel: "Início",
    backLabel: "Circuitos",
    quickInfoTitle: "Informação rápida",
    highlightsTitle: "Porque vais gostar",
    experienceTitle: "O que acontece em cada fase",
    briefingTitle: "Antes de subir",
    galleryTitle: "Galeria do circuito",
    contactHeading: "Precisas de ajuda?",
    contactPhoneLabel: "Fala connosco",
    contactEmailLabel: "Envia um e-mail",
    backToCircuits: "Ver todos os circuitos",
  },
  en: {
    homeLabel: "Home",
    backLabel: "Circuits",
    quickInfoTitle: "Quick facts",
    highlightsTitle: "Why you'll love it",
    experienceTitle: "Experience flow",
    briefingTitle: "Before you climb",
    galleryTitle: "Circuit gallery",
    contactHeading: "Need a hand?",
    contactPhoneLabel: "Call us",
    contactEmailLabel: "Send an email",
    backToCircuits: "View all circuits",
  },
  es: {
    homeLabel: "Inicio",
    backLabel: "Circuitos",
    quickInfoTitle: "Datos rápidos",
    highlightsTitle: "Por qué te encantará",
    experienceTitle: "Flujo de la experiencia",
    briefingTitle: "Antes de subir",
    galleryTitle: "Galería del circuito",
    contactHeading: "¿Necesitas ayuda?",
    contactPhoneLabel: "Llámanos",
    contactEmailLabel: "Escríbenos",
    backToCircuits: "Ver todos los circuitos",
  },
  fr: {
    homeLabel: "Accueil",
    backLabel: "Parcours",
    quickInfoTitle: "Infos rapides",
    highlightsTitle: "Pourquoi vous allez adorer",
    experienceTitle: "Déroulé de l'expérience",
    briefingTitle: "Avant de grimper",
    galleryTitle: "Galerie du parcours",
    contactHeading: "Besoin d'aide ?",
    contactPhoneLabel: "Appelez-nous",
    contactEmailLabel: "Envoyez un e-mail",
    backToCircuits: "Voir tous les parcours",
  },
};

const CircuitDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, setLanguage } = useLanguagePreference();
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const circuit = circuitPagesContent[language].find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  useEffect(() => {
    setLanguageMenuOpen(false);
  }, [language]);

  if (!slug) {
    return <Navigate to="/#circuitos" replace />;
  }

  if (!circuit) {
    return <Navigate to="/#circuitos" replace />;
  }

  const ui = uiTexts[language];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="relative overflow-hidden rounded-b-[4rem] border-b border-border bg-background">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `${circuit.gradient}, url(${circuit.hero.backgroundImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute inset-0 bg-black/35 mix-blend-multiply" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-16 pt-8 sm:px-10">
          <nav className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.35em] text-white">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-3">
                <img
                  src="http://funparquesaojoao.pt/imagens/logo.png"
                  alt="FunPark São João"
                  className="h-12 w-auto drop-shadow-lg"
                  loading="lazy"
                />
                <span className="hidden font-semibold text-white sm:inline">
                  FunParque S. João
                </span>
              </Link>
              <div className="flex items-center gap-3 text-[0.6rem] text-white/80">
                <Link
                  to="/"
                  className="rounded-full bg-[rgba(73,49,24,0.95)] px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-white shadow-[0_6px_12px_-8px_rgba(0,0,0,0.6)] transition hover:-translate-y-0.5 hover:bg-[rgba(73,49,24,0.9)]"
                >
                  {ui.homeLabel}
                </Link>
                <Link
                  to="/#circuitos"
                  className="rounded-full bg-[rgba(73,49,24,0.7)] px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 hover:bg-[rgba(73,49,24,0.6)]"
                >
                  {ui.backLabel}
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[0.6rem] text-white/80">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLanguageMenuOpen((current) => !current)}
                  className="inline-flex items-center gap-2 rounded-full bg-[rgba(73,49,24,0.95)] px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-white shadow-[0_6px_12px_-8px_rgba(0,0,0,0.6)] transition hover:-translate-y-0.5 hover:bg-[rgba(73,49,24,0.9)]"
                  aria-expanded={languageMenuOpen}
                >
                  <img
                    src={getFlagSrc(language)}
                    alt={languageLabels[language]}
                    className="h-4 w-6 rounded-[2px] object-cover"
                    loading="lazy"
                  />
                  <span>{languageLabels[language]}</span>
                  <span className="text-[0.45rem]">{languageMenuOpen ? "▲" : "▼"}</span>
                </button>
                {languageMenuOpen && (
                  <div className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-48 rounded-2xl border border-primary/30 bg-secondary/95 p-3 text-left shadow-[0_15px_40px_-20px_rgba(0,0,0,0.6)]">
                    <ul className="space-y-1 text-sm">
                      {(Object.keys(circuitPagesContent) as LanguageKey[]).map((key) => (
                        <li key={key}>
                          <button
                            type="button"
                            onClick={() => {
                              setLanguage(key);
                              setLanguageMenuOpen(false);
                            }}
                            className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-secondary-foreground transition hover:bg-primary hover:text-primary-foreground"
                          >
                            <img
                              src={getFlagSrc(key)}
                              alt={languageLabels[key]}
                              className="h-4 w-6 rounded-[2px] object-cover"
                              loading="lazy"
                            />
                            <span>{languageLabels[key]}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </nav>

          <div className="grid gap-12 text-white lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.45em] text-white/90">
                {circuit.hero.badge}
              </span>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                {circuit.hero.title}
              </h1>
              <p className="max-w-xl text-sm text-white/85 sm:text-base">
                {circuit.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                {circuit.hero.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-full bg-white/15 px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-white shadow-[0_8px_24px_-16px_rgba(0,0,0,0.5)]"
                  >
                    <span className="block text-white/60">{stat.label}</span>
                    <span className="text-[0.7rem] text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 text-[0.7rem] uppercase tracking-[0.25em]">
                <a
                  href={circuit.cta.primaryHref}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-primary-foreground shadow-[0_20px_60px_-50px_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5 hover:bg-primary/90"
                >
                  {circuit.cta.primaryLabel}
                </a>
                <a
                  href={`tel:${contactPhoneCompact}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-white transition hover:-translate-y-0.5 hover:border-white"
                >
                  {ui.contactPhoneLabel}: {contactPhone}
                </a>
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-white transition hover:-translate-y-0.5 hover:border-white"
                >
                  {ui.contactEmailLabel}: {contactEmail}
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-[2.5rem] bg-black/20 blur-3xl" />
              <img
                src={circuit.hero.backgroundImage}
                alt={circuit.hero.title}
                className="relative z-10 w-full rounded-[2.5rem] border border-white/10 object-cover shadow-[0_45px_120px_-70px_rgba(0,0,0,0.75)]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 sm:px-10">
        <section className="grid gap-10 rounded-[3rem] border border-border bg-card/90 p-8 shadow-[0_35px_100px_-70px_rgba(45,30,15,0.5)] lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
          <div className="space-y-6 text-sm sm:text-base">
            <h2 className="text-xl font-semibold text-primary sm:text-2xl">{circuit.overview.title}</h2>
            {circuit.overview.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-foreground/80">
                {paragraph}
              </p>
            ))}
            {circuit.overview.note && (
              <div className="rounded-2xl border border-primary/30 bg-primary/10 p-4 text-xs uppercase tracking-[0.3em] text-primary">
                {circuit.overview.note}
              </div>
            )}
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary sm:text-2xl">
              {ui.quickInfoTitle}
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {circuit.quickInfo.map((item) => (
                <li
                  key={item.label}
                  className="rounded-2xl border border-primary/30 bg-muted/60 p-4 text-sm text-foreground/80 shadow-[0_25px_80px_-60px_rgba(45,30,15,0.45)]"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-primary/90">
                    {item.label}
                  </p>
                  <p className="mt-2 text-base font-semibold text-foreground">
                    {item.value}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-[3rem] border border-primary/30 bg-primary/10 p-8 shadow-[0_35px_100px_-70px_rgba(45,30,15,0.5)] sm:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                {ui.highlightsTitle}
              </h2>
            </div>
            <p className="max-w-2xl text-sm text-primary/90">
              {circuit.experience.description}
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {circuit.highlights.map((highlight) => (
              <article
                key={highlight.title}
                className="rounded-3xl border border-[#564124] bg-[#342112] p-6 text-sm text-[#f7f1e4] shadow-[0_25px_80px_-60px_rgba(45,30,15,0.45)]"
              >
                <h3 className="text-base font-semibold text-[#b5ff6b]">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-sm text-[#f7f1e4]/90">{highlight.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-[3rem] border border-border bg-card/90 p-8 shadow-[0_35px_100px_-70px_rgba(45,30,15,0.5)] lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
          <div>
            <h2 className="text-xl font-semibold text-primary sm:text-2xl">
              {ui.experienceTitle}
            </h2>
            <div className="mt-6 space-y-6">
              {circuit.experience.steps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-3xl border border-primary/20 bg-muted/60 p-5 text-sm text-foreground/85 shadow-[0_25px_80px_-60px_rgba(45,30,15,0.45)]"
                >
                  <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-primary-foreground">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                {ui.briefingTitle}
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-foreground/80">
                {circuit.briefing.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-3 w-3 shrink-0 translate-y-1 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-primary/20 bg-primary/10 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                {ui.contactHeading}
              </h3>
              <div className="mt-4 space-y-3 text-sm text-primary/90">
                <a
                  href={`tel:${contactPhoneCompact}`}
                  className="block rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3 font-semibold uppercase tracking-[0.25em] text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                >
                  {ui.contactPhoneLabel}: {contactPhone}
                </a>
                <a
                  href={`mailto:${contactEmail}`}
                  className="block rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3 font-semibold uppercase tracking-[0.25em] text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                >
                  {ui.contactEmailLabel}: {contactEmail}
                </a>
              </div>
            </div>
          </div>
        </section>

        {circuit.gallery.length > 0 && (
          <section className="rounded-[3rem] border border-border bg-card/90 p-8 shadow-[0_35px_100px_-70px_rgba(45,30,15,0.5)] sm:p-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  {ui.galleryTitle}
                </h2>
              </div>
              <Link
                to="/#circuitos"
                className="inline-flex items-center justify-center rounded-full border border-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
              >
                {ui.backToCircuits}
              </Link>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {circuit.gallery.map((image) => (
                <figure
                  key={image.src}
                  className="overflow-hidden rounded-3xl border border-border bg-muted shadow-[0_30px_90px_-65px_rgba(45,30,15,0.45)]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </section>
        )}

        <section className="rounded-[3rem] border border-primary/40 bg-primary/10 p-8 text-center shadow-[0_35px_100px_-70px_rgba(45,30,15,0.5)] sm:p-12">
          <h2 className="text-2xl font-semibold text-primary sm:text-3xl">{circuit.cta.title}</h2>
          <p className="mt-4 text-sm text-primary/90 sm:text-base">{circuit.cta.subtitle}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.3em]">
            <a
              href={circuit.cta.primaryHref}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-primary-foreground shadow-[0_20px_60px_-50px_rgba(45,30,15,0.5)] transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              {circuit.cta.primaryLabel}
            </a>
            <Link
              to="/#circuitos"
              className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
            >
              {ui.backToCircuits}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CircuitDetail;


