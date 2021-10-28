{
	const welcome = () => {
		console.log("Witam wszystkich developerów, którzy tu zajrzeli!");
	};

	const onChangeBackgroundClick = () => {
		const bodyElement = document.querySelector(".js-body");
		const articleElement = document.querySelector(".js-article");
		const mainElement = document.querySelector(".js-main");
		const tableElement = document.querySelector(".js-table");
		const tableHeaderElement = document.querySelector(".js-header");
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

	const changeImageVisibility = () => {
		const mainImage = document.querySelector(".js-img");
		const buttonElement = document.querySelector(".js-delete-button");

		if (mainImage.classList.contains("js-visible")) {
			mainImage.classList.remove("js-visible");
			buttonElement.innerHTML = "Usuń zdjęcie";
		} else {
			mainImage.classList.add("js-visible");
			buttonElement.innerHTML = "Pokaż zdjęcie";
		}
	};

	const init = () => {
		const darkModeButtonElement = document.querySelector(".dark-mode");
		const deleteButtonElement = document.querySelector(".js-delete-button");

		darkModeButtonElement.addEventListener("click", onChangeBackgroundClick);
		deleteButtonElement.addEventListener("click", changeImageVisibility);

		welcome();
	};

	init();
}
