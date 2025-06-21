[![Validate Badge Specs](https://github.com/openauthcert/badge-spec/actions/workflows/validate-badge-specs.yml/badge.svg)](https://github.com/openauthcert/badge-spec/actions/workflows/validate-badge-specs.yml)
![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)

# 🏷️ OpenAuthCert Badge Specifications

This repository contains the official, versioned **badge specifications** issued by the Open Authentication Certification Initiative (**OpenAuthCert**).

The active specification lives under `specs/v1.0.0/`.

## 📜 Purpose
To define machine-readable criteria, formats, and verification rules for public badges awarded to projects, vendors, and tools that meet ethical identity integration standards.

## 📂 Repository Structure
```
.
├── specs/
│   └── v1.0.0/
│       ├── badge-schema.json          # Reusable JSON Schema definition
│       └── free-sso-idp-v0.1.json     # First released badge
├── examples/
│   └── sample-badge.json              # Sample badge issued to a test project
└── README.md
```

### Badge File Structure

Every badge specification is a JSON document with these top level keys:

```json
{
  "badge": { /* metadata about the badge itself */ },
  "requirements": { /* mandatory criteria */ },
  "optional_features": [ /* optional extras */ ],
  "verification": { /* how the badge is verified */ },
  "version": "1.0.0",
  "auth_protocols": ["OIDC", "SAML", "LDAP"],
  "docs_url": "https://example.com/docs/auth",
  "status": "certified",
  "issued_since": "YYYY-MM-DD",
  "expires_on": "YYYY-MM-DD", /* optional */
  "compatible_projects": [],
  "schema_version": "1.0"
}
```

Key fields explained:

- `version` — semantic version of the badge entry. Certification applies only to this major version.
- `auth_protocols` — one or more of `OIDC`, `SAML`, or `LDAP`.
- `docs_url` — URI pointing to documentation of the implementation.
- `status` — either `certified`, `revoked`, or `expired`.
- `expires_on` — optional expiration date of the certification.

## ✅ Current Specification
### `Free SSO/IdP Support Badge v0.1`
**Requirements:**
- Supports at least one of: OIDC, SAML, or LDAP
- Allows enabling IdP functionality without an enterprise-tier license
- Has publicly documented identity integration
- Can be verified via code or documentation without vendor NDA

See [`specs/v1.0.0/free-sso-idp-v0.1.json`](specs/v1.0.0/free-sso-idp-v0.1.json) for the full JSON definition.

## 🛠️ Tools
Verification scripts and parsers will live in the [`tools/`](../tools/) repo (TBD).

## 📄 License
Content in this repository is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

## 🤝 Contributing
To propose changes or a new badge, open an issue or submit a PR.
New badge definitions should be added under `specs/<version>/` alongside `badge-schema.json`.

---

🔗 Back to project: https://openauthcert.org
