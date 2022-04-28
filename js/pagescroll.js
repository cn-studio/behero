$(document).ready(function () {
    //header
    $(window).scroll(function () {
        var WindowScrollTop = $(window).scrollTop();
        var VisionHeight = $('.vision').height();
        var HeaderHeight = $('header ul').innerHeight();
        if (WindowScrollTop + HeaderHeight >= VisionHeight) {
            $('header ul').removeClass('menu-default').addClass('menu-scroll');
        } else {
            $('header ul').removeClass('menu-scroll').addClass('menu-default');
        }
    });
    //HeaderBtn
    $('.content-link').bind('click', function (e) {
        var HeaderHeight = $('header ul').innerHeight();
        var ContentLinkPosition = $($(this).attr('href')).offset().top;
        $('html, body').stop().animate({ scrollTop: ContentLinkPosition - HeaderHeight + 4 }, 1000);
    });
    //TopBtn
    $('.top').bind('click', function (e) {
        $('html, body').stop().animate({ scrollTop: 0 }, 1000);
    });
    //phone-btn
    $(window).scroll(function () {
        var WindowScrollTop = $(window).scrollTop();
        var HeaderHeight = $('header ul').innerHeight();
        var EventInfoTop = $('.event-info').offset().top;
        var OtherTop = $('.other').offset().top;
        if (WindowScrollTop + HeaderHeight >= EventInfoTop && WindowScrollTop + HeaderHeight <= OtherTop) {
            $('.phone-btn').removeClass('phone-btn-hide').addClass('phone-btn-show');
        } else {
            $('.phone-btn').removeClass('phone-btn-show').addClass('phone-btn-hide');
        }
    });
});