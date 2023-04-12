module.exports = {
  posts: function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/**/*.md");
  },
  pages: function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/pages/**/*.liquid");
  },
};
