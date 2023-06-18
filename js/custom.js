/////////////////////////////////
// humberger menu break point
/////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
	// @media screen and (max-width: 767px) と同じ
	var mql = window.matchMedia('screen and (max-width: 767px)');

	function checkBreakPoint(mql) {
		if (mql.matches) {
			// スマホ向け
			$('#nav').addClass('nav_sp').removeClass('nav_pc');
		} else {
			// PC向け
			$('#nav').addClass('nav_pc').removeClass('nav_sp');
		}
	}
	// ブレイクポイントの瞬間に発火
	mql.addListener(checkBreakPoint);
	// 初回チェック
	checkBreakPoint(mql);
});

$(function () {
	$('.menu_open').click(function () {
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$(".nav_sp").slideDown("slow");
		} else {
			$(".nav_sp").slideUp("slow");
		}
	})
	$('.nav_sp a[href]').on('click', function (event) {
		$('.menu_open').trigger('click');
	});

	$('a[href^="#"]:not(a.noscroll)').click(function () {
		var speed = 500;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({ scrollTop: position }, speed, "swing");
		return false;
	});

	var header = $('.header_wrap').height();
	var section_02 = $('.section_02').offset();
	$(window).scroll(function () {
		if ($(window).scrollTop() >= section_02.top + header) {
			$('.header_wrap').addClass('active');
		} else {
			$('.header_wrap').removeClass('active');
		}
	});

	var mySwiper = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});
});
