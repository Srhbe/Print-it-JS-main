const slides = [
	
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



// Gestion des clics sur la flèche gauche, récupération dans le DOM, const car la valeur ne sera pas réassignée
const arrowLeft = document.querySelector("#banner .arrow_left");
arrowLeft.addEventListener("click", function() {
    console.log("left click");
});

// Gestion des clics sur la flèche droite
const arrowRight = document.querySelector("#banner .arrow_right");
arrowRight.addEventListener("click", function() {
    console.log("right click");
})
