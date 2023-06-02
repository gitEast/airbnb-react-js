const path = require('path');
const CracoLessPlugin = require('craco-less');

const resolve = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],
  webpack: {
    alias: {
      '@': resolve('src'),
      assets: resolve('src/assets'),
      hooks: resolve('src/hooks'),
      router: resolve('src/router'),
      services: resolve('src/services'),
      store: resolve('src/store'),
      utils: resolve('src/utils'),
      views: resolve('src/views'),
      components: resolve('src/components')
    }
  }
};
