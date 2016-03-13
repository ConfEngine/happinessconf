(function() {
	"use strict";

	FastClick.attach(document.body);

	$('#menu').click(function() {
		$('#nav, #close').fadeIn(300);
		$('#menu').fadeOut(300);
		$('html, body').css('overflow-y', 'hidden');
		$('body').bind('touchmove', function(e){e.preventDefault()});
	});

	var closeNav = function() {
		$('#menu').fadeIn(300);
		$('#nav, #close').fadeOut(300);
		$('html, body').css('overflow-y', 'scroll');
		$('body').unbind('touchmove');
	};

	$('#close').click(function() {
		closeNav();
	});

	$('.nav-link').click(function() {
		closeNav();
		var id = $(this).attr('data-nav');
		$("html, body").animate({
        	scrollTop: $('#'+id).offset().top
        }, 600);
	})
})();