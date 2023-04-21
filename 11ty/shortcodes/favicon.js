const Image = require("@11ty/eleventy-img");
const moduleName = require("../helpers/moduleName");
const siteConfig = require("../../src/_data/siteConfig");
const { imagePaths, imageUrlPath } = require('../constants/images');


/** Returns link tags for the site's favicon. */
const body = async function (src) {
  const props = {
    widths: siteConfig.favicon.widths,
    formats: [siteConfig.favicon.format],
    outputDir: imagePaths.output,
    urlPath: imageUrlPath,
  };

  const metadata = await Image(src, props);

  return metadata[siteConfig.favicon.format]
    .map(image => `<link rel="icon" href="${image.url}" sizes="${image.width}x${image.width}">`)
    .join("\n");
};

module.exports = {
  name: moduleName(__filename),
  body,
};
