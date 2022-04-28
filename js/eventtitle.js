$(document).ready(function () {
    //event-title-margin
    EventTitleMargin();
    $(window).resize(function () { 
        EventTitleMargin();
    });
    //event-title-line
    $(window).scroll(function () {
        var HeaderHeight = $('header ul').height();
        var EventTitleOffsetTop = $('.event-title').offset().top;
        var WindowScroll = $(window).scrollTop();
        if (WindowScroll >= (EventTitleOffsetTop / 2) + HeaderHeight) {
            EventTitleLine('text-line-default', 'text-line-active');
        } else {
            EventTitleLine('text-line-active', 'text-line-defalut');
        }
    });
    //function-setting
    function EventTitleLine(RemoveName, AddName) {
        $('.event-title-content h1').children('span').removeClass(RemoveName).addClass(AddName);
    }
    //function-setting
    function EventTitleMargin() {
        var EventTitleHeight = $('.event-title').innerHeight();
        $('.event-title').css({'margin-top':EventTitleHeight/2 * -1});
    }
});