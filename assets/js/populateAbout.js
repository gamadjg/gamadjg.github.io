export function populateAbout(items, id) {
	const container = document.getElementById(id);

	const sectionTitle = document.createElement("h2");
	sectionTitle.className = "text-4xl font-semibold";
	sectionTitle.innerHTML = "About";

	const aboutContainer = document.createElement("div");
	aboutContainer.className = "bg-gray-300 rounded p-5";
	aboutContainer.innerHTML = items;

	container.append(sectionTitle);
	container.append(aboutContainer);
}
