import { createTitle, lineBreak, verticalLine } from "./helpers.js";

export function populateProjects(items, id) {
	const container = $("#" + id);

	createTitle("Projects").appendTo(container);

	const projectList = $("<div></div>").addClass(
		"bg-gray-300 rounded p-5 shadow-lg"
	);

	for (let i = 0; i < items.length; i++) {
		const project = $("<div></div>").addClass("mb-5");
		const header = $("<div></div>").addClass("flex items-center");
		const body = $("<div></div>").addClass("grid grid-cols-4 ml-1 p-5");
		const rightBody = $("<div></div>").addClass(
			"col-start-2 col-span-4 flex items-center"
		);

		// Project Name
		$("<h3></h3>")
			.addClass("text-xl font-semibold mb-0)")
			.html(items[i].projectName)
			.appendTo(header);

		// Vertical line to separate project name and github link
		verticalLine().appendTo(header);

		// Github repo link
		$("<a></a>")
			.attr("href", items[i].repo)
			.addClass("underline hover:font-semibold")
			.html("GitHub")
			.appendTo(header);

		header.appendTo(project);

		if (items[i].image == "") {
			$("<i></i>").addClass("fa-sharp fa-solid fa-image").appendTo(body);
		} else {
			// Project image
			$("<img></img>")
				.attr("src", `./assets/images/project-pics/${items[i].image}`)
				.addClass("w-36")
				.appendTo(body);
		}

		// Project summary
		$("<p></p>").html(items[i].summary).appendTo(rightBody);

		rightBody.appendTo(body);
		body.appendTo(project);

		// Skills unordered list
		const skills = $("<ul></ul>").addClass("flex flex-wrap gap-1 mb-1");

		// Loop, a list item is creted for every item in techStack array and appended to skills
		for (let j = 0; j < items[i].techStack.length; j++) {
			$("<li></li>")
				.addClass("bg-teal-400 rounded pl-1 pr-1 shadow-sm")
				.html(items[i].techStack[j])
				.appendTo(skills);
		}
		skills.appendTo(project);

		// If the current indexed project is the last in the array, do not add a line break.
		if (i != items.length - 1) {
			lineBreak().appendTo(project);
		}
		project.appendTo(projectList);
	}
	projectList.appendTo(container);
}
