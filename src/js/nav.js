export function populateNav(items, id) {
	const container = $("<div></div>").addClass(
		"w-64 p-5 h-full bg-gray-300 rounded fixed hidden lg:block"
	);

	$("<img></img>")
		.attr("src", "src/assets/images/headshot_square.jpg")
		.attr("alt", "David Gama Headshot")
		.addClass("rounded-full w-48 m-auto")
		.appendTo(container);

	$("<p></p>")
		.addClass("text-3xl font-medium m-auto flex justify-center p-3")
		.html("David Gama")
		.appendTo(container);

	const navList = $("<ul></ul>").addClass("flex flex-col items-center p-3");
	items.forEach((item) => {
		const listItem = $("<li></li>");
		let hrefNav = item;
		if (item == "about") {
			hrefNav = "header";
		}
		$("<a></a>")
			.addClass("navLink m-auto underline hover:underline hover:font-semibold")
			.attr("href", `#${hrefNav}`)
			.html(item.charAt(0).toUpperCase() + item.slice(1))
			.appendTo(listItem);
		listItem.appendTo(navList);
	});
	navList.appendTo(container);

	container.appendTo("#nav");
}
