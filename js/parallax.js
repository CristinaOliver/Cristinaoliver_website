function castParallax() {

	var opThresh = 350;
	var opFactor = 750;

/*
	$(window).scroll(function(){
		var windowScroll = $(window).scrollTop();
		
		$('.keyart_layer.parallax').each(function(){
			var $layer = $(this);
			var yPos = -(windowScroll * $layer.data('speed') / 100);
			$layer.css({
				"transform" : "translate3d(0px, " + yPos + "px, 0px)"
			});

		});


		var backgroundOpacity = (windowScroll > opThresh ? (windowScroll - opThresh) / opFactor : 0);
		$('#keyart-scrim').css('opacity', backgroundOpacity);
	});

*/
	window.addEventListener("scroll", function(event){

		var top = this.pageYOffset;

		var layers = document.getElementsByClassName("parallax");
		var layer, speed, yPos;
		for (var i = 0; i < layers.length; i++) {
			layer = layers[i];
			speed = layer.getAttribute('data-speed');
			var yPos = -(top * speed / 100);
			layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

		}
	});


}