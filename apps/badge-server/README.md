[![CI](https://github.com/openauthcert/badge-server/actions/workflows/ci.yml/badge.svg)](https://github.com/openauthcert/badge-server/actions/workflows/ci.yml)
![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)

# 🏷️ OpenAuthCert Badge Server

The **Badge Server** is a public service of the [Open Authentication Certification Initiative](https://openauthcert.org). It verifies and serves badge data for certified projects and vendors offering open, non-paywalled SSO/IdP support.

---

## 📦 Features

* `GET /badge?id=free-sso-idp-project` → Returns SVG badge
* `GET /badge.json?id=free-sso-idp-project` → Returns badge metadata
* `GET /badge?url=https://vendor.com` → Lookup via vendor registry
* Revoked badges return a red badge with `⚠️ REVOKED` label
* Schema validation using official JSON schema from badge-spec

---

## 🚀 Deployment

The server can be started locally with Node.js:

```bash
git clone https://github.com/openauthcert/badge-server.git
cd badge-server
npm ci
npm run build
npm start
```

App will be available at: `http://localhost:3000`

### 🔁 GitHub Actions (CI/CD)

| Workflow            | Description                      |
| ------------------- | -------------------------------- |
| `ci.yml`            | Builds and validates the project |

---

## 🔧 Configuration

| File                | Purpose                                    |
| ------------------- | ------------------------------------------ |
| `badge-schema.json` | Fallback for schema validation             |
| `revoked.json`      | List of revoked badge entries              |
| `src/lib/*`         | Core fetch/validation/rendering utilities  |
| `src/routes/*`      | Express routes for `/badge`, `/badge.json` |

### Environment Variables

| Variable | Description              | Default |
| -------- | ------------------------ | ------- |
| `PORT`   | Port the server listens on | `3000` |

---

## 🧪 Examples

### SVG Badge:

```
GET /badge?id=free-sso-idp-sample
```

### Badge Metadata:

```
GET /badge.json?id=free-sso-idp-sample
```

### Lookup by URL:

```
GET /badge?url=github.com/acme/openidp
```

---

## 📄 License

Code is licensed under MIT. Badge content and schema are licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

---

## 🛠️ Roadmap

* [ ] JSON-LD structured data
* [ ] SVG theming (light/dark/compact)
* [ ] `/revoked.json` API for public badge invalidation list
* [ ] Offline validation fallback
* [ ] CLI integration for local testing
