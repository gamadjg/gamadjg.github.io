export function populateAbout(items, id) {
	let sectionTitle = document.createElement("h2");
	sectionTitle.className = "text-4xl font-semibold";
	sectionTitle.innerHTML = "About";

	let body = document.createElement("p");
	body.innerHTML = items;

	let container = document.getElementById(id);
	container.append(sectionTitle);
	container.append(body);
}
