import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const translations = {
  en: {
    title: 'Safety starts before the trade.',
    lead: 'Learn to recognize scams, verify payments, and preserve evidence. Practical guidance for safer peer-to-peer decisions.',
    explore: 'Explore guides', payment: 'Third-party payments',
    checks: ['Verify the recipient', 'Watch for pressure', 'Preserve evidence'],
    heading: 'Find the guide for your situation',
    subheading: 'Understand warning signs, risks, and next steps before you act.',
    notice: 'Important:', noticeBody: 'This portal provides educational guidance. It does not verify bank accounts, replace official dispute channels, or promise fund recovery.',
    topics: [
      ['⚠', 'Scams and phishing', 'Spot pressure tactics, fake links, and suspicious requests.', '/guides/fraudes/pressao-e-phishing'],
      ['↗', 'Payments', 'Check recipients and understand third-party payment risks.', '/guides/pagamentos/terceiros'],
      ['◈', 'Escrow and trades', 'Learn what crypto escrow can and cannot protect.', '/guides/negociacoes/limites-do-escrow'],
      ['▤', 'Disputes and evidence', 'Know which records to keep and how to protect sensitive data.', '/guides/disputas/preservar-evidencias'],
      ['◎', 'Identity and privacy', 'Respond to suspected account compromise.', '/guides/identidade/conta-comprometida'],
      ['✓', 'Start here', 'Understand the portal’s limits and basic safety precautions.', '/guides/']
    ]
  },
  'pt-BR': {
    title: 'Segurança começa antes da negociação.',
    lead: 'Aprenda a reconhecer fraudes, conferir pagamentos e preservar evidências. Orientação clara para decisões mais informadas em negociações P2P.',
    explore: 'Explorar os guias', payment: 'Pagamento a terceiros',
    checks: ['Confira o beneficiário', 'Desconfie de urgência', 'Preserve evidências'],
    heading: 'Escolha o guia para sua situação',
    subheading: 'Entenda sinais de alerta, riscos e próximos passos antes de agir.',
    notice: 'Importante:', noticeBody: 'Este portal oferece orientação educativa. Não verifica contas bancárias, não substitui canais oficiais de disputa e não promete recuperar fundos.',
    topics: [
      ['⚠', 'Fraudes e golpes', 'Identifique pressão, phishing e pedidos suspeitos.', '/guides/fraudes/pressao-e-phishing'],
      ['↗', 'Pagamentos', 'Confira o beneficiário e entenda riscos de pagamentos a terceiros.', '/guides/pagamentos/terceiros'],
      ['◈', 'Escrow e negociações', 'Entenda o que a proteção de criptoativos cobre e não cobre.', '/guides/negociacoes/limites-do-escrow'],
      ['▤', 'Disputas e evidências', 'Saiba quais registros preservar e como reduzir a exposição de dados.', '/guides/disputas/preservar-evidencias'],
      ['◎', 'Identidade e privacidade', 'O que fazer diante de uma conta possivelmente comprometida.', '/guides/identidade/conta-comprometida'],
      ['✓', 'Comece por aqui', 'Conheça os limites do portal e os cuidados básicos.', '/guides/']
    ]
  },
  es: {
    title: 'La seguridad comienza antes de operar.',
    lead: 'Aprende a reconocer fraudes, verificar pagos y conservar pruebas. Orientación práctica para tomar decisiones más informadas en operaciones P2P.',
    explore: 'Explorar las guías', payment: 'Pagos de terceros',
    checks: ['Verifica al beneficiario', 'Desconfía de la urgencia', 'Conserva pruebas'],
    heading: 'Encuentra la guía para tu situación',
    subheading: 'Conoce las señales de alerta, los riesgos y los próximos pasos antes de actuar.',
    notice: 'Importante:', noticeBody: 'Este portal ofrece información educativa. No verifica cuentas bancarias, no sustituye los canales oficiales de disputas ni promete recuperar fondos.',
    topics: [
      ['⚠', 'Fraudes y phishing', 'Identifica presiones, enlaces falsos y solicitudes sospechosas.', '/guides/fraudes/pressao-e-phishing'],
      ['↗', 'Pagos', 'Comprueba los destinatarios y los riesgos de pagos de terceros.', '/guides/pagamentos/terceiros'],
      ['◈', 'Escrow y operaciones', 'Entiende qué puede y qué no puede proteger el escrow.', '/guides/negociacoes/limites-do-escrow'],
      ['▤', 'Disputas y pruebas', 'Aprende qué registros conservar y cómo proteger tus datos.', '/guides/disputas/preservar-evidencias'],
      ['◎', 'Identidad y privacidad', 'Qué hacer ante una posible cuenta comprometida.', '/guides/identidade/conta-comprometida'],
      ['✓', 'Empieza aquí', 'Conoce los límites del portal y las precauciones básicas.', '/guides/']
    ]
  }
};

export default function Home() {
  const {i18n} = useDocusaurusContext();
  const t = translations[i18n.currentLocale] || translations.en;
  return (
    <Layout title={t.title} description={t.lead}>
      <main>
        <header className="safetyHero">
          <div className="container">
            <div className="safetyEyebrow">Sails P2P Safety Center</div>
            <h1>{t.title}</h1>
            <p className="safetyLead">{t.lead}</p>
            <div className="safetyActions">
              <Link className="button button--primary button--lg" to="/guides/">{t.explore} →</Link>
              <Link className="button button--outline button--secondary button--lg" to="/guides/pagamentos/terceiros">{t.payment}</Link>
            </div>
            <div className="safetyHeroChecklist" aria-label={t.heading}>{t.checks.map(check => <span key={check}><strong>✓</strong> {check}</span>)}</div>
          </div>
        </header>
        <section className="safetySection" aria-labelledby="safety-topics-title">
          <div className="container">
            <h2 id="safety-topics-title">{t.heading}</h2>
            <p>{t.subheading}</p>
            <div className="safetyGrid">
              {t.topics.map(([icon, title, description, to]) => <Link className="safetyCard" to={to} key={title}>
                <span className="safetyCardIcon" aria-hidden="true">{icon}</span>
                <h3>{title} →</h3>
                <p>{description}</p>
              </Link>)}
            </div>
            <aside className="safetyNotice" role="note"><strong>{t.notice}</strong> {t.noticeBody}</aside>
          </div>
        </section>
      </main>
    </Layout>
  );
}
