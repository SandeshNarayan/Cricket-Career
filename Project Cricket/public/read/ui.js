function handleAffix(resizeWidth) {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();
    var topRowHeight = 48;
    var footerHeight = 80;

    $('.fm-affix').each(function () {
        if (resizeWidth) {
            $(this).css('width', $(this).parent().width());
        }

        if ($('#fake-height').height() < $(this).height()) {
            $('#fake-height').css('height', $(this).height());
        }

        var y = topRowHeight - scrollTop;
        var bottom = windowHeight - $(this).height();

        // fine tuning: footer management
        if (scrollTop + windowHeight >= documentHeight - footerHeight) {
            bottom -= (scrollTop + windowHeight - documentHeight + footerHeight);
        }

        if (y < topRowHeight) {
            if (windowHeight < $(this).height() + 10) {
                y = y > bottom ? y : bottom;
            } else {
                y = topRowHeight;
            }
        }

        $(this).css('top', y + 'px');
    });
}

function initRating() {
    $("#star1").on("mouseenter", function () { $(".rate-1").addClass("rate-light"); }).on("mouseleave", function () { $(".rate-1").removeClass("rate-light"); });
    $("#star2").on("mouseenter", function () { $(".rate-2").addClass("rate-light"); }).on("mouseleave", function () { $(".rate-2").removeClass("rate-light"); });
    $("#star3").on("mouseenter", function () { $(".rate-3").addClass("rate-light"); }).on("mouseleave", function () { $(".rate-3").removeClass("rate-light"); });
    $("#star4").on("mouseenter", function () { $(".rate-4").addClass("rate-light"); }).on("mouseleave", function () { $(".rate-4").removeClass("rate-light"); });
    $("#star5").on("mouseenter", function () { $(".rate-5").addClass("rate-light"); }).on("mouseleave", function () { $(".rate-5").removeClass("rate-light"); });
}

function initReplay(isPreview = false) {

    if (!isPreview) { // autodetect size
        var w = $('#rplcontainer').width();
        var h = 600;

        if ('ontouchstart' in window || navigator.msMaxTouchPoints) {
            var ratio = 1; //window.devicePixelRatio || 1;
            w = screen.availWidth * ratio - 40;
            h = screen.availHeight * ratio - 20;
            if (h > w)
                h = w;
        }

        parameters.screenHeight = h;
        parameters.screenWidth = w;
    }

    initFM();
}
