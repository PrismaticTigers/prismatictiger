const requireDir = require("require-dir");
const collections = require("./collections");
const filters = require("./filters");
const plugins = require("./plugins");
const shortcodes = requireDir("./shortcodes");

module.exports = {
  collections,
  filters,
  plugins,
  shortcodes,
};
