# Badge Validation Guide

This guide explains how to validate badge specification files and vendor badge
JSON documents.

## Using `ajv`

You can validate a badge schema or entry using the [ajv](https://ajv.js.org/) CLI.
Install it globally with npm and run:

```bash
npm install -g ajv-cli
ajv validate -s specs/v1.0.0/badge-schema.json -d path/to/badge.json
```

Replace `path/to/badge.json` with the file you wish to validate.

## Using Python

If you prefer Python, install the `jsonschema` library:

```bash
pip install jsonschema
```

Then run a simple script:

```python
import json
from jsonschema import validate

with open('specs/v1.0.0/badge-schema.json') as schema_f,
     open('path/to/badge.json') as badge_f:
    schema = json.load(schema_f)
    badge = json.load(badge_f)

validate(badge, schema)
print('Badge is valid!')
```

Any validation errors will raise an exception detailing the problem.

## Schema Notes

Required fields include `version`, `auth_protocols`, `docs_url`, and `status`.
`auth_protocols` must list one or more of `OIDC`, `SAML`, or `LDAP`.
`status` accepts `certified`, `revoked`, or `expired` and certification only applies to the stated major `version`.
`expires_on` may optionally specify when a badge is no longer valid.

