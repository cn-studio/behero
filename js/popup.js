$(document).ready(function () {
    $('.popup-btn').bind('click', function (e) {
        if ($('body').hasClass('scroll-hidden')) {
            $('body').removeClass('scroll-hidden');
            $('.popup').removeClass('fadein').addClass('fadeout');
            return false;
        } else {
            $('body').addClass('scroll-hidden');
            $('.popup').removeClass('fadeout').addClass('fadein');
            return false;
        }
    });

    $('.popup').bind('click', function (e) {
        $(this).removeClass('fadein').addClass('fadeout');
        $('body').removeClass('scroll-hidden');
    });
});