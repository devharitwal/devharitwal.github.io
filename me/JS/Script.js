$(document).ready(function () {
	//designer para animation

	$("#designer").click(function () {
		$("#developer").toggle(); //hiding developer text
		$("#designer").toggleClass("designer-clicked"); //replacing classes
		$(".designer-para").toggleClass("designer-para-clicked"); //togglebetweenclasses
		$(".bird").toggleClass("bird-animation");
	});

	//developer para animations
	$("#developer").click(function () {
		$("#designer").toggle();
		$(".developer-para").toggleClass("developer-para-clicked");
		$(".bird").toggleClass("bird-animation");
	});

	//footer-links
	$("footer-home").click(function () {
		$("#footer-home").attr("href", "#");
	});
});
