let puncte=document.querySelector('.loading').getElementsByTagName('div');
let textspecific=document.querySelector('.content').getElementsByTagName('div');

// basic 
puncte[0].style.background='#ee171f';
textspecific[0].style.display='block';

// automat 
let j=0;
let recurenta=setInterval(() => {
    puncte[j].click();
    j++;
    if(j==5){
        j=0;
    }
}, 3000);

// individual 
puncte[0].addEventListener('click', function(){
    for(let i=0; i<5;i++){
        puncte[i].style.background='white';
    }
    puncte[0].style.background='#ee171f';
    for(let i=0; i<5;i++){
        textspecific[i].style.display='none';
    }
    textspecific[0].style.display='block';
    j=0;
});
puncte[1].addEventListener('click', function(){
    for(let i=0; i<5;i++){
        puncte[i].style.background='white';
    }
    puncte[1].style.background='#ee171f';
    for(let i=0; i<5;i++){
        textspecific[i].style.display='none';
    }
    textspecific[1].style.display='block';
    j=1;
});
puncte[2].addEventListener('click', function(){
    for(let i=0; i<5;i++){
        puncte[i].style.background='white';
    }
    puncte[2].style.background='#ee171f';
    for(let i=0; i<5;i++){
        textspecific[i].style.display='none';
    }
    textspecific[2].style.display='block';
    j=2;
});
puncte[3].addEventListener('click', function(){
    for(let i=0; i<5;i++){
        puncte[i].style.background='white';
    }
    puncte[3].style.background='#ee171f';
    for(let i=0; i<5;i++){
        textspecific[i].style.display='none';
    }
    textspecific[3].style.display='block';
    j=3;
});
puncte[4].addEventListener('click', function(){
    for(let i=0; i<5;i++){
        puncte[i].style.background='white';
    }
    puncte[4].style.background='#ee171f';
    for(let i=0; i<5;i++){
        textspecific[i].style.display='none';
    }
    textspecific[4].style.display='block';
    j=4;
});

