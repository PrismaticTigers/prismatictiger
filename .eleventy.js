const { collections, plugins, filters, shortcodes } = require("./11ty");
const {coolify, getSvgContent} = require("./11ty/shortcodes/coolify")
const dir = require("./11ty/constants/dir");

const TEMPLATE_ENGINE = "njk";

module.exports = function (eleventyConfig) {

  eleventyConfig.addShortcode('svg', getSvgContent);


  // --- Watch targets

  eleventyConfig.addWatchTarget(`./src/assets/css/`);

  // --- Passthrough copies

  eleventyConfig.addPassthroughCopy("./src/assets/images/backgrounds");
  eleventyConfig.addPassthroughCopy("./src/assets/frontpage");
  eleventyConfig.addPassthroughCopy({"./src/assets/favicon": "/"});
  eleventyConfig.addPassthroughCopy({"./src/assets/svgs": "assets/svgs"});
  eleventyConfig.addPassthroughCopy({"./src/scripts": "scripts"});

  // --- Collections

  Object.keys(collections).forEach(collectionName => {
    eleventyConfig.addCollection(collectionName, collections[collectionName]);
  });

  // --- Plugins

  Object.values(plugins).forEach(({ body, options }) => {
    eleventyConfig.addPlugin(body, options && options);
  });

  // --- Filters

  Object.keys(filters).forEach(filter => {
    eleventyConfig.addFilter(filter, filters[filter]);
  });

  eleventyConfig.addFilter("toJson", JSON.stringify);
  eleventyConfig.addFilter("fromJson", JSON.parse);
  eleventyConfig.addFilter("keys", Object.keys);
  eleventyConfig.addFilter("values", Object.values);
  eleventyConfig.addFilter("entries", Object.entries);

  // --- Shortcodes

  Object.values(shortcodes).forEach(({ name, body }) => {
    eleventyConfig.addShortcode(name, body);
  });

  eleventyConfig.setDataFileSuffixes([".11tydata"]);

  return {
    dir,
    dataTemplateEngine: TEMPLATE_ENGINE,
    markdownTemplateEngine: TEMPLATE_ENGINE,
    htmlTemplateEngine: TEMPLATE_ENGINE,
    templateFormats: ["html", "md", TEMPLATE_ENGINE],
  };
};
