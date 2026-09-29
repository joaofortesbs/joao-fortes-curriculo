import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Boxes,
  Check,
  ChevronRight,
  Cpu,
  Download,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Phone,
  Plus,
  Workflow,
  X,
} from "lucide-react";

const capabilities = [
  { number: "01", icon: Cpu, title: "IA aplicada", description: "Agentes, RAG, OpenAI e desenvolvimento assistido por IA para transformar tarefas complexas em fluxos operáveis.", tags: ["Agentes", "RAG", "OpenAI"] },
  { number: "02", icon: Workflow, title: "Automação", description: "Processos end-to-end, integrações e workflows que conectam dados, pessoas e decisões com menos fricção.", tags: ["n8n", "APIs", "Dados"] },
  { number: "03", icon: Boxes, title: "Produto & SaaS", description: "Da descoberta ao lançamento: PRD, priorização, validação e evolução de produtos digitais orientados a uso real.", tags: ["Discovery", "PRD", "MVP"] },
  { number: "04", icon: Network, title: "Negócio & comunicação", description: "Visão de negócio, oratória e capacidade de traduzir decisões técnicas em clareza para equipes e stakeholders.", tags: ["Dados", "Copy", "Oratória"] },
];

const projects = [
  { id: "01", type: "Produto principal", title: "Ponto School", subtitle: "EdTech de IA para a rotina docente", description: "Produto criado para automatizar a criação, organização e comunicação de recursos educacionais. Uma experiência real de descoberta, construção e implementação em escolas.", result: "15+ escolas · 500+ professores", tone: "card-dark", cover: "/assets/ponto-school-cover.png", mark: "logo", socials: true },
  { id: "02", type: "Experiência B2B", title: "Sites & Apps", subtitle: "Soluções digitais para negócios", description: "Criação de sites e aplicativos para imobiliárias, construtoras, clínicas, escolas e empresas que precisavam transformar presença digital em operação.", result: "Discovery · Produto · Entrega", tone: "card-sand", cover: "/assets/sites-apps-solid.svg", mark: "↗" },
  { id: "03", type: "Go-to-market", title: "Produtos digitais", subtitle: "Oferta, aquisição e monetização", description: "Infoprodutos e cursos na área de marketing digital, conectando copy, tráfego e vendas consultivas a uma operação comercial própria.", result: "R$ 300 mil+ em vendas", tone: "card-muted", cover: "/assets/digital-products-solid.svg", mark: "R$" },
];

const faqs = [
  ["Que tipo de problema João resolve?", "Gargalos em que negócio, operação e tecnologia estão desconectados: processos manuais, produtos ainda mal definidos, automações que não chegam ao uso real e experiências digitais que precisam gerar movimento."],
  ["Ele atua mais como profissional de produto, tecnologia ou negócio?", "A força está justamente na interseção. João estrutura o problema e a hipótese como produto, usa IA, código, APIs e automações para construir e mantém a decisão conectada ao contexto comercial e operacional."],
  ["A experiência com IA é prática ou apenas estratégica?", "É prática. A trajetória inclui agentes, RAG, OpenAI, workflows, integrações e desenvolvimento assistido por IA. A tecnologia é usada para colocar soluções em movimento, não como um fim isolado."],
  ["Ele consegue executar depois da estratégia?", "Sim. O método parte de uma pergunta clara, passa por PRD e critérios de sucesso e chega à construção, implementação, feedback e melhoria. A proposta é reduzir a distância entre decidir e entregar."],
  ["Que evidências comprovam essa experiência?", "A Ponto School alcançou 15+ escolas e 500+ professores; também há construção de sites e aplicativos para diferentes negócios e mais de R$ 300 mil em vendas de produtos digitais, conforme os dados públicos apresentados no portfólio."],
  ["Em que ambiente João tende a gerar mais valor?", "Em equipes e empresas que precisam transformar um problema difuso em uma solução utilizável — especialmente quando é necessário conectar descoberta, produto, automação, IA e operação sem criar silos."],
  ["Como ele trabalha com uma equipe existente?", "Com clareza de papéis e comunicação direta. João traduz decisões técnicas, estrutura requisitos, explicita hipóteses e trabalha com as pessoas que conhecem o usuário e a operação para acelerar sem perder contexto."],
  ["Quais formatos de colaboração estão em aberto?", "O portfólio indica disponibilidade para formatos remoto, PJ e oportunidades globais. O escopo ideal pode ser conversado conforme o desafio, a responsabilidade esperada e o nível de proximidade com o produto."],
];

