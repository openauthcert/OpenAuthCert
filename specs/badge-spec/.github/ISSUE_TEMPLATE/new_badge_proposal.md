name: 💡 New Badge Proposal
description: Suggest a new badge specification for OpenAuthCert
labels: ["badge-proposal"]

body:
  - type: input
    id: name
    attributes:
      label: Badge Name
      placeholder: e.g. "Free SCIM Support"
    validations:
      required: true

  - type: textarea
    id: purpose
    attributes:
      label: Purpose
      description: What does this badge represent and why is it needed?
    validations:
      required: true

  - type: textarea
    id: criteria
    attributes:
      label: Proposed Criteria
      description: What conditions must a project/vendor meet to earn this badge?

  - type: input
    id: reference
    attributes:
      label: Related Project or Vendor
      placeholder: GitHub repo, website, etc.
