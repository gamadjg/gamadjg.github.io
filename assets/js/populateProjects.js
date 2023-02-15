export function populateProjects(items, id) {
	let container = document.getElementById(id);
	let sectionTitle = document.createElement("h2");
	sectionTitle.className = "text-4xl font-semibold";
	sectionTitle.innerHTML = "Projects";
	container.append(sectionTitle);

	for (let i = 0; i < items.length; i++) {
		let projectName = document.createElement("h3");
		projectName.innerHTML = items[i].projectName;
		projectName.className = "text-xl font-semibold mb-0";

		let repoLink = document.createElement("a");
		repoLink.href = items[i].repo;
		repoLink.innerHTML = "(Github)";

		let header = document.createElement("div");
		header.className = "flex items-center";
		header.append(projectName);
		header.append(repoLink);

		let image = document.createElement("i");
		image.className = "fa-sharp fa-solid fa-image w-6/12";

		let summary = document.createElement("p");
		summary.innerHTML = items[i].summary;
		let rightBody = document.createElement("div");
		let skillList = document.createElement("p");
		skillList.innerHTML = ` Tech: ${items[i].techStack}`;

		rightBody.append(summary);
		rightBody.append(skillList);

		let body = document.createElement("div");
		body.className = "grid grid-cols-2";
		body.append(image);
		body.append(rightBody);

		let project = document.createElement("div");
		project.className = "mb-5";
		project.append(header);
		project.append(body);
		container.append(project);
	}
}
