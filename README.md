# OpenAuthCert Monorepo


This repository contains all core components of the **Open Authentication Certification Initiative**. It hosts the code for the badge server API, vendor registry, documentation website and various tooling.

## Repository Structure

- `/apps/badge-server` - Badge API
- `/specs/badge-spec` - JSON/YAML badge definitions
- `/registry/vendor-registry` - Certified vendors
- `/tools/tooling` - Python CLI & validation tools
- `/docs/docs-site` - VitePress docs site
- `/website` - Public marketing site

## Building and Testing

For the documentation site and marketing website:

```bash
npm install && npm run build
```

For the Python tooling:

```bash
pip install -r requirements.txt && pytest
```

Visit the live site at [https://openauthcert.org](https://openauthcert.org).
