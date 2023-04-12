const Image = require("@11ty/eleventy-img");
const moduleName = require("../helpers/moduleName");
const path = require("path");

const sharedImageMetadata = {
  outputDir: "_site/assets/imgs",
  urlPath: "/assets/imgs",
};

const body = async function (src, alt, className, size) {
  if (alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on myImage from: ${src}`);
  }

  let metadata = await Image(src, {
    widths: [600],
    formats: ["svg"],
    ...sharedImageMetadata,

    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);

      return `${name}-${width}w.${format}`;
    },
  });

  let data = metadata.svg[metadata.svg.length - 1];
  return `<img src="${data.url}" width="${size}" height="auto" alt="${alt}" class="${className}" loading="lazy" decoding="async">`;
};

module.exports = {
  name: moduleName(__filename),
  body,
};
