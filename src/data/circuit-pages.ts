import { baseMediaUrl, type LanguageKey } from "./site-content";

export type CircuitDetailContent = {
  slug: string;
  label: string;
  color: string;
  gradient: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    backgroundImage: string;
    stats: { label: string; value: string }[];
  };
  quickInfo: { label: string; value: string }[];
  overview: { title: string; paragraphs: string[]; note?: string };
  highlights: { title: string; description: string }[];
  experience: {
    title: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  briefing: { title: string; items: string[] };
  gallery: { src: string; alt: string }[];
  cta: { title: string; subtitle: string; primaryLabel: string; primaryHref: string };
};

const commonImages = {
  laranja: `${baseMediaUrl}/image4.png`,
  amarelo: `${baseMediaUrl}/image5.png`,
  verde: `${baseMediaUrl}/image6.png`,
  azul: `${baseMediaUrl}/image7.png`,
  vermelho: `${baseMediaUrl}/image8.png`,
};

export const circuitPagesContent: Record<LanguageKey, CircuitDetailContent[]> = {
  pt: [
    {
      slug: "laranja",
      label: "Circuito Laranja",
      color: "#f7941d",
      gradient: "linear-gradient(135deg, rgba(247,148,29,0.95), rgba(255,209,84,0.75))",
      hero: {
        badge: "Arborismo · Circuitos",
        title: "Circuito Laranja · Primeiras Alturas",
        subtitle:
          "Inicia a aventura a 1,5 metros do chão, com jogos suspensos pensados para ganhar confiança e descobrir o arborismo em família.",
        backgroundImage: commonImages.laranja,
        stats: [
          { label: "Idade recomendada", value: "5+ anos" },
          { label: "Altura mínima", value: "1,05 m" },
          { label: "Obstáculos", value: "12 desafios progressivos" },
          { label: "Slide final", value: "20 m de emoção" },
        ],
      },
      quickInfo: [
        { label: "Duração média", value: "20-30 minutos" },
        { label: "Altura máxima", value: "2 metros" },
        { label: "Acompanhamento", value: "Monitor em pista + briefing" },
        { label: "Equipamento", value: "Arnês integral + linha contínua de vida" },
      ],
      overview: {
        title: "O primeiro passo para se elevar",
        paragraphs: [
          "O Circuito Laranja foi desenhado para crianças e adultos que estão a dar os primeiros passos no arborismo. A estrutura é baixa, com plataformas largas, linhas fixas e pontos de descanso que permitem adaptar o ritmo de acordo com cada participante.",
          "Após o briefing inicial e colocação do arnês, vais encontrar pontes de troncos, túneis de corda e redes horizontais que trabalham o equilíbrio e a coordenação. Tudo isto numa zona protegida e com visibilidade total para familiares e monitores.",
        ],
        note: "Inclui slide final com aterragem amortecida para terminar com sorrisos garantidos.",
      },
      highlights: [
        {
          title: "Segurança contínua",
          description:
            "Linha de vida contínua sem necessidade de manobras, perfeita para ensinar o sistema de mosquetões.",
        },
        {
          title: "Obstáculos fofos",
          description:
            "Pontes com degraus curtos, túneis e redes que trabalham equilíbrio sem intimidar.",
        },
        {
          title: "Acesso fácil",
          description:
            "Zona próxima da base de arborismo, com área lounge para familiares acompanharem e tirarem fotografias.",
        },
      ],
      experience: {
        title: "Como decorre a experiência",
        description:
          "Em menos de 30 minutos completas o circuito com acompanhamento dos nossos monitores e terminares com um slide suave.",
        steps: [
          {
            title: "Briefing & arnês",
            description:
              "Explicação prática do uso do arnês, mosquetões e regras de segurança antes de subir.",
          },
          {
            title: "Jogos suspensos",
            description:
              "Percurso em linha única com pontes, redes e plataformas amplas para ganhar confiança.",
          },
          {
            title: "Slide de despedida",
            description:
              "Descida final em slide com monitor na zona de chegada para garantir aterragem controlada.",
          },
        ],
      },
      briefing: {
        title: "Antes de subir lembra-te",
        items: [
          "Chegar 15 minutos antes para equipar com calma.",
          "Usar cabelo preso e retirar peças soltas.",
          "Calçado fechado e confortável obrigatório.",
          "Seguir sempre as indicações dos monitores FunPark.",
        ],
      },
      gallery: [
        { src: `${baseMediaUrl}/imagens/arborimo_3.jpg`, alt: "Plataforma inicial do circuito laranja" },
        { src: `${baseMediaUrl}/imagens/arborimo_2.jpg`, alt: "Criança a atravessar ponte suspensa" },
        { src: `${baseMediaUrl}/image2.png`, alt: "Slide final do circuito" },
      ],
      cta: {
        title: "Pronto para começar a aventura?",
        subtitle:
          "Reserva o circuito laranja para a tua família ou escola e garante monitor dedicado no horário que preferes.",
        primaryLabel: "Reservar circuito laranja",
        primaryHref: "/#reservas",
      },
    },
    {
      slug: "amarelo",
      label: "Circuito Amarelo",
      color: "#ffd400",
      gradient: "linear-gradient(135deg, rgba(255,212,0,0.95), rgba(255,162,0,0.8))",
      hero: {
        badge: "Arborismo · Circuitos",
        title: "Circuito Amarelo · Evolução em família",
        subtitle:
          "Uma sequência dinâmica a 3 metros de altura, com pontes em V, troncos móveis e slide final mais longo.",
        backgroundImage: commonImages.amarelo,
        stats: [
          { label: "Idade recomendada", value: "7+ anos" },
          { label: "Altura mínima", value: "1,20 m" },
          { label: "Obstáculos", value: "14 desafios" },
          { label: "Slide final", value: "35 m de extensão" },
        ],
      },
      quickInfo: [
        { label: "Duração média", value: "30-40 minutos" },
        { label: "Altura máxima", value: "3,5 metros" },
        { label: "Acompanhamento", value: "Monitores em torre de observação" },
        { label: "Equipamento", value: "Arnês + roldana para slide" },
      ],
      overview: {
        title: "Subir de nível com confiança",
        paragraphs: [
          "Depois de ganhar bases no circuito laranja, chega a altura de enfrentar plataformas mais altas, travessias diagonais e passos mais largos. O circuito amarelo mantém a adrenalina controlada e oferece pontos de descanso para respirar fundo antes de avançar.",
          "Ideal para famílias com crianças já confiantes ou grupos escolares. Os monitores acompanham visualmente todo o percurso e estão prontos para ajudar em cada transição.",
        ],
      },
      highlights: [
        {
          title: "Pontes flutuantes",
          description:
            "Jogos suspensos a 3 metros com degraus móveis que trabalham equilíbrio e coordenação.",
        },
        {
          title: "Zonas de descanso",
          description:
            "Plataformas intermédias com área suficiente para duas pessoas e vista panorâmica para a mata.",
        },
        {
          title: "Slide com curva",
          description:
            "Descida final com roldana que termina junto à base, ideal para fotos e celebração da conquista.",
        },
      ],
      experience: {
        title: "Três momentos marcantes",
        description:
          "Preparação cuidada, obstáculos progressivos e final marcante com slide – tudo acompanhado pela equipa FunPark.",
        steps: [
          {
            title: "Check-in & equipamento",
            description:
              "Receção, entrega de arnês e capacete, e revisão das regras de segurança.",
          },
          {
            title: "Percurso elevado",
            description:
              "Travessias em corda, redes inclinadas, plataformas em V e passagens de troncos móveis.",
          },
          {
            title: "Slide panorâmico",
            description:
              "Descida com roldana suave que atravessa a clareira principal do parque.",
          },
        ],
      },
      briefing: {
        title: "Checklist para o circuito",
        items: [
          "Chegar 20 minutos antes para briefing.",
          "Retirar anéis, pulseiras e objetos soltos.",
          "Usar roupa confortável que permita liberdade de movimentos.",
          "Em caso de dúvida chamar sempre um monitor.",
        ],
      },
      gallery: [
        { src: `${baseMediaUrl}/imagens/arborimo_2.jpg`, alt: "Participante no circuito amarelo" },
        { src: `${baseMediaUrl}/imagens/arborimo_3.jpg`, alt: "Pontes suspensas no circuito amarelo" },
        { src: `${baseMediaUrl}/image3.jpg`, alt: "Slide final do circuito amarelo" },
      ],
      cta: {
        title: "Reserva já o teu horário",
        subtitle:
          "Disponível para famílias, aniversários e escolas – escolhe o dia ideal e garante monitor dedicado.",
        primaryLabel: "Reservar circuito amarelo",
        primaryHref: "/#reservas",
      },
    },
    {
      slug: "verde",
      label: "Circuito Verde",
      color: "#8dc63f",
      gradient: "linear-gradient(135deg, rgba(141,198,63,0.95), rgba(55,174,70,0.75))",
      hero: {
        badge: "Arborismo · Circuitos",
        title: "Circuito Verde · Aventura intercalar",
        subtitle:
          "Para quem já domina as bases e quer sentir a altura. Obstáculos técnicos, cordas em X e passagens em ziguezague.",
        backgroundImage: commonImages.verde,
        stats: [
          { label: "Idade recomendada", value: "9+ anos" },
          { label: "Altura mínima", value: "1,30 m" },
          { label: "Obstáculos", value: "15 desafios" },
          { label: "Slide final", value: "45 m com curva dupla" },
        ],
      },
      quickInfo: [
        { label: "Duração média", value: "35-45 minutos" },
        { label: "Altura máxima", value: "6 metros" },
        { label: "Acompanhamento", value: "Monitores em plataformas intermédias" },
        { label: "Equipamento", value: "Arnês, roldana, luvas técnicas" },
      ],
      overview: {
        title: "Equilíbrio, força e foco",
        paragraphs: [
          "O circuito verde introduz obstáculos mais técnicos e altura suficiente para sentir a adrenalina a sério. Vais encontrar pontes tibetanas, passos em prancha suspensa e uma parede de redes que obriga a planear cada movimento.",
          "Pensado para adolescentes e adultos que já experimentaram arborismo anteriormente. O percurso alterna zonas de esforço físico com momentos de contemplação sobre a mata.",
        ],
        note: "Recomenda-se o uso de luvas. Disponíveis para aluguer na receção.",
      },
      highlights: [
        {
          title: "Pontes tibetanas",
          description:
            "Travessias com cordas paralelas que puxam pela coordenação e confiança na linha de vida.",
        },
        {
          title: "Vista elevada",
          description: "Plataformas a 6 metros que oferecem perspetiva incrível sobre o parque.",
        },
        {
          title: "Trail final em slide",
          description:
            "Roldana longa com duas curvas suaves que termina perto da base do circuito.",
        },
      ],
      experience: {
        title: "Um desafio em três fases",
        description:
          "Aquecer no solo, enfrentar os obstáculos técnicos e terminar com sensação de conquista no slide final.",
        steps: [
          {
            title: "Briefing avançado",
            description:
              "Revisão das regras com foco em postura corporal e uso da linha de segurança contínua.",
          },
          {
            title: "Zona técnica",
            description:
              "Parede de redes, travessias em X, troncos suspensos e passagens inclinadas.",
          },
          {
            title: "Slide panorâmico",
            description:
              "Descida longa com vista para a Reserva Natural, perfeita para fotografar.",
          },
        ],
      },
      briefing: {
        title: "Recomendações importantes",
        items: [
          "Utilizar luvas ou adquirir no local.",
          "Sapatilhas com sola aderente recomendadas.",
          "Manter distância de uma plataforma entre participantes.",
          "Informar monitores sobre qualquer condição física relevante.",
        ],
      },
      gallery: [
        { src: `${baseMediaUrl}/image6.jpg`, alt: "Participante a atravessar ponte tibetana" },
        { src: `${baseMediaUrl}/image4.png`, alt: "Vista aérea do circuito verde" },
        { src: `${baseMediaUrl}/imagens/arborimo_2.jpg`, alt: "Zona técnica do circuito verde" },
      ],
      cta: {
        title: "Desafia-te no circuito verde",
        subtitle:
          "Ideal para equipas, aniversários radicais e grupos escolares que procuram adrenalina controlada.",
        primaryLabel: "Reservar circuito verde",
        primaryHref: "/#reservas",
      },
    },
    {
      slug: "azul",
      label: "Circuito Azul",
      color: "#1b75bb",
      gradient: "linear-gradient(135deg, rgba(27,117,187,0.95), rgba(13,54,115,0.8))",
      hero: {
        badge: "Arborismo · Circuitos",
        title: "Circuito Azul · Altura e adrenalina",
        subtitle:
          "Percurso avançado, com travessias em prancha solta, saltos controlados e slide de 60 metros.",
        backgroundImage: commonImages.azul,
        stats: [
          { label: "Idade recomendada", value: "11+ anos" },
          { label: "Altura mínima", value: "1,40 m" },
          { label: "Obstáculos", value: "17 desafios" },
          { label: "Slide final", value: "60 m através da copa das árvores" },
        ],
      },
      quickInfo: [
        { label: "Duração média", value: "40-50 minutos" },
        { label: "Altura máxima", value: "9 metros" },
        { label: "Acompanhamento", value: "Monitores dedicados nas plataformas-chave" },
        { label: "Equipamento", value: "Arnês reforçado + roldana + luvas incluídas" },
      ],
      overview: {
        title: "Para quem não teme alturas",
        paragraphs: [
          "O circuito azul coloca-te no topo das copas dos pinheiros. As travessias exigem concentração, coordenação e vontade de superar obstáculos que balançam com o vento.",
          "Adequado a aventureiros com boa condição física, famílias habituadas ao arborismo e equipas corporativas à procura de desafio.",
        ],
      },
      highlights: [
        {
          title: "Passagem de snowboard",
          description:
            "Tronco suspenso que obriga a avançar com pés paralelos, como numa prancha.",
        },
        {
          title: "Salto do tarzan",
          description: "Cordas verticais com rede de receção para libertar adrenalina.",
        },
        {
          title: "Slide gigante",
          description:
            "Roldana de 60 metros com vista sobre toda a área de arborismo – impossível não gritar.",
        },
      ],
      experience: {
        title: "Sequência da aventura",
        description:
          "Preparação técnica, zona central com maior dificuldade e final apoteótico com slide gigante.",
        steps: [
          {
            title: "Briefing detalhado",
            description:
              "Revisão de postura, técnicas de apoio e regras específicas para saltos e slides.",
          },
          {
            title: "Obstáculos avançados",
            description:
              "Plataformas suspensas, travessias em prancha única, redes verticais e salto do tarzan.",
          },
          {
            title: "Slide panorâmico",
            description:
              "Descida final a mais de 9 metros de altura com curva suave e chegada amortecida.",
          },
        ],
      },
      briefing: {
        title: "Antes do circuito azul",
        items: [
          "Verificar aperto do arnês com monitor antes de subir.",
          "Usar luvas fornecidas pela equipa FunPark.",
          "Não saltar plataformas sem autorização do monitor.",
          "Manter comunicação constante com o grupo e staff.",
        ],
      },
      gallery: [
        { src: `${baseMediaUrl}/image7.png`, alt: "Participante no circuito azul" },
        { src: `${baseMediaUrl}/imagens/arborimo_3.jpg`, alt: "Travessia elevada no circuito azul" },
        { src: `${baseMediaUrl}/image6.jpg`, alt: "Slide aéreo do circuito azul" },
      ],
      cta: {
        title: "Sentes-te preparado?",
        subtitle:
          "Agenda já a tua sessão avançada e garante monitores experientes à tua espera no topo.",
        primaryLabel: "Reservar circuito azul",
        primaryHref: "/#reservas",
      },
    },
    {
      slug: "vermelho",
      label: "Circuito Vermelho",
      color: "#ed1c24",
      gradient: "linear-gradient(135deg, rgba(237,28,36,0.95), rgba(141,3,16,0.85))",
      hero: {
        badge: "Arborismo · Circuitos",
        title: "Circuito Vermelho · Elite FunPark",
        subtitle:
          "O ápice do arborismo em São João: obstáculos extremos, saltos obrigatórios e slide final com velocidade máxima.",
        backgroundImage: commonImages.vermelho,
        stats: [
          { label: "Idade recomendada", value: "14+ anos" },
          { label: "Altura mínima", value: "1,50 m" },
          { label: "Obstáculos", value: "19 desafios intensos" },
          { label: "Slide final", value: "70 m com aceleração" },
        ],
      },
      quickInfo: [
        { label: "Duração média", value: "45-60 minutos" },
        { label: "Altura máxima", value: "11 metros" },
        { label: "Acompanhamento", value: "Equipa senior de monitores" },
        { label: "Equipamento", value: "Arnês performance + duplo sistema de ligação" },
      ],
      overview: {
        title: "O circuito para verdadeiros audazes",
        paragraphs: [
          "O circuito vermelho é reservado para quem procura a derradeira prova de coragem. Passagens com espaçamento amplo, redes verticais de alta dificuldade e um salto de queda controlada com linha de segurança redundante.",
          "Ideal para praticantes experientes, equipas corporativas focadas em teambuilding e atletas de aventura. Exige boa condição física e respeito absoluto pelas instruções dos monitores.",
        ],
        note: "Pode ser necessário comprovar experiência prévia em arborismo avançado.",
      },
      highlights: [
        {
          title: "Duplo sistema de segurança",
          description:
            "Linha contínua com backup independente para desafios de salto e queda controlada.",
        },
        {
          title: "Obstáculos extremos",
          description:
            "Passagens em estribos distantes, redes verticais, travessias diagonais longas e free-fall controlado.",
        },
        {
          title: "Slide final turbo",
          description:
            "Setenta metros de descida com maior inclinação e chegada junto ao lago artificial.",
        },
      ],
      experience: {
        title: "O percurso da elite",
        description:
          "Sessão técnica, zona de endurance, salto do void e slide final com velocidade – um pacote completo de adrenalina.",
        steps: [
          {
            title: "Sessão técnica",
            description:
              "Treino no solo para relembrar procedimentos, sinaléticas e comunicação com o staff.",
          },
          {
            title: "Zona de endurance",
            description:
              "Sequência de obstáculos de alta exigência com monitor dedicado por secção.",
          },
          {
            title: "Final lendário",
            description:
              "Salto tarzan + queda controlada + slide turbo para fechar com chave de ouro.",
          },
        ],
      },
      briefing: {
        title: "Regras obrigatórias",
        items: [
          "Participação sujeita a validação do monitor responsável.",
          "Uso de luvas e calçado fechado de sola rígida obrigatório.",
          "Cumprir intervalos mínimos entre participantes nas plataformas.",
          "Informar staff de qualquer condição física ou vertigem acentuada.",
        ],
      },
      gallery: [
        { src: `${baseMediaUrl}/image8.png`, alt: "Participante no circuito vermelho" },
        { src: `${baseMediaUrl}/image7.png`, alt: "Travessia exigente em altura" },
        { src: `${baseMediaUrl}/imagens/arborimo_3.jpg`, alt: "Salto controlado do circuito vermelho" },
      ],
      cta: {
        title: "Desafia o limite",
        subtitle:
          "Reserva com antecedência – disponibilizamos monitores especialistas e briefing exclusivo para o circuito vermelho.",
        primaryLabel: "Reservar circuito vermelho",
        primaryHref: "/#reservas",
      },
    },
  ],
  en: [
    {
      slug: "laranja",
      label: "Orange Circuit",
      color: "#f7941d",
      gradient: "linear-gradient(135deg, rgba(247,148,29,0.95), rgba(255,209,84,0.75))",
      hero: {
        badge: "Tree-top Adventure",
        title: "Orange Circuit · First Heights",
        subtitle:
          "Ease into the tree-top experience 1.5 metres above ground, with gentle obstacles designed for families discovering arborism.",
        backgroundImage: commonImages.laranja,
        stats: [
          { label: "Recommended age", value: "5+ years" },
          { label: "Minimum height", value: "1.05 m" },
          { label: "Obstacles", value: "12 progressive challenges" },
          { label: "Final zipline", value: "20 m of fun" },
        ],
      },
      quickInfo: [
        { label: "Average duration", value: "20-30 minutes" },
        { label: "Top height", value: "2 metres" },
        { label: "Supervision", value: "Briefing + monitor on course" },
        { label: "Gear", value: "Full body harness + continuous lifeline" },
      ],
      overview: {
        title: "The ideal first step",
        paragraphs: [
          "The Orange Circuit is perfect for children and adults taking their first tree-top adventure. Low structures, wide platforms and rest areas make it easy to build confidence at your own rhythm.",
          "After the initial briefing and harness check you will face trunk bridges, rope tunnels and horizontal nets that work balance and coordination in complete safety.",
        ],
        note: "Includes a soft landing zipline to finish the experience with a smile.",
      },
      highlights: [
        {
          title: "Continuous safety line",
          description:
            "No carabiner manipulation required – great to learn the system in a safe environment.",
        },
        {
          title: "Playful obstacles",
          description:
            "Short steps, rope tunnels and nets that challenge without intimidating younger adventurers.",
        },
        {
          title: "Family friendly zone",
          description:
            "Parents can watch and take photos from the nearby lounge while monitors assist on course.",
        },
      ],
      experience: {
        title: "How the session flows",
        description:
          "Briefing, progressive obstacles and a gentle zipline closure – all in under thirty minutes.",
        steps: [
          {
            title: "Gear up",
            description:
              "Harness fitting, safety checks and practical demo on how to move on the line.",
          },
          {
            title: "Suspended games",
            description:
              "Trunk bridges, tunnels and steady platforms that build self-confidence.",
          },
          {
            title: "Gentle zipline",
            description:
              "A small zip with a monitor assisting on the arrival platform for a smooth finish.",
          },
        ],
      },
      briefing: {
        title: "Before you climb",
        items: [
          "Arrive 15 minutes earlier to gear up calmly.",
          "Tie back long hair and remove loose accessories.",
          "Closed footwear is mandatory.",
          "Follow the FunPark monitors’ instructions at all times.",
        ],
      },
      gallery: [
        { src: `${baseMediaUrl}/imagens/arborimo_3.jpg`, alt: "Family on the orange circuit" },
        { src: `${baseMediaUrl}/imagens/arborimo_2.jpg`, alt: "Kids crossing a rope bridge" },
        { src: `${baseMediaUrl}/image2.png`, alt: "Final zipline of the orange circuit" },
      ],
      cta: {
        title: "Ready to start?",
        subtitle:
          "Book the orange circuit for your family or school group and secure a dedicated monitor.",
        primaryLabel: "Book orange circuit",
        primaryHref: "/#reservas",
      },
    },
    {
      slug: "amarelo",
      label: "Yellow Circuit",
      color: "#ffd400",
      gradient: "linear-gradient(135deg, rgba(255,212,0,0.95), rgba(255,162,0,0.8))",
      hero: {
        badge: "Tree-top Adventure",
        title: "Yellow Circuit · Family Progression",
        subtitle:
          "A vibrant sequence 3 metres high featuring diagonal bridges, moving logs and a longer zipline finale.",
        backgroundImage: commonImages.amarelo,
        stats: [
          { label: "Recommended age", value: "7+ years" },
          { label: "Minimum height", value: "1.20 m" },
          { label: "Obstacles", value: "14 challenges" },
          { label: "Final zipline", value: "35 m long" },
        ],
      },
      quickInfo: [
        { label: "Average duration", value: "30-40 minutes" },
        { label: "Top height", value: "3.5 metres" },
        { label: "Supervision", value: "Monitors on watchtowers" },
        { label: "Gear", value: "Harness + pulley for the zip" },
      ],
      overview: {
        title: "Raising the bar together",
        paragraphs: [
          "Once the basics are mastered it’s time to go higher. The Yellow Circuit adds diagonal crossings, wider steps and more movement under your feet while keeping the fun family vibe.",
          "Perfect for confident kids, parents and school groups looking to progress safely with the support of our monitoring team.",
        ],
      },
      highlights: [
        {
          title: "Floating bridges",
          description: "Moving logs and V-shaped crossings that work balance and coordination.",
        },
        {
          title: "Rest platforms",
          description: "Spacious platforms mid-course to regroup, breathe and enjoy the view.",
        },
        {
          title: "Curved zipline",
          description: "A longer zip that glides over the clearing and brings you back to base.",
        },
      ],
      experience: {
        title: "Three key moments",
        description:
          "Structured check-in, elevated obstacles and a thrilling slide – the perfect progression combo.",
        steps: [
          {
            title: "Equipment check",
            description: "Harness fitting, helmet and safety recap before leaving the ground.",
          },
          {
            title: "Elevated course",
            description:
              "Diagonal bridges, moving logs, rope ladders and wide turns that keep everyone engaged.",
          },
          {
            title: "Panoramic zip",
            description: "A swooping finish with a smooth landing area close to the welcome zone.",
          },
        ],
      },
      briefing: {
        title: "Course checklist",
        items: [
          "Arrive 20 minutes earlier.",
          "Remove jewellery and loose objects.",
          "Wear flexible clothing for wide movements.",
          "Call a monitor whenever you need assistance.",
        ],
      },
      gallery: [
        { src: `${baseMediaUrl}/imagens/arborimo_2.jpg`, alt: "Participant on the yellow circuit" },
        { src: `${baseMediaUrl}/imagens/arborimo_3.jpg`, alt: "Diagonal bridge on the yellow course" },
        { src: `${baseMediaUrl}/image3.jpg`, alt: "Zipline landing zone" },
      ],
      cta: {
        title: "Secure your slot",
        subtitle:
          "Available for families, birthdays and school outings – book the schedule that suits you best.",
        primaryLabel: "Book yellow circuit",
        primaryHref: "/#reservas",
      },
    },
    {
      slug: "verde",
      label: "Green Circuit",
      color: "#8dc63f",
      gradient: "linear-gradient(135deg, rgba(141,198,63,0.95), rgba(55,174,70,0.75))",
      hero: {
        badge: "Tree-top Adventure",
        title: "Green Circuit · Intermediate Challenge",
        subtitle:
          "Designed for adventurers who already trust their balance. Expect tibetan bridges, X-cables and zigzag segments.",
        backgroundImage: commonImages.verde,
        stats: [
          { label: "Recommended age", value: "9+ years" },
          { label: "Minimum height", value: "1.30 m" },
          { label: "Obstacles", value: "15 technical challenges" },
          { label: "Final zipline", value: "45 m double-curve zip" },
        ],
      },
      quickInfo: [
        { label: "Average duration", value: "35-45 minutes" },
        { label: "Top height", value: "6 metres" },
        { label: "Supervision", value: "Monitors on mid platforms" },
        { label: "Gear", value: "Harness, pulley and optional gloves" },
      ],
      overview: {
        title: "Balance, focus and flow",
        paragraphs: [
          "This level introduces more technical obstacles and enough height to feel the thrill. You will navigate tibetan bridges, suspended boards and a vertical net wall that requires planning every move.",
          "A great option for teens, adults and corporate teams who already have some tree-top experience and want to keep pushing.",
        ],
        note: "Gloves are recommended and available for rental at reception.",
      },
      highlights: [
        {
          title: "Tibetan bridges",
          description: "Parallel ropes that demand core stability and proper posture.",
        },
        {
          title: "Elevated view",
          description: "Platforms 6 metres high revealing impressive views over the natural reserve.",
        },
        {
          title: "Curved zipline",
          description: "A longer ride that glides through the pine forest canopy.",
        },
      ],
      experience: {
        title: "Three-phase adventure",
        description:
          "Advanced briefing, technical section and panoramic finish – the complete intermediate pack.",
        steps: [
          {
            title: "Advanced briefing",
            description:
              "Focus on stance, breathing and communication to conquer the higher platforms.",
          },
          {
            title: "Technical zone",
            description:
              "X-cables, inclined beams, long diagonals and a vertical rope wall mid-way.",
          },
          {
            title: "Signature zipline",
            description: "A double-curve zip that crosses the highest area of the park.",
          },
        ],
      },
      briefing: {
        title: "Important recommendations",
        items: [
          "Use grippy footwear; gloves strongly advised.",
          "Keep one platform distance between participants.",
          "Inform monitors about any physical condition.",
          "Stay hydrated – there is a water point near the start.",
        ],
      },
      gallery: [
        { src: `${baseMediaUrl}/image6.jpg`, alt: "Participant on the green circuit" },
        { src: `${baseMediaUrl}/image4.png`, alt: "View from the tree-top course" },
        { src: `${baseMediaUrl}/imagens/arborimo_2.jpg`, alt: "Technical section of the circuit" },
      ],
      cta: {
        title: "Take on the green circuit",
        subtitle:
          "Book for adventurous teens, sports teams and friends looking to test their limits together.",
        primaryLabel: "Book green circuit",
        primaryHref: "/#reservas",
      },
    },
    {
      slug: "azul",
      label: "Blue Circuit",
      color: "#1b75bb",
      gradient: "linear-gradient(135deg, rgba(27,117,187,0.95), rgba(13,54,115,0.8))",
      hero: {
        badge: "Tree-top Adventure",
        title: "Blue Circuit · High Thrill",
        subtitle:
          "Advanced route with moving planks, controlled jumps and a 60-metre zipline through the canopy.",
        backgroundImage: commonImages.azul,
        stats: [
          { label: "Recommended age", value: "11+ years" },
          { label: "Minimum height", value: "1.40 m" },
          { label: "Obstacles", value: "17 advanced challenges" },
          { label: "Final zipline", value: "60 m canopy zip" },
        ],
      },
      quickInfo: [
        { label: "Average duration", value: "40-50 minutes" },
        { label: "Top height", value: "9 metres" },
        { label: "Supervision", value: "Dedicated monitors on key platforms" },
        { label: "Gear", value: "Performance harness + gloves included" },
      ],
      overview: {
        title: "For fearless climbers",
        paragraphs: [
          "The Blue Circuit takes you to the tallest pine tops. Expect moving boards, wobbling paths and obstacles that demand focus, strength and coordination.",
          "Suited for experienced families, sporty teens and corporate groups who want a real adrenaline boost.",
        ],
      },
      highlights: [
        {
          title: "Snowboard crossing",
          description: "Glide along a single suspended beam keeping your balance like a pro.",
        },
        {
          title: "Tarzan swing",
          description: "Hold tight and leap into the air before landing on a vertical net.",
        },
        {
          title: "Giant zipline",
          description: "Sixty metres of pure thrill with a wide overview of the entire park.",
        },
      ],
      experience: {
        title: "Adventure breakdown",
        description:
          "Detailed briefing, tough obstacles and a memorable finish. Everything you need for a high-adrenaline day.",
        steps: [
          {
            title: "Technical warm-up",
            description:
              "Safety recap focused on posture, jumping technique and zipline landing procedure.",
          },
          {
            title: "Advanced course",
            description:
              "Suspended boards, single-beam crossings, vertical nets and the famous Tarzan jump.",
          },
          {
            title: "Canopy zipline",
            description:
              "A 60-metre ride with a sweeping view before returning to the base area.",
          },
        ],
      },
      briefing: {
        title: "Before the blue circuit",
        items: [
          "Double-check harness fit with a monitor.",
          "Wear the gloves provided – they are mandatory.",
          "Jump only when the monitor gives a go.",
          "Communicate with your group between platforms.",
        ],
      },
      gallery: [
        { src: `${baseMediaUrl}/image7.png`, alt: "Participant on a high tree-top obstacle" },
        { src: `${baseMediaUrl}/imagens/arborimo_3.jpg`, alt: "Advanced bridge on the blue circuit" },
        { src: `${baseMediaUrl}/image6.jpg`, alt: "Zipline ending zone with friends cheering" },
      ],
      cta: {
        title: "Book your blue adventure",
        subtitle:
          "Secure a session with our advanced monitors and push your limits surrounded by nature.",
        primaryLabel: "Book blue circuit",
        primaryHref: "/#reservas",
      },
    },
    {
      slug: "vermelho",
      label: "Red Circuit",
      color: "#ed1c24",
      gradient: "linear-gradient(135deg, rgba(237,28,36,0.95), rgba(141,3,16,0.85))",
      hero: {
        badge: "Tree-top Adventure",
        title: "Red Circuit · FunPark Elite",
        subtitle:
          "The ultimate challenge in São João. Extreme obstacles, mandatory jumps and the fastest zip in the park.",
        backgroundImage: commonImages.vermelho,
        stats: [
          { label: "Recommended age", value: "14+ years" },
          { label: "Minimum height", value: "1.50 m" },
          { label: "Obstacles", value: "19 intense challenges" },
          { label: "Final zipline", value: "70 m high-speed ride" },
        ],
      },
      quickInfo: [
        { label: "Average duration", value: "45-60 minutes" },
        { label: "Top height", value: "11 metres" },
        { label: "Supervision", value: "Senior monitoring team" },
        { label: "Gear", value: "Performance harness + dual safety system" },
      ],
      overview: {
        title: "Reserved for bold adventurers",
        paragraphs: [
          "The Red Circuit is a legend among FunPark regulars. Expect wide gaps, demanding rope climbs, a free-fall simulator and a turbo zipline that finishes by the lake.",
          "Perfect for experienced climbers, corporate hero programs and thrill-seeking athletes. Strong physical condition and respect for instructions are mandatory.",
        ],
        note: "Previous experience in advanced tree-top courses may be required.",
      },
      highlights: [
        {
          title: "Redundant safety",
          description: "Continuous lifeline with independent backup for the most extreme elements.",
        },
        {
          title: "Extreme obstacles",
          description: "Long diagonal crossings, high nets, spaced stirrups and a controlled free-fall.",
        },
        {
          title: "Turbo zip",
          description: "Seventy metres of steep descent ending next to the artificial lake.",
        },
      ],
      experience: {
        title: "Elite route flow",
        description:
          "Technical coaching, endurance section, Tarzan leap and high-speed finale. The full FunPark adrenaline package.",
        steps: [
          {
            title: "Technical coaching",
            description:
              "Ground session to rehearse procedures, hand signals and team communication.",
          },
          {
            title: "Endurance zone",
            description:
              "A series of stamina-heavy obstacles with a dedicated monitor guiding each group.",
          },
          {
            title: "Legendary finale",
            description:
              "Tarzan jump, controlled drop and turbo zipline to celebrate in style.",
          },
        ],
      },
      briefing: {
        title: "Mandatory rules",
        items: [
          "Participation subject to monitor approval.",
          "Gloves and rigid-sole closed shoes required.",
          "Respect minimum distance between climbers.",
          "Inform staff about any vertigo or physical limitation.",
        ],
      },
      gallery: [
        { src: `${baseMediaUrl}/image8.png`, alt: "Participant overcoming a high obstacle" },
        { src: `${baseMediaUrl}/image7.png`, alt: "Advanced jump on the red circuit" },
        { src: `${baseMediaUrl}/imagens/arborimo_3.jpg`, alt: "Controlled fall element" },
      ],
      cta: {
        title: "Face the red circuit",
        subtitle:
          "Book ahead to guarantee specialised monitors and a tailored briefing for your group.",
        primaryLabel: "Book red circuit",
        primaryHref: "/#reservas",
      },
    },
  ],
  es: [
    {
      slug: "laranja",
      label: "Circuito Naranja",
      color: "#f7941d",
      gradient: "linear-gradient(135deg, rgba(247,148,29,0.95), rgba(255,209,84,0.75))",
      hero: {
        badge: "Aventura en los árboles",
        title: "Circuito Naranja · Primeras alturas",
        subtitle:
          "Empieza la aventura a 1,5 metros del suelo con juegos suaves pensados para descubrir el arborismo en familia.",
        backgroundImage: commonImages.laranja,
        stats: [
          { label: "Edad recomendada", value: "5+ años" },
          { label: "Altura mínima", value: "1,05 m" },
          { label: "Obstáculos", value: "12 retos progresivos" },
          { label: "Tirolina final", value: "20 m de diversión" },
        ],
      },
      quickInfo: [
        { label: "Duración media", value: "20-30 minutos" },
        { label: "Altura máxima", value: "2 metros" },
        { label: "Acompañamiento", value: "Briefing + monitor en pista" },
        { label: "Equipamiento", value: "Arnés integral + línea de vida continua" },
      ],
      overview: {
        title: "El inicio perfecto",
        paragraphs: [
          "El circuito naranja está diseñado para niños y adultos que dan sus primeros pasos en el arborismo. Plataformas bajas, apoyos amplios y zonas de descanso permiten avanzar al ritmo de cada participante.",
          "Tras el briefing inicial hay puentes de troncos, túneles de cuerda y redes horizontales que trabajan el equilibrio con máxima seguridad.",
        ],
        note: "Incluye tirolina final con aterrizaje amortiguado.",
      },
      highlights: [
        {
          title: "Seguridad continua",
          description:
            "Línea de vida sin maniobras de mosquetones: ideal para aprender el sistema con confianza.",
        },
        {
          title: "Obstáculos lúdicos",
          description:
            "Puentes cortos, túneles y redes que animan sin imponer miedo a los más pequeños.",
        },
        {
          title: "Zona familiar",
          description:
            "Espacio para acompañantes cerca de la pista, perfecto para sacar fotos y animar.",
        },
      ],
      experience: {
        title: "Así será tu experiencia",
        description:
          "Briefing, juegos suspendidos y tirolina final. Una vivencia completa en menos de treinta minutos.",
        steps: [
          {
            title: "Preparación",
            description: "Colocación del arnés, comprobaciones y demostración práctica.",
          },
          {
            title: "Obstáculos suaves",
            description: "Puentes de troncos, redes y plataformas muy estables.",
          },
          {
            title: "Tirolina final",
            description: "Descenso con monitor esperando en la plataforma de llegada.",
          },
        ],
      },
      briefing: {
        title: "Antes de subir",
        items: [
          "Llegar 15 minutos antes para equiparse con calma.",
          "Recoger el pelo y quitar accesorios sueltos.",
          "Calzado cerrado obligatorio.",
          "Seguir siempre las instrucciones de los monitores FunPark.",
        ],
      },
      gallery: [
        { src: `${baseMediaUrl}/imagens/arborimo_3.jpg`, alt: "Inicio del circuito naranja" },
        { src: `${baseMediaUrl}/imagens/arborimo_2.jpg`, alt: "Niños en puente colgante" },
        { src: `${baseMediaUrl}/image2.png`, alt: "Tirolina final del circuito" },
      ],
      cta: {
        title: "¿Listo para empezar?",
        subtitle:
          "Reserva el circuito naranja para tu familia o colegio y asegura monitor dedicado.",
        primaryLabel: "Reservar circuito naranja",
        primaryHref: "/#reservas",
      },
    },
    {
      slug: "amarelo",
      label: "Circuito Amarillo",
      color: "#ffd400",
      gradient: "linear-gradient(135deg, rgba(255,212,0,0.95), rgba(255,162,0,0.8))",
      hero: {
        badge: "Aventura en los árboles",
        title: "Circuito Amarillo · Evolución en familia",
        subtitle:
          "Secuencia dinámica a 3 metros con puentes en V, troncos móviles y tirolina final más larga.",
        backgroundImage: commonImages.amarelo,
        stats: [
          { label: "Edad recomendada", value: "7+ años" },
          { label: "Altura mínima", value: "1,20 m" },
          { label: "Obstáculos", value: "14 retos" },
          { label: "Tirolina final", value: "35 m de longitud" },
        ],
      },
      quickInfo: [
        { label: "Duración media", value: "30-40 minutos" },
        { label: "Altura máxima", value: "3,5 metros" },
        { label: "Acompañamiento", value: "Monitores en torres de observación" },
        { label: "Equipamiento", value: "Arnés + polea para tirolina" },
      ],
      overview: {
        title: "Subir de nivel juntos",
        paragraphs: [
          "Tras dominar las bases, toca afrontar alturas mayores. El circuito amarillo añade pasos diagonales, peldaños móviles y puntos de descanso para retomar fuerzas.",
          "Ideal para familias con niños seguros y excursiones escolares. Los monitores vigilan y ayudan en cada transición.",
        ],
      },
      highlights: [
        {
          title: "Puentes flotantes",
          description: "Degraus móviles que trabajan el equilibrio de forma divertida.",
        },
        {
          title: "Plataformas de descanso",
          description: "Espacios amplios para detenerse, respirar y disfrutar del paisaje.",
        },
        {
          title: "Tirolina curva",
          description: "Descenso final más largo con curva suave hasta la base.",
        },
      ],
      experience: {
        title: "Momentos destacados",
        description:
          "Recepción cuidada, recorrido elevado y final emocionante – todo acompañado por nuestro equipo.",
        steps: [
          {
            title: "Check-in",
            description: "Entrega de arnés, casco y repaso de normas de seguridad.",
          },
          {
            title: "Recorrido elevado",
            description: "Puentes diagonales, troncos móviles y redes inclinadas.",
          },
          {
            title: "Tirolina panorámica",
            description: "Vuela sobre el claro principal antes de aterrizar suavemente.",
          },
        ],
      },
      briefing: {
        title: "Checklist del circuito",
        items: [
          "Llegar con 20 minutos de antelación.",
          "Retirar joyas y objetos sueltos.",
          "Ropa cómoda que permita amplitud.",
          "Pedir ayuda al monitor siempre que sea necesario.",
        ],
      },
      gallery: [
        { src: `${baseMediaUrl}/imagens/arborimo_2.jpg`, alt: "Tramo del circuito amarillo" },
        { src: `${baseMediaUrl}/imagens/arborimo_3.jpg`, alt: "Puente en V del circuito amarillo" },
        { src: `${baseMediaUrl}/image3.jpg`, alt: "Zona de llegada de la tirolina" },
      ],
      cta: {
        title: "Reserva tu horario",
        subtitle:
          "Disponible para familias, cumpleaños y colegios. Elige la hora y asegura monitor dedicado.",
        primaryLabel: "Reservar circuito amarillo",
        primaryHref: "/#reservas",
      },
    },
    {
      slug: "verde",
      label: "Circuito Verde",
      color: "#8dc63f",
      gradient: "linear-gradient(135deg, rgba(141,198,63,0.95), rgba(55,174,70,0.75))",
      hero: {
        badge: "Aventura en los árboles",
        title: "Circuito Verde · Reto intermedio",
        subtitle:
          "Para aventureros que ya dominan las bases. Obstáculos técnicos, cuerdas en X y pasarelas en zigzag.",
        backgroundImage: commonImages.verde,
        stats: [
          { label: "Edad recomendada", value: "9+ años" },
          { label: "Altura mínima", value: "1,30 m" },
          { label: "Obstáculos", value: "15 retos técnicos" },
          { label: "Tirolina final", value: "45 m con doble curva" },
        ],
      },
      quickInfo: [
        { label: "Duración media", value: "35-45 minutos" },
        { label: "Altura máxima", value: "6 metros" },
        { label: "Acompañamiento", value: "Monitores en plataformas medias" },
        { label: "Equipamiento", value: "Arnés, polea y guantes opcionales" },
      ],
      overview: {
        title: "Equilibrio y concentración",
        paragraphs: [
          "Este nivel introduce obstáculos más técnicos y altura suficiente para sentir adrenalina. Enfrentarás puentes tibetanos, tablas suspendidas y un muro de redes vertical.",
          "Ideal para adolescentes, adultos y equipos que ya han vivido experiencias de arborismo y quieren seguir evolucionando.",
        ],
        note: "Se recomiendan guantes. Disponibles para alquiler en la recepción.",
      },
      highlights: [
        {
          title: "Puentes tibetanos",
          description: "Cuatro cuerdas paralelas que desafían la estabilidad.",
        },
        {
          title: "Vistas elevadas",
          description: "Plataformas a 6 metros con vistas espectaculares del parque.",
        },
        {
          title: "Tirolina doble curva",
          description: "Cierre icónico que recorre la parte más alta del circuito.",
        },
      ],
      experience: {
        title: "Aventura en tres fases",
        description:
          "Briefing avanzado, zona técnica y final panorámico. Todo lo que buscas en un desafío intermedio.",
        steps: [
          {
            title: "Briefing avanzado",
            description:
              "Refuerzo de postura, respiración y comunicación con el equipo de monitores.",
          },
          {
            title: "Zona técnica",
            description: "Cuerdas en X, vigas inclinadas y muro de redes en vertical.",
          },
          {
            title: "Tirolina emblemática",
            description: "Descenso largo que sobrevuela el área más alta del parque.",
          },
        ],
      },
      briefing: {
        title: "Recomendaciones clave",
        items: [
          "Usar calzado con buena adherencia; guantes recomendados.",
          "Mantener siempre una plataforma de distancia.",
          "Avisar de cualquier condición física al monitor.",
          "Hidratarse antes de iniciar el recorrido.",
        ],
      },
      gallery: [
        { src: `${baseMediaUrl}/image6.jpg`, alt: "Participante en el circuito verde" },
        { src: `${baseMediaUrl}/image4.png`, alt: "Vista sobre el parque desde las copas" },
        { src: `${baseMediaUrl}/imagens/arborimo_2.jpg`, alt: "Zona técnica del circuito verde" },
      ],
      cta: {
        title: "Acepta el reto verde",
        subtitle:
          "Reserva para adolescentes intrépidos, equipos deportivos y grupos de amigos.",
        primaryLabel: "Reservar circuito verde",
        primaryHref: "/#reservas",
      },
    },
    {
      slug: "azul",
      label: "Circuito Azul",
      color: "#1b75bb",
      gradient: "linear-gradient(135deg, rgba(27,117,187,0.95), rgba(13,54,115,0.8))",
      hero: {
        badge: "Aventura en los árboles",
        title: "Circuito Azul · Adrenalina en altura",
        subtitle:
          "Recorrido avanzado con tablones móviles, saltos controlados y tirolina de 60 metros.",
        backgroundImage: commonImages.azul,
        stats: [
          { label: "Edad recomendada", value: "11+ años" },
          { label: "Altura mínima", value: "1,40 m" },
          { label: "Obstáculos", value: "17 desafíos avanzados" },
          { label: "Tirolina final", value: "60 m entre las copas" },
        ],
      },
      quickInfo: [
        { label: "Duración media", value: "40-50 minutos" },
        { label: "Altura máxima", value: "9 metros" },
        { label: "Acompañamiento", value: "Monitores dedicados en puntos clave" },
        { label: "Equipamiento", value: "Arnés reforzado + guantes incluidos" },
      ],
      overview: {
        title: "Para los que no temen las alturas",
        paragraphs: [
          "El circuito azul te coloca en la copa de los pinos. Las pasarelas se mueven, las cuerdas vibran y la adrenalina está garantizada.",
          "Recomendado para aventureros con buena condición física, familias experimentadas y equipos corporativos.",
        ],
      },
      highlights: [
        {
          title: "Paso snowboard",
          description: "Un único tablón suspendido para avanzar con los pies paralelos.",
        },
        {
          title: "Salto tarzán",
          description: "Cuerda vertical con recepción en red que libera toda la energía.",
        },
        {
          title: "Mega tirolina",
          description: "Sesenta metros de descenso con vistas 360º del FunPark.",
        },
      ],
      experience: {
        title: "Desglose de la aventura",
        description:
          "Briefing técnico, obstáculos exigentes y final memorable. Todo lo necesario para un día de adrenalina.",
        steps: [
          {
            title: "Calentamiento técnico",
            description:
              "Repaso de postura, técnica de salto y posición correcta para aterrizar en la tirolina.",
          },
          {
            title: "Recorrido avanzado",
            description:
              "Tablones suspendidos, vigas individuales, redes verticales y salto tarzán.",
          },
          {
            title: "Tirolina entre copas",
            description: "Sesenta metros deslizándote sobre la zona alta del parque.",
          },
        ],
      },
      briefing: {
        title: "Antes del circuito azul",
        items: [
          "Comprobar el arnés con un monitor.",
          "Usar los guantes proporcionados; son obligatorios.",
          "Saltar solo tras la señal del monitor.",
          "Comunicarte con tu grupo entre plataformas.",
        ],
      },
      gallery: [
        { src: `${baseMediaUrl}/image7.png`, alt: "Participante en obstáculo avanzado" },
        { src: `${baseMediaUrl}/imagens/arborimo_3.jpg`, alt: "Puente alto del circuito azul" },
        { src: `${baseMediaUrl}/image6.jpg`, alt: "Tirolina del circuito azul" },
      ],
      cta: {
        title: "Reserva la aventura azul",
        subtitle:
          "Asegura una sesión con monitores avanzados y vive una experiencia de altura.",
        primaryLabel: "Reservar circuito azul",
        primaryHref: "/#reservas",
      },
    },
    {
      slug: "vermelho",
      label: "Circuito Rojo",
      color: "#ed1c24",
      gradient: "linear-gradient(135deg, rgba(237,28,36,0.95), rgba(141,3,16,0.85))",
      hero: {
        badge: "Aventura en los árboles",
        title: "Circuito Rojo · Elite FunPark",
        subtitle:
          "El máximo desafío en São João. Obstáculos extremos, saltos obligatorios y la tirolina más rápida.",
        backgroundImage: commonImages.vermelho,
        stats: [
          { label: "Edad recomendada", value: "14+ años" },
          { label: "Altura mínima", value: "1,50 m" },
          { label: "Obstáculos", value: "19 desafíos intensos" },
          { label: "Tirolina final", value: "70 m de velocidad" },
        ],
      },
      quickInfo: [
        { label: "Duración media", value: "45-60 minutos" },
        { label: "Altura máxima", value: "11 metros" },
        { label: "Acompañamiento", value: "Equipo senior de monitores" },
        { label: "Equipamiento", value: "Arnés performance + sistema dual" },
      ],
      overview: {
        title: "Para los más audaces",
        paragraphs: [
          "El circuito rojo es la prueba definitiva. Gaps amplios, subidas exigentes, salto de caída controlada y una tirolina turbo que termina junto al lago.",
          "Reservado para escaladores experimentados, programas corporativos de alto rendimiento y deportistas que buscan superar límites.",
        ],
        note: "Puede requerirse experiencia previa en circuitos avanzados.",
      },
      highlights: [
        {
          title: "Seguridad redundante",
          description: "Línea continua con respaldo independiente en los elementos más extremos.",
        },
        {
          title: "Obstáculos extremos",
          description: "Cruces diagonales largos, estribos separados, redes elevadas y caída controlada.",
        },
        {
          title: "Tirolina turbo",
          description: "Setenta metros de descenso con gran inclinación y llegada junto al lago artificial.",
        },
      ],
      experience: {
        title: "Flujo de la ruta élite",
        description:
          "Coaching técnico, zona de resistencia, salto tarzán y final a toda velocidad. Un paquete total de adrenalina.",
        steps: [
          {
            title: "Coaching técnico",
            description:
              "Sesión en el suelo para repasar procedimientos, señales y dinámica de grupo.",
          },
          {
            title: "Zona de resistencia",
            description:
              "Serie de obstáculos exigentes con monitor asignado por sección.",
          },
          {
            title: "Final legendario",
            description:
              "Salto tarzán, caída controlada y tirolina turbo para celebrar la hazaña.",
          },
        ],
      },
      briefing: {
        title: "Reglas obligatorias",
        items: [
          "Participación sujeta a aprobación del monitor.",
          "Uso obligatorio de guantes y calzado cerrado rígido.",
          "Mantener distancia mínima entre participantes.",
          "Avisar de vértigo o limitaciones físicas antes de empezar.",
        ],
      },
      gallery: [
        { src: `${baseMediaUrl}/image8.png`, alt: "Participante en el circuito rojo" },
        { src: `${baseMediaUrl}/image7.png`, alt: "Momento de salto en altura" },
        { src: `${baseMediaUrl}/imagens/arborimo_3.jpg`, alt: "Elemento de caída controlada" },
      ],
      cta: {
        title: "Enfrenta el circuito rojo",
        subtitle:
          "Reserva con antelación para disponer de monitores especialistas y briefing personalizado.",
        primaryLabel: "Reservar circuito rojo",
        primaryHref: "/#reservas",
      },
    },
  ],
  fr: [
    {
      slug: "laranja",
      label: "Parcours Orange",
      color: "#f7941d",
      gradient: "linear-gradient(135deg, rgba(247,148,29,0.95), rgba(255,209,84,0.75))",
      hero: {
        badge: "Aventure dans les arbres",
        title: "Parcours Orange · Premières hauteurs",
        subtitle:
          "Un parcours d’initiation à 1,5 mètre du sol, idéal pour les familles qui découvrent l’arborisme.",
        backgroundImage: commonImages.laranja,
        stats: [
          { label: "Âge recommandé", value: "5+ ans" },
          { label: "Taille minimum", value: "1,05 m" },
          { label: "Obstacles", value: "12 défis progressifs" },
          { label: "Tyrolienne finale", value: "20 m de glisse" },
        ],
      },
      quickInfo: [
        { label: "Durée moyenne", value: "20-30 minutes" },
        { label: "Hauteur max.", value: "2 mètres" },
        { label: "Encadrement", value: "Briefing + moniteur sur zone" },
        { label: "Équipement", value: "Baudrier intégral + ligne de vie continue" },
      ],
      overview: {
        title: "Le premier pas idéal",
        paragraphs: [
          "Le parcours orange facilite les premiers pas en hauteur grâce à des plateformes larges et des obstacles doux. Chaque participant avance à son rythme sous le regard des moniteurs.",
          "Après le briefing, place aux ponts de troncs, filets horizontaux et tunnels de corde pour travailler l’équilibre tout en s’amusant.",
        ],
        note: "Tyrolienne finale avec arrivée amortie pour terminer tout en douceur.",
      },
      highlights: [
        {
          title: "Ligne continue",
          description:
            "Aucune manipulation complexe de mousquetons – parfait pour apprendre en toute sécurité.",
        },
        {
          title: "Obstacles ludiques",
          description: "Ponts courts, tunnels et filets accessibles aux plus jeunes.",
        },
        {
          title: "Zone familles",
          description: "Espace d’observation confortable pour les proches et pour prendre des photos.",
        },
      ],
      experience: {
        title: "Déroulé de l’activité",
        description:
          "Briefing, obstacles suspendus et petite tyrolienne finale. Trente minutes d’émotions.",
        steps: [
          {
            title: "Équipement",
            description: "Mise en place du baudrier, vérifications et démonstration pratique.",
          },
          {
            title: "Jeux en hauteur",
            description: "Traversées faciles pour prendre confiance pas à pas.",
          },
          {
            title: "Tyrolienne douce",
            description: "Petit vol supervisé par le moniteur à l’arrivée.",
          },
        ],
      },
      briefing: {
        title: "Avant de grimper",
        items: [
          "Arriver 15 minutes en avance.",
          "Attacher les cheveux et retirer les accessoires mobiles.",
          "Porter des chaussures fermées.",
          "Suivre les consignes des moniteurs FunPark.",
        ],
      },
      gallery: [
        { src: `${baseMediaUrl}/imagens/arborimo_3.jpg`, alt: "Famille sur le parcours orange" },
        { src: `${baseMediaUrl}/imagens/arborimo_2.jpg`, alt: "Enfants traversant un pont suspendu" },
        { src: `${baseMediaUrl}/image2.png`, alt: "Tyrolienne finale du parcours orange" },
      ],
      cta: {
        title: "Prêt à commencer ?",
        subtitle:
          "Réservez le parcours orange pour votre famille ou votre école et bénéficiez d’un moniteur dédié.",
        primaryLabel: "Réserver parcours orange",
        primaryHref: "/#reservas",
      },
    },
    {
      slug: "amarelo",
      label: "Parcours Jaune",
      color: "#ffd400",
      gradient: "linear-gradient(135deg, rgba(255,212,0,0.95), rgba(255,162,0,0.8))",
      hero: {
        badge: "Aventure dans les arbres",
        title: "Parcours Jaune · Progression en famille",
        subtitle:
          "Ponts diagonaux, troncs mobiles et tyrolienne allongée : une montée d’adrénaline partagée.",
        backgroundImage: commonImages.amarelo,
        stats: [
          { label: "Âge recommandé", value: "7+ ans" },
          { label: "Taille minimum", value: "1,20 m" },
          { label: "Obstacles", value: "14 défis" },
          { label: "Tyrolienne finale", value: "35 m de parcours" },
        ],
      },
      quickInfo: [
        { label: "Durée moyenne", value: "30-40 minutes" },
        { label: "Hauteur max.", value: "3,5 mètres" },
        { label: "Encadrement", value: "Moniteurs en tour d’observation" },
        { label: "Équipement", value: "Baudrier + poulie de tyrolienne" },
      ],
      overview: {
        title: "Monter d’un cran",
        paragraphs: [
          "Le parcours jaune augmente la hauteur et le mouvement sous vos pieds tout en conservant un esprit familial.",
          "Idéal pour les enfants à l’aise et les sorties scolaires. Les moniteurs suivent l’ensemble du parcours et interviennent dès qu’il faut.",
        ],
      },
      highlights: [
        {
          title: "Ponts flottants",
          description: "Obstacles dynamiques qui testent l’équilibre avec une bonne dose de fun.",
        },
        {
          title: "Plates-formes de repos",
          description: "Des espaces généreux pour souffler et admirer la vue.",
        },
        {
          title: "Tyrolienne panoramique",
          description: "Longue descente qui survole la clairière avant de revenir à la base.",
        },
      ],
      experience: {
        title: "Temps forts",
        description:
          "Accueil, obstacles en hauteur et final spectaculaire — une progression maîtrisée.",
        steps: [
          {
            title: "Accueil & équipement",
            description: "Contrôle des baudriers, consignes et préparatifs.",
          },
          {
            title: "Parcours aérien",
            description: "Ponts en V, troncs mobiles, filets inclinés.",
          },
          {
            title: "Tyrolienne finale",
            description: "Saut panoramique pour conclure l’activité en beauté.",
          },
        ],
      },
      briefing: {
        title: "Checklist parcours",
        items: [
          "Arriver 20 minutes avant l’horaire.",
          "Retirer bijoux et objets pendants.",
          "Porter des vêtements souples.",
          "Demander assistance au moniteur si besoin.",
        ],
      },
      gallery: [
        { src: `${baseMediaUrl}/imagens/arborimo_2.jpg`, alt: "Pont du parcours jaune" },
        { src: `${baseMediaUrl}/imagens/arborimo_3.jpg`, alt: "Vue générale du parcours jaune" },
        { src: `${baseMediaUrl}/image3.jpg`, alt: "Zone d’arrivée de la tyrolienne" },
      ],
      cta: {
        title: "Réservez votre créneau",
        subtitle:
          "Pour familles, anniversaires ou écoles – choisissez la date idéale et profitez d’un moniteur dédié.",
        primaryLabel: "Réserver parcours jaune",
        primaryHref: "/#reservas",
      },
    },
    {
      slug: "verde",
      label: "Parcours Vert",
      color: "#8dc63f",
      gradient: "linear-gradient(135deg, rgba(141,198,63,0.95), rgba(55,174,70,0.75))",
      hero: {
        badge: "Aventure dans les arbres",
        title: "Parcours Vert · Défi intermédiaire",
        subtitle:
          "Pour aventuriers confiants : ponts tibétains, câbles en X et passages en zigzag.",
        backgroundImage: commonImages.verde,
        stats: [
          { label: "Âge recommandé", value: "9+ ans" },
          { label: "Taille minimum", value: "1,30 m" },
          { label: "Obstacles", value: "15 défis techniques" },
          { label: "Tyrolienne finale", value: "45 m à double courbe" },
        ],
      },
      quickInfo: [
        { label: "Durée moyenne", value: "35-45 minutes" },
        { label: "Hauteur max.", value: "6 mètres" },
        { label: "Encadrement", value: "Moniteurs sur plateformes intermédiaires" },
        { label: "Équipement", value: "Baudrier, poulie, gants recommandés" },
      ],
      overview: {
        title: "Équilibre et concentration",
        paragraphs: [
          "Le parcours vert augmente la difficulté avec des obstacles techniques et des hauteurs plus importantes.",
          "Un choix parfait pour adolescents, adultes et équipes motivées à dépasser leurs limites.",
        ],
        note: "Gants conseillés (location disponible à l’accueil).",
      },
      highlights: [
        {
          title: "Ponts tibétains",
          description: "Cordes parallèles qui mettent votre stabilité à l’épreuve.",
        },
        {
          title: "Panorama unique",
          description: "Plates-formes à 6 mètres offrant une vue sensationnelle sur le parc.",
        },
        {
          title: "Tyrolienne sinueuse",
          description: "Descente emblématique traversant la canopée.",
        },
      ],
      experience: {
        title: "Défi en trois actes",
        description:
          "Briefing poussé, section technique, final panoramique – le combo gagnant pour progresser.",
        steps: [
          {
            title: "Briefing avancé",
            description: "Posture, respiration et communication avec l’équipe.",
          },
          {
            title: "Section technique",
            description: "Câbles en X, poutres inclinées, mur de filets verticaux.",
          },
          {
            title: "Tyrolienne finale",
            description: "Longue glissade au-dessus des pins de la réserve naturelle.",
          },
        ],
      },
      briefing: {
        title: "Recommandations clés",
        items: [
          "Porter des chaussures adhérentes; gants recommandés.",
          "Respecter une plateforme d’écart entre participants.",
          "Informer le staff de toute condition physique particulière.",
          "S’hydrater avant le départ (point d’eau à proximité).",
        ],
      },
      gallery: [
        { src: `${baseMediaUrl}/image6.jpg`, alt: "Participant sur le parcours vert" },
        { src: `${baseMediaUrl}/image4.png`, alt: "Vue panoramique du parc" },
        { src: `${baseMediaUrl}/imagens/arborimo_2.jpg`, alt: "Section technique du parcours vert" },
      ],
      cta: {
        title: "Relève le défi vert",
        subtitle:
          "Idéal pour groupes sportifs, adolescents aventureux et amis en quête de sensations.",
        primaryLabel: "Réserver parcours vert",
        primaryHref: "/#reservas",
      },
    },
    {
      slug: "azul",
      label: "Parcours Bleu",
      color: "#1b75bb",
      gradient: "linear-gradient(135deg, rgba(27,117,187,0.95), rgba(13,54,115,0.8))",
      hero: {
        badge: "Aventure dans les arbres",
        title: "Parcours Bleu · Adrénaline haut perchée",
        subtitle:
          "Route avancée mêlant planches mobiles, sauts contrôlés et tyrolienne de 60 mètres.",
        backgroundImage: commonImages.azul,
        stats: [
          { label: "Âge recommandé", value: "11+ ans" },
          { label: "Taille minimum", value: "1,40 m" },
          { label: "Obstacles", value: "17 défis avancés" },
          { label: "Tyrolienne finale", value: "60 m au-dessus de la canopée" },
        ],
      },
      quickInfo: [
        { label: "Durée moyenne", value: "40-50 minutes" },
        { label: "Hauteur max.", value: "9 mètres" },
        { label: "Encadrement", value: "Moniteurs dédiés aux plates-formes clés" },
        { label: "Équipement", value: "Baudrier performance + gants fournis" },
      ],
      overview: {
        title: "Pour ceux qui aiment les frissons",
        paragraphs: [
          "Le parcours bleu vous emmène au sommet des pins. Les obstacles bougent, le vent se fait sentir et l’adrénaline monte.",
          "Recommandé aux grimpeurs expérimentés, familles habituées et programmes corporate en quête de défi.",
        ],
      },
      highlights: [
        {
          title: "Passage snowboard",
          description: "Avancez sur une planche suspendue comme sur une piste de glisse.",
        },
        {
          title: "Saut tarzán",
          description: "Prenez de l’élan et atterrissez sur un grand filet vertical.",
        },
        {
          title: "Méga tyrolienne",
          description: "Soixante mètres de vitesse avec vue globale sur le FunPark.",
        },
      ],
      experience: {
        title: "Déroulé de l’aventure",
        description:
          "Briefing technique, section avancée et final inoubliable. Tout ce qu’il faut pour vivre une montée d’adrénaline.",
        steps: [
          {
            title: "Échauffement technique",
            description:
              "Rappel des postures, techniques de saut et procédures d’atterrissage.",
          },
          {
            title: "Section avancée",
            description:
              "Planches mobiles, poutres uniques, filets verticaux et fameux saut tarzán.",
          },
          {
            title: "Tyrolienne canopée",
            description: "Glissade de 60 mètres à travers la cime des arbres.",
          },
        ],
      },
      briefing: {
        title: "Avant le parcours bleu",
        items: [
          "Faire vérifier son baudrier par un moniteur.",
          "Porter les gants fournis (obligatoires).",
          "Attendre le signal du moniteur avant chaque saut.",
          "Communiquer avec son groupe entre les plates-formes.",
        ],
      },
      gallery: [
        { src: `${baseMediaUrl}/image7.png`, alt: "Obstacle du parcours bleu" },
        { src: `${baseMediaUrl}/imagens/arborimo_3.jpg`, alt: "Passerelle en hauteur" },
        { src: `${baseMediaUrl}/image6.jpg`, alt: "Tyrolienne du parcours bleu" },
      ],
      cta: {
        title: "Réservez l’aventure bleue",
        subtitle:
          "Bénéficiez d’un encadrement expert et repoussez vos limites dans la nature.",
        primaryLabel: "Réserver parcours bleu",
        primaryHref: "/#reservas",
      },
    },
    {
      slug: "vermelho",
      label: "Parcours Rouge",
      color: "#ed1c24",
      gradient: "linear-gradient(135deg, rgba(237,28,36,0.95), rgba(141,3,16,0.85))",
      hero: {
        badge: "Aventure dans les arbres",
        title: "Parcours Rouge · Elite FunPark",
        subtitle:
          "Le sommet de l’arborisme : obstacles extrêmes, sauts obligatoires et tyrolienne la plus rapide du parc.",
        backgroundImage: commonImages.vermelho,
        stats: [
          { label: "Âge recommandé", value: "14+ ans" },
          { label: "Taille minimum", value: "1,50 m" },
          { label: "Obstacles", value: "19 défis intenses" },
          { label: "Tyrolienne finale", value: "70 m à grande vitesse" },
        ],
      },
      quickInfo: [
        { label: "Durée moyenne", value: "45-60 minutes" },
        { label: "Hauteur max.", value: "11 mètres" },
        { label: "Encadrement", value: "Équipe senior de moniteurs" },
        { label: "Équipement", value: "Baudrier performance + double sécurité" },
      ],
      overview: {
        title: "Pour les plus téméraires",
        paragraphs: [
          "Le parcours rouge est réservé aux aventuriers expérimentés. Espaces larges, murs de cordes verticaux, chute contrôlée et tyrolienne turbo près du lac.",
          "Parfait pour les programmes corporate exigeants, les sportifs ou les habitués de parcours aventure.",
        ],
        note: "Une expérience avancée peut être demandée avant l’accès.",
      },
      highlights: [
        {
          title: "Double sécurité",
          description: "Ligne continue avec système de secours indépendant sur les modules extrêmes.",
        },
        {
          title: "Obstacles extrêmes",
          description:
            "Passages diagonaux longs, échelons espacés, murs verticaux et chute contrôlée.",
        },
        {
          title: "Tyrolienne turbo",
          description: "Soixante-dix mètres de descente avec forte accélération, arrivée près du lac.",
        },
      ],
      experience: {
        title: "Parcours d’élite",
        description:
          "Coaching technique, zone d’endurance, saut tarzán et final haute vitesse — la totale FunPark.",
        steps: [
          {
            title: "Coaching technique",
            description: "Révision des procédures, signaux et communication d’équipe.",
          },
          {
            title: "Zone d’endurance",
            description: "Suite d’obstacles intenses avec moniteur dédié par section.",
          },
          {
            title: "Final légendaire",
            description: "Saut tarzán, chute contrôlée et tyrolienne turbo pour conclure.",
          },
        ],
      },
      briefing: {
        title: "Règles obligatoires",
        items: [
          "Accès soumis à validation du moniteur.",
          "Gants et chaussures fermées rigides obligatoires.",
          "Respecter la distance de sécurité entre participants.",
          "Informer le staff de toute limitation physique ou vertige.",
        ],
      },
      gallery: [
        { src: `${baseMediaUrl}/image8.png`, alt: "Participant sur le parcours rouge" },
        { src: `${baseMediaUrl}/image7.png`, alt: "Saut en hauteur sur le parcours rouge" },
        { src: `${baseMediaUrl}/imagens/arborimo_3.jpg`, alt: "Élément de chute contrôlée" },
      ],
      cta: {
        title: "Affrontez le parcours rouge",
        subtitle:
          "Réservez en avance pour profiter d’un encadrement expert et d’un briefing personnalisé.",
        primaryLabel: "Réserver parcours rouge",
        primaryHref: "/#reservas",
      },
    },
  ],
};


