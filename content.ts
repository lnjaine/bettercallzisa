export interface Content {
  lang: string;
  whatsappMessage: string;
  nav: {
    links: { href: string; label: string }[];
    cta: string;
  };
  hero: {
    badge: string;
    headline: [string, string];
    sub: string;
    cta: string;
    ctaSecondary: string;
  };
  services: {
    label: string;
    title: string;
    items: { icon: string; title: string; description: string }[];
  };
  caseStudies: {
    label: string;
    title: string;
    stats: { value: string; label: string }[];
    cases: {
      verdict: string;
      industry: string;
      challenge: string;
      result: string;
      detail: string;
    }[];
  };
  about: {
    label: string;
    title: string;
    name: string;
    bio: [string, string];
    credentials: string[];
    cta: string;
    linkedinUrl: string;
  };
  testimonials: {
    label: string;
    title: string;
    subtitle: string;
    items: {
      quote: string;
      name: string;
      role: string;
      company: string;
      verdict: string;
      linkedin: string;
    }[];
  };
  contactCta: {
    headline: [string, string];
    sub: string;
    cta: string;
    ctaSecondary: string;
  };
  footer: {
    tagline: string;
  };
}

const LINKEDIN_URL = "https://www.linkedin.com/in/azisaka/";

export const en: Content = {
  lang: "en",
  whatsappMessage: "Zisa, I have a problem that needs to disappear. Here's the situation:",
  nav: {
    links: [
      { href: "#services", label: "What I Fix" },
      { href: "#evidence", label: "Track Record" },
      { href: "#counsel", label: "The Engineer" },
      { href: "#testimony", label: "Results" },
    ],
    cta: "Call Zisa",
  },
  hero: {
    badge: "Available now. Problem? Gone.",
    headline: ["Got A Hairy Problem?", "It's Already Gone."],
    sub: "The best engineer for hire. Production on fire? Legacy nightmare? Impossible deadline? No questions asked. Name the price. Problem disappears.",
    cta: "Better Call Zisa",
    ctaSecondary: "See The Track Record",
  },
  services: {
    label: "What I Fix",
    title: "Your Worst Problems",
    items: [
      {
        icon: "\u{1F525}",
        title: "Production Fires",
        description:
          "Server down. Users screaming. Your team is frozen. Zisa walks in, finds the root cause, ships the fix. Done. You sleep tonight.",
      },
      {
        icon: "\u{1F578}\u{FE0F}",
        title: "Legacy Nightmares",
        description:
          "That codebase nobody wants to touch? The one that breaks if you look at it wrong? Hand it over. It'll be clean, fast, and working by morning.",
      },
      {
        icon: "\u{23F0}",
        title: "Impossible Deadlines",
        description:
          "Launch is Friday. Feature isn't built. Your team says it can't be done. Zisa says watch me. No excuses, no extensions. Just delivered.",
      },
      {
        icon: "\u{1F9EC}",
        title: "Deep Technical Debt",
        description:
          "The bug that's been there for 6 months. The migration everyone's afraid of. The architecture that doesn't scale. Consider it handled.",
      },
    ],
  },
  caseStudies: {
    label: "The Track Record",
    title: "Problems That Don't Exist Anymore",
    stats: [
      { value: "200+", label: "Problems Killed" },
      { value: "4hrs", label: "Avg. Time to Fix" },
      { value: "0", label: "Unresolved Issues" },
      { value: "100%", label: "Satisfaction Rate" },
    ],
    cases: [
      {
        verdict: "FIXED IN 3 HOURS",
        industry: "Series B Startup",
        challenge:
          "Payment system down during Black Friday. Engineering team couldn't find the bug. Revenue bleeding $50K/hour.",
        result: "Root cause found in 47 minutes. Fix shipped. Zero data loss.",
        detail:
          "Race condition in the payment queue \u2014 3 lines of code, $400K saved",
      },
      {
        verdict: "FIXED OVERNIGHT",
        industry: "E-commerce Platform",
        challenge:
          "Migration from monolith to microservices stalled for 8 months. Team of 12 engineers stuck. Board losing patience.",
        result: "Critical path unblocked. First 3 services extracted in 48 hours.",
        detail:
          "Untangled the dependency graph nobody else would touch",
      },
      {
        verdict: "FIXED BEFORE LAUNCH",
        industry: "HealthTech Company",
        challenge:
          "HIPAA compliance audit in 5 days. App failing 23 security checks. Previous contractor ghosted.",
        result: "All 23 checks passed. Audit cleared. Launch on schedule.",
        detail:
          "Security hardening, encryption fixes, and audit trail \u2014 under pressure, no excuses",
      },
    ],
  },
  about: {
    label: "The Engineer",
    title: "One Call. Problem Gone.",
    name: "Zisa",
    bio: [
      "I don't do meetings about meetings. I don't write proposals. You have a problem, you tell me what it is, we agree on the price, and I make it disappear. That's it. Over a decade of engineering, and the only thing I've never shipped is an excuse.",
      "Your team is stuck? I unstick them. Your production is down? I bring it back. Your deadline is impossible? I make it possible. No junior devs, no subcontracting, no handoffs. When you call Zisa, Zisa picks up the keyboard.",
    ],
    credentials: [
      "10+ years shipping production code under pressure",
      "Full-stack: from kernel-level bugs to React pixel-pushing",
      "200+ critical issues resolved \u2014 zero left unfinished",
      "Trusted by CTOs when their own team can't crack it",
    ],
    cta: "Describe Your Problem",
    linkedinUrl: LINKEDIN_URL,
  },
  testimonials: {
    label: "Don't Take My Word For It",
    title: "They Called. It Worked.",
    subtitle: "Real people. Real results. Click their names and ask them yourself.",
    items: [
      {
        quote:
          "Correios was shutting down their API in 24 hours. Our entire shipping system was about to break and we'd drown in support tickets. I needed someone to build an alternative overnight. Zisa did it in a few hours. Not days. Hours.",
        name: "L\u00edvia Rigueiral",
        role: "CPO",
        company: "Superprete",
        verdict: "SHIPPED OVERNIGHT",
        linkedin: "https://www.linkedin.com/in/liviarigueiral/",
      },
      {
        quote:
          "We had a product to identify ads from our live broadcasts. For months, we couldn't get it to actually work. Multiple attempts, nothing stuck. Zisa made it work in less than a week. That's the kind of engineer you want on your side.",
        name: "Carol Bezerra",
        role: "Caz\u00e9 TV",
        company: "Caz\u00e9 TV",
        verdict: "FIXED IN DAYS, NOT MONTHS",
        linkedin: "https://www.linkedin.com/in/carol-bezerra-75319822/",
      },
    ],
  },
  contactCta: {
    headline: ["Stop Bleeding Money.", "Call Zisa."],
    sub: "Every hour that problem sits there is money on fire. Tell me what's broken. I'll tell you the price. You'll tell me to start. No contracts. No BS. Just results.",
    cta: "Better Call Zisa",
    ctaSecondary: "Call Directly",
  },
  footer: {
    tagline: "Built with AI, obviously.",
  },
};

