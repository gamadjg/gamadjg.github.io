export function populateExperience(items, id) {
	let container = document.getElementById(id);
	let sectionTitle = document.createElement("h2");
	sectionTitle.className = "text-4xl font-semibold";
	sectionTitle.innerHTML = "Work Experience";
	container.append(sectionTitle);

	for (let i = 0; i < items.length; i++) {
		let companyName = document.createElement("h3");
		companyName.innerHTML = items[i].company;
		companyName.className = "text-xl font-semibold mb-0";

		let duration = document.createElement("p");
		duration.innerHTML = items[i].duration;
		duration.className = "text-l font-semibold";

		let header = document.createElement("div");
		header.className = "flex items-center justify-between";
		header.append(companyName);
		header.append(duration);

		let title = document.createElement("p");
		title.className = "";

		let detailsList = document.createElement("ul");
		for (let x = 0; x < items[i].details.length; x++) {
			let listItem = document.createElement("li");
			listItem.innerHTML = items[i].details[x];
			detailsList.append(listItem);
		}

		// detailsList.innerHTML = items[i].details.map(x =>{
		//     "<li>"
		// })

		let tags = document.createElement("p");
		tags.className = "";
		tags.innerHTML = items[i].tags;

		let body = document.createElement("div");
		body.append(title);
		body.append(detailsList);
		body.append(tags);

		let experienceContainer = document.createElement("div");
		experienceContainer.className = "mb-5";
		experienceContainer.append(header);
		experienceContainer.append(body);

		container.append(experienceContainer);
	}
}