const certificates = [
  { title: "IA na prática: Como dados bem estruturados fazem a diferença", issuer: "Fundação Bradesco · Escola Virtual", preview: "/assets/certificado-1.png", pdf: "/assets/certificado-1.pdf", filename: "joao-fortes-ia-na-pratica.pdf" },
  { title: "Ética na era da IA", issuer: "Fundação Bradesco · Escola Virtual", preview: "/assets/certificado-2.png", pdf: "/assets/certificado-2.pdf", filename: "joao-fortes-etica-na-era-da-ia.pdf" },
  { title: "Inteligência Artificial para pequenas e médias empresas", issuer: "Fundação Bradesco · Escola Virtual", preview: "/assets/certificado-3.png", pdf: "/assets/certificado-3.pdf", filename: "joao-fortes-ia-para-pmes.pdf" },
  { title: "Fluência em Inteligência Artificial", issuer: "Fundação Bradesco · Escola Virtual", preview: "/assets/certificado-4.png", pdf: "/assets/certificado-4.pdf", filename: "joao-fortes-fluencia-em-ia.pdf" },
];

const processSteps = [
  ["01", "Encontrar o gap", "Escuto usuários, observo a operação e traduzo ruído em um problema concreto."],
  ["02", "Desenhar o sistema", "Estruturo hipótese, PRD, workflow e critérios de sucesso antes de acelerar."],
  ["03", "Construir com IA", "Uso código, APIs, dados e ferramentas assistidas para colocar a solução em movimento."],
  ["04", "Medir e melhorar", "Acompanho adoção, feedback e fricções para transformar o primeiro lançamento em produto."],
];

