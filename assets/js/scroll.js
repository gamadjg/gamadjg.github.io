let links = document.querySelectorAll(".navLink");

links.forEach((anchor) => {
	anchor.addEventListener("click", function (event) {
		event.preventDefault();
		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});
