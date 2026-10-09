import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const topics = [
  {icon: '⚠', title: 'Fraudes e golpes', description: 'Identifique pressão, phishing e pedidos suspeitos durante uma negociação.', to: '/guias/fraudes/pressao-e-phishing'},
  {icon: '↗', title: 'Pagamentos', description: 'Confira o beneficiário e entenda os riscos de pagamentos a terceiros.', to: '/guias/pagamentos/terceiros'},
  {icon: '◈', title: 'Escrow e negociações', description: 'Entenda o que a proteção de criptoativos cobre e o que não cobre.', to: '/guias/negociacoes/limites-do-escrow'},
  {icon: '▤', title: 'Disputas e evidências', description: 'Saiba quais registros preservar e como reduzir a exposição de dados.', to: '/guias/disputas/preservar-evidencias'},
  {icon: '◎', title: 'Identidade e privacidade', description: 'O que fazer quando há suspeita de comprometimento de uma conta.', to: '/guias/identidade/conta-comprometida'},
  {icon: '✓', title: 'Comece por aqui', description: 'Conheça os limites do portal e os cuidados básicos antes de negociar.', to: '/guias/'},
];

export default function Home() {
  return (
    <Layout title="Início" description="Guias públicos de segurança para negociações P2P">
      <main>
        <header className="safetyHero">
          <div className="container">
            <div className="safetyEyebrow">Sails P2P Safety Center</div>
            <h1>Negocie com mais informação. Reconheça riscos antes de agir.</h1>
            <p className="safetyLead">Guias práticos sobre fraudes, pagamentos, escrow e disputas em negociações peer-to-peer. Feito para usuários, operadores e integrações do ecossistema P2P.</p>
            <div className="safetyActions">
              <Link className="button button--primary button--lg" to="/guias/">Explorar os guias</Link>
              <Link className="button button--outline button--secondary button--lg" to="/guias/pagamentos/terceiros">Pagamento a terceiros</Link>
            </div>
          </div>
        </header>
        <section className="safetySection">
          <div className="container">
            <h2>Encontre orientação por situação</h2>
            <p>Escolha um assunto para entender sinais de alerta e próximos passos.</p>
            <div className="safetyGrid">
              {topics.map(topic => <Link className="safetyCard" to={topic.to} key={topic.title}>
                <span className="safetyCardIcon" aria-hidden="true">{topic.icon}</span>
                <h3>{topic.title} →</h3>
                <p>{topic.description}</p>
              </Link>)}
            </div>
            <div className="safetyNotice"><strong>Importante:</strong> este portal oferece orientação educativa. Ele não verifica contas bancárias, não substitui canais oficiais de disputa e não promete recuperar fundos.</div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
