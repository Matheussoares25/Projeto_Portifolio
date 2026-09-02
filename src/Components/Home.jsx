import { useState } from "react";
const projetos = [
    {
        id: "PTE",
        title: "Plataforma de Treinamento e Evolução - versão Etec",
        imag: "Marca-1",
        tecnologias: "JavaScript / HTML / CSS / GIT / Web",
        descricao: "Breve descrição do que o projeto faz.",
        video: "Video1.mp4",
        github: "https://github.com/Matheussoares25/PTE"
    },
    {
        id: "BuscadorMoeda",
        title: "Buscador de Moeda - (Developed for a private company)",
        imag: "eurodolar",
        tecnologias: "WindowsForms / .Net / c#",
        descricao: "Utiliza a Api do Banco central para consultar o valor do dolar dentro dos ultimos 5 dias (5 dias uteis) e entrega a média do valor de venda do periodo",
        video: "",

    },
    {
        id: "Xduplicidade",
        title: "XDuplicidade - Comparativo entre planilhas de excel - (Developed for a private company)",
        imag: "xduplicidade",
        tecnologias: "WindowsForms / .Net / c#",
        descricao: "Essa ferramenta foi desenvolvida dada a necessidade de comparar diferente planilhas entre si, para evitar erros dentro do departamento financeiro, a ferramenta foi desenvolvida utilizando WindowsForms, com pacotes que facilitam trabalhar com planilhas excel",
        video: "",

    },
    {
        id: "api_Pte",
        title: "Nova Versão PTE (Api ASPNET - SWAGGER - JWT)",
        imag: "apipte",
        tecnologias: "ASPNET / .Net / c#",
        descricao: "",
        video: "",

    },
    {
        id: "Hstransportes",
        title: "HsTransportes",
        imag: "Hstransporte",
        tecnologias: "PHP / WEB",
        descricao: "",
        video: "",

    },
    {
        id: "ConectServices",
        title: "ConectServices - Abertura de Chamados e Serviços",
        imag: "apipte",
        tecnologias: "Web / Node.js / JavaScript / Aspnet",
        descricao: "",
        video: "",
        github: ""
    }
    // {
    //     id:
    //     title:
    //     imag:
    //     tecnologias:
    //     descricao:
    //     video:
    //     github:
    // }
];
const skills = [
    { nome: 'React', icone: 'bi bi-braces' },
    { nome: 'JavaScript', icone: 'bi bi-filetype-js' },
    { nome: 'C#', icone: 'bi bi-file-code-fill' },
    { nome: 'Node.js', icone: 'bi bi-hexagon' },
    { nome: 'CSS', icone: 'bi bi-filetype-css' },
    { nome: 'HTML', icone: 'bi bi-filetype-html' },
    { nome: 'Git', icone: 'bi bi-git' },
];
const language = [
    { nome: 'React', icone: 'bi bi-braces' },
    { nome: 'JavaScript', icone: 'bi bi-filetype-js' },
    { nome: 'Web', icone: 'bi bi-file-code-fill' },
    { nome: 'Node.js', icone: 'bi bi-hexagon' },
    { nome: 'CSS', icone: 'bi bi-filetype-css' },
    { nome: 'HTML', icone: 'bi bi-filetype-html' },
    { nome: 'Git', icone: 'bi bi-git' },
    { nome: '.Net', icone: '' },
    { nome: 'WindowsForms', icone: '' },
    { nome: 'PHP', icone: '' },
    { nome: 'AspNet', icone: '' }
];

