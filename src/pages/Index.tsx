import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { format, isWithinInterval, parse } from "date-fns";

import {
  baseMediaUrl,
  contactEmail,
  contactPhone,
  contactPhoneCompact,
  getFlagSrc,
  type LanguageContent,
  type LanguageKey,
  whatsappNumber,
} from "@/data/site-content";
import { activityPagesContent } from "@/data/activity-pages";
import { useLanguagePreference } from "@/hooks/use-language-preference";

const contactEmailEncoded = encodeURIComponent(contactEmail);

const createMailtoLink = (subject: string, body?: string) => {
  const params = new URLSearchParams();
  params.set("subject", subject);
  if (body) {
    params.set("body", body);
  }
  return `mailto:${contactEmailEncoded}?${params.toString()}`;
};

const translations: Record<LanguageKey, LanguageContent> = {
  pt: {
    localeLabel: "Português",
    mailSubject: "Reserva FunPark São João",
    navLinks: [
      { label: "Sobre o Parque", href: "#sobre" },
      { label: "Atividades", href: "#atividades" },
      { label: "Como Funciona", href: "#experiencia" },
      { label: "Reservas", href: "#reservas" },
    ],
    navSubtopics: {
      "#sobre": [
        { label: "Parque", href: "/sobre-o-parque" },
        { label: "Horários e contacto", href: "#horarios" },
        { label: "Preçário", href: "/precario" },
        { label: "Como chegar", href: "#como-chegar" },
        { label: "Galeria", href: "#galeria" },
      ],
    },
    hero: {
      badge: "Descobre a tua natureza radical",
      title: "Aventura entre árvores, slides gigantes e festas inesquecíveis na Caparica.",
      subtitle:
        "O FunPark São João combina arborismo, paintball, playground e eventos ao ar livre com a energia da natureza. Reserva a próxima experiência da tua família, turma ou equipa.",
      chips: ["Monitores certificados", "Ambiente natural", "Ideal para grupos"],
      ctas: {
        primary: "Reserva já",
        secondary: "Falar no WhatsApp",
        tertiary: "Ver atividades",
      },
      whatsappMessage: "Olá FunPark! Quero saber mais sobre as atividades.",
      moments: [
        {
          image: `${baseMediaUrl}/image2.png`,
          title: "Arborismo em família",
    description:
            "Percursos suspensos entre pinheiros com briefings dedicados para cada idade.",
  },
  {
          image: `${baseMediaUrl}/imagens/arborimo_3.jpg`,
          title: "Monitores atentos",
    description:
            "Equipas FunPark acompanham cada passo, garantindo diversão com total segurança.",
  },
  {
          image: `${baseMediaUrl}/image7.png`,
          title: "Slides e desafios",
    description:
            "Mais de 200 metros de slide e jogos aéreos que elevam a adrenalina do teu grupo.",
        },
      ],
      phases: {
        badge: "Fases da aventura",
        heading: "3 circuitos para sentir o FunPark.",
        steps: [
  {
    number: "01",
            title: "Briefing & Equipagem",
    description:
              "Recebe arnês, marcador ou material necessário com instruções personalizadas dos monitores.",
  },
  {
    number: "02",
            title: "Percurso guiado",
    description:
              "Vive jogos suspensos, slides, paintball ou escalada guiados pela nossa equipa experiente.",
  },
  {
    number: "03",
            title: "Celebração no parque",
    description:
              "Relaxa no lounge, marca lanche opcional e brinda com vista à mata da Caparica.",
          },
        ],
      },
    },
    about: {
      badge: "Sobre o Parque",
      title: "Um refúgio de aventura em plena natureza da Caparica.",
      paragraphs: [
        "O Fun Parque é um parque de aventura situado no concelho de Almada, destinado a proporcionar aos habitantes da zona metropolitana de Lisboa atividades desportivas ligadas à natureza.",
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
      highlightLabel: "Destaques FunPark",
      footer:
        "Reserva já o teu dia connosco e transforma a tua próxima saída num momento épico entre a natureza.",
    },
    highlightStats: [
      { label: "+8 hectares", description: "Área total de mata e aventura" },
      { label: "+200 m", description: "De slides a atravessar" },
      { label: "+15 anos", description: "De experiência em aventuras" },
    ],
    activitiesSection: {
      badge: "Atividades",
      title: "Circuitos, paintball e festas para todas as idades.",
      description:
        "Do arborismo aos trampolins na tenda iglo, cada experiência é pensada para grupos familiares, turmas e equipas corporativas.",
      menuTitle: "Seleciona a atividade",
      menuSubtitle: "Explora os detalhes de cada aventura",
    },
    activities: [
      {
        slug: "arborismo",
        name: "Arborismo",
        description:
          "Circuitos suspensos com slides, pontes e passagens aéreas. Os níveis são progressivos para diferentes alturas e idades.",
        image: `${baseMediaUrl}/image4.jpg`,
        alt: "Participantes no arborismo do FunPark",
        details: [
          "Briefing inicial de segurança",
          "Arnês certificado incluído",
          "4 percursos progressivos",
        ],
      },
      {
        slug: "paintball",
        name: "Paintball",
        description:
          "Campo exterior com cenários temáticos. Inclui equipamento completo e bolas para o jogo.",
        image: `${baseMediaUrl}/image3.jpg`,
        alt: "Jogadores de paintball em ação",
        details: ["Marcadores adaptados à idade", "Cenários naturais", "Equipamento incluído"],
      },
      {
        slug: "playground",
        name: "Tenda Iglo · Playground",
        description:
          "Parque coberto com insufláveis e atividades ideais para festas de aniversário e grupos infantis.",
        image: `${baseMediaUrl}/image5.jpg`,
        alt: "Crianças a brincar no playground coberto",
        details: ["Ideal para dias de chuva", "Monitores dedicados", "Atividade para idades 4-10"],
      },
      {
        slug: "trampolim",
        name: "Trampolim & Torre de Saltos",
        description:
          "Desafios de saltos em torres interiores e trampolins com acompanhamento FunPark.",
        image: `${baseMediaUrl}/image6.jpg`,
        alt: "Trampolim no FunPark",
        details: ["Indicada para maiores de 6 anos", "Sessões acompanhadas", "Acesso a karts e campo"],
      },
      {
        slug: "escalada",
        name: "Escalada Indoor",
        description:
          "Paredes modulares até 8 m com auto-belay, desafios temáticos e monitores FunPark em arena climatizada.",
        image: "http://www.funparquesaojoao.pt/images/4.jpg",
        alt: "Participante nas paredes de escalada do FunPark",
        details: [
          "Sessões de 60 minutos com briefing técnico",
          "Arnês, capacete e auto-belay incluídos",
          "Espaço indoor preparado para acompanhantes",
        ],
      },
      {
        slug: "aniversarios",
        name: "Aniversários",
        description:
          "Programas completos de 2h30 com atividades contínuas, monitores dedicados e lanche opcional FunPark.",
        image: `${baseMediaUrl}/imagens/aniversarios_1.png`,
        alt: "Crianças a celebrar no FunPark",
        details: ["Convites incluídos", "Aniversariante não paga*", "Lanche opcional"],
      },
      {
        slug: "eventos",
        name: "Eventos Empresas",
        description:
          "Sessões de team building e atividades ao ar livre adaptadas a equipas corporativas.",
        image: `${baseMediaUrl}/image6.png`,
        alt: "Equipa em desafio corporativo",
        details: ["Team building", "Programas personalizados", "Aluguer de espaços"],
      },
    ],
    experience: {
      badge: "Como funciona",
      title: "Reserva simples, experiência completa.",
      description:
        "Em cada etapa vais contar com o apoio do nosso staff, desde o primeiro contacto até ao brinde final no parque.",
      steps: [
        {
          number: "01",
          title: "Escolhe a aventura",
          description: "Define a atividade, o número de participantes e a data ideal para o teu grupo.",
        },
        {
          number: "02",
          title: "Reserva em minutos",
          description: "Contacta-nos por telefone, WhatsApp ou e-mail e confirma a disponibilidade.",
        },
        {
          number: "03",
          title: "Briefing & equipagem",
          description: "Recebe instruções detalhadas, arnês, marcador ou material necessário com toda a segurança.",
  },
  {
    number: "04",
          title: "Hora da adrenalina",
          description: "Monitores FunPark acompanham cada atividade para garantir diversão sem preocupações.",
        },
      ],
    },
    gallery: {
      badge: "Galeria",
      title: "Um olhar pelas aventuras FunPark.",
      instructions: "Desliza para ver mais",
      images: [
        { src: "http://www.funparquesaojoao.pt/images/7.jpg", alt: "" },
        { src: "http://www.funparquesaojoao.pt/images/6.jpg", alt: "" },
        { src: "http://www.funparquesaojoao.pt/images/5.jpg", alt: "" },
        { src: "http://www.funparquesaojoao.pt/images/3.jpg", alt: "" },
      ],
    },
    schedule: {
      badge: "Horários e contacto",
      title: "Horário sazonal a pensar no teu tempo livre.",
      items: [
        {
          season: "Inverno · 1 outubro a 31 março",
          details: "Quarta a domingo · 10h às 18h",
          note: "Reservas obrigatórias para garantir lugar.",
        },
        {
          season: "Verão · 1 abril a 30 setembro",
          details: "Terça a domingo · 10h às 19h",
          note: "Aberto todos os feriados e férias escolares.",
        },
      ],
      contactTitle: "Fala diretamente com a equipa FunPark",
      phoneLabel: "Telefone",
      emailLabel: "E-mail",
      locationLabel: "Localização",
      mapLinkText: "Ver no Google Maps",
      schoolsNote: "Reservas para escolas e empresas com pacotes personalizados.",
    },
    pricing: {
      badge: "Preçário",
      title: "Opções para cada tipo de grupo.",
    description:
        "Consulta os valores base abaixo e acede à página dedicada para conhecer o preçário completo com todos os detalhes.",
      items: [
        {
          label: "Arborismo · desde 18€ por participante",
          description: "Inclui briefing, arnês e acesso a quatro circuitos progressivos.",
        },
        {
          label: "Paintball · packs a partir de 20€",
          description: "Marcador, máscara, fato e bolas incluídos com acompanhamento do monitor.",
        },
        {
          label: "Festas de aniversário · desde 220€",
          description: "2h30 de atividades com monitores, convites digitais e mesa reservada para o lanche.",
        },
      ],
      note: "Contacta-nos para um orçamento detalhado e descontos para grupos.",
      ctaLabel: "Abrir preçário completo",
      ctaHref: "/precario",
    },
    directions: {
      badge: "Como chegar",
      title: "Estamos a poucos minutos de Lisboa.",
      intro:
        "O FunPark São João fica em São João da Caparica, com acesso rápido pela A33 ou IC20 e estacionamento gratuito.",
      options: [
        {
          label: "Carro",
          description: "Usa a saída Caparica/S. João, segue as indicações FunPark e aproveita o nosso parque de estacionamento.",
        },
        {
          label: "Transportes públicos",
          description: "Autocarros 161/153 a partir de Lisboa (Praça de Espanha) com paragem em São João da Caparica, a 5 minutos a pé.",
        },
        {
          label: "Coordenadas GPS",
          description: "38.635260, -9.223410 — ideal para colocar no teu navegador favorito.",
        },
      ],
      mapCta: "Ver rota no Google Maps",
    },
    reservation: {
      badge: "Reserva em poucos passos",
      title: "Agenda agora a tua próxima aventura FunPark.",
    description:
        "Preenche o formulário e recebes resposta personalizada da nossa equipa. Acrescenta o máximo de detalhes para garantirmos a melhor experiência para o teu grupo.",
      checklist: [
        "Indica a atividade e a data pretendida.",
        "Diz-nos quantos adultos e crianças participam.",
        "Escolhe se preferes lanche FunPark ou se trazes o teu.",
        "Recebe confirmação rápida por telefone ou e-mail.",
      ],
      contactHeading: "Preferes falar já?",
      contactSubheading: "Ou envia e-mail direto",
      successMessage:
        "Obrigado! Abrimos o teu e-mail de reserva. Completa o envio para que a nossa equipa receba o pedido.",
      submitText: "Preparar e-mail de reserva",
      fields: {
        reservationType: {
          label: "Tipo de reserva*",
          placeholder: "Seleciona uma opção",
          mailLabel: "Tipo de reserva",
        },
        activity: {
          label: "Atividade*",
          placeholder: "Escolhe a atividade",
          mailLabel: "Atividade",
        },
        name: {
          label: "Nome*",
          placeholder: "O teu nome completo",
          mailLabel: "Nome",
        },
        email: {
          label: "E-mail*",
          placeholder: "nome@exemplo.com",
          mailLabel: "E-mail",
        },
        phone: {
          label: "Telefone*",
          placeholder: "+351 ...",
          mailLabel: "Telefone",
        },
        date: {
          label: "Data pretendida*",
          placeholder: "dd/mm/aaaa",
          mailLabel: "Data pretendida",
        },
        adults: {
          label: "Participantes adultos (&gt;18)*",
          placeholder: "0",
          mailLabel: "Participantes adultos",
        },
        kids: {
          label: "Participantes menores (&lt;18)*",
          placeholder: "0",
          mailLabel: "Participantes menores",
        },
        ageRange: {
          label: "Faixa etária dos participantes*",
          fromPlaceholder: "Dos",
          toPlaceholder: "Até",
          separator: "a",
          mailLabelFrom: "Idade mínima",
          mailLabelTo: "Idade máxima",
        },
        lunch: {
          label: "Com lanche*",
          placeholder: "Seleciona uma opção",
          mailLabel: "Opção de lanche",
        },
        birthday: {
          label: "Nome do aniversariante",
          placeholder: "Opcional",
          mailLabel: "Nome do aniversariante",
        },
        notes: {
          label: "Observações / Questões",
          placeholder:
            "Partilha informações adicionais, aniversariantes extra, necessidades especiais...",
          mailLabel: "Observações",
        },
      },
    },
    reservationTypes: [
      "Festa de aniversário",
      "Grupo de amigos",
      "Escolas",
      "Empresas / Team building",
      "Outros eventos",
    ],
    activityPackages: [
      {
        title: "Arborismo & Escalada",
        options: [
          "Arborismo +5 anos e 1,05m",
          "Arborismo +13 anos e 1,40m",
          "Escalada (+20 kg, max 100 kg)",
          "1h Arborismo +1h Escalada",
          "1h Escalada +1h Trampolins",
        ],
      },
      {
        title: "Trampolins & Playground",
        options: [
          "Evento Playground",
          "1h Trampolins +1h Arborismo",
          "1h Trampolins +1h Paintball",
          "Iglo Playground (insufláveis)",
        ],
      },
      {
        title: "Paintball Crianças (+8 anos)",
        options: [
          "Paintball Cri. 100 bolas (disponível até 2025)",
          "Paintball Cri. 150 bolas",
          "Paintball Cri. 200 bolas",
          "Paintball Cri. 300 bolas",
          "Paintball Cri. 400 bolas",
          "1h Arborismo + Paintball Cri. 150 bolas",
          "1h Arborismo + Paintball Cri. 200 bolas",
          "1h Escalada + Paintball Cri. 150 bolas",
          "1h Escalada + Paintball Cri. 200 bolas",
        ],
      },
      {
        title: "Paintball Adultos (+13 anos)",
        options: [
          "Paintball Adu. 100 bolas (disponível até 2025)",
          "Paintball Adu. 150 bolas",
          "Paintball Adu. 200 bolas",
          "Paintball Adu. 300 bolas",
          "Paintball Adu. 400 bolas",
          "1h Arborismo + Paintball Adu. 150 bolas",
          "1h Arborismo + Paintball Adu. 200 bolas",
          "1h Escalada + Paintball Adu. 150 bolas",
          "1h Escalada + Paintball Adu. 200 bolas",
        ],
      },
      {
        title: "Corporate & Personalizados",
        options: ["Evento corporativo", "Combo personalizado"],
      },
    ],
    lunchOptions: [
      "Inclui lanche do FunPark",
      "Levo o meu próprio lanche",
      "Ainda indeciso",
    ],
    footer: {
      heading: "FunPark São João",
      tagline: "Aventura, natureza e segurança a poucos minutos de Lisboa.",
      connect: "Contactos",
      rights: "Todos os direitos reservados",
    },
  },
  en: {
    localeLabel: "English",
    mailSubject: "FunPark booking request",
    navLinks: [
      { label: "About the Park", href: "#sobre" },
      { label: "Activities", href: "#atividades" },
      { label: "How it Works", href: "#experiencia" },
      { label: "Bookings", href: "#reservas" },
    ],
    navSubtopics: {
      "#sobre": [
        { label: "Park overview", href: "/sobre-o-parque" },
        { label: "Opening hours & contact", href: "#horarios" },
        { label: "Pricing", href: "/precario" },
        { label: "Find us", href: "#como-chegar" },
        { label: "Gallery", href: "#galeria" },
      ],
    },
    hero: {
      badge: "Discover your wild side",
      title: "Adventure among trees, giant zip-lines and unforgettable parties in Caparica.",
      subtitle:
        "FunPark São João blends canopy courses, paintball, playgrounds and outdoor events with the energy of nature. Plan the next experience for your family, class or team.",
      chips: ["Certified monitors", "Natural environment", "Perfect for groups"],
      ctas: {
        primary: "Reserve now",
        secondary: "Chat on WhatsApp",
        tertiary: "Explore activities",
      },
      whatsappMessage: "Hi FunPark! I'd love to know more about your activities.",
      moments: [
        {
          image: `${baseMediaUrl}/image2.png`,
          title: "Family canopy course",
    description:
            "Suspended routes among pine trees with tailored briefings for every age group.",
  },
  {
          image: `${baseMediaUrl}/imagens/arborimo_3.jpg`,
          title: "Guided by monitors",
    description:
            "The FunPark team is by your side at every obstacle so you can just enjoy the ride.",
  },
  {
          image: `${baseMediaUrl}/image7.png`,
          title: "Zip-lines & thrills",
    description:
            "More than 200 meters of zip-lines and aerial games that boost your group's adrenaline.",
  },
      ],
      phases: {
        badge: "Adventure flow",
        heading: "Three steps to the full FunPark experience.",
        steps: [
  {
            number: "01",
            title: "Briefing & gear",
    description:
              "Receive harnesses, markers or the required material with personalised instructions from our monitors.",
          },
          {
            number: "02",
            title: "Guided course",
            description: "Tackle canopy games, slides, paintball or climbing with our experienced team leading the way.",
          },
          {
            number: "03",
            title: "Celebrate on site",
            description: "Relax in the lounge, add an optional snack and toast with a view over the Caparica woods.",
          },
        ],
      },
    },
    about: {
      badge: "About the park",
      title: "An adventure hideaway in the heart of Caparica nature.",
      paragraphs: [
        "FunPark is an adventure park in Almada that gives Greater Lisbon residents outdoor activities surrounded by nature.",
        "Located on a private estate with eight hectares of woods and minutes away from the beaches of Costa da Caparica, FunPark is a green haven by the sea. Families and groups enjoy a protected environment with generous parking and easy access.",
        "All year round we welcome school outings, families, companies and curious adventurers. Our indoor and outdoor infrastructures guarantee safe experiences even on rainy days.",
      ],
      highlights: [
        {
          title: "Canopy courses",
          description:
            "Tree-top routes with games, suspended bridges, nets and zip-lines. Every session includes a safety briefing, certified harness and monitor support.",
        },
        {
          title: "Inflatables & playground",
          description:
            "Giant inflatables and play structures inside the dome so the fun keeps going whatever the weather.",
        },
        {
          title: "Paintball",
          description:
            "Markers adapted for kids (8+) and adults (13+). Full equipment with mask, suit, monitor and paintballs for different scenarios.",
        },
        {
          title: "Climbing walls",
          description:
            "37 walls and structures up to 8 metres high with challenges for every level. A pioneering set-up in Portugal.",
        },
        {
          title: "Corporate events",
          description:
            "250 m² of covered spaces, optional catering and tailor-made team-building programs for companies.",
        },
        {
          title: "Themed parties",
          description:
            "Fully managed birthday parties with invites, dedicated monitors and a reserved table on the terrace.",
        },
        {
          title: "School programs",
          description:
            "Educational experiences for schools with age-appropriate circuits, scheduled breaks and educational guidance.",
        },
      ],
      highlightLabel: "Highlight",
      footer: "Spacious parking · Easy access · Certified monitors",
    },
    highlightStats: [
      {
        label: "4 progressive circuits",
        description: "Yellow, green, blue and red routes for every confidence level.",
      },
      {
        label: "800 m² indoors",
        description: "Giant playground dome with inflatables and climbing walls.",
      },
      {
        label: "200+ metres of zip-lines",
        description: "Glide above Caparica pine trees with certified equipment.",
      },
    ],
    activitiesSection: {
      badge: "Signature activities",
      title: "Pick your challenge and we take care of the rest.",
      description:
        "Every experience includes a safety briefing, certified equipment and constant support from FunPark monitors.",
      menuTitle: "Select an activity",
      menuSubtitle: "Explore each experience in detail",
    },
    activities: [
      {
        slug: "arborismo",
        name: "Tree-top adventure",
        description:
          "Suspended bridges, nets and Tarzan swings ending in a panoramic zip-line with certified monitors.",
        image: `${baseMediaUrl}/imagens/arborimo_2.jpg`,
        alt: "Families enjoying the canopy course",
        details: ["Ages 5+", "90-minute session", "Harness included"],
      },
      {
        slug: "paintball",
        name: "Outdoor paintball",
        description:
          "Natural battle arenas with towers, trenches and missions guided by FunPark referees.",
        image: `${baseMediaUrl}/imagens/sobre_paintball_new.png`,
        alt: "Paintball team geared up",
        details: ["Kids 8+ and adults", "Full equipment", "150-400 paintballs"],
      },
      {
        slug: "playground",
        name: "Igloo tent playground",
        description:
          "Indoor inflatables, slides and cooperative games perfect for younger adventurers.",
        image: `${baseMediaUrl}/imagens/fun_parque_playground_300x400.png`,
        alt: "Children playing inside the FunPark playground",
        details: ["Ages 4-10", "Indoor venue", "Monitors included"],
      },
      {
        slug: "trampolim",
        name: "Trampolines & jump tower",
        description:
          "Jump from 3 to 6 metre towers onto airbags and learn new tricks on professional trampolines.",
        image: `${baseMediaUrl}/image6.jpg`,
        alt: "Participant jumping from the FunPark tower",
        details: ["Indoor facility", "Coached session", "Go-karts break"],
      },
      {
        slug: "escalada",
        name: "Indoor climbing",
        description:
          "Colourful 8 m walls with auto-belay systems, themed obstacles and instructors supporting every climb.",
        image: "http://www.funparquesaojoao.pt/images/4.jpg",
        alt: "Climber on the FunPark indoor wall",
        details: [
          "60-minute sessions plus technical briefing",
          "Harness, helmet and auto-belay included",
          "Climate-controlled arena with lounge seating",
        ],
      },
      {
        slug: "aniversarios",
        name: "Birthday parties",
        description:
          "2h30 celebrations with dedicated hosts, invitations, optional FunPark snack and custom themes.",
        image: `${baseMediaUrl}/imagens/aniversarios_1.png`,
        alt: "Birthday celebration at FunPark",
        details: ["Invites included", "Birthday child free*", "Snack optional"],
      },
      {
        slug: "eventos",
        name: "Corporate events",
        description:
          "Team building, incentives and outdoor meetings designed for companies and organisations.",
        image: `${baseMediaUrl}/image6.png`,
        alt: "Team building activity at FunPark",
        details: ["Custom programmes", "Private areas", "Catering options"],
      },
    ],
    experience: {
      badge: "How it works",
      title: "Simple booking, memorable experience.",
      description:
        "Our staff is with you in every stage, from the first message to the final celebratory moment at the park.",
      steps: [
        {
          number: "01",
          title: "Choose the adventure",
          description: "Select the activity, participant numbers and ideal date for your group.",
        },
        {
          number: "02",
          title: "Reserve in minutes",
          description: "Call, message or email us to confirm availability in real time.",
        },
        {
          number: "03",
          title: "Briefing & gear",
          description: "Receive detailed instructions plus harnesses, markers or any required gear with full safety.",
        },
        {
          number: "04",
          title: "Time for adrenaline",
          description: "FunPark monitors accompany every activity so you can focus purely on the thrills.",
        },
      ],
    },
    gallery: {
      badge: "Gallery",
      title: "A glimpse into FunPark adventures.",
      instructions: "Swipe to discover more",
      images: [
        { src: "http://www.funparquesaojoao.pt/images/7.jpg", alt: "" },
        { src: "http://www.funparquesaojoao.pt/images/6.jpg", alt: "" },
        { src: "http://www.funparquesaojoao.pt/images/5.jpg", alt: "" },
        { src: "http://www.funparquesaojoao.pt/images/3.jpg", alt: "" },
      ],
    },
    schedule: {
      badge: "Schedule & contact",
      title: "Seasonal hours designed around your free time.",
      items: [
        {
          season: "Winter · 1 October to 31 March",
          details: "Wednesday to Sunday · 10am–6pm",
          note: "Bookings required to secure your slot.",
        },
        {
          season: "Summer · 1 April to 30 September",
          details: "Tuesday to Sunday · 10am–7pm",
          note: "Open on public holidays and school breaks.",
        },
      ],
      contactTitle: "Speak directly with the FunPark team",
      phoneLabel: "Phone",
      emailLabel: "Email",
      locationLabel: "Location",
      mapLinkText: "View on Google Maps",
      schoolsNote: "School and corporate packages with tailored quotes.",
    },
    pricing: {
      badge: "Pricing",
      title: "Options for every type of group.",
      description:
        "Browse the starting prices below and open the dedicated pricing page to review every package in detail.",
      items: [
        {
          label: "Tree-top adventure · from €18 per participant",
          description: "Briefing, harness and access to four progressive circuits included.",
        },
        {
          label: "Paintball · packs from €20",
          description: "Marker, mask, suit and paintballs included with instructor supervision.",
        },
        {
          label: "Birthday parties · from €220",
          description: "2h30 of activities with monitors, digital invites and reserved table for the snack.",
        },
      ],
      note: "Reach out for detailed quotes and group discounts.",
      ctaLabel: "Open full pricing",
      ctaHref: "/precario",
    },
    directions: {
      badge: "How to get there",
      title: "We are only minutes away from Lisbon.",
      intro:
        "FunPark São João is in São João da Caparica, with quick access via the A33 or IC20 and free on-site parking.",
      options: [
        {
          label: "By car",
          description: "Take the Caparica/S. João exit, follow the FunPark signs and enjoy our dedicated parking area.",
        },
        {
          label: "Public transport",
          description: "Buses 161/153 from Lisbon (Praça de Espanha) stop in São João da Caparica, a 5-minute walk away.",
        },
        {
          label: "GPS coordinates",
          description: "38.635260, -9.223410 — perfect for your favourite navigation app.",
        },
      ],
      mapCta: "Open route in Google Maps",
    },
    reservation: {
      badge: "Book in a few steps",
      title: "Schedule your next FunPark adventure.",
      description:
        "Fill in the form and our team will reply with a personalised proposal. Add as many details as possible so we can tailor the experience to your group.",
      checklist: [
        "Tell us the activity and preferred date.",
        "Share how many adults and kids will join.",
        "Let us know if you want the FunPark snack or if you will bring your own.",
        "Get a fast confirmation by phone or email.",
      ],
      contactHeading: "Prefer to speak now?",
      contactSubheading: "Or send us an email",
      successMessage:
        "Thanks! We've prepared your booking email. Please send it so our team can confirm your reservation.",
      submitText: "Prepare booking email",
      fields: {
        reservationType: {
          label: "Booking type*",
          placeholder: "Select an option",
          mailLabel: "Booking type",
        },
        activity: {
          label: "Activity*",
          placeholder: "Choose an activity",
          mailLabel: "Activity",
        },
        name: {
          label: "Name*",
          placeholder: "Your full name",
          mailLabel: "Name",
        },
        email: {
          label: "Email*",
          placeholder: "you@example.com",
          mailLabel: "Email",
        },
        phone: {
          label: "Phone*",
          placeholder: "+351 ...",
          mailLabel: "Phone",
        },
        date: {
          label: "Preferred date*",
          placeholder: "dd/mm/yyyy",
          mailLabel: "Preferred date",
        },
        adults: {
          label: "Adult participants (>18)*",
          placeholder: "0",
          mailLabel: "Adult participants",
        },
        kids: {
          label: "Younger participants (<18)*",
          placeholder: "0",
          mailLabel: "Younger participants",
        },
        ageRange: {
          label: "Participant age range*",
          fromPlaceholder: "From",
          toPlaceholder: "Until",
          separator: "to",
          mailLabelFrom: "Minimum age",
          mailLabelTo: "Maximum age",
        },
        lunch: {
          label: "Snack option*",
          placeholder: "Select an option",
          mailLabel: "Snack option",
        },
        birthday: {
          label: "Birthday child's name",
          placeholder: "Optional",
          mailLabel: "Birthday child's name",
        },
        notes: {
          label: "Notes / Questions",
          placeholder: "Share extra details, additional birthday kids, special requirements...",
          mailLabel: "Notes",
        },
      },
    },
    reservationTypes: [
      "Birthday party",
      "Friends group",
      "Schools",
      "Corporate / Team building",
      "Other events",
    ],
    activityPackages: [
      {
        title: "Canopy & climbing",
        options: [
          "Canopy course · ages 6+ & 1.05 m",
          "Canopy course · ages 13+ & 1.40 m",
          "Climbing (20–100 kg)",
          "1h canopy +1h climbing",
          "1h climbing +1h trampolines",
        ],
      },
      {
        title: "Trampolines & playground",
        options: [
          "Playground event",
          "1h trampolines +1h canopy",
          "1h trampolines +1h paintball",
          "Playground dome (inflatables)",
        ],
      },
      {
        title: "Kids paintball (8+)",
        options: [
          "Paintball Kids · 100 balls (available until 2025)",
          "Paintball Kids · 150 balls",
          "Paintball Kids · 200 balls",
          "Paintball Kids · 300 balls",
          "Paintball Kids · 400 balls",
          "1h canopy + Paintball Kids · 150 balls",
          "1h canopy + Paintball Kids · 200 balls",
          "1h climbing + Paintball Kids · 150 balls",
          "1h climbing + Paintball Kids · 200 balls",
        ],
      },
      {
        title: "Adult paintball (13+)",
        options: [
          "Paintball Adults · 100 balls (available until 2025)",
          "Paintball Adults · 150 balls",
          "Paintball Adults · 200 balls",
          "Paintball Adults · 300 balls",
          "Paintball Adults · 400 balls",
          "1h canopy + Paintball Adults · 150 balls",
          "1h canopy + Paintball Adults · 200 balls",
          "1h climbing + Paintball Adults · 150 balls",
          "1h climbing + Paintball Adults · 200 balls",
        ],
      },
      {
        title: "Corporate & custom",
        options: ["Corporate event", "Custom combo"],
      },
    ],
    lunchOptions: [
      "Includes FunPark snack",
      "I'll bring my own snack",
      "Still deciding",
    ],
    footer: {
      heading: "FunPark São João",
      tagline: "Adventure, nature and safety just minutes from Lisbon.",
      connect: "Get in touch",
      rights: "All rights reserved",
    },
  },
  es: {
    localeLabel: "Español",
    mailSubject: "Solicitud de reserva FunPark",
    navLinks: [
      { label: "Sobre el parque", href: "#sobre" },
      { label: "Actividades", href: "#atividades" },
      { label: "Cómo funciona", href: "#experiencia" },
      { label: "Reservas", href: "#reservas" },
    ],
    navSubtopics: {
      "#sobre": [
        { label: "Horarios y contacto", href: "#horarios" },
        { label: "Precios", href: "#precario" },
        { label: "Cómo llegar", href: "#como-chegar" },
        { label: "Galería", href: "#galeria" },
      ],
    },
    hero: {
      badge: "Descubre tu lado salvaje",
      title: "Aventura entre árboles, tirolinas gigantes y fiestas inolvidables en Caparica.",
      subtitle:
        "FunPark São João combina arborismo, paintball, playground y eventos al aire libre con la energía de la naturaleza. Organiza la próxima experiencia para tu familia, clase o equipo.",
      chips: ["Monitores certificados", "Entorno natural", "Ideal para grupos"],
      ctas: {
        primary: "Reservar ahora",
        secondary: "Hablar por WhatsApp",
        tertiary: "Ver actividades",
      },
      whatsappMessage: "¡Hola FunPark! Me gustaría saber más sobre las actividades.",
      moments: [
        {
          image: `${baseMediaUrl}/image2.png`,
          title: "Arborismo en familia",
          description:
            "Recorridos suspendidos entre pinos con explicaciones adaptadas a cada edad.",
        },
        {
          image: `${baseMediaUrl}/imagens/arborimo_3.jpg`,
          title: "Monitores atentos",
          description:
            "El equipo FunPark te acompaña en cada paso para que solo te concentres en la diversión.",
        },
        {
          image: `${baseMediaUrl}/image7.png`,
          title: "Tirolinas y emoción",
          description:
            "Más de 200 metros de tirolinas y juegos aéreos que disparan la adrenalina del grupo.",
        },
      ],
      phases: {
        badge: "Etapas de la aventura",
        heading: "Tres pasos para vivir FunPark al máximo.",
        steps: [
          {
            number: "01",
            title: "Briefing y equipamiento",
            description:
              "Recibe arnés, marcadora o el material necesario con instrucciones personalizadas de nuestros monitores.",
          },
          {
            number: "02",
            title: "Recorrido guiado",
            description:
              "Supera juegos de arborismo, tirolinas, paintball o escalada guiado por nuestro equipo experto.",
          },
          {
            number: "03",
            title: "Celebración en el parque",
            description:
              "Relájate en la zona lounge, añade un tentempié opcional y brinda con vistas al bosque de Caparica.",
          },
        ],
      },
    },
    about: {
      badge: "Sobre el parque",
      title: "Un refugio de aventura en plena naturaleza de Caparica.",
      paragraphs: [
        "FunPark es un parque de aventura situado en Almada que ofrece a los habitantes del área metropolitana de Lisboa actividades deportivas en contacto con la naturaleza.",
        "Ubicado en una finca privada de 8 hectáreas de bosque y a pocos minutos de las playas de la Costa de Caparica, FunPark es un pulmón verde junto al mar. Familias y grupos disfrutan de un entorno protegido con amplio aparcamiento y fácil acceso.",
        "Durante todo el año recibimos excursiones escolares, familias, empresas y aventureros curiosos. Nuestras infraestructuras cubiertas y al aire libre permiten experiencias seguras incluso en días de lluvia.",
      ],
      highlights: [
        {
          title: "Arborismo",
          description:
            "Recorridos entre árboles con juegos, puentes suspendidos, redes y tirolinas. Cada sesión incluye briefing de seguridad, arnés certificado y monitores de apoyo.",
        },
        {
          title: "Hinchables y playground",
          description:
            "Gran variedad de hinchables y estructuras lúdicas dentro del iglú gigante, asegurando diversión todo el año.",
        },
        {
          title: "Paintball",
          description:
            "Marcadoras adaptadas para niños (8+) y adultos (13+). Equipo completo con máscara, mono, monitor y bolas de pintura para distintos escenarios.",
        },
        {
          title: "Escalada",
          description:
            "37 paredes y estructuras de hasta 8 metros con desafíos para todos los niveles. Un montaje pionero en Portugal.",
        },
        {
          title: "Eventos corporativos",
          description:
            "Áreas cubiertas de 250 m², catering opcional y programas de team building personalizados para empresas.",
        },
        {
          title: "Fiestas temáticas",
          description:
            "Organización completa de fiestas de cumpleaños con invitaciones, monitores dedicados y mesa reservada.",
        },
        {
          title: "Programas escolares",
          description:
            "Experiencias educativas para colegios, con circuitos adaptados a la edad, pausas programadas y acompañamiento pedagógico.",
        },
      ],
      highlightLabel: "Destacado",
      footer: "Aparcamiento amplio · Acceso fácil · Monitores certificados",
    },
    highlightStats: [
      {
        label: "4 circuitos progresivos",
        description: "Recorridos amarillo, verde, azul y rojo para todos los niveles.",
      },
      {
        label: "800 m² cubiertos",
        description: "Playground gigante, hinchables y paredes de escalada bajo techo.",
      },
      {
        label: "+200 metros de tirolina",
        description: "Vuela sobre los pinares de Caparica con equipo certificado.",
      },
    ],
    activitiesSection: {
      badge: "Actividades principales",
      title: "Elige tu desafío y nosotros nos encargamos del resto.",
      description:
        "Todas las experiencias incluyen briefing de seguridad, equipamiento homologado y la supervisión continua de los monitores FunPark.",
      menuTitle: "Menú de aventuras",
      menuSubtitle: "Igual que en el sitio original, pulsa para ir directo a cada actividad:",
    },
    activities: [
      {
        slug: "arborismo",
        name: "Arborismo multinivel",
        description:
          "Cruza puentes suspendidos, redes y saltos de Tarzán en un circuito completo que termina en tirolina.",
        image: `${baseMediaUrl}/imagens/arborimo_2.jpg`,
        alt: "Participantes en el circuito de arborismo",
        details: ["Mayores de 6 años", "Sesiones de 90 minutos", "Monitores dedicados"],
      },
      {
        slug: "paintball",
        name: "Paintball niños y adultos",
        description:
          "Escenarios naturales con torres, parapetos y misiones guiadas para grupos de todas las edades.",
        image: `${baseMediaUrl}/imagens/sobre_paintball_new.png`,
        alt: "Equipo listo para jugar paintball",
        details: ["Marcadoras adaptadas", "Equipo incluido", "Partidas guiadas"],
      },
      {
        slug: "trampolim",
        name: "Trampolines y torre de saltos",
        description:
          "Plataformas interiores de 3 a 6 metros con aterrizajes en airbags y trampolines profesionales.",
        image: `${baseMediaUrl}/image6.jpg`,
        alt: "Participante saltando desde la torre FunPark",
        details: ["Actividad indoor", "Sesión monitorizada", "Pausa con karts"],
      },
      {
        slug: "escalada",
        name: "Escalada indoor",
        description:
          "Muros modulares de hasta 8 m con auto-belay, retos temáticos y monitores FunPark en un espacio climatizado.",
        image: "http://www.funparquesaojoao.pt/images/4.jpg",
        alt: "Participante escalando en el muro indoor del FunPark",
        details: [
          "Sesiones de 60 minutos con briefing técnico",
          "Arnés, casco y auto-belay incluidos",
          "Arena cubierta con zona para acompañantes",
        ],
      },
      {
        slug: "playground",
        name: "Playground e hinchables",
        description:
          "Grandes estructuras dentro del iglú cubierto con toboganes, túneles y piscinas de bolas.",
        image: `${baseMediaUrl}/imagens/fun_parque_playground_300x400.png`,
        alt: "Estructuras interiores del playground FunPark",
        details: ["Ideal para días de lluvia", "Espacio cubierto", "Para varias edades"],
      },
      {
        slug: "aniversarios",
        name: "Fiestas de cumpleaños",
        description:
          "Programas de 2h30 con actividad principal, monitores dedicados, invitaciones y merienda opcional FunPark.",
        image: `${baseMediaUrl}/imagens/aniversarios_1.png`,
        alt: "Niños celebrando un cumpleaños en FunPark",
        details: ["Invitaciones incluidas", "Cumpleañero gratis*", "Merienda opcional"],
      },
      {
        slug: "eventos",
        name: "Eventos corporativos",
        description:
          "Team building, incentivos y celebraciones empresariales diseñadas a medida en contacto con la naturaleza.",
        image: `${baseMediaUrl}/image6.png`,
        alt: "Equipo corporativo en actividad de grupo",
        details: ["Programas personalizados", "Espacios privados", "Opciones de catering"],
      },
    ],
    experience: {
      badge: "Cómo funciona",
      title: "Reserva sencilla, experiencia inolvidable.",
      description:
        "En cada etapa contarás con el apoyo de nuestro equipo, desde el primer contacto hasta el brindis final en el parque.",
      steps: [
        {
          number: "01",
          title: "Elige la aventura",
          description: "Define la actividad, el número de participantes y la fecha ideal para tu grupo.",
        },
        {
          number: "02",
          title: "Reserva en minutos",
          description: "Contáctanos por teléfono, WhatsApp o correo y confirma la disponibilidad.",
        },
        {
          number: "03",
          title: "Briefing y equipamiento",
          description:
            "Recibe instrucciones detalladas, arnés, marcadora o el material necesario con total seguridad.",
        },
        {
          number: "04",
          title: "Hora de la adrenalina",
          description: "Los monitores FunPark acompañan cada actividad para garantizar diversión sin preocupaciones.",
        },
      ],
    },
    gallery: {
      badge: "Galería",
      title: "Un vistazo a las aventuras FunPark.",
      instructions: "Desliza para ver más",
      images: [
        { src: "http://www.funparquesaojoao.pt/images/7.jpg", alt: "" },
        { src: "http://www.funparquesaojoao.pt/images/6.jpg", alt: "" },
        { src: "http://www.funparquesaojoao.pt/images/5.jpg", alt: "" },
        { src: "http://www.funparquesaojoao.pt/images/3.jpg", alt: "" },
      ],
    },
    schedule: {
      badge: "Horarios y contacto",
      title: "Horario de temporada pensado para tu tiempo libre.",
      items: [
        {
          season: "Invierno · 1 de octubre al 31 de marzo",
          details: "Miércoles a domingo · 10h a 18h",
          note: "Reserva obligatoria para garantizar plaza.",
        },
        {
          season: "Verano · 1 de abril al 30 de septiembre",
          details: "Martes a domingo · 10h a 19h",
          note: "Abierto en festivos y vacaciones escolares.",
        },
      ],
      contactTitle: "Habla directamente con el equipo FunPark",
      phoneLabel: "Teléfono",
      emailLabel: "Correo electrónico",
      locationLabel: "Ubicación",
      mapLinkText: "Ver en Google Maps",
      schoolsNote: "Reservas para colegios y empresas con paquetes personalizados.",
    },
    pricing: {
      badge: "Precios",
      title: "Opciones para cada tipo de grupo.",
      description:
        "Consulta los precios iniciales y abre la página dedicada para ver todas las tarifas y combinaciones al detalle.",
       items: [
         {
           label: "Arborismo · desde 18€ por participante",
           description: "Incluye briefing, arnés y acceso a cuatro circuitos progresivos.",
         },
         {
           label: "Paintball · packs desde 20€",
           description: "Marcadora, máscara, mono y bolas incluidas con monitor.",
         },
         {
           label: "Cumpleaños · desde 220€",
           description: "2h30 de actividades con monitores, invitaciones digitales y mesa reservada para la merienda.",
         },
       ],
       note: "Contacta con nosotros para presupuestos detallados y descuentos para grupos.",
       ctaLabel: "Abrir tarifas completas",
       ctaHref: "/precario",
     },
    directions: {
      badge: "Cómo llegar",
      title: "A solo unos minutos de Lisboa.",
      intro:
        "FunPark São João está en São João da Caparica, con acceso rápido por la A33 o IC20 y aparcamiento gratuito.",
      options: [
        {
          label: "En coche",
          description: "Toma la salida Caparica/S. João, sigue las señales FunPark y aprovecha nuestro aparcamiento dedicado.",
        },
        {
          label: "Transporte público",
          description: "Autobuses 161/153 desde Lisboa (Praça de Espanha) con parada en São João da Caparica, a 5 minutos a pie.",
        },
        {
          label: "Coordenadas GPS",
          description: "38.635260, -9.223410 — perfectas para introducir en tu navegador favorito.",
        },
      ],
      mapCta: "Ver ruta en Google Maps",
    },
    reservation: {
      badge: "Reserva en pocos pasos",
      title: "Agenda ya tu próxima aventura FunPark.",
      description:
        "Completa el formulario y nuestro equipo responderá con una propuesta personalizada. Añade la mayor cantidad de detalles para adaptar la experiencia a tu grupo.",
      checklist: [
        "Indica la actividad y la fecha deseada.",
        "Cuéntanos cuántos adultos y niños participan.",
        "Elige si prefieres merienda FunPark o si traerás la tuya.",
        "Recibe confirmación rápida por teléfono o e-mail.",
      ],
      contactHeading: "¿Prefieres hablar ahora?",
      contactSubheading: "O envíanos un e-mail",
      successMessage:
        "¡Gracias! Hemos preparado tu e-mail de reserva. Envíalo para que nuestro equipo confirme la disponibilidad.",
      submitText: "Preparar e-mail de reserva",
      fields: {
        reservationType: {
          label: "Tipo de reserva*",
          placeholder: "Selecciona una opción",
          mailLabel: "Tipo de reserva",
        },
        activity: {
          label: "Actividad*",
          placeholder: "Elige la actividad",
          mailLabel: "Actividad",
        },
        name: {
          label: "Nombre*",
          placeholder: "Tu nombre completo",
          mailLabel: "Nombre",
        },
        email: {
          label: "Correo electrónico*",
          placeholder: "nombre@ejemplo.com",
          mailLabel: "Correo electrónico",
        },
        phone: {
          label: "Teléfono*",
          placeholder: "+351 ...",
          mailLabel: "Teléfono",
        },
        date: {
          label: "Fecha deseada*",
          placeholder: "dd/mm/aaaa",
          mailLabel: "Fecha deseada",
        },
        adults: {
          label: "Participantes adultos (>18)*",
          placeholder: "0",
          mailLabel: "Participantes adultos",
        },
        kids: {
          label: "Participantes menores (<18)*",
          placeholder: "0",
          mailLabel: "Participantes menores",
        },
        ageRange: {
          label: "Rango de edades*",
          fromPlaceholder: "Desde",
          toPlaceholder: "Hasta",
          separator: "a",
          mailLabelFrom: "Edad mínima",
          mailLabelTo: "Edad máxima",
        },
        lunch: {
          label: "Con merienda*",
          placeholder: "Selecciona una opción",
          mailLabel: "Opción de merienda",
        },
        birthday: {
          label: "Nombre del cumpleañero",
          placeholder: "Opcional",
          mailLabel: "Nombre del cumpleañero",
        },
        notes: {
          label: "Observaciones / Preguntas",
          placeholder: "Share extra details, additional birthday kids, special requirements...",
          mailLabel: "Observaciones",
        },
      },
    },
    reservationTypes: [
      "Fiesta de cumpleaños",
      "Grupo de amigos",
      "Colegios",
      "Empresas / Team building",
      "Otros eventos",
    ],
    activityPackages: [
      {
        title: "Arborismo y escalada",
        options: [
          "Arborismo · mayores de 6 años y 1,05 m",
          "Arborismo · mayores de 13 años y 1,40 m",
          "Escalade (+20 kg, máximo 100 kg)",
          "1h arborismo +1h escalade",
          "1h escalade +1h trampolines",
        ],
      },
      {
        title: "Trampolines y playground",
        options: [
          "Evento playground",
          "1h trampolines +1h arborismo",
          "1h trampolines +1h paintball",
          "Dôme playground (estructuras gonflables)",
        ],
      },
      {
        title: "Paintball niños (+8)",
        options: [
          "Paintball niños · 100 bolas (disponible hasta 2025)",
          "Paintball niños · 150 bolas",
          "Paintball niños · 200 bolas",
          "Paintball niños · 300 bolas",
          "Paintball niños · 400 bolas",
          "1h arborismo + Paintball niños · 150 bolas",
          "1h arborismo + Paintball niños · 200 bolas",
          "1h escalade + Paintball niños · 150 bolas",
          "1h escalade + Paintball niños · 200 bolas",
        ],
      },
      {
        title: "Paintball adultes (13+)",
        options: [
          "Paintball adultes · 100 balls (disponible hasta 2025)",
          "Paintball adultes · 150 balls",
          "Paintball adultes · 200 balls",
          "Paintball adultes · 300 balls",
          "Paintball adultes · 400 balls",
          "1h arborismo + Paintball adultes · 150 balls",
          "1h arborismo + Paintball adultes · 200 balls",
          "1h escalade + Paintball adultes · 150 balls",
          "1h escalade + Paintball adultes · 200 balls",
        ],
      },
      {
        title: "Corporate y personalizados",
        options: ["Evento corporativo", "Combo personalizado"],
      },
    ],
    lunchOptions: [
      "Collation FunPark incluida",
      "Llevo mi propia merienda",
      "Aún no lo sé",
    ],
    footer: {
      heading: "FunPark São João",
      tagline: "Aventura, naturaleza y seguridad a pocos minutos de Lisboa.",
      connect: "Contacto",
      rights: "Todos los derechos reservados",
    },
  },
  fr: {
    localeLabel: "Français",
    mailSubject: "Demande de réservation FunPark",
    navLinks: [
      { label: "À propos du parc", href: "#sobre" },
      { label: "Activités", href: "#atividades" },
      { label: "Comment ça marche", href: "#experiencia" },
      { label: "Horaires", href: "#horaires" },
      { label: "Galerie", href: "#galerie" },
      { label: "Réservations", href: "#reservations" },
    ],
    navSubtopics: {
      "#sobre": [
        { label: "Horaires et contact", href: "#horarios" },
        { label: "Tarifs", href: "#precario" },
        { label: "Comment venir", href: "#como-chegar" },
        { label: "Galerie", href: "#galeria" },
      ],
    },
    hero: {
      badge: "Réveille ton esprit aventure",
      title: "Aventure entre les arbres, tyroliennes géantes et fêtes inoubliables à Caparica.",
      subtitle:
        "FunPark São João associe parcours acrobatiques, paintball, playground et événements en plein air avec toute l'énergie de la nature. Prépare la prochaine expérience de ta famille, de ta classe ou de ton équipe.",
      chips: ["Moniteurs certifiés", "Cadre naturel", "Parfait pour les groupes"],
      ctas: {
        primary: "Réserver maintenant",
        secondary: "Discuter sur WhatsApp",
        tertiary: "Découvrir les activités",
      },
      whatsappMessage: "Bonjour FunPark ! J'aimerais en savoir plus sur vos activités.",
      moments: [
        {
          image: `${baseMediaUrl}/image2.png`,
          title: "Parcours en famille",
          description:
            "Des itinéraires suspendus entre les pins avec un briefing adapté à chaque âge.",
        },
        {
          image: `${baseMediaUrl}/imagens/arborimo_3.jpg`,
          title: "Encadrement attentif",
          description:
            "Les équipes FunPark veillent à chaque étape pour que vous profitiez pleinement de l'expérience.",
        },
        {
          image: `${baseMediaUrl}/image7.png`,
          title: "Tyroliennes et sensations",
          description:
            "Plus de 200 mètres de tyroliennes et de jeux aériens pour faire monter l'adrénaline.",
        },
      ],
      phases: {
        badge: "Déroulement de l'aventure",
        heading: "Trois étapes pour vivre l'expérience FunPark.",
        steps: [
          {
            number: "01",
            title: "Briefing et équipement",
            description:
              "Recevez harnais, lanceur ou matériel nécessaire avec des consignes personnalisées de nos moniteurs.",
          },
          {
            number: "02",
            title: "Parcours guidé",
            description:
              "Affrontez les jeux suspendus, tyroliennes, paintball ou escalade guidés par notre équipe expérimentée.",
          },
          {
            number: "03",
            title: "Célébration sur place",
            description:
              "Détendez-vous au lounge, ajoutez une collation optionnelle et trinquez face à la forêt de Caparica.",
          },
        ],
      },
    },
    about: {
      badge: "À propos du parc",
      title: "Un refuge d'aventure au cœur de la nature de Caparica.",
      paragraphs: [
        "FunPark est un parc d'aventure situé à Almada qui offre aux habitants de la région de Lisbonne des activités sportives en pleine nature.",
        "Installé sur un domaine privé de 8 hectares de forêt, à quelques minutes des plages de la Costa da Caparica, FunPark est un poumon vert au bord de la mer. Familles et groupes profitent d'un environnement protégé, avec un vaste parking et un accès facile.",
        "Toute l'année nous accueillons sorties scolaires, familles, entreprises et aventuriers curieux. Nos infrastructures couvertes et extérieures garantissent des expériences sûres même les jours de pluie.",
      ],
      highlights: [
        {
          title: "Parcours acrobatiques",
          description:
            "Des itinéraires entre les arbres avec jeux, ponts suspendus, filets et tyroliennes. Chaque session comprend un briefing sécurité, un harnais certifié et un accompagnement permanent.",
        },
        {
          title: "Structures gonflables & playground",
          description:
            "De nombreux jeux gonflables et structures ludiques sous le dôme géant, pour s'amuser toute l'année.",
        },
        {
          title: "Paintball",
          description:
            "Lanceurs adaptés aux enfants (8+) et aux adultes (13+). Équipement complet avec masque, combinaison, moniteur et billes de peinture pour différents scénarios.",
        },
        {
          title: "Escalade",
          description:
            "37 murs et structures jusqu'à 8 mètres avec des défis pour tous les niveaux. Un dispositif pionnier au Portugal.",
        },
        {
          title: "Événements d'entreprise",
          description:
            "Espaces couverts de 250 m², catering optionnel et programmes de team building personnalisés.",
        },
        {
          title: "Fêtes à thème",
          description:
            "Organisation complète des anniversaires avec invitations, moniteurs dédiés et table réservée.",
        },
        {
          title: "Programmes scolaires",
          description:
            "Expériences éducatives pour les écoles, avec circuits adaptés à l'âge, pauses programmées et acompagnement pédagogique.",
        },
      ],
      highlightLabel: "À l'honneur",
      footer: "Parking spacieux · Accès facile · Moniteurs certifiés",
    },
    highlightStats: [
      {
        label: "4 circuits progressifs",
        description: "Parcours jaune, vert, bleu et rouge pour tous les niveaux.",
      },
      {
        label: "800 m² couverts",
        description: "Playground géant, structures gonflables et murs d'escalade sous un dôme.",
      },
      {
        label: "+200 mètres de tyroliennes",
        description: "Planez au-dessus des pins de Caparica avec un équipement certifié.",
      },
    ],
    activitiesSection: {
      badge: "Activités phares",
      title: "Choisissez votre défi, nous nous occupons du reste.",
      description:
        "Chaque expérience inclut un briefing sécurité, un équipement homologué et l'accompagnement constant des moniteurs FunPark.",
      menuTitle: "Menu d'aventures",
      menuSubtitle: "Comme sur le site original, cliquez pour accéder directement à chaque activité :",
    },
    activities: [
      {
        slug: "arborismo",
        name: "Parcours acrobatique multi-niveaux",
        description:
          "Ponts suspendus, filets et tyrolienne panoramique avec accompagnement permanent de nos moniteurs.",
        image: `${baseMediaUrl}/imagens/arborimo_2.jpg`,
        alt: "Participants sur le parcours acrobatique du FunPark",
        details: ["À partir de 6 ans", "Session de 90 minutes", "Harnais inclus"],
      },
      {
        slug: "paintball",
        name: "Paintball enfants & adultes",
        description:
          "Scénarios naturels avec tours, obstacles et missions encadrées pour tous les niveaux.",
        image: `${baseMediaUrl}/imagens/sobre_paintball_new.png`,
        alt: "Équipe prête pour une partie de paintball",
        details: ["Kids 8+ et adultes", "Équipement complet", "150 à 400 billes"],
      },
      {
        slug: "trampolim",
        name: "Trampolines & tour de saut",
        description:
          "Plateformes intérieures de 3 à 6 mètres et trampolines professionnels avec réceptions en airbags.",
        image: `${baseMediaUrl}/image6.jpg`,
        alt: "Participant sur la tour de saut FunPark",
        details: ["Activité indoor", "Encadrement dédié", "Pause karts"],
      },
      {
        slug: "escalada",
        name: "Escalade indoor",
        description:
          "Murs modulaires jusqu'à 8 m avec auto-belay, obstacles thématiques et encadrement FunPark dans une arène climatisée.",
        image: "http://www.funparquesaojoao.pt/images/4.jpg",
        alt: "Grimpeur sur le mur indoor du FunPark",
        details: [
          "Sessions de 60 minutes avec briefing technique",
          "Harnais, casque et auto-belay fournis",
          "Espace indoor avec zone détente pour accompagnants",
        ],
      },
      {
        slug: "playground",
        name: "Playground & structures gonflables",
        description:
          "Grand dôme couvert avec toboggans, tunnels et jeux coopératifs pour les plus jeunes.",
        image: `${baseMediaUrl}/imagens/fun_parque_playground_300x400.png`,
        alt: "Structures intérieures du playground FunPark",
        details: ["Idéal par temps de pluie", "Espace couvert", "Animateurs inclus"],
      },
      {
        slug: "aniversarios",
        name: "Anniversaires FunPark",
        description:
          "Fêtes de 2h30 avec activité au choix, invitations, animateurs dédiés et goûter optionnel FunPark.",
        image: `${baseMediaUrl}/imagens/aniversarios_1.png`,
        alt: "Enfants fêtant un anniversaire au FunPark",
        details: ["Invitations incluses", "Enfant fêté invité*", "Goûter optionnel"],
      },
      {
        slug: "eventos",
        name: "Événements d'entreprise",
        description:
          "Team building, incentives et journées corporate sur mesure en plein cœur de la nature.",
        image: `${baseMediaUrl}/image6.png`,
        alt: "Équipe d'entreprise lors d'une activité FunPark",
        details: ["Programmes personnalisés", "Espaces privatifs", "Catering disponible"],
      },
    ],
    experience: {
      badge: "Comment ça marche",
      title: "Réservation simple, expérience mémorable.",
      description:
        "À chaque étape, notre équipe vous accompagne, du premier contact jusqu'au toast final dans le parc.",
      steps: [
        {
          number: "01",
          title: "Choisissez l'aventure",
          description: "Définissez l'activité, le nombre de participants et la date idéale pour votre groupe.",
        },
        {
          number: "02",
          title: "Réservez en quelques minutes",
          description: "Contactez-nous par téléphone, WhatsApp ou e-mail et confirmez la disponibilité.",
        },
        {
          number: "03",
          title: "Briefing & équipement",
          description: "Recevez des instructions détaillées, un harnais, une lanceuse ou le matériel nécessaire en toute sécurité.",
        },
        {
          number: "04",
          title: "Place à l'adrénaline",
          description: "Les moniteurs FunPark encadrent chaque activité pour une expérience sans souci.",
        },
      ],
    },
    gallery: {
      badge: "Galerie",
      title: "Un aperçu des aventures FunPark.",
      instructions: "Faites défiler pour en voir plus",
      images: [
        { src: "http://www.funparquesaojoao.pt/images/7.jpg", alt: "" },
        { src: "http://www.funparquesaojoao.pt/images/6.jpg", alt: "" },
        { src: "http://www.funparquesaojoao.pt/images/5.jpg", alt: "" },
        { src: "http://www.funparquesaojoao.pt/images/3.jpg", alt: "" },
      ],
    },
    schedule: {
      badge: "Horaires et contact",
      title: "Des horaires saisonniers adaptés à votre temps libre.",
      items: [
        {
          season: "Hiver · 1er octobre au 31 mars",
          details: "Du mercredi au dimanche · 10h à 18h",
          note: "Réservation obligatoire pour garantir votre créneau.",
        },
        {
          season: "Été · 1er avril au 30 septembre",
          details: "Du mardi au dimanche · 10h à 19h",
          note: "Ouvert les jours fériés et pendant les vacances scolaires.",
        },
      ],
      contactTitle: "Contactez directement l'équipe FunPark",
      phoneLabel: "Téléphone",
      emailLabel: "E-mail",
      locationLabel: "Localisation",
      mapLinkText: "Voir sur Google Maps",
      schoolsNote: "Forfaits personnalisés pour écoles et entreprises.",
    },
    pricing: {
      badge: "Tarifs",
      title: "Des options pour chaque groupe.",
      description:
        "Découvrez les tarifs de départ ci-dessous et accédez à la page dédiée pour consulter toutes les formules en détail.",
       items: [
         {
           label: "Parcours dans les arbres · à partir de 18€ par participant",
           description: "Briefing, harnais et accès aux quatre circuits progressifs inclus.",
         },
         {
           label: "Paintball · packs dès 20€",
           description: "Lanceur, masque, combinaison et billes inclus avec encadrement.",
         },
         {
           label: "Anniversaires · à partir de 220€",
           description: "2h30 d'activités avec animateurs, invitations numériques et table réservée pour le goûter.",
         },
       ],
       note: "Contactez-nous pour un devis détaillé et des remises groupes.",
       ctaLabel: "Voir tous les tarifs",
       ctaHref: "/precario",
     },
    directions: {
      badge: "Comment venir",
      title: "À seulement quelques minutes de Lisbonne.",
      intro:
        "FunPark São João se situe à São João da Caparica, facilement accessible via l'A33 ou l'IC20 avec parking gratuit sur place.",
      options: [
        {
          label: "En voiture",
          description: "Prenez la sortie Caparica/S. João, suivez la signalisation FunPark et profitez de notre parking dédié.",
        },
        {
          label: "Transports publics",
          description: "Bus 161/153 depuis Lisbonne (Praça de Espanha) avec arrêt à São João da Caparica, à 5 minutes à pied.",
        },
        {
          label: "Coordonnées GPS",
          description: "38.635260, -9.223410 — idéales à saisir dans votre application de navigation préférée.",
        },
      ],
      mapCta: "Ouvrir l'itinéraire sur Google Maps",
    },
    reservation: {
      badge: "Réservez en quelques étapes",
      title: "Planifiez votre prochaine aventure FunPark.",
      description:
        "Remplissez le formulaire et notre équipe vous répondra avec une proposition personnalisée. Donnez le maximum de détails pour adapter l'expérience à votre groupe.",
      checklist: [
        "Indiquez l'activité et la date souhaitée.",
        "Précisez le nombre d'adultes et d'enfants.",
        "Choisissez si vous préférez la collation FunPark ou apporter la vôtre.",
        "Recevez une confirmation rapide par téléphone ou e-mail.",
      ],
      contactHeading: "Vous préférez parler tout de suite ?",
      contactSubheading: "Ou envoyez-nous un e-mail",
      successMessage:
        "Merci ! Nous avons préparé votre e-mail de réservation. Envoyez-le pour que notre équipe confirme votre demande.",
      submitText: "Préparer l'e-mail de réservation",
      fields: {
        reservationType: {
          label: "Type de réservation*",
          placeholder: "Sélectionnez une option",
          mailLabel: "Type de réservation",
        },
        activity: {
          label: "Activité*",
          placeholder: "Choisissez l'activité",
          mailLabel: "Activité",
        },
        name: {
          label: "Nom*",
          placeholder: "Votre nom complet",
          mailLabel: "Nom",
        },
        email: {
          label: "E-mail*",
          placeholder: "nom@exemple.com",
          mailLabel: "E-mail",
        },
        phone: {
          label: "Téléphone*",
          placeholder: "+351 ...",
          mailLabel: "Téléphone",
        },
        date: {
          label: "Date souhaitée*",
          placeholder: "jj/mm/aaaa",
          mailLabel: "Date souhaitée",
        },
        adults: {
          label: "Participants adultes (>18)*",
          placeholder: "0",
          mailLabel: "Participants adultes",
        },
        kids: {
          label: "Participants mineurs (<18)*",
          placeholder: "0",
          mailLabel: "Participants mineurs",
        },
        ageRange: {
          label: "Tranche d'âge des participants*",
          fromPlaceholder: "De",
          toPlaceholder: "À",
          separator: "à",
          mailLabelFrom: "Âge minimum",
          mailLabelTo: "Âge maximum",
        },
        lunch: {
          label: "Collation*",
          placeholder: "Sélectionnez une option",
          mailLabel: "Choix de collation",
        },
        birthday: {
          label: "Nom de l'enfant fêté",
          placeholder: "Optionnel",
          mailLabel: "Nom de l'enfant fêté",
        },
        notes: {
          label: "Remarques / Questions",
          placeholder:
            "Partagez des détails supplémentaires, d'autres enfants fêtés, besoins spécifiques...",
          mailLabel: "Remarques",
        },
      },
    },
    reservationTypes: [
      "Anniversaire",
      "Groupe d'amis",
      "Écoles",
      "Entreprises / Team building",
      "Autres événements",
    ],
    activityPackages: [
      {
        title: "Parcours & escalade",
        options: [
          "Parcours · à partir de 6 ans et 1,05 m",
          "Parcours · à partir de 13 ans et 1,40 m",
          "Escalade (+20 kg, max 100 kg)",
          "1h parcours +1h escalade",
          "1h escalade +1h trampolines",
        ],
      },
      {
        title: "Trampolines & playground",
        options: [
          "Événement playground",
          "1h trampolines +1h parcours",
          "1h trampolines +1h paintball",
          "Dôme playground (structures gonflables)",
        ],
      },
      {
        title: "Paintball enfants (8+)",
        options: [
          "Paintball enfants · 100 billes (disponible jusqu'en 2025)",
          "Paintball enfants · 150 billes",
          "Paintball enfants · 200 billes",
          "Paintball enfants · 300 billes",
          "Paintball enfants · 400 billes",
          "1h parcours + Paintball enfants · 150 billes",
          "1h parcours + Paintball enfants · 200 billes",
          "1h escalade + Paintball enfants · 150 billes",
          "1h escalade + Paintball enfants · 200 billes",
        ],
      },
      {
        title: "Paintball adultes (13+)",
        options: [
          "Paintball adultes · 100 billes (disponible jusqu'en 2025)",
          "Paintball adultes · 150 balls",
          "Paintball adultes · 200 balls",
          "Paintball adultes · 300 balls",
          "Paintball adultes · 400 balls",
          "1h parcours + Paintball adultes · 150 billes",
          "1h parcours + Paintball adultes · 200 billes",
          "1h escalade + Paintball adultes · 150 billes",
          "1h escalade + Paintball adultes · 200 billes",
        ],
      },
      {
        title: "Corporate & sur mesure",
        options: ["Événement d'entreprise", "Combo personnalisé"],
      },
    ],
    lunchOptions: [
      "Collation FunPark incluse",
      "J'apporte ma collation",
      "Je ne sais pas encore",
    ],
    footer: {
      heading: "FunPark São João",
      tagline: "Aventure, nature et sécurité à quelques minutes de Lisbonne.",
      connect: "Contacts",
      rights: "Tous droits réservés",
    },
  },
};

const ageBrackets = [
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
];

const Index = () => {
  const { language, setLanguage } = useLanguagePreference();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location.hash]);
  const content = translations[language];
  const navLinks = content.navLinks;
  const activityDetails = activityPagesContent[language];
  const activityNavItems = activityDetails.map((activityDetail) => {
    const matchingHomeActivity = content.activities.find(
      (activity) => activity.slug === activityDetail.slug
    );
    return {
      label: matchingHomeActivity?.name ?? activityDetail.hero.title,
      href: `/atividades/${activityDetail.slug}`,
    };
  });
  const navSubtopics = {
    ...content.navSubtopics,
    ...(activityNavItems.length > 0
      ? {
          "#atividades": activityNavItems,
        }
      : {}),
  };
  const hero = content.hero;
  const experience = content.experience;
  const gallery = content.gallery;
  const schedule = content.schedule;
  const directions = content.directions;
  const reservation = content.reservation;
  const reservationTypes = content.reservationTypes;
  const activityPackages = content.activityPackages;
  const lunchOptions = content.lunchOptions;
  const footer = content.footer;

  const contactMailto = createMailtoLink(content.mailSubject);
  const heroWhatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    hero.whatsappMessage
  )}`;

  const galleryRef = useRef<HTMLDivElement | null>(null);
  const [reservationJustSent, setReservationJustSent] = useState(false);
  const reservationTimerRef = useRef<number | null>(null);
  const [openNav, setOpenNav] = useState<string | null>(null);
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target as Node)
      ) {
        setOpenNav(null);
        setLanguageMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(
    () => () => {
      if (reservationTimerRef.current) {
        window.clearTimeout(reservationTimerRef.current);
      }
    },
    []
  );

  const scrollGallery = (direction: "left" | "right") => {
    const container = galleryRef.current;
    if (!container) return;
    const amount = direction === "left" ? -320 : 320;
    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  const handleReservationSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const bodyLines = [
      content.mailSubject,
      "",
      `${reservation.fields.reservationType.mailLabel}: ${data.get("reservationType") ?? ""}`,
      `${reservation.fields.activity.mailLabel}: ${data.get("activity") ?? ""}`,
      `${reservation.fields.date.mailLabel}: ${data.get("date") ?? ""}`,
      "",
      `${reservation.fields.name.mailLabel}: ${data.get("name") ?? ""}`,
      `${reservation.fields.email.mailLabel}: ${data.get("email") ?? ""}`,
      `${reservation.fields.phone.mailLabel}: ${data.get("phone") ?? ""}`,
      "",
      `${reservation.fields.adults.mailLabel}: ${data.get("participantsAdults") ?? "0"}`,
      `${reservation.fields.kids.mailLabel}: ${data.get("participantsKids") ?? "0"}`,
      `${reservation.fields.ageRange.mailLabelFrom}: ${data.get("ageFrom") ?? ""}`,
      `${reservation.fields.ageRange.mailLabelTo}: ${data.get("ageTo") ?? ""}`,
      `${reservation.fields.lunch.mailLabel}: ${data.get("lunchOption") ?? ""}`,
      `${reservation.fields.birthday.mailLabel}: ${data.get("birthdayName") ?? "-"}`,
      "",
      reservation.fields.notes.mailLabel,
      `${data.get("notes") ?? ""}`,
    ];

    window.location.href = createMailtoLink(content.mailSubject, bodyLines.join("\n"));
    form.reset();
    setReservationJustSent(true);
    if (reservationTimerRef.current) {
      window.clearTimeout(reservationTimerRef.current);
    }
    reservationTimerRef.current = window.setTimeout(() => {
      setReservationJustSent(false);
    }, 5000);
  };

  const today = new Date();
  const currentTime = `${today.getHours().toString().padStart(2, "0")}:${today
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  const scheduleToday = schedule.items.find((item) => {
    if (!item.details.includes("·")) return false;
    const [, hours] = item.details.split("·");
    return !!hours;
  });

  const isOpen = (() => {
    if (!scheduleToday) return false;
    const [start, end] = scheduleToday.details
      .split("·")[1]
      .split("às")
      .map((part) => part.trim());
    const startDate = parse(start, "HH'h'", today);
    const endDate = parse(end, "HH'h'", today);
    return isWithinInterval(parse(currentTime, "HH:mm", today), {
      start: startDate,
      end: endDate,
    });
  })();

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <header className="relative overflow-hidden rounded-b-[4rem] border-b border-border bg-background">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "var(--gradient-primary), var(--hero-bg)", backgroundSize: "cover", backgroundPosition: "center" }}
        />

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col px-6 pb-16 pt-8 sm:px-10">
          <nav className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.35em] text-primary-foreground">
            <a href="#top" className="flex items-center gap-3">
              <img
                src={`${baseMediaUrl}/imagens/logo.png`}
                alt="FunPark São João"
                className="h-12 w-auto drop-shadow-lg"
                loading="lazy"
              />
              <span className="hidden font-semibold text-white sm:inline">
                FunPark São João
              </span>
            </a>
            <div
              ref={navContainerRef}
              className="hidden items-center gap-3 text-[0.65rem] text-white/80 lg:flex"
            >
              {navLinks.map((item) => {
                const subtopics = navSubtopics[item.href] ?? [];
                if (subtopics.length > 0) {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenNav((current) =>
                            current === item.href ? null : item.href
                          )
                        }
                        className="flex items-center gap-2 rounded-full bg-[rgba(73,49,24,0.95)] px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-center text-white shadow-[0_6px_12px_-8px_rgba(0,0,0,0.6)] transition hover:-translate-y-0.5 hover:bg-[rgba(73,49,24,0.9)]"
                        aria-expanded={openNav === item.href}
                      >
                        {item.label}
                        <span className="text-[0.45rem]">
                          {openNav === item.href ? "▲" : "▼"}
                        </span>
                      </button>
                      {openNav === item.href && (
                        <div className="absolute left-0 top-[calc(100%+0.75rem)] z-50 min-w-[220px] rounded-2xl border border-primary/30 bg-secondary/95 p-3 text-left shadow-[0_15px_40px_-20px_rgba(0,0,0,0.6)]">
                          <ul className="space-y-1 text-sm">
                            {subtopics.map((sub) => (
                              <li key={sub.href}>
                                {sub.href.startsWith("#") ? (
                                  <a
                                    href={sub.href}
                                    className="block rounded-xl px-4 py-2 text-secondary-foreground transition hover:bg-primary hover:text-primary-foreground"
                                    onClick={() => setOpenNav(null)}
                                  >
                                    {sub.label}
                                  </a>
                                ) : (
                                  <Link
                                    to={sub.href}
                                    className="block rounded-xl px-4 py-2 text-secondary-foreground transition hover:bg-primary hover:text-primary-foreground"
                                    onClick={() => setOpenNav(null)}
                                  >
                                    {sub.label}
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                }
                const isAnchor = item.href.startsWith("#");
                if (isAnchor) {
                  return (
              <a
                key={item.label}
                href={item.href}
                      className="rounded-full bg-[rgba(73,49,24,0.95)] px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-center text-white shadow-[0_6px_12px_-8px_rgba(0,0,0,0.6)] transition hover:-translate-y-0.5 hover:bg-[rgba(73,49,24,0.9)]"
              >
                {item.label}
              </a>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="rounded-full bg-[rgba(73,49,24,0.95)] px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-center text-white shadow-[0_6px_12px_-8px_rgba(0,0,0,0.6)] transition hover:-translate-y-0.5 hover:bg-[rgba(73,49,24,0.9)]"
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setLanguageMenuOpen((current) => !current)
                  }
                  className="flex items-center gap-2 rounded-full bg-[rgba(73,49,24,0.95)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-[0_6px_12px_-8px_rgba(0,0,0,0.6)]"
                  aria-expanded={languageMenuOpen}
                >
                  <img
                    src={getFlagSrc(language)}
                    alt={translations[language].localeLabel}
                    className="h-4 w-6 rounded-[2px] object-cover"
                    loading="lazy"
                  />
                  <span>{translations[language].localeLabel}</span>
                  <span className="text-[0.45rem]">
                    {languageMenuOpen ? "▲" : "▼"}
                  </span>
                </button>
                {languageMenuOpen && (
                  <div className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-48 rounded-2xl border border-primary/30 bg-secondary/95 p-2 text-left shadow-[0_15px_40px_-20px_rgba(0,0,0,0.6)]">
                    <ul className="space-y-1 text-sm">
                      {Object.entries(translations).map(([key, value]) => (
                        <li key={key}>
                          <button
                            type="button"
                            onClick={() => {
                              setLanguage(key as LanguageKey);
                              setLanguageMenuOpen(false);
                            }}
                            className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-secondary-foreground transition hover:bg-primary hover:text-primary-foreground"
                          >
                            <img
                              src={getFlagSrc(key as LanguageKey)}
                              alt={value.localeLabel}
                              className="h-4 w-6 rounded-[2px] object-cover"
                              loading="lazy"
                            />
                            <span>{value.localeLabel}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
          </div>
          <a
              href={contactMailto}
              className="flex h-12 min-w-[150px] items-center justify-center rounded-full bg-[linear-gradient(180deg,#d39b4c,#b3732a)] px-5 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-white shadow-[0_10px_20px_-12px_rgba(0,0,0,0.6)] transition hover:-translate-y-0.5 hover:bg-[linear-gradient(180deg,#e2a758,#c87c2d)]"
            >
              {hero.ctas.primary}
          </a>
        </nav>

          <div className="mt-6 flex w-full justify-end lg:hidden">
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setLanguageMenuOpen((current) => !current)
                }
                className="flex items-center gap-2 rounded-full bg-[rgba(73,49,24,0.95)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-[0_6px_12px_-8px_rgba(0,0,0,0.6)]"
                aria-expanded={languageMenuOpen}
              >
                <img
                  src={getFlagSrc(language)}
                  alt={translations[language].localeLabel}
                  className="h-4 w-6 rounded-[2px] object-cover"
                  loading="lazy"
                />
                <span>{translations[language].localeLabel}</span>
                <span className="text-[0.45rem]">
                  {languageMenuOpen ? "▲" : "▼"}
                </span>
              </button>
              {languageMenuOpen && (
                <div className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-48 rounded-2xl border border-primary/30 bg-secondary/95 p-2 text-left shadow-[0_15px_40px_-20px_rgba(0,0,0,0.6)]">
                  <ul className="space-y-1 text-sm">
                    {Object.entries(translations).map(([key, value]) => (
                      <li key={key}>
                        <button
                          type="button"
                          onClick={() => {
                            setLanguage(key as LanguageKey);
                            setLanguageMenuOpen(false);
                          }}
                          className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-secondary-foreground transition hover:bg-primary hover:text-primary-foreground"
                        >
                          <img
                            src={getFlagSrc(key as LanguageKey)}
                            alt={value.localeLabel}
                            className="h-4 w-6 rounded-[2px] object-cover"
                            loading="lazy"
                          />
                          <span>{value.localeLabel}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="mt-14 grid gap-12 text-white md:mt-20 md:grid-cols-[1.35fr_1fr] md:items-start">
            <div className="space-y-10">
              <div
                className={`inline-flex rounded-full px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] ${isOpen ? "bg-[rgba(65,136,35,0.9)] text-white" : "bg-[rgba(120,44,32,0.9)] text-white"}`}
              >
                {isOpen ?
                  (language === "pt" ? "Parque Aberto" : language === "es" ? "Parque abierto" : language === "fr" ? "Parc ouvert" : "Park open")
                  : (language === "pt" ? "Parque Encerrado" : language === "es" ? "Parque cerrado" : language === "fr" ? "Parc fermé" : "Park closed")}
              </div>
          <div className="space-y-8">
                <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.45em]">
                  {hero.badge}
            </p>
                <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  {hero.title}
            </h1>
                <p className="max-w-xl text-sm text-white/80 sm:text-base">
                  {hero.subtitle}
                </p>
                <div className="flex flex-wrap gap-3 text-[0.7rem] uppercase tracking-[0.3em]">
                  {hero.chips.map((chip) => (
                    <span key={chip} className="rounded-full bg-white/10 px-4 py-2">
                      {chip}
              </span>
                  ))}
            </div>
                <div className="flex flex-wrap gap-4 text-sm font-semibold">
              <a
                href={contactMailto}
                    className="rounded-full bg-white px-6 py-3 text-primary transition hover:bg-secondary hover:text-secondary-foreground"
              >
                    {hero.ctas.primary}
              </a>
              <a
                    href={heroWhatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/60 px-6 py-3 text-white transition hover:border-white hover:bg-white/10"
                  >
                    {hero.ctas.secondary}
                  </a>
                  <a
                    href="#atividades"
                    className="rounded-full border border-white/60 px-6 py-3 text-white transition hover:border-white hover:bg-white/10"
                  >
                    {hero.ctas.tertiary}
                  </a>
            </div>
          </div>

              <div className="rounded-3xl border border-primary/30 bg-secondary/40 p-6 text-sm text-secondary-foreground shadow-[0_25px_60px_-50px_rgba(45,30,15,0.4)]">
                <p className="text-[0.65rem] uppercase tracking-[0.45em] text-primary/80">
                  {hero.phases.badge}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-primary-foreground">
                  {hero.phases.heading}
                </h2>
                <ul className="mt-4 space-y-4 text-sm">
                  {hero.phases.steps.map((step) => (
                    <li key={step.number} className="space-y-1">
                      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-primary">
                        {step.number}
                      </span>
                      <h3 className="text-base font-semibold text-primary-foreground">
                        {step.title}
                      </h3>
                      <p className="text-secondary-foreground/80">{step.description}</p>
                    </li>
                  ))}
                </ul>
            </div>
            </div>

            <aside className="flex flex-col gap-5">
              {hero.moments.map((moment) => (
                <article
                  key={moment.title}
                  className="group overflow-hidden rounded-3xl border border-primary/30 bg-secondary/60 p-4 text-secondary-foreground shadow-[0_20px_50px_-45px_rgba(0,0,0,0.6)]"
                >
                  <div className="relative h-48 overflow-hidden rounded-2xl">
                    <img
                      src={moment.image}
                      alt={moment.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="text-lg font-semibold text-primary">{moment.title}</h3>
                    <p className="text-sm text-secondary-foreground/80">{moment.description}</p>
          </div>
                </article>
              ))}
            </aside>
        </div>
      </div>
    </header>

      <main className="mx-auto max-w-6xl space-y-20 px-6 py-16 text-[#f8f1df] sm:px-10 lg:space-y-24 lg:py-24">
      <section
          id="experiencia"
          className="rounded-[3rem] border border-border bg-card p-10 shadow-[0_40px_100px_-70px_rgba(45,30,15,0.5)] lg:p-14"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
              <p className="text-xs uppercase tracking-[0.45em] text-primary">
                {experience.badge}
            </p>
              <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
                {experience.title}
            </h2>
          </div>
            <p className="max-w-xl text-sm text-muted-foreground">
              {experience.description}
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
            {experience.steps.map((step) => (
            <article
              key={step.number}
                className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-muted p-6 text-sm text-muted-foreground"
            >
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.45em] text-primary">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

        <section id="galeria" className="space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
              <p className="text-xs uppercase tracking-[0.45em] text-primary">
                {gallery.badge}
            </p>
              <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
                {gallery.title}
            </h2>
          </div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span>{gallery.instructions}</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollGallery("left")}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition hover:border-primary hover:text-primary"
                  aria-label="Galeria anterior"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => scrollGallery("right")}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition hover:border-primary hover:text-primary"
                  aria-label="Galeria seguinte"
                >
                  →
                </button>
            </div>
          </div>
        </div>
        <div
            ref={galleryRef}
          className="no-scrollbar flex gap-6 overflow-x-auto pb-4"
        >
            {gallery.images.map((image) => (
              <figure
                key={image.src}
                className="relative aspect-[4/3] w-[18rem] flex-shrink-0 overflow-hidden rounded-3xl border border-border bg-muted shadow-[0_30px_90px_-65px_rgba(45,30,15,0.45)]"
              >
                <img
                  src={image.src}
                  alt={image.alt ?? ""}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {image.alt ? (
                  <figcaption className="absolute inset-x-0 bottom-0 rounded-b-3xl bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 text-[0.7rem] uppercase tracking-[0.3em] text-white/80">
                    {image.alt}
                  </figcaption>
                ) : null}
              </figure>
          ))}
        </div>
      </section>

      <section
          id="horarios"
          className="grid gap-8 rounded-[3rem] border border-border bg-card p-10 shadow-[0_45px_120px_-80px_rgba(45,30,15,0.55)] md:grid-cols-2 lg:p-14"
        >
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.45em] text-primary">
              {schedule.badge}
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {schedule.title}
            </h2>
            <ul className="space-y-4 text-sm">
              {schedule.items.map((item) => (
                <li
                  key={item.season}
                  className="rounded-2xl border border-primary/30 bg-muted p-5 text-muted-foreground"
                >
                  <h3 className="text-lg font-semibold text-primary">
                    {item.season}
                  </h3>
                  <p className="mt-1 text-sm text-foreground">{item.details}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground/80">
                    {item.note}
                  </p>
                </li>
              ))}
            </ul>
        </div>
          <div className="space-y-6 rounded-3xl border border-border bg-muted p-8 text-foreground">
            <h3 className="text-2xl font-semibold text-primary">
              {schedule.contactTitle}
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="block text-xs uppercase tracking-[0.35em] text-primary/80">
                  {schedule.phoneLabel}
                </span>
                <a
                  href={`tel:${contactPhoneCompact}`}
                  className="mt-1 inline-flex items-center text-lg font-semibold text-primary underline-offset-4 transition hover:text-primary/80 hover:underline"
                >
                  {contactPhone}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-[0.35em] text-primary/80">
                  {schedule.emailLabel}
                </span>
                <a
                  href={contactMailto}
                  className="mt-1 inline-flex items-center text-primary underline-offset-4 transition hover:text-primary/80 hover:underline"
                >
                  {contactEmail}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-[0.35em] text-primary/80">
                  {schedule.locationLabel}
                </span>
                <p className="mt-1 text-sm text-foreground">
                  Rua do Facho · São João da Caparica · Almada
                </p>
                <a
                  href="https://maps.google.com/?q=Fun+Parque+S%C3%A3o+Jo%C3%A3o"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-primary underline-offset-4 transition hover:text-secondary hover:underline"
                >
                  {schedule.mapLinkText}
                </a>
              </li>
            </ul>
            <div className="rounded-2xl border border-primary/40 bg-primary/15 p-5 text-xs uppercase tracking-[0.3em] text-primary">
              {schedule.schoolsNote}
              </div>
        </div>
      </section>

        <section
          id="como-chegar"
          className="rounded-[3rem] border border-border bg-card p-10 shadow-[0_35px_100px_-70px_rgba(45,30,15,0.5)] lg:p-14"
        >
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.45em] text-primary">
              {content.directions.badge}
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {content.directions.title}
          </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              {content.directions.intro}
            </p>
            <ul className="grid gap-4 md:grid-cols-3">
              {content.directions.options.map((option) => (
                <li
                  key={option.label}
                  className="rounded-2xl border border-primary/30 bg-secondary/80 p-5 text-sm text-secondary-foreground shadow-[0_20px_60px_-50px_rgba(45,30,15,0.4)]"
                >
                  <h3 className="text-base font-semibold text-primary">{option.label}</h3>
                  <p className="mt-2 text-sm text-secondary-foreground/80">{option.description}</p>
                </li>
              ))}
            </ul>
            <a
              href="https://maps.google.com/?q=Fun+Parque+S%C3%A3o+Jo%C3%A3o"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_20px_60px_-50px_rgba(45,30,15,0.4)] transition hover:bg-primary/90"
            >
              {content.directions.mapCta}
            </a>
        </div>
      </section>

        <section
          id="reservas"
          className="rounded-[3rem] border border-[#46331e] bg-[#1f140b] p-10 text-[#f8f1df] shadow-[0_60px_140px_-90px_rgba(45,30,15,0.55)] lg:p-16"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.45em] text-[#b5ff6b]">
                {reservation.badge}
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl text-[#fef9ee]">
                {reservation.title}
              </h2>
              <p className="text-sm text-[#e8dbc2] sm:text-base">
                {reservation.description}
              </p>
              <ul className="space-y-3 rounded-2xl border border-[#564024] bg-[#28190f] p-5 text-sm text-[#f8f1df]">
                {reservation.checklist.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 text-sm text-[#f3e7cc]">
                <div>
                  <span className="block text-xs uppercase tracking-[0.35em] text-[#b5ff6b]">
                    {reservation.contactHeading}
                  </span>
                  <a
                    href={`tel:${contactPhoneCompact}`}
                    className="inline-flex items-center text-lg font-semibold text-[#b5ff6b] underline-offset-4 transition hover:text-[#d9ff9f] hover:underline"
                  >
                    {contactPhone}
                  </a>
        </div>
                <div>
                  <span className="block text-xs uppercase tracking-[0.35em] text-[#b5ff6b]">
                    {reservation.contactSubheading}
                  </span>
          <a
            href={contactMailto}
                    className="inline-flex items-center text-sm font-semibold text-[#f3e7cc] underline-offset-4 transition hover:text-[#b5ff6b] hover:underline"
          >
            {contactEmail}
          </a>
        </div>
      </div>
              {reservationJustSent && (
                <div className="rounded-2xl border border-[#564024] bg-[#2d1b10] p-4 text-sm font-semibold text-[#b5ff6b]">
                  {reservation.successMessage}
            </div>
              )}
          </div>
            <form
              onSubmit={handleReservationSubmit}
              className="space-y-6 rounded-3xl border border-[#564024] bg-[#2a1c11] p-6 text-[#f8f1df] shadow-[0_30px_80px_-70px_rgba(45,30,15,0.55)] sm:p-8"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[#b5ff6b]">
                  {reservation.fields.reservationType.label}
                </h3>
                <p className="text-xs uppercase tracking-[0.3em] text-[#c6af81]">
                  {reservation.fields.reservationType.mailLabel}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm">
                  <span className="font-semibold text-[#fef9ee]">
                    {reservation.fields.reservationType.label}
                  </span>
                  <select
                    name="reservationType"
                    required
                    className="w-full rounded-xl border border-[#564024] bg-[#3c2a18] px-4 py-3 text-sm text-[#f8f1df] focus:border-[#b5ff6b] focus:outline-none focus:ring-2 focus:ring-[#b5ff6b]/30"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {reservation.fields.reservationType.placeholder}
                    </option>
                    {reservationTypes.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label className="space-y-2 text-sm">
                  <span className="font-semibold text-[#fef9ee]">
                    {reservation.fields.activity.label}
                  </span>
                  <select
                    name="activity"
                    required
                    className="w-full rounded-xl border border-[#564024] bg-[#3c2a18] px-4 py-3 text-sm text-[#f8f1df] focus:border-[#b5ff6b] focus:outline-none focus:ring-2 focus:ring-[#b5ff6b]/30"
                  defaultValue=""
                >
                  <option value="" disabled>
                      {reservation.fields.activity.placeholder}
                  </option>
                    {activityPackages.map((category) => (
                      <optgroup key={category.title} label={category.title}>
                        {category.options.map((activity) => (
                          <option key={activity}>{activity}</option>
                        ))}
                      </optgroup>
                    ))}
                </select>
              </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm">
                  <span className="font-semibold text-[#fef9ee]">
                    {reservation.fields.name.label}
                  </span>
                  <input
                    name="name"
                    required
                    placeholder={reservation.fields.name.placeholder}
                    className="w-full rounded-xl border border-[#564024] bg-[#3c2a18] px-4 py-3 text-sm text-[#f8f1df] placeholder:text-[#b9a686] focus:border-[#b5ff6b] focus:outline-none focus:ring-2 focus:ring-[#b5ff6b]/30"
                  />
                </label>
                <label className="space-y-2 text-sm">
                  <span className="font-semibold text-[#fef9ee]">
                    {reservation.fields.email.label}
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={reservation.fields.email.placeholder}
                    className="w-full rounded-xl border border-[#564024] bg-[#3c2a18] px-4 py-3 text-sm text-[#f8f1df] placeholder:text-[#b9a686] focus:border-[#b5ff6b] focus:outline-none focus:ring-2 focus:ring-[#b5ff6b]/30"
                  />
                </label>
                </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm">
                  <span className="font-semibold text-[#fef9ee]">
                    {reservation.fields.phone.label}
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder={reservation.fields.phone.placeholder}
                    className="w-full rounded-xl border border-[#564024] bg-[#3c2a18] px-4 py-3 text-sm text-[#f8f1df] placeholder:text-[#b9a686] focus:border-[#b5ff6b] focus:outline-none focus:ring-2 focus:ring-[#b5ff6b]/30"
                  />
                </label>
                <label className="space-y-2 text-sm">
                  <span className="font-semibold text-[#fef9ee]">
                    {reservation.fields.date.label}
                  </span>
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full rounded-xl border border-[#564024] bg-[#3c2a18] px-4 py-3 text-sm text-[#f8f1df] focus:border-[#b5ff6b] focus:outline-none focus:ring-2 focus:ring-[#b5ff6b]/30"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm">
                  <span className="font-semibold text-[#fef9ee]">
                    {reservation.fields.adults.label}
                  </span>
                  <input
                    type="number"
                    name="participantsAdults"
                    required
                    min={0}
                    defaultValue={0}
                    className="w-full rounded-xl border border-[#564024] bg-[#3c2a18] px-4 py-3 text-sm text-[#f8f1df] focus:border-[#b5ff6b] focus:outline-none focus:ring-2 focus:ring-[#b5ff6b]/30"
                  />
                </label>
                <label className="space-y-2 text-sm">
                  <span className="font-semibold text-[#fef9ee]">
                    {reservation.fields.kids.label}
                  </span>
                  <input
                    type="number"
                    name="participantsKids"
                    required
                    min={0}
                    defaultValue={0}
                    className="w-full rounded-xl border border-[#564024] bg-[#3c2a18] px-4 py-3 text-sm text-[#f8f1df] focus:border-[#b5ff6b] focus:outline-none focus:ring-2 focus:ring-[#b5ff6b]/30"
                  />
                </label>
              </div>

              <label className="space-y-2 text-sm">
                <span className="font-semibold text-[#fef9ee]">
                  {reservation.fields.ageRange.label}
                </span>
                <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr]">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.3em] text-[#c6af81]">
                      {reservation.fields.ageRange.fromPlaceholder}
                    </label>
                    <input
                      type="number"
                      name="ageFrom"
                      min={0}
                      required
                      className="w-full rounded-xl border border-[#564024] bg-[#3c2a18] px-4 py-3 text-sm text-[#f8f1df] focus:border-[#b5ff6b] focus:outline-none focus:ring-2 focus:ring-[#b5ff6b]/30"
                    />
                  </div>
                  <div className="flex items-center justify-center text-xs uppercase tracking-[0.3em] text-[#c6af81]">
                    {reservation.fields.ageRange.separator}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.3em] text-[#c6af81]">
                      {reservation.fields.ageRange.toPlaceholder}
                    </label>
                    <input
                      type="number"
                      name="ageTo"
                      min={0}
                      required
                      className="w-full rounded-xl border border-[#564024] bg-[#3c2a18] px-4 py-3 text-sm text-[#f8f1df] focus:border-[#b5ff6b] focus:outline-none focus:ring-2 focus:ring-[#b5ff6b]/30"
                    />
                  </div>
                </div>
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm">
                  <span className="font-semibold text-[#fef9ee]">
                    {reservation.fields.lunch.label}
                  </span>
                  <select
                    name="lunchOption"
                    required
                    className="w-full rounded-xl border border-[#564024] bg-[#3c2a18] px-4 py-3 text-sm text-[#f8f1df] focus:border-[#b5ff6b] focus:outline-none focus:ring-2 focus:ring-[#b5ff6b]/30"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {reservation.fields.lunch.placeholder}
                    </option>
                    {lunchOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label className="space-y-2 text-sm">
                  <span className="font-semibold text-[#fef9ee]">
                    {reservation.fields.birthday.label}
                  </span>
                  <input
                    name="birthdayName"
                    placeholder={reservation.fields.birthday.placeholder}
                    className="w-full rounded-xl border border-[#564024] bg-[#3c2a18] px-4 py-3 text-sm text-[#f8f1df] placeholder:text-[#b9a686] focus:border-[#b5ff6b] focus:outline-none focus:ring-2 focus:ring-[#b5ff6b]/30"
                  />
                </label>
              </div>

              <div className="space-y-2 text-sm">
                <span className="font-semibold text-[#fef9ee]">
                  {reservation.fields.notes.label}
                </span>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder={reservation.fields.notes.placeholder}
                  className="w-full rounded-xl border border-[#564024] bg-[#3c2a18] px-4 py-3 text-sm text-[#f8f1df] placeholder:text-[#b9a686] focus:border-[#b5ff6b] focus:outline-none focus:ring-2 focus:ring-[#b5ff6b]/30"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#b5ff6b] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#2a1c11] shadow-[0_20px_60px_-50px_rgba(45,30,15,0.4)] transition hover:-translate-y-0.5 hover:bg-[#d7ffad]"
              >
                {reservation.submitText}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card/70 px-6 py-10 text-xs text-muted-foreground sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">
              {footer.heading}
            </p>
            <p className="mt-2 text-xs">
              {footer.tagline}
            </p>
        </div>
          <div className="flex flex-wrap gap-4">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="uppercase tracking-[0.3em] transition hover:text-primary"
              >
                {item.label}
              </a>
            ))}
      </div>
          <div className="text-right">
            <p className="uppercase tracking-[0.3em] text-primary/80">
              {footer.connect}
            </p>
            <a
              href={contactMailto}
              className="mt-2 block text-xs transition hover:text-primary"
            >
              {contactEmail}
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-[10px] uppercase tracking-[0.35em]">
          © {new Date().getFullYear()} {footer.rights}
        </p>
      </footer>
  </div>
);
};

export default Index;



