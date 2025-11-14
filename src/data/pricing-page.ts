import type { LanguageKey } from "./site-content";

export type PricingCard = {
  title: string;
  bulletPoints: string[];
};

export type PricingHighlight = {
  title: string;
  subtitle?: string;
  price: string;
  description?: string;
  tags?: string[];
  cards?: PricingCard[];
};

export type PaintballTier = {
  title: string;
  price: string;
  description: string;
};

export type PartyPricing = {
  option: string;
  activity: string;
  context: string;
  age: string;
  description: string;
  includes: string[];
  perks?: string[];
  minParticipants: string;
  pricing: {
    withoutSnackLabel?: string;
    withoutSnack?: { label: string; price: string }[];
    withSnackLabel?: string;
    withSnack?: { label: string; price: string }[];
  };
};

export type PricingPageContent = {
  hero: { badge: string; title: string; subtitle: string };
  breadcrumbs: { backLabel: string; homeLabel: string };
  actions: { bookLabel: string; contactLabel: string };
  individual: {
    title: string;
    description: string;
    items: PricingHighlight[];
  };
  paintball: {
    title: string;
    description: string;
    packages: PaintballTier[];
  };
  parties: {
    title: string;
    description: string;
    headers: {
      option: string;
      activity: string;
      age: string;
      description: string;
      includes: string;
      prices: string;
      withoutSnack: string;
      withSnack: string;
    };
    options: PartyPricing[];
    snackNote: string;
    bungalow: { title: string; description: string; items: string[] };
    schedule: { title: string; entries: string[] };
  };
  corporate: { title: string; description: string };
  finalNote: string;
};

