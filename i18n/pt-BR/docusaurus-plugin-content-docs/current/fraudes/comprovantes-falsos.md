---
title: Comprovantes falsos e confirmações de pagamento
---
# Comprovantes falsos e confirmações de pagamento

**Cenário:** Alguém envia uma imagem, PDF ou mensagem afirmando que o pagamento foi concluído e pede a liberação dos criptoativos antes da confirmação independente.

## Sinais de alerta
- Comprovante é a única prova, sem crédito confirmado no banco.
- Valor, beneficiário ou identificador não correspondem ao combinado.
- Pressão para liberar rapidamente com base em captura de tela.

## Como agir
1. Consulte o pagamento diretamente no aplicativo do seu banco.
2. Verifique valor, destinatário e disponibilidade efetiva dos fundos.
3. Não libere criptoativos apenas com base em imagens ou mensagens.
4. Em caso de divergência, interrompa a operação e preserve os registros.

## Quando o mesmo comprovante aparece novamente

Um comprovante de uma negociação anterior pode ser apresentado como se fosse um novo pagamento. Compare o identificador da transação com seus registros, além do valor, horário e destinatário. Dois pagamentos do mesmo valor não são necessariamente a mesma transação.

Se houver coincidência, preserve os arquivos originais e a sequência de mensagens. Não conclua fraude apenas pela aparência das imagens: confira a movimentação diretamente no banco e encaminhe a divergência pelo processo de disputa disponível.

## Integridade do arquivo não confirma o pagamento

Um hash permite comparar o conteúdo exato de arquivos. Ele não demonstra que o documento é autêntico ou que o dinheiro foi recebido. Uma imagem recortada ou reenviada em outro formato pode ter um hash diferente mesmo mostrando o mesmo comprovante.

## Limites
Comprovantes podem ser falsificados. O escrow não garante a liquidação bancária nem impede contestações. Não publique dados bancários completos.

**Status:** orientação educativa geral; não representa funcionalidade automática implementada ou garantia de recuperação.

**Fonte:** [Catálogo de ameaças do Sails Protocol](https://github.com/sails-protocol/Sails-Protocol/blob/main/docs/THREAT_MODEL.md).

**Fontes desta revisão:** [Requisitos operacionais P2P](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/rfcs/RFC-007-real-world-p2p-requirements.md); [Banco Central: golpes envolvendo PIX](https://www.bcb.gov.br/meubc/faqs/p/vitima-fez-um-pix-e-caiu-em-um-golpe).

**Revisão editorial:** 2026-10-10.
