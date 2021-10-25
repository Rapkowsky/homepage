const welcome = () => {
	console.log("Witam wszystkich, którzy tu zajrzeli!");
};
const onChangeBackgroundClick = () => {
	articleElement.classList.toggle("light-dark");
	bodyElement.classList.toggle("dark");
	mainElement.classList.toggle("dark");
	tableHeaderElement.classList.toggle("main-theme");
	tableHeaderElement2.classList.toggle("main-theme");
	tableHeaderElement3.classList.toggle("main-theme");
	tableHeaderElement4.classList.toggle("main-theme");
	tableElement.classList.toggle("light-dark");
	if (bodyElement.classList.contains("dark")) {
		themeElement.innerHTML = "Jasny";
	} else {
		themeElement.innerHTML = "Ciemny";
	}
};

welcome();

let buttonElement = document.querySelector(".box__button");
let mainImage = document.querySelector(".box__circle");
let darkModeButtonElement = document.querySelector(".dark-mode");
let bodyElement = document.querySelector(".body");
let articleElement = document.querySelector("article");
let mainElement = document.querySelector(".main");
let tableElement = document.querySelector(".table-section");
let tableHeaderElement = document.querySelector(".table__cell--header-color");
let tableHeaderElement2 = document.querySelector(".table__cell--header-color2");
let tableHeaderElement3 = document.querySelector(".table__cell--header-color3");
let tableHeaderElement4 = document.querySelector(".table__cell--header-color4");
let themeElement = document.querySelector(".navigation__theme");

darkModeButtonElement.addEventListener("click", onChangeBackgroundClick);

buttonElement.addEventListener("click", () => {
	if (mainImage.classList.contains("visible")) {
		mainImage.classList.remove("visible");
		buttonElement.innerHTML = "Usuń zdjęcie";
	} else {
		mainImage.classList.add("visible");
		buttonElement.innerHTML = "Pokaż zdjęcie";
	}
});
