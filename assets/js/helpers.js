export const createTitle = (title) => {
	const sectionTitle = $("<h2></h2>")
		.addClass("text-4xl font-semibold mb-1")
		.html(title);
	return sectionTitle;
};

export const verticalLine = () => {
	return $("<p></p>").addClass("ml-1 mr-1").html(" | ");
};

export const lineBreak = () => {
	return $("<hr></hr>").addClass("mb-5 border-black mt-1");
};
