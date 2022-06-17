const button = document.querySelector('.tx');
const bgC = document.querySelector('body');
const pTag = document.querySelector('p');

button.addEventListener('click',() =>{
 let theColor ='#';
 theColor+= Math.random().toString(16).slice(2,8);
 bgC.style.backgroundColor = theColor;
 pTag.innerText = theColor;
});