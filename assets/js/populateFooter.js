export function populateFooter(items, id) {
	const container = document.getElementById(id);

	const footer = document.createElement("div");
	footer.className = "flex justify-between";

	const leftFooter = document.createElement("div");
	leftFooter.className = "flex items-center justify-center";
	leftFooter.innerHTML = "test";
	footer.append(leftFooter);

	const rightFooter = document.createElement("div");
	rightFooter.className = "flex justify-between gap-5";

	for (let i = 0; i < items.length; i++) {
		const image = document.createElement("img");
		image.src = `./assets/images/${items[i].icon}.png`;
		image.alt = `${items[i].icon} thumbnail`;
		image.className = "w-8";

		const link = document.createElement("a");
		link.href = items[i].link;
		link.append(image);
		rightFooter.append(link);
	}
	footer.append(rightFooter);
	container.append(footer);
}
