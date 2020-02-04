const getClientEnvironment = (config, publicUrl) => ({
  NODE_ENV: process.env.NODE_ENV || config.environment,
  PUBLIC_URL: publicUrl,
  EXCHANGE_API_URL: config.urls.exchangeApi,
});

module.exports = getClientEnvironment;
