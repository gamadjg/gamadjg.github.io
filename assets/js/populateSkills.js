import { default as data } from "./db.js";

function populateSkills(items, id) {
	let skillsTag = document.getElementById(id);
	for (let i = 0; i < items.length; i++) {
		let h3 = document.createElement("h3");
		h3.innerHTML = items[i].title;
		h3.className = "text-xl font-semibold mb-0";

		let skillList = document.createElement("p");
		skillList.innerHTML = items[i].skillName;

		let skillSection = document.createElement("div");
		skillSection.className = "mb-5";
		skillSection.append(h3);
		skillSection.append(skillList);

		skillsTag.append(skillSection);
	}
}
populateSkills(data.skills, "skills");
