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

## Limits
A convincing document can still be forged. A bank receipt does not by itself prove final settlement or that a transfer cannot be contested or reversed. Never publish unredacted financial records.

**Claim status:** general safety guidance. Do not assume Sails Protocol automatically detects forged receipts. The protocol threat registry distinguishes planned PIX/fiat image analysis from implemented, configuration-dependent evidence assessment.

**Protocol references:** [Threat model](https://github.com/sails-protocol/Sails-Protocol/blob/main/docs/THREAT_MODEL.md), [RFC-021](https://github.com/sails-protocol/Sails-Protocol/blob/main/docs/rfcs/RFC-021-market-based-arbitration-and-payment-trust.md).
