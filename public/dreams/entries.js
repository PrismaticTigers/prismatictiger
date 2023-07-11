const dreams = [ {
  id: 1,
  title: "Rotted Soil",
  date: "08 Jul, 2023",
  src: "2023/july/",
  link: "rotted-soil-07-08-2023",
  tag: "nightmare"
},
{
  id: 2,
  title: "Unfamiliar Identity",
  date: "30 May, 2021",
  src: "2021/may/",
  link: "unfamiliar-identity-05-30-2021",
  tag: "dream"
} ];

dreams.sort( function ( a, b ) {
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date( b.date ) - new Date( a.date );
} );

const out = document.getElementById( 'dreams' );
let txt = '';
for ( let i = 0; i < dreams.length; i++ ) {
  const dream = dreams[ i ];
  txt += `
  <li><span><time>${dream.date}</time></span>
  <a href="${dream.src}${dream.link}.html">${dream.title}</a></li>
`;
}
out.innerHTML = txt;