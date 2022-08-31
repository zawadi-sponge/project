/*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '23ef58c331msh68bf74e3a440d82p126104jsn83af19d76ef0',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};

fetch('https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));*/
    

   const likeCount = document.querySelector('#likeCount');
   const dislikeCount = document.querySelector('#dislikeCount');

   function count1(){
    likeCount.value = parseInt(likeCount.value) + 1;
   }

   function count2(){
    dislikeCount.value = parseInt(dislikeCount.value) + 1;
   }
   count1()
   count2()

  
const text = document.getElementById('input');
const btn = document.getElementById('submit');
const result = document.getElementById('box');
const btn1 = document.getElementById('cancel');
const btn2 = document.getElementById('delete');



function output () {
    result.innerHTML = text.value;
}

btn.addEventListener('click',output)

function can () {
    text.innerHTML = '';
}

btn1.addEventListener('click',can)

function del () {
       result.innerHTML = '';
}

btn2.addEventListener('click',del)