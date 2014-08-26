$(document).ready(function() {

	$("h1").fitText(1.2);
	$("h2").fitText(2);
	$("h3").fitText(3.2);
	$("div").fitText(1.0);

	function resize() {
		//
	}

	resize();

	$(document).resize(resize);

});