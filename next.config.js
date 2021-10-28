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
});
