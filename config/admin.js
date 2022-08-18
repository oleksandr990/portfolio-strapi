module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', 'oIpibAUoGPzZ5bGR')
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6b0d415b946ee440dd297656a12e310f'),
  },
});
