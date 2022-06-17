const button = document.querySelector('.tx');
const bgC = document.querySelector('body');
const pTag = document.querySelector('p');

button.addEventListener('click',() =>{
 let theColor ='#';
 theColor+= Math.random().toString(16).slice(2,8);
 bgC.style.backgroundColor = theColor;
 pTag.innerText = theColor;
});
 // Image using javascript
 function btn(){
       

    let image = document.getElementById('image');
    let images = ['pics/img1.jpg','pics/img2.jpg','pics/img3.jpg','pics/img4.jpg','pics/img5.jpg',];

    let random = Math.floor(Math.random() * 5);
    image.src = images[random];
}