function Home() {
    const [skillSelecionada, setSkillSelecionada] = useState("");

    const projetosFiltrados = skillSelecionada ? projetos.filter((p) =>
        p.tecnologias.toLowerCase().includes(skillSelecionada.toLowerCase())
    )
        : projetos;

    const handleFiltro = (nomeSkill) => {
        // Se clicar na mesma skill de novo, remove o filtro (toggle)
        setSkillSelecionada((atual) => (atual === nomeSkill ? "" : nomeSkill));
    };

    const clearFilter = () => {
        setSkillSelecionada("");
    }
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#home">
                        Matheus'<span className="accent">Soares</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#sobre">Sobre</a></li>
                            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                            <li className="nav-item"><a className="nav-link" href="#projetos">Projetos</a></li>
                            <li className="nav-item"><a className="nav-link" href="#Carreira">Carreira</a></li>
                            <li className="nav-item"><a className="nav-link" href="#formacao">Formações</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contato">buContato</a></li>


                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section id="home" className="d-flex align-items-center" style={{ minHeight: '100vh', paddingTop: '70px' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 text-center mb-4 mb-md-0">
                            <img
                                src="/MinhaFoto.jpeg"
                                alt="Sua Foto"
                                className="rounded-circle img-fluid"
                                style={{ width: '260px', height: '260px', objectFit: 'cover', border: '3px solid var(--accent)' }}
                            />
                        </div>
                        <div className="col-md-7 text-center text-md-start ">
                            <span className="prompt">~/ |</span>
                            <h1 className="display-4 fw-bold mt-2 text-white" data-aos="fade-right">Matheus Sores </h1>
                            <p className="lead" data-aos="flip-up">Desenvolvedor(a) Full Stack | Buscando sempre mais conhecimento</p>
                            <a href="#projetos" className="btn btn-primary btn-lg mt-3 me-2">Meus Projetos</a>
                            <a href="#contato" className="btn btn-outline-primary btn-lg mt-3">Contato</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sobre */}
            <section id="sobre" className="py-5" >
                <div className="container"  >
                    <div className="eyebrow"><i className="bi bi-person-fill"></i> SOBRE MIM</div>
                    <h2 className="section-title">Quem sou eu</h2>

                    <div className="content-block col-lg-10 mx-auto mb-5" id="skills">
                        <p>
                            Minha trajetória em tecnologia começou na ETEC Juscelino Kubitschek de Oliveira, onde cursei o técnico em Desenvolvimento de Sistemas e consolidei os princípios de lógica de programação, orientação a objetos e bancos de dados. Foi lá que desenvolvi meus primeiros projetos práticos em C#, PHP e ecossistema web (HTML, CSS, JavaScript).  Decidido a expandir minha visão de engenharia e arquitetura de software, iniciei a graduação em Análise e Desenvolvimento de Sistemas na Universidade Metodista de São Paulo.  No mercado de trabalho, tive a oportunidade de evoluir no desenvolvimento web Full Stack durante minha passagem pela Nauta Software, trabalhando no código, banco de dados MySQL e otimização de relatórios. Em seguida, na Masterpumps, passei a desenvolver soluções desktop em C#, integrando microsserviços e APIs externas para automação de processos, além de atuar no suporte e infraestrutura de TI N1/N2. Essa vivência me trouxe uma visão de ponta a ponta sobre a criação, manutenção e sustentação de sistemas corporativos.</p>
                    </div >

                    <div className="row g-3 justify-content-center" >
                        {skills.map((skill, index) => (
                            <div
                                className="col-4 col-md-2"
                                key={skill.nome}
                                data-aos="flip-up"
                                // onClick={() => handleFiltro(skill.nome)}
                                data-aos-delay={index * 200}
                            >
                                <div className="skill-pill">
                                    <i className={`${skill.icone} icon`} ></i>
                                    {skill.nome}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projetos */}
            <section id="projetos" className="py-5">
                <div className="container">
                    <div className="eyebrow"><i className="bi bi-code-slash"></i> PORTFÓLIO</div>
                    <h2 className="section-title">Projetos Pessoais</h2>

                    <div className="d-flex justify-content-center gap-2 flex-wrap mb-5">

                        {language.map((lang) => (
                            <button
                                key={lang.nome}
                                type="button"
                                className={`filter-btn ${skillSelecionada === lang.nome ? "active" : ""}`}
                                onClick={() => handleFiltro(lang.nome)}
                            >
                                <p>{lang.nome}</p>
                            </button>
                        ))}
                        <button className="filter-btn" onClick={() => clearFilter()}>Todos</button>


                    </div>

                    <div className="row g-4">
                        {projetosFiltrados.map((projeto, index) => (
                            <div
                                className="col-md-4"
                                key={projeto.id}
                                data-aos="flip-up"
                                data-aos-delay={index * 230}
                            >
                                <div className="card h-100">
                                    <img src={`/${projeto.imag}.png`} className="card-img-top" alt={projeto.title} />
                                    <div className="card-body">
                                        <div className="tag">{projeto.tecnologias}</div>
                                        <h5 className="card-title mt-1">{projeto.title}</h5>
                                        <p className="card-text">{projeto.descricao}</p>
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary btn-sm"
                                            data-bs-toggle="modal"
                                            data-bs-target={`#modal-${projeto.id}`}
                                        >
                                            Ver mais
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {projetos.map((projeto) => (
                    <div className="modal fade" id={`modal-${projeto.id}`} tabIndex="-1" aria-hidden="true" key={`modal-${projeto.id}`}>
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{projeto.title}</h5>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body text-center">
                                    <video controls className="w-100 rounded mb-3">
                                        <source src={`/${projeto.video}`} type="video/mp4" />
                                        Seu navegador não suporta vídeo.
                                    </video>
                                    <p>{projeto.descricao}</p>
                                    <a href={projeto.github} target="_blank" rel="noreferrer" className="btn btn-outline-primary">
                                        <i className="bi bi-github me-1"></i> Ver no GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Organizações / Projetos em equipe */}
            <section id="organizacoes" className="py-5">
                <div className="container">
                    <div className="eyebrow"><i className="bi bi-people-fill"></i> ORGANIZAÇÕES</div>
                    <h2 className="section-title">Projetos em Equipe</h2>
                    <p className="section-subtitle">Projetos desenvolvidos em conjunto dentro de organizações do GitHub</p>

                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="org-card">
                                <h5 className="fw-bold">Nome do Projeto</h5>
                                <span className="tag">Projeto Integrador — Faculdade</span>
                                <p className="mt-3 text-muted">
                                    Breve descrição do que foi feito, tecnologias usadas e o objetivo do projeto em equipe.
                                </p>
                                <div className="d-flex gap-2 flex-wrap mt-3">
                                    <span className="repo-pill"><i className="bi bi-github"></i> Front-End</span>
                                    <span className="repo-pill"><i className="bi bi-github"></i> API</span>
                                </div>
                                <a href="#" className="btn btn-outline-primary btn-sm mt-3">Ver Organização</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="section-title" id="formacao">Vida Academica</h2>
            </section>

            <section>
                <h2 className="section-title" id="Carreira">Carreira</h2>
            </section>

            {/* Contato */}
            <section id="contato" className="py-5">
                <div className="container text-center">
                    <div className="eyebrow"><i className="bi bi-chat-dots-fill"></i> CONTATO</div>
                    <h2 className="section-title">Vamos conversar</h2>
                    <div className="mt-4">
                        <a href="mailto:seuemail@exemplo.com" className="btn btn-dark m-2">
                            <i className="bi bi-envelope-fill me-1"></i> E-mail
                        </a>
                        <a href="https://linkedin.com" className="btn btn-outline-primary m-2">
                            <i className="bi bi-linkedin me-1"></i> LinkedIn
                        </a>
                        <a href="https://github.com" className="btn btn-outline-primary m-2">
                            <i className="bi bi-github me-1"></i> GitHub
                        </a>
                    </div>
                </div>
            </section>


            {/* Rodapé */}
            <footer className="text-center py-4">
                <p className="mb-0">© {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default Home;