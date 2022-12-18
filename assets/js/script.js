// loader
jQuery(document).ready(function() {
     setTimeout(() => {
      jQuery('#loading').fadeOut('slow'), function() {
        $(this).remove();
      };
    },2000);
});
// scroll-nav-start
var num = 500; //number of pixels before modifying styles

$(window).bind("scroll", function() {
    if ($(window).scrollTop() > num) {
        $(".navbar").addClass("fixed");
        $(".navbar").addClass("bg-light");   
        $(".navbar").addClass("shadow");   
    } else {
        $(".navbar").removeClass("bg-light");
        $(".navbar").removeClass("shadow");
        $(".navbar").removeClass("fixed");
    }
});
// scroll-nav-end
// portfolio
(function($) {
  'use strict';

  $(function() {
		$('.portfolio-item').isotope({
			itemSelector: '.item',
			layoutMode: 'fitRows'
		 });
		 $('.portfolio-menu ul li').click(function(){
         	$('.portfolio-menu ul li').removeClass('active');
         	$(this).addClass('active');

         	var selector = $(this).attr('data-filter');
         	$('.portfolio-item').isotope({
         		filter:selector
         	});
         	return  false;
         });
			 $(document).ready(function() {
			 var popup_btn = $('.popup-btn');
			 popup_btn.magnificPopup({
				 type : 'image',
				 gallery : {
					enabled : true
				 }
			 });
         });
  });

}(jQuery));
// slider--
$(document).ready(function(){
	$('.autoplay-testimonial').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:'<span class="prev_arrow"><i class="bi bi-dash-lg fs-1"></i></span>',
  nextArrow:'<span class="next_arrow"><i class="bi bi-dash-lg fs-1"></i></span>',
  dots:false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
	 {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});
});
// AOS initialized
AOS.init();
$(window).on("scroll",function(){
  AOS.init({
    offset:120,
  });
})