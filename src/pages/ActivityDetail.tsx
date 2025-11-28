import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";

import {
  contactEmail,
  contactPhone,
  contactPhoneCompact,
  getFlagSrc,
  type LanguageKey,
} from "@/data/site-content";
import { activityPagesContent } from "@/data/activity-pages";
import { useLanguagePreference } from "@/hooks/use-language-preference";

const languageLabels: Record<LanguageKey, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
  fr: "Français",
};

const pageTexts: Record<LanguageKey, {
  homeLabel: string;
  backLabel: string;
  phoneLabel: string;
  emailLabel: string;
  infoTitle: string;
  highlightsTitle: string;
  checklistTitle: string;
  galleryTitle: string;
  readyTitle: string;
  readySubtitle: string;
  backToActivitiesCta: string;
}> = {
  pt: {
    homeLabel: "Início",
    backLabel: "Atividades",
    phoneLabel: "Telefone",
    emailLabel: "E-mail",
    infoTitle: "Informação rápida",
    highlightsTitle: "Porque vais gostar",
    checklistTitle: "Incluído na experiência",
    galleryTitle: "Galeria",
    readyTitle: "Preparado para reservar?",
    readySubtitle:
      "Conta-nos todos os detalhes para garantirmos uma experiência FunPark à tua medida.",
    backToActivitiesCta: "Ver todas as atividades",
  },
  en: {
    homeLabel: "Home",
    backLabel: "Activities",
    phoneLabel: "Phone",
    emailLabel: "Email",
    infoTitle: "Quick facts",
    highlightsTitle: "Why you'll love it",
    checklistTitle: "Included in the experience",
    galleryTitle: "Gallery",
    readyTitle: "Ready to book?",
    readySubtitle:
      "Share the details with us so we can tailor the FunPark experience to your group.",
    backToActivitiesCta: "View all activities",
  },
  es: {
    homeLabel: "Inicio",
    backLabel: "Actividades",
    phoneLabel: "Teléfono",
    emailLabel: "Correo",
    infoTitle: "Datos rápidos",
    highlightsTitle: "Por qué te encantará",
    checklistTitle: "Incluido en la experiencia",
    galleryTitle: "Galería",
    readyTitle: "¿Listo para reservar?",
    readySubtitle:
      "Cuéntanos los detalles para adaptar la experiencia FunPark a tu grupo.",
    backToActivitiesCta: "Ver todas las actividades",
  },
  fr: {
    homeLabel: "Accueil",
    backLabel: "Activités",
    phoneLabel: "Téléphone",
    emailLabel: "E-mail",
    infoTitle: "Infos rapides",
    highlightsTitle: "Pourquoi vous allez adorer",
    checklistTitle: "Inclus dans l'expérience",
    galleryTitle: "Galerie",
    readyTitle: "Prêt à réserver ?",
    readySubtitle:
      "Donnez-nous toutes les informations pour personnaliser l'expérience FunPark.",
    backToActivitiesCta: "Voir toutes les activités",
  },
};

const ActivityDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const { language, setLanguage } = useLanguagePreference();
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const activityDetail = activityPagesContent[language].find(
    (activity) => activity.slug === slug
  );

  if (!activityDetail) {
    return <Navigate to="/#atividades" replace />;
  }

  const ui = pageTexts[language];
  const mailto = `mailto:${contactEmail}`;

  const isHomeAnchor = activityDetail.intro.ctaHref.startsWith("/#");
  const isInternalRoute =
    activityDetail.intro.ctaHref.startsWith("/") && !isHomeAnchor;

  useEffect(() => {
    if (isHomeAnchor) {
      const hash = activityDetail.intro.ctaHref.replace("/", "");
      let target: HTMLElement | null = null;
      if (hash === "#reservas") {
        target = document.querySelector(hash);
      }
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [isHomeAnchor, activityDetail.intro.ctaHref]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="relative overflow-hidden rounded-b-[4rem] border-b border-border bg-background">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "var(--gradient-primary)", backgroundSize: "cover" }}
        />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-8 sm:px-10">
          <nav className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.35em] text-primary-foreground">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-3">
                <img
                  src="http://funparquesaojoao.pt/imagens/logo.png"
                  alt="FunPark São João"
                  className="h-12 w-auto drop-shadow-lg"
                  loading="lazy"
                />
                <span className="hidden font-semibold text-white sm:inline">
                  FunPark São João
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
                  to="/#atividades"
                  className="rounded-full bg-[rgba(73,49,24,0.7)] px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 hover:bg-[rgba(73,49,24,0.6)]"
                >
                  {ui.backLabel}
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[0.6rem] text-white/80">
              <a
                href={`tel:${contactPhoneCompact}`}
                className="inline-flex items-center gap-2 rounded-full bg-[rgba(73,49,24,0.8)] px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 hover:bg-[rgba(73,49,24,0.7)]"
              >
                {contactPhone}
              </a>
              <a
                href={mailto}
                className="inline-flex items-center gap-2 rounded-full bg-[rgba(73,49,24,0.8)] px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 hover:bg-[rgba(73,49,24,0.7)]"
              >
                {contactEmail}
              </a>
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
                  <div className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-48 rounded-2xl border border-primary/30 bg-secondary/95 p-3 text-left shadow-[0_15px_40px_-20px_rgba(0,0,0,0.6)]">
                    <ul className="space-y-1 text-sm">
                      {(Object.keys(activityPagesContent) as LanguageKey[]).map((key) => (
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
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.45em] text-white/80">
                {activityDetail.hero.badge}
              </span>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                {activityDetail.hero.title}
              </h1>
              <p className="max-w-xl text-sm text-white/80 sm:text-base">
                {activityDetail.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 text-[0.7rem] uppercase tracking-[0.25em]">
                {isHomeAnchor ? (
                  <a
                    href={activityDetail.intro.ctaHref}
                    className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-primary-foreground shadow-[0_20px_60px_-50px_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5 hover:bg-primary/90"
                  >
                    {activityDetail.intro.ctaLabel}
                  </a>
                ) : isInternalRoute ? (
                  <Link
                    to={activityDetail.intro.ctaHref}
                    className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-primary-foreground shadow-[0_20px_60px_-50px_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5 hover:bg-primary/90"
                  >
                    {activityDetail.intro.ctaLabel}
                  </Link>
                ) : (
                  <a
                    href={activityDetail.intro.ctaHref}
                    className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-primary-foreground shadow-[0_20px_60px_-50px_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5 hover:bg-primary/90"
                  >
                    {activityDetail.intro.ctaLabel}
                  </a>
                )}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-[2.5rem] bg-black/10 blur-3xl" />
              <img
                src={activityDetail.hero.image}
                alt={activityDetail.hero.title}
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
            {activityDetail.intro.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-foreground/80">
                {paragraph}
              </p>
            ))}
            {activityDetail.intro.note && (
              <div className="rounded-2xl border border-primary/30 bg-primary/10 p-4 text-xs uppercase tracking-[0.3em] text-primary">
                {activityDetail.intro.note}
              </div>
            )}
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary sm:text-2xl">
              {ui.infoTitle}
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {activityDetail.info.map((item) => (
                <li
                  key={item.label}
                  className="rounded-2xl border border-[#4d3a20] bg-[#25170d] p-4 text-sm text-[#f7f1e4] shadow-[0_25px_80px_-60px_rgba(45,30,15,0.45)]"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-[#b5ff6b]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-base font-semibold text-[#fef9ec]">
                    {item.value}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-[3rem] border border-primary/30 bg-primary/10 p-8 shadow-[0_35px_100px_-70px_rgba(45,30,15,0.5)] sm:p-12">
          <h2 className="text-xl font-semibold text-primary sm:text-2xl">
            {ui.highlightsTitle}
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {activityDetail.highlights.map((highlight) => (
              <article
                key={highlight.title}
                className="rounded-3xl border border-[#564124] bg-[#342112] p-6 text-sm text-[#f7f1e4] shadow-[0_25px_80px_-60px_rgba(45,30,15,0.45)]"
              >
                <h3 className="text-base font-semibold text-[#b5ff6b]">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-sm text-[#f7f1e4]/90">
                  {highlight.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className={`grid gap-8 rounded-[3rem] border border-border bg-card/90 p-8 shadow-[0_35px_100px_-70px_rgba(45,30,15,0.5)] lg:p-12 ${
            activityDetail.gallery.length > 0 ? "lg:grid-cols-[0.8fr_1.2fr]" : ""
          }`}
        >
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary sm:text-2xl">
              {ui.checklistTitle}
            </h2>
            <ul className="space-y-2 text-sm text-foreground/80 sm:text-base">
              {activityDetail.checklist.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-3 w-3 shrink-0 translate-y-1 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {isHomeAnchor ? (
              <a
                href={activityDetail.intro.ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground shadow-[0_20px_60px_-50px_rgba(45,30,15,0.4)] transition hover:-translate-y-0.5 hover:bg-primary/90"
              >
                {activityDetail.intro.ctaLabel}
              </a>
            ) : isInternalRoute ? (
              <Link
                to={activityDetail.intro.ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground shadow-[0_20px_60px_-50px_rgba(45,30,15,0.4)] transition hover:-translate-y-0.5 hover:bg-primary/90"
              >
                {activityDetail.intro.ctaLabel}
              </Link>
            ) : (
              <a
                href={activityDetail.intro.ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground shadow-[0_20px_60px_-50px_rgba(45,30,15,0.4)] transition hover:-translate-y-0.5 hover:bg-primary/90"
              >
                {activityDetail.intro.ctaLabel}
              </a>
            )}
          </div>
          {activityDetail.gallery.length > 0 && (
            <div className="rounded-3xl border border-primary/20 bg-muted/60 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/90">
                {ui.galleryTitle}
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {activityDetail.gallery.map((image) => (
                  <figure key={image.src} className="overflow-hidden rounded-2xl border border-white/10">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </figure>
                ))}
              </div>
            </div>
          )}
        </section>

        <section className="rounded-[3rem] border border-primary/40 bg-primary/10 p-8 text-center shadow-[0_35px_100px_-70px_rgba(45,30,15,0.5)] sm:p-12">
          <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
            {ui.readyTitle}
          </h2>
          <p className="mt-4 text-sm text-foreground/80 sm:text-base">
            {ui.readySubtitle}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-[0.7rem] uppercase tracking-[0.25em]">
            <Link
              to="/#reservas"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-primary-foreground shadow-[0_20px_60px_-50px_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              {activityDetail.intro.ctaLabel}
            </Link>
            <Link
              to="/#atividades"
              className="inline-flex items-center justify-center rounded-full border border-primary/50 px-6 py-3 text-primary transition hover:-translate-y-0.5 hover:border-primary"
            >
              {ui.backToActivitiesCta}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ActivityDetail;
