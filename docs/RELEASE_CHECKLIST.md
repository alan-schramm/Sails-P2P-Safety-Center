---
id: release-checklist
title: Checklist de publicação
sidebar_position: 100
---

# Checklist de publicação

Este checklist é um documento de engenharia. **Não implica que o site esteja publicado.**

## Gate técnico

- [x] Primeiro build Docusaurus aprovado no GitHub Actions (PR #1, commit ec1c96b).
- [x] Revalidar o CI no HEAD final do PR #1 (GitHub Actions, sucesso).
- [x] Gerar e versionar `package-lock.json`, mudar a instalação de CI para `npm ci`.
- [ ] Revisar navegação, responsividade, acessibilidade e links em preview.
- [ ] Confirmar que não há segredos nem informações pessoais nos artigos.

## Gate editorial

- [ ] Revisar a redação dos guias em português.
- [ ] Confirmar que orientações gerais não são apresentadas como garantias implementadas.
- [ ] Confirmar links para políticas normativas do Sails Protocol quando necessários.
- [ ] Definir licença do conteúdo educativo separadamente da licença do código.

## Publicação

- [ ] Em GitHub Settings → Pages, escolher **Source: GitHub Actions**.
- [x] Aprovar PR #1 e realizar merge na `main` após build verde (1d6b3da).
- [ ] Confirmar sucesso do job de deploy e acesso a https://alan-schramm.github.io/Sails-P2P-Safety-Center/.
- [ ] Testar links diretos para artigos, navegação móvel e HTTPS.

## Pós-publicação

- [ ] Expandir o catálogo por cenários com revisão.
- [ ] Planejar busca e localização EN/ES.
- [ ] Definir revisão periódica dos artigos e responsáveis.
