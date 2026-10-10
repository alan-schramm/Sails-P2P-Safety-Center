---
title: Operations with an unknown outcome
---
# Operations with an unknown outcome

**Scenario:** an application loses connection or displays an error after you confirm an operation. That alone does not tell you whether payment was sent, confirmed or rejected.

## Before retrying

1. Record the time, trade identifier and error message. Do not share credentials.
2. Check the history in the bank, wallet or provider used. Look for the original operation's reference.
3. For blockchain transactions, check the identifier on the correct network through the wallet's explorer link or another trusted entry point. For bank payments, use your bank.
4. Compare the result with the trade status. If information conflicts or is missing, contact official support before creating another transfer.

Not finding a transaction in one lookup does not prove failure. Updates may lag, the network may be wrong or information incomplete. Pending does not mean rejected.

## Avoid repeating the economic action

Do not repeat payment to make the screen advance. Do not cancel and reopen a trade assuming the previous effects disappeared. Replacement, acceleration and cancellation features vary by network and wallet: follow the service documentation rather than improvising technical parameters.

**Fictional example:** a connection error appears after confirming a transfer. Record the attempt and check history before sending again; a second transfer could create a second payment.

## Limits

Resolution methods and timing depend on the provider. This guide promises neither reversal nor recovery and does not claim Sails automatically reconciles unknown outcomes. Share references only through channels necessary for the case.

**Claim status:** general educational guidance. The cited technical investigation documents evidence and limitations, not proof of production recovery.

## Related guides

- [Incident response](./resposta-a-incidentes.md)
- [Payment reconciliation](./conciliacao-de-pagamentos.md)
- [Checks before sending](../negociacoes/conferir-envio.md)

**Source:** [Unknown-outcome and retry-safety investigation](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/WDK_UNKNOWN_OUTCOME_RETRY_SAFETY.md).

**Editorial review:** 2026-10-10.
