/*	CarouFredSel: an infinite, circular jQuery carousel.
	Configuration created by the "Configuration Robot"
	at caroufredsel.frebsite.nl
*/
$(document).ready(function() {
	$("#screenshots").carouFredSel({
		items: {
			visible: 3,
			start: "random",
			width: 400,

		},
		width: 360,
		auto: false,
		prev: {
			button: "#screenshots_prev",
			key: "left"
		},
		next: {
			button: "#screenshots_next",
			key: "right"
		},
		pagination: "#screenshots_pag"
	});
});