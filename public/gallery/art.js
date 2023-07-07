const pics = [
  {
    id: 1,
    title: "Animatronic Pony",
    src: "artwork/2023/mlp/rollertronic.png",
    date: "May 22, 2023",
    desc: "I drew this pony design for a friend! She wanted a pony based on animatronics, themeparks, and videogames but I was only really able to incorporate the animatronic and partial videogame parts hehe..."
  },
  {
    id: 2,
    title: "Sudsy Bathtime",
    src: "artwork/2023/mlp/rubrduckei.png",
    date: "May 26, 2023",
    desc: "This is a pony I designed for myself :3 at first she was a seapony and kind of tropical themed, but then she randomly turned into a soapy themed pony!"
  },
  {
    id: 3,
    title: "Starbonara",
    src: "artwork/2023/mlp/starbonara.png",
    date: "May 22, 2023",
    desc: "This was another type of request from a friend!! Her interests are cooking and stars, so I thought it'd be fun to make a cutiemark related to those things ( •̀ ω •́ )✧"
  },
  {
    id: 4,
    title: "Wedding Bells",
    src: "artwork/2023/mlp/weddingbells.png",
    date: "May 28, 2023",
    desc: "Yes, yet another request for a friend! q(≧▽≦q) Angel themed with doves and a white/lavender purple palette!"
  },
  {
    id: 5,
    title: "Juliek (8:11 fanart)",
    src: "artwork/2023/fanart/juliek.png",
    date: "June 13, 2023",
    desc: "I had started playing 8:11 with a friend of mine, and they commissioned me for some fanart of Juliek!"
  },
  {
    id: 6,
    title: "Dakota (8:11 fanart)",
    src: "artwork/2023/fanart/dakota.png",
    date: "June 14, 2023",
    desc: "More 8:11 fanart hehe..."
  },
  {
    id: 7,
    title: "Morty",
    src: "artwork/2023/fanart/mortymort.png",
    date: "June 20, 2023",
    desc: "A friend of mine loves the creator of 8:11 (dubuk)'s characters, and they yet again commissioned me for art of them! ☆⌒(*＾-゜)v"
  }
];

pics.sort( function ( a, b ) {
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date( b.date ) - new Date( a.date );
} );

const out = document.getElementById( 'artwork' );
let txt = '';
for ( let i = 0; i < pics.length; i++ ) {
  const pic = pics[ i ];
  txt += `
  <div class="pic-wrap">
  <h2 class="pic-title">${pic.title}</h2>
  <div class="pic-src">
  <a href="${pic.src}"><img src="${pic.src}"/></a>
  </div>
  <div class="pic-desc">
  <span class="date">${pic.date}</span>
  <hr />
  <p>${pic.desc}</p>
  </div>
</div>
`;
}
out.innerHTML = txt;