export const pricingPageContent: Record<LanguageKey, PricingPageContent> = {
  pt: {
    hero: {
      badge: "Preçário completo",
      title: "Todos os valores FunPark num só lugar.",
      subtitle:
        "Mantivemos cada detalhe do preçário original e organizámos tudo num layout moderno para facilitar a comparação entre atividades, combinações e festas de aniversário.",
    },
    breadcrumbs: {
      backLabel: "Voltar",
      homeLabel: "Início",
    },
    actions: {
      bookLabel: "Reserva já",
      contactLabel: "Falar com a equipa",
    },
    individual: {
      title: "Atividades individuais",
      description:
        "Escolhe a experiência ideal e consulta requisitos de altura, peso e duração. Todos os valores são por participante e incluem briefing, equipamento e acompanhamento FunPark.",
      items: [
        {
          title: "Prática de Arborismo / Slide",
          price: "14€ / pessoa",
          cards: [
            {
              title: "Nível de Iniciação",
              bulletPoints: [
                "Altura mínima 1,05 m",
                "Idade mínima 5 anos",
                "Percurso laranja e amarelo",
                "Duração total 1h30",
              ],
            },
            {
              title: "Nível Médio",
              bulletPoints: [
                "Altura mínima 1,25 m",
                "Percurso laranja, amarelo e verde",
                "Sessão de 1h30",
              ],
            },
            {
              title: "Nível Elevado",
              bulletPoints: [
                "Altura mínima 1,40 m",
                "Percurso verde e azul",
                "Sessão de 1h30",
              ],
            },
            {
              title: "Nível Avançado (adultos)",
              bulletPoints: [
                "Altura mínima 1,50 m",
                "Percurso verde, azul e vermelho",
                "Sessão de 1h30",
              ],
            },
          ],
        },
        {
          title: "Escalada indoor",
          subtitle: "Peso: mínimo 20 kg · máximo 100 kg",
          price: "1ª sessão 14€ / pessoa",
          description: "Segunda sessão consecutiva 10€ / pessoa.",
        },
        {
          title: "Combo Arborismo + Escalada",
          subtitle: "Altura mínima 1,05 m · Peso entre 20 kg e 100 kg",
          price: "21€ / pessoa",
          description: "Inclui 1h de arborismo e 1h de escalada sem interrupções.",
        },
        {
          title: "Tenda Iglo · Playground",
          price: "10€ / criança (1h) · 14€ / criança (2h)",
          description: "Playground coberto, ideal para grupos entre os 4 e os 10 anos.",
        },
        {
          title: "Trampolim & Torre de Saltos",
          subtitle: "Trampolins e torres 3-4 m: +6 anos · torres 5-6 m: +8 anos",
          price: "14€ / participante (1h) · 20€ / participante (2h)",
          description: "Sessão livre com acompanhamento permanente e karts/campo incluídos nos intervalos.",
        },
      ],
    },
    paintball: {
      title: "Paintball (mínimo 10 participantes)",
      description:
        "Todos os pacotes incluem fato completo, máscara, colete, luvas, marcador, acesso a todos os cenários, monitor e seguro.",
      packages: [
        {
          title: "150 bolas",
          price: "22€ / jogador",
          description: "Equipamento completo + 150 bolas por jogador.",
        },
        {
          title: "200 bolas",
          price: "24,5€ / jogador",
          description: "Equipamento completo + 200 bolas por jogador.",
        },
        {
          title: "300 bolas",
          price: "27€ / jogador",
          description: "Equipamento completo + 300 bolas por jogador.",
        },
        {
          title: "400 bolas",
          price: "30€ / jogador",
          description: "Equipamento completo + 400 bolas por jogador.",
        },
      ],
    },
    parties: {
      title: "Festas de aniversário",
      description:
        "Programas de 2h30 com atividades contínuas, monitores dedicados e convites incluídos. A maioria das opções oferece lanche opcional preparado pelo FunPark.",
      headers: {
        option: "Opção",
        activity: "Atividade",
        age: "Idade / requisitos",
        description: "Descrição",
        includes: "Inclui",
        prices: "Preços por criança",
        withoutSnack: "Sem lanche",
        withSnack: "Com lanche**",
      },
      options: [
        {
          option: "1",
          activity: "Arborismo",
          context: "Atividade realizada no exterior",
          age: "+5 anos · altura mínima 1,05 m",
          description:
            "Festa 2h30 com 1h30 de arborismo contínuo, 30 min em karts a pedais/campo de futebol para crianças com menos de 1,40 m e 30 min para lanche (pode trazer ou solicitar).",
          includes: ["Monitores", "Seguros", "Convites"],
          perks: ["Aniversariante não paga"],
          minParticipants: "Preço por criança (mínimo 10 crianças pagantes)",
          pricing: {
            withoutSnackLabel: "Sem lanche",
            withoutSnack: [
              { label: "10 a 14 crianças", price: "18,0€" },
              { label: "15 a 19 crianças", price: "17,5€" },
              { label: "20 ou mais crianças", price: "17,0€" },
            ],
            withSnackLabel: "Com lanche**",
            withSnack: [
              { label: "10 a 14 crianças", price: "21,0€" },
              { label: "15 a 19 crianças", price: "20,5€" },
              { label: "20 ou mais crianças", price: "20,0€" },
            ],
          },
        },
        {
          option: "2",
          activity: "Escalada",
          context: "Atividade realizada no interior",
          age: "Até 65 anos · peso entre 20 kg e 100 kg",
          description:
            "Festa 2h30 com 1h30 de escalada contínua, 30 min em karts a pedais/campo de futebol para crianças com menos de 1,40 m e 30 min para lanche (pode trazer ou solicitar).",
          includes: ["Monitores", "Seguros", "Convites"],
          minParticipants: "Preço por criança (mínimo 10 crianças pagantes)",
          pricing: {
            withoutSnackLabel: "Sem lanche",
            withoutSnack: [
              { label: "10 a 14 crianças", price: "18,0€" },
              { label: "15 a 19 crianças", price: "17,5€" },
              { label: "20 ou mais crianças", price: "17,0€" },
            ],
            withSnackLabel: "Com lanche**",
            withSnack: [
              { label: "10 a 14 crianças", price: "21,0€" },
              { label: "15 a 19 crianças", price: "20,5€" },
              { label: "20 ou mais crianças", price: "20,0€" },
            ],
          },
        },
        {
          option: "3",
          activity: "Playground",
          context: "Atividade realizada na tenda Iglo (interior)",
          age: "4 a 10 anos · altura máxima 1,20 m",
          description:
            "Festa 2h30 com 1h30 de atividade contínua no playground coberto e 30 min dedicados ao lanche.",
          includes: ["Monitores", "Seguros", "Convites"],
          perks: ["Aniversariante não paga"],
          minParticipants: "Preço por criança (mínimo 10 crianças pagantes)",
          pricing: {
            withoutSnackLabel: "Sem lanche",
            withoutSnack: [
              { label: "10 a 14 crianças", price: "15,0€" },
              { label: "15 a 19 crianças", price: "14,5€" },
              { label: "20 ou mais crianças", price: "14,0€" },
            ],
            withSnackLabel: "Com lanche**",
            withSnack: [
              { label: "10 a 14 crianças", price: "18,0€" },
              { label: "15 a 19 crianças", price: "17,5€" },
              { label: "20 ou mais crianças", price: "17,0€" },
            ],
          },
        },
        {
          option: "4",
          activity: "Arborismo + Escalada",
          context: "Arborismo no exterior · Escalada no interior",
          age: "Altura mínima 1,05 m · peso entre 20 kg e 100 kg",
          description:
            "Festa 2h30 com 1h de arborismo, 1h de escalada e 30 min para lanche (pode trazer ou solicitar).",
          includes: ["Monitores", "Seguros", "Convites"],
          perks: ["Aniversariante não paga"],
          minParticipants: "Preço por criança (mínimo 10 crianças pagantes)",
          pricing: {
            withoutSnackLabel: "Sem lanche",
            withoutSnack: [
              { label: "10 a 14 crianças", price: "21,0€" },
              { label: "15 a 19 crianças", price: "20,5€" },
              { label: "20 ou mais crianças", price: "20,0€" },
            ],
            withSnackLabel: "Com lanche**",
            withSnack: [
              { label: "10 a 14 crianças", price: "24,0€" },
              { label: "15 a 19 crianças", price: "23,5€" },
              { label: "20 ou mais crianças", price: "23,0€" },
            ],
          },
        },
        {
          option: "5",
          activity: "Trampolim e Torre de Saltos",
          context: "Atividade realizada no interior",
          age: "+6 anos para trampolins/torres 3-4 m · +8 anos para torres 5-6 m",
          description:
            "Festa 2h30 com 1h30 em trampolins e torres de saltos, 30 min em karts/campo e 30 min para lanche.",
          includes: ["Monitores", "Seguros", "Convites"],
          perks: ["Aniversariante não paga"],
          minParticipants: "Preço por criança (mínimo 10 crianças pagantes)",
          pricing: {
            withoutSnackLabel: "Sem lanche",
            withoutSnack: [
              { label: "10 a 14 crianças", price: "18,0€" },
              { label: "15 a 19 crianças", price: "17,5€" },
              { label: "20 ou mais crianças", price: "17,0€" },
            ],
            withSnackLabel: "Com lanche**",
            withSnack: [
              { label: "10 a 14 crianças", price: "21,0€" },
              { label: "15 a 19 crianças", price: "20,5€" },
              { label: "20 ou mais crianças", price: "20,0€" },
            ],
          },
        },
        {
          option: "6",
          activity: "Arborismo + Trampolim/Torre de Saltos",
          context: "Atividade combinada interior e exterior",
          age: "+6 anos para trampolins 3-4 m · +8 anos para torres 5-6 m",
          description:
            "Festa 2h30 com 1h de arborismo, 1h em trampolins e torres de saltos e 30 min para lanche.",
          includes: ["Monitores", "Seguros", "Convites"],
          perks: ["Aniversariante não paga"],
          minParticipants: "Preço por criança (mínimo 10 crianças pagantes)",
          pricing: {
            withoutSnackLabel: "Sem lanche",
            withoutSnack: [
              { label: "10 a 14 crianças", price: "21,0€" },
              { label: "15 a 19 crianças", price: "20,5€" },
              { label: "20 ou mais crianças", price: "20,0€" },
            ],
            withSnackLabel: "Com lanche**",
            withSnack: [
              { label: "10 a 14 crianças", price: "24,0€" },
              { label: "15 a 19 crianças", price: "23,5€" },
              { label: "20 ou mais crianças", price: "23,0€" },
            ],
          },
        },
        {
          option: "7",
          activity: "Escalada + Trampolim/Torre de Saltos",
          context: "Atividades realizadas no interior",
          age: "+20 kg · +6 anos para trampolins 3-4 m · +8 anos para torres 5-6 m",
          description:
            "Festa 2h30 com 1h de escalada, 1h em trampolins e torres de saltos e 30 min para lanche.",
          includes: ["Monitores", "Seguros", "Convites"],
          perks: ["Aniversariante não paga"],
          minParticipants: "Preço por criança (mínimo 10 crianças pagantes)",
          pricing: {
            withoutSnackLabel: "Sem lanche",
            withoutSnack: [
              { label: "10 a 14 crianças", price: "21,0€" },
              { label: "15 a 19 crianças", price: "20,5€" },
              { label: "20 ou mais crianças", price: "20,0€" },
            ],
            withSnackLabel: "Com lanche**",
            withSnack: [
              { label: "10 a 14 crianças", price: "24,0€" },
              { label: "15 a 19 crianças", price: "23,5€" },
              { label: "20 ou mais crianças", price: "23,0€" },
            ],
          },
        },
        {
          option: "8",
          activity: "Paintball 150 bolas",
          context: "Atividade realizada no exterior",
          age: "+8 anos (versão kids) · +13 anos (adultos)",
          description:
            "Paintball com acesso a todos os campos e 30 min finais reservados para o lanche (opcional).",
          includes: [
            "Equipamento completo (máscara, fato, marcador, luvas, colete)",
            "Pacote de 150 bolas por jogador",
            "Monitores, seguros e convites",
          ],
          minParticipants: "Preço por jogador (mínimo 10 participantes)",
          pricing: {
            withoutSnackLabel: "Sem lanche",
            withoutSnack: [{ label: "Valor por jogador", price: "22€" }],
            withSnackLabel: "Com lanche**",
            withSnack: [{ label: "Valor por jogador", price: "25€" }],
          },
        },
        {
          option: "9",
          activity: "Paintball 200 bolas",
          context: "Atividade realizada no exterior",
          age: "+8 anos (versão kids) · +13 anos (adultos)",
          description:
            "Paintball com acesso a todos os campos e 30 min finais reservados para o lanche (opcional).",
          includes: [
            "Equipamento completo (máscara, fato, marcador, luvas, colete)",
            "Pacote de 200 bolas por jogador",
            "Monitores, seguros e convites",
          ],
          minParticipants: "Preço por jogador (mínimo 10 participantes)",
          pricing: {
            withoutSnackLabel: "Sem lanche",
            withoutSnack: [{ label: "Valor por jogador", price: "24,5€" }],
            withSnackLabel: "Com lanche**",
            withSnack: [{ label: "Valor por jogador", price: "27,5€" }],
          },
        },
        {
          option: "10",
          activity: "Paintball 300 bolas",
          context: "Atividade realizada no exterior",
          age: "+8 anos (versão kids) · +13 anos (adultos)",
          description:
            "Paintball com acesso a todos os campos e 30 min finais reservados para o lanche (opcional).",
          includes: [
            "Equipamento completo (máscara, fato, marcador, luvas, colete)",
            "Pacote de 300 bolas por jogador",
            "Monitores, seguros e convites",
          ],
          minParticipants: "Preço por jogador (mínimo 10 participantes)",
          pricing: {
            withoutSnackLabel: "Sem lanche",
            withoutSnack: [{ label: "Valor por jogador", price: "27€" }],
            withSnackLabel: "Com lanche**",
            withSnack: [{ label: "Valor por jogador", price: "30€" }],
          },
        },
        {
          option: "11",
          activity: "Paintball 400 bolas",
          context: "Atividade realizada no exterior",
          age: "+8 anos (versão kids) · +13 anos (adultos)",
          description:
            "Paintball com acesso a todos os campos e 30 min finais reservados para o lanche (opcional).",
          includes: [
            "Equipamento completo (máscara, fato, marcador, luvas, colete)",
            "Pacote de 400 bolas por jogador",
            "Monitores, seguros e convites",
          ],
          minParticipants: "Preço por jogador (mínimo 10 participantes)",
          pricing: {
            withoutSnackLabel: "Sem lanche",
            withoutSnack: [{ label: "Valor por jogador", price: "30€" }],
            withSnackLabel: "Com lanche**",
            withSnack: [{ label: "Valor por jogador", price: "33€" }],
          },
        },
      ],
      snackNote:
        "** Lanche FunPark por criança (últimos 30 minutos): cachito de chouriço, cachito de fiambre, batatas fritas, pipocas, água, ice tea e refrigerante.",
      bungalow: {
        title: "Bungalow privativo",
        description:
          "Pode reservar um bungalow privativo para o momento do lanche durante as 2h30 da festa.",
        items: [
          "Bungalow pequeno: 100€",
          "Bungalow grande: 200€",
        ],
      },
      schedule: {
        title: "Horários para reservas de festas/grupos",
        entries: [
          "Verão: 10:00, 11:30, 14:30, 16:00",
          "Inverno: 10:00, 11:30, 14:00, 15:30",
        ],
      },
    },
    corporate: {
      title: "Eventos corporativos",
      description: "Fale connosco para conhecer as condições especiais para grupos empresariais.",
    },
    finalNote:
      "Preços especiais para grupos e escolas. Solicite orçamento personalizado à equipa FunPark.",
  },
  en: {
    hero: {
      badge: "Complete price list",
      title: "Every FunPark price in one modern view.",
      subtitle:
        "We preserved every detail from the original price table and reorganised it in a clean layout to help families, schools and companies compare activities and party packs.",
    },
    breadcrumbs: {
      backLabel: "Back",
      homeLabel: "Home",
    },
    actions: {
      bookLabel: "Book now",
      contactLabel: "Talk to the team",
    },
    individual: {
      title: "Individual activities",
      description:
        "Find the ideal experience and review height, weight and duration requirements. Prices are per participant and include briefing, equipment and FunPark staff support.",
      items: [
        {
          title: "Tree-top adventure / Zip-line",
          price: "€14 / person",
          cards: [
            {
              title: "Starter level",
              bulletPoints: [
                "Minimum height 1.05 m",
                "Minimum age 5",
                "Orange and yellow courses",
                "1h30 total duration",
              ],
            },
            {
              title: "Intermediate level",
              bulletPoints: [
                "Minimum height 1.25 m",
                "Orange, yellow and green courses",
                "1h30 session",
              ],
            },
            {
              title: "High level",
              bulletPoints: [
                "Minimum height 1.40 m",
                "Green and blue courses",
                "1h30 session",
              ],
            },
            {
              title: "Advanced level (adults)",
              bulletPoints: [
                "Minimum height 1.50 m",
                "Green, blue and red courses",
                "1h30 session",
              ],
            },
          ],
        },
        {
          title: "Indoor climbing",
          subtitle: "Weight: minimum 20 kg · maximum 100 kg",
          price: "First session €14 / person",
          description: "Second consecutive session €10 / person.",
        },
        {
          title: "Tree-top + Climbing combo",
          subtitle: "Minimum height 1.05 m · Weight between 20 kg and 100 kg",
          price: "€21 / person",
          description: "Includes 1h in the tree-top course and 1h of indoor climbing without breaks.",
        },
        {
          title: "Igloo tent · Playground",
          price: "€10 / child (1h) · €14 / child (2h)",
          description: "Covered playground, perfect for ages 4 to 10.",
        },
        {
          title: "Trampoline & Jump Tower",
          subtitle: "Trampolines 3-4 m: 6+ years · Towers 5-6 m: 8+ years",
          price: "€14 / participant (1h) · €20 / participant (2h)",
          description: "Guided free-jump session with access to go-karts and football field between activities.",
        },
      ],
    },
    paintball: {
      title: "Paintball (minimum 10 players)",
      description:
        "All packs include full suit, mask, vest, gloves, marker, access to every scenario, instructor and insurance.",
      packages: [
        {
          title: "150 paintballs",
          price: "€22 / player",
          description: "Full equipment + 150 paintballs per player.",
        },
        {
          title: "200 paintballs",
          price: "€24.5 / player",
          description: "Full equipment + 200 paintballs per player.",
        },
        {
          title: "300 paintballs",
          price: "€27 / player",
          description: "Full equipment + 300 paintballs per player.",
        },
        {
          title: "400 paintballs",
          price: "€30 / player",
          description: "Full equipment + 400 paintballs per player.",
        },
      ],
    },
    parties: {
      title: "Birthday parties",
      description:
        "2h30 programmes with continuous activities, dedicated monitors and invitations included. Most options offer an optional FunPark snack in the final 30 minutes.",
      headers: {
        option: "Option",
        activity: "Activity",
        age: "Age / requirements",
        description: "Programme",
        includes: "Includes",
        prices: "Price per child",
        withoutSnack: "Without snack",
        withSnack: "With snack**",
      },
      options: [
        {
          option: "1",
          activity: "Tree-top adventure",
          context: "Outdoor activity",
          age: "5+ years · minimum height 1.05 m",
          description:
            "2h30 party with 1h30 of continuous tree-top adventure, 30 min of go-karts/football field for children under 1.40 m and 30 min reserved for the snack (bring your own or request ours).",
          includes: ["Monitors", "Insurance", "Invitations"],
          perks: ["Birthday child goes free"],
          minParticipants: "Price per child (minimum 10 paying children)",
          pricing: {
            withoutSnackLabel: "Without snack",
            withoutSnack: [
              { label: "10 to 14 children", price: "€18.0" },
              { label: "15 to 19 children", price: "€17.5" },
              { label: "20+ children", price: "€17.0" },
            ],
            withSnackLabel: "With snack**",
            withSnack: [
              { label: "10 to 14 children", price: "€21.0" },
              { label: "15 to 19 children", price: "€20.5" },
              { label: "20+ children", price: "€20.0" },
            ],
          },
        },
        {
          option: "2",
          activity: "Indoor climbing",
          context: "Indoor activity",
          age: "Up to 65 years · weight between 20 kg and 100 kg",
          description:
            "2h30 party with 1h30 of continuous climbing, 30 min of go-karts/football field for children under 1.40 m and 30 min reserved for the snack (bring your own or request ours).",
          includes: ["Monitors", "Insurance", "Invitations"],
          minParticipants: "Price per child (minimum 10 paying children)",
          pricing: {
            withoutSnackLabel: "Without snack",
            withoutSnack: [
              { label: "10 to 14 children", price: "€18.0" },
              { label: "15 to 19 children", price: "€17.5" },
              { label: "20+ children", price: "€17.0" },
            ],
            withSnackLabel: "With snack**",
            withSnack: [
              { label: "10 to 14 children", price: "€21.0" },
              { label: "15 to 19 children", price: "€20.5" },
              { label: "20+ children", price: "€20.0" },
            ],
          },
        },
        {
          option: "3",
          activity: "Playground",
          context: "Indoor experience in the Igloo tent",
          age: "4 to 10 years · maximum height 1.20 m",
          description: "2h30 party with 1h30 of playground fun and 30 min dedicated to the snack.",
          includes: ["Monitors", "Insurance", "Invitations"],
          perks: ["Birthday child goes free"],
          minParticipants: "Price per child (minimum 10 paying children)",
          pricing: {
            withoutSnackLabel: "Without snack",
            withoutSnack: [
              { label: "10 to 14 children", price: "€15.0" },
              { label: "15 to 19 children", price: "€14.5" },
              { label: "20+ children", price: "€14.0" },
            ],
            withSnackLabel: "With snack**",
            withSnack: [
              { label: "10 to 14 children", price: "€18.0" },
              { label: "15 to 19 children", price: "€17.5" },
              { label: "20+ children", price: "€17.0" },
            ],
          },
        },
        {
          option: "4",
          activity: "Tree-top + Climbing",
          context: "Tree-top outdoors · Climbing indoors",
          age: "Minimum height 1.05 m · weight between 20 kg and 100 kg",
          description: "2h30 party with 1h tree-top adventure, 1h of climbing and 30 min for the snack.",
          includes: ["Monitors", "Insurance", "Invitations"],
          perks: ["Birthday child goes free"],
          minParticipants: "Price per child (minimum 10 paying children)",
          pricing: {
            withoutSnackLabel: "Without snack",
            withoutSnack: [
              { label: "10 to 14 children", price: "€21.0" },
              { label: "15 to 19 children", price: "€20.5" },
              { label: "20+ children", price: "€20.0" },
            ],
            withSnackLabel: "With snack**",
            withSnack: [
              { label: "10 to 14 children", price: "€24.0" },
              { label: "15 to 19 children", price: "€23.5" },
              { label: "20+ children", price: "€23.0" },
            ],
          },
        },
        {
          option: "5",
          activity: "Trampoline & Jump Tower",
          context: "Indoor activity",
          age: "6+ years for trampolines 3-4 m · 8+ years for towers 5-6 m",
          description: "2h30 party with 1h30 on trampolines and jump towers, 30 min of go-karts/football field and 30 min for the snack.",
          includes: ["Monitors", "Insurance", "Invitations"],
          perks: ["Birthday child goes free"],
          minParticipants: "Price per child (minimum 10 paying children)",
          pricing: {
            withoutSnackLabel: "Without snack",
            withoutSnack: [
              { label: "10 to 14 children", price: "€18.0" },
              { label: "15 to 19 children", price: "€17.5" },
              { label: "20+ children", price: "€17.0" },
            ],
            withSnackLabel: "With snack**",
            withSnack: [
              { label: "10 to 14 children", price: "€21.0" },
              { label: "15 to 19 children", price: "€20.5" },
              { label: "20+ children", price: "€20.0" },
            ],
          },
        },
        {
          option: "6",
          activity: "Tree-top + Trampoline / Jump Tower",
          context: "Combined outdoor & indoor",
          age: "+6 years for trampolines 3-4 m · 8+ years for towers 5-6 m",
          description: "2h30 party with 1h tree-top adventure, 1h on trampolines/jump towers and 30 min for the snack.",
          includes: ["Monitors", "Insurance", "Invitations"],
          perks: ["Birthday child goes free"],
          minParticipants: "Price per child (minimum 10 paying children)",
          pricing: {
            withoutSnackLabel: "Without snack",
            withoutSnack: [
              { label: "10 to 14 children", price: "€21.0" },
              { label: "15 to 19 children", price: "€20.5" },
              { label: "20+ children", price: "€20.0" },
            ],
            withSnackLabel: "With snack**",
            withSnack: [
              { label: "10 to 14 children", price: "€24.0" },
              { label: "15 to 19 children", price: "€23.5" },
              { label: "20+ children", price: "€23.0" },
            ],
          },
        },
        {
          option: "7",
          activity: "Climbing + Trampoline / Jump Tower",
          context: "Indoor activities",
          age: "20+ kg · 6+ years for trampolines 3-4 m · 8+ years for towers 5-6 m",
          description: "2h30 party with 1h of climbing, 1h on trampolines/jump towers and 30 min for the snack.",
          includes: ["Monitors", "Insurance", "Invitations"],
          perks: ["Birthday child goes free"],
          minParticipants: "Price per child (minimum 10 paying children)",
          pricing: {
            withoutSnackLabel: "Without snack",
            withoutSnack: [
              { label: "10 to 14 children", price: "€21.0" },
              { label: "15 to 19 children", price: "€20.5" },
              { label: "20+ children", price: "€20.0" },
            ],
            withSnackLabel: "With snack**",
            withSnack: [
              { label: "10 to 14 children", price: "€24.0" },
              { label: "15 to 19 children", price: "€23.5" },
              { label: "20+ children", price: "€23.0" },
            ],
          },
        },
        {
          option: "8",
          activity: "Paintball 150 balls",
          context: "Outdoor activity",
          age: "8+ years (kids) · 13+ years (adults)",
          description: "Paintball with access to all fields and 30 min at the end for snacks (optional).",
          includes: [
            "Full equipment (mask, suit, marker, gloves, vest)",
            "150 balls per player",
            "Monitors, insurance and invitations",
          ],
          minParticipants: "Price per player (minimum 10 participants)",
          pricing: {
            withoutSnackLabel: "Without snack",
            withoutSnack: [{ label: "Per player", price: "€22" }],
            withSnackLabel: "With snack**",
            withSnack: [{ label: "Per player", price: "€25" }],
          },
        },
        {
          option: "9",
          activity: "Paintball 200 balls",
          context: "Outdoor activity",
          age: "8+ years (kids) · 13+ years (adults)",
          description: "Paintball with access to all fields and 30 min at the end for snacks (optional).",
          includes: [
            "Full equipment (mask, suit, marker, gloves, vest)",
            "200 balls per player",
            "Monitors, insurance and invitations",
          ],
          minParticipants: "Price per player (minimum 10 participants)",
          pricing: {
            withoutSnackLabel: "Without snack",
            withoutSnack: [{ label: "Per player", price: "€24.5" }],
            withSnackLabel: "With snack**",
            withSnack: [{ label: "Per player", price: "€27.5" }],
          },
        },
        {
          option: "10",
          activity: "Paintball 300 balls",
          context: "Outdoor activity",
          age: "8+ years (kids) · 13+ years (adults)",
          description: "Paintball with access to all fields and 30 min at the end for snacks (optional).",
          includes: [
            "Full equipment (mask, suit, marker, gloves, vest)",
            "300 balls per player",
            "Monitors, insurance and invitations",
          ],
          minParticipants: "Price per player (minimum 10 participants)",
          pricing: {
            withoutSnackLabel: "Without snack",
            withoutSnack: [{ label: "Per player", price: "€27" }],
            withSnackLabel: "With snack**",
            withSnack: [{ label: "Per player", price: "€30" }],
          },
        },
        {
          option: "11",
          activity: "Paintball 400 balls",
          context: "Outdoor activity",
          age: "8+ years (kids) · 13+ years (adults)",
          description: "Paintball with access to all fields and 30 min at the end for snacks (optional).",
          includes: [
            "Full equipment (mask, suit, marker, gloves, vest)",
            "400 balls per player",
            "Monitors, insurance and invitations",
          ],
          minParticipants: "Price per player (minimum 10 participants)",
          pricing: {
            withoutSnackLabel: "Without snack",
            withoutSnack: [{ label: "Per player", price: "€30" }],
            withSnackLabel: "With snack**",
            withSnack: [{ label: "Per player", price: "€33" }],
          },
        },
      ],
      snackNote:
        "** FunPark snack per child (last 30 minutes): mini chorizo sandwich, mini ham sandwich, crisps, popcorn, water, ice tea and soda.",
      bungalow: {
        title: "Private bungalow",
        description:
          "Reserve a private bungalow for the snack time during the 2h30 party.",
        items: [
          "Small bungalow: €100",
          "Large bungalow: €200",
        ],
      },
      schedule: {
        title: "Party / group reservation time slots",
        entries: [
          "Summer: 10:00, 11:30, 14:30, 16:00",
          "Winter: 10:00, 11:30, 14:00, 15:30",
        ],
      },
    },
    corporate: {
      title: "Corporate events",
      description: "Contact us for special pricing tailored to companies and teams.",
    },
    finalNote:
      "We offer special prices for schools and large groups. Ask the FunPark team for a tailored quote.",
  },
  es: {
    hero: {
      badge: "Tarifas completas",
      title: "Todos los precios de FunPark en un solo lugar.",
      subtitle:
        "Conservamos cada detalle de la tabla original y la reorganizamos en un diseño moderno para que familias, colegios y empresas comparen actividades y packs de fiesta.",
    },
    breadcrumbs: {
      backLabel: "Volver",
      homeLabel: "Inicio",
    },
    actions: {
      bookLabel: "Reservar ahora",
      contactLabel: "Hablar con el equipo",
    },
    individual: {
      title: "Actividades individuales",
      description:
        "Elige la experiencia ideal y revisa requisitos de altura, peso y duración. Los precios son por participante e incluyen briefing, equipamiento y acompañamiento del equipo FunPark.",
      items: [
        {
          title: "Arborismo / Tirolina",
          price: "14€ / persona",
          cards: [
            {
              title: "Nivel de iniciación",
              bulletPoints: [
                "Altura mínima 1,05 m",
                "Edad mínima 5 años",
                "Circuitos naranja y amarillo",
                "Duración total 1h30",
              ],
            },
            {
              title: "Nivel medio",
              bulletPoints: [
                "Altura mínima 1,25 m",
                "Circuitos naranja, amarillo y verde",
                "Sesión de 1h30",
              ],
            },
            {
              title: "Nivel alto",
              bulletPoints: [
                "Altura mínima 1,40 m",
                "Circuitos verde y azul",
                "Sesión de 1h30",
              ],
            },
            {
              title: "Nivel avanzado (adultos)",
              bulletPoints: [
                "Altura mínima 1,50 m",
                "Circuitos verde, azul y rojo",
                "Sesión de 1h30",
              ],
            },
          ],
        },
        {
          title: "Escalada indoor",
          subtitle: "Peso: mínimo 20 kg · máximo 100 kg",
          price: "1ª sesión 14€ / persona",
          description: "2ª sesión consecutiva 10€ / persona.",
        },
        {
          title: "Combo Arborismo + Escalada",
          subtitle: "Altura mínima 1,05 m · Peso entre 20 kg y 100 kg",
          price: "21€ / persona",
          description: "Incluye 1h de arborismo y 1h de escalada sin interrupciones.",
        },
        {
          title: "Carpa Igloo · Playground",
          price: "10€ / niño (1h) · 14€ / niño (2h)",
          description: "Playground cubierto, ideal para edades de 4 a 10 años.",
        },
        {
          title: "Trampolín y Torre de Saltos",
          subtitle: "Trampolines 3-4 m: +6 años · Torres 5-6 m: +8 años",
          price: "14€ / participante (1h) · 20€ / participante (2h)",
          description: "Sesión guiada con acceso a karts y campo de fútbol entre actividades.",
        },
      ],
    },
    paintball: {
      title: "Paintball (mínimo 10 participantes)",
      description:
        "Todos los packs incluyen mono completo, máscara, chaleco, guantes, marcador, acceso a todos los escenarios, monitor y seguro.",
      packages: [
        {
          title: "150 bolas",
          price: "22€ / jugador",
          description: "Equipo completo + 150 bolas por jugador.",
        },
        {
          title: "200 bolas",
          price: "24,5€ / jugador",
          description: "Equipo completo + 200 bolas por jugador.",
        },
        {
          title: "300 bolas",
          price: "27€ / jugador",
          description: "Equipo completo + 300 bolas por jugador.",
        },
        {
          title: "400 bolas",
          price: "30€ / jugador",
          description: "Equipo completo + 400 bolas por jugador.",
        },
      ],
    },
    parties: {
      title: "Fiestas de cumpleaños",
      description:
        "Programas de 2h30 con actividades continuas, monitores dedicados e invitaciones incluidas. La mayoría de las opciones ofrece merienda FunPark opcional en los últimos 30 minutos.",
      headers: {
        option: "Opción",
        activity: "Actividad",
        age: "Edad / requisitos",
        description: "Programa",
        includes: "Incluye",
        prices: "Precio por niño",
        withoutSnack: "Sin merienda",
        withSnack: "Con merienda**",
      },
      options: [
        {
          option: "1",
          activity: "Arborismo",
          context: "Actividad al aire libre",
          age: "+5 años · altura mínima 1,05 m",
          description:
            "Fiesta de 2h30 con 1h30 de arborismo continuo, 30 min de karts/campo de fútbol para niños menores de 1,40 m y 30 min reservados para la merienda (puedes traerla o solicitar la nuestra).",
          includes: ["Monitores", "Seguros", "Invitaciones"],
          perks: ["El cumpleañero no paga"],
          minParticipants: "Precio por niño (mínimo 10 niños de pago)",
          pricing: {
            withoutSnackLabel: "Sin merienda",
            withoutSnack: [
              { label: "10 a 14 niños", price: "18,0€" },
              { label: "15 a 19 niños", price: "17,5€" },
              { label: "20 o más niños", price: "17,0€" },
            ],
            withSnackLabel: "Con merienda**",
            withSnack: [
              { label: "10 a 14 niños", price: "21,0€" },
              { label: "15 a 19 niños", price: "20,5€" },
              { label: "20 o más niños", price: "20,0€" },
            ],
          },
        },
        {
          option: "2",
          activity: "Escalade indoor",
          context: "Actividad en interior",
          age: "Hasta 65 años · peso entre 20 kg y 100 kg",
          description:
            "Fiesta de 2h30 con 1h30 de escalada continua, 30 min de karts/campo de fútbol para niños menores de 1,40 m y 30 min reservados para la merienda.",
          includes: ["Monitores", "Seguros", "Invitaciones"],
          minParticipants: "Precio por niño (mínimo 10 niños de pago)",
          pricing: {
            withoutSnackLabel: "Sin merienda",
            withoutSnack: [
              { label: "10 a 14 niños", price: "18,0€" },
              { label: "15 a 19 niños", price: "17,5€" },
              { label: "20 o más niños", price: "17,0€" },
            ],
            withSnackLabel: "Con merienda**",
            withSnack: [
              { label: "10 a 14 niños", price: "21,0€" },
              { label: "15 a 19 niños", price: "20,5€" },
              { label: "20 o más niños", price: "20,0€" },
            ],
          },
        },
        {
          option: "3",
          activity: "Playground",
          context: "Experiencia cubierta en la carpa Igloo",
          age: "4 a 10 años · altura máxima 1,20 m",
          description: "Fiesta de 2h30 con 1h30 de juego en el playground y 30 min dedicados a la merienda.",
          includes: ["Monitores", "Seguros", "Invitaciones"],
          perks: ["El cumpleañero no paga"],
          minParticipants: "Precio por niño (mínimo 10 niños de pago)",
          pricing: {
            withoutSnackLabel: "Sin merienda",
            withoutSnack: [
              { label: "10 a 14 niños", price: "15,0€" },
              { label: "15 a 19 niños", price: "14,5€" },
              { label: "20 o más niños", price: "14,0€" },
            ],
            withSnackLabel: "Con merienda**",
            withSnack: [
              { label: "10 a 14 niños", price: "18,0€" },
              { label: "15 a 19 niños", price: "17,5€" },
              { label: "20 o más niños", price: "17,0€" },
            ],
          },
        },
        {
          option: "4",
          activity: "Arborismo + Escalada",
          context: "Arborismo exterior · Escalada interior",
          age: "Altura mínima 1,05 m · peso entre 20 kg y 100 kg",
          description:
            "Fiesta de 2h30 con 1h de arborismo, 1h de escalada y 30 min para la merienda.",
          includes: ["Monitores", "Seguros", "Invitaciones"],
          perks: ["El cumpleañero no paga"],
          minParticipants: "Precio por niño (mínimo 10 niños de pago)",
          pricing: {
            withoutSnackLabel: "Sin merienda",
            withoutSnack: [
              { label: "10 a 14 niños", price: "21,0€" },
              { label: "15 a 19 niños", price: "20,5€" },
              { label: "20 o más niños", price: "20,0€" },
            ],
            withSnackLabel: "Con merienda**",
            withSnack: [
              { label: "10 a 14 niños", price: "24,0€" },
              { label: "15 a 19 niños", price: "23,5€" },
              { label: "20 o más niños", price: "23,0€" },
            ],
          },
        },
        {
          option: "5",
          activity: "Trampolín y Torre de Saltos",
          context: "Actividad en interior",
          age: "+6 años para trampolines 3-4 m · +8 años para torres 5-6 m",
          description:
            "Fiesta de 2h30 con 1h30 en trampolines y torres de salto, 30 min de karts/campo y 30 min para la merienda.",
          includes: ["Monitores", "Seguros", "Invitaciones"],
          perks: ["El cumpleañero no paga"],
          minParticipants: "Precio por niño (mínimo 10 niños de pago)",
          pricing: {
            withoutSnackLabel: "Sin merienda",
            withoutSnack: [
              { label: "10 a 14 niños", price: "18,0€" },
              { label: "15 a 19 niños", price: "17,5€" },
              { label: "20 o más niños", price: "17,0€" },
            ],
            withSnackLabel: "Con merienda**",
            withSnack: [
              { label: "10 a 14 niños", price: "21,0€" },
              { label: "15 a 19 niños", price: "20,5€" },
              { label: "20 o más niños", price: "20,0€" },
            ],
          },
        },
        {
          option: "6",
          activity: "Arborismo + Trampolín/Torre",
          context: "Combinación exterior e interior",
          age: "+6 años para trampolines 3-4 m · +8 años para torres 5-6 m",
          description:
            "Fiesta de 2h30 con 1h de arborismo, 1h en trampolines/torres de salto y 30 min para la merienda.",
          includes: ["Monitores", "Seguros", "Invitaciones"],
          perks: ["El cumpleañero no paga"],
          minParticipants: "Precio por niño (mínimo 10 niños de pago)",
          pricing: {
            withoutSnackLabel: "Sin merienda",
            withoutSnack: [
              { label: "10 a 14 niños", price: "21,0€" },
              { label: "15 a 19 niños", price: "20,5€" },
              { label: "20 o más niños", price: "20,0€" },
            ],
            withSnackLabel: "Con merienda**",
            withSnack: [
              { label: "10 a 14 niños", price: "24,0€" },
              { label: "15 a 19 niños", price: "23,5€" },
              { label: "20 o más niños", price: "23,0€" },
            ],
          },
        },
        {
          option: "7",
          activity: "Escalade + Trampolín/Torre",
          context: "Actividades en interior",
          age: "+20 kg · +6 años para trampolines 3-4 m · +8 años para torres 5-6 m",
          description:
            "Fiesta de 2h30 con 1h de escalada, 1h en trampolines/torres de salto y 30 min para la merienda.",
          includes: ["Monitores", "Seguros", "Invitaciones"],
          perks: ["El cumpleañero no paga"],
          minParticipants: "Precio por niño (mínimo 10 niños de pago)",
          pricing: {
            withoutSnackLabel: "Sin merienda",
            withoutSnack: [
              { label: "10 a 14 niños", price: "21,0€" },
              { label: "15 a 19 niños", price: "20,5€" },
              { label: "20 o más niños", price: "20,0€" },
            ],
            withSnackLabel: "Con merienda**",
            withSnack: [
              { label: "10 a 14 niños", price: "24,0€" },
              { label: "15 a 19 niños", price: "23,5€" },
              { label: "20 o más niños", price: "23,0€" },
            ],
          },
        },
        {
          option: "8",
          activity: "Paintball 150 bolas",
          context: "Actividad al aire libre",
          age: "+8 años (version kids) · +13 años (adultes)",
          description: "Paintball con acceso a todos los campos y 30 min finales para la merienda (opcional).",
          includes: [
            "Equipo completo (máscara, mono, marcador, guantes, chaleco)",
            "150 bolas por jugador",
            "Animateurs, seguros e invitaciones",
          ],
          minParticipants: "Precio por jugador (mínimo 10 participantes)",
          pricing: {
            withoutSnackLabel: "Sin merienda",
            withoutSnack: [{ label: "Por jugador", price: "22€" }],
            withSnackLabel: "Con merienda**",
            withSnack: [{ label: "Por jugador", price: "25€" }],
          },
        },
        {
          option: "9",
          activity: "Paintball 200 bolas",
          context: "Actividad al aire libre",
          age: "+8 años (version kids) · +13 años (adultes)",
          description: "Paintball con acceso a todos los campos y 30 min finales para la merienda (opcional).",
          includes: [
            "Equipo completo (máscara, mono, marcador, guantes, chaleco)",
            "200 bolas por jugador",
            "Animateurs, seguros e invitaciones",
          ],
          minParticipants: "Precio por jugador (mínimo 10 participantes)",
          pricing: {
            withoutSnackLabel: "Sin merienda",
            withoutSnack: [{ label: "Por jugador", price: "24,5€" }],
            withSnackLabel: "Con merienda**",
            withSnack: [{ label: "Por jugador", price: "27,5€" }],
          },
        },
        {
          option: "10",
          activity: "Paintball 300 bolas",
          context: "Actividad al aire libre",
          age: "+8 años (version kids) · +13 años (adultes)",
          description: "Paintball con acceso a todos los campos y 30 min finales para la merienda (opcional).",
          includes: [
            "Equipo completo (máscara, mono, marcador, guantes, chaleco)",
            "300 bolas por jugador",
            "Animateurs, seguros e invitaciones",
          ],
          minParticipants: "Precio por jugador (mínimo 10 participantes)",
          pricing: {
            withoutSnackLabel: "Sin merienda",
            withoutSnack: [{ label: "Por jugador", price: "27€" }],
            withSnackLabel: "Con merienda**",
            withSnack: [{ label: "Por jugador", price: "30€" }],
          },
        },
        {
          option: "11",
          activity: "Paintball 400 bolas",
          context: "Actividad al aire libre",
          age: "+8 años (version kids) · +13 años (adultes)",
          description: "Paintball con acceso a todos los campos y 30 min finales para la merienda (opcional).",
          includes: [
            "Equipo completo (máscara, mono, marcador, guantes, chaleco)",
            "400 bolas por jugador",
            "Animateurs, seguros e invitaciones",
          ],
          minParticipants: "Precio por jugador (mínimo 10 participantes)",
          pricing: {
            withoutSnackLabel: "Sin merienda",
            withoutSnack: [{ label: "Por jugador", price: "30€" }],
            withSnackLabel: "Con merienda**",
            withSnack: [{ label: "Por jugador", price: "33€" }],
          },
        },
      ],
      snackNote:
        "** Merienda FunPark por niño (últimos 30 minutos) : bocadillo de chorizo, bocadillo de jamón, patatas fritas, palomitas, agua, ice tea y refresco.",
      bungalow: {
        title: "Bungalow privado",
        description:
          "Puedes reservar un bungalow privado para el momento de la merienda durante las 2h30 de la fiesta.",
        items: [
          "Bungalow pequeño: 100€",
          "Bungalow grande: 200€",
        ],
      },
      schedule: {
        title: "Horarios para reservas de fiestas/grupos",
        entries: [
          "Verano: 10:00, 11:30, 14:30, 16:00",
          "Invierno: 10:00, 11:30, 14:00, 15:30",
        ],
      },
    },
    corporate: {
      title: "Eventos corporativos",
      description: "Contacta con nosotros para conocer las condiciones especiales para empresas y equipos.",
    },
    finalNote:
      "Ofrecemos precios especiales para escuelas y grandes grupos. Solicita un presupuesto personalizado al equipo FunPark.",
  },
  fr: {
    hero: {
      badge: "Tarifs complets",
      title: "Tous les prix FunPark réunis sur une page moderne.",
      subtitle:
        "Nous avons conservé chaque détail de la grille tarifaire d'origine et l'avons réorganisée pour aider familles, écoles et entreprises à comparer activités et formules d'anniversaire.",
    },
    breadcrumbs: {
      backLabel: "Retour",
      homeLabel: "Accueil",
    },
    actions: {
      bookLabel: "Réserver",
      contactLabel: "Parler à l'équipe",
    },
    individual: {
      title: "Activités individuelles",
      description:
        "Choisissez l'expérience idéale et vérifiez la taille, le poids et la durée requis. Les tarifs sont par participant et incluent briefing, équipement et accompagnement FunPark.",
      items: [
        {
          title: "Parcours dans les arbres / Tyrolienne",
          price: "14€ / personne",
          cards: [
            {
              title: "Niveau initiation",
              bulletPoints: [
                "Taille minimale 1,05 m",
                "Âge minimum 5 ans",
                "Parcours orange et jaune",
                "Durée totale 1h30",
              ],
            },
            {
              title: "Niveau intermédiaire",
              bulletPoints: [
                "Taille minimale 1,25 m",
                "Parcours orange, jaune et vert",
                "Session de 1h30",
              ],
            },
            {
              title: "Niveau élevé",
              bulletPoints: [
                "Taille minimale 1,40 m",
                "Parcours vert et bleu",
                "Session de 1h30",
              ],
            },
            {
              title: "Niveau avancé (adultes)",
              bulletPoints: [
                "Taille minimale 1,50 m",
                "Parcours vert, bleu et rouge",
                "Session de 1h30",
              ],
            },
          ],
        },
        {
          title: "Escalade indoor",
          subtitle: "Poids : minimum 20 kg · maximum 100 kg",
          price: "1re session 14€ / personne",
          description: "2e session consécutive 10€ / personne.",
        },
        {
          title: "Combo Parcours + Escalade",
          subtitle: "Taille minimale 1,05 m · Poids entre 20 kg et 100 kg",
          price: "21€ / personne",
          description: "Comprend 1h de parcours dans les arbres et 1h d'escalade sans interruption.",
        },
        {
          title: "Tente Igloo · Playground",
          price: "10€ / enfant (1h) · 14€ / enfant (2h)",
          description: "Aire de jeux couverte idéale de 4 à 10 ans.",
        },
        {
          title: "Trampoline & Tour de saut",
          subtitle: "Trampolines 3-4 m : +6 ans · Tours 5-6 m : +8 ans",
          price: "14€ / participant (1h) · 20€ / participant (2h)",
          description: "Session accompagnée avec accès aux karts et au terrain de football entre les activités.",
        },
      ],
    },
    paintball: {
      title: "Paintball (minimum 10 joueurs)",
      description:
        "Toutes les formules incluent combinaison, masque, gilet, gants, lanceur, accès à tous les terrains, encadrement et assurance.",
      packages: [
        {
          title: "150 billes",
          price: "22€ / joueur",
          description: "Équipement complet + 150 billes par joueur.",
        },
        {
          title: "200 billes",
          price: "24,5€ / joueur",
          description: "Équipement complet + 200 billes par joueur.",
        },
        {
          title: "300 billes",
          price: "27€ / joueur",
          description: "Équipement complet + 300 billes par joueur.",
        },
        {
          title: "400 billes",
          price: "30€ / joueur",
          description: "Équipement complet + 400 billes par joueur.",
        },
      ],
    },
    parties: {
      title: "Fêtes d'anniversaire",
      description:
        "Programmes de 2h30 avec activités continues, animateurs dédiés et invitations incluses. La plupart des formules proposent une collation FunPark optionnelle durant les 30 dernières minutes.",
      headers: {
        option: "Option",
        activity: "Activité",
        age: "Âge / exigences",
        description: "Programme",
        includes: "Comprend",
        prices: "Tarif par enfant",
        withoutSnack: "Sans collation",
        withSnack: "Avec collation**",
      },
      options: [
        {
          option: "1",
          activity: "Parcours dans les arbres",
          context: "Activité en extérieur",
          age: "+5 ans · taille minimale 1,05 m",
          description:
            "Fête de 2h30 avec 1h30 de parcours continu, 30 min de karts/terrain de football pour les enfants de moins de 1,40 m et 30 min dédiées à la collation (à apporter ou fournie par FunPark).",
          includes: ["Animateurs", "Assurances", "Invitations"],
          perks: ["Enfant fêté gratuit"],
          minParticipants: "Tarif par enfant (minimum 10 enfants payants)",
          pricing: {
            withoutSnackLabel: "Sans collation",
            withoutSnack: [
              { label: "10 à 14 enfants", price: "18,0€" },
              { label: "15 à 19 enfants", price: "17,5€" },
              { label: "20 enfants et +", price: "17,0€" },
            ],
            withSnackLabel: "Avec collation**",
            withSnack: [
              { label: "10 à 14 enfants", price: "21,0€" },
              { label: "15 à 19 enfants", price: "20,5€" },
              { label: "20 enfants et +", price: "20,0€" },
            ],
          },
        },
        {
          option: "2",
          activity: "Escalade indoor",
          context: "Activité en intérieur",
          age: "Jusqu'à 65 ans · poids entre 20 kg et 100 kg",
          description:
            "Fête de 2h30 avec 1h30 d'escalade continue, 30 min de karts/terrain de football pour les enfants de moins de 1,40 m et 30 min dédiées à la collation.",
          includes: ["Animateurs", "Assurances", "Invitations"],
          minParticipants: "Tarif par enfant (minimum 10 enfants payants)",
          pricing: {
            withoutSnackLabel: "Sans collation",
            withoutSnack: [
              { label: "10 à 14 enfants", price: "18,0€" },
              { label: "15 à 19 enfants", price: "17,5€" },
              { label: "20 enfants et +", price: "17,0€" },
            ],
            withSnackLabel: "Avec collation**",
            withSnack: [
              { label: "10 à 14 enfants", price: "21,0€" },
              { label: "15 à 19 enfants", price: "20,5€" },
              { label: "20 enfants et +", price: "20,0€" },
            ],
          },
        },
        {
          option: "3",
          activity: "Playground",
          context: "Expérience couverte dans la tente Igloo",
          age: "4 à 10 ans · taille maximale 1,20 m",
          description: "Fête de 2h30 avec 1h30 de jeux dans le playground et 30 min dédiées à la collation.",
          includes: ["Animateurs", "Assurances", "Invitations"],
          perks: ["Enfant fêté gratuit"],
          minParticipants: "Tarif par enfant (minimum 10 enfants payants)",
          pricing: {
            withoutSnackLabel: "Sans collation",
            withoutSnack: [
              { label: "10 à 14 enfants", price: "15,0€" },
              { label: "15 à 19 enfants", price: "14,5€" },
              { label: "20 enfants et +", price: "14,0€" },
            ],
            withSnackLabel: "Avec collation**",
            withSnack: [
              { label: "10 à 14 enfants", price: "18,0€" },
              { label: "15 à 19 enfants", price: "17,5€" },
              { label: "20 enfants et +", price: "17,0€" },
            ],
          },
        },
        {
          option: "4",
          activity: "Parcours + Escalade",
          context: "Parcours extérieur · escalade intérieure",
          age: "Taille minimale 1,05 m · poids entre 20 kg et 100 kg",
          description: "Fête de 2h30 avec 1h de parcours, 1h d'escalade et 30 min pour la collation.",
          includes: ["Animateurs", "Assurances", "Invitations"],
          perks: ["Enfant fêté gratuit"],
          minParticipants: "Tarif par enfant (minimum 10 enfants payants)",
          pricing: {
            withoutSnackLabel: "Sans collation",
            withoutSnack: [
              { label: "10 à 14 enfants", price: "21,0€" },
              { label: "15 à 19 enfants", price: "20,5€" },
              { label: "20 enfants et +", price: "20,0€" },
            ],
            withSnackLabel: "Avec collation**",
            withSnack: [
              { label: "10 à 14 enfants", price: "24,0€" },
              { label: "15 à 19 enfants", price: "23,5€" },
              { label: "20 enfants et +", price: "23,0€" },
            ],
          },
        },
        {
          option: "5",
          activity: "Trampoline & Tour de saut",
          context: "Activité en intérieur",
          age: "+6 ans pour trampolines 3-4 m · +8 ans pour tours 5-6 m",
          description:
            "Fête de 2h30 avec 1h30 sur trampolines et tours de saut, 30 min de karts/terrain de football et 30 min pour la collation.",
          includes: ["Animateurs", "Assurances", "Invitations"],
          perks: ["Enfant fêté gratuit"],
          minParticipants: "Tarif par enfant (minimum 10 enfants payants)",
          pricing: {
            withoutSnackLabel: "Sans collation",
            withoutSnack: [
              { label: "10 à 14 enfants", price: "18,0€" },
              { label: "15 à 19 enfants", price: "17,5€" },
              { label: "20 enfants et +", price: "17,0€" },
            ],
            withSnackLabel: "Avec collation**",
            withSnack: [
              { label: "10 à 14 enfants", price: "21,0€" },
              { label: "15 à 19 enfants", price: "20,5€" },
              { label: "20 enfants et +", price: "20,0€" },
            ],
          },
        },
        {
          option: "6",
          activity: "Parcours + Trampoline/Tour",
          context: "Combinaison extérieur & intérieur",
          age: "+6 ans pour trampolines 3-4 m · +8 ans pour tours 5-6 m",
          description: "Fête de 2h30 avec 1h de parcours, 1h sur trampolines/tours et 30 min pour la collation.",
          includes: ["Animateurs", "Assurances", "Invitations"],
          perks: ["Enfant fêté gratuit"],
          minParticipants: "Tarif par enfant (minimum 10 enfants payants)",
          pricing: {
            withoutSnackLabel: "Sans collation",
            withoutSnack: [
              { label: "10 à 14 enfants", price: "21,0€" },
              { label: "15 à 19 enfants", price: "20,5€" },
              { label: "20 enfants et +", price: "20,0€" },
            ],
            withSnackLabel: "Avec collation**",
            withSnack: [
              { label: "10 à 14 enfants", price: "24,0€" },
              { label: "15 à 19 enfants", price: "23,5€" },
              { label: "20 enfants et +", price: "23,0€" },
            ],
          },
        },
        {
          option: "7",
          activity: "Escalade + Trampoline/Tour",
          context: "Activités en intérieur",
          age: "20+ kg · +6 ans pour trampolines 3-4 m · +8 ans pour tours 5-6 m",
          description: "Fête de 2h30 avec 1h d'escalade, 1h sur trampolines/tours et 30 min pour la collation.",
          includes: ["Animateurs", "Assurances", "Invitations"],
          perks: ["Enfant fêté gratuit"],
          minParticipants: "Tarif par enfant (minimum 10 enfants payants)",
          pricing: {
            withoutSnackLabel: "Sans collation",
            withoutSnack: [
              { label: "10 à 14 enfants", price: "21,0€" },
              { label: "15 à 19 enfants", price: "20,5€" },
              { label: "20 enfants et +", price: "20,0€" },
            ],
            withSnackLabel: "Avec collation**",
            withSnack: [
              { label: "10 à 14 enfants", price: "24,0€" },
              { label: "15 à 19 enfants", price: "23,5€" },
              { label: "20 enfants et +", price: "23,0€" },
            ],
          },
        },
        {
          option: "8",
          activity: "Paintball 150 billes",
          context: "Activité en extérieur",
          age: "+8 ans (version kids) · +13 ans (adultes)",
          description: "Paintball avec accès à tous les terrains et 30 min finales pour la collation (optionnelle).",
          includes: [
            "Équipement complet (masque, combinaison, lanceur, gants, gilet)",
            "150 billes par joueur",
            "Animateurs, assurances et invitations",
          ],
          minParticipants: "Tarif par joueur (minimum 10 participants)",
          pricing: {
            withoutSnackLabel: "Sans collation",
            withoutSnack: [{ label: "Par joueur", price: "22€" }],
            withSnackLabel: "Avec collation**",
            withSnack: [{ label: "Par joueur", price: "25€" }],
          },
        },
        {
          option: "9",
          activity: "Paintball 200 billes",
          context: "Activité en extérieur",
          age: "+8 ans (version kids) · +13 ans (adultes)",
          description: "Paintball avec accès à tous les terrains et 30 min finales pour la collation (optionnelle).",
          includes: [
            "Équipement complet (masque, combinaison, lanceur, gants, gilet)",
            "200 billes par joueur",
            "Animateurs, assurances et invitations",
          ],
          minParticipants: "Tarif par joueur (minimum 10 participants)",
          pricing: {
            withoutSnackLabel: "Sans collation",
            withoutSnack: [{ label: "Par joueur", price: "24,5€" }],
            withSnackLabel: "Avec collation**",
            withSnack: [{ label: "Par joueur", price: "27,5€" }],
          },
        },
        {
          option: "10",
          activity: "Paintball 300 billes",
          context: "Activité en extérieur",
          age: "+8 ans (version kids) · +13 ans (adultes)",
          description: "Paintball avec accès à tous les terrains et 30 min finales pour la collation (optionnelle).",
          includes: [
            "Équipement complet (masque, combinaison, lanceur, gants, gilet)",
            "300 billes par joueur",
            "Animateurs, assurances et invitations",
          ],
          minParticipants: "Tarif par joueur (minimum 10 participants)",
          pricing: {
            withoutSnackLabel: "Sans collation",
            withoutSnack: [{ label: "Par joueur", price: "27€" }],
            withSnackLabel: "Avec collation**",
            withSnack: [{ label: "Par joueur", price: "30€" }],
          },
        },
        {
          option: "11",
          activity: "Paintball 400 billes",
          context: "Activité en extérieur",
          age: "+8 ans (version kids) · +13 ans (adultes)",
          description: "Paintball avec accès à tous les terrains et 30 min finales pour la collation (optionnelle).",
          includes: [
            "Équipement complet (masque, combinaison, lanceur, gants, gilet)",
            "400 billes par joueur",
            "Animateurs, assurances et invitations",
          ],
          minParticipants: "Tarif par joueur (minimum 10 participants)",
          pricing: {
            withoutSnackLabel: "Sans collation",
            withoutSnack: [{ label: "Par joueur", price: "30€" }],
            withSnackLabel: "Avec collation**",
            withSnack: [{ label: "Par joueur", price: "33€" }],
          },
        },
      ],
      snackNote:
        "** Collation FunPark par enfant (30 dernières minutes) : mini sandwich au chorizo, mini sandwich au jambon, chips, pop-corn, eau, ice tea et boisson gazeuse.",
      bungalow: {
        title: "Bungalow privatisé",
        description:
          "Il est possible de réserver un bungalow privatif pour le moment de la collation durant les 2h30 de fête.",
        items: [
          "Petit bungalow : 100€",
          "Grand bungalow : 200€",
        ],
      },
      schedule: {
        title: "Horaires pour réservations fêtes/groupes",
        entries: [
          "Été : 10h00, 11h30, 14h30, 16h00",
          "Hiver : 10h00, 11h30, 14h00, 15h30",
        ],
      },
    },
    corporate: {
      title: "Événements d'entreprise",
      description: "Contactez-nous pour connaître les conditions spéciales dédiées aux entreprises et aux équipes.",
    },
    finalNote:
      "Tarifs spéciaux pour les groupes scolaires et associatifs. Demandez un devis personnalisé à l'équipe FunPark.",
  },
};
