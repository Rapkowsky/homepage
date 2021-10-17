console.log(
	"Witam wszystkich na pierwszej stronie! Dzięki że wyświetliliście mój kod;) !"
);

let operativeButton = document.querySelector(".action_button");
let mainImage = document.querySelector(".circle");
let darkModeButton = document.querySelector(".dark_mode");
let body = document.querySelector(".body");
let article = document.querySelector("article");
let mainContent = document.querySelector(".main_content");
let table = document.querySelector(".table_section");
let tableHeader = document.querySelector(".header_color");
let tableHeader2 = document.querySelector(".header_color2");
let tableHeader3 = document.querySelector(".header_color3");
let tableHeader4 = document.querySelector(".header_color4");
let themeName = document.querySelector(".theme_name");

darkModeButton.addEventListener("click", () => {
	article.classList.toggle("light_dark");
	body.classList.toggle("dark");
	mainContent.classList.toggle("dark");
	tableHeader.classList.toggle("main_theme");
	tableHeader2.classList.toggle("main_theme");
	tableHeader3.classList.toggle("main_theme");
	tableHeader4.classList.toggle("main_theme");
	table.classList.toggle("light_dark");
	if (body.classList.contains("dark")) {
		themeName.innerHTML = "Jasny";
	} else {
		themeName.innerHTML = "Ciemny";
	}
});

operativeButton.addEventListener("click", () => {
	if (mainImage.classList.contains("visible")) {
		mainImage.classList.remove("visible");
		operativeButton.innerHTML = "Usuń zdjęcie";
	} else {
		mainImage.classList.add("visible");
		operativeButton.innerHTML = "Pokaż zdjęcie";
	}
});
