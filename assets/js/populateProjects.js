export function populateProjects(items, id) {
	const container = document.getElementById(id);

	const sectionTitle = document.createElement("h2");
	sectionTitle.className = "text-4xl font-semibold mb-1";
	sectionTitle.innerHTML = "Projects";

	const projectList = document.createElement("div");
	projectList.className = "bg-gray-300 rounded p-5";

	for (let i = 0; i < items.length; i++) {
		const projectName = document.createElement("h3");
		projectName.innerHTML = items[i].projectName;
		projectName.className = "text-xl font-semibold mb-0";

		const verticalLine = document.createElement("p");
		verticalLine.className = "ml-1 mr-1";
		verticalLine.innerHTML = "|";

		const repoLink = document.createElement("a");
		repoLink.href = items[i].repo;
		repoLink.className = "underline hover:font-semibold";
		repoLink.innerHTML = "Github";

		const header = document.createElement("div");
		header.className = "flex items-center";

		const image = document.createElement("i");
		image.className = "fa-sharp fa-solid fa-image flex self-center";

		const summary = document.createElement("p");
		summary.innerHTML = items[i].summary;

		const skills = document.createElement("ul");
		skills.className = "flex flex-wrap gap-1 mb-1";
		for (let j = 0; j < items[i].techStack.length; j++) {
			const skill = document.createElement("li");
			skill.className = "bg-teal-500 text-white rounded pl-1 pr-1";
			skill.innerHTML = items[i].techStack[j];
			skills.append(skill);
		}

		const rightBody = document.createElement("div");
		rightBody.className = "col-start-2 col-span-4";

		const body = document.createElement("div");
		body.className = "grid grid-cols-4 ml-1";

		const project = document.createElement("div");
		// project.className = "mb-5";

		rightBody.append(summary);

		body.append(image);
		body.append(rightBody);

		header.append(projectName);
		header.append(verticalLine);
		header.append(repoLink);

		project.append(header);
		project.append(body);
		project.append(skills);

		if (i != items.length - 1) {
			const lineBreak = document.createElement("hr");
			lineBreak.className = "mb-5 border-black";
			project.append(lineBreak);
		}

		projectList.append(project);
	}

	container.append(sectionTitle);
	container.append(projectList);
}
