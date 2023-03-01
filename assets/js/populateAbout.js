import { createTitle } from "./helpers.js";

export function populateAbout(items, id) {
	const container = $("#" + id);

	createTitle("About").appendTo(container);

	const aboutContainer = $("<div></div>").addClass("bg-gray-300 rounded p-5");

	for (let index = 0; index < items.length; index++) {
		const aboutItem = $("<div></div>").addClass("mb-3").html(items[index]);
		aboutItem.appendTo(aboutContainer);
	}
	aboutContainer.appendTo(container);
}
