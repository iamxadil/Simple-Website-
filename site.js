//Selectors

const bars = document.querySelector('.ham');
const nav = document.querySelector('.Humb');
const hide = document.querySelector('.times');


//events 

bars.addEventListener('click', showNav); 
hide.addEventListener('click', hideNav);



//functions 
function showNav(){
    nav.classList.add('show');
    nav.classList.remove('hide');
    
    
}


function hideNav(){
    nav.classList.add('hide');
    nav.classList.remove('show');

}


