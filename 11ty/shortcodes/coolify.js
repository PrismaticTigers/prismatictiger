const Image = require("@11ty/eleventy-img");
const fs = require("fs");

// Nunjucks Shortcode
const coolify = function (user) {
  return `<div class="bg-blue-100">
<div class="text-blue-900">${user.name}</div>
${user.twitter ? `<div class="bg-amber-400 text-amber-800">@${user.twitter}</div>` : ""}
</div>`;
};

const getSvgContent = function (file) {
  let relativeFilePath = `./src/assets/svgs/${file}.svg`;
  let data = fs.readFileSync(relativeFilePath, function (err, contents) {
    if (err) return err;
    return contents;
  });

  return data.toString("utf8");
};

module.exports = {
  coolify,
  getSvgContent
};
