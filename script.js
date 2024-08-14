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

const banner = document.getElementById('banner');
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");

// Création de l'élement flèche gauche
const arrowLeft = document.createElement('div');
arrowLeft.classList.add('arrow', 'arrow_left');
const imgLeft = document.createElement('img');
imgLeft.src = './assets/images/arrow_left.png'; 
imgLeft.alt = 'Flèche gauche';
arrowLeft.appendChild(imgLeft);

// Gestion des clics sur la flèche gauche
arrowLeft.addEventListener("click", function() {
    console.log("left click");
    if (currentIndex === 0) { // vérifie que c'est la premiere diapositive
        updateSlide(slides.length - 1); // Passer à la dernière image si l'index de la diapo actuelle est 0 (donc la première image)
    } else {
        updateSlide(currentIndex - 1); // ou passe à la précédente
    }
});

// Création de l'élement flèche droite
const arrowRight = document.createElement('div');
arrowRight.classList.add('arrow', 'arrow_right');
const imgRight = document.createElement('img');
imgRight.src = './assets/images/arrow_right.png';
imgRight.alt = 'Flèche droite';
arrowRight.appendChild(imgRight);

// Gestion des clics sur la flèche droite
arrowRight.addEventListener("click", function() {
    console.log("right click");
    if (currentIndex === slides.length - 1) {
        updateSlide(0); // Passer à la première image si l'index de la diapo actuelle est le dernier
    } else {
        updateSlide(currentIndex + 1); // ou passe à la suivante
    }
});

// ajout des flèches à la bannière
banner.appendChild(arrowLeft);
banner.appendChild(arrowRight);

// Créer et ajouter les points de navigation
function createDots() {
    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('dots');

    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === currentIndex) {
            dot.classList.add('dot_selected');
        }
        dot.addEventListener('click', () => {
            updateSlide(i);
        });
        dotsContainer.appendChild(dot);
    });

    banner.appendChild(dotsContainer);
}

function updateSlide(newIndex) {
    if (newIndex < 0 || newIndex >= slides.length) { // vérifier si l'index est hors limite pour les slides
        console.error("Index hors limites :", newIndex); 
        return; // stop l'exécution si l'index est invalide
    }

    // Retirer la classe 'dot_selected' du point actuel
    const dots = document.querySelectorAll(".dot"); // récupération des points
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
createDots();
updateSlide(0);