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



let currentIndex = 0;

const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dots = document.querySelectorAll(".dot");

// Gestion des clics sur la flèche gauche
const arrowLeft = document.querySelector("#banner .arrow_left"); // Récupération dans le DOM, const car la valeur ne sera pas réassignée
arrowLeft.addEventListener("click", function() {
    console.log("left click");
    if (currentIndex === 0) { // vérifie que c'est la premiere diapositive
        updateSlide(slides.length - 1); // Passer à la dernière image si l'index de la diapo actuelle est 0 (donc la première image)
    } else {
        updateSlide(currentIndex - 1); // ou passe à la précédente
    }
});

// Gestion des clics sur la flèche droite
const arrowRight = document.querySelector("#banner .arrow_right");
arrowRight.addEventListener("click", function() {
    console.log("right click");
    if (currentIndex === slides.length - 1) {
        updateSlide(0); // Passer à la première image si l'index de la diapo actuelle est le dernier
    } else {
        updateSlide(currentIndex + 1); // ou passe à la suivante
    }
});

function updateSlide(newIndex) {
    if (newIndex < 0 || newIndex >= dots.length) { // vérifier si l'index est hors limite pour les dots
        console.error("Index hors limites :", newIndex); 
        return; // stop l'exécution si l'index est invalide
    }

    // Retirer la classe 'dot_selected' du point actuel
    if (dots[currentIndex]) {
        dots[currentIndex].classList.remove("dot_selected"); 
    }

    // Met à jour l'index de la diapositive actuelle
    currentIndex = newIndex;

    // Ajouter la classe 'dot_selected' au nouveau point & vérifier s'il existe
    if (dots[currentIndex]) {
        dots[currentIndex].classList.add("dot_selected");
    }

    // Met à jour l'image (src) et le texte du carrousel correspondant a l'index actuel
    bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    bannerText.innerHTML = slides[currentIndex].tagLine;
}

// Initialiser le carrousel avec la première diapositive quand la page est chargée
updateSlide(0);