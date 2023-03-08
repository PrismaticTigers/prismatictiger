const pics = [
  {
    id: 1,
    title: "title 1",
    src: "https://picsum.photos/700",
    date: "Feb 13, 2023",
    desc: "this is the description for pic 1"
  },
  {
    id: 2,
    title: "title 2",
    src: "https://picsum.photos/800/600",
    date: "Jan 17, 2023",
    desc: "this is the description for pic 2"
  },
  {
    id: 3,
    title: "title 3",
    src: "https://picsum.photos/900/800",
    date: "Mar 08, 2023",
    desc: "this is the description for pic 3"
  },
  {
    id: 4,
    title: "title 4",
    src: "https://picsum.photos/700",
    date: "Dec 02, 2022",
    desc: "this is the description for pic 4"
  }
]

const out = document.getElementById( 'artwork' )
let txt = ''
for ( let i = 0; i < pics.length; i++ ) {
  const pic = pics[ i ];
  txt += `
  <div class="pic-wrap">
  <h2 class="pic-title">${pic.title}</h2>
  <div class="pic-src">
  <a href="${pic.src}"><img src="${pic.src}"/></a>
  </div>
  <div class="pic-desc">
  <span class="date">${pic.date}</span> <p>${pic.desc}</p>
  </div>
</div>
`
}
out.innerHTML = txt
console.log( txt );
