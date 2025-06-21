const config = {
  port: process.env.PORT || 3000,

  // Where badge metadata JSON lives
  badgeSpecExamplesURL:
    "https://raw.githubusercontent.com/openauthcert/badge-spec/main/examples/",

  // Optional: Add other URLs here (schemas, registry, etc.)
};

export default config;
