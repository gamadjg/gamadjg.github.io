export function populateFooter(items, id) {
	const container = document.getElementById(id);

	const footer = document.createElement("div");
	footer.className = "flex justify-between bg-gray-300 rounded p-5";

	const leftFooter = document.createElement("div");
	leftFooter.className = "flex items-center justify-center";
	leftFooter.innerHTML = `Contact: ${items.contact.email}`;

	const rightFooter = document.createElement("div");
	rightFooter.className = "flex justify-between gap-5";
	for (let i = 0; i < items.profiles.length; i++) {
		const image = document.createElement("img");
		image.src = `src/assets/images/${items.profiles[i].image}`;
		image.alt = `${items.profiles[i].icon} thumbnail`;
		image.className = "w-8";

		const link = document.createElement("a");
		link.href = items.profiles[i].link;
		link.append(image);
		rightFooter.append(link);
	}

	footer.append(leftFooter);
	footer.append(rightFooter);
	container.append(footer);
}
