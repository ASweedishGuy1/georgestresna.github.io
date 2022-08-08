const sideMeniu=document.querySelector('.sideMeniu');

function displayMeniu(){
    sideMeniu.style.display='block';
}
function hideMeniu(){
    sideMeniu.style.display='none';
}


let scrolling= document.querySelector('.scrolling ul').style.left;
setInterval(function(){
    scrolling=scrolling.slice(0,-1);
    scrolling=Number(scrolling)-0.04;
    if(scrolling < -100) scrolling=0;   
    scrolling=scrolling+"%";
    document.querySelector('.scrolling ul').style.left=scrolling;
}, 10)

function tofb(){
    location.href = 'https://www.facebook.com/media/set/?set=a.103383215362509&type=3';
}

let index =0;
let contactTab=document.querySelector('.contactBox');
function SlideUpMobileContact(){
    if(index == 0)
        {contactTab.style.bottom='10vh'; index=1;}
    else
        {contactTab.style.bottom='0'; index=0;}

    console.log(index);
}