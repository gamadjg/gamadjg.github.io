export function populateExperience(items, id) {
	const container = document.getElementById(id);
	const sectionTitle = document.createElement("h2");
	sectionTitle.className = "text-4xl font-semibold";
	sectionTitle.innerHTML = "Work Experience";
	container.append(sectionTitle);

	const expList = document.createElement("div");
	expList.className = "bg-gray-300 rounded p-5";

	for (let expIndex = 0; expIndex < items.length; expIndex++) {
		const companyName = document.createElement("h3");
		companyName.innerHTML = items[expIndex].company;
		companyName.className = "text-xl font-semibold mb-0";

		const duration = document.createElement("p");
		duration.innerHTML = items[expIndex].duration;
		duration.className = "text-l font-semibold";

		const header = document.createElement("div");
		header.className = "flex items-center justify-between";
		header.append(companyName);
		header.append(duration);

		const title = document.createElement("p");
		title.className = "";
		title.innerHTML = items[expIndex].title;

		const detailsList = document.createElement("ul");
		for (
			let detailIndex = 0;
			detailIndex < items[expIndex].details.length;
			detailIndex++
		) {
			const listItem = document.createElement("li");
			listItem.innerHTML = items[expIndex].details[detailIndex];
			detailsList.append(listItem);
		}

		const tagList = document.createElement("ul");
		tagList.className = "flex flex-wrap gap-5";
		for (let tagIndex = 0; tagIndex < items[expIndex].tags.length; tagIndex++) {
			const listItem = document.createElement("li");
			listItem.innerHTML = items[expIndex].tags[tagIndex];
			listItem.className = "bg-teal-500 rounded text-white p-1";
			tagList.append(listItem);
		}

		const body = document.createElement("div");
		body.append(title);
		body.append(detailsList);
		body.append(tagList);

		const expItem = document.createElement("div");
		expItem.className = "mb-5";
		expItem.append(header);
		expItem.append(body);

		expList.append(expItem);
	}
	container.append(expList);
}
