$(document).ready(function () {
    //
    VisionHeight();
    VisionImg('m', 's', 'l');
    //
    $(window).resize(function () {
        VisionHeight();
        VisionImg('m', 's', 'l');
    });
    //function-setting
    function VisionHeight() {
        var ScreenContentHeight = document.body.clientHeight;
        var HeaderHeight = $('header ul').innerHeight();
        $('.vision').css({ 'margin-top': HeaderHeight }).height(ScreenContentHeight - HeaderHeight);
    }
    function VisionImg(SizeM, SizeS, SizeL) {
        var ScreenContentHeight = document.body.clientHeight;
        var ScreenContentWidth = document.body.clientWidth;
        if (ScreenContentHeight > ScreenContentWidth && ScreenContentWidth <= 1024) {
            $('.vision').css({ 'background-image': 'url(images/vision-' + SizeM + '.jpg)' });
        } else if (ScreenContentHeight > ScreenContentWidth * 2 && ScreenContentWidth <= 480) {
            $('.vision').css({ 'background-image': 'url(images/vision-' + SizeS + '.jpg)' });
        } else {
            $('.vision').css({ 'background-image': 'url(images/vision-' + SizeL + '.jpg)' });
        }
        console.log(ScreenContentHeight + '&' + ScreenContentWidth);
    }
});