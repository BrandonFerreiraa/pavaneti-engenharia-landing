# Pavaneti Engenharia — Landing Page

[![Live Demo](https://img.shields.io/badge/demo-online-e8752c?style=for-the-badge)](https://brandonferreiraa.github.io/pavaneti-engenharia-landing/)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Landing page profissional para a **Pavaneti Engenharia**, empresa de engenharia mecânica do Paraná especializada em laudos técnicos, A.R.T.'s e vistorias técnicas. O projeto reconstrói o conteúdo institucional do site original em uma página única, rápida, responsiva e otimizada para conversão via WhatsApp.

**[➜ Ver o site no ar](https://brandonferreiraa.github.io/pavaneti-engenharia-landing/)**

![Preview da landing page da Pavaneti Engenharia](assets/screenshot-hero.png)

---

## Sobre o projeto

O objetivo foi transformar um site institucional existente em uma landing page moderna de página única, mantendo fidelidade ao conteúdo real da empresa — textos, normas técnicas, serviços e identidade visual — mas com um design novo, hierarquia visual clara e foco em geração de contato.

O conteúdo (textos institucionais, descrições de cada um dos 16 serviços, logotipo e fotos) foi levantado diretamente das páginas internas do site original e do perfil da empresa no Instagram, garantindo que cada informação exibida — normas regulamentadoras (NR11, NR12, NR13, NR18, NR35), leis e obrigações — reflita o que a empresa realmente comunica aos clientes.

## Destaques

- **Página única (SPA estática)** — hero, sobre, serviços, diferenciais e contato em uma única página, com navegação por âncoras e scroll suave.
- **16 serviços detalhados** — cada card traz foto, título e descrição técnica reais (normas ABNT, NRs, leis e prazos de validade dos laudos), extraídos das páginas internas do site original.
- **Conversão via WhatsApp** — todo CTA (incluindo cada card de serviço) abre o WhatsApp com uma mensagem pré-preenchida específica para aquele serviço.
- **100% autocontido** — logotipo e todas as imagens estão embutidos como Base64 diretamente no HTML; o site funciona a partir de um único arquivo, sem requisições externas.
- **Responsivo** — layout adaptado para desktop, tablet e mobile, com menu hambúrguer e grade de serviços fluida.
- **Mapa e contato incorporados** — endereço, WhatsApp, e-mail e Instagram com mapa do Google Maps embutido na seção de contato.

## Tecnologias

Nenhuma dependência ou build step — HTML, CSS e JavaScript puros:

- **HTML5** semântico
- **CSS3** (custom properties, Grid, Flexbox, media queries)
- **JavaScript vanilla** (renderização dos cards de serviço, menu mobile, ano dinâmico no rodapé)

## Estrutura do projeto

```
pavaneti-engenharia-landing/
├── index.html              # Página completa (HTML + CSS + JS + imagens em Base64)
└── assets/
    ├── logo.png             # Logo original em alta resolução
    ├── icon.png             # Símbolo (engrenagem) recortado, fundo transparente
    ├── logo-full.png        # Lockup completo (símbolo + texto), fundo transparente
    └── services/            # Fotos de cada um dos 16 serviços
```

> Os arquivos em `assets/` são mantidos no repositório como fonte para edição futura — o `index.html` publicado já contém todas as imagens embutidas e não depende dessa pasta em produção.

## Rodando localmente

Por ser um projeto 100% estático, basta abrir o arquivo no navegador:

```bash
git clone https://github.com/BrandonFerreiraa/pavaneti-engenharia-landing.git
cd pavaneti-engenharia-landing
start index.html   # Windows
# ou: open index.html (macOS) / xdg-open index.html (Linux)
```

Nenhuma instalação, servidor ou build é necessário.

## Deploy

Publicado via **GitHub Pages**, servindo o `index.html` diretamente da branch `master`:

🔗 **https://brandonferreiraa.github.io/pavaneti-engenharia-landing/**

Qualquer alteração no `index.html`, seguida de `git push`, é refletida automaticamente no site publicado.

## Contato da empresa

- 📍 São Pedro do Ivaí — PR
- 💬 WhatsApp: (43) 9 9873-4741
- ✉️ pavaneti.engenharia@gmail.com
- 📷 [@pavanetiengenharia](https://instagram.com/pavanetiengenharia)

---

<p align="center">Desenvolvido por <a href="https://github.com/BrandonFerreiraa">Brandon Ferreira</a></p>
