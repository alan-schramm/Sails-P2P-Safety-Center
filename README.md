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
