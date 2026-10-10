---
title: Comprobantes falsos y confirmaciones de pago
---
# Comprobantes falsos y confirmaciones de pago

**Situación:** Alguien envía una captura, PDF o mensaje que afirma que el pago se completó y solicita liberar criptoactivos antes de una verificación independiente.

## Señales de alerta
- El comprobante es la única prueba; tu banco no confirma los fondos.
- El importe, destinatario o identificador no coincide.
- Hay presión para liberar activos de inmediato.

## Cómo actuar
1. Consulta el pago directamente en tu aplicación bancaria.
2. Verifica el importe, el destinatario y la disponibilidad real.
3. No liberes criptoactivos solo por capturas o mensajes.
4. Si hay diferencias, detén la operación y conserva los registros.

## Cuando un comprobante aparece de nuevo

Un comprobante de una operación anterior puede presentarse como un pago nuevo. Compara el identificador de la transacción con tus registros, además del importe, la hora y el destinatario. Dos pagos del mismo importe no son necesariamente la misma transacción.

Si los datos coinciden, conserva los archivos originales y la secuencia de mensajes. No concluyas que existe fraude solo por las imágenes: comprueba los movimientos en tu banco y comunica la diferencia mediante el proceso de disputa disponible.

## La integridad del archivo no confirma el pago

Un hash permite comparar el contenido exacto de los archivos. No demuestra que un documento sea auténtico ni que se haya recibido el dinero. Una imagen recortada o convertida a otro formato puede tener un hash distinto aunque muestre el mismo comprobante.

## Límites
Los comprobantes pueden falsificarse. El escrow no garantiza la liquidación bancaria ni evita impugnaciones. No publiques datos bancarios completos.

**Estado:** orientación educativa general; no constituye una función automática implementada ni una garantía de recuperación.

**Fuente:** [Catálogo de amenazas de Sails Protocol](https://github.com/sails-protocol/Sails-Protocol/blob/main/docs/THREAT_MODEL.md).

**Fuentes de esta revisión:** [Requisitos operativos P2P](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/rfcs/RFC-007-real-world-p2p-requirements.md); [Banco Central de Brasil: fraudes con PIX](https://www.bcb.gov.br/meubc/faqs/p/vitima-fez-um-pix-e-caiu-em-um-golpe).

**Revisión editorial:** 2026-10-10.
