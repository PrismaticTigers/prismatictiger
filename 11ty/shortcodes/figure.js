const Image = require("@11ty/eleventy-img");
const moduleName = require("../helpers/moduleName");
const path = require("path");

const sharedImageMetadata = {
  outputDir: "_site/assets/imgs",
  urlPath: "/assets/imgs",
};

const body = async function (
  src,
  alt,
  caption,
  imageClass,
  captionClass,
  attrs = {},
  widths = [100, 400, 800, 1280],
  formats = ["webp", "jpeg"],
  sizes = "100vw"
) {
  let metadata = await Image(src, {
    widths,
    formats,
    ...sharedImageMetadata,

    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);

      return `${name}-${width}w.${format}`;
    },
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
    ...attrs,
  };

  function wrapFigure(output, caption) {
    return `<figure class="image ${imageClass}">${output}<figcaption class="${captionClass}">${caption}</figcaption></figure>`;
  }

  const pictureOutput = Image.generateHTML(metadata, imageAttributes);

  return caption ? wrapFigure(pictureOutput, caption) : pictureOutput;
};
module.exports = {
  name: moduleName(__filename),
  body,
};
