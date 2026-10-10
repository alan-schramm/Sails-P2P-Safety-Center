import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

const translations = {
  en: {
    title: 'Safety starts before the trade.',
    lead: 'Learn to recognize scams, verify payments, and preserve evidence. Practical guidance for safer peer-to-peer decisions.',
    explore: 'Explore guides', payment: 'Third-party payments',
    quickLabel: 'A practical safety knowledge base', urgent: 'If something looks wrong', urgentBody: 'Pause the trade. Check payment details through trusted channels and keep relevant evidence.', readGuide: 'Read the guide', aiTitle: 'Clear for people. Structured for AI.', aiBody: 'Guides use explicit scenarios, warning signs, actions, and limitations. AI readers can find canonical links and interpretation boundaries in our machine-readable index.', aiLink: 'AI reading index',
    checks: ['Verify the recipient', 'Watch for pressure', 'Preserve evidence'],
    pathsTitle: 'What happened?', pathsIntro: 'Choose a situation to reach the most relevant first step.', paths: [['I received a payment receipt', 'Verify payment independently before releasing assets.', '/guides/fraudes/comprovantes-falsos'], ['The payment recipient changed', 'Check the actual beneficiary and stop if instructions conflict.', '/guides/pagamentos/destinatario-divergente'], ['A dispute has started', 'Preserve original records and use the authorized process.', '/guides/operacoes/gestao-de-evidencias'], ['I trade P2P professionally', 'Follow a repeatable pre-trade and reconciliation workflow.', '/guides/operacoes/checklist-antes-de-negociar']],
    heading: 'Find the guide for your situation',
    subheading: 'Understand warning signs, risks, and next steps before you act.',
    notice: 'Important:', noticeBody: 'This portal provides educational guidance. It does not verify bank accounts, replace official dispute channels, or promise fund recovery.',
    topics: [
      ['⚠', 'Scams and phishing', 'Spot pressure tactics, fake links, and suspicious requests.', '/guides/fraudes/pressao-e-phishing'],
      ['↗', 'Payments', 'Check recipients and understand third-party payment risks.', '/guides/pagamentos/terceiros'],
      ['◈', 'Escrow and trades', 'Learn what crypto escrow can and cannot protect.', '/guides/negociacoes/limites-do-escrow'],
      ['▤', 'Disputes and evidence', 'Know which records to keep and how to protect sensitive data.', '/guides/disputas/preservar-evidencias'],
      ['◎', 'Identity and privacy', 'Respond to suspected account compromise.', '/guides/identidade/conta-comprometida'],
      ['▦', 'Professional operations', 'Checklists, reconciliation, and incident response for active traders.', '/guides/operacoes/checklist-antes-de-negociar'],
      ['✓', 'Start here', 'Understand the portal’s limits and basic safety precautions.', '/guides/']
    ]
  },
  'pt-BR': {
    title: 'Segurança começa antes da negociação.',
    lead: 'Aprenda a reconhecer fraudes, conferir pagamentos e preservar evidências. Orientação clara para decisões mais informadas em negociações P2P.',
    explore: 'Explorar os guias', payment: 'Pagamento a terceiros',
    quickLabel: 'Base prática de conhecimento em segurança', urgent: 'Se algo parecer errado', urgentBody: 'Interrompa a negociação. Confira os dados de pagamento em canais confiáveis e preserve as evidências.', readGuide: 'Ler o guia', aiTitle: 'Claro para pessoas. Estruturado para IA.', aiBody: 'Os guias apresentam cenários, alertas, ações e limites. Sistemas de IA encontram links oficiais e regras de interpretação em nosso índice.', aiLink: 'Índice para IA',
    checks: ['Confira o beneficiário', 'Desconfie de urgência', 'Preserve evidências'],
    pathsTitle: 'O que aconteceu?', pathsIntro: 'Escolha uma situação para encontrar o primeiro passo mais relevante.', paths: [['Recebi um comprovante', 'Confirme o pagamento no seu banco antes de liberar ativos.', '/guides/fraudes/comprovantes-falsos'], ['O beneficiário mudou', 'Confira o destinatário e pare se houver divergências.', '/guides/pagamentos/destinatario-divergente'], ['Começou uma disputa', 'Preserve os registros originais e siga o processo autorizado.', '/guides/operacoes/gestao-de-evidencias'], ['Opero P2P profissionalmente', 'Use checklists e conciliação em cada negociação.', '/guides/operacoes/checklist-antes-de-negociar']],
    heading: 'Escolha o guia para sua situação',
    subheading: 'Entenda sinais de alerta, riscos e próximos passos antes de agir.',
    notice: 'Importante:', noticeBody: 'Este portal oferece orientação educativa. Não verifica contas bancárias, não substitui canais oficiais de disputa e não promete recuperar fundos.',
    topics: [
      ['⚠', 'Fraudes e golpes', 'Identifique pressão, phishing e pedidos suspeitos.', '/guides/fraudes/pressao-e-phishing'],
      ['↗', 'Pagamentos', 'Confira o beneficiário e entenda riscos de pagamentos a terceiros.', '/guides/pagamentos/terceiros'],
      ['◈', 'Escrow e negociações', 'Entenda o que a proteção de criptoativos cobre e não cobre.', '/guides/negociacoes/limites-do-escrow'],
      ['▤', 'Disputas e evidências', 'Saiba quais registros preservar e como reduzir a exposição de dados.', '/guides/disputas/preservar-evidencias'],
      ['◎', 'Identidade e privacidade', 'O que fazer diante de uma conta possivelmente comprometida.', '/guides/identidade/conta-comprometida'],
      ['▦', 'Operações profissionais', 'Checklists, conciliação e resposta a incidentes.', '/guides/operacoes/checklist-antes-de-negociar'],
      ['✓', 'Comece por aqui', 'Conheça os limites do portal e os cuidados básicos.', '/guides/']
    ]
  },
  es: {
    title: 'La seguridad comienza antes de operar.',
    lead: 'Aprende a reconocer fraudes, verificar pagos y conservar pruebas. Orientación práctica para tomar decisiones más informadas en operaciones P2P.',
    explore: 'Explorar las guías', payment: 'Pagos de terceros',
    quickLabel: 'Base práctica de conocimientos de seguridad', urgent: 'Si algo parece incorrecto', urgentBody: 'Detén la operación. Verifica los datos de pago por canales confiables y conserva las pruebas.', readGuide: 'Leer la guía', aiTitle: 'Claro para personas. Estructurado para IA.', aiBody: 'Las guías incluyen situaciones, alertas, acciones y límites. Los sistemas de IA pueden consultar enlaces oficiales y criterios de interpretación en nuestro índice.', aiLink: 'Índice para IA',
    checks: ['Verifica al beneficiario', 'Desconfía de la urgencia', 'Conserva pruebas'],
    pathsTitle: '¿Qué ocurrió?', pathsIntro: 'Elige una situación para encontrar el primer paso más útil.', paths: [['Recibí un comprobante', 'Verifica el pago en tu banco antes de liberar activos.', '/guides/fraudes/comprovantes-falsos'], ['Cambió el destinatario', 'Comprueba el beneficiario y detente si hay diferencias.', '/guides/pagamentos/destinatario-divergente'], ['Comenzó una disputa', 'Conserva los registros originales y utiliza el proceso autorizado.', '/guides/operacoes/gestao-de-evidencias'], ['Opero P2P profesionalmente', 'Aplica listas y conciliación en cada operación.', '/guides/operacoes/checklist-antes-de-negociar']],
    heading: 'Encuentra la guía para tu situación',
    subheading: 'Conoce las señales de alerta, los riesgos y los próximos pasos antes de actuar.',
    notice: 'Importante:', noticeBody: 'Este portal ofrece información educativa. No verifica cuentas bancarias, no sustituye los canales oficiales de disputas ni promete recuperar fondos.',
    topics: [
      ['⚠', 'Fraudes y phishing', 'Identifica presiones, enlaces falsos y solicitudes sospechosas.', '/guides/fraudes/pressao-e-phishing'],
      ['↗', 'Pagos', 'Comprueba los destinatarios y los riesgos de pagos de terceros.', '/guides/pagamentos/terceiros'],
      ['◈', 'Escrow y operaciones', 'Entiende qué puede y qué no puede proteger el escrow.', '/guides/negociacoes/limites-do-escrow'],
      ['▤', 'Disputas y pruebas', 'Aprende qué registros conservar y cómo proteger tus datos.', '/guides/disputas/preservar-evidencias'],
      ['◎', 'Identidad y privacidad', 'Qué hacer ante una posible cuenta comprometida.', '/guides/identidade/conta-comprometida'],
      ['▦', 'Operaciones profesionales', 'Listas, conciliación y respuesta a incidentes.', '/guides/operacoes/checklist-antes-de-negociar'],
      ['✓', 'Empieza aquí', 'Conoce los límites del portal y las precauciones básicas.', '/guides/']
    ]
  }
};

