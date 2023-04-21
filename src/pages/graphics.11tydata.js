// // get all the gallery images and display them
// module.exports = function () {
//   const fg = require("fast-glob");
//   const galleryImages = fg.sync(["src/assets/images/icons/*.{jpg,jpeg,png,gif,webp}"]);
  
//   // console.log("gobbling gallery images");
//   // console.log(galleryImages);

//   const gallery = [];
//   // strip the 'src' prefix from every gallery image
//   // (Note: I changed my 11ty Input Folder to 'src')
//   for (let i = 0; i < galleryImages.length; i++) {
//     let img = galleryImages[i];
//     let img2 = img.substring(3); // string replace doesn't work..
//     gallery.push(img2);
//   }
  
//   console.log("finalizing gallery images");
//   console.log(gallery);

//   // return the processed gallery, using the key 'gallery'
//   return {gallery: gallery} ;
// };