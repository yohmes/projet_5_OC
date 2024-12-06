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

let i = 0;

const arrowLeft = document.getElementsByClassName("arrow_left")[0];
const arrowRight = document.getElementsByClassName("arrow_right")[0];
const bannerImage = document.getElementsByClassName("banner-img")[0];
const bannerTagline = document.getElementById("tag_line");
const dotsContainer = document.querySelector(".dots");

function createDots() {
	slides.forEach((slide, index) => {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		if(index === 0) dot.classList.add("dot_selected");
		dotsContainer.appendChild(dot);

	})
}
createDots()

function updateDots() {
	let dots = document.querySelectorAll(".dot")
	dots.forEach((dot,index)=> {
		dot.classList.toggle("dot_selected", index === i)
	})
}

function changeSlide(direction) {
	i = i + direction ;

	if ( i > slides.length -1){
		i = 0;
	};
	
	if (i < 0){
		i = slides.length - 1;
	};

	bannerImage.src = "./assets/images/slideshow/" + slides[i].image;
	bannerTagline.innerHTML = slides[i].tagLine;
	
	updateDots();
}

arrowLeft.addEventListener("click",function(){
	changeSlide(-1)
});
arrowRight.addEventListener("click", function(){
	changeSlide(1)
});