export default function Home() {
  const {i18n} = useDocusaurusContext();
  const t = translations[i18n.currentLocale] || translations.en;
  const aiIndexUrl = useBaseUrl('/llms.txt');
  return (
    <Layout title={t.title} description={t.lead}>
      <main>
        <header className="safetyHero">
          <div className="container">
            <div className="safetyEyebrow"><span className="safetyEyebrowDot" aria-hidden="true" /> {t.quickLabel}</div>
            <h1>{t.title}</h1>
            <p className="safetyLead">{t.lead}</p>
            <div className="safetyActions">
              <Link className="button button--primary button--lg" to="/guides/">{t.explore} →</Link>
              <Link className="button button--outline button--secondary button--lg" to="/guides/pagamentos/terceiros">{t.payment}</Link>
            </div>
            <div className="safetyHeroChecklist" aria-label={t.heading}>{t.checks.map(check => <span key={check}><strong>✓</strong> {check}</span>)}</div>
          </div>
        </header>
        <section className="safetyAlertBand" aria-labelledby="safety-alert-heading"><div className="container safetyAlertInner"><div className="safetyAlertIcon" aria-hidden="true">!</div><div><h2 id="safety-alert-heading">{t.urgent}</h2><p>{t.urgentBody}</p></div><Link className="safetyAlertLink" to="/guides/fraudes/pressao-e-phishing">{t.readGuide} →</Link></div></section>
        <section className="safetyPaths" aria-labelledby="safety-paths-title"><div className="container"><h2 id="safety-paths-title">{t.pathsTitle}</h2><p>{t.pathsIntro}</p><div className="safetyPathsGrid">{t.paths.map(([title,description,to]) => <Link className="safetyPath" to={to} key={title}><span className="safetyPathArrow" aria-hidden="true">↗</span><strong>{title}</strong><span>{description}</span></Link>)}</div></div></section>
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
            <section className="safetyAiPanel" aria-labelledby="safety-ai-heading"><div><span className="safetyAiKicker">OPEN KNOWLEDGE</span><h2 id="safety-ai-heading">{t.aiTitle}</h2><p>{t.aiBody}</p></div><a href={aiIndexUrl} className="safetyAiLink">{t.aiLink} ↗</a></section>
            <aside className="safetyNotice" role="note"><strong>{t.notice}</strong> {t.noticeBody}</aside>
          </div>
        </section>
      </main>
    </Layout>
  );
}
