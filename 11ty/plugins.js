const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const svgContents = require("eleventy-plugin-svg-contents");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const lucideIcons = require("@grimlink/eleventy-plugin-lucide-icons");
const eleventyPluginFeathericons = require('eleventy-plugin-feathericons');

const plugins = [
  {
    body: eleventyNavigationPlugin,
  },
  {
    body: svgContents,
  },
  {
    body: EleventyRenderPlugin,
  },
  {
    body: lucideIcons, 
    options: {
      "class": "custom-class",
      "xmlns": "http://www.w3.org/2000/svg",
      "width": 24,
      "height": 24,
      "viewBox": "0 0 24 24",
      "fill": "none",
      "stroke": "currentColor",
      "stroke-width": 2,
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  },
  {
    body: eleventyPluginFeathericons,
  },
];

module.exports = [...plugins];
