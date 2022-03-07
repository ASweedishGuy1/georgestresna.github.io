let logo=document.getElementsByTagName('img')[1];
let loadingscreen=document.getElementsByTagName('div')[3];
let link=document.getElementsByTagName('a')[0];

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

window.addEventListener("scroll", () => {
  loadingscreen.classList.add("scrolled");
  setTimeout(function(){
      link.click();
      console.log("clicked");
  },1000)
}, {
    once: true
}
);
