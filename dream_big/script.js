let cloud=document.getElementsByTagName('img')[2];
let card=document.getElementsByTagName('div')[0];
let cartbtn=document.getElementsByTagName('p')[4];
let sizes=document.getElementsByTagName('div')[3];

card.addEventListener('mouseover',function(){
    cartbtn.style.transitionDelay=".8s";
});

card.addEventListener('mouseleave',function(){
    cloud.style.transitionDuration="1.3s";
    cloud.style.transitionDelay="0s";

    cartbtn.style.transitionDelay="0s";

    sizes.style.transitionDelay="0s";
    sizes.style.transitionDuration=".5s";
});