import { createTitle } from "./helpers.js";

export function populateSkills(items, id) {
	const container = $("#" + id);

	createTitle("Skills").appendTo(container);

	const skillsContainer = $("<div></div>").addClass(
		"grid sm:grid-cols-2 bg-gray-300 rounded p-5 shadow-lg"
	);

	for (let i = 0; i < items.length; i++) {
		const subContainer = $("<div></div>");

		// Generate skills list section title and append to the subContainer
		$("<h3></h3>")
			.html(items[i].title)
			.addClass("text-xl font-semibold mb-0")
			.appendTo(subContainer);

		// generate a p tag and append the skills array to it, then append to the subContainer
		$("<p></p>").html(items[i].skills).addClass("px-1").appendTo(subContainer);

		subContainer.appendTo(skillsContainer);
	}
	skillsContainer.appendTo(container);
}
