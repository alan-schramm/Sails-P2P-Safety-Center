---
title: Payment reconciliation before releasing assets
---
# Payment reconciliation before releasing assets

A professional P2P operator should distinguish a payment notification or receipt from funds independently verified with their own financial provider.

## Operational checklist
1. Locate the incoming transaction in your own bank or provider account.
2. Match the amount, currency, reference, time, and beneficiary with the agreed trade.
3. Check for pending, blocked, disputed, or incomplete status where the provider exposes it.
4. Keep a trade-by-trade reconciliation record without publishing full account identifiers.
5. Escalate mismatches using official banking and application dispute channels.

## Stop and verify
Do not release crypto merely because a counterparty sent a receipt or claimed that a transfer is instant.

## Sending is different from receiving

“Scheduled”, “sent” and “under review” describe different stages. Check what the status means with your own bank or provider; a counterparty's message does not replace that check. Resolve a hold, pending status or discrepancy through official support before releasing assets.

## Reconcile each trade separately

For concurrent trades, record each trade identifier, expected amount and received payment reference separately. Mark which payment you checked for each trade. Do not use one credit to justify two releases.

**Fictional example:** two trades each expect BRL 500. One BRL 500 credit confirms only one receipt of funds; compare identifiers before assigning it to a trade.

## Limits
A bank's displayed status and reversal rights depend on the payment method and jurisdiction. No checklist guarantees irrevocability.

**Claim status: general educational guidance; not a claim of an implemented safeguard.**

**Protocol context:** [Threat model](https://github.com/sails-protocol/Sails-Protocol/blob/main/docs/THREAT_MODEL.md), [RFC-017](https://github.com/sails-protocol/Sails-Protocol/blob/main/docs/rfcs/RFC-017-timeline-and-social-engineering-agent.md), [RFC-021](https://github.com/sails-protocol/Sails-Protocol/blob/main/docs/rfcs/RFC-021-market-based-arbitration-and-payment-trust.md).

**Sources for this revision:** [P2P operational requirements](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/rfcs/RFC-007-real-world-p2p-requirements.md).

**Editorial review:** 2026-10-10.

## Continue reading

- [Partial payments and amount mismatches](../pagamentos/valor-divergente.md)
