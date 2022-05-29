const button = document.querySelector('button');
const h2El = document.querySelector('h2');
const bgEl =  document.querySelector('section');

 button.addEventListener('click',() =>{
      let color = '#';
      color+= Math.random().toString(16).slice(2,8);
      bgEl.style.backgroundColor = color;
       h2El.innerText =  color;

 })

 const lifeShape = document.querySelector('#yin-yang');

 const bodyBcg = document.querySelector('body');

 const imgs = ['img1','img2', 'img3','img4','img5','img6',];

 lifeShape.addEventListener('click',);

 function changeImage(){
       bodyBcg.style.backgroundColor = 'img1'
 }