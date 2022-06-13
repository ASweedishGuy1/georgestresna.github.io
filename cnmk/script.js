//onload si startup cuvantblue
window.onload = function(){
    setTimeout(()=>{
        document.getElementsByTagName("div")[0].classList.add('done');
        document.getElementsByTagName("div")[0].style.zIndex=-2;
    }
    ,700);
    setTimeout(cuvinteblue(),2700);
}; 

//5 elemente li
let cuvinte=document.getElementsByTagName('li');
let inmeniu=document.querySelector('.meniutoggler');
let meniu=document.querySelector('.meniu');
var ulelements = document.querySelector('.parents ul');
var triggerdetalii = document.querySelector('.parents ul').getElementsByTagName('li');
let closing=document.querySelector('.meniu img');


//aduc meniu si scot meniu
inmeniu.addEventListener('click',function(){
    console.log(20);
    meniu.style.zIndex=50;
    meniu.classList.add('meniuin');
    for( let i=0; i<=5 ;i++){
        triggerdetalii[i].classList.add('asdas');
    }

});
closing.addEventListener('click', function(){
    meniu.style.transition='0';
    meniu.classList.remove('meniuin');
    for( let i=0; i<=5 ;i++){
        triggerdetalii[i].classList.remove('asdas');
    }
    meniu.style.zIndex=-3;
    for(let i=0; i<6; i++){
        div[i].style.display='none';
    }
});

// for/while
// function cuvinteblue(){
//     setInterval(function(){
//         schimbare();
//     }, 2000);
// };
var intervalcsz= setInterval(function(){
    schimbare();
}, 2000);
function cuvinteblue(){
    intervalcsz;
}

//swap
let i=0;
let j=0;
function schimbare(){
    if(i==0){
        j++;
        cuvinte[0].style.top='.75em';
        cuvinte[0].style.opacity=1;

        if(j!=1){
            cuvinte[4].style.top='1.5em';
            cuvinte[4].style.opacity=0;
        }
    }
    if(i==1){
        cuvinte[1].style.top='.75em';
        cuvinte[1].style.opacity=1;

        cuvinte[0].style.top='1.5em';
        cuvinte[0].style.opacity=0;

        if(j!=1){
            cuvinte[4].style.top='-.3em';
            cuvinte[3].style.top='-.3em';
        }
    }
    if(i==2){
        cuvinte[2].style.top='.75em';
        cuvinte[2].style.opacity=1;

        cuvinte[1].style.top='1.5em';
        cuvinte[1].style.opacity=0;
    }
    if(i==3){
        cuvinte[3].style.top='.75em';
        cuvinte[3].style.opacity=1;

        cuvinte[2].style.top='1.5em';
        cuvinte[2].style.opacity=0;
    }
    if(i==4){
        cuvinte[4].style.top='.75em';
        cuvinte[4].style.opacity=1;

        cuvinte[3].style.top='1.5em';
        cuvinte[3].style.opacity=0;

        cuvinte[0].style.top='-.3em';
        cuvinte[1].style.top='-.3em';
        cuvinte[2].style.top='-.3em';
    }
    i++;
    if(i==5){
        i=0;
    }
}
//2.5s sa intre propozitia

//meniu animatie cu detalii
let div=document.querySelector('.openmeniu').getElementsByTagName('div');
triggerdetalii[1].addEventListener('click',function(){
    for(let i=0; i<6; i++){
        div[i].style.display='none';
    }
    div[1].style.display='block';
    console.log(div[1].innerHTML);
});
triggerdetalii[0].addEventListener('click',function(){
    for(let i=0; i<6; i++){
        div[i].style.display='none';
    }
    div[0].style.display='block';
});
triggerdetalii[2].addEventListener('click',function(){
    for(let i=0; i<6; i++){
        div[i].style.display='none';
    }
    div[2].style.display='block';
});
triggerdetalii[3].addEventListener('click',function(){
    for(let i=0; i<6; i++){
        div[i].style.display='none';
    }
    div[3].style.display='block';
});
triggerdetalii[4].addEventListener('click',function(){
    for(let i=0; i<6; i++){
        div[i].style.display='none';
    }
    div[4].style.display='block';
});
triggerdetalii[5].addEventListener('click',function(){
    for(let i=0; i<6; i++){
        div[i].style.display='none';
    }
    div[5].style.display='block';
});

// window.addEventListener("resize", function(event)  {
//     console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
//     if(document.body.clientWidth <=540){
//         bradd();
//     }
// })
// //br add
// function bradd() {

//     //Create an input type dynamically.
//        var br = document.createElement("br");
//        var foo = document.getElementById("fooBar");
//        foo.appendChild(br);
//    } 