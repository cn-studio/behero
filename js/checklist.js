$(document).ready(function () {
    //BtnStatus
    $('.list-content-check-text').bind('click', function (e) {
        var ListStatus = $(this).data('status');
        if (ListStatus == 'on') {
            $(this).data('status', 'off');
            $(this).addClass('list-content-check-text-default').removeClass('list-content-check-text-active');
        } else {
            $(this).data('status', 'on');
            $(this).addClass('list-content-check-text-active').removeClass('list-content-check-text-default');
        }
    });
    //ListSumContent
    $('.list-content-check-text').bind('click', function (e) {
        var ListStatusOnLength = $('div .list-content-check-text-active').length;
        if (ListStatusOnLength == '1') {
            SumContent('25', '你有25%原創潛力，加油！');
            ListLinkBtnStatus('btn-specail', 'btn-disable', 'btn-special', 'https://www.symskan.com/?utm_source=hero&utm_medium=LP_click&utm_id=SYM_hero');
            ScoreCircleAnimation('animation-on-04', 'animation-on-03', 'animation-on-02', 'animation-off', 'animation-on-01');
        } else if (ListStatusOnLength == '2') {
            SumContent('50', '好棒，你有50%原創潛力！');
            ListLinkBtnStatus('btn-specail', 'btn-disable', 'btn-special', 'https://www.symskan.com/?utm_source=hero&utm_medium=LP_click&utm_id=SYM_hero');
            ScoreCircleAnimation('animation-on-04', 'animation-on-03', 'animation-on-01', 'animation-off', 'animation-on-02');
        } else if (ListStatusOnLength == '3') {
            SumContent('75', '哇！你有75%原創潛力！');
            ListLinkBtnStatus('btn-specail', 'btn-disable', 'btn-special', 'https://www.symskan.com/?utm_source=hero&utm_medium=LP_click&utm_id=SYM_hero');
            ScoreCircleAnimation('animation-on-04', 'animation-on-02', 'animation-on-01', 'animation-off', 'animation-on-03');
        } else if (ListStatusOnLength == '4') {
            SumContent('100', '太厲害了，看來你是原創英雄！');
            ListLinkBtnStatus('btn-specail', 'btn-disable', 'btn-special', 'https://www.symskan.com/?utm_source=hero&utm_medium=LP_click&utm_id=SYM_hero');
            ScorePulse(100);
            ScoreCircleAnimation('animation-on-03', 'animation-on-02', 'animation-on-01', 'animation-off', 'animation-on-04');
        } else {
            SumContent('0', '你確定？再試試看！');
            ListLinkBtnStatus(null, 'btn-special', 'btn-disable', null);
            ScoreCircleAnimation('animation-on-04', 'animation-on-03', 'animation-on-01', 'animation-01', 'animation-off');
        }
    });
    //ListScore
    $('.list-content-check-text').bind('click', function (e) {
        var ListStatusOnLength = $('div .list-content-check-text-active').length;
        var ThisBtnStatus = $(this).hasClass('list-content-check-text-active');
        if (ListStatusOnLength == '1' && ThisBtnStatus == true) {
            ScorePulse(25);
        } else if (ListStatusOnLength == '2' && ThisBtnStatus == true) {
            ScorePulse(50);
        } else if (ListStatusOnLength == '3' && ThisBtnStatus == true) {
            ScorePulse(75);
        } else if (ListStatusOnLength == '4' && ThisBtnStatus == true) {
            ScorePulse(100);
        } else if (ListStatusOnLength == '1' && ThisBtnStatus == false) {
            ScoreMinus(25);
        } else if (ListStatusOnLength == '2' && ThisBtnStatus == false) {
            ScoreMinus(50);
        } else if (ListStatusOnLength == '3' && ThisBtnStatus == false) {
            ScoreMinus(75);
        } else if (ListStatusOnLength == '4' && ThisBtnStatus == false) {
            ScoreMinus(100);
        } else {
            ScoreMinus(0);
        }
    });
    //function-setting
    function ScoreCircleAnimation(RemoveName01, RemoveName02, RemoveName03, RemoveName04, AddName) {
        $('.list-content-score-outer').removeClass(RemoveName01).removeClass(RemoveName02).removeClass(RemoveName03).removeClass(RemoveName04).addClass(AddName);
        $('.list-content-score-outer-inner').removeClass(RemoveName01).removeClass(RemoveName02).removeClass(RemoveName03).removeClass(RemoveName04).addClass(AddName);
    }
    //function-setting
    function SumContent(ImgName, Text) {
        $('.list-sum-content').children('img').attr('src', 'images/battery' + ImgName + '.svg');
        $('.list-sum-content').children('p').html('潛力評測：' + Text);
        $('.list-sum').stop().css({ 'animation': 'sum-scale-on 0.5s linear alternate-reverse' });
        setTimeout(() => {
            $('.list-sum').css({ 'animation': 'sum-scale-off 0.5s linear alternate-reverse' });
        }, 500);
    }
    //function-setting
    function ListLinkBtnStatus(RemoveName01, RemoveName02, AddName, Link) {
        $('.list-sum').children('a').removeClass(RemoveName01).removeClass(RemoveName02).addClass(AddName);
        $('.list-sum').children('a').attr('href', Link);
    }
    //function-setting
    function ScorePulse(NumberSum) {
        var ScoreContent = parseInt($('.list-content-score-outer-inner').children('p').text());
        var ScoreTotal = setInterval(() => {
            $('.list-content-score-outer-inner').children('p').html(ScoreContent + '<span>%</span>');
            ScoreContent++
            if (ScoreContent == NumberSum) {
                $('.list-content-score-outer-inner').children('p').html(NumberSum + '<span>%</span>');
                clearInterval(ScoreTotal);
            }
        }, 10);
    }
    //function-setting
    function ScoreMinus(NumberSum) {
        var ScoreContent = parseInt($('.list-content-score-outer-inner').children('p').text());
        var ScoreTotal = setInterval(() => {
            $('.list-content-score-outer-inner').children('p').html(ScoreContent + '<span>%</span>');
            ScoreContent--
            if (ScoreContent == NumberSum) {
                $('.list-content-score-outer-inner').children('p').html(NumberSum + '<span>%</span>');
                clearInterval(ScoreTotal);
            }
        }, 10);
    }
});