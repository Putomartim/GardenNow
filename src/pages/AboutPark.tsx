import { Link } from "react-router-dom";

import {
  contactEmail,
  contactPhone,
  contactPhoneCompact,
  getFlagSrc,
  type LanguageKey,
} from "@/data/site-content";
import { aboutPageContent } from "@/data/about-page";
import { useLanguagePreference } from "@/hooks/use-language-preference";

const languageLabels: Record<LanguageKey, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
  fr: "Français",
};

const AboutPark = () => {
  const { language, setLanguage } = useLanguagePreference();
  const content = aboutPageContent[language];
  const mailto = `mailto:${contactEmail}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="relative overflow-hidden rounded-b-[4rem] border-b border-border bg-background">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "var(--gradient-primary)", backgroundSize: "cover" }}
        />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-8 sm:px-10">
          <nav className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.35em] text-primary-foreground">
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
                {language === "pt"
                  ? "Início"
                  : language === "es"
                    ? "Inicio"
                    : language === "fr"
                      ? "Accueil"
                      : "Home"}
              </Link>
              <Link
                to="/#atividades"
                className="rounded-full bg-[rgba(73,49,24,0.7)] px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 hover:bg-[rgba(73,49,24,0.6)]"
              >
                {language === "pt"
                  ? "Atividades"
                  : language === "es"
                    ? "Actividades"
                    : language === "fr"
                      ? "Activités"
                      : "Activities"}
              </Link>
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
                  onClick={() => setLanguage((current) => {
                    const order: LanguageKey[] = ["pt", "en", "es", "fr"];
                    const index = order.indexOf(current as LanguageKey);
                    const next = order[(index + 1) % order.length];
                    return next;
                  })}
                  className="inline-flex items-center gap-2 rounded-full bg-[rgba(73,49,24,0.95)] px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-white shadow-[0_6px_12px_-8px_rgba(0,0,0,0.6)] transition hover:-translate-y-0.5 hover:bg-[rgba(73,49,24,0.9)]"
                >
                  <img
                    src={getFlagSrc(language)}
                    alt={languageLabels[language]}
                    className="h-4 w-6 rounded-[2px] object-cover"
                    loading="lazy"
                  />
                  <span>{languageLabels[language]}</span>
                </button>
              </div>
            </div>
          </nav>

          <div className="space-y-6 text-white">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.45em] text-white/80">
              {language === "pt"
                ? "Sobre o parque"
                : language === "es"
                  ? "Sobre el parque"
                  : language === "fr"
                    ? "À propos du parc"
                    : "About the park"}
            </span>
            <h1 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              {content.headline}
            </h1>
            <p className="max-w-3xl text-sm text-white/80 sm:text-base">
              {content.subheadline}
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 sm:px-10">
        <section className="space-y-6 text-sm text-muted-foreground sm:text-base">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section className="space-y-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">
            {language === "pt"
              ? "Destaques FunPark"
              : language === "es"
                ? "Destacados FunPark"
                : language === "fr"
                  ? "À l'honneur FunPark"
                  : "FunPark highlights"}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {content.highlights.map((highlight) => (
              <article
                key={highlight.title}
                className="rounded-3xl border border-primary/35 bg-secondary/85 p-6 text-sm text-secondary-foreground shadow-[0_25px_80px_-60px_rgba(45,30,15,0.45)]"
              >
                <h3 className="text-lg font-semibold text-primary">{highlight.title}</h3>
                <p className="mt-3 leading-relaxed text-secondary-foreground/80">
                  {highlight.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap items-center justify-between gap-4 rounded-[3rem] border border-primary/30 bg-primary/10 p-8 shadow-[0_35px_100px_-70px_rgba(45,30,15,0.5)] sm:p-12">
          <div className="space-y-2 text-sm text-foreground sm:text-base">
            <h2 className="text-xl font-semibold text-primary sm:text-2xl">
              {language === "pt"
                ? "Pronto para nos visitar?"
                : language === "es"
                  ? "¿Listo para visitarnos?"
                  : language === "fr"
                    ? "Prêt à nous rendre visite ?"
                    : "Ready to plan your visit?"}
            </h2>
            <p>
              {language === "pt"
                ? "Consulta os horários, contactos e indicações para chegares ao FunPark."
                : language === "es"
                  ? "Consulta horarios, contactos e indicaciones para llegar a FunPark."
                  : language === "fr"
                    ? "Consultez horaires, contacts et indications pour rejoindre FunPark."
                    : "Check the opening hours, contacts and directions to get to FunPark."}
            </p>
          </div>
          <Link
            to={content.cta.href}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground shadow-[0_20px_60px_-50px_rgba(45,30,15,0.4)] transition hover:-translate-y-0.5 hover:bg-primary/90"
          >
            {content.cta.label}
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AboutPark;
