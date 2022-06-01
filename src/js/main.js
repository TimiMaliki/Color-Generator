const button = document.querySelector('button');
const h2El = document.querySelector('h2');
const bgEl =  document.querySelector('body');

 button.addEventListener('click',() =>{
      let color = '#';
      color+= Math.random().toString(16).slice(2,8);
      bgEl.style.backgroundColor = color;
       h2El.innerText =  color;

 })

 // Image using javascript
  function btn(){
       

        let image = document.getElementById('image');
        let images = ['pics/img1.jpg','pics/img2.jpg','pics/img3.jpg','pics/img4.jpg','pics/img5.jpg',];

        let random = Math.floor(Math.random() * 5);
        let image = document.getElementById('image');
        let images = ['pics/img1.jpg','pics/img2.jpg','pics/img3.jpg','pics/img4.jpg','pics/img5.jpg',];

        let random = Math.floor(Math.random() * 5);
        image.src = images[random];
  }