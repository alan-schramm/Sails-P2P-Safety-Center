# Sails P2P Safety Center

Open-source P2P safety knowledge base built with Docusaurus. Independent from Sails Protocol economic runtime.

## Local development

Requires Node.js 22 or newer.

```bash
npm ci
npm start
```

To verify a production build:

```bash
npm run build
npm run serve
```

## Source of truth

- This repository owns the public Safety Center site, articles, visual design and translations.
- [Sails Protocol](https://github.com/sails-protocol/Sails-Protocol) owns normative economic and technical policies.
- Changes are reviewed through Pull Requests. An approved policy is not automatically an implemented guarantee.

## Content rules

Never publish personally identifying payment details, secrets, private dispute evidence or unverified security guarantees. See [Editorial Policy](docs/EDITORIAL_POLICY.md) and [Contributing](CONTRIBUTING.md).

## Release status

**Foundation merged into `main`.** The locked-dependency build passed. After transferring the repository to the organization, verify **Settings → Pages → Build and deployment → Source: GitHub Actions** and confirm a successful deployment on `main`. The deployment runs on pushes to `main` only. Intended URL: https://sails-protocol.github.io/Sails-P2P-Safety-Center/.

## License

The repository's MIT license applies to software unless otherwise specified. A separate content license for educational articles will be selected before publication.

## V2 preview versus published site

The V2 visual redesign is currently proposed in [draft PR #4](https://github.com/sails-protocol/Sails-P2P-Safety-Center/pull/4), on `feat/safety-center-v2-visual`. A green pull-request build **does not** change the public GitHub Pages website. The workflow deliberately skips artifact upload and deployment for pull requests; only a push to `main` can deploy through GitHub Actions.

To review without publishing, check out the PR branch locally and run `npm ci && npm run build && npm run serve`. Review `/`, `/pt-BR/`, `/es/`, their `/guides/` routes, navigation, mobile layouts and keyboard focus. The local server uses the configured GitHub Pages base path `/Sails-P2P-Safety-Center/`.

**Release gate:** verify current-head CI, perform visual/accessibility and editorial review, approve the PR explicitly, then merge to `main` only when publication is authorized. Do not interpret a successful build as proof of a browser-level visual review.
