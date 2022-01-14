$(document).ready(function () {
	//sticky header
	function stickyHeader() {
		var height = jQuery(window).scrollTop();
		var header = jQuery(".site-header");

		if (height > 60) {
			header.addClass("sticky");
		} else {
			header.removeClass("sticky");
		}
	}

	jQuery(window).scroll(stickyHeader);
	stickyHeader();
	//bg cover
	function initBgCover(context) {
		if (!context) context = $('body');
		context.find('.bg-cover').each(function () {
			var holder = $(this);
			var image = holder.find('> img').hide();
			var imageSrc = image.prop('src');
			holder.css({
				backgroundImage: 'url(' + imageSrc + ')',
			});
		});
	}

	initBgCover();

	// objectFit
	objectFitImages();
	//header dropdown toggle
	$(".navbar-nav .dropdown .caret").on(
		"click",
		function () {
			$(this).next(".dropdown-menu").slideToggle();
		}
	);
	// slider-col-1
	$(".slider-col-1").slick({
		dots: true,
		infinite: false,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
	});

	// slider-col-2
	$(".slider-col-2").slick({
		dots: true,
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					adaptiveHeight: true,
				},
			},
		],
	});

	// slider-col-3
	$(".slider-col-3").slick({
		dots: true,
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					adaptiveHeight: true,
				},
			},
		],
	});

	// slider-col-4
	$(".slider-col-4").slick({
		dots: true,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					adaptiveHeight: true,
				},
			},
		],
	});

	//Your Options for individual/unique but similar slider
	var bannerSlider = [
		{
			breakpoint: 20000,
			settings: {
				speed: 3000,
			},
		},
	];

	$(".banner-slider.slider-col-1").slick(
		"slickSetOption",
		"responsive",
		bannerSlider,
		true
	);

	//cart-toggle

	$('.cart-btn').click(function () {
		$(this).next(".cart-panel").slideToggle();
	});

	//product slider
	$('.product-slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		verticalSwiping: true,
		asNavFor: '.product-slider-nav',
		responsive: [
			{
			  breakpoint: 767,
			  settings: {
				verticalSwiping: false
			  }
			}
		  ]
	});
	$('.product-slider-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.product-slider-for',
		vertical: true,
		verticalSwiping: true,
		arrows: false,
		focusOnSelect: true,
		responsive: [
			{
			  breakpoint: 767,
			  settings: {
				vertical: false,
				verticalSwiping: false,
			  }
			},
			{
			  breakpoint: 575,
			  settings: {
				slidesToShow: 4,
				vertical: false,
				verticalSwiping: false,
			  }
			}
		  ]
	});
});

