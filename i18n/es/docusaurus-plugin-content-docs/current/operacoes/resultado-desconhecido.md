---
title: Operaciones con resultado desconocido
---
# Operaciones con resultado desconocido

**Situación:** la aplicación pierde conexión o muestra un error después de confirmar una operación. Eso no permite saber, por sí solo, si el pago fue enviado, confirmado o rechazado.

## Secuencia antes de volver a intentarlo

<SafetyFlow>

1. **Pausa** Un mensaje de error no demuestra que la operación falló.
2. **Registra** Conserva la hora, la referencia y el mensaje de error.
3. **Comprueba** Consulta al proveedor original y compara el estado de la operación.
4. **Aclara** Si el resultado sigue siendo incierto, usa el soporte oficial antes de otra transferencia.

</SafetyFlow>

## Antes de reintentar

1. Registra hora, identificador de la operación y mensaje de error. No compartas credenciales.
2. Consulta el historial del banco, cartera o proveedor utilizado. Busca la referencia del intento original.
3. Para transacciones blockchain, consulta el identificador en la red correcta mediante el explorador indicado por la cartera u otra vía confiable. Para pagos bancarios, utiliza tu banco.
4. Compara el resultado con el estado de la operación. Si faltan datos o hay contradicciones, consulta el soporte oficial antes de crear otro envío.

No encontrar una transacción en una consulta no demuestra que haya fallado. Puede haber retraso, una red incorrecta o información incompleta. Pendiente tampoco significa rechazado.

## Evita repetir la acción económica

No repitas el pago para hacer avanzar la pantalla. No canceles y abras otra operación suponiendo que los efectos anteriores desaparecieron. Sustitución, aceleración y cancelación dependen de la red y la cartera: sigue su documentación sin improvisar parámetros técnicos.

**Ejemplo ficticio:** aparece un error de conexión después de confirmar un envío. Registra el intento y revisa el historial antes de enviar de nuevo; un segundo envío puede generar otro pago.

## Límites

El plazo y la forma de aclaración dependen del proveedor. Esta guía no promete reversión ni recuperación ni afirma conciliación automática de resultados desconocidos por Sails. Comparte referencias solo por canales necesarios para el caso.

**Estado:** orientación educativa general. La investigación técnica citada describe pruebas y límites, no demuestra recuperación en producción.

## Guías relacionadas

- [Respuesta a incidentes](./resposta-a-incidentes.md)
- [Conciliación de pagos](./conciliacao-de-pagamentos.md)
- [Verificaciones antes de enviar](../negociacoes/conferir-envio.md)

**Fuente:** [Investigación sobre resultados desconocidos y reintentos](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/WDK_UNKNOWN_OUTCOME_RETRY_SAFETY.md).

**Revisión editorial:** 2026-10-10.
