import { createTitle, lineBreak, verticalLine } from "../utils/helpers.js";

export function populateEducation(items, id) {
	const container = $("#" + id);

	createTitle("Education").appendTo(container);

	const eduList = $("<div></div>").addClass(
		"bg-gray-300 rounded p-5 shadow-lg"
	);

	for (let eduIndex = 0; eduIndex < items.length; eduIndex++) {
		const body = $("<div></div>");
		const eduItem = $("<div></div>");
		const header = $("<div></div>").addClass(
			"flex items-center justify-between"
		);
		const leftHeader = $("<div></div>").addClass("flex items-center");

		// Title for each education item
		$("<h3></h3>")
			.addClass("text-xl font-semibold")
			.html(items[eduIndex].title)
			.appendTo(leftHeader);

		// If there are links in the education item, create a divider and list them
		if (items[eduIndex].link != "") {
			verticalLine().appendTo(leftHeader);
			$("<a></a>")
				.attr("href", items[eduIndex].link)
				.addClass("underline")
				.html("Certificate")
				.appendTo(leftHeader);
		}
		leftHeader.appendTo(header);

		// Duration
		$("<p></p>")
			.addClass("font-semibold")
			.html(items[eduIndex].duration)
			.appendTo(header);

		// Location
		$("<em></em>").addClass("").html(items[eduIndex].location).appendTo(body);

		// Image
		$("<img></img>")
			.attr("src", `src/assets/images/${items[eduIndex].image}`)
			.addClass("w-28 py-5")
			.appendTo(body);

		// List out tags related to each education item
		const tags = $("<ul></ul>").addClass("flex flex-wrap gap-1");
		for (let index = 0; index < items[eduIndex].tags.length; index++) {
			$("<li></li>")
				.addClass("bg-teal-400 rounded pl-1 pr-1 shadow-sm")
				.html(items[eduIndex].tags[index])
				.appendTo(tags);
		}

		tags.appendTo(body);
		header.appendTo(eduItem);
		body.appendTo(eduItem);

		if (eduIndex != items.length - 1) {
			lineBreak().appendTo(eduItem);
		}

		eduItem.appendTo(eduList);
	}
	eduList.appendTo(container);
}
