# Sails P2P Safety Center

Open-source P2P safety knowledge base built with Docusaurus. Independent from Sails Protocol economic runtime.

## Local development

Requires Node.js 22 or newer.

```bash
npm install
npm start
```

To verify a production build:

```bash
npm run build
npm run serve
```

## Source of truth

- This repository owns the public Safety Center site, articles, visual design and translations.
- [Sails Protocol](https://github.com/alan-schramm/Sails-Protocol) owns normative economic and technical policies.
- Changes are reviewed through Pull Requests. An approved policy is not automatically an implemented guarantee.

## Content rules

Never publish personally identifying payment details, secrets, private dispute evidence or unverified security guarantees. See [Editorial Policy](docs/EDITORIAL_POLICY.md) and [Contributing](CONTRIBUTING.md).

## Release status

**Foundation under development.** GitHub Pages is configured in Docusaurus and the deployment workflow, but the site is not confirmed live. Review PR #1, verify the build, add a dependency lockfile, merge after approval, and enable **Settings → Pages → Build and deployment → Source: GitHub Actions**. The deployment runs on pushes to `main` only. Planned URL: https://alan-schramm.github.io/Sails-P2P-Safety-Center/.

## License

The repository's MIT license applies to software unless otherwise specified. A separate content license for educational articles will be selected before publication.
