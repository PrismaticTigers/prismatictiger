const path = require('path');
const dir = require('./dir');

const imageUrlPath = '/assets/favicon/';
const imageUrlPath2 = '/assets/images/backgrounds/';

const imagePaths = {
  input: path.join(dir.input, imageUrlPath),
  output: path.join(dir.output, imageUrlPath),
};
const imagePaths2 = {
  input: path.join(dir.input, imageUrlPath),
  output: path.join(dir.output, imageUrlPath),
};

module.exports = {
  imageUrlPath,
  imagePaths,
  imagePaths2,
  imageUrlPath2
};
