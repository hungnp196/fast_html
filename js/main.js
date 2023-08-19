

(function ($) {
    "use strict";
    
    /*Document is Raedy */
    $(document).ready(function () {

        /*========== MENU ==========*/
        
        $(function () {
            function toggleNavbarMethod() {
                if ($(window).width() > 992) {
                    
                    $('.dropdown')
                        .on('mouseover', function () {
                            $(this).addClass('open');
                            $('b', this).toggleClass("caret caret-up");
                        })

                    .on('mouseout', function () {
                        $(this).removeClass('open');
                        $('b', this).toggleClass("caret caret-up");
                    });


                } else {
                    $('.dropdown').off('mouseover').off('mouseout');
                    $('.dropdown-toggle')

                    .on('click', function (e) {
                        $('b', this).toggleClass("caret caret-up");
                    });

                }
            }
            toggleNavbarMethod();
            $(window).on("resize", (toggleNavbarMethod));

            $(".navbar-toggle").on("click", function () {
                $(this).toggleClass("active");
            });
        });

        /*========== MOBILE MENU ==========*/
        // $('.mobile_menu_btn').jPushMenu({
        //     closeOnClickLink: false
        // });
        // $('.dropdown-toggle').dropdown();

        $('.moblie_menu_btn').click(function(event) {
            $('#main_menu').addClass('expand');
            $('.mobile_menu_close_btn').addClass('expand');
            $('.body_overlay').css({
                display: 'block'
            });
        });
        $('.mobile_menu_close_btn').click(function(event) {
            $('#main_menu').removeClass('expand');
            $('.mobile_menu_close_btn').removeClass('expand');
            $('.body_overlay').css({
                display: 'none'
            });
        });

        /*========== HOME MAIN SLIDE ==========*/
        $('.home_main_slider').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: true
        });

        /*========== HOME PRODUCT SLIDE ==========*/
        $('#home_product_feature_slide_1').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: true
        });

        $('#home_product_feature_slide_2').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: true
        });

        $('#home_product_feature_slide_3').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: true
        });

        /*========== HOME TESIMONIAL SLIDE ==========*/
        $('.testomorial_item').matchHeight();
        if($(window).width() >= 768 && $(window).width() <= 1008) {
            $('#home_testimonial_customer_slide').slick({
                slidesToShow: 2,
                arrows: false,
                dots: false,
                autoplay: true,
                autoplaySpeed: 5000,
                
            });
        } 
        if($(window).width() <= 425) {
            $('#home_testimonial_customer_slide').slick({
                slidesToShow: 1,
                arrows: false,
                dots: false,
                autoplay: true,
                autoplaySpeed: 5000,
                
            });
        }

        $('#home_testimonial_client_slide').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: false,
            slidesToShow: 5,
            responsive: [
                    {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 4,
                    }
                    },
                    {
                    breakpoint: 426,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

        $('#home_testimonial_award_slide').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: false,
            slidesToShow: 5,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 426,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /*========== PRODUCT MAIN SLIDE ==========*/
        $('.fbo_slider_section .fbo_slider').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: true
        });
        
         /*========== PRODUCT TESIMONIAL SLIDE ==========*/
        $('.testomorial_item').matchHeight();
        if($(window).width() >= 768 && $(window).width() <= 1008) {
            $('#product_customer_testimonial_slide').slick({
                slidesToShow: 2,
                arrows: false,
                dots: false,
                autoplay: true,
                autoplaySpeed: 5000,
                
            });
        } 
        if($(window).width() <= 425) {
            $('#product_customer_testimonial_slide').slick({
                slidesToShow: 1,
                arrows: false,
                dots: false,
                autoplay: true,
                autoplaySpeed: 5000,
                
            });
        }

        /*========== TAB TOGGLE ==========*/
        $(".tabs_cat_list .nav-item button").on('click',function(event) {

            var tab_id = $(this).attr('data-bs-target');
            var current_show = $('.tab-content-prod').find('.show');
            var current_tab_cat = $('.tabs_cat_list').find('.active');

            current_tab_cat.removeClass('active');
            $(this).addClass('active');
            current_show.removeClass('show');
            $(tab_id).addClass('show');

        });

        /*========== BACK TO TOP ==========*/
        var amountScrolled = 500;
        var back_to_top = $('#back_to_top');
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > amountScrolled) {
                back_to_top.addClass('active');
            } else {
                back_to_top.removeClass('active');
            }
        });
        back_to_top.on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            return false;
        });

    });
})(jQuery);