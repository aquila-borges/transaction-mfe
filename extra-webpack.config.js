const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // Externalize zone.js para evitar carregamento duplicado
  singleSpaWebpackConfig.externals = singleSpaWebpackConfig.externals || {};
  singleSpaWebpackConfig.externals['zone.js'] = 'Zone';

  return singleSpaWebpackConfig;
};