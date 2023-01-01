// this references the file that holds the webring data
const y1y4g8 = `https://prismatictigers.neocities.org/webring.json`;


const h8g0z4 = document.createElement("template");

// this is our webring styling
h8g0z4.innerHTML = `
<style>
.y1y4g8-webring {
  background-image:var(--y1y4g8-background-image);
  background-color:var(--y1y4g8-background-color);
  border:var(--y1y4g8-border);
  padding:var(--y1y4g8-padding); 
  max-width:var(--y1y4g8-width);
  height:var(--y1y4g8-height);
  border-radius:var(--y1y4g8-border-radius);
}
.y1y4g8-myUniqueClass .title {
  font-family:var(--y1y4g8-title-font);
  font-size:var(--y1y4g8-title-size);
  line-height:var(--y1y4g8-title-height);
  letter-spacing:var(--y1y4g8-title-spacing);
  color:var(--y1y4g8-title-color);
  margin:var(--y1y4g8-title-margin);
  text-align:var(--y1y4g8-title-align);
  font-weight:var(--y1y4g8-title-weight);
  
}
.y1y4g8-myUniqueClass {
font-family:var(--y1y4g8-text-family);
font-size:var(--y1y4g8-text-size);
line-height:var(--y1y4g8-text-height);
color:var(--y1y4g8-text-color);
text-align:var(--y1y4g8-text-align);
  letter-spacing:var(--y1y4g8-text-spacing);
}
.y1y4g8-myUniqueClass a {
color:var(--y1y4g8-link-color);
text-decoration:var(--y1y4g8-link-decoration);
font-size:var(--y1y4g8-link-size);
}
.y1y4g8-myUniqueClass p {
margin:var(--y1y4g8-text-margin);
}
.icon {
  font-size: 100px;
}
</style>

<div class="y1y4g8-webring">
  <div class="y1y4g8-myUniqueClass">

  </div>
</div>`;

// not really sure about this stuff, but don't delete it!
class h7p1k8 extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(h8g0z4.content.cloneNode(true));

    // e.g. https://css-tricks.com
    const thisSite = this.getAttribute("site"); 
    
    fetch(y1y4g8)
      .then((response) => response.json())
      .then((sites) => {
        // Finds the current site in the data
        const matchedSiteIndex = sites.findIndex(
          (site) => site.url === thisSite
        );
        
        const matchedSite = sites[matchedSiteIndex];

        let prevSiteIndex = matchedSiteIndex - 1;
        if (prevSiteIndex === -1) prevSiteIndex = sites.length - 1;

        let nextSiteIndex = matchedSiteIndex + 1;
        if (nextSiteIndex > sites.length - 1) nextSiteIndex = 0;

        const randomSiteIndex = this.getRandomInt(0, sites.length - 1);


        // In this variable, put the HTML that you want your webring "badge" to use.
        // keep the link 'href' values the same, but change the text!
        const cp = `
          <div class="title">Webring Title</div>
          <div class="extratext">
          <p>
            Here is some text!<br><br>
            This site is: <strong><a href="${matchedSite.url}"> ${matchedSite.name} </a></strong><br><br>
            This site is owned by: ${matchedSite.name}
          </p>
          </div>
          <p class="nav">
            
            <a href="${sites[nextSiteIndex].url}">[Next]</a>
            <a href="${sites[prevSiteIndex].url}">[Previous]</a>
            <a href="${sites[randomSiteIndex].url}">[Random]</a>
            <a href="https://prismatictigers.neocities.org/members.html">[Members]</a>
          </p>
        `;

        this.shadowRoot
          .querySelector(".y1y4g8-myUniqueClass")
          .insertAdjacentHTML("afterbegin", cp);
      });
  }

  // this calculates a random number
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

var rootVars = `:root {
  /* background! */
  --y1y4g8-background-image:url('https://sadgrl.online/images/bgs/tile/sparklebackground.gif');
  --y1y4g8-background-color:#000;
  --y1y4g8-border:5px solid aqua;
  --y1y4g8-border-radius:5px;
    /* sizing */
  --y1y4g8-width:250px;
  --y1y4g8-height:250px;
  --y1y4g8-padding:1rem;
  

  /* title! */
  --y1y4g8-title-font:'Arial';
  --y1y4g8-title-color:aqua;
  --y1y4g8-title-size:35px;
  --y1y4g8-title-align:center;
  --y1y4g8-title-margin:10px;
  /* line height & letter spacing */
  --y1y4g8-title-height:25px;
  --y1y4g8-title-spacing:3px;
  --y1y4g8-title-weight:bold;


  /* text! */
  --y1y4g8-text-family:sans-serif;
  --y1y4g8-text-color:lightblue;
  --y1y4g8-text-size:14px;
  --y1y4g8-text-align:center;
  --y1y4g8-text-spacing:1px;
  --y1y4g8-text-height:1em;

  /* links! */
  --y1y4g8-link-family:sans-serif;
  --y1y4g8-link-color:limegreen;
  --y1y4g8-link-decoration:none;
  --y1y4g8-link-weight:bold;
  --y1y4g8-link-size:13px;
}`

window.onload = function() {
var p = document.getElementsByTagName("body")[0];
var style = document.createElement('style');
var css = document.createTextNode(rootVars);
style.appendChild(css);
p.appendChild(style);

}

// whatever 'customElement' you define MUST be unique
// do not use the name 'webring-css' or you will conflict with other webrings
window.customElements.define("ring-712", h7p1k8);