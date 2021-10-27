const withFonts = require("next-fonts");

module.exports = withFonts({
  images: {
    domains: [
      "d2jmaluif1rg1w.cloudfront.net",
      "d2r71m37jt0r0z.cloudfront.net",
      "",
    ],
  },
  i18n: {
    locales: ["en-UK"],
    defaultLocale: "en-UK",
  },
  webpack5: false,
  webpack(config, options) {
    config.node = {
      fs: "empty",
    };
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "url-loader?limit=100000",
        },
        {
          loader: "file-loader",
        },
      ],
    });
    return config;
  },
});
