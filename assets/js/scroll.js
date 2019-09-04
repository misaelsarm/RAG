$(function() {
    let windowHeight = $(window).height();


    $(window).scroll(function() {

        if ($(window).height() >= 667) {

            console.log(windowHeight);
            $('.logo').css("top", Math.max(50 - 0.1 * window.scrollY, 6) +
                "%");
            $('.logo').css("left", Math.max(50 - 0.1 * window.scrollY, 6) +
                "%");

            var mass = Math.max(100, 300 - 0.3 * $(this).scrollTop()) + 'px';

            $('.logo').css({ 'width': mass });

        }

        if ($(window).height() < 813) {
            let ragLogo = document.getElementById('logo');
            ragLogo.style.top = '7%';
            ragLogo.style.left = '12%';
            ragLogo.style.width = '100px';
        }


    });
});

/* $(window).scroll(function() {


    console.log(windowHeight);
    console.log(windowWidth);

}); */