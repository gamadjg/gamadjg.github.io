export function populateProfiles(items, id) {
	let container = document.getElementById(id);

	for (let i = 0; i < items.length; i++) {
		let image = document.createElement("i");
		// image.className = `${items[i].icon}`;

		let link = document.createElement("a");
		link.href = items[i].link;
		link.append(image);

		container.append(link);
	}
}
