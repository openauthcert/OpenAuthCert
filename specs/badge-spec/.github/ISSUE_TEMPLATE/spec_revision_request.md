name: 📝 Spec Revision Request
description: Suggest changes to an existing badge spec
labels: ["spec-revision"]

body:
  - type: dropdown
    id: spec
    attributes:
      label: Which badge spec?
      options:
        - free-sso-idp-v0.1
        - (Other - write below)
    validations:
      required: true

  - type: textarea
    id: changes
    attributes:
      label: Suggested Changes
      description: What do you want to revise, and why?
    validations:
      required: true
