const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '23ef58c331msh68bf74e3a440d82p126104jsn83af19d76ef0',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};

fetch('https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    
function setNewImage() {
  document.getElementById('uk').src ="/Images/image 2 (1).jpg";

}

function setOldImage() {
    document.getElementById('uk').src ="/Images/image 1 (1).jpg";
}


   const likeCount = document.querySelector('#likeCount');
   const dislikeCount = document.querySelector('#dislikeCount');

   function count1(){
    likeCount.value = parseInt(likeCount.value) + 1;
   }

   function count2(){
    dislikeCount.value = parseInt(dislikeCount.value) + 1;
   }
  

   let opacity = 0;
   let timer = 0;

   function fadeIn() {
    timer = setInterval(show,200)
  }
  
  function show() {
    let box = document.getElementById('box');

    opacity = Number(window.getComputedStyle(box).getPropertyValue("opacity"));

    if(opacity <= 0){
        opacity = opacity + 0.4;
        box.style.opacity = opacity;
    }
    else{clearInterval(timer)};
  }

  function fadeOut() {
    timer = setInterval(hide,20)
  }

  function hide(){
    let box = document.getElementById('box');

    opacity = Number(window.getComputedStyle(box).getPropertyValue("opacity"));

    if(opacity > 0){
        opacity = opacity - 0.1;
        box.style.opacity = opacity;
    }
    else{clearInterval(timer)};
  }
  

const text = document.getElementById('input');
const btn = document.getElementById('submit');
const result = document.getElementById('box');
const btn1 = document.getElementById('cancel');
const btn2 = document.getElementById('delete');
const btn3 = document.getElementById('sub')



function output () {
    result.innerHTML = text.value;
}

btn.addEventListener('click',output)

function can () {
    text.innerHTML = '';
}

btn1.addEventListener('click',can)

function sub () {
    alert("You have successfully subscribred to the webpage");
}

btn3.addEventListener('click',sub)

function del () {
           result.innerHTML = '';
}

btn2.addEventListener('click',del)

document.addEventListener('DOMContentLoaded', initialization);
