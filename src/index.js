let ramenImg = document.createElement('img')
let ramenDiv = document.getElementById('ramen-menu')
let ramenName = document.querySelector('.name')
let ramenRest = document.querySelector('.restaurant')
let ramenForm = document.getElementById('new-ramen')
let ramenRating = document.getElementById('ramen-detail')


fetch(`http://localhost:3000/ramens/`)
.then(resp => resp.json())
.then(data => console.log(data))


//fetch
// fetch('http://localhost:3000/ramens/:id')
// .then(resp => resp.json())
// .then(data => console.log(data))



function ramenInfo(){
ramenDiv.append(ramenImg, ramenName, ramenRating)
}

ramenInfo();

function ramenDetails(ramen){
ramenImg.src = ramen.image
ramenName.textContent = ramen.name
ramenDetails()
}

ramenForm.addEventListener("click", function(event){
    let p = document.createElement("p")
   ramenForm.append(p)
event.preventDefault()
})
