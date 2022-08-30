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

    const likeCount = getElementById('countLikes')
    console.log(likeCount)

    function likes(data){
        
    }
