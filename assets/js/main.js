$( document ).ready(function() {
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
						breakpoint: 992,
						settings: {
							slidesToShow: 2,
						},
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							adaptiveHeight: true,
						},
					},
				],
			});

			//Your Options for individual/unique but similar slider
			var yourOptions = [
				{
					breakpoint: 20000,
					settings: {
						autoplay: true,
						autoplaySpeed: 1000,
						fade: true,
					},
				},
			];

			$(".yourSlider").slick(
				"slickSetOption",
				"responsive",
				yourOptions,
				true
			);

            //cart-toggle

            $('.cart-btn').click(function(){
                $(this).next(".cart-panel").slideToggle();
            });
});

