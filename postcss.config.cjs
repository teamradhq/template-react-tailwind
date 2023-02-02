const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    require('stylelint'),
    require('tailwindcss'),
    require('autoprefixer'),
    postcssPresetEnv({
      stage: 2,
      minimumVendorImplementations: 2,
      browsers: 'last 2 versions',
    }),
    require('postcss-reporter')({ clearReportedMessages: true })
  ],
};
