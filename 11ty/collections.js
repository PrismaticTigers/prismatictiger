const _ = require("lodash");

module.exports = {
  posts: function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/**/*.md");
  },
  pages: function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/pages/**/*.njk");
  },

  // postsGlob: function(collection) { return collection.getFilteredByGlob("src/posts/**/*.md").filter((item) => { return !item.data.draft && item.date <= now; }).reverse() },

  // postsByYear: (collectionApi) => {
  //   return _.chain(collectionApi.getAllSorted())
  //     .groupBy((post) => post.date.getFullYear())
  //     .toPairs()
  //     .value();
  // },
  postsByYear: (collection) => {
    const posts = collection.getFilteredByTag('posts').reverse();
    const years = posts.map(post => post.date.getFullYear());
    const uniqueYears = [...new Set(years)];
  
    const postsByYear = uniqueYears.reduce((prev, year) => {
      const filteredPosts = posts.filter(post => post.date.getFullYear() === year);
  
      return [
        ...prev,
        [year, filteredPosts]
      ]
    }, []);
  
    return postsByYear;
  }
  };
