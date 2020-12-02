
  $(function(){
    $(window).scroll(function() {       
        if ($(document).scrollTop() > 50) {
            $('.header').addClass('scrolled');
          } else {
            $('.header').removeClass('scrolled');
          }

          if ($(this).scrollTop() > 600) {
            $('.js-scroll-top').fadeIn();
        } else {
            $('.js-scroll-top').fadeOut();
        }
      });

      // slider-news init
      $(".news-slider.owl-carousel").owlCarousel({
        center: false,
        items:1.1,
        dots: false,
        loop:true,
        margin:5,
        responsive:{
            768:{
                items:1.1
            },
            1024: {
              items: 1,
              nav: true
            }
        }
      });

      $('.js-scroll-top').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });


    // mobile menu toggling
    $('.menu-button').click(function(){
      $('.header-nav__inner').addClass('menu-show');
      $('body').addClass('overflow');
    });

    $('.menu-close').click(function(){
      $('.header-nav__inner').removeClass('menu-show');
      $('body').removeClass('overflow');
    });
  });