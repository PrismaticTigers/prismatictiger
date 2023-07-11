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
  title: "Test Entry",
  date: "10 Jul, 2023",
  src: "2023/july/",
  link: "blank-07-10-2023",
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