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
  icon: string;
  title: string;
  description: string;
  items: string[];
  featured?: boolean;
};

const links = {
  github: "https://github.com/ThomasMoraes02",
  linkedin: "https://www.linkedin.com/in/thomas-vinicius-de-moraes/",
};

const profileImage = `${import.meta.env.BASE_URL}perfil-thomas-moraes.jpeg`;

const stats = [
  { value: "5+", label: "Anos de experiência" },
  { value: "9", label: "Áreas de stack" },
  { value: "#7.8", label: "Posição Google · Semexe" },
];

const stackGroups: StackGroup[] = [
  {
    icon: "⚙️",
    title: "Backend PHP",
    description:
      "Ecossistema principal para construir aplicações, integrações, APIs e sistemas com regras de negócio bem definidas.",
    items: ["PHP", "Laravel", "Laravel Filament", "Slim", "CodeIgniter", "CsCart", "ReactPHP", "Doctrine", "Hyperf", "Swoole"],
    featured: true,
  },
  {
    icon: "🟢",
    title: "Backend Node.js",
    description:
      "Construção de APIs, serviços, integrações e BFFs com Node.js, TypeScript e frameworks leves.",
    items: ["Node.js", "TypeScript", "JavaScript", "Express", "Fastify"],
    featured: true,
  },
  {
    icon: "⚛️",
    title: "Frontend & Interfaces",
    description:
      "Criação de experiências web modernas quando o produto precisa de uma interface clara, responsiva e bem construída.",
    items: ["React", "TypeScript", "JavaScript", "Vite"],
  },
  {
    icon: "🏛️",
    title: "Arquitetura & Qualidade",
    description:
      "Práticas e ferramentas para manter software compreensível, testável e preparado para crescer sem virar dívida invisível.",
    items: ["APIs RESTful", "Clean Architecture", "Domain Driven Design", "TDD", "PHPUnit", "Pest", "Jest", "Clean Code"],
  },
  {
    icon: "🗄️",
    title: "Dados, analytics & busca",
    description:
      "Modelagem, persistência, cache, mensageria, busca e análise de dados para apoiar decisões de produto.",
    items: ["MySQL", "PostgreSQL", "MariaDB", "SQLite", "MongoDB", "Redis", "RabbitMQ", "OpenSearch", "Metabase"],
  },
  {
    icon: "☁️",
    title: "Infraestrutura & Cloud",
    description:
      "Configurar, containerizar e sustentar aplicações web com ambientes mais previsíveis e reproduzíveis.",
    items: ["Docker", "Docker Compose", "GitHub", "GitLab", "AWS", "Google Cloud Platform", "Apache", "Nginx"],
  },
  {
    icon: "🤖",
    title: "Automação & IA",
    description:
      "Uso de automações e inteligência artificial para aumentar produtividade sem abrir mão de revisão e qualidade.",
    items: ["n8n", "Bling ERP", "Google APIs", "Codex", "Claude", "GitHub Copilot", "Agentes de IA", "Workflows"],
  },
  {
    icon: "🛒",
    title: "E-commerce & Operação",
    description:
      "Repertório em produtos digitais, marketplaces, integrações comerciais e rotinas operacionais que precisam escalar.",
    items: ["Marketplaces", "E-commerce", "ERP", "Bling", "Produtos", "Notas fiscais", "Pagamentos", "SEO técnico"],
  },
  {
    icon: "🤝",
    title: "Colaboração profissional",
    description:
      "Organização, comunicação clara e abertura a feedbacks como parte do processo para entregar melhor com o time.",
    items: ["Organização", "Comunicação", "Feedbacks", "Melhoria contínua", "Visão de produto", "Documentação"],
  },
];

const projects: Project[] = [
  {
    title: "SEO técnico para marketplace",
    description:
      "Otimização técnica, produto e estrutura de páginas para escalar tráfego orgânico e melhorar posicionamento em mecanismos de busca.",
    tags: ["SEO", "Marketplace", "Performance", "Produto"],
    status: "Case Semexe",
  },
  {
    title: "Automações e agentes de IA",
    description:
      "Workflows em n8n, integrações com Google e agentes de IA conectados a operações reais, reduzindo trabalho manual em escala.",
    tags: ["n8n", "IA", "Google APIs", "Integrações"],
    status: "Automação",
  },
  {
    title: "Integrações ERP e backoffice",
    description:
      "Backoffices com Laravel Filament e integrações com Bling para produtos, e-commerces, notas fiscais e pagamentos.",
    tags: ["Laravel Filament", "Bling", "ERP", "E-commerce"],
    status: "Serviços",
  },
];

