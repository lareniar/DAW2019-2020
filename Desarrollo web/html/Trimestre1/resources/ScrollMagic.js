//Run Function when DOM is ready. 
$(function() {
	//Initialize Controller
	var scrollMagicController = new ScrollMagic.Controller({loglevel: 3});

	//Create a fadein animation for 1.5s
	var fadein_tween = TweenMax.to('#fadein-trigger > div', 1.0, {
		opacity: 1
	});
	//Create a fadeout animation for 1.5s on the element with id = "fadein-trigger"
	var fadeout_tween = TweenMax.to('#fadein-trigger > div', 1.0, {
		opacity: 0
	});
	//Create a new ScrollMagic Scene
	var fadein_scene = new ScrollMagic.Scene({
		triggerElement: '#fadein-trigger',
		reverse: true
	})
	.setTween(fadein_tween)
	.addIndicators({name: "1 (duration: 1.0 seconds)"})
	.addTo(scrollMagicController);
	//Create a second ScrollMagic Scene
	var fadeout_scene = new ScrollMagic.Scene({
		triggerElement: '#fadeout-trigger',
		reverse: true
	})
	.setTween(fadeout_tween)
	.addIndicators({name: "2 (duration: 1.0 seconds)"})
	.addTo(scrollMagicController);

	//Add debug fixed indicators
	//fadein_scene.addIndicators();
  //fadeout_scene.addIndicators();
});