//==================================================================== ANIMATE COUNTER
$(document).ready(function () {
    var time = 2,
        cc = 1;
    $(window).scroll(function () {
        $('#counter').each(function () {
            var
                cPos = $(this).offset().top,
                topWindow = $(window).scrollTop();
            if (cPos < topWindow + 700) {
                if (cc < 2) {
                    $(".number").addClass("viz");
                    $('div').each(function () {
                        var
                            i = 1,
                            num = $(this).data('num'),
                            step = 1000 * time / num,
                            that = $(this),
                            int = setInterval(function () {
                                if (i <= num) {
                                    that.html(i);
                                } else {
                                    cc = cc + 2;
                                    clearInterval(int);
                                }
                                i++;
                            }, step);
                    });
                }
            }
        });
    });
//==================================================================== ANIMATE SCROLL
    $('a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return false;
    });


    $(window).scroll(function () {
        if ($(window).scrollTop() > 4400) {
            $("#navigation").css("background-color", "#009900");

        } else if ($(window).scrollTop() > 2950) {
            $("#navigation").css("background-color", "#cc9900");

        } else if ($(window).scrollTop() > 2200) {
            $("#navigation").css("background-color", "#7dbeb2");

        } else if ($(window).scrollTop() > 700) {
            $("#navigation").css("background-color", "#f38181");

        } else if ($(window).scrollTop() > 50) {
            $("#navigation").css("background-color", "#111");

        } else {
            $("#navigation").css("background-color", "rgba(15, 15, 15, 0.6)");
        }
    });

});
//====================================================================== SLIDERS

    $('.slider__photo').slick({
        infinite: true,
        fade: true,
        asNavFor: ".slider__text",
        prevArrow: '<button type="button" class="fa-arrow-left slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="fa-arrow-right slick-btn slick-next"></button>',
    });


    $('.slider__text').slick({
        infinite: true,
        fade: true,
        arrows: false,
        asNavFor: ".slider__photo",
    });


    $('.slider__recall').slick({
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        infinite: true,
    });
// =====================================================================

// $('a[href*="#"]')
//   // Remove links that don't actually link to anything
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .on('click', function(event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//       && 
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       // Does a scroll target exist?
//       if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000, function() {
//           // Callback after animation
//           // Must change focus!
//           var $target = $(target);
//           $target.trigger('focus');
//           if ($target.is(":focus")) { // Checking if the target was focused
//             return false;
//           } else {
//             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//             $target.trigger('focus'); // Set focus again
//           };
//         });
//       }
//     }
//   });

