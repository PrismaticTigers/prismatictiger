var bun = document.querySelector('.bun');
bun.addEventListener('click', () => {
    var run = bun.classList.contains("run");
   if (run) {
    bun.classList.remove("run")
    bun.classList.add("float")
    document.querySelector('#hehe').style.visibility = "hidden";
   } else {
    bun.classList.add("run");
    bun.classList.remove("float");
    document.querySelector('#hehe').style.visibility = "visible";
   }
});