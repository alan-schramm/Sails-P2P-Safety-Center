module.exports = {
  safetySidebar: [
    {type: 'doc', id: 'intro'},
    {type: 'category', label: 'Scams and phishing', link: {type: 'doc', id: 'fraudes/pressao-e-phishing'}, items: ['fraudes/comprovantes-falsos', 'fraudes/reputation-farming', 'fraudes/falsa-arbitragem']},
    {type: 'category', label: 'Payments', link: {type: 'doc', id: 'pagamentos/terceiros'}, items: ['pagamentos/destinatario-divergente', 'pagamentos/reversao-e-estorno', 'pagamentos/conta-mula']},
    {type: 'category', label: 'Escrow and trades', link: {type: 'doc', id: 'negociacoes/limites-do-escrow'}, items: ['negociacoes/falsa-liquidez']},
    {type: 'doc', id: 'disputas/preservar-evidencias'},
    {type: 'doc', id: 'identidade/conta-comprometida'},
    {type: 'category', label: 'Professional trader operations', link: {type: 'doc', id: 'operacoes/checklist-antes-de-negociar'}, items: ['operacoes/conciliacao-de-pagamentos', 'operacoes/gestao-de-evidencias', 'operacoes/resposta-a-incidentes']},
    {type: 'doc', id: 'editorial-policy'}
  ]
};