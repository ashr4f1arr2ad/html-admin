/*  ---------------------------------------------------
    Template Name: Dreams
    Description: Dreams wedding template
    Author: Colorib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    // $(window).on('load', function () {
    //     $(".loader").fadeOut();
    //     $("#preloder").delay(200).fadeOut("slow");
    // });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Testimonial Slider
	--------------------*/
    $('.testimonial__slider').owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 3,
        margin: 30,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });


})(jQuery);