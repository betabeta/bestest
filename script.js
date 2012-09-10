/*	CarouFredSel: an infinite, circular jQuery carousel.
	Configuration created by the "Configuration Robot"
	at caroufredsel.frebsite.nl
*/
$(document).ready(function() {
	$("#screenshots").carouFredSel({
		items: {
			visible: 3,
			start: "random"
		},
		auto: false,
		pagination: "#screenshots_pag"
	});
});