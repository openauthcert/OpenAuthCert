# OpenAuthCert Monorepo

This repository contains all components of the Open Authentication Certification Initiative.

## Structure

- `apps/badge-server` - Node.js backend API for badge issuance
- `specs/badge-spec` - Specifications and validation logic
- `registry/vendor-registry` - Public vendor registry
- `tools/tooling` - Python CLI utilities for validation
- `docs/docs-site` - Documentation site built with VitePress
- `website` - Public facing website which integrates the docs and registry

## Contributing

1. Fork the repository and create a branch for your change.
2. Install dependencies for the area you work on (`npm` or `pip`).
3. Run linting and tests (`flake8`, `black`, `pytest`).
4. Submit a pull request.

The live website is available at [https://openauthcert.org](https://openauthcert.org) and the documentation is served from [https://docs.openauthcert.org](https://docs.openauthcert.org).

