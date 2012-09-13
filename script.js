/*	CarouFredSel: an infinite, circular jQuery carousel.
	Configuration created by the "Configuration Robot"
	at caroufredsel.frebsite.nl
*/
$(document).ready(function() {
	$("#screenshots").carouFredSel({
		items: {
			visible: 2,
			start: "random",
			width: 415
		},
		scroll: {
		  duration: 1000
		},
		auto: true,
		pagination: "#screenshots_pag"
	});
});