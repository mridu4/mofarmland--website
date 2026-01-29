module.exports = {
  images: {
    domains: ['example.com'],
  },
  reactStrictMode: true,
  env: {
    CUSTOM_VAR: process.env.CUSTOM_VAR || 'default_value',
  },
  // Further configurations can be added here
};