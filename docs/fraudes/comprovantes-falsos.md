---
title: Fake payment receipts and false confirmations
---
# Fake payment receipts and false confirmations

**Scenario:** a counterparty sends a screenshot, PDF, or message claiming payment is complete and asks you to release crypto before you can verify the funds independently.

## Warning signs
- The receipt is the only evidence of payment; your own bank or provider does not show settled funds.
- The amount, recipient, timestamp, or transaction identifier differs from the agreed instructions.
- The counterparty claims an urgent deadline or asks you to rely on a message from a supposed bank employee.

## What to do
1. Check the transaction directly in your own bank or payment-provider app using a trusted entry point.
2. Verify the amount, recipient, reference, and actual availability of funds.
3. Do not release escrowed assets based only on a screenshot or a third party's confirmation.
4. If information conflicts, pause the trade and preserve the original messages and payment references for the authorized dispute process.

## When a receipt appears again

A receipt from an earlier trade may be presented as a new payment. Compare the transaction identifier with your records, as well as the amount, time and recipient. Two payments for the same amount are not necessarily the same transaction.

If details match, preserve the original files and message sequence. Do not conclude fraud from the images alone: check your bank activity independently and report the discrepancy through the available dispute process.

## File integrity does not confirm payment

A hash can compare the exact contents of files. It does not establish that a document is authentic or that money was received. A cropped image or a file converted to another format can have a different hash while showing the same receipt.

## Limits
A convincing document can still be forged. A bank receipt does not by itself prove final settlement or that a transfer cannot be contested or reversed. Never publish unredacted financial records.

**Claim status:** general safety guidance. Do not assume Sails Protocol automatically detects forged receipts. The protocol threat registry distinguishes planned PIX/fiat image analysis from implemented, configuration-dependent evidence assessment.

**Protocol references:** [Threat model](https://github.com/sails-protocol/Sails-Protocol/blob/main/docs/THREAT_MODEL.md), [RFC-021](https://github.com/sails-protocol/Sails-Protocol/blob/main/docs/rfcs/RFC-021-market-based-arbitration-and-payment-trust.md).

**Sources for this revision:** [P2P operational requirements](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/rfcs/RFC-007-real-world-p2p-requirements.md); [Central Bank of Brazil: PIX scams](https://www.bcb.gov.br/meubc/faqs/p/vitima-fez-um-pix-e-caiu-em-um-golpe).

**Editorial review:** 2026-10-10.
