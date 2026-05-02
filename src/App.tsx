type Project = {
  title: string;
  description: string;
  tags: string[];
  status: string;
};

type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements?: string[];
};

type StackGroup = {
  title: string;
  description: string;
  items: string[];
};

const links = {
  github: "https://github.com/ThomasMoraes02",
  linkedin: "https://www.linkedin.com/in/thomas-vinicius-de-moraes/",
};

const highlights = [
  "PHP & Node.js",
  "APIs RESTful",
  "Clean Architecture",
  "SEO técnico",
  "IA aplicada à produtividade",
  "Cloud & DevOps",
];

const stackGroups: StackGroup[] = [
  {
    title: "Backend PHP",
    description:
      "Ecossistema principal para construir aplicações, integrações, APIs e sistemas com regras de negócio bem definidas.",
    items: [
      "PHP",
      "Laravel",
      "Laravel Filament",
      "Slim",
      "CodeIgniter",
      "CsCart",
      "ReactPHP",
      "Doctrine",
      "Hyperf",
      "Swoole",
    ],
  },
  {
    title: "Backend Node.js",
    description:
      "Construção de APIs, serviços, integrações e BFFs com Node.js, TypeScript e frameworks leves.",
    items: ["Node.js", "TypeScript", "JavaScript", "Express", "Fastify"],
  },
  {
    title: "Frontend & Interfaces",
    description:
      "Criação de experiências web modernas quando o produto precisa de uma interface clara, responsiva e bem construída.",
    items: ["React", "TypeScript", "JavaScript", "Vite"],
  },
  {
    title: "Arquitetura & Qualidade",
    description:
      "Práticas e ferramentas para manter software compreensível, testável e preparado para crescer sem virar dívida invisível.",
    items: [
      "APIs RESTful",
      "Clean Architecture",
      "Domain Driven Design",
      "Test Driven Development",
      "PHPUnit",
      "Pest",
      "Jest",
      "Clean Code",
    ],
  },
  {
    title: "Dados, analytics & busca",
    description:
      "Modelagem, persistência, cache, mensageria, busca e análise de dados para apoiar decisões de produto.",
    items: [
      "MySQL",
      "PostgreSQL",
      "MariaDB",
      "SQLite",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "OpenSearch",
      "Metabase",
    ],
  },
  {
    title: "DevOps & Cloud",
    description:
      "Ambientes reproduzíveis, pipelines e infraestrutura para levar código do desenvolvimento à produção com confiança.",
    items: [
      "Docker",
      "Docker Compose",
      "GitHub",
      "GitLab",
      "Buddy CI",
      "AWS",
      "Google Cloud Platform",
      "Apache",
      "Nginx",
    ],
  },
  {
    title: "Automação & IA",
    description:
      "Uso de automações e inteligência artificial para aumentar produtividade sem abrir mão de revisão, qualidade e engenharia.",
    items: [
      "n8n",
      "Bling ERP",
      "Google APIs",
      "Inteligência Artificial",
      "Automação de workflows",
      "Produtividade com qualidade",
    ],
  },
];

const projects: Project[] = [
  {
    title: "SEO técnico para marketplace",
    description:
      "Atuação em otimização técnica, produto e estrutura de páginas para escalar tráfego orgânico e melhorar posicionamento em mecanismos de busca.",
    tags: ["SEO", "Marketplace", "Performance", "Produto"],
    status: "Case Semexe",
  },
  {
    title: "Automações e agentes de IA",
    description:
      "Criação de workflows em n8n, integrações com Google e agentes de IA conectados a operações reais, reduzindo trabalho manual em escala.",
    tags: ["n8n", "IA", "Google APIs", "Integrações"],
    status: "Automação",
  },
  {
    title: "Integrações ERP e backoffice",
    description:
      "Desenvolvimento de backoffices com Laravel Filament e integrações com Bling para produtos, e-commerces, notas fiscais e pagamentos.",
    tags: ["Laravel Filament", "Bling", "ERP", "E-commerce"],
    status: "Serviços",
  },
];

const services = [
  {
    title: "Backoffice sob medida",
    description:
      "Criação de painéis administrativos e ferramentas internas com Laravel Filament para organizar operações, cadastros, fluxos e rotinas de negócio.",
  },
  {
    title: "Integrações com Bling ERP",
    description:
      "Grande experiência conectando Bling a produtos, e-commerces, notas fiscais, pagamentos e processos comerciais que precisam conversar sem retrabalho.",
  },
  {
    title: "SEO técnico e crescimento orgânico",
    description:
      "Especialização em SEO para melhorar indexação, estrutura técnica, performance e tráfego orgânico com foco em crescimento sustentável.",
  },
  {
    title: "Automações com n8n e IA",
    description:
      "Construção de automações de alta escala, integrações com Google e agentes de IA para acelerar processos mantendo controle, rastreabilidade e qualidade.",
  },
  {
    title: "Infraestrutura web",
    description:
      "Conhecimento prático em Apache, Nginx, Docker e ambientes de aplicação para melhorar previsibilidade, configuração e sustentação técnica.",
  },
];

