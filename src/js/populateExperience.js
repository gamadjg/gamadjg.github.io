import { createTitle, lineBreak } from "../utils/helpers.js";

export function populateExperience(items, id) {
	const container = $("#" + id);

	// Return created h2 title, append to container
	createTitle("Work Experience").appendTo(container);

	const expList = $("<div></div>").addClass(
		"bg-gray-300 rounded p-5 shadow-lg"
	);

	for (let expIndex = 0; expIndex < items.length; expIndex++) {
		const expItem = $("<div></div>").addClass("mb-5");

		const header = $("<div></div>").addClass(
			"flex items-center justify-between"
		);

		// Title at company
		$("<h3></h3>")
			.addClass("text-xl font-semibold mb-0")
			.text(items[expIndex].title)
			.appendTo(header);

		// Duration at company
		$("<p></p>")
			.addClass("text-l font-semibold")
			.html(items[expIndex].duration)
			.appendTo(header);

		header.appendTo(expItem);

		const body = $("<div></div>");

		// Company name
		$("<em></em>").html(items[expIndex].company).appendTo(body);

		const detailsList = $("<ul></ul>").addClass("p-5");
		for (let index = 0; index < items[expIndex].details.length; index++) {
			// Create list item for work experience details, list item, to detailsList
			$("<li></li>")
				.addClass("list-disc")
				.html(items[expIndex].details[index])
				.appendTo(detailsList);
		}
		detailsList.appendTo(body);

		const tagList = $("<ul></ul>").addClass("flex flex-wrap gap-1");
		for (let tagIndex = 0; tagIndex < items[expIndex].tags.length; tagIndex++) {
			// tags associated with work experience
			$("<li></li>")
				.html(items[expIndex].tags[tagIndex])
				.addClass("bg-teal-400 rounded  pl-1 pr-1 shadow-sm")
				.appendTo(tagList);
		}
		tagList.appendTo(body);
		body.appendTo(expItem);
		if (expIndex != items.length - 1) {
			lineBreak().appendTo(expItem);
		}
		expItem.appendTo(expList);
	}
	expList.appendTo(container);
}
