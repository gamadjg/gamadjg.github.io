export function populateSkills(items, id) {
	let container = document.getElementById(id);
	let sectionTitle = document.createElement("h2");
	sectionTitle.className = "text-4xl font-semibold";
	sectionTitle.innerHTML = "Skills";
	container.append(sectionTitle);

	let skillsContainer = document.createElement("div");
	skillsContainer.className = "mb-5 grid grid-cols-2";

	for (let i = 0; i < items.length; i++) {
		let skillsTitle = document.createElement("h3");
		skillsTitle.innerHTML = items[i].title;
		skillsTitle.className = "text-xl font-semibold mb-0";

		let skillsList = document.createElement("p");
		skillsList.innerHTML = items[i].skillName;

		let subContainer = document.createElement("div");

		subContainer.append(skillsTitle);
		subContainer.append(skillsList);
		skillsContainer.append(subContainer);
	}
	container.append(skillsContainer);
}
