export function populateAbout(items, id) {
	let aboutTag = document.getElementById(id);
	let aboutBody = document.createElement("p");
	aboutBody.innerHTML = items;
	aboutTag.append(aboutBody);
}