const profileImage = "/assets/profile-avatar.png";
const pontoSchoolLogo = "/assets/ponto-school-logo.png";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [certificatesOpen, setCertificatesOpen] = useState(false);

  useEffect(() => {
    if (!certificatesOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCertificatesOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [certificatesOpen]);

  return (
    <div className="site-canvas" id="top">
      <div className="site-frame">
        <main>
          <section className="profile-panel" aria-label="Perfil de João Fortes">
            <div className="profile-identity">
              <div className="profile-avatar">
                <img src={profileImage} alt="João Fortes" onError={(event) => { event.currentTarget.style.display = "none"; }} />
                <span aria-hidden="true">JF</span>
              </div>
              <div>
                <p className="eyebrow">Perfil profissional</p>
                <h2>João Fortes</h2>
                <p className="profile-role">IA aplicada · automação · produto</p>
              </div>
            </div>
            <div className="profile-details">
              <span className="profile-location"><MapPin size={14} /> Goiânia, GO · Brasil</span>
              <span className="profile-social-links" aria-label="Redes e contatos">
                <a href="https://www.instagram.com/joaofortesbs/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={15} /></a>
                <a href="https://www.linkedin.com/in/jo%C3%A3o-fortes-ba937537b/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={15} /></a>
                <a href="mailto:joaomarcelofortesempresa@gmail.com" aria-label="E-mail"><Mail size={15} /></a>
                <a href="tel:+5562981982234" aria-label="Telefone"><Phone size={15} /></a>
                <button type="button" className="icon-button" aria-label="Abrir certificados profissionais" onClick={() => setCertificatesOpen(true)}><Award size={15} /></button>
              </span>
              <span className="availability"><i /> Disponível para oportunidades</span>
            </div>
          </section>

          <section className="hero-card frame-card card-dark" aria-labelledby="hero-title">
            <div className="hero-card-copy">
              <p className="eyebrow eyebrow-accent">Founder & product builder</p>
              <h1 id="hero-title" className="display-title">Transformo problemas complexos em <em>sistemas que funcionam.</em></h1>
              <p className="hero-copy">Sou João Fortes, profissional híbrido de IA aplicada, automação e produto. Construo soluções digitais que conectam tecnologia, operação e resultado.</p>
              <div className="hero-actions">
                <a href="#projetos" className="button-primary">Ver projetos <ArrowRight size={17} /></a>
                <a href="https://wa.me/5562981982234?text=Ol%C3%A1%2C%20Jo%C3%A3o!%20Vi%20seu%20curr%C3%ADculo%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade%20profissional." target="_blank" rel="noreferrer" className="button-ghost">Conversar sobre contratação <ArrowUpRight size={16} /></a>
              </div>
            </div>
            <div className="hero-index" aria-hidden="true"><span>01</span><span>Uma visão de ponta a ponta</span></div>
          </section>

          <section className="proof-grid frame-card" aria-label="Provas profissionais">
            <div className="proof-intro"><span className="section-kicker">A evidência</span><p>Construção real, não apenas discurso sobre tecnologia.</p></div>
            <div className="proof-item"><strong>15<span>+</span></strong><span>escolas alcançadas<br />pela Ponto School</span></div>
            <div className="proof-item"><strong>500<span>+</span></strong><span>professores<br />cadastrados</span></div>
            <div className="proof-item"><strong>R$300k<span>+</span></strong><span>em vendas<br />de produtos digitais</span></div>
            <button type="button" className="proof-item proof-item-action" onClick={() => setCertificatesOpen(true)} aria-label="Abrir certificados profissionais"><strong><Award size={33} strokeWidth={1.3} /></strong><span>certificados<br />profissionais</span><ArrowUpRight size={16} /></button>
          </section>

          <section id="capacidades" className="frame-section">
            <div className="section-heading"><div><span className="section-kicker">01 / Capacidades</span><h2 className="section-title">A ponte entre<br /><em>ideia e execução.</em></h2></div><p className="section-lead">Meu trabalho acontece na interseção entre negócio, produto e tecnologia — onde um gap vira uma solução utilizada.</p></div>
            <div className="card-grid card-grid-capabilities">{capabilities.map((item) => { const Icon = item.icon; return <article key={item.number} className="frame-card capability-card"><div className="card-topline"><span className="card-number">{item.number}</span><Icon size={21} strokeWidth={1.5} /></div><h3>{item.title}</h3><p>{item.description}</p><div className="tag-row">{item.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div></article>; })}</div>
          </section>

          <section id="projetos" className="frame-section section-inset-dark">
            <div className="section-heading"><div><span className="section-kicker section-kicker-dark">02 / Projetos selecionados</span><h2 className="section-title text-paper">Soluções com<br /><em>contexto e impacto.</em></h2></div><p className="section-lead text-paper-muted">Três recortes de uma trajetória construída entre produto, operação, tecnologia e crescimento.</p></div>
            <div className="card-grid card-grid-projects">{projects.map((project) => <article key={project.id} className={`frame-card project-card ${project.tone}`}><div className="project-cover"><img src={project.cover} alt="" /><div className="project-mark" aria-hidden="true">{project.mark === "logo" ? <img src={pontoSchoolLogo} alt="" /> : <span>{project.mark}</span>}</div></div><div className="project-body"><div className="project-content"><div className="project-heading-row"><div><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p></div>{project.socials && <div className="project-social-links" aria-label="Redes sociais da Ponto School"><a href="https://www.linkedin.com/in/ponto-school-64131b3a3" target="_blank" rel="noreferrer" aria-label="LinkedIn da Ponto School"><Linkedin size={16} /></a><a href="https://www.instagram.com/pontoschool/" target="_blank" rel="noreferrer" aria-label="Instagram da Ponto School"><Instagram size={16} /></a></div>}</div><p className="project-description">{project.description}</p><div className="project-result"><Check size={15} /> <span>{project.result}</span></div></div><div className="project-footer"><span>Ver case em breve</span><ArrowUpRight size={18} /></div></div></article>)}</div>
          </section>

          <section id="metodo" className="frame-section">
            <div className="method-grid"><div><span className="section-kicker">03 / Método de trabalho</span><h2 className="section-title mt-5">Pensar bem.<br /><em>Construir melhor.</em></h2><p className="section-lead mt-7">A velocidade vem depois da clareza. Cada solução começa com uma pergunta melhor formulada.</p><a href="#contato" className="text-link">Vamos conversar <ArrowRight size={16} /></a></div><div className="process-list">{processSteps.map(([number, title, description]) => <div key={number} className="process-step frame-card"><span className="process-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><ChevronRight className="process-arrow" size={20} /></div>)}</div></div>
          </section>

          <section id="sobre" className="frame-section section-inset-slate">
            <div className="about-grid"><div><span className="section-kicker section-kicker-dark">04 / Sobre</span><h2 className="section-title text-paper">Founder por<br /><em>necessidade.</em></h2><div className="about-note"><span className="status-dot" /> Agora aberto a novas oportunidades</div></div><div className="about-copy"><p className="about-lead">Minha atuação está na interseção entre negócio, produto e tecnologia.</p><p>Identifico gargalos, estruturo soluções, transformo necessidades em requisitos e coordeno a construção de produtos e automações com Inteligência Artificial.</p><p>Como fundador da Ponto School, aprendi a olhar para o ciclo completo: usuário, operação, produto, marketing, vendas, monetização e evolução. É essa visão de ponta a ponta que levo para cada novo desafio.</p><div className="about-meta"><div><span>Base</span><strong>Goiânia, GO</strong></div><div><span>Idiomas</span><strong>Português · Inglês intermediário</strong></div><div><span>Formato</span><strong>Remoto · PJ · Global</strong></div></div></div></div>
          </section>

          <section id="perguntas" className="frame-section faq-section" aria-labelledby="faq-title">
            <div className="section-heading"><div><span className="section-kicker">05 / Perguntas e respostas</span><h2 id="faq-title" className="section-title">Clareza antes<br /><em>da próxima conversa.</em></h2></div><p className="section-lead">As perguntas que normalmente aparecem antes de uma empresa decidir abrir espaço para uma conversa.</p></div>
            <div className="faq-list">{faqs.map(([question, answer], index) => { const isOpen = openFaq === index; return <div className={`faq-item frame-card ${isOpen ? "is-open" : ""}`} key={question}><button className="faq-trigger" type="button" aria-expanded={isOpen} aria-controls={`faq-answer-${index}`} onClick={() => setOpenFaq(isOpen ? -1 : index)}><span><small>{String(index + 1).padStart(2, "0")}</small>{question}</span><Plus size={19} aria-hidden="true" /></button><div id={`faq-answer-${index}`} className="faq-answer" hidden={!isOpen}><p>{answer}</p></div></div>; })}</div>
          </section>

          <section id="contato" className="frame-section section-inset-sand"><div className="contact-card frame-card card-dark"><div><span className="section-kicker eyebrow-accent">06 / Próximo passo</span><h2 className="contact-title">Tem um problema<br /><em>interessante?</em></h2><p className="contact-copy">Estou buscando uma empresa onde possa combinar IA aplicada, automação e visão de produto para construir algo que realmente mova a operação.</p></div><div className="contact-actions"><a href="mailto:joaomarcelofortesempresa@gmail.com?subject=Oportunidade profissional" className="button-primary button-light">Falar sobre uma oportunidade <ArrowUpRight size={17} /></a><a href="/assets/curriculo-joao-fortes.pdf" download="curriculo-joao-fortes.pdf" className="contact-link"><Download size={17} /> Baixar currículo em PDF</a><span className="contact-email">joaomarcelofortesempresa@gmail.com</span></div></div></section>
        </main>

        <footer className="footer"><div><span className="font-display text-xl font-bold">João Fortes</span><span className="footer-tagline">IA aplicada · automação · produto</span></div><div className="footer-links"><a href="https://www.linkedin.com/in/jo%C3%A3o-fortes-ba937537b/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="https://www.instagram.com/joaofortesbs/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a><a href="mailto:joaomarcelofortesempresa@gmail.com" aria-label="E-mail"><Mail size={17} /></a><a href="tel:+5562981982234" aria-label="Telefone"><Phone size={17} /></a><button type="button" className="icon-button footer-certificate-button" aria-label="Abrir certificados profissionais" onClick={() => setCertificatesOpen(true)}><Award size={17} /></button><span className="footer-year">© 2026</span></div></footer>
        {certificatesOpen && <div className="certificate-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setCertificatesOpen(false); }}><section className="certificate-modal" role="dialog" aria-modal="true" aria-labelledby="certificates-title"><div className="certificate-modal-header"><div><span className="section-kicker">Formação complementar</span><h2 id="certificates-title">Certificados profissionais</h2><p>IA, dados e negócios pela Fundação Bradesco · Escola Virtual.</p></div><button type="button" className="modal-close" aria-label="Fechar certificados" onClick={() => setCertificatesOpen(false)}><X size={20} /></button></div><div className="certificate-list">{certificates.map((certificate) => <a key={certificate.pdf} className="certificate-row" href={certificate.pdf} download={certificate.filename} aria-label={`Baixar certificado: ${certificate.title}`}><div className="certificate-copy"><h3>{certificate.title}</h3><p>{certificate.issuer}</p><span className="certificate-download"><Download size={14} /> Baixar PDF</span></div><div className="certificate-preview"><img src={certificate.preview} alt={`Preview do certificado ${certificate.title}`} /></div></a>)}</div><div className="certificate-modal-footer"><span><Award size={16} /> Quatro documentos disponíveis para download</span></div></section></div>}
      </div>
    </div>
  );
}
