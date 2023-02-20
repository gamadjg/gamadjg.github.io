export function populateEducation(items, id) {
	const container = document.getElementById(id);
	const sectionTitle = document.createElement("h2");
	sectionTitle.className = "text-4xl font-semibold";
	sectionTitle.innerHTML = "Education";
	container.append(sectionTitle);

	const eduList = document.createElement("div");
	eduList.className = "bg-gray-300 rounded p-5";

	for (let eduIndex = 0; eduIndex < items.length; eduIndex++) {
		const title = document.createElement("h3");
		title.className = "text-xl font-semibold mb-0";
		title.innerHTML = items[eduIndex].title;

		const duration = document.createElement("p");
		duration.className = "";
		duration.innerHTML = items[eduIndex].duration;

		const header = document.createElement("div");
		header.className = "flex items-center justify-between";
		header.append(title);
		header.append(duration);

		const location = document.createElement("p");
		location.className = "";
		location.innerHTML = items[eduIndex].location;

		const details = document.createElement("ul");
		details.className = "list-disc pl-5";
		for (let index = 0; index < items[eduIndex].details.length; index++) {
			const listItem = document.createElement("li");
			listItem.innerHTML = items[eduIndex].details[index];
			details.append(listItem);
		}

		const tags = document.createElement("ul");
		tags.className = "flex flex-wrap";
		for (let index = 0; index < items[eduIndex].tags.length; index++) {
			const tag = document.createElement("li");
			tag.className = "bg-teal-500 text-white rounded p-1 m-1";
			tag.innerHTML = items[eduIndex].tags[index];
			tags.append(tag);
		}

		const body = document.createElement("div");
		body.append(location);
		body.append(details);
		body.append(tags);

		const eduItem = document.createElement("div");
		eduItem.append(header);
		eduItem.append(body);

		eduList.append(eduItem);
	}
	container.append(eduList);
}
