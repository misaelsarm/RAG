$(function() {
    let windowHeight = $(window).height();
    $(window).scroll(function() {
        if ($(window).width() < 800) {
            let ragLogo = document.getElementById('logo');
            ragLogo.style.top = '5%';
            ragLogo.style.left = '18%';
            ragLogo.style.width = '100px';
        } else {
            $('.logo').css("top", Math.max(50 - 0.1 * window.scrollY, 6) +
                "%");
            $('.logo').css("left", Math.max(50 - 0.1 * window.scrollY, 6) +
                "%");

            var mass = Math.max(100, 300 - 0.5 * $(this).scrollTop()) + 'px';

            $('.logo').css({ 'width': mass });
        }
    });
});