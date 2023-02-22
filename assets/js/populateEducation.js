export function populateEducation(items, id) {
	const container = document.getElementById(id);
	const sectionTitle = document.createElement("h2");
	sectionTitle.className = "text-4xl font-semibold mb-1";
	sectionTitle.innerHTML = "Education";
	container.append(sectionTitle);

	const eduList = document.createElement("div");
	eduList.className = "bg-gray-300 rounded p-5";

	for (let eduIndex = 0; eduIndex < items.length; eduIndex++) {
		const body = document.createElement("div");
		const eduItem = document.createElement("div");
		const header = document.createElement("div");
		header.className = "flex items-center justify-between";

		const leftHeader = document.createElement("div");
		leftHeader.className = "flex items-center";

		const verticalLine = document.createElement("p");
		verticalLine.className = "ml-1 mr-1";
		verticalLine.innerHTML = "|";

		const title = document.createElement("h3");
		title.className = "text-xl font-semibold";
		title.innerHTML = items[eduIndex].title;
		leftHeader.append(title);

		if (items[eduIndex].link != "") {
			leftHeader.append(verticalLine);

			const link = document.createElement("a");
			link.href = items[eduIndex].link;
			link.className = "underline";
			link.innerHTML = "Certificate";
			leftHeader.append(link);
		}
		header.append(leftHeader);

		const duration = document.createElement("p");
		duration.className = "font-semibold";
		duration.innerHTML = items[eduIndex].duration;
		header.append(duration);

		const location = document.createElement("p");
		location.className = "";
		location.innerHTML = items[eduIndex].location;
		body.append(location);

		const tags = document.createElement("ul");
		tags.className = "flex flex-wrap gap-1 mb-1";

		for (let index = 0; index < items[eduIndex].tags.length; index++) {
			const tag = document.createElement("li");
			tag.className = "bg-teal-500 text-white rounded pl-1 pr-1";
			tag.innerHTML = items[eduIndex].tags[index];
			tags.append(tag);
		}
		body.append(tags);

		eduItem.append(header);
		eduItem.append(body);

		if (eduIndex != items.length - 1) {
			const lineBreak = document.createElement("hr");
			lineBreak.className = "mb-5 border-black";
			eduItem.append(lineBreak);
		}

		eduList.append(eduItem);
	}
	container.append(eduList);
}
