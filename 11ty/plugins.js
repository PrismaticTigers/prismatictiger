const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const svgContents = require("eleventy-plugin-svg-contents");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const lucideIcons = require("@grimlink/eleventy-plugin-lucide-icons");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

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
    body: syntaxHighlight,
  },
  {
    body: lucideIcons, 
    options: {
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
];

module.exports = [...plugins];
