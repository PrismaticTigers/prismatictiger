const Image = require("@11ty/eleventy-img");
const moduleName = require("../helpers/moduleName");
const path = require("path");
const { imagePaths2, imageUrlPath2 } = require('../constants/images');



const body = async function(src, alt='', sizes='100vw') {
  let metadata = await Image(src, {
    widths: [300, 600],
    formats: ["avif", "jpeg"],
    outputDir: imagePaths2.output,
    urlPath: imageUrlPath2,
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
    

    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);

      return `${name}-${width}w.${format}`;
  }}

  // You bet we throw an error on a missing alt (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = {
  name: moduleName(__filename),
  body,
};
