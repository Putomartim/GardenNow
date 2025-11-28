import { baseMediaUrl, type LanguageKey } from "./site-content";

export type ActivityDetailContent = {
  slug: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    image: string;
  };
  intro: {
    paragraphs: string[];
    note?: string;
    ctaLabel: string;
    ctaHref: string;
  };
  info: { label: string; value: string }[];
  highlights: { title: string; description: string }[];
  checklist: string[];
  gallery: { src: string; alt: string }[];
};

export const activityPagesContent: Record<LanguageKey, ActivityDetailContent[]> = {
  pt: [
    {
      slug: "arborismo",
      hero: {
        badge: "Atividades",
        title: "Arborismo",
        subtitle:
          "Pontes suspensas, redes, tarzan swings e um slide final com vista para a mata. Uma aventura desenhada para famílias, escolas e grupos que querem sentir a natureza de perto.",
        image: `${baseMediaUrl}/imagens/arborismo_crianca.jpg`,
      },
      intro: {
        paragraphs: [
          "A experiência começa no solo, com briefing personalizado, arnês certificado e verificação de segurança realizada pelos nossos monitores. Em poucos minutos estás pronto para subir às plataformas e descobrir jogos aéreos que alternam entre equilíbrio, cordas, túneis e redes.",
          "Depois da introdução, seguem-se quatro circuitos progressivos que vão aumentando a altura e o desafio. As crianças e adultos avançam ao seu ritmo, sempre com apoio visual dos instrutores. No final, um slide panorâmico sobre os pinheiros garante uma despedida memorável.",
        ],
        note: "Sessões disponíveis todo o ano mediante reserva.",
        ctaLabel: "Quero reservar arborismo",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Idades recomendadas", value: "Desde os 5 anos" },
        { label: "Altura mínima", value: "1,05 m para o circuito inicial" },
        { label: "Duração da sessão", value: "1h30 (briefing incluído)" },
        { label: "Circuitos disponíveis", value: "5 níveis progressivos + slide final" },
      ],
      highlights: [
        {
          title: "Briefing completo & equipamento premium",
          description: "Arnês, mosquetões e capacete fornecidos pelo FunPark, com demonstração prática antes de subir.",
        },
        {
          title: "Circuitos escalonados para todos",
          description: "Quatro percursos com alturas e obstáculos diferentes permitem evoluir com confiança e segurança.",
        },
        {
          title: "Slide panorâmico para fechar com chave de ouro",
          description: "Termina a aventura num slide de mais de 150 metros com vista privilegiada para a mata da Caparica.",
        },
      ],
      checklist: [
        "Equipamento certificado incluído na reserva.",
        "Não requer experiência prévia – basta vontade de aventura.",
        "Monitores FunPark presentes ao longo de todo o percurso.",
        "Slide final e pontos fotográficos para registar o momento.",
      ],
      gallery: [],
    },
    {
      slug: "paintball",
      hero: {
        badge: "Atividades",
        title: "Paintball · Cenários exteriores",
        subtitle:
          "Equipa-te com fato completo, máscara, colete e marcador para batalhas estratégicas nos nossos campos rodeados de natureza.",
        image: `${baseMediaUrl}/image3.jpg`,
      },
      intro: {
        paragraphs: [
          "O paintball do FunPark é ideal para grupos de amigos, aniversários e eventos empresariais. Cada sessão começa com uma explicação de segurança, entrega de equipamento completo e divisão das equipas.",
          "Os cenários exteriores dispõem de barricadas naturais, torres de observação e zonas de cobertura que estimulam a estratégia. Os monitores controlam o ritmo dos jogos, propõem missões e asseguram o fair-play.",
        ],
        note: "Disponível para crianças (a partir dos 8 anos) e adultos.",
        ctaLabel: "Reservar paintball",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Jogadores", value: "mínimo 10 participantes" },
        { label: "Idades", value: "Kids 8+ · Adultos 13+" },
        { label: "Duração", value: "1h30 com briefing" },
        { label: "Pacotes", value: "150 a 400 bolas incluídas" },
      ],
      highlights: [
        {
          title: "Equipamento completo",
          description:
            "Inclui marcador, máscara térmica, fato integral, colete, luvas e bolas conforme o pacote escolhido.",
        },
        {
          title: "Cenários imersivos",
          description:
            "Jogos entre obstáculos naturais, pneus, trincheiras e estruturas elevadas que estimulam a estratégia.",
        },
        {
          title: "Monitores dedicados",
          description:
            "Acompanhamento permanente para explicar regras, gerir missões e garantir a segurança das equipas.",
        },
      ],
      checklist: [
        "Briefing inicial e demonstração de segurança.",
        "Marcadores adaptados à faixa etária.",
        "Missões temáticas com diferentes objetivos.",
        "Possibilidade de combinar com arborismo ou trampolins.",
      ],
      gallery: [
        { src: `${baseMediaUrl}/image3.jpg`, alt: "Jogadores de paintball equipados" },
        { src: `${baseMediaUrl}/imagens/paintball_1.jpg`, alt: "Campo de paintball do FunPark" },
        { src: `${baseMediaUrl}/imagens/paintball_2.jpg`, alt: "Equipa a celebrar vitória no paintball" },
      ],
    },
    {
      slug: "playground",
      hero: {
        badge: "Atividades",
        title: "Tenda Iglo · Playground coberto",
        subtitle:
          "Insufláveis, escorregas e jogos lúdicos protegidos da chuva e do calor. A escolha perfeita para festas infantis durante todo o ano.",
        image: `${baseMediaUrl}/image5.jpg`,
      },
      intro: {
        paragraphs: [
          "A tenda iglo do FunPark abriga um conjunto de insufláveis, trampolins, jogos de equilíbrio e zonas de descanso pensadas para crianças dos 4 aos 10 anos.",
          "Durante a festa, os monitores dinamizam brincadeiras, criam mini-desafios em equipa e adaptam o ritmo do programa conforme a energia do grupo.",
        ],
        note: "Espaço reservado e climatizado, com zona para lanche.",
        ctaLabel: "Reservar playground",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Idades", value: "4 a 10 anos" },
        { label: "Altura máxima", value: "1,20 m" },
        { label: "Duração standard", value: "2h30 de festa" },
        { label: "Inclui", value: "insufláveis, monitores e convites" },
      ],
      highlights: [
        {
          title: "Brincadeiras sempre asseguradas",
          description:
            "Programa conduzido por monitores que alternam jogos livres com desafios cooperativos.",
        },
        {
          title: "Espaço climatizado",
          description:
            "Estrutura coberta que protege do vento e da chuva, garantindo conforto aos convidados.",
        },
        {
          title: "Zona de lanche dedicada",
          description:
            "Possibilidade de acrescentar lanche FunPark ou trazer o seu, com mesas já preparadas.",
        },
      ],
      checklist: [
        "Insufláveis atualizados e higienizados.",
        "Mini-trampolins, túnel e jogos de coordenação.",
        "Monitores FunPark durante toda a festa.",
        "Convites digitais incluídos na reserva.",
      ],
      gallery: [
        { src: `${baseMediaUrl}/image5.jpg`, alt: "Estrutura playground coberta" },
        { src: `${baseMediaUrl}/imagens/playground_1.jpg`, alt: "Crianças a brincar no iglo" },
        { src: `${baseMediaUrl}/imagens/playground_2.jpg`, alt: "Zona de jogos dentro da tenda" },
      ],
    },
    {
      slug: "trampolim",
      hero: {
        badge: "Atividades",
        title: "Trampolim & Torre de Saltos",
        subtitle:
          "Salta em trampolins profissionais, supera plataformas até 6 metros e termina com uma aterragem suave em colchões gigantes.",
        image: `${baseMediaUrl}/image6.jpg`,
      },
      intro: {
        paragraphs: [
          "A área de trampolins e torres de saltos combina adrenalina e segurança. Após o briefing inicial, os participantes aprendem técnicas de salto, regras de circulação e formas corretas de aterragem.",
          "Os grupos alternam entre trampolins, torres com diferentes alturas e jogos complementares como karts a pedais e futebol reduzido.",
        ],
        note: "Atividade indoor, ideal para dias de chuva.",
        ctaLabel: "Reservar trampolins",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Idades", value: "6+ (trampolins) · 8+ (torres 5-6 m)" },
        { label: "Duração média", value: "1h30" },
        { label: "Inclui", value: "monitores e karts de apoio" },
        { label: "Local", value: "instalação indoor FunPark" },
      ],
      highlights: [
        {
          title: "Torres com alturas progressivas",
          description:
            "Plataformas entre 3 e 6 metros permitem evoluir com confiança até aos saltos mais altos.",
        },
        {
          title: "Sessões guiadas",
          description:
            "Monitores controlam a rotação, demonstram técnicas e garantem o respeito pelas normas de segurança.",
        },
        {
          title: "Atividade combinável",
          description:
            "Pode ser associada a arborismo, escalada ou lanche em bungalow privativo.",
        },
      ],
      checklist: [
        "Briefing técnico com exercícios de aquecimento.",
        "Saltos assistidos em trampolins profissionais.",
        "Torres com airbags e colchões de alta absorção.",
        "Tempo extra em karts a pedais ou campo de futebol.",
      ],
      gallery: [
        { src: `${baseMediaUrl}/image6.jpg`, alt: "Salto na torre interior do FunPark" },
        { src: `${baseMediaUrl}/imagens/trampolim_1.jpg`, alt: "Participantes nos trampolins" },
        { src: `${baseMediaUrl}/imagens/trampolim_2.jpg`, alt: "Vista da área de torres de salto" },
      ],
    },
    {
      slug: "escalada",
      hero: {
        badge: "Atividades",
        title: "Escalada Indoor · Paredes de 8 metros",
        subtitle:
          "Domina paredes temáticas, desafios suspensos e vias automáticas numa arena coberta com monitores especializados e sistemas auto-belay certificados.",
        image: "http://www.funparquesaojoao.pt/images/4.jpg",
      },
      intro: {
        paragraphs: [
          "A zona de escalada do FunPark transforma o icónico iglo num espaço vertical com vias coloridas, figuras geométricas, redes e desafios que chegam aos 8 metros de altura. Cada sessão arranca com briefing técnico, entrega de arnês e capacete, além de uma demonstração de movimentos essenciais.",
          "Os auto-belay certificados permitem que cada participante progrida ao seu ritmo enquanto os monitores dinamizam jogos de velocidade, desafios cooperativos e momentos de superação. Ideal para famílias, escolas, aniversários e equipas que procuram uma atividade diferente, segura e totalmente indoor.",
        ],
        note: "Sessões de 60 minutos · grupos mínimos de 8 participantes.",
        ctaLabel: "Reservar escalada",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Idades", value: "6+ anos (kids, teens e adultos)" },
        { label: "Altura das paredes", value: "Até 8 metros" },
        { label: "Sessão padrão", value: "60 min + briefing" },
        { label: "Inclui", value: "Arnês, capacete, auto-belay e monitores" },
      ],
      highlights: [
        {
          title: "Paredes temáticas",
          description:
            "Vias com figuras geométricas, pneus e elementos dinâmicos para trabalhar agilidade, força e equilíbrio.",
        },
        {
          title: "Segurança auto-belay",
          description:
            "Dispositivos automáticos certificados garantem segurança constante e permitem focar no desafio.",
        },
        {
          title: "Arena climatizada",
          description:
            "Espaço indoor com lounge para acompanhantes, som ambiente e iluminação que realça cada via.",
        },
      ],
      checklist: [
        "Briefing técnico com demonstração prática.",
        "Arnês, capacete e auto-belay incluídos.",
        "Monitores dedicados em todas as vias.",
        "Possibilidade de combinar com arborismo ou trampolins.",
      ],
      gallery: [
        { src: "http://www.funparquesaojoao.pt/images/4.jpg", alt: "Participante a escalar paredes temáticas no FunPark" },
        { src: "http://www.funparquesaojoao.pt/images/1.jpg", alt: "Zona de escalada com blocos coloridos e redes" },
        { src: "http://www.funparquesaojoao.pt/images/2.jpg", alt: "Área interior de escalada com monitores FunPark" },
      ],
    },
    {
      slug: "aniversarios",
      hero: {
        badge: "Atividades",
        title: "Festas de Aniversário FunPark",
        subtitle:
          "Celebra 2h30 de pura diversão com atividades monitorizadas, convites incluídos e lanche opcional preparado pela nossa equipa.",
        image: `${baseMediaUrl}/image10.png`,
      },
      intro: {
        paragraphs: [
          "Cada festa começa com um acolhimento personalizado, distribuição de convites e briefing de segurança. A partir daí, os aniversariantes seguem para a atividade principal escolhida — arborismo, trampolins, paintball kids ou playground coberto.",
          "O programa inclui momentos de pausa para lanche (trazido por ti ou preparado pelo FunPark), recordação fotográfica e dinâmica final para agradecer a presença dos convidados.",
        ],
        note: "Duração total de 2h30 · mínimo 10 crianças pagantes.",
        ctaLabel: "Quero reservar uma festa",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Idades", value: "4 a 14 anos" },
        { label: "Participantes", value: "Mínimo 10 crianças pagantes" },
        { label: "Inclui", value: "Convites, monitores, atividades e seguro" },
        { label: "Extras", value: "Lanche FunPark e bungalow privativo" },
      ],
      highlights: [
        {
          title: "Aniversariante não paga*",
          description:
            "Oferta especial para o aniversariante nas principais atividades FunPark conforme condições do preçário.",
        },
        {
          title: "Programas personalizados",
          description:
            "Escolhe a atividade principal, acrescenta trampolins, paintball light ou desafios extra para criar uma festa única.",
        },
        {
          title: "Espaços reservados",
          description:
            "Zona de lanche preparada com decoração base, mesas e apoio de monitores para acompanhar o grupo.",
        },
      ],
      checklist: [
        "Convites digitais prontos a enviar.",
        "Monitores dedicados durante todo o programa.",
        "Briefing de segurança e equipamento incluído.",
        "Lanche FunPark opcional com menu completo.",
      ],
      gallery: [
        { src: `${baseMediaUrl}/imagens/aniversarios_1.png`, alt: "Mesa decorada para festa de aniversário no FunPark" },
        { src: `${baseMediaUrl}/image10.png`, alt: "Aniversariante a soprar velas com amigos" },
        { src: `${baseMediaUrl}/imagens/playground_1.jpg`, alt: "Crianças a brincar no playground durante a festa" },
      ],
    },
    {
      slug: "eventos",
      hero: {
        badge: "Atividades",
        title: "Eventos para Empresas",
        subtitle:
          "Team building ao ar livre, programas de incentivo e celebrações corporativas com atividades adaptadas a cada equipa.",
        image: `${baseMediaUrl}/image6.png`,
      },
      intro: {
        paragraphs: [
          "Desenhamos dinâmicas que reforçam a comunicação e o espírito de equipa, combinando desafios de arborismo, paintball estratégico, provas de orientação e momentos de convívio em zonas exclusivas.",
          "Incluímos coffee-breaks, catering e acesso a salas de reunião ou briefings quando necessário. A equipa FunPark apoia desde o planeamento até ao encerramento do evento.",
        ],
        note: "Programas à medida para 10 a 150 participantes.",
        ctaLabel: "Planear evento empresarial",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Formato", value: "Team building, incentivos e reuniões outdoor" },
        { label: "Capacidade", value: "10 a 150 participantes" },
        { label: "Duração", value: "Half-day ou full-day" },
        { label: "Serviços extra", value: "Catering, áudio, fotografia e brindes" },
      ],
      highlights: [
        {
          title: "Desafios cooperativos",
          description:
            "Atividades desenhadas para trabalhar liderança, confiança e resolução de problemas em equipa.",
        },
        {
          title: "Espaços exclusivos",
          description:
            "Reservamos áreas privadas para briefings, coffee-breaks e momentos de networking com ambiente natural.",
        },
        {
          title: "Coordenação completa",
          description:
            "Produção, material técnico, seguros e acompanhamento integral da equipa FunPark do início ao fim.",
        },
      ],
      checklist: [
        "Planeamento conjunto com o departamento de RH ou agência.",
        "Briefing inicial e divisão de equipas com monitores dedicados.",
        "Material técnico e equipamento incluídos em cada atividade.",
        "Opções de catering, brindes e fotografia profissional.",
      ],
      gallery: [
        { src: `${baseMediaUrl}/image2.png`, alt: "Equipa a atravessar ponte suspensa em atividade de team building" },
        { src: `${baseMediaUrl}/image7.png`, alt: "Slide panorâmico durante evento empresarial" },
        { src: `${baseMediaUrl}/imagens/paintball_2.jpg`, alt: "Team building de paintball no FunPark" },
      ],
    },
  ],
  en: [
    {
      slug: "arborismo",
      hero: {
        badge: "Activities",
        title: "Tree-top Adventure & Zip-line",
        subtitle:
          "Tackle suspended bridges, nets and panoramic zip-lines among the pine trees of Caparica. A progressive challenge for families, schools and thrill-seeking teams.",
        image: `${baseMediaUrl}/imagens/arborismo_crianca.jpg`,
      },
      intro: {
        paragraphs: [
          "Every session begins with a full safety briefing. Our instructors equip the group with certified harnesses and explain how to move through the course using carabiners and lifelines.",
          "Four different circuits gradually increase the height and difficulty, allowing children, teens and adults to progress at their own pace while enjoying the scenery.",
        ],
        note: "Open all year with advance booking.",
        ctaLabel: "Book tree-top adventure",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Ages", value: "5+ years" },
        { label: "Minimum height", value: "1.05 m (starter level)" },
        { label: "Session length", value: "90 minutes including briefing" },
        { label: "Available circuits", value: "5 progressive levels + panoramic zip-line" },
      ],
      highlights: [
        {
          title: "Guided from start to finish",
          description:
            "Certified monitors accompany the group during the briefing, on the platforms and on the 200 m zip-line.",
        },
        {
          title: "Progressive difficulty",
          description:
            "From starter to advanced circuits, everyone finds the right mix of balance challenges and adrenaline.",
        },
        {
          title: "Immersed in nature",
          description:
            "Set in a private woodland just minutes away from Lisbon and the beaches of Costa da Caparica.",
        },
      ],
      checklist: [
        "Harness, helmet and carabiners included.",
        "Practical safety demonstration before the course.",
        "Monitors supervising every platform.",
        "Panoramic zip-line with stunning views.",
      ],
      gallery: [],
    },
    {
      slug: "paintball",
      hero: {
        badge: "Activities",
        title: "Outdoor Paintball Arena",
        subtitle:
          "Suit up with full protective gear and challenge your friends in natural battlegrounds filled with barricades, towers and strategy.",
        image: `${baseMediaUrl}/image3.jpg`,
      },
      intro: {
        paragraphs: [
          "Our paintball experience starts with a detailed briefing covering rules, equipment and safety. Teams receive markers adapted to their age group and jump straight into themed missions.",
          "Scenarios combine natural elements with purpose-built structures to keep the game dynamic. Instructors control the matches and adjust game modes to the group’s goals.",
        ],
        note: "Kids format available from 8 years old; adult format from 13 years.",
        ctaLabel: "Book paintball session",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Players", value: "minimum 10 participants" },
        { label: "Age groups", value: "Kids 8+ · Adults 13+" },
        { label: "Session length", value: "Around 1h30" },
        { label: "Ammo packs", value: "150 to 400 paintballs" },
      ],
      highlights: [
        {
          title: "All gear provided",
          description:
            "Marker, thermal mask, full suit, vest and gloves are included in every package.",
        },
        {
          title: "Mission-based gameplay",
          description:
            "Capture the flag, protect the VIP or dominate zones—each mission demands teamwork and tactics.",
        },
        {
          title: "Flexible combinations",
          description:
            "Combine paintball with tree-top adventure or trampolines for a full day of adrenaline.",
        },
      ],
      checklist: [
        "Safety talk and equipment fitting.",
        "Markers adjusted to the player profile.",
        "Structured missions with referees.",
        "Optional snack break or combo activities.",
      ],
      gallery: [
        { src: `${baseMediaUrl}/image3.jpg`, alt: "Paintball players ready for action" },
        { src: `${baseMediaUrl}/imagens/paintball_1.jpg`, alt: "Paintball field at FunPark" },
        { src: `${baseMediaUrl}/imagens/paintball_2.jpg`, alt: "Team celebrating a paintball match" },
      ],
    },
    {
      slug: "playground",
      hero: {
        badge: "Activities",
        title: "Igloo Tent Playground",
        subtitle:
          "Indoor inflatables, slides and cooperative games designed for younger adventurers, in a fully sheltered environment.",
        image: `${baseMediaUrl}/image5.jpg`,
      },
      intro: {
        paragraphs: [
          "The Igloo Tent shelters a colourful playground with inflatables, tunnels, trampolines and themed corners. It is the perfect setting for birthday parties, school outings or rainy-day celebrations.",
          "Our monitors keep the energy flowing with creative challenges, free-play moments and cooperative games adapted to the children’s age.",
        ],
        note: "Dedicated snack area available with optional FunPark catering.",
        ctaLabel: "Book the playground",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Ages", value: "4 to 10 years" },
        { label: "Max height", value: "1.20 m" },
        { label: "Party duration", value: "2h30 programme" },
      ],
      highlights: [
        {
          title: "Indoor comfort",
          description:
            "The inflatable dome maintains a pleasant temperature and keeps the fun going regardless of the weather.",
        },
        {
          title: "Monitored activities",
          description:
            "FunPark hosts organise group games, relay races and themed moments so every child feels included.",
        },
        {
          title: "Snack-friendly",
          description:
            "Bring your own snacks or upgrade with our catering packs—tables and decorations can be prepared in advance.",
        },
      ],
      checklist: [
        "Inflatables inspected and sanitised.",
        "Adaptable games for different energy levels.",
        "Hosts dedicated to the group.",
        "Digital invites included in the booking.",
      ],
      gallery: [
        { src: `${baseMediaUrl}/image5.jpg`, alt: "Children playing inside the Igloo Tent" },
        { src: `${baseMediaUrl}/imagens/playground_1.jpg`, alt: "Inflatables inside FunPark" },
        { src: `${baseMediaUrl}/imagens/playground_2.jpg`, alt: "Playground games for birthday parties" },
      ],
    },
    {
      slug: "trampolim",
      hero: {
        badge: "Activities",
        title: "Trampolines & Jump Tower",
        subtitle:
          "Jump higher, learn new tricks and leap from towers up to 6 metres onto giant airbags—always under expert supervision.",
        image: `${baseMediaUrl}/image6.jpg`,
      },
      intro: {
        paragraphs: [
          "The trampolines and jump tower zone delivers pure adrenaline in a controlled environment. After a warm-up and technique briefing, participants rotate between trampolines, jump platforms and complementary games.",
          "The session adapts to the group’s confidence level, providing plenty of time for photos, cheering moments and even go-karts or football in the adjacent area.",
        ],
        note: "Indoor facility—perfect for winter or windy days.",
        ctaLabel: "Book trampolines",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Ages", value: "6+ (trampolines) · 8+ (towers)" },
        { label: "Average duration", value: "1h30" },
        { label: "Safety gear", value: "helmets and airbags included" },
      ],
      highlights: [
        {
          title: "Progressive heights",
          description:
            "Platforms from 3 to 6 metres allow participants to build confidence step by step.",
        },
        {
          title: "Coached experience",
          description:
            "Monitors demonstrate techniques, control turns and guarantee safe landings on airbags.",
        },
        {
          title: "Custom combinations",
          description:
            "Ideal to combine with tree-top adventure or paintball for a full-day programme.",
        },
      ],
      checklist: [
        "Warm-up and technique drills before jumping.",
        "Professional trampolines with supervision.",
        "Airbags and soft-landing systems.",
        "Go-karts or football break during rotations.",
      ],
      gallery: [
        { src: `${baseMediaUrl}/image6.jpg`, alt: "Participant jumping from the FunPark tower" },
        { src: `${baseMediaUrl}/imagens/trampolim_1.jpg`, alt: "Group session on the trampolines" },
        { src: `${baseMediaUrl}/imagens/trampolim_2.jpg`, alt: "Indoor jump platforms" },
      ],
    },
    {
      slug: "escalada",
      hero: {
        badge: "Activities",
        title: "Indoor Climbing · 8 m Walls",
        subtitle:
          "Challenge themed routes, suspended elements and auto-belay lanes inside our climate-controlled arena with dedicated instructors by your side.",
        image: "http://www.funparquesaojoao.pt/images/4.jpg",
      },
      intro: {
        paragraphs: [
          "FunPark's climbing zone transforms the iconic igloo tent into a vertical playground with colourful holds, geometric shapes, swinging elements and challenges that reach 8 metres high. Every session starts with a technical briefing, harness and helmet delivery plus a practical demonstration of the core moves.",
          "Certified auto-belay devices let each participant climb at their own pace while instructors launch speed races, cooperative missions and progression tips. It's the perfect indoor add-on for families, school outings, birthdays or corporate teams looking for a different, all-weather adventure.",
        ],
        note: "60-minute sessions · minimum group size 8 participants.",
        ctaLabel: "Book climbing",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Ages", value: "6+ (kids, teens & adults)" },
        { label: "Wall height", value: "Up to 8 metres" },
        { label: "Session length", value: "60 min + briefing" },
        { label: "Includes", value: "Harness, helmet, auto-belay & instructors" },
      ],
      highlights: [
        {
          title: "Themed obstacles",
          description:
            "Routes with geometric volumes, tyres and dynamic features that build agility, grip strength and confidence.",
        },
        {
          title: "Auto-belay safety",
          description:
            "Certified automatic belay systems keep climbers secure at all times so the focus stays on the climb.",
        },
        {
          title: "Climate-controlled arena",
          description:
            "Indoor venue with lounge seating for spectators, ambient lighting and music to energise every ascent.",
        },
      ],
      checklist: [
        "Technical briefing with movement demonstration.",
        "Harness, helmet and auto-belay included.",
        "Instructors supervising every route.",
        "Option to combine with treetop or trampoline sessions.",
      ],
      gallery: [
        { src: "http://www.funparquesaojoao.pt/images/4.jpg", alt: "Climber tackling FunPark's indoor wall" },
        { src: "http://www.funparquesaojoao.pt/images/1.jpg", alt: "Colourful climbing volumes inside the FunPark igloo" },
        { src: "http://www.funparquesaojoao.pt/images/2.jpg", alt: "Instructors assisting climbers on the indoor tower" },
      ],
    },
    {
      slug: "aniversarios",
      hero: {
        badge: "Activities",
        title: "FunPark Birthday Parties",
        subtitle:
          "A 2h30 celebration with your favourite activity, dedicated hosts, invitations included and optional catering prepared by the FunPark team.",
        image: `${baseMediaUrl}/image10.png`,
      },
      intro: {
        paragraphs: [
          "Every party begins with a personalised welcome, a safety briefing and the activity chosen by the birthday child: tree-top adventure, trampolines, paintball kids or the Igloo playground.",
          "Halfway through we pause for the snack moment—bring your own treats or upgrade to the FunPark catering packs—and close with a final challenge where everyone signs the birthday certificate.",
        ],
        note: "2h30 programme · minimum 10 paying children.",
        ctaLabel: "Plan a birthday party",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Ideal ages", value: "4 to 14 years" },
        { label: "Group size", value: "Minimum 10 children" },
        { label: "Includes", value: "Invites, hosts, activity, insurance" },
        { label: "Options", value: "FunPark snack, private bungalow" },
      ],
      highlights: [
        {
          title: "Birthday child goes free*",
          description:
            "Celebrate with our special offer for the birthday child on the main activity—check the pricing page for conditions.",
        },
        {
          title: "Custom activities",
          description:
            "Combine two adventures, add paintball light or finish with a surprise treasure hunt to match the theme.",
        },
        {
          title: "Ready-to-use party area",
          description:
            "Reserved tables with base décor, assistance from monitors and access to refrigerator space for cakes.",
        },
      ],
      checklist: [
        "Digital invitations ready to share.",
        "Hosts guiding the group from start to finish.",
        "Safety gear and equipment included.",
        "Optional snack packs with drinks, savoury and sweet treats.",
      ],
      gallery: [
        { src: `${baseMediaUrl}/imagens/aniversarios_1.png`, alt: "Birthday table prepared at FunPark" },
        { src: `${baseMediaUrl}/image10.png`, alt: "Birthday child blowing candles with friends" },
        { src: `${baseMediaUrl}/imagens/playground_2.jpg`, alt: "Children playing during a FunPark party" },
      ],
    },
    {
      slug: "eventos",
      hero: {
        badge: "Activities",
        title: "Corporate Events & Team Building",
        subtitle:
          "Bring your team together with outdoor challenges, collaborative missions and tailored hospitality in the pine forest of Caparica.",
        image: `${baseMediaUrl}/image6.png`,
      },
      intro: {
        paragraphs: [
          "We co-design experiences that strengthen communication, leadership and creativity. Mix tree-top adventure, strategic paintball, orienteering missions and exclusive chill-out areas.",
          "Our team can arrange catering, meeting spaces, photography and branded souvenirs so you focus on the objectives of the day.",
        ],
        note: "Bespoke programmes for 10 to 150 participants.",
        ctaLabel: "Design a corporate event",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Formats", value: "Team building, incentives, celebrations" },
        { label: "Capacity", value: "10–150 participants" },
        { label: "Duration", value: "Half-day or full-day" },
        { label: "Add-ons", value: "Catering, AV, photography, branded gifts" },
      ],
      highlights: [
        {
          title: "Collaborative missions",
          description:
            "Activities designed to encourage trust, problem-solving and healthy competition between departments.",
        },
        {
          title: "Exclusive areas",
          description:
            "Private lounges, briefing zones and woodland decks prepared for speeches, networking or after-work drinks.",
        },
        {
          title: "Turnkey coordination",
          description:
            "From the first briefing to the final toast, the FunPark production team handles logistics, timing and safety.",
        },
      ],
      checklist: [
        "Pre-event alignment meeting with HR or agency.",
        "Dedicated monitors to supervise each activity station.",
        "All technical equipment and insurance included.",
        "Optional catering, barista corner and audiovisual support.",
      ],
      gallery: [
        { src: `${baseMediaUrl}/image2.png`, alt: "Corporate team crossing a canopy bridge" },
        { src: `${baseMediaUrl}/image7.png`, alt: "Zip-line during a team building session" },
        { src: `${baseMediaUrl}/imagens/paintball_2.jpg`, alt: "Colleagues celebrating after a paintball match" },
      ],
    },
  ],
  es: [
    {
      slug: "arborismo",
      hero: {
        badge: "Actividades",
        title: "Arborismo y tirolina",
        subtitle:
          "Supera puentes colgantes, redes y tirolinas panorámicas entre los pinos de Caparica. Una aventura progresiva para familias, escuelas y grupos.",
        image: `${baseMediaUrl}/imagens/arborismo_crianca.jpg`,
      },
      intro: {
        paragraphs: [
          "La actividad empieza con un briefing donde nuestros monitores equipan a todos con arnés, casco y explican cómo desplazarse con seguridad por los circuitos.",
          "Disponemos de cuatro recorridos con alturas y retos crecientes. Así, cada participante avanza a su ritmo mientras disfruta del entorno natural.",
        ],
        note: "Actividad disponible todo el año con reserva previa.",
        ctaLabel: "Reservar arborismo",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Edades", value: "desde 5 años" },
        { label: "Altura mínima", value: "1,05 m" },
        { label: "Duración de la sesión", value: "1h30 con briefing incluido" },
        { label: "Circuitos disponibles", value: "5 niveles progresivos + tirolina final" },
      ],
      highlights: [
        {
          title: "Monitores certificados",
          description:
            "Acompañan al grupo durante todo el recorrido y garantizan que cada paso sea seguro.",
        },
        {
          title: "Retos para todas las edades",
          description:
            "Circuitos diseñados para niños, jóvenes y adultos con diferentes grados de dificultad.",
        },
        {
          title: "Naturaleza a un paso de Lisboa",
          description:
            "Un pulmón verde privado junto a la Costa da Caparica, ideal para desconectar.",
        },
      ],
      checklist: [
        "Arnés y casco incluidos.",
        "Demostración práctica antes de subir.",
        "Zip-line panorámica al final del recorrido.",
        "Supervisión continua de los monitores.",
      ],
      gallery: [],
    },
    {
      slug: "paintball",
      hero: {
        badge: "Actividades",
        title: "Paintball al aire libre",
        subtitle:
          "Equipamiento completo, misiones dinámicas y escenarios naturales que harán vibrar a tu grupo.",
        image: `${baseMediaUrl}/image3.jpg`,
      },
      intro: {
        paragraphs: [
          "Tras un briefing inicial, dividimos los equipos, entregamos el material completo y repasamos las reglas y misiones.",
          "Los monitores proponen distintos modos de juego, supervisan la seguridad y animan a las equipas a trabajar juntas.",
        ],
        note: "Formato kids a partir de 8 años y versión adultos desde los 13.",
        ctaLabel: "Reservar paintball",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Jugadores", value: "mínimo 10 participantes" },
        { label: "Edades", value: "Kids 8+ · Adultos 13+" },
        { label: "Duración", value: "1h30 con briefing" },
        { label: "Paquetes", value: "150 a 400 bolas incluidas" },
      ],
      highlights: [
        {
          title: "Equipo completo incluido",
          description:
            "Marcador, máscara térmica, mono integral, chaleco y guantes adaptados a la edad del grupo.",
        },
        {
          title: "Misiones guiadas",
          description:
            "Modos de juego cooperativos y competitivos con objetivos claros y supervisión constante.",
        },
        {
          title: "Monitores atentos",
          description:
            "Controlan la seguridad, resuelven dudas y mantienen el ritmo de la partida.",
        },
      ],
      checklist: [
        "Briefing inicial y recordatorio de seguridad.",
        "Marcadores ajustados a cada jugador.",
        "Múltiples misiones con árbitros FunPark.",
        "Posibilidad de combinar con arborismo o trampolines.",
      ],
      gallery: [
        { src: `${baseMediaUrl}/image3.jpg`, alt: "Equipo listo para una partida de paintball" },
        { src: `${baseMediaUrl}/imagens/paintball_1.jpg`, alt: "Campo de paintball en FunPark" },
        { src: `${baseMediaUrl}/imagens/paintball_2.jpg`, alt: "Jugadores celebrando en paintball" },
      ],
    },
    {
      slug: "playground",
      hero: {
        badge: "Actividades",
        title: "Carpa Igloo · Playground cubierto",
        subtitle:
          "Inflables, toboganes y juegos cooperativos en un espacio climatizado que protege del viento y la lluvia.",
        image: `${baseMediaUrl}/image5.jpg`,
      },
      intro: {
        paragraphs: [
          "La carpa Igloo del FunPark reúne inflables, túneles, trampolines y zonas de descanso para niños de 4 a 10 años.",
          "Los monitores dinamizan retos en equipo, alternan juego libre y aseguran que todos participen y se diviertan.",
        ],
        note: "Espacio climatizado con área de merienda reservada.",
        ctaLabel: "Reservar playground",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Edades", value: "4 a 10 años" },
        { label: "Altura máxima", value: "1,20 m" },
        { label: "Duración estándar", value: "2h30 de celebración" },
        { label: "Incluye", value: "insuflables, monitores y convites" },
      ],
      highlights: [
        {
          title: "Diversión protegida",
          description:
            "Insuflables y juegos en un entorno cubierto para celebrar en cualquier época del año.",
        },
        {
          title: "Animación guiada",
          description:
            "Retos cooperativos, circuitos rápidos y momentos para fotos coordinados por nuestros monitores.",
        },
        {
          title: "Zona de merienda preparada",
          description:
            "Trae tu propia merienda o añade el pack FunPark con mesas y decoración listas.",
        },
      ],
      checklist: [
        "Inflables desinfectados y revisados.",
        "Mini trampolines, túneles y juegos de equilibrio.",
        "Acompañamiento constante de monitores.",
        "Convites digitales incluidos en la reserva.",
      ],
      gallery: [
        { src: `${baseMediaUrl}/image5.jpg`, alt: "Niños jugando en el playground cubierto" },
        { src: `${baseMediaUrl}/imagens/playground_1.jpg`, alt: "Inflables dentro de la carpa" },
        { src: `${baseMediaUrl}/imagens/playground_2.jpg`, alt: "Área de juegos en la tenda Iglo" },
      ],
    },
    {
      slug: "trampolim",
      hero: {
        badge: "Actividades",
        title: "Trampolín y Torre de Saltos",
        subtitle:
          "Combina trampolines profesionales con plataformas interiores de 3 a 6 metros y aterrizajes suaves en airbags.",
        image: `${baseMediaUrl}/image6.jpg`,
      },
      intro: {
        paragraphs: [
          "Comenzamos con un calentamiento guiado y una explicación técnica sobre cómo despegar y aterrizar de forma segura.",
          "Durante la sesión, los grupos rotan entre trampolines, torres de salto y actividades complementarias como karts a pedales o fútbol reducido.",
        ],
        note: "Actividad indoor ideal para días lluviosos o ventosos.",
        ctaLabel: "Reservar trampolines",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Edades", value: "6+ (trampolines) · 8+ (torres 5-6 m)" },
        { label: "Duración media", value: "1h30" },
        { label: "Incluye", value: "monitores y apoyo con karts" },
        { label: "Espacio", value: "instalación indoor FunPark" },
      ],
      highlights: [
        {
          title: "Alturas progresivas",
          description:
            "Plataformas de 3 a 6 metros para evolucionar con seguridad paso a paso.",
        },
        {
          title: "Sesiones supervisadas",
          description:
            "Los monitores controlan las rotaciones, muestran trucos básicos y garantizan aterrizajes seguros.",
        },
        {
          title: "Actividad combinable",
          description:
            "Perfecta para unir con arborismo, escalada o paintball en el mismo día.",
        },
      ],
      checklist: [
        "Calentamiento guiado antes de cada salto.",
        "Trampolines profesionales con supervisión continua.",
        "Airbags y colchones de alta absorción.",
        "Pausas con karts o fútbol durante las rotaciones.",
      ],
      gallery: [
        { src: `${baseMediaUrl}/image6.jpg`, alt: "Salto desde la torre interior del FunPark" },
        { src: `${baseMediaUrl}/imagens/trampolim_1.jpg`, alt: "Participantes en los trampolines" },
        { src: `${baseMediaUrl}/imagens/trampolim_2.jpg`, alt: "Vista de la zona de torres de salto" },
      ],
    },
    {
      slug: "escalada",
      hero: {
        badge: "Actividades",
        title: "Escalada Indoor · Muros de 8 metros",
        subtitle:
          "Rutas temáticas, elementos suspendidos y autoaseguradores certificados en una arena cubierta con monitores FunPark a tu lado.",
        image: "http://www.funparquesaojoao.pt/images/4.jpg",
      },
      intro: {
        paragraphs: [
          "La zona de escalada del FunPark convierte la carpa iglú en un espacio vertical con presas de colores, volúmenes geométricos, redes y retos que alcanzan los 8 metros. Cada sesión comienza con un briefing técnico, entrega de arnés y casco y una demostración práctica para ganar confianza desde el primer minuto.",
          "Los sistemas auto-belay certificados permiten progresar a tu ritmo mientras los monitores proponen carreras de velocidad, desafíos cooperativos y retos personalizados. Es la alternativa indoor ideal para familias, escuelas, cumpleaños o equipos que desean una experiencia diferente y segura durante todo el año.",
        ],
        note: "Sesiones de 60 minutos · grupos mínimos de 8 participantes.",
        ctaLabel: "Reservar escalada",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Edades", value: "6+ años (niños, teens y adultos)" },
        { label: "Altura de los muros", value: "Hasta 8 metros" },
        { label: "Duración de la sesión", value: "60 min + briefing" },
        { label: "Incluye", value: "Arnés, casco, auto-belay y monitores" },
      ],
      highlights: [
        {
          title: "Paredes temáticas",
          description:
            "Vías con figuras geométricas, neumáticos y módulos móviles para trabajar fuerza, equilibrio y coordinación.",
        },
        {
          title: "Seguridad auto-belay",
          description:
            "Dispositivos automáticos certificados mantienen la línea tensa y aseguran descensos suaves en todo momento.",
        },
        {
          title: "Arena climatizada",
          description:
            "Espacio indoor con lounge para acompañantes, iluminación ambiental y música que motiva cada ascenso.",
        },
      ],
      checklist: [
        "Briefing técnico y demostración guiada.",
        "Arnés, casco y auto-belay incluidos.",
        "Monitores supervisando cada vía.",
        "Opción de combinar con arborismo o trampolines.",
      ],
      gallery: [
        { src: "http://www.funparquesaojoao.pt/images/4.jpg", alt: "Participante escalando en el muro indoor del FunPark" },
        { src: "http://www.funparquesaojoao.pt/images/1.jpg", alt: "Volúmenes de colores en la zona de escalada FunPark" },
        { src: "http://www.funparquesaojoao.pt/images/2.jpg", alt: "Monitores guiando la escalada interior FunPark" },
      ],
    },
    {
      slug: "aniversarios",
      hero: {
        badge: "Actividades",
        title: "Fiestas de cumpleaños FunPark",
        subtitle:
          "Celebra durante 2h30 con una actividad estrella, monitores dedicados, invitaciones incluidas y merienda opcional preparada por nosotros.",
        image: `${baseMediaUrl}/image10.png`,
      },
      intro: {
        paragraphs: [
          "Comenzamos con una bienvenida personalizada, briefing de seguridad y acceso directo a la actividad elegida: arborismo, trampolines, paintball junior o playground cubierto.",
          "La segunda parte se reserva para la merienda (llevada por ti o proporcionada por FunPark) y finalizamos con juegos cooperativos, foto de grupo y entrega del diploma de cumpleaños.",
        ],
        note: "Duración total 2h30 · mínimo 10 niños de pago.",
        ctaLabel: "Reservar fiesta infantil",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Edades recomendadas", value: "4 a 14 años" },
        { label: "Grupo mínimo", value: "10 niños" },
        { label: "Incluye", value: "Invitaciones, monitores, actividad y seguro" },
        { label: "Opciones extra", value: "Merienda FunPark y bungalow privado" },
      ],
      highlights: [
        {
          title: "Cumpleañero invitado",
          description:
            "El protagonista no paga en la mayoría de las opciones, según las condiciones del preçario oficial.",
        },
        {
          title: "Actividades combinadas",
          description:
            "Añade trampolines, paintball light o búsquedas del tesoro para personalizar la fiesta.",
        },
        {
          title: "Zona de merienda exclusiva",
          description:
            "Mesas decoradas, apoyo de monitores y tiempo reservado para cantar el cumpleaños feliz sin prisas.",
        },
      ],
      checklist: [
        "Invitaciones digitales listas para descargar.",
        "Monitores a cargo del grupo durante todo el evento.",
        "Equipamiento y briefing incluidos en la actividad principal.",
        "Menús FunPark opcionales con bebidas y dulces.",
      ],
      gallery: [
        { src: `${baseMediaUrl}/imagens/aniversarios_1.png`, alt: "Mesa de cumpleaños en FunPark" },
        { src: `${baseMediaUrl}/image10.png`, alt: "Niños soplando velas en FunPark" },
        { src: `${baseMediaUrl}/imagens/playground_1.jpg`, alt: "Juego en el playground durante la fiesta" },
      ],
    },
    {
      slug: "eventos",
      hero: {
        badge: "Actividades",
        title: "Eventos corporativos",
        subtitle:
          "Team building, incentives y celebraciones empresariales con retos al aire libre y la logística completa FunPark.",
        image: `${baseMediaUrl}/image6.png`,
      },
      intro: {
        paragraphs: [
          "Creamos experiencias que fomentan la colaboración y la motivación del equipo: circuitos de arborismo, misiones estratégicas de paintball, desafíos cooperativos y zonas de descanso privadas.",
          "Podemos incluir coffee-breaks, comidas, fotógrafos y souvenirs personalizados. Tú defines los objetivos y nosotros nos encargamos de la producción.",
        ],
        note: "Programas a medida para grupos de 10 a 150 personas.",
        ctaLabel: "Diseñar evento para empresas",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Formatos", value: "Team building, incentives, family day" },
        { label: "Capacidad", value: "10-150 participantes" },
        { label: "Duración", value: "Media jornada o jornada completa" },
        { label: "Servicios extra", value: "Catering, audiovisuales, fotografía, regalos" },
      ],
      highlights: [
        {
          title: "Retos cooperativos",
          description:
            "Actividades diseñadas para mejorar la comunicación, el liderazgo y la planificación conjunta.",
        },
        {
          title: "Áreas exclusivas",
          description:
            "Reservamos zonas privadas del parque para briefings, networking o celebraciones posteriores.",
        },
        {
          title: "Gestión integral",
          description:
            "Coordinamos horarios, equipo técnico, seguros y apoyo logístico para que te centres en los objetivos del evento.",
        },
      ],
      checklist: [
        "Reunión previa de alineación con RRHH o agencia.",
        "Monitores y facilitadores especializados por actividad.",
        "Material y seguros incluidos en el paquete.",
        "Opciones de catering, barista, fotografía y transporte.",
      ],
      gallery: [
        { src: `${baseMediaUrl}/image2.png`, alt: "Equipo corporativo cruzando un puente suspendido" },
        { src: `${baseMediaUrl}/image7.png`, alt: "Participante en la tirolina durante un evento de empresa" },
        { src: `${baseMediaUrl}/imagens/paintball_2.jpg`, alt: "Compañeros celebrando tras un juego de paintball" },
      ],
    },
  ],
  fr: [
    {
      slug: "arborismo",
      hero: {
        badge: "Activités",
        title: "Parcours dans les arbres & tyrolienne",
        subtitle:
          "Traversez des ponts suspendus, des filets et une tyrolienne panoramique au cœur des pins de Caparica. Une aventure progressive pour familles et groupes.",
        image: `${baseMediaUrl}/imagens/arborismo_crianca.jpg`,
      },
      intro: {
        paragraphs: [
          "Chaque session débute par un briefing complet pendant lequel nos moniteurs équipent le groupe d'un harnais certifié et expliquent les règles de progression.",
          "Quatre circuits aux hauteurs et difficultés croissantes permettent à chacun d'évoluer à son rythme tout en profitant de la nature.",
        ],
        note: "Activité disponible toute l'année sur réservation.",
        ctaLabel: "Réserver le parcours",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Âges recommandés", value: "Dès 5 ans" },
        { label: "Taille minimale", value: "1,05 m pour le parcours découverte" },
        { label: "Durée de la session", value: "1h30 briefing compris" },
        { label: "Circuits disponibles", value: "5 niveaux progressifs + tyrolienne finale" },
      ],
      highlights: [
        {
          title: "Encadrement certifié",
          description:
            "Les moniteurs accompagnent le groupe du sol jusqu'à la tyrolienne finale de 200 m.",
        },
        {
          title: "Défis pour tous",
          description:
            "Des jeux adaptés aux enfants, adolescents et adultes avec différents degrés d'intensité.",
        },
        {
          title: "Nature privilégiée",
          description:
            "Un domaine privé entouré de pins, à quelques minutes des plages de la Costa da Caparica.",
        },
      ],
      checklist: [
        "Harnais, casque et mousquetons fournis.",
        "Démonstration pratique avant le départ.",
        "Surveillance continue sur chaque plateforme.",
        "Tyrolienne panoramique en fin de parcours.",
      ],
      gallery: [],
    },
    {
      slug: "paintball",
      hero: {
        badge: "Activités",
        title: "Paintball en plein air",
        subtitle:
          "Équipement complet, missions stratégiques et terrains naturels pour vivre une expérience pleine d'adrénaline.",
        image: `${baseMediaUrl}/image3.jpg`,
      },
      intro: {
        paragraphs: [
          "Après un briefing détaillé, nous équipons chaque équipe avec du matériel adapté et rappelons les règles de sécurité.",
          "Les moniteurs animent des scénarios variés, gèrent le rythme des parties et veillent au fair-play du groupe.",
        ],
        note: "Version kids dès 8 ans et format adultes à partir de 13 ans.",
        ctaLabel: "Réserver le paintball",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Participants", value: "minimum 10 joueurs" },
        { label: "Âges", value: "Kids 8+ · Adultes 13+" },
        { label: "Durée", value: "1h30 environ" },
        { label: "Packs", value: "150 à 400 billes incluses" },
      ],
      highlights: [
        {
          title: "Matériel fourni",
          description:
            "Lanceur, masque thermique, combinaison, gilet et gants compris dans chaque forfait.",
        },
        {
          title: "Scénarios immersifs",
          description:
            "Missions offensives et défensives adaptées aux objectifs de votre groupe.",
        },
        {
          title: "Encadrement constant",
          description:
            "Nos arbitres expliquent les règles, assurent la sécurité et motivent les équipes.",
        },
      ],
      checklist: [
        "Briefing sécurité et essais de tir.",
        "Lanceurs ajustés à l'âge des joueurs.",
        "Missions encadrées par des arbitres FunPark.",
        "Possibilité de combiner avec d'autres activités.",
      ],
      gallery: [
        { src: `${baseMediaUrl}/image3.jpg`, alt: "Joueurs prêts pour une partie de paintball" },
        { src: `${baseMediaUrl}/imagens/paintball_1.jpg`, alt: "Terrain de paintball FunPark" },
        { src: `${baseMediaUrl}/imagens/paintball_2.jpg`, alt: "Équipe célébrant une victoire" },
      ],
    },
    {
      slug: "playground",
      hero: {
        badge: "Activités",
        title: "Dôme Igloo · Aire de jeux couverte",
        subtitle:
          "Jeux gonflables, toboggans et animations coopératives dans un espace climatisé, parfait pour les fêtes d'enfants.",
        image: `${baseMediaUrl}/image5.jpg`,
      },
      intro: {
        paragraphs: [
          "Le dôme Igloo réunit des structures gonflables, des trampolines et des zones de détente pour les enfants de 4 à 10 ans.",
          "Nos animateurs alternent défis coopératifs, jeux libres et moments photo afin que chacun profite de la fête.",
        ],
        note: "Espace climatisé avec zone goûter réservée.",
        ctaLabel: "Réserver l'aire de jeux",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Âges", value: "4 à 10 ans" },
        { label: "Taille max.", value: "1,20 m" },
        { label: "Durée festive", value: "Programme de 2h30" },
        { label: "Comprend", value: "gonflables, animateurs et invitations" },
      ],
      highlights: [
        {
          title: "Confort toute l'année",
          description:
            "Un espace couvert qui protège du vent et de la pluie tout en conservant une température agréable.",
        },
        {
          title: "Animations sur-mesure",
          description:
            "Jeux collectifs, relais et défis adaptés à l'énergie du groupe et à l'âge des enfants.",
        },
        {
          title: "Zone goûter dédiée",
          description:
            "Apportez votre collation ou optez pour notre pack FunPark avec tables déjà dressées.",
        },
      ],
      checklist: [
        "Structures gonflables contrôlées et nettoyées.",
        "Mini trampolines, tunnels et parcours d'équilibre.",
        "Encadrement permanent des animateurs FunPark.",
        "Invitations numériques incluses.",
      ],
      gallery: [
        { src: `${baseMediaUrl}/image5.jpg`, alt: "Enfants jouant dans le dôme Igloo" },
        { src: `${baseMediaUrl}/imagens/playground_1.jpg`, alt: "Gonflables à l'intérieur du dôme" },
        { src: `${baseMediaUrl}/imagens/playground_2.jpg`, alt: "Espace de jeux couvert FunPark" },
      ],
    },
    {
      slug: "trampolim",
      hero: {
        badge: "Activités",
        title: "Trampolines & Tour de saut",
        subtitle:
          "Sautez sur des trampolines professionnels et lancez-vous depuis des plateformes intérieures de 3 à 6 mètres avec réception en airbags.",
        image: `${baseMediaUrl}/image6.jpg`,
      },
      intro: {
        paragraphs: [
          "La séance commence par un échauffement guidé et des conseils techniques pour sauter et atterrir en toute sécurité.",
          "Les participants alternent entre trampolines, tours de différentes hauteurs et activités annexes comme les karts à pédales ou le mini-foot.",
        ],
        note: "Activité indoor idéale pour les journées pluvieuses.",
        ctaLabel: "Réserver trampolines",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Âges", value: "6+ (trampolines) · 8+ (tours 5-6 m)" },
        { label: "Durée moyenne", value: "1h30" },
        { label: "Comprend", value: "encadrement et accès aux karts" },
        { label: "Lieu", value: "installation indoor FunPark" },
      ],
      highlights: [
        {
          title: "Hauteurs progressives",
          description:
            "Plates-formes de 3 à 6 mètres pour progresser à son rythme sous supervision.",
        },
        {
          title: "Encadrement permanent",
          description:
            "Les moniteurs gèrent les rotations, donnent des astuces et garantissent des réceptions sécurisées.",
        },
        {
          title: "Combinaisons possibles",
          description:
            "Parfait à associer avec parcours dans les arbres, escalade ou paintball.",
        },
      ],
      checklist: [
        "Échauffement guidé avant les sauts.",
        "Trampolines professionnels surveillés.",
        "Airbags et matelas haute absorption.",
        "Temps de pause sur karts ou terrain de foot.",
      ],
      gallery: [
        { src: `${baseMediaUrl}/image6.jpg`, alt: "Participant sur la tour de saut FunPark" },
        { src: `${baseMediaUrl}/imagens/trampolim_1.jpg`, alt: "Séance de groupe sur les trampolines" },
        { src: `${baseMediaUrl}/imagens/trampolim_2.jpg`, alt: "Vue intérieure des tours de saut" },
      ],
    },
    {
      slug: "escalada",
      hero: {
        badge: "Activités",
        title: "Escalade Indoor · Murs de 8 mètres",
        subtitle:
          "Grimpez des voies thématiques, relevez des défis suspendus et profitez de systèmes auto-belay certifiés dans notre arène couverte encadrée par des moniteurs FunPark.",
        image: "http://www.funparquesaojoao.pt/images/4.jpg",
      },
      intro: {
        paragraphs: [
          "L'espace escalade du FunPark transforme le dôme Igloo en terrain vertical avec prises colorées, volumes géométriques, pneus suspendus et défis culminant à 8 mètres. Chaque séance débute par un briefing technique, la remise du harnais et du casque ainsi qu'une démonstration des mouvements clés.",
          "Les dispositifs auto-belay certifiés permettent à chacun de progresser à son rythme pendant que nos moniteurs proposent des challenges de vitesse, des missions en duo et des conseils personnalisés. C'est l'activité indoor idéale pour les familles, les sorties scolaires, les anniversaires ou les teams corporate en quête d'une expérience originale toute l'année.",
        ],
        note: "Sessions de 60 minutes · groupes minimum 8 participants.",
        ctaLabel: "Réserver escalade",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Âges", value: "6+ ans (kids, ados et adultes)" },
        { label: "Hauteur des murs", value: "Jusqu'à 8 mètres" },
        { label: "Durée de session", value: "60 min + briefing" },
        { label: "Comprend", value: "Harnais, casque, auto-belay et encadrement" },
      ],
      highlights: [
        {
          title: "Voies thématiques",
          description:
            "Volumes géométriques, pneus et modules mobiles pour travailler agilité, force et confiance.",
        },
        {
          title: "Sécurité auto-belay",
          description:
            "Appareils automatiques certifiés qui assurent une tension constante et des descentes douces.",
        },
        {
          title: "Arène climatisée",
          description:
            "Espace indoor avec lounge pour les accompagnants, éclairage scénographique et ambiance musicale.",
        },
      ],
      checklist: [
        "Briefing technique et démonstration guidée.",
        "Harnais, casque et auto-belay fournis.",
        "Moniteurs supervisant chaque voie.",
        "Option de combiner avec arborisme ou trampolines.",
      ],
      gallery: [
        { src: "http://www.funparquesaojoao.pt/images/4.jpg", alt: "Grimpeur sur le mur indoor du FunPark" },
        { src: "http://www.funparquesaojoao.pt/images/1.jpg", alt: "Volumes colorés de l'espace escalade FunPark" },
        { src: "http://www.funparquesaojoao.pt/images/2.jpg", alt: "Moniteurs accompagnant les grimpeurs FunPark" },
      ],
    },
    {
      slug: "aniversarios",
      hero: {
        badge: "Activités",
        title: "Anniversaires FunPark",
        subtitle:
          "2h30 de fête avec activité principale au choix, animateurs dédiés, invitations incluses et goûter FunPark en option.",
        image: `${baseMediaUrl}/image10.png`,
      },
      intro: {
        paragraphs: [
          "Nous accueillons les invités avec un briefing sécurité et lançons immédiatement l'activité choisie : parcours dans les arbres, trampolines, paintball kid ou aire de jeux Igloo.",
          "La seconde partie est consacrée au goûter (apporté par vos soins ou fourni par FunPark) suivie d'animations coopératives et d'une photo de groupe pour immortaliser le moment.",
        ],
        note: "Durée 2h30 · minimum 10 enfants payants.",
        ctaLabel: "Organiser un anniversaire",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Âges conseillés", value: "4 à 14 ans" },
        { label: "Taille du groupe", value: "Dès 10 enfants" },
        { label: "Comprend", value: "Invitations, animateurs, activité et assurance" },
        { label: "Options", value: "Goûter FunPark, bungalow privatif" },
      ],
      highlights: [
        {
          title: "Enfant fêté invité*",
          description:
            "L'anniversaire est offert pour l'enfant célébré sur la plupart des formules (voir conditions du tarif).",
        },
        {
          title: "Animations personnalisables",
          description:
            "Combinez deux activités, ajoutez du paintball light ou une chasse au trésor selon vos envies.",
        },
        {
          title: "Espace goûter réservé",
          description:
            "Tables décorées, aide des animateurs pour servir et organisation du moment gâteau en toute sérénité.",
        },
      ],
      checklist: [
        "Invitations numériques prêtes à envoyer.",
        "Animateurs FunPark pour accompagner le groupe.",
        "Équipement et briefing inclus pour l'activité choisie.",
        "Goûter FunPark optionnel avec boissons et douceurs.",
      ],
      gallery: [
        { src: `${baseMediaUrl}/imagens/aniversarios_1.png`, alt: "Table d'anniversaire préparée au FunPark" },
        { src: `${baseMediaUrl}/image10.png`, alt: "Soufflage des bougies au FunPark" },
        { src: `${baseMediaUrl}/imagens/playground_1.jpg`, alt: "Jeux dans le playground pendant la fête" },
      ],
    },
    {
      slug: "eventos",
      hero: {
        badge: "Activités",
        title: "Événements d'entreprise",
        subtitle:
          "Team building, incentives et journées corporate avec défis en plein air et organisation clé en main par FunPark.",
        image: `${baseMediaUrl}/image6.png`,
      },
      intro: {
        paragraphs: [
          "Nous créons des parcours collaboratifs mêlant arborisme, missions de paintball stratégique, orientation et ateliers thématiques pour renforcer la cohésion d'équipe.",
          "Notre équipe prend en charge la logistique complète : restauration, espaces privés, matériel audiovisuel, reportages photo et souvenirs personnalisés.",
        ],
        note: "Programmes sur mesure de 10 à 150 participants.",
        ctaLabel: "Demander un devis entreprise",
        ctaHref: "/#reservas",
      },
      info: [
        { label: "Formats", value: "Team building, incentives, family day" },
        { label: "Capacité", value: "10 à 150 participants" },
        { label: "Durée", value: "Demi-journée ou journée complète" },
        { label: "Services optionnels", value: "Catering, AV, photography, branded gifts" },
      ],
      highlights: [
        {
          title: "Défis coopératifs",
          description:
            "Activités conçues pour travailler la confiance, la communication et la stratégie collective.",
        },
        {
          title: "Áreas exclusivas",
          description:
            "Reservamos zonas privadas del parque para briefings, networking o celebraciones posteriores.",
        },
        {
          title: "Gestión integral",
          description:
            "Coordinamos horarios, equipo técnico, seguros y apoyo logístico para que te centres en los objetivos del evento.",
        },
      ],
      checklist: [
        "Reunión previa de alineación con RRHH o agencia.",
        "Monitores y facilitadores especializados por actividad.",
        "Material y seguros incluidos en el paquete.",
        "Opciones de catering, barista, fotografía y transporte.",
      ],
      gallery: [
        { src: `${baseMediaUrl}/image2.png`, alt: "Équipe d'entreprise sur un pont suspendu" },
        { src: `${baseMediaUrl}/image7.png`, alt: "Descente en tyrolienne lors d'un team building" },
        { src: `${baseMediaUrl}/imagens/paintball_2.jpg`, alt: "Collègues célébrant une victoire paintball" },
      ],
    },
  ],
};

