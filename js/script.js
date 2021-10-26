{
	const welcome = () => {
		console.log("Witam wszystkich, którzy tu zajrzeli!");
	};
	const onChangeBackgroundClick = () => {
		const bodyElement = document.querySelector(".js-body");
		const articleElement = document.querySelector(".js-article");
		const mainElement = document.querySelector(".js-main");
		const tableElement = document.querySelector(".js-table");
		const tableHeaderElement = document.querySelector(".table__cell--header-color");
		const tableHeaderElement2 = document.querySelector(".js-header-2");
		const tableHeaderElement3 = document.querySelector(".js-header-3");
		const tableHeaderElement4 = document.querySelector(".js-header-4");
		const themeElement = document.querySelector(".navigation__theme");

		articleElement.classList.toggle("js-light-dark");
		bodyElement.classList.toggle("js-dark");
		mainElement.classList.toggle("js-dark");
		tableHeaderElement.classList.toggle("js-main-theme");
		tableHeaderElement2.classList.toggle("js-main-theme");
		tableHeaderElement3.classList.toggle("js-main-theme");
		tableHeaderElement4.classList.toggle("js-main-theme");
		tableElement.classList.toggle("js-light-dark");
		if (bodyElement.classList.contains("js-dark")) {
			themeElement.innerHTML = "Jasny";
		} else {
			themeElement.innerHTML = "Ciemny";
		}
	};
	const darkModeButtonElement = document.querySelector(".dark-mode");
	const buttonElement = document.querySelector(".box__button");
	const mainImage = document.querySelector(".box__circle");
	darkModeButtonElement.addEventListener("click", onChangeBackgroundClick);

	buttonElement.addEventListener("click", () => {
		if (mainImage.classList.contains("js-visible")) {
			mainImage.classList.remove("js-visible");
			buttonElement.innerHTML = "Usuń zdjęcie";
		} else {
			mainImage.classList.add("js-visible");
			buttonElement.innerHTML = "Pokaż zdjęcie";
		}
	});

	welcome();
}
