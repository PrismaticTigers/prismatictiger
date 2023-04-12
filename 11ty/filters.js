const { DateTime } = require( 'luxon' );

const excerpt = (post) => {
const content = post.replace(/(<([^>]+)>)/gi, "");
return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
}

const htmlDateString = ( dateObj ) => {
  // dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  return DateTime.fromJSDate( dateObj, { zone: 'utc' } ).toFormat( 'yyyy-LL-dd' );
}

const readableDate = ( dateObj, format, zone ) => {
  // Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
  return DateTime.fromJSDate( dateObj, { zone: zone || 'utc' } ).toFormat(
    format || 'dd LLLL yyyy' );
}


const min = (...numbers) => {
    return Math.min.apply(null, numbers);
  };
  // Return all the tags used in a collection
  const getAllTags = (collection) => {
    let tagSet = new Set();
    for (let item of collection) {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    }
    return Array.from(tagSet);
  };

  const filterTagList = (tags) => {
    return (tags || []).filter(
      (tag) => ['all', 'pages', 'post', 'posts'].indexOf(tag) === -1
    );
  };
module.exports = {
  readableDate,
  htmlDateString,
  excerpt,
  getAllTags,
  min,
  filterTagList
};