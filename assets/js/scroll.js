$(function() {

    $(window).scroll(function() {

        /*  var windowHeight = $(window).height();
         var windowWidth = $(window).width(); */

        //if (windowHeight <= 768 || windowWidth <= 400) {

        $('.logo').css("top", Math.max(50 - 0.05 * window.scrollY, 6) +
            "%");
        $('.logo').css("left", Math.max(50 - 0.05 * window.scrollY, 6) +
            "%");

        var mass = Math.max(100, 300 - 0.3 * $(this).scrollTop()) + 'px';

        $('.logo').css({ 'width': mass });


        /* if (windowHeight >= 300 || windowWidth >= 300) {
            $('.logo').css("top", Math.max(50 - 0.05 * window.scrollY, 6) +
                "%");
            $('.logo').css("left", Math.max(50 - 0.05 * window.scrollY, 6) +
                "%");  */



    });
});

/* $(window).scroll(function() {


    console.log(windowHeight);
    console.log(windowWidth);

}); */