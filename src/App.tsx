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
  note?: string;
  achievements?: string[];
};

type StackGroup = {
  icon: string;
  title: string;
  description: string;
  items: string[];
  featured?: boolean;
};

type Course = {
  name: string;
  year: string;
};

const links = {
  github: "https://github.com/ThomasMoraes02",
  linkedin: "https://www.linkedin.com/in/thomas-vinicius-de-moraes/",
};

const profileImage = `${import.meta.env.BASE_URL}perfil-thomas-moraes.jpeg`;

const stats = [
  { value: "7+", label: "Anos de experiência" },
  { value: "Tech Lead", label: "Semexe · 2 anos" },
  { value: "9", label: "Áreas de stack" },
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
      "Construção de APIs, serviços, integrações e BFFs com Node.js, TypeScript e frameworks leves e robustos.",
    items: ["Node.js", "TypeScript", "JavaScript", "Express", "Fastify", "NestJS"],
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
    items: ["MySQL", "PostgreSQL", "MariaDB", "SQLite", "MongoDB", "Redis", "RabbitMQ", "OpenSearch", "Elasticsearch", "BigQuery", "Metabase"],
  },
  {
    icon: "☁️",
    title: "Infraestrutura & Cloud",
    description:
      "Configurar, containerizar e sustentar aplicações web com ambientes mais previsíveis e reproduzíveis.",
    items: ["Docker", "Docker Compose", "Linux", "GitHub Actions", "Buddy", "AWS", "Google Cloud Platform", "Apache", "Nginx"],
  },
  {
    icon: "🤖",
    title: "Automação & IA",
    description:
      "Uso de automações e inteligência artificial para aumentar produtividade sem abrir mão de revisão e qualidade.",
    items: ["n8n", "Google APIs", "Agentes de IA", "Claude", "GitHub Copilot", "Codex", "Autentique", "Workflows"],
  },
  {
    icon: "🛒",
    title: "E-commerce & Operação",
    description:
      "5 anos de repertório em produtos digitais, marketplaces, ERPs e rotinas operacionais que precisam escalar com organização.",
    items: ["Marketplaces", "E-commerce", "Bling", "Omie", "Produtos", "Notas fiscais", "Pagamentos", "SEO técnico"],
  },
  {
    icon: "🤝",
    title: "Colaboração profissional",
    description:
      "Organização, comunicação clara e abertura a feedbacks como parte do processo para entregar melhor com o time.",
    items: ["Liderança técnica", "Code Review", "Comunicação", "Melhoria contínua", "Visão de produto", "Inglês avançado"],
  },
];

const projects: Project[] = [
  {
    title: "SEO técnico para marketplace",
    description:
      "Evolução de SEO técnico e produto que posicionou a Semexe na primeira página do Google, saindo de posições entre 12 e 16 para o top 10 em termos estratégicos.",
    tags: ["SEO", "Marketplace", "Performance", "Produto"],
    status: "Case Semexe",
  },
  {
    title: "Reestruturação de busca com OpenSearch",
    description:
      "Redesenho da busca da plataforma de marketplace com OpenSearch, reduzindo custos operacionais e melhorando relevância e performance dos resultados.",
    tags: ["OpenSearch", "Elasticsearch", "Backend", "Performance"],
    status: "Case Semexe",
  },
  {
    title: "Agentes de IA e automações operacionais",
    description:
      "Agentes de IA para responder dúvidas de anúncios, geração automática de descrições e automações para Instagram via n8n integrados à operação do marketplace.",
    tags: ["n8n", "Agentes de IA", "Google APIs", "Automação"],
    status: "Case Semexe",
  },
  {
    title: "Estruturação de tecnologia — empresa de planejamento financeiro",
    description:
      "Consultoria para criar a área de tecnologia do zero: backoffice com Filament, automações via n8n, integração com Omie ERP, assinatura digital com Autentique, métricas com Metabase e deploy com Docker e GitHub Actions.",
    tags: ["Laravel Filament", "n8n", "Omie", "Docker", "Metabase"],
    status: "Consultoria",
  },
  {
    title: "Automação fiscal em volume — distribuidora de ferramentas",
    description:
      "Solução para emissão automatizada de centenas de notas fiscais de remessa e venda via integração com Bling ERP, eliminando processos manuais e garantindo conformidade em escala.",
    tags: ["Bling", "Laravel", "BigQuery", "Google Cloud"],
    status: "Consultoria",
  },
];

const services = [
  {
    title: "Backoffices e painéis administrativos",
    description:
      "Desenvolvimento de ferramentas internas com Laravel Filament para centralizar cadastros, fluxos operacionais, permissões, relatórios e rotinas que hoje dependem de processos manuais.",
  },
  {
    title: "Integrações com ERP — Bling e Omie",
    description:
      "Criação e manutenção de integrações entre Bling, Omie, lojas virtuais, marketplaces, produtos, notas fiscais, pagamentos e sistemas internos, reduzindo retrabalho e falhas entre plataformas.",
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
      "Apoio na organização de código, arquitetura, APIs, ambientes Docker e melhoria contínua de sistemas existentes — desde estruturar a primeira área de tecnologia de uma empresa até modernizar sistemas legados.",
  },
];

