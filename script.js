document.getElementById('year').textContent = new Date().getFullYear();

  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  const services = [
    {
      name: "Laudo Técnico e A.R.T. de Vaso de Pressão NR13",
      img: "assets/services/vaso-de-pressao.jpg",
      desc: "Inspeção obrigatória de vasos de pressão e compressores conforme a NR13, exigida pelo Ministério do Trabalho (Lei 6.514/1977)."
    },
    {
      name: "PPCI e Dimensionamento de Hidrantes",
      img: "assets/services/ppci.jpg",
      desc: "Projeto e dimensionamento do sistema de prevenção e combate a incêndio (PPCI) e da rede de hidrantes."
    },
    {
      name: "Laudo Técnico e A.R.T. de Linha de Vida NR35",
      img: "assets/services/linha-de-vida.jpg",
      desc: "Laudo e A.R.T. de sistemas de ancoragem para trabalho em altura, conforme a NR35."
    },
    {
      name: "Laudo Técnico e A.R.T. de Andaimes NR18",
      img: "assets/services/andaimes.jpg",
      desc: "Laudo e A.R.T. de andaimes e estruturas provisórias, atendendo aos requisitos de segurança da NR18."
    },
    {
      name: "Reclassificação de Monta",
      img: "assets/services/reclassificacao-monta.jpg",
      desc: "Laudo de recuperabilidade para reverter classificações incorretas de pequena, média ou grande monta em veículos sinistrados."
    },
    {
      name: "Engenheiro Mecânico Responsável Técnico por Empresas",
      img: "assets/services/responsavel-tecnico.jpg",
      desc: "Responsabilidade técnica para empresas, com emissão de A.R.T. de cargo e função conforme exigência do CREA-PR."
    },
    {
      name: "Laudo Cautelar para Veículos",
      img: "assets/services/laudo-cautelar.jpg",
      desc: "Vistoria e laudo cautelar veicular para identificar histórico de sinistro ou irregularidades."
    },
    {
      name: "Laudo Técnico e A.R.T. de Inspeção para Mangueiras de Incêndio",
      img: "assets/services/mangueira-incendio.jpg",
      desc: "Inspeção e teste hidrostático anual em mangueiras de incêndio conforme a NBR 12779, com lacre e laudo válido por 1 ano."
    },
    {
      name: "Laudo Técnico e A.R.T. de Brinquedos e Playgrounds",
      img: "assets/services/playgrounds.jpg",
      desc: "Laudo e A.R.T. semestral de brinquedos e playgrounds (infláveis, camas elásticas, carrosséis, etc.), conforme NBR 15926 e NBR 16071."
    },
    {
      name: "Laudo Técnico e A.R.T. de Sistema de Exaustão para Cozinhas",
      img: "assets/services/cozinha.jpg",
      desc: "Laudo de sistemas de exaustão para cozinhas industriais, garantindo segurança contra incêndio e controle ambiental conforme a NBR 14518."
    },
    {
      name: "Laudo Técnico e A.R.T. de Ar Condicionado e Elaboração de PMOC",
      img: "assets/services/ar-condicionado.jpg",
      desc: "Elaboração do PMOC exigido pela Lei 13.589/2018 para ambientes climatizados, conforme NBR 16401 e normas correlatas."
    },
    {
      name: "Laudo Técnico e A.R.T. de Máquinas Pesadas",
      img: "assets/services/maquinas-pesadas.jpg",
      desc: "Laudo e A.R.T. de máquinas pesadas — escavadeiras, retroescavadeiras, tratores de esteira, rolos compactadores e carregadeiras."
    },
    {
      name: "Laudo Técnico e A.R.T. de Máquinas NR12",
      img: "assets/services/nr12.jpg",
      desc: "Laudo e A.R.T. de máquinas e equipamentos conforme a NR12, para prevenção de acidentes de trabalho."
    },
    {
      name: "Laudo Técnico e A.R.T. de NR11 e Sistemas Transportadores",
      img: "assets/services/nr11.jpg",
      desc: "Laudo e A.R.T. anual de sistemas de transporte, movimentação e armazenagem de cargas, conforme a NR11."
    },
    {
      name: "Perito e Assistente Técnico em Processos Judiciais",
      img: "assets/services/judicial.jpg",
      desc: "Atuação como perito ou assistente técnico em processos judiciais, emitindo parecer técnico em questões de engenharia mecânica."
    },
    {
      name: "Responsável Técnico para Desmanches",
      img: "assets/services/demanche.jpg",
      desc: "Responsabilidade técnica para desmanches credenciados pelo DETRAN, com análise de peças servíveis e inservíveis."
    }
  ];

  const arrow = `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;

  const grid = document.getElementById('servicesGrid');
  grid.innerHTML = services.map(({name, desc, img}, i) => `
    <div class="service-card reveal" style="--i:${i % 3}">
      <div class="service-media"><img src="${img}" alt="${name}"></div>
      <div class="service-body">
        <h3>${name}</h3>
        <p>${desc}</p>
        <a href="https://wa.me/554398734741?text=${encodeURIComponent('Olá! Gostaria de mais informações sobre: ' + name)}" target="_blank" rel="noopener">
          Saiba mais ${arrow}
        </a>
      </div>
    </div>
  `).join('');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    if (reduceMotion) { el.textContent = target + suffix; return; }
    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const heroStats = document.getElementById('heroStats');
  if (heroStats) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('[data-count]').forEach(animateCount);
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    statsObserver.observe(heroStats);
  }

  const tiltCard = document.querySelector('.hero-badge');
  if (tiltCard && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    tiltCard.addEventListener('mousemove', (e) => {
      const rect = tiltCard.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      tiltCard.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${y * -6}deg)`;
    });
    tiltCard.addEventListener('mouseleave', () => {
      tiltCard.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)';
    });
  }