export const ptBR: Content = {
  lang: "pt-BR",
  whatsappMessage: "Zisa, tenho um problema que precisa sumir. A situa\u00e7\u00e3o \u00e9 a seguinte:",
  nav: {
    links: [
      { href: "#services", label: "O Que Resolvo" },
      { href: "#evidence", label: "Hist\u00f3rico" },
      { href: "#counsel", label: "O Engenheiro" },
      { href: "#testimony", label: "Resultados" },
    ],
    cta: "Chama o Zisa",
  },
  hero: {
    badge: "Dispon\u00edvel agora. Problema? Sumiu.",
    headline: ["Tem Um Problema\nCabeludo?", "J\u00e1 Era."],
    sub: "O melhor engenheiro dispon\u00edvel. Produ\u00e7\u00e3o pegando fogo? C\u00f3digo legado? Prazo imposs\u00edvel? Sem perguntas. Diz o pre\u00e7o. Problema some.",
    cta: "Chama o Zisa",
    ctaSecondary: "Ver Hist\u00f3rico",
  },
  services: {
    label: "O Que Resolvo",
    title: "Seus Piores Problemas",
    items: [
      {
        icon: "\u{1F525}",
        title: "Inc\u00eandio em Produ\u00e7\u00e3o",
        description:
          "Servidor caiu. Usu\u00e1rios gritando. Seu time travou. Zisa entra, acha a causa raiz, sobe o fix. Pronto. Voc\u00ea dorme essa noite.",
      },
      {
        icon: "\u{1F578}\u{FE0F}",
        title: "Pesadelo Legado",
        description:
          "Aquele c\u00f3digo que ningu\u00e9m quer mexer? Que quebra se voc\u00ea olha torto? Passa pra c\u00e1. Vai estar limpo, r\u00e1pido e funcionando de manh\u00e3.",
      },
      {
        icon: "\u{23F0}",
        title: "Prazos Imposs\u00edveis",
        description:
          "Lan\u00e7amento \u00e9 sexta. Feature n\u00e3o t\u00e1 pronta. Seu time diz que n\u00e3o d\u00e1. Zisa diz: olha s\u00f3. Sem desculpa, sem adia. Entregue.",
      },
      {
        icon: "\u{1F9EC}",
        title: "D\u00edvida T\u00e9cnica Pesada",
        description:
          "O bug que t\u00e1 l\u00e1 h\u00e1 6 meses. A migra\u00e7\u00e3o que todo mundo tem medo. A arquitetura que n\u00e3o escala. Considera resolvido.",
      },
    ],
  },
  caseStudies: {
    label: "Hist\u00f3rico",
    title: "Problemas Que N\u00e3o Existem Mais",
    stats: [
      { value: "200+", label: "Problemas Resolvidos" },
      { value: "4hrs", label: "Tempo M\u00e9dio de Fix" },
      { value: "0", label: "Issues Sem Resolver" },
      { value: "100%", label: "Taxa de Satisfa\u00e7\u00e3o" },
    ],
    cases: [
      {
        verdict: "RESOLVIDO EM 3 HORAS",
        industry: "Startup S\u00e9rie B",
        challenge:
          "Sistema de pagamento caiu na Black Friday. Time de engenharia n\u00e3o achava o bug. Perdendo R$250K/hora.",
        result: "Causa raiz encontrada em 47 minutos. Fix no ar. Zero perda de dados.",
        detail:
          "Race condition na fila de pagamentos \u2014 3 linhas de c\u00f3digo, R$2M salvos",
      },
      {
        verdict: "RESOLVIDO DURANTE A NOITE",
        industry: "Plataforma E-commerce",
        challenge:
          "Migra\u00e7\u00e3o de monolito pra microsservi\u00e7os travada h\u00e1 8 meses. Time de 12 engenheiros empacado. Board perdendo paci\u00eancia.",
        result: "Caminho cr\u00edtico desbloqueado. 3 primeiros servi\u00e7os extra\u00eddos em 48 horas.",
        detail:
          "Desemaranhei o grafo de depend\u00eancias que ningu\u00e9m queria tocar",
      },
      {
        verdict: "RESOLVIDO ANTES DO LAUNCH",
        industry: "Empresa HealthTech",
        challenge:
          "Auditoria de compliance em 5 dias. App falhando em 23 checks de seguran\u00e7a. Fornecedor anterior sumiu.",
        result: "Todos os 23 checks passaram. Auditoria aprovada. Launch no prazo.",
        detail:
          "Hardening de seguran\u00e7a, corre\u00e7\u00f5es de criptografia e trilha de auditoria \u2014 sob press\u00e3o, sem desculpas",
      },
    ],
  },
  about: {
    label: "O Engenheiro",
    title: "Uma Ligada. Problema Sumiu.",
    name: "Zisa",
    bio: [
      "Eu n\u00e3o fa\u00e7o reuni\u00e3o sobre reuni\u00e3o. N\u00e3o escrevo proposta. Voc\u00ea tem um problema, me conta qual \u00e9, a gente combina o pre\u00e7o, e eu fa\u00e7o ele sumir. S\u00f3 isso. Mais de uma d\u00e9cada de engenharia, e a \u00fanica coisa que eu nunca entreguei foi desculpa.",
      "Seu time travou? Eu destravo. Sua produ\u00e7\u00e3o caiu? Eu levanto. Seu prazo \u00e9 imposs\u00edvel? Eu torno poss\u00edvel. Sem junior, sem subcontrata\u00e7\u00e3o, sem repasse. Quando voc\u00ea chama o Zisa, o Zisa p\u00f5e a m\u00e3o no teclado.",
    ],
    credentials: [
      "10+ anos entregando c\u00f3digo em produ\u00e7\u00e3o sob press\u00e3o",
      "Full-stack: de bugs no kernel at\u00e9 pixel-pushing em React",
      "200+ issues cr\u00edticas resolvidas \u2014 zero sem resolver",
      "Confian\u00e7a de CTOs quando o time deles n\u00e3o d\u00e1 conta",
    ],
    cta: "Descreva Seu Problema",
    linkedinUrl: LINKEDIN_URL,
  },
  testimonials: {
    label: "N\u00e3o Acredite S\u00f3 Em Mim",
    title: "Eles Chamaram. Funcionou.",
    subtitle: "Pessoas reais. Resultados reais. Clica no nome e pergunta pra eles.",
    items: [
      {
        quote:
          "Os Correios iam derrubar a API em 24 horas. Nosso sistema inteiro de frete ia quebrar e a gente ia se afogar em ticket de suporte. Eu precisava de algu\u00e9m pra construir uma alternativa da noite pro dia. O Zisa fez em poucas horas. N\u00e3o dias. Horas.",
        name: "L\u00edvia Rigueiral",
        role: "CPO",
        company: "Superprete",
        verdict: "ENTREGUE DA NOITE PRO DIA",
        linkedin: "https://www.linkedin.com/in/liviarigueiral/",
      },
      {
        quote:
          "A gente tinha um produto pra identificar an\u00fancios nas transmiss\u00f5es ao vivo. Por meses, n\u00e3o conseguimos fazer funcionar. V\u00e1rias tentativas, nada colava. O Zisa fez funcionar em menos de uma semana. Esse \u00e9 o tipo de engenheiro que voc\u00ea quer do seu lado.",
        name: "Carol Bezerra",
        role: "Caz\u00e9 TV",
        company: "Caz\u00e9 TV",
        verdict: "RESOLVIDO EM DIAS, N\u00c3O MESES",
        linkedin: "https://www.linkedin.com/in/carol-bezerra-75319822/",
      },
    ],
  },
  contactCta: {
    headline: ["Para De Queimar Dinheiro.", "Chama o Zisa."],
    sub: "Cada hora que o problema fica l\u00e1 \u00e9 dinheiro pegando fogo. Me diz o que quebrou. Eu digo o pre\u00e7o. Voc\u00ea manda come\u00e7ar. Sem contrato. Sem enrola\u00e7\u00e3o. S\u00f3 resultado.",
    cta: "Chama o Zisa",
    ctaSecondary: "Ligar Direto",
  },
  footer: {
    tagline: "Feito com IA, obviamente.",
  },
};
