export function populateEducation(items, id) {
	let container = document.getElementById(id);
	let sectionTitle = document.createElement("h2");
	sectionTitle.className = "text-4xl font-semibold";
	sectionTitle.innerHTML = "Education";
	container.append(sectionTitle);

	for (let i = 0; i < items.length; i++) {
		let title = document.createElement("h3");
		title.className = "text-xl font-semibold mb-0";
		title.innerHTML = items[i].title;

		let duration = document.createElement("p");
		duration.className = "";
		duration.innerHTML = items[i].duration;

		let header = document.createElement("div");
		header.className = "flex items-center justify-between";
		header.append(title);
		header.append(duration);

		let location = document.createElement("p");
		location.className = "";
		location.innerHTML = items[i].location;

		let detailsList = document.createElement("ul");
		for (let x = 0; x < items[i].details.length; x++) {
			let listItem = document.createElement("li");
			listItem.innerHTML = items[i].details[x];
			detailsList.append(listItem);
		}

		let tags = document.createElement("div");
		tags.className = "flex flex-wrap gap-5";
		for (let x = 0; x < items[i].tags.length; x++) {
			let tag = document.createElement("p");
			tag.className = "";
			tag.innerHTML = items[i].tags[x];
			tags.append(tag);
		}

		let body = document.createElement("div");
		body.className = "";
		body.append(location);
		body.append(detailsList);
		body.append(tags);

		let educationContainer = document.createElement("div");
		educationContainer.className = "mb-5";
		educationContainer.append(header);
		educationContainer.append(body);

		container.append(educationContainer);
	}
}
