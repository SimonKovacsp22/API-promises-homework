const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
		'X-RapidAPI-Key': 'f42fe9b326mshdb9a7c11f7145e5p1678edjsnb1f28a7a526b'
	}
};
let containerNode =document.querySelector('.main-container-floyd')
let containerDaftNode =document.querySelector('.main-container-daft')
let containerMetaNode = document.querySelector('.main-container-metalica')


fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=pinkfloyd', options)
	.then(response => response.json())
	.then(response => {console.log(response)
    return response})
    .then (songs => { 
        for (let index = 0; index < songs.data.length -1 ; index++) {
           const imageFetched = songs.data[index].md5_image
           const titleFetched = songs.data[index].album.title
           containerNode.innerHTML += `<div class="card col-12 col-sm-6 col-md-4 col-lg-3  "  >
           <img src="https://cdns-images.dzcdn.net/images/cover/${imageFetched}/500x500.jpg" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">${titleFetched}</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>`
            
        }
    })
	.catch(err => console.error(err));

    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=daftpunk', options)
	.then(response => response.json())
	.then(response => {console.log(response)
    return response})
    .then (songs => { 
        for (let index = 0; index < songs.data.length -1 ; index++) {
           const imageFetched = songs.data[index].md5_image
           const titleFetched = songs.data[index].album.title
           containerDaftNode.innerHTML += `<div class="card col-12 col-sm-6 col-md-4 col-lg-3  "  >
           <img src="https://cdns-images.dzcdn.net/images/cover/${imageFetched}/500x500.jpg" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">${titleFetched}</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>`
            
        }
    })
	.catch(err => console.error(err));

    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=metalica', options)
	.then(response => response.json())
	.then(response => {console.log(response)
    return response})
    .then (songs => { 
        for (let index = 0; index < songs.data.length -1 ; index++) {
           const imageFetched = songs.data[index].md5_image
           const titleFetched = songs.data[index].album.title
           containerMetaNode.innerHTML += `<div class="card col-12 col-sm-6 col-md-4 col-lg-3  "  >
           <img src="https://cdns-images.dzcdn.net/images/cover/${imageFetched}/500x500.jpg" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">${titleFetched}</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>`
            
        }
    })
	.catch(err => console.error(err));

   