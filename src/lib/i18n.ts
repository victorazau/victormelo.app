export type Locale = "en" | "pt" | "es";

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Victor Melo",
      title: "GoHighLevel Implementation Specialist",
      subtitle:
        "I turn disconnected tools and manual processes into automated systems that close clients 24/7 — so you can scale without the overhead.",
      cta: "Let's Talk",
      ctaSecondary: "See My Work",
    },
    about: {
      label: "About Me",
      headline: "From Brazil to Miami — building systems that scale businesses.",
      p1: "I'm Victor Melo, founder of Vida Digital Solutions LLC, based in Miami, FL. Since 2023, I've been one of the earliest GoHighLevel adopters — back when the platform had a fraction of its current user base.",
      p2: "With a background in marketing and paid advertising (Meta Ads, Google Ads, Google Guaranteed), I realized most businesses don't have a technology problem — they have a systems problem. Tools that don't talk to each other. Leads slipping through the cracks. Manual processes eating up time and money.",
      p3: "So I became the person who fixes that. I design, build, and implement complete business ecosystems — CRM, automations, integrations, tracking, billing, and AI-powered workflows — so my clients can focus on growth instead of operations.",
      stats: {
        experience: "Years with GHL",
        clients: "Clients Served",
        countries: "Countries",
        systems: "Systems Integrated",
      },
    },
    skills: {
      label: "Skills & Expertise",
      headline: "The tools I master. The results I deliver.",
      categories: {
        crm: "CRM & Automation",
        ads: "Paid Advertising",
        dev: "Development & Integration",
        strategy: "Strategy & Operations",
      },
    },
    services: {
      label: "Services",
      headline: "What I can do for your business.",
      subtitle:
        "I adapt to your business needs — not the other way around. Every solution is tailored after a deep analysis of your operations.",
      items: [
        {
          title: "GHL Implementation & RevOps",
          description:
            "Complete GoHighLevel ecosystem setup. Pipelines, automations, integrations, onboarding. Sales, operations, and finance — all in one system.",
          price: "From $5,000",
        },
        {
          title: "Business Automation & Integrations",
          description:
            "Automate any process via n8n, GHL, or Zapier. Connect any system with an API: Stripe, ClickUp, ZapSign, WhatsApp, Meta Ads, Google, and more.",
          price: "Custom quote",
        },
        {
          title: "Website & Funnel Development",
          description:
            "High-converting landing pages, full websites, and sales funnels built to capture leads and drive revenue 24/7.",
          price: "From $2,500",
        },
      ],
      footer: "If it has an API, I integrate it. If it's a repetitive process, I automate it.",
    },
    portfolio: {
      label: "Portfolio",
      headline: "Real results for real businesses.",
      subtitle: "A selection of projects I've delivered through Vida Digital Solutions.",
      cases: [
        {
          client: "Azul Viagens",
          country: "Brazil",
          industry: "Aviation / Tourism",
          problem: "High volume of agents without a rotation system, manual follow-up, no ad tracking.",
          solution:
            "Automated lead rotation, multi-step WhatsApp/email follow-up, flight check-in reminders, Meta Ads tracking, mass segmented messaging.",
          result: "Standardized service, zero lost leads, 100% automated communication.",
        },
        {
          client: "Astride US Inc.",
          country: "USA",
          industry: "Digital Accounting",
          problem: "Growing company with sales, operations, and finance on disconnected systems.",
          solution:
            "Full system centralization, deep ClickUp integration, sales pipeline with automations, unified leadership dashboard, client onboarding automation.",
          result: "Zero to orbit in 30 days. 100% centralized operations.",
        },
        {
          client: "Vieira Cleaning Services",
          country: "USA",
          industry: "Cleaning Services",
          problem: "100% referral-dependent. No digital presence. Manual phone scheduling.",
          solution:
            "Professional website integrated with CRM, Google Guaranteed Ads, automatic scheduling with real-time availability, recurring client schedules, post-service Google review requests.",
          result: "Clients booking 24/7 on autopilot. New revenue channel created.",
        },
        {
          client: "APLAC Mais",
          country: "Brazil",
          industry: "Vehicle Protection",
          problem: "Manual billing, high delinquency rate, no communication rules.",
          solution:
            "Fully automated billing with PIX, boleto, and barcode. Automatic due date, late, and confirmation notifications. Financial dashboard + Asaas integration.",
          result: "Delinquency drastically reduced. Centralized financial management.",
        },
      ],
    },
    contact: {
      label: "Let's Work Together",
      headline: "Ready to automate your business?",
      subtitle:
        "Free discovery call — 30 minutes — no commitment. Let's map out how to take your business to the next level.",
      whatsapp: "WhatsApp Me",
      call: "Call Me",
      email: "Book a Call",
      location: "Miami, FL — Serving clients worldwide",
      currencies: "I accept: USD · EUR · BRL",
    },
    footer: {
      role: "GoHighLevel Specialist & Business Automation Consultant",
      company: "Founder & CEO at Vida Digital Solutions LLC",
      rights: "All rights reserved.",
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      skills: "Habilidades",
      services: "Serviços",
      portfolio: "Portfólio",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      name: "Victor Melo",
      title: "Especialista em Implementação GoHighLevel",
      subtitle:
        "Transformo ferramentas desconectadas e processos manuais em sistemas automatizados que fecham clientes 24/7 — para você escalar sem aumentar custos.",
      cta: "Vamos Conversar",
      ctaSecondary: "Ver Meu Trabalho",
    },
    about: {
      label: "Sobre Mim",
      headline: "Do Brasil a Miami — construindo sistemas que escalam negócios.",
      p1: "Sou Victor Melo, fundador da Vida Digital Solutions LLC, com sede em Miami, FL. Desde 2023, sou um dos primeiros adotantes do GoHighLevel — quando a plataforma tinha uma fração dos usuários atuais.",
      p2: "Com experiência em marketing e anúncios pagos (Meta Ads, Google Ads, Google Guaranteed), percebi que a maioria das empresas não tem um problema de tecnologia — tem um problema de sistemas. Ferramentas que não se comunicam. Leads perdidos. Processos manuais consumindo tempo e dinheiro.",
      p3: "Então me tornei a pessoa que resolve isso. Projeto, construo e implemento ecossistemas completos — CRM, automações, integrações, rastreamento, cobranças e workflows com IA — para que meus clientes foquem em crescimento ao invés de operações.",
      stats: {
        experience: "Anos com GHL",
        clients: "Clientes Atendidos",
        countries: "Países",
        systems: "Sistemas Integrados",
      },
    },
    skills: {
      label: "Habilidades & Expertise",
      headline: "As ferramentas que domino. Os resultados que entrego.",
      categories: {
        crm: "CRM & Automação",
        ads: "Mídia Paga",
        dev: "Desenvolvimento & Integração",
        strategy: "Estratégia & Operações",
      },
    },
    services: {
      label: "Serviços",
      headline: "O que posso fazer pelo seu negócio.",
      subtitle:
        "Me adapto às necessidades do seu negócio — não o contrário. Cada solução é personalizada após análise profunda das suas operações.",
      items: [
        {
          title: "Implementação GHL & RevOps",
          description:
            "Implementação completa do ecossistema GoHighLevel. Pipelines, automações, integrações, onboarding. Comercial, operacional e financeiro — tudo em um sistema.",
          price: "A partir de $5,000",
        },
        {
          title: "Automação de Negócios & Integrações",
          description:
            "Automatize qualquer processo via n8n, GHL ou Zapier. Conecte qualquer sistema com API: Stripe, ClickUp, ZapSign, WhatsApp, Meta Ads, Google e mais.",
          price: "Orçamento personalizado",
        },
        {
          title: "Desenvolvimento de Sites & Funis",
          description:
            "Landing pages de alta conversão, sites completos e funis de vendas construídos para capturar leads e gerar receita 24/7.",
          price: "A partir de $2,500",
        },
      ],
      footer: "Se tem API, eu integro. Se é processo repetitivo, eu automatizo.",
    },
    portfolio: {
      label: "Portfólio",
      headline: "Resultados reais para negócios reais.",
      subtitle: "Uma seleção de projetos entregues através da Vida Digital Solutions.",
      cases: [
        {
          client: "Azul Viagens",
          country: "Brasil",
          industry: "Aviação / Turismo",
          problem: "Grande volume de colaboradores sem rodízio, follow-up manual, sem rastreamento de anúncios.",
          solution:
            "Rodízio automático de leads, follow-up WhatsApp/email em múltiplas etapas, lembretes de check-in, rastreamento Meta Ads, disparos segmentados.",
          result: "Atendimento padronizado, zero leads perdidos, comunicação 100% automatizada.",
        },
        {
          client: "Astride US Inc.",
          country: "EUA",
          industry: "Contabilidade Digital",
          problem: "Empresa em crescimento com comercial, operacional e financeiro desconectados.",
          solution:
            "Centralização completa, integração profunda com ClickUp, pipeline de vendas com automações, dashboard unificado, automação de onboarding.",
          result: "Zero to orbit em 30 dias. Operação 100% centralizada.",
        },
        {
          client: "Vieira Cleaning Services",
          country: "EUA",
          industry: "Limpeza",
          problem: "100% dependente de indicações. Sem presença digital. Agendamento manual.",
          solution:
            "Site profissional integrado ao CRM, Google Guaranteed Ads, agendamento automático com disponibilidade em tempo real, schedule recorrente, reviews automáticos.",
          result: "Clientes agendando 24/7 no automático. Novo canal de receita criado.",
        },
        {
          client: "APLAC Mais",
          country: "Brasil",
          industry: "Proteção Veicular",
          problem: "Cobranças manuais, alto índice de inadimplência, sem régua de comunicação.",
          solution:
            "Régua de cobrança automatizada com PIX, boleto e código de barras. Notificações automáticas de vencimento, atraso e confirmação. Dashboard financeiro + Asaas.",
          result: "Inadimplência drasticamente reduzida. Gestão financeira centralizada.",
        },
      ],
    },
    contact: {
      label: "Vamos Trabalhar Juntos",
      headline: "Pronto para automatizar seu negócio?",
      subtitle:
        "Discovery call gratuita — 30 minutos — sem compromisso. Vamos mapear como levar seu negócio ao próximo nível.",
      whatsapp: "WhatsApp",
      call: "Ligar",
      email: "Agendar Call",
      location: "Miami, FL — Atendendo clientes no mundo todo",
      currencies: "Aceito: USD · EUR · BRL",
    },
    footer: {
      role: "Especialista GoHighLevel & Consultor de Automação",
      company: "Fundador & CEO da Vida Digital Solutions LLC",
      rights: "Todos os direitos reservados.",
    },
  },
  es: {
    nav: {
      about: "Sobre Mí",
      skills: "Habilidades",
      services: "Servicios",
      portfolio: "Portafolio",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Victor Melo",
      title: "Especialista en Implementación GoHighLevel",
      subtitle:
        "Transformo herramientas desconectadas y procesos manuales en sistemas automatizados que cierran clientes 24/7 — para que escales sin aumentar costos.",
      cta: "Hablemos",
      ctaSecondary: "Ver Mi Trabajo",
    },
    about: {
      label: "Sobre Mí",
      headline: "De Brasil a Miami — construyendo sistemas que escalan negocios.",
      p1: "Soy Victor Melo, fundador de Vida Digital Solutions LLC, con sede en Miami, FL. Desde 2023, he sido uno de los primeros adoptantes de GoHighLevel — cuando la plataforma tenía una fracción de sus usuarios actuales.",
      p2: "Con experiencia en marketing y publicidad paga (Meta Ads, Google Ads, Google Guaranteed), me di cuenta de que la mayoría de las empresas no tienen un problema de tecnología — tienen un problema de sistemas. Herramientas que no se comunican. Leads perdidos. Procesos manuales consumiendo tiempo y dinero.",
      p3: "Así que me convertí en la persona que resuelve eso. Diseño, construyo e implemento ecosistemas completos — CRM, automatizaciones, integraciones, tracking, facturación y workflows con IA — para que mis clientes se enfoquen en crecer en lugar de operar.",
      stats: {
        experience: "Años con GHL",
        clients: "Clientes Atendidos",
        countries: "Países",
        systems: "Sistemas Integrados",
      },
    },
    skills: {
      label: "Habilidades & Expertise",
      headline: "Las herramientas que domino. Los resultados que entrego.",
      categories: {
        crm: "CRM & Automatización",
        ads: "Publicidad Paga",
        dev: "Desarrollo & Integración",
        strategy: "Estrategia & Operaciones",
      },
    },
    services: {
      label: "Servicios",
      headline: "Lo que puedo hacer por tu negocio.",
      subtitle:
        "Me adapto a las necesidades de tu negocio — no al revés. Cada solución es personalizada tras un análisis profundo de tus operaciones.",
      items: [
        {
          title: "Implementación GHL & RevOps",
          description:
            "Implementación completa del ecosistema GoHighLevel. Pipelines, automatizaciones, integraciones, onboarding. Ventas, operaciones y finanzas — todo en un sistema.",
          price: "Desde $5,000",
        },
        {
          title: "Automatización de Negocios & Integraciones",
          description:
            "Automatiza cualquier proceso vía n8n, GHL o Zapier. Conecta cualquier sistema con API: Stripe, ClickUp, ZapSign, WhatsApp, Meta Ads, Google y más.",
          price: "Cotización personalizada",
        },
        {
          title: "Desarrollo de Sitios & Embudos",
          description:
            "Landing pages de alta conversión, sitios completos y embudos de ventas construidos para capturar leads y generar ingresos 24/7.",
          price: "Desde $2,500",
        },
      ],
      footer: "Si tiene API, lo integro. Si es un proceso repetitivo, lo automatizo.",
    },
    portfolio: {
      label: "Portafolio",
      headline: "Resultados reales para negocios reales.",
      subtitle: "Una selección de proyectos entregados a través de Vida Digital Solutions.",
      cases: [
        {
          client: "Azul Viagens",
          country: "Brasil",
          industry: "Aviación / Turismo",
          problem: "Gran volumen de agentes sin sistema de rotación, follow-up manual, sin tracking de anuncios.",
          solution:
            "Rotación automática de leads, follow-up WhatsApp/email en múltiples etapas, recordatorios de check-in, tracking Meta Ads, envíos segmentados.",
          result: "Servicio estandarizado, cero leads perdidos, comunicación 100% automatizada.",
        },
        {
          client: "Astride US Inc.",
          country: "EE.UU.",
          industry: "Contabilidad Digital",
          problem: "Empresa en crecimiento con ventas, operaciones y finanzas desconectadas.",
          solution:
            "Centralización completa, integración profunda con ClickUp, pipeline de ventas con automatizaciones, dashboard unificado, automatización de onboarding.",
          result: "Zero to orbit en 30 días. Operación 100% centralizada.",
        },
        {
          client: "Vieira Cleaning Services",
          country: "EE.UU.",
          industry: "Limpieza",
          problem: "100% dependiente de referencias. Sin presencia digital. Agendamiento manual.",
          solution:
            "Sitio profesional integrado al CRM, Google Guaranteed Ads, agendamiento automático con disponibilidad en tiempo real, schedules recurrentes, reviews automáticos.",
          result: "Clientes agendando 24/7 en automático. Nuevo canal de ingresos creado.",
        },
        {
          client: "APLAC Mais",
          country: "Brasil",
          industry: "Protección Vehicular",
          problem: "Facturación manual, alto índice de morosidad, sin reglas de comunicación.",
          solution:
            "Regla de cobro automatizada con PIX, boleto y código de barras. Notificaciones automáticas de vencimiento, atraso y confirmación. Dashboard financiero + Asaas.",
          result: "Morosidad drásticamente reducida. Gestión financiera centralizada.",
        },
      ],
    },
    contact: {
      label: "Trabajemos Juntos",
      headline: "¿Listo para automatizar tu negocio?",
      subtitle:
        "Discovery call gratuita — 30 minutos — sin compromiso. Mapeemos cómo llevar tu negocio al siguiente nivel.",
      whatsapp: "WhatsApp",
      call: "Llamar",
      email: "Agendar Llamada",
      location: "Miami, FL — Atendiendo clientes en todo el mundo",
      currencies: "Acepto: USD · EUR · BRL",
    },
    footer: {
      role: "Especialista GoHighLevel & Consultor de Automatización",
      company: "Fundador & CEO de Vida Digital Solutions LLC",
      rights: "Todos los derechos reservados.",
    },
  },
} as const;

export type Translations = typeof translations.en;
