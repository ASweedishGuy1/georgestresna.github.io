//video slowDown
document.querySelector('video').playbackRate = 0.7;

//selectare elemente hover
let coloana1=document.querySelector('div.grammy');
let coloana3=document.querySelector('div.toprated');
let coloana2=document.querySelector('div.music');
//hovercol1
coloana1.addEventListener('mouseover',function(){
    document.querySelector('div.grammy h1').classList.add("hovermove");
});
coloana1.addEventListener('mouseout',function(){
    document.querySelector('div.grammy h1').classList.remove("hovermove");
});
//hovercol3
coloana3.addEventListener('mouseover',function(){
    document.querySelector('div.toprated h1').classList.add("hovermove");
});
coloana3.addEventListener('mouseout',function(){
    document.querySelector('div.toprated h1').classList.remove("hovermove");
});
//greyscreen
let grayscreen=document.querySelector(".greyscreen");


//seeDiscog pagina urmatoare
let nextpage=document.querySelector('.discog i');
let link=document.querySelector('.discog a');
console.log(nextpage);
nextpage.addEventListener('click',function(){
    grayscreen.classList.add("endingopac");
    grayscreen.classList.add("ending");
    setTimeout(function(){
        link.click();
    }, 2000);
    console.log(22);
});