const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Semexe",
    period: "Atual",
    description:
      "Atuação em engenharia de software para marketplace, conectando backend, SEO técnico, automações, IA e evolução de infraestrutura.",
    achievements: [
      "Evoluí frentes de SEO técnico e produto que contribuíram para levar a Semexe à primeira página do Google, saindo de posições médias entre 12 e 16 para patamares próximos de 8 e, mais recentemente, 7.8.",
      "Integrei agentes de IA ao marketplace para responder dúvidas de anúncios, criando uma comunicação mais direta e reduzindo a dependência de aguardar respostas manuais dos anunciantes.",
      "Implementei geração inteligente de descrições de anúncios a partir das informações cadastradas, usando fluxos em n8n integrados diretamente à operação do marketplace.",
      "Containerizei o monolito com Docker, isolando dependências em containers e padronizando o ambiente local para que novos desenvolvedores consigam reproduzir a mesma experiência de desenvolvimento com mais previsibilidade.",
    ],
  },
  {
    role: "Engenharia de Software",
    company: "Trajetória profissional",
    period: "Experiências anteriores",
    description:
      "Histórico em tecnologia construindo repertório prático em desenvolvimento, sustentação, colaboração e melhoria contínua.",
  },
];

const education = [
  "Pós-graduação em Engenharia de Software - PUC Minas",
  "Formações complementares e evolução contínua em tecnologia",
];

export function App() {
  return (
    <main>
      <nav className="nav" aria-label="Navegação principal">
        <a className="brand" href="#inicio">
          TM
        </a>
        <div className="nav-links">
          <a href="#stack">Stack</a>
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos</a>
          <a href="#experiencia">Experiência</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Barueri, São Paulo | Software Engineer</p>
            <h1>Thomas Vinicius de Moraes</h1>
            <p className="lead">
              Backend engineer especializado em PHP, Node.js com TypeScript, integrações,
              automações, SEO técnico e arquitetura para produtos digitais que precisam escalar.
            </p>
            <div className="hero-actions">
              <a className="button primary" href={links.linkedin} rel="noreferrer" target="_blank">
                Ver LinkedIn
              </a>
              <a className="button secondary" href={links.github} rel="noreferrer" target="_blank">
                Ver GitHub
              </a>
            </div>
          </div>

          <aside className="profile-card" aria-label="Foto e resumo profissional">
            <div className="photo-frame">
              <img src="/perfil-thomas-moraes.jpeg" alt="Thomas Moraes sorrindo" />
            </div>
            <div className="card-note">
              <span>Disponível para conexões profissionais</span>
              <strong>Backend, arquitetura e IA aplicada ao dia a dia.</strong>
            </div>
          </aside>
        </div>
      </section>

      <section className="marquee" aria-label="Principais competências">
        {highlights.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <section className="section split" id="sobre">
        <div>
          <p className="section-kicker">Sobre</p>
          <h2>Perfil técnico com olhar para produto.</h2>
        </div>
        <p>
          Sou Software Engineer com pós-graduação em Engenharia de Software, experiência em backend
          PHP, backend Node.js com TypeScript, APIs, dados, mensageria, cloud e pipelines de
          entrega. Também atuo como prestador de serviços em backoffices, integrações com Bling,
          automações com n8n, SEO técnico e infraestrutura web. No momento, estou aprofundando
          estudos em Hyperf, Swoole e inteligência artificial para acelerar o ciclo de
          desenvolvimento mantendo qualidade, clareza técnica e consistência.
        </p>
      </section>

      <section className="section stack-section" id="stack">
        <div className="section-heading">
          <p className="section-kicker">Stack</p>
          <h2>Uma stack conectada por engenharia de produto.</h2>
        </div>
        <div className="stack-grid">
          {stackGroups.map((group) => (
            <article className="stack-card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section services-section" id="servicos">
        <div className="section-heading">
          <p className="section-kicker">Serviços</p>
          <h2>Atuação prática para destravar operação, escala e crescimento.</h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-item" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projetos">
        <div className="section-heading">
          <p className="section-kicker">Projetos</p>
          <h2>Projetos com contexto, não só links soltos.</h2>
        </div>
        <div className="cards">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="card-topline">
                <span>{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section timeline-section" id="experiencia">
        <div className="section-heading">
          <p className="section-kicker">Experiência</p>
          <h2>Uma trajetória em evolução contínua.</h2>
        </div>
        <div className="timeline">
          {experiences.map((item) => (
            <article className="timeline-item" key={`${item.role}-${item.company}`}>
              <span>{item.period}</span>
              <h3>
                {item.role} · {item.company}
              </h3>
              <p>{item.description}</p>
              {item.achievements ? (
                <ul className="achievement-list">
                  {item.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section education-section">
        <div>
          <p className="section-kicker">Formação</p>
          <h2>Base acadêmica e prática em engenharia.</h2>
        </div>
        <div className="education-list">
          {education.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="contact" id="contato">
        <p className="section-kicker">Contato</p>
        <h2>Vamos conversar sobre tecnologia, produto e boas entregas?</h2>
        <div className="hero-actions">
          <a className="button primary" href={links.linkedin} rel="noreferrer" target="_blank">
            Conectar no LinkedIn
          </a>
          <a className="button secondary" href={links.github} rel="noreferrer" target="_blank">
            Explorar GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
