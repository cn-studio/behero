$(document).ready(function () {
    $(window).scroll(function () { 
        var WindowScrollTop = $(this).scrollTop();
        var HeaderHeight = $('header ul').height();
        var EventInfoPosition = $('.event-info').offset().top;
        if (WindowScrollTop >= EventInfoPosition - HeaderHeight - 1) {
            $('.event-info').removeClass('default').addClass('black');
        } else {
            $('.event-info').removeClass('black').addClass('default');
        }
    });
});