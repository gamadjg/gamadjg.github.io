export function populateAbout(items, id) {
	const container = document.getElementById(id);

	const sectionTitle = document.createElement("h2");
	sectionTitle.className = "text-4xl font-semibold mb-1";
	sectionTitle.innerHTML = "About";

	const aboutContainer = document.createElement("div");
	aboutContainer.className = "bg-gray-300 rounded p-5";
	for (let index = 0; index < items.length; index++) {
		const aboutItem = document.createElement("p");
		aboutItem.className = "mb-3";
		aboutItem.innerHTML = items[index];
		aboutContainer.append(aboutItem);
	}

	container.append(sectionTitle);
	container.append(aboutContainer);
}