const services = [
  {
    title: "Backoffices e painéis administrativos",
    description:
      "Desenvolvimento de ferramentas internas com Laravel Filament para centralizar cadastros, fluxos operacionais, permissões, relatórios e rotinas que hoje dependem de processos manuais.",
  },
  {
    title: "Integrações para e-commerce e ERP",
    description:
      "Criação e manutenção de integrações entre Bling, lojas virtuais, marketplaces, produtos, notas fiscais, pagamentos e sistemas internos, reduzindo retrabalho e falhas entre plataformas.",
  },
  {
    title: "SEO técnico para produtos digitais",
    description:
      "Atuação em estrutura técnica, indexação, performance, organização de páginas e melhorias orientadas a crescimento orgânico, especialmente em e-commerces e marketplaces.",
  },
  {
    title: "Automações com n8n e IA generativa",
    description:
      "Construção de workflows com n8n, integrações com Google e agentes de IA para acelerar atendimento, descrição de produtos, rotinas internas e tarefas repetitivas com controle e revisão humana.",
  },
  {
    title: "Consultoria técnica e evolução de sistemas",
    description:
      "Apoio na organização de código, arquitetura, APIs, ambientes Docker e melhoria contínua de sistemas existentes, com comunicação próxima e abertura constante a feedbacks.",
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
      "Containerizei o monolito com Docker, isolando dependências em containers e padronizando o ambiente local para que novos desenvolvedores consigam reproduzir a mesma experiência com mais previsibilidade.",
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
  { icon: "🎓", text: "Pós-graduação em Engenharia de Software — PUC Minas" },
  { icon: "📚", text: "Formações complementares e evolução contínua em tecnologia" },
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
          <a href="#experiencia">Experiência</a>
          <a href="#projetos">Projetos</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </div>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <div className="mobile-menu-links">
            <a href="#stack">Stack</a>
            <a href="#experiencia">Experiência</a>
            <a href="#projetos">Projetos</a>
            <a href="#servicos">Serviços</a>
            <a href="#contato">Contato</a>
          </div>
        </details>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="status-badge">Disponível · CLT, PJ e Freelance</div>
            <h1>
              Thomas <span className="accent">Moraes</span>
            </h1>
            <p className="lead">
              Software Engineer com foco em backend, PHP, Node.js e TypeScript. Especialista em
              integrações, automações com IA e arquitetura para produtos digitais que precisam
              escalar.
            </p>
            <div className="hero-actions">
              <a className="button primary" href={links.linkedin} rel="noreferrer" target="_blank">
                LinkedIn
              </a>
              <a className="button secondary" href={links.github} rel="noreferrer" target="_blank">
                GitHub
              </a>
            </div>
            <div className="hero-stats">
              {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="profile-card" aria-label="Foto e resumo profissional">
            <div className="photo-frame">
              <img src={profileImage} alt="Thomas Moraes" />
            </div>
            <div className="terminal" aria-hidden="true">
              <div className="terminal-bar">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="prompt">~/thomas $</span> whoami
                </div>
                <div className="terminal-line">
                  <span className="output">&nbsp;&nbsp;Role: Software Engineer @ Semexe</span>
                </div>
                <div className="terminal-line">
                  <span className="output">&nbsp;&nbsp;Stack: PHP · Node.js · TypeScript · IA</span>
                </div>
                <div className="terminal-line">
                  <span className="output">&nbsp;&nbsp;Open to: CLT · PJ · Freelance</span>
                </div>
                <div className="terminal-line">
                  <span className="prompt">~/thomas $</span>
                  <span className="cursor"> _</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" id="stack">
        <div className="section-header">
          <p className="section-label">Stack</p>
          <h2>Uma stack conectada por engenharia de produto</h2>
        </div>
        <div className="stack-grid">
          {stackGroups.map((group) => (
            <article
              className={`stack-card${group.featured ? " stack-featured" : ""}`}
              key={group.title}
            >
              <div className="stack-card-icon">{group.icon}</div>
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

      <section className="section" id="experiencia">
        <div className="section-header">
          <p className="section-label">Experiência</p>
          <h2>Uma trajetória em evolução contínua</h2>
        </div>
        <div className="timeline">
          {experiences.map((item) => (
            <article className="timeline-item" key={`${item.role}-${item.company}`}>
              <div className="timeline-meta">
                <div>
                  <p className="timeline-role">{item.role}</p>
                  <span className="timeline-company">{item.company}</span>
                </div>
                <span className="timeline-period">{item.period}</span>
              </div>
              <p className="timeline-desc">{item.description}</p>
              {item.achievements && (
                <ul className="achievement-list">
                  {item.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projetos">
        <div className="section-header">
          <p className="section-label">Projetos</p>
          <h2>Projetos com contexto, não só links soltos</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <span className="project-status">{project.status}</span>
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

      <section className="section" id="servicos">
        <div className="section-header">
          <p className="section-label">Serviços</p>
          <h2>Atuação prática para destravar operação e crescimento</h2>
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

      <section className="section">
        <div className="section-header">
          <p className="section-label">Formação</p>
          <h2>Base acadêmica e prática em engenharia</h2>
        </div>
        <div className="education-list">
          {education.map((item) => (
            <div className="education-item" key={item.text}>
              <span className="edu-icon">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="contact" id="contato">
        <p className="section-label">Contato</p>
        <h2>Vamos conversar sobre tecnologia e boas entregas?</h2>
        <div className="hero-actions">
          <a className="button primary" href={links.linkedin} rel="noreferrer" target="_blank">
            Conectar no LinkedIn
          </a>
          <a className="button secondary" href={links.github} rel="noreferrer" target="_blank">
            Explorar GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
