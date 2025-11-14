import type { LanguageKey } from "./site-content";

export type AboutPageContent = {
  headline: string;
  subheadline: string;
  paragraphs: string[];
  highlights: { title: string; description: string }[];
  cta: { label: string; href: string };
};

export const aboutPageContent: Record<LanguageKey, AboutPageContent> = {
  pt: {
    headline: "Um refúgio de aventura em plena natureza da Caparica.",
    subheadline:
      "O Fun Parque é um parque de aventura situado no concelho de Almada, destinado a proporcionar aos habitantes da zona metropolitana de Lisboa atividades desportivas ligadas à natureza.",
    paragraphs: [
      "Situado numa propriedade privada com cerca de 8 hectares de mata e a poucos minutos das praias da Costa da Caparica, o Fun Parque ocupa um pulmão verde junto ao mar. As famílias e grupos desfrutam de um ambiente protegido, com estacionamento amplo e fácil acesso.",
      "Ao longo do ano recebemos grupos escolares, famílias, empresas e aventureiros curiosos. As nossas infraestruturas cobertas e ao ar livre permitem experiências seguras mesmo em dias de chuva.",
    ],
    highlights: [
      {
        title: "Arborismo",
        description:
          "Percursos entre árvores com jogos, pontes suspensas, redes e slides. Cada sessão inclui briefing de segurança, arnês certificado e acompanhamento de monitores.",
      },
      {
        title: "Insufláveis & Playground",
        description:
          "Diversos insufláveis e estruturas lúdicas montadas no iglo gigante, garantindo diversão protegida durante todo o ano.",
      },
      {
        title: "Paintball",
        description:
          "Cenários exteriores com obstáculos naturais, marcadores adaptados a diferentes idades e bolas incluídas.",
      },
      {
        title: "Eventos corporativos",
        description:
          "Dinâmicas de team building e experiências para empresas com monitores dedicados e espaços exclusivos.",
      },
    ],
    cta: {
      label: "Ver horários e contacto",
      href: "/#horarios",
    },
  },
  en: {
    headline: "An adventure haven in the heart of Caparica nature.",
    subheadline:
      "FunPark is an adventure park in Almada that offers Greater Lisbon residents outdoor activities surrounded by nature.",
    paragraphs: [
      "Set on a private estate with eight hectares of woodland and minutes away from the beaches of Costa da Caparica, FunPark is a green haven by the sea. Families and groups enjoy a protected environment with generous parking and easy access.",
      "All year round we welcome school outings, families, companies and curious adventurers. Our indoor and outdoor infrastructures guarantee safe experiences even on rainy days.",
    ],
    highlights: [
      {
        title: "Tree-top courses",
        description:
          "Suspended games, bridges, nets and zip-lines with certified harnesses, safety briefings and monitor support from start to finish.",
      },
      {
        title: "Inflatables & Playground",
        description:
          "A giant indoor dome packed with inflatables and play structures so the fun continues regardless of the weather.",
      },
      {
        title: "Paintball",
        description:
          "Natural battlefields with markers adapted to kids (8+) and adults (13+), full protective gear and themed missions.",
      },
      {
        title: "Corporate events",
        description:
          "250 m² of covered areas, optional catering and bespoke team-building programmes for companies.",
      },
    ],
    cta: {
      label: "View schedule & contact",
      href: "/#horarios",
    },
  },
  es: {
    headline: "Un refugio de aventura en plena naturaleza de Caparica.",
    subheadline:
      "FunPark es un parque de aventura situado en Almada que ofrece a los habitantes del área metropolitana de Lisboa actividades deportivas en contacto con la naturaleza.",
    paragraphs: [
      "Ubicado en una finca privada de 8 hectáreas de bosque y a pocos minutos de las playas de la Costa de Caparica, FunPark es un pulmón verde junto al mar. Familias y grupos disfrutan de un entorno protegido con amplio aparcamiento y fácil acceso.",
      "Durante todo el año recibimos excursiones escolares, familias, empresas y aventureros curiosos. Nuestras infraestructuras cubiertas y al aire libre permiten experiencias seguras incluso en días de lluvia.",
    ],
    highlights: [
      {
        title: "Arborismo",
        description:
          "Recorridos entre los árboles con juegos, puentes suspendidos, redes y tirolinas. Cada sesión incluye briefing de seguridad, arnés certificado y monitores de apoyo.",
      },
      {
        title: "Hinchables y playground",
        description:
          "Gran variedad de hinchables y estructuras lúdicas dentro del iglú gigante, asegurando diversión durante todo el año.",
      },
      {
        title: "Paintball",
        description:
          "Escenarios exteriores con obstáculos naturales, marcadoras adaptadas a diferentes edades y bolas incluidas.",
      },
      {
        title: "Eventos corporativos",
        description:
          "Dinámicas de team building y experiencias para empresas con monitores dedicados y espacios exclusivos.",
      },
    ],
    cta: {
      label: "Ver horarios y contacto",
      href: "/#horarios",
    },
  },
  fr: {
    headline: "Un refuge d'aventure au cœur de la nature de Caparica.",
    subheadline:
      "FunPark est un parc d'aventure situé à Almada qui offre aux habitants de la région de Lisbonne des activités sportives en pleine nature.",
    paragraphs: [
      "Installé sur un domaine privé de 8 hectares de forêt, à quelques minutes des plages de la Costa da Caparica, FunPark est un poumon vert au bord de la mer. Familles et groupes profitent d'un environnement protégé avec un vaste parking et un accès facile.",
      "Toute l'année nous accueillons sorties scolaires, familles, entreprises et aventuriers curieux. Nos infrastructures couvertes et extérieures garantissent des expériences sûres même les jours de pluie.",
    ],
    highlights: [
      {
        title: "Parcours acrobatiques",
        description:
          "Jeux, ponts suspendus, filets et tyroliennes avec briefing sécurité, harnais certifié et encadrement permanent.",
      },
      {
        title: "Structures gonflables & playground",
        description:
          "Un dôme intérieur rempli de structures ludiques pour s'amuser quelle que soit la météo.",
      },
      {
        title: "Paintball",
        description:
          "Terrains extérieurs avec obstacles naturels, lanceurs adaptés aux enfants (8+) et aux adultes (13+) et billes incluses.",
      },
      {
        title: "Événements d'entreprise",
        description:
          "Programmes de team building sur mesure avec animateurs dédiés et espaces privatifs.",
      },
    ],
    cta: {
      label: "Voir horaires et contact",
      href: "/#horarios",
    },
  },
};
