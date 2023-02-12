import { default as data } from "./db.js";

function populateAbout(items, id) {
	let aboutTag = document.getElementById(id);
	let aboutBody = document.createElement("p");
	aboutBody.innerHTML = items[0];

	// let aboutSection = document.createElement("div");
	// aboutSection.className = "mb-5";
	// aboutSection.append(aboutBody);

	aboutTag.append(aboutBody);
}
populateAbout(data.bio.about.text, "about");
