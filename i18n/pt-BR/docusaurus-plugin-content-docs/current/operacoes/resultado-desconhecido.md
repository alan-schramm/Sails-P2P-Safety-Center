---
title: Operação com resultado desconhecido
---
# Operação com resultado desconhecido

**Cenário:** o aplicativo perde conexão ou mostra um erro depois de você confirmar uma operação. Isso, sozinho, não informa se o pagamento foi enviado, confirmado ou recusado.

## Sequência antes de tentar novamente

<SafetyFlow>

1. **Pause** Uma mensagem de erro não prova que a operação falhou.
2. **Registre** Guarde horário, referência e mensagem de erro.
3. **Confira** Consulte o provedor original e compare o estado da negociação.
4. **Esclareça** Se o resultado continuar incerto, procure atendimento oficial antes de outro envio.

</SafetyFlow>

## Antes de tentar novamente

1. Registre horário, identificador da negociação e mensagem de erro. Não compartilhe credenciais.
2. Consulte o histórico no banco, carteira ou provedor utilizado. Procure a referência da operação original.
3. Para uma transação em blockchain, confira o identificador na rede correta pelo explorador indicado na carteira ou por outro caminho confiável. Para pagamentos bancários, use seu banco.
4. Compare o resultado com o estado da negociação. Se houver conflito ou falta de informação, procure o atendimento oficial antes de criar outro envio.

Não encontrar uma transação numa consulta não prova que ela falhou. Pode haver atraso de atualização, rede incorreta ou informação incompleta. “Pendente” também não significa “recusada”.

## O que evitar

Não repita o pagamento para fazer a tela avançar. Não cancele e abra outra negociação supondo que os efeitos da anterior desapareceram. Funções de substituir, acelerar ou cancelar variam por rede e carteira: siga a documentação do serviço, sem improvisar parâmetros técnicos.

**Exemplo fictício:** depois de confirmar um envio, aparece um erro de conexão. Antes de enviar novamente, registre a tentativa e confira o histórico; um segundo envio pode gerar um segundo pagamento.

## Limites

O prazo e a forma de esclarecimento dependem do provedor. Este guia não promete reversão ou recuperação e não afirma que o Sails reconcilia automaticamente resultados desconhecidos. Compartilhe referências apenas pelos canais necessários ao caso.

**Status:** orientação educativa geral. A investigação técnica citada descreve evidências e limitações; não prova recuperação em produção.

## Guias relacionados

- [Resposta a incidentes](./resposta-a-incidentes.md)
- [Conciliação de pagamentos](./conciliacao-de-pagamentos.md)
- [Conferência antes do envio](../negociacoes/conferir-envio.md)

**Fonte:** [Investigação sobre resultado desconhecido e repetição de operações](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/WDK_UNKNOWN_OUTCOME_RETRY_SAFETY.md).

**Revisão editorial:** 2026-10-10.
