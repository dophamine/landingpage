$(document).ready(function  () {

	var navWrap = $('.nav-btn'),
		navPills = $('.nav-pills');

	function heightDetect() {
		$(".main #main_head").css("height", $(window).height());
	}
	heightDetect();

	function widthDetect () {
		if ($(window).width() > 768) {
			navPills.css('display', 'block');
		} else {
			navPills.css('display', 'none');
		}
	}
	$(window).resize(function() {
		heightDetect();
		widthDetect();
	});

	// scroll-to-id
	var scs = { scrollSpeed: 900 };
	$("a[href*='#main_head']").mPageScroll2id(scs);
	$("a[href*='#proposal']").mPageScroll2id(scs);
	$("a[href*='#about']").mPageScroll2id(scs);
	$("a[href*='#garant']").mPageScroll2id(scs);
	$("a[href*='#contact']").mPageScroll2id(scs);

	// toggle navigator 
	var target = $(".navigator");
	target.fadeOut();
	$(window).on('scroll', function() {
		var head = $("#main_head");
		var triggerHeight = head.height(); 
		if ($(this).scrollTop() >= triggerHeight) {
			target.fadeIn('slow');
		} else {
			target.fadeOut('slow');
		}	
	});

	
	navWrap.click(function() {
		$(this).toggleClass('nav-active');
		if ($(this).hasClass('nav-active')) {
			navPills.fadeIn(300);
		} else {
			navPills.fadeOut(350);
		}
	});
});

$(window).load(function() { 
	$("#loaderInner").fadeOut(); 
	$("#loader").delay(400).fadeOut("slow"); 
});