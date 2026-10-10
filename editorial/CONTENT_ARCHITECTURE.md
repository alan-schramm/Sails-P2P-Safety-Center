# Safety Center content architecture

## Purpose and authority

The Sails P2P Safety Center publishes educational, human-readable safety guidance. The normative source of Sails Protocol economic and technical behavior is [Sails Protocol](https://github.com/sails-protocol/Sails-Protocol). Educational text must never be treated as proof that a protection has been implemented.

## Languages

English is canonical and the default locale. Portuguese (pt-BR) and Spanish (es) are maintained as reviewed translations. Keep the meaning of risk warnings, exceptions, and status labels equivalent across languages. Never silently strengthen a translated guarantee.

## Human and AI readers

- Write a clear scenario in the opening paragraph.
- Identify warning signs, safe actions, limitations, and privacy implications using descriptive headings.
- Use concise standalone statements rather than relying on visual-only badges or color.
- Preserve stable URLs; if paths must change, provide redirects and update the machine-readable index.
- Keep pages readable without JavaScript where the static site generator allows it.
- Prefer descriptive links to ambiguous 'click here' text.
- Publish canonical sources and clear status labels; do not imply the site can perform financial operations or adjudicate disputes.
- Never expose personal identifiers, seed phrases, bank records, or private evidence.

## Claim taxonomy

1. General guidance: educational best practice; no protocol feature claim.
2. Proposed policy: not approved or implemented.
3. Approved policy: institutional decision, not necessarily implemented.
4. Implemented and evidenced: link to concrete code, tests, and approval evidence.

If a claim cannot be substantiated, describe it as general guidance or remove it. No material finding under the rug.

## Machine discovery

- `/llms.txt` is an optional navigation index for AI systems, not a guarantee of crawler support.
- `/robots.txt` advertises the sitemap; it does not force indexing.
- The generated sitemap and canonical site URLs are the primary discovery mechanisms.
- `/ai-content-policy.txt` explains how automated readers should interpret content boundaries.
- Keep all indexes in sync with live routes when adding or renaming guides.

## Publication checklist

- English, Portuguese and Spanish content reviewed for meaning and risk accuracy.
- Navigation, links, metadata and language switcher verified on all three locales.
- Desktop, mobile, keyboard focus and contrast inspected.
- Docusaurus production build passes for every locale.
- All URLs in `llms.txt` resolve and point to the intended guide.
- Editorial approval recorded before merging or deploying.