const experiences: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Tivit",
    period: "Jul 2026 · Atual",
    description:
      "Engenharia de software sênior com foco em backend Node.js, construção de APIs REST e infraestrutura em AWS.",
  },
  {
    role: "Tech Lead → Senior Software Engineer",
    company: "Semexe",
    period: "Mai 2021 · Jul 2026",
    note: "Jornada de Junior I a Tech Lead ao longo de 5 anos na mesma empresa",
    description:
      "Liderança técnica com gestão direta de equipe, atuando na evolução da plataforma de marketplace e no ciclo completo de desenvolvimento — da arquitetura à entrega em produção.",
    achievements: [
      "Conduzi a evolução de SEO técnico e produto que levou a Semexe à primeira página do Google, saindo de posições entre 12 e 16 para o top 10 em termos estratégicos.",
      "Reestruturei a busca da plataforma com OpenSearch, contribuindo para redução de custos operacionais e melhora de relevância e performance.",
      "Integrei agentes de IA ao marketplace para responder dúvidas de anúncios, reduzindo dependência de respostas manuais e agilizando a comunicação com anunciantes.",
      "Implementei geração automática de descrições de anúncios e automações para Instagram com fluxos em n8n integrados à operação.",
      "Containerizei o monolito com Docker, padronizando o ambiente de desenvolvimento e facilitando a entrada de novos devs.",
      "Atuei com Redis, RabbitMQ, Metabase, Apache, Nginx e ambientes AWS e Google Cloud no dia a dia da plataforma.",
    ],
  },
  {
    role: "Consultor de Tecnologia",
    company: "Projetos independentes",
    period: "Em andamento",
    description:
      "Consultoria técnica para empresas que precisam estruturar ou evoluir sua área de tecnologia — do zero à operação escalável.",
    achievements: [
      "Empresa de planejamento financeiro: criação da área de tecnologia do zero, com backoffice em Filament, automações via n8n, integração com Omie ERP, assinatura digital com Autentique e métricas com Metabase.",
      "Distribuidora de ferramentas: automação de emissão em volume de notas fiscais de remessa e venda via Bling ERP, eliminando processos manuais e garantindo conformidade fiscal em escala.",
    ],
  },
  {
    role: "Desenvolvedor Web",
    company: "Secretaria de Educação de Barueri",
    period: "Mar 2020 · Set 2021",
    description:
      "Desenvolvimento e manutenção de plataforma de ensino municipal com PHP, CodeIgniter e JavaScript.",
  },
];

const education = [
  { icon: "🎓", text: "Pós-graduação em Engenharia de Software — PUC Minas (2024)" },
  { icon: "🎓", text: "Graduação em Gestão de TI — Universidade Nove de Julho (2022)" },
  { icon: "🎓", text: "Técnico em Informática — Instituto Técnico de Barueri (2018)" },
];

const courses: Course[] = [
  { name: "Branas.io — Clean Code & Clean Architecture", year: "2026" },
  { name: "FullCycle — Docker na Prática e REST na Prática", year: "2025" },
  { name: "Origamid — TypeScript", year: "2026" },
  { name: "Google Cloud Summit", year: "2025" },
  { name: "OpenEnglish — Inglês Técnico", year: "2023" },
  { name: "Alura — PHP, Arquitetura, Infraestrutura e Docker", year: "2019–2024" },
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
            <div className="status-badge">Senior Software Engineer · Tivit</div>
            <h1>
              Thomas <span className="accent">Moraes</span>
            </h1>
            <p className="lead">
              Engenheiro de Software com 7+ anos de experiência e trajetória de Junior a Tech Lead.
              Especialista em backend PHP e Node.js, integrações com ERP, automações com IA e
              arquitetura para produtos digitais que precisam escalar. Consultor independente para
              projetos de backoffice, ERP e automação.
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
                  <span className="output">&nbsp;&nbsp;Role: Senior Software Engineer @ Tivit</span>
                </div>
                <div className="terminal-line">
                  <span className="output">&nbsp;&nbsp;Stack: PHP · Node.js · TypeScript · IA</span>
                </div>
                <div className="terminal-line">
                  <span className="output">&nbsp;&nbsp;Consulting: Backoffice · ERP · Automações</span>
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
              {item.note && <span className="timeline-progression">{item.note}</span>}
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
        <p className="courses-header">Cursos selecionados</p>
        <div className="courses-grid">
          {courses.map((course) => (
            <div className="course-item" key={course.name}>
              <span className="course-year">{course.year}</span>
              <span>{course.name}</span>
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
