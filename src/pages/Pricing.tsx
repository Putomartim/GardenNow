import { useState } from "react";
import { Link } from "react-router-dom";

import {
  contactEmail,
  contactPhone,
  contactPhoneCompact,
  getFlagSrc,
  type LanguageKey,
} from "@/data/site-content";
import { pricingPageContent } from "@/data/pricing-page";
import { useLanguagePreference } from "@/hooks/use-language-preference";

const languageLabels: Record<LanguageKey, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
  fr: "Français",
};

const Pricing = () => {
  const { language, setLanguage } = useLanguagePreference();
  const content = pricingPageContent[language];
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const mailto = `mailto:${contactEmail}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="relative overflow-hidden rounded-b-[4rem] border-b border-border bg-background">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "var(--gradient-primary)", backgroundSize: "cover" }}
        />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-8 sm:px-10">
          <nav className="flex flex-col gap-6 text-xs uppercase tracking-[0.35em] text-primary-foreground sm:flex-row sm:items-center sm:justify-between">
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
                  {content.breadcrumbs.homeLabel}
                </Link>
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="rounded-full bg-[rgba(73,49,24,0.6)] px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 hover:bg-[rgba(73,49,24,0.5)]"
                >
                  {content.breadcrumbs.backLabel}
                </button>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 sm:justify-end">
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
              </div>
              <div className="relative flex items-center gap-3 text-[0.6rem] text-white/80">
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
                      {(Object.keys(pricingPageContent) as LanguageKey[]).map((key) => (
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

          <div className="max-w-3xl space-y-6 text-white">
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/80">
              {content.hero.badge}
            </span>
            <h1 className="text-3xl font-semibold sm:text-5xl">{content.hero.title}</h1>
            <p className="text-sm text-white/80 sm:text-base">{content.hero.subtitle}</p>
            <div className="flex flex-wrap gap-4 text-[0.7rem] uppercase tracking-[0.25em]">
              <Link
                to="/#reservas"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-primary-foreground shadow-[0_20px_60px_-50px_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5 hover:bg-primary/90"
              >
                {content.actions.bookLabel}
              </Link>
              <a
                href={mailto}
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-white transition hover:-translate-y-0.5 hover:border-white"
              >
                {content.actions.contactLabel}
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 sm:px-10">
        <section className="rounded-[3rem] border border-border bg-card/90 p-8 shadow-[0_35px_100px_-70px_rgba(45,30,15,0.5)] sm:p-12">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.4em] text-primary">
              {content.individual.title}
            </span>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {content.individual.description}
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {content.individual.items.map((item) => (
              <article
                key={item.title}
                className="space-y-5 rounded-3xl border border-primary/20 bg-secondary/80 p-6 text-secondary-foreground shadow-[0_25px_80px_-60px_rgba(45,30,15,0.45)]"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                    <span className="text-sm font-semibold text-primary">{item.price}</span>
                  </div>
                  {item.subtitle && (
                    <p className="text-xs uppercase tracking-[0.25em] text-primary/80">
                      {item.subtitle}
                    </p>
                  )}
                  {item.description && (
                    <p className="text-sm text-secondary-foreground/90">
                      {item.description}
                    </p>
                  )}
                </div>
                {item.cards && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {item.cards.map((card) => (
                      <div
                        key={card.title}
                        className="rounded-2xl border border-primary/20 bg-muted/60 p-4"
                      >
                        <h4 className="text-sm font-semibold text-primary">
                          {card.title}
                        </h4>
                        <ul className="mt-2 space-y-1 text-sm text-secondary-foreground/80">
                          {card.bulletPoints.map((bullet) => (
                            <li key={bullet}>• {bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[3rem] border border-[#46331e] bg-[#1f140b] p-8 text-[#f8f1df] shadow-[0_35px_100px_-70px_rgba(45,30,15,0.5)] sm:p-12">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.4em] text-[#b5ff6b]">
              {content.paintball.title}
            </span>
            <p className="text-sm text-[#e8dbc2] sm:text-base">
              {content.paintball.description}
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {content.paintball.packages.map((pkg) => (
              <article
                key={pkg.title}
                className="rounded-3xl border border-[#5b482b] bg-[#d9d1c2] p-6 text-sm text-[#3a2a19] shadow-[0_25px_80px_-60px_rgba(45,30,15,0.45)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-[#4a7a1b]">{pkg.title}</h3>
                  <span className="text-base font-semibold text-[#2a1c11]">
                    {pkg.price}
                  </span>
                </div>
                <p className="mt-3 text-sm text-[#64563f]">{pkg.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-10 rounded-[3rem] border border-[#46331e] bg-[#1f140b] p-8 text-[#f8f1df] shadow-[0_35px_100px_-70px_rgba(45,30,15,0.5)] sm:p-12">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.4em] text-[#b5ff6b]">
              {content.parties.title}
            </span>
            <p className="text-sm text-[#e8dbc2] sm:text-base">
              {content.parties.description}
            </p>
          </div>

          <div className="space-y-6">
            {content.parties.options.map((option) => (
              <article
                key={option.option}
                className="space-y-6 rounded-3xl border border-[#5b482b] bg-[#2a1c11] p-6 text-[#f8f1df] shadow-[0_30px_90px_-70px_rgba(45,30,15,0.45)]"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">
                    {option.option}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-[#b5ff6b]">
                      {option.activity}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#b5ff6b]/80">
                      {option.context}
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
                  <div className="space-y-4">
                    <p className="inline-flex rounded-full bg-[#b5ff6b]/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-[#b5ff6b]">
                      {option.age}
                    </p>
                    <p className="text-sm text-[#e8dbc2]">
                      {option.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b5ff6b]/90">
                        {content.parties.headers.includes}
                      </h4>
                      <ul className="space-y-1 text-sm text-[#d9c9aa]">
                        {option.includes.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    {option.perks && option.perks.length > 0 && (
                      <div className="rounded-2xl border border-[#5b482b] bg-[#b5ff6b]/10 p-4 text-sm font-semibold text-[#b5ff6b]">
                        {option.perks.join(" · ")}
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-[#5b482b] bg-[#23170e] p-4 text-sm text-[#e8dbc2]">
                      <p className="text-xs uppercase tracking-[0.25em] text-[#b5ff6b]/80">
                        {option.minParticipants}
                      </p>
                      <div className="mt-3 space-y-3">
                        {option.pricing.withoutSnack && option.pricing.withoutSnack.length > 0 && (
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b5ff6b]/90">
                              {option.pricing.withoutSnackLabel ?? content.parties.headers.withoutSnack}
                            </p>
                            <ul className="mt-2 space-y-1">
                              {option.pricing.withoutSnack.map((price) => (
                                <li key={`${option.option}-wo-${price.label}`}>
                                  <span>{price.label}</span>
                                  <span className="float-right font-semibold text-[#b5ff6b]">{price.price}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {option.pricing.withSnack && option.pricing.withSnack.length > 0 && (
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b5ff6b]/90">
                              {option.pricing.withSnackLabel ?? content.parties.headers.withSnack}
                            </p>
                            <ul className="mt-2 space-y-1">
                              {option.pricing.withSnack.map((price) => (
                                <li key={`${option.option}-w-${price.label}`}>
                                  <span>{price.label}</span>
                                  <span className="float-right font-semibold text-[#b5ff6b]">{price.price}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="space-y-6 rounded-3xl border border-[#5b482b] bg-[#23170e] p-6 text-sm text-[#f8f1df]">
            <p className="font-semibold text-[#b5ff6b]">{content.parties.snackNote}</p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/90">
                  {content.parties.bungalow.title}
                </h4>
                <p className="text-sm text-foreground/80">
                  {content.parties.bungalow.description}
                </p>
                <ul className="space-y-1 text-sm text-foreground/80">
                  {content.parties.bungalow.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/90">
                  {content.parties.schedule.title}
                </h4>
                <ul className="space-y-1 text-sm text-foreground/80">
                  {content.parties.schedule.entries.map((entry) => (
                    <li key={entry}>• {entry}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[3rem] border border-primary/40 bg-primary/10 p-8 text-center shadow-[0_35px_100px_-70px_rgba(45,30,15,0.5)] sm:p-12">
          <h3 className="text-2xl font-semibold text-primary sm:text-3xl">
            {content.corporate.title}
          </h3>
          <p className="mt-4 text-sm text-foreground/80 sm:text-base">
            {content.corporate.description}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-[0.7rem] uppercase tracking-[0.25em]">
            <a
              href={mailto}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-primary-foreground shadow-[0_20px_60px_-50px_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              {content.actions.contactLabel}
            </a>
            <Link
              to="/#reservas"
              className="inline-flex items-center justify-center rounded-full border border-primary/50 px-6 py-3 text-primary transition hover:-translate-y-0.5 hover:border-primary"
            >
              {content.actions.bookLabel}
            </Link>
          </div>
        </section>

        <div className="rounded-[2.5rem] border border-border bg-card/80 p-6 text-center text-sm text-muted-foreground shadow-[0_25px_80px_-60px_rgba(45,30,15,0.45)] sm:text-base">
          {content.finalNote}
        </div>
      </main>
    </div>
  );
};

export default Pricing;
