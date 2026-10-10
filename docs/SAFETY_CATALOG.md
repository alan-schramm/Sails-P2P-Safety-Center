# Sails Safety Center — public knowledge catalog

**Purpose:** organize P2P risk education for people and machine readers. Source-derived categories are mapped to the Sails Protocol repository. This is a content backlog, not evidence that a detection or protection is deployed.

## Published as guides in the V2 branch

| Risk | Public guide | Protocol source |
| --- | --- | --- |
| Phishing, off-channel pressure | [Pressure and phishing](fraudes/pressao-e-phishing.md) | [RFC-017](https://github.com/sails-protocol/Sails-Protocol/blob/main/docs/rfcs/RFC-017-timeline-and-social-engineering-agent.md) |
| Fake PIX or bank receipts | [Fake receipts](fraudes/comprovantes-falsos.md) | [Threat model](https://github.com/sails-protocol/Sails-Protocol/blob/main/docs/THREAT_MODEL.md) |
| Unexpected third-party recipient | [Third-party payments](pagamentos/terceiros.md) | [RFC-021](https://github.com/sails-protocol/Sails-Protocol/blob/main/docs/rfcs/RFC-021-market-based-arbitration-and-payment-trust.md) |
| Mule or compromised payment account | [Mule accounts](pagamentos/conta-mula.md) | [RFC-021](https://github.com/sails-protocol/Sails-Protocol/blob/main/docs/rfcs/RFC-021-market-based-arbitration-and-payment-trust.md) |
| Reversals and chargebacks | [Payment reversals](pagamentos/reversao-e-estorno.md) | [Threat model](https://github.com/sails-protocol/Sails-Protocol/blob/main/docs/THREAT_MODEL.md) |
| Fake liquidity | [Fake liquidity](negociacoes/falsa-liquidez.md) | [Threat model](https://github.com/sails-protocol/Sails-Protocol/blob/main/docs/THREAT_MODEL.md) |
| Sybil / reputation farming | [Reputation farming](fraudes/reputation-farming.md) | [Sybil strategy](https://github.com/sails-protocol/Sails-Protocol/blob/main/docs/security/SYBIL_MITIGATION.md) |
| Impersonation / arbitration pressure | [Fake arbitration](fraudes/falsa-arbitragem.md) | [Threat model](https://github.com/sails-protocol/Sails-Protocol/blob/main/docs/THREAT_MODEL.md) |
| Fabricated dispute evidence | [Preserve evidence](disputas/preservar-evidencias.md) | [RFC-021](https://github.com/sails-protocol/Sails-Protocol/blob/main/docs/rfcs/RFC-021-market-based-arbitration-and-payment-trust.md) |
| Escrow misunderstandings | [Escrow limits](negociacoes/limites-do-escrow.md) | [Threat model](https://github.com/sails-protocol/Sails-Protocol/blob/main/docs/THREAT_MODEL.md) |

## Professional trader operational guides

| Workflow | Public guide | Related protocol context |
| --- | --- | --- |
| Pre-trade controls | [Pre-trade checklist](operacoes/checklist-antes-de-negociar.md) | [Threat model](https://github.com/sails-protocol/Sails-Protocol/blob/main/docs/THREAT_MODEL.md) |
| Independent fiat confirmation | [Payment reconciliation](operacoes/conciliacao-de-pagamentos.md) | [RFC-021](https://github.com/sails-protocol/Sails-Protocol/blob/main/docs/rfcs/RFC-021-market-based-arbitration-and-payment-trust.md) |
| Privacy-preserving record keeping | [Evidence handling](operacoes/gestao-de-evidencias.md) | [RFC-021](https://github.com/sails-protocol/Sails-Protocol/blob/main/docs/rfcs/RFC-021-market-based-arbitration-and-payment-trust.md) |
| Suspicious activity escalation | [Incident response](operacoes/resposta-a-incidentes.md) | [RFC-017](https://github.com/sails-protocol/Sails-Protocol/blob/main/docs/rfcs/RFC-017-timeline-and-social-engineering-agent.md) |

## Editorial backlog — not yet a complete public guide

1. Collusive or compromised arbitrators: separate ordinary user precautions from protocol-level operator controls.
2. Evidence manipulation and misleading screenshots: create a practical dispute checklist without asserting that AI can certify authenticity.
3. Bad-faith disputes and deliberate settlement delays: explain the limits of arbitration and applicable deadlines.
4. Counterparty impersonation after account takeover: consolidate identity and payment-change guidance.
5. Advanced professional workflows: team permissions, separation of duties, audit trails, and recovery playbooks (application-dependent; not claimed as implemented).
6. Regional payment-method differences: document PIX-specific risks separately from globally applicable bank transfer principles.

## Claim integrity

- General safety guidance is not an implemented protocol guarantee.
- RFC acceptance is not deployment confirmation.
- QVAC-related mitigations must be classified by their actual implementation and configuration status.
- New public articles must be translated into English (canonical), Portuguese, and Spanish before publication.
- Public content must not reveal sensitive exploit instructions, personal data, or private dispute evidence.
