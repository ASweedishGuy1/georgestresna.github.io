document.body.style.zoom = 1.0;
// mouse pos object
let mouse = {
    x: 0,
    y: 0
  };
  
  // sets mouse position (range from 0 to 1)
  const onMouseMove = (e) => {
    mouse.x = e.x / window.innerWidth;
    mouse.y = e.y / window.innerHeight;
    // console.log(mouse.x +" and "+mouse.y);
    setGridPosition();
  };
  
  // sets the position of the grid relative to mouse pos
  const setGridPosition = () => {
    const grid = document.querySelector(".grid");
  
    const offsetHeight = (window.innerWidth / grid.offsetWidth) * 100;
    const offsetWidth = (window.innerHeight / grid.offsetHeight) * 100;
    // fiind la jumatate ratia window/element, offset<dimension> imi va spune care este 
    // maximul pe care il poate avea tranzitia pana la margine, iar offset<dim>*mouse.dim va fi
    // partea care chiar este executata, iar mouse.dim este intre 0 si 1

    // console.log((offsetWidth * mouse.x) + " and " + (offsetHeight * mouse.y));
  
    grid.style.transform = `
    translate(-${offsetWidth * mouse.x}%,-${offsetHeight * mouse.y}%)
    `;

  };
  
  // listener for mouse movement
window.addEventListener("mousemove", onMouseMove);

const img=document.querySelectorAll("img");
const text=document.querySelectorAll(".gridtext p");
const cover=document.querySelector(".cover");
for(let i=0; i<img.length; i++){
  img[i].onmouseenter=()=>{
    for(let j=0; j<img.length; j++) img[j].style.opacity="0.5";
    img[i].style.opacity="1";
    img[i].nextSibling.style.display="block";
    text[i].style.display="block";
    console.log(22);
  };
  img[i].onmouseleave=()=>{
    for(let j=0; j<img.length; j++) img[j].style.opacity="1";
    img[i].nextSibling.style.display="none";
    text[i].style.display="none";
  }
}
$(".aux p.journal").click(()=>{
  $(".journalex").show();
});
$(".scroll p:first-of-type").click(()=>{
  $(".journalex").hide();
});
let counter=0;
$(".aux p.menu").click(()=>{
  if(!counter) {
    $(".menuex").show();
    $(".aux p.menu").html("Close");
    counter=1;
  }
  else {
    $(".menuex").hide();
    $(".aux p.menu").html("Menu");
    counter=0;
  }
});