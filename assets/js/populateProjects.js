export function populateProjects(items, id) {
	let aboutTag = document.getElementById(id);
	let aboutBody = document.createElement("p");
	aboutBody.innerHTML = items;

	// let aboutSection = document.createElement("div");
	// aboutSection.className = "mb-5";
	// aboutSection.append(aboutBody);

	aboutTag.append(aboutBody);